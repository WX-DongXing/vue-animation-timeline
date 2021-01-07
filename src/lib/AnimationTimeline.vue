<template>
  <div class="animation-timeline">
    <!-- S header area -->
    <header>
      <div class="animation-timeline__icons">
        <svg-icon :icon-name="isPlay ? 'pause' : 'play'" @click="handlePlay" />
        <svg-icon icon-name="reload" style="font-size: 20px" @click="handleReset" />

        <span class="animation-timeline__divider"></span>

        <div class="animation-timeline__control">
          <svg-icon icon-name="rollback" @click="handleBack" />
          <svg-icon :icon-name="isRepeat ? 'sync' : 'swap-right'" @click="handleRepeat" />
        </div>
      </div>
      <!-- / icon area -->

      <div class="animation-timeline__title">
        <span>{{ timeScale }}</span>
        <span>{{ maxTimeScale }}</span>
      </div>
      <!-- / timescale area -->

    </header>
    <!-- E header area -->

    <!-- S content area -->
    <section class="animation-timeline__content">
      <div class="animation-timeline__left">
        <div class="animation-timeline__menu">
          <div class="animation-timeline__max">
            <span>总时长：</span>
            <input type="text" v-model.trim="maxTimeScale">
          </div>

          <div class="animation-timeline__sign">
            <div>
              <svg-icon icon-name="eye-close" />
              <svg-icon icon-name="lock" />
            </div>

            <div>
              <svg-icon icon-name="activity" />
              <svg-icon icon-name="layers" />
            </div>
          </div>
        </div>

        <div class="animation-timeline__widgets" ref="container">
          <widget
            :time="time"
            v-for="option in options"
            :option="option"
            :key="option[key]"
            @timeUpdate="handleTimeUpdate"
            @update="handleUpdate"
          />
        </div>
      </div>
      <!-- E widget control panel -->

      <div class="animation-timeline__right">
        <div id="painter"></div>
      </div>
      <!-- E timeline control panel  -->
    </section>
    <!-- E content area -->

  </div>
</template>

<script>
import anime from 'animejs';
import dayjs from 'dayjs';
import { Canvas } from '@antv/g-canvas';
import {
  defineComponent, onMounted, getCurrentInstance,
  reactive, computed, onUnmounted, toRefs,
} from 'vue-demi';
import { throttledWatch } from '@vueuse/core';
import clonedeep from 'lodash.clonedeep';
import useResize from '@/utils/useResize.ts';
import Transition from '@/models/Transition';
import {
  OFFSET, TICK_MIN_LENGTH, TICK_MAX_LENGTH,
  ANIMATION_OPTIONS, DEFAULT_FIELDS,
} from '@/utils/constant.ts';
import SvgIcon from '@/components/SvgIcon.vue';
import Widget from '@/components/Widget.vue';

export default defineComponent({
  name: 'AnimationTimeline',
  components: {
    SvgIcon,
    Widget,
  },
  props: {
    widgets: {
      type: Array,
      default: () => ([]),
    },
    fields: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const ctx = instance.ctx || instance;
    const { widgets, fields } = toRefs(props);
    const { rect } = useResize();
    const fieldMap = reactive({
      ...DEFAULT_FIELDS, ...fields.value,
    });
    const options = reactive(
      clonedeep(widgets.value).map((widget) => reactive(
        { ...widget, transition: new Transition(widget, fieldMap) },
      )),
    );
    // set unique identification field
    ctx.$animateParams.keyField = fieldMap.key;

    const state = reactive({
      key: fieldMap.key,
      time: 0,
      startTime: 0,
      calcStartTime: 0,
      endTime: 10000,
      calcEndTime: 10000,
      maxTime: 10000,
      isPlay: false,
      isRepeat: false,
      container: null,
    });

    const element = reactive({
      animate: null,
      painter: null,
      timeRect: null,
      timelineRect: null,
      leftPoint: null,
      centerBar: null,
      rightPoint: null,
      playBarTriangle: null,
      playBarLine: null,
      timelineAxis: null,
      timelineGroup: null,
      axisTicks: [],
    });

    const record = reactive({
      leftPosition: 0,
      startTime: 0,
      centerAnchor: 0,
      endTime: 0,
      rightPosition: 0,
      offset: 0,
      scroll: 0,
      allowLeftMove: false,
      allowRightMove: false,
      allowCenterMove: false,
      allowPlayBarMove: false,
    });

    const unitTickCount = computed(() => Math.trunc(state.maxTime / 1000));
    const unitLength = computed(() => (rect.width - 20) / state.maxTime);
    const unitSecondLength = computed(() => unitLength.value * 1000);
    const calcMaxTime = computed(
      () => state.maxTime / ((state.endTime - state.startTime) / state.maxTime),
    );
    const scaleRate = computed(() => (state.endTime - state.startTime) / state.maxTime);
    const timeScale = computed(() => dayjs(state.time).format('mm:ss:SSS'));
    const maxTimeScale = computed({
      get: () => dayjs(state.maxTime).format('mm:ss:SSS'),
      set: (val) => {
        const pattern = /^([0-5][0-9]):([0-5][0-9]):([0-9][0-9][0-9])$/;
        if (pattern.test(val)) {
          const [, mm, ss, SSS] = val.match(pattern);
          const maxTimeValue = +mm * 60 * 1000 + +ss * 1000 + +SSS;
          state.maxTime = maxTimeValue;
          if (+maxTimeValue <= state.endTime) {
            if (state.startTime >= +maxTimeValue) {
              state.startTime = 0;
            }
            state.endTime = +maxTimeValue || 1000;
          }
        }
      },
    });

    const initCanvas = () => {
      const { width, height } = document.getElementById('painter').getBoundingClientRect();
      // init painter
      element.painter = new Canvas({
        container: 'painter',
        width,
        height,
      });

      element.timelineGroup = element.painter.addGroup();

      element.timeRect = element.painter.addShape('rect', {
        name: 'timeBar',
        attrs: {
          x: 0,
          y: 0,
          width,
          height: 20,
          fill: '#F5F5F6',
        },
      });

      element.leftPoint = element.painter.addShape('circle', {
        attrs: {
          x: 10,
          y: 10,
          r: 6,
          fill: '#757575',
          lineWidth: 0,
          cursor: 'ew-resize',
        },
      });

      element.rightPoint = element.painter.addShape('circle', {
        attrs: {
          x: width - 10,
          y: 10,
          r: 6,
          fill: '#757575',
          lineWidth: 0,
          cursor: 'ew-resize',
        },
      });

      element.centerBar = element.painter.addShape('rect', {
        name: 'timeBar',
        attrs: {
          x: 10,
          y: 4,
          width: width - 20,
          height: 12,
          fill: '#bdbdbd',
          lineWidth: 0,
          cursor: 'move',
        },
      });

      element.timelineRect = element.painter.addShape('rect', {
        name: 'timelineBar',
        attrs: {
          x: 0,
          y: 20,
          width,
          height: 36,
          fill: '#eeeeee',
        },
      });

      element.playBarTriangle = element.painter.addShape('marker', {
        name: 'playBarTriangle',
        attrs: {
          x: 10,
          y: 30,
          r: 8,
          fill: '#1890FF',
          lineWidth: 0,
          cursor: 'move',
          symbol: 'triangle-down',
        },
      });

      element.playBarLine = element.painter.addShape('line', {
        name: 'playBarLine',
        attrs: {
          x1: 10,
          y1: 30,
          x2: 10,
          y2: height,
          stroke: '#1890FF',
          lineWidth: 1,
          cursor: 'move',
        },
      });

      element.timelineAxis = element.painter.addShape('line', {
        name: 'playBarLine',
        attrs: {
          x1: 10,
          y1: 48,
          x2: width - 10,
          y2: 48,
          stroke: '#212121',
          lineWidth: 1,
          cursor: 'move',
        },
      });
    };

    const initAnimate = () => {
      element.animate = anime.timeline({
        delay: 0,
        duration: state.maxTime || 10000,
        direction: 'normal',
        easing: 'linear',
        loop: state.isRepeat,
        autoplay: false,
        update: (params) => {
          state.time = params.progress / 100 * state.maxTime;
        },
        complete: () => {
          state.isPlay = false;
        },
      }).add({ opacity: 0 });
    };

    const setAnimateOption = () => {
      if (element.animate) {
        element.animate.duration = state.maxTime;
        element.animate.loop = state.isRepeat;
        ctx.$animateParams.maxTime = state.maxTime;
        ctx.$animateParams.isRepeat = state.isRepeat;
      }
      options.forEach((option) => {
        Object.assign(option.transition, { needUpdateProp: true });
      });
      emit('onUpdate', options);
    };

    const resizeDecorate = () => {
      const { width, height } = rect;
      // change painter size
      element.painter.changeSize(width, height);

      // set time rect width
      element.timeRect.attr('width', width);

      // set timeline rect width
      element.timelineRect.attr('width', width);

      // set time line axis width
      element.timelineAxis.animate({
        x1: 10,
        y1: 48,
        x2: width - 10,
        y2: 48,
      }, ANIMATION_OPTIONS);
    };

    const resizeScaleBar = () => {
      const { width } = rect;
      const unitWidth = (width - 20) / state.maxTime;
      record.leftPosition = state.startTime * unitWidth + 10;
      record.rightPosition = state.endTime * unitWidth + 10;

      // set left point x position
      element.leftPoint.animate({
        x: record.leftPosition,
      }, ANIMATION_OPTIONS);

      // set right point x position
      element.rightPoint.animate({
        x: record.rightPosition,
      }, ANIMATION_OPTIONS);

      // set center bar width, x
      element.centerBar.animate({
        width: record.rightPosition - record.leftPosition,
        x: record.leftPosition,
      }, ANIMATION_OPTIONS);
    };

    const resizePlayBar = () => {
      const { width, height } = rect;
      // set play bar triangle x
      element.playBarTriangle.animate({
        x: ((width - 20) / state.maxTime) * state.time / scaleRate.value + 10 - record.offset,
      }, ANIMATION_OPTIONS);

      // set play bar line x
      element.playBarLine.animate({
        x1: ((width - 20) / state.maxTime) * state.time / scaleRate.value + 10 - record.offset,
        y1: 30,
        x2: ((width - 20) / state.maxTime) * state.time / scaleRate.value + 10 - record.offset,
        y2: height,
      }, ANIMATION_OPTIONS);
    };

    const calcEffect = () => {
      record.offset = (rect.width - 20) / scaleRate.value * (state.startTime / state.maxTime);
      const timeBuffer = (record.offset / (unitSecondLength.value / scaleRate.value)) * 1000;
      state.calcStartTime = state.startTime * scaleRate.value + timeBuffer;
      state.calcEndTime = state.endTime * scaleRate.value + timeBuffer;
    };

    // draw timeline tick
    const drawTick = () => {
      element.axisTicks.forEach((axis) => {
        axis.remove(true);
      });
      element.axisTicks = [];

      for (const index in new Array(unitTickCount.value + 1).fill(null)) {
        const min = unitSecondLength.value / scaleRate.value <= TICK_MIN_LENGTH;
        const max = unitSecondLength.value / scaleRate.value >= TICK_MAX_LENGTH;
        const minCount = Math.trunc(TICK_MIN_LENGTH / (unitSecondLength.value / scaleRate.value));
        if (min && minCount > 0 && index % (minCount * 2) !== 0 && +index !== +unitTickCount.value) {
          continue;
        }
        const axisTick = element.painter.addShape('line', {
          name: 'axisTick',
          attrs: {
            x1: 10 + (index * unitSecondLength.value) / scaleRate.value - record.offset,
            y1: 40,
            x2: 10 + (index * unitSecondLength.value) / scaleRate.value - record.offset,
            y2: 48,
            stroke: '#212121',
            lineWidth: 1,
          },
        });

        const axisText = element.painter.addShape('text', {
          attrs: {
            x: (index >= 10 ? 0 : 5) + (
              index * unitSecondLength.value
            ) / scaleRate.value - record.offset,
            y: 40,
            fontFamily: 'PingFang SC',
            text: (index > 0 && index % 60 === 0) ? `${index / 60}m` : `${index}s`,
            fontSize: 12,
            fill: '#212121',
          },
        });

        let smallAxisTick = [];
        if (max) {
          smallAxisTick = new Array(6).fill(null).map((__, i) => element.painter.addShape('line', {
            name: 'axisTick',
            attrs: {
              x1: 10 + (
                index * unitSecondLength.value + i * (unitSecondLength.value / 5)
              ) / scaleRate.value - record.offset,
              y1: 42,
              x2: 10 + (
                index * unitSecondLength.value + i * (unitSecondLength.value / 5)
              ) / scaleRate.value - record.offset,
              y2: 48,
              stroke: '#212121',
              lineWidth: 1,
            },
          }));
        }

        element.axisTicks.push(...[axisTick, axisText, ...smallAxisTick]);
      }
    };

    // set play bar to front
    const setPlayBarToFront = () => {
      element.playBarTriangle.toFront();
      element.playBarLine.toFront();
    };

    // draw anchors
    const drawAnchors = () => {
      // clear timeline group all children
      element.timelineGroup.clear();
      const { width } = rect;
      const reduceList = options.reduce((acc, cur, index, array) => {
        const pre = array[index - 1];
        if (!pre) {
          acc.totalList.push(0);
        } else {
          acc.total += (pre.transition.isExpanded ? pre.transition.animations.length : 0);
          acc.totalList.push(acc.total);
        }
        return acc;
      }, { totalList: [], total: 0 });

      options.forEach(({ transition: { isExpanded, animations } }, i) => {
        const allAnchors = animations.flatMap((animation) => animation.anchors);
        const overviewAnchors = Array.from(new Set(allAnchors.map((anchor) => anchor.time)));
        const { totalList } = reduceList;
        element.timelineGroup.addShape('rect', {
          name: 'anchorRect',
          attrs: {
            x: 0,
            y: (57 + i * 33) + (totalList[i] * 32) - record.scroll,
            width,
            height: 32,
            fill: 'white',
          },
        });
        element.timelineGroup.addShape('line', {
          name: 'anchorRectLine',
          attrs: {
            x1: 0,
            y1: (56.5 + (i + 1) * 33) + (totalList[i] * 32) - record.scroll,
            x2: width,
            y2: (56.5 + (i + 1) * 33) + (totalList[i] * 32) - record.scroll,
            stroke: '#f5f5f5',
            lineWidth: 1,
          },
        });
        if (overviewAnchors.length > 0) {
          overviewAnchors.forEach((anchor) => {
            element.timelineGroup.addShape('marker', {
              name: 'anchor',
              attrs: {
                x: ((width - 20) / state.maxTime) * anchor / scaleRate.value + 10 - record.offset,
                y: (57 + i * 33) + 16 + (totalList[i] * 32) - record.scroll,
                r: 5,
                fill: '#1890FF',
                lineWidth: 0,
                symbol: 'diamond',
              },
            });
          });
        }
        if (isExpanded && animations.length > 0) {
          animations.forEach((animation, j) => {
            element.timelineGroup.addShape('rect', {
              name: 'insideAnchorRect',
              attrs: {
                x: 0,
                y: (57 + i * 33 + 32) + (totalList[i] * 32) + (j * 32) - record.scroll,
                width,
                height: 31,
                fill: 'whitesmoke',
              },
            });
            element.timelineGroup.addShape('line', {
              name: 'insideAnchorRectLine',
              attrs: {
                x1: 0,
                y1: (56.5 + i * 33 + 32 * 2) + (totalList[i] * 32) + (j * 32) - record.scroll,
                x2: width,
                y2: (56.5 + i * 33 + 32 * 2) + (totalList[i] * 32) + (j * 32) - record.scroll,
                stroke: '#fafafa',
                lineWidth: 1,
              },
            });
            animation.anchors.forEach((anchor) => {
              element.timelineGroup.addShape('marker', {
                name: 'anchor',
                id: 'hi-anchor',
                attrs: {
                  x: ((width - 20) / state.maxTime) * anchor.time / scaleRate.value + 10 - record.offset,
                  y: (56.5 + i * 33 + 32) + (totalList[i] * 32) + (j * 32) + (16) - record.scroll,
                  r: 5,
                  fill: 'black',
                  lineWidth: 0,
                  cursor: 'move',
                  symbol: 'diamond',
                },
              });
            });
          });
        }
      });
    };

    const handlePlay = () => {
      state.isPlay = !state.isPlay;
      if (state.isPlay) {
        element.animate.play();
        ctx.$animate.play();
      } else {
        element.animate.pause();
        ctx.$animate.pause();
      }
      emit(state.isPlay ? 'onPlay' : 'onPause');
    };

    const handleReset = () => {
      state.isPlay = false;
      state.time = 0;
      setTimeout(() => {
        state.isPlay = true;
        element.animate.restart();
        ctx.$animate.restart();
        emit('onRestart');
      });
    };

    const handleBack = () => {
      state.isPlay = false;
      state.time = 0;
      ctx.$animate.pause();
      ctx.$animate.seek(0);
      element.animate.pause();
      element.animate.seek(0);
      emit('onPause');
      emit('onSeek');
    };

    const handleRepeat = () => {
      state.isRepeat = !state.isRepeat;
      handleReset();
    };

    const handleTimeUpdate = (t) => {
      state.time = t;
    };

    const handleUpdate = () => {
      drawAnchors();
      setPlayBarToFront();
      emit('onUpdate', options);
    };

    const onLeftPointMouseDown = () => {
      record.allowLeftMove = true;
      record.startTime = state.startTime;
    };

    const onRightPointMouseDown = () => {
      record.allowRightMove = true;
      record.endTime = state.endTime;
    };

    const onCenterBarMouseDown = ({ x }) => {
      record.allowCenterMove = true;
      record.startTime = state.startTime;
      record.centerAnchor = x;
      record.endTime = state.endTime;
    };

    const onAllowPlayBarMove = () => {
      record.allowPlayBarMove = true;
    };

    const onPainterMouseMove = ({ x }) => {
      // left point moving
      if (record.allowLeftMove && x >= 10 && x <= record.rightPosition - OFFSET) {
        const rate = (x - 10) / (rect.width - 20);
        state.startTime = state.maxTime * rate;
      }

      // right point moving
      if (record.allowRightMove && x <= rect.width - 10 && x >= record.leftPosition + OFFSET) {
        const rate = (x - 10) / (rect.width - 20);
        state.endTime = state.maxTime * rate;
      }

      // center rect moving
      if (
        record.allowCenterMove
        && record.leftPosition >= 10
        && Math.floor(record.rightPosition) <= Math.floor(rect.width - 10)
      ) {
        const distanceDiff = x - record.centerAnchor;
        const timeDiff = (distanceDiff / (rect.width - 20)) * state.maxTime;
        if (record.startTime + timeDiff <= 0) {
          state.startTime = 0;
          state.endTime = record.endTime - record.startTime;
          return false;
        }
        if (record.endTime + timeDiff >= state.maxTime) {
          state.startTime = state.maxTime - (record.endTime - record.startTime);
          state.endTime = state.maxTime;
          return false;
        }
        state.startTime = record.startTime + timeDiff;
        state.endTime = record.endTime + timeDiff;
      }

      // play bar moving
      if (record.allowPlayBarMove && x >= 10 && x <= rect.width - 10) {
        const rate = state.maxTime / ((rect.width - 20) / scaleRate.value);
        const timeBuffer = (record.offset / (unitSecondLength.value / scaleRate.value)) * 1000;
        state.time = rate * (x - 10) + timeBuffer;
      }
      return false;
    };

    const onMarkerMouseDown = () => {
      element.painter.on('anchor:mousedown', (event) => {
        console.log(event, event.target.get('id'));
      });
    };

    const onStopMoving = () => {
      record.allowLeftMove = false;
      record.allowRightMove = false;
      record.allowCenterMove = false;
      record.allowPlayBarMove = false;
    };

    const onContainerScroll = (event) => {
      record.scroll = event.target.scrollTop;
      drawAnchors();
    };

    const addEvents = () => {
      element.leftPoint.on('mousedown', onLeftPointMouseDown);
      element.rightPoint.on('mousedown', onRightPointMouseDown);
      element.centerBar.on('mousedown', onCenterBarMouseDown);
      element.playBarTriangle.on('mousedown', onAllowPlayBarMove);
      element.playBarLine.on('mousedown', onAllowPlayBarMove);
      element.timelineRect.on('mousedown', onAllowPlayBarMove);
      element.painter.on('mousemove', onPainterMouseMove);
      onMarkerMouseDown();
      state.container.addEventListener('scroll', onContainerScroll);
      document.addEventListener('mouseup', onStopMoving);
    };

    const removeEvents = () => {
      element.leftPoint.off('mousedown', onLeftPointMouseDown);
      element.rightPoint.off('mousedown', onRightPointMouseDown);
      element.centerBar.off('mousedown', onCenterBarMouseDown);
      element.playBarTriangle.off('mousedown', onAllowPlayBarMove);
      element.playBarLine.off('mousedown', onAllowPlayBarMove);
      element.timelineRect.off('mousedown', onAllowPlayBarMove);
      element.painter.off('mousemove', onPainterMouseMove);
      state.container.removeEventListener('scroll', onContainerScroll);
      document.removeEventListener('mouseup', onStopMoving);
    };

    throttledWatch(rect, () => {
      resizeDecorate();
      calcEffect();
      resizeScaleBar();
      resizePlayBar();
      drawTick();
      drawAnchors();
      setPlayBarToFront();
    }, { throttle: 16 });

    throttledWatch(() => ([state.startTime, state.endTime, state.maxTime]), () => {
      calcEffect();
      resizeScaleBar();
      resizePlayBar();
      drawTick();
      drawAnchors();
      setPlayBarToFront();
    }, { throttle: 16 });

    throttledWatch(() => state.time, () => {
      resizePlayBar();
    }, { throttle: 16 });

    throttledWatch(() => ([state.isRepeat, state.maxTime]), () => {
      setAnimateOption();
    }, { throttle: 16 });

    onMounted(() => {
      initCanvas();
      initAnimate();
      addEvents();
    });

    onUnmounted(() => {
      removeEvents();
    });

    return {
      ...toRefs(state),
      scaleRate,
      timeScale,
      maxTimeScale,
      calcMaxTime,
      options,
      handlePlay,
      handleReset,
      handleBack,
      handleRepeat,
      handleTimeUpdate,
      handleUpdate,
    };
  },
});
</script>

<style scoped lang="scss">
.animation-timeline {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid #cccccc;
  border-top: none;

  header {
    flex: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    border-top: 3px solid #000000;
    box-sizing: border-box;
    padding: 0 12px;
  }

  &__content {
    width: 100%;
    height: 100%;
    border-top: 1px solid #efefef;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0 0 12px 0;
  }

  &__left {
    float: left;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    width: 250px;
    height: 100%;
    border-right: 1px solid #efefef;
  }

  &__menu {
    height: 56px;
    border-bottom: 1px solid #efefef;
  }

  &__max {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    box-sizing: border-box;
    padding: 0 12px;

    span {
      font-size: 12px;
    }

    input {
      width: 78px;
      outline: none;
      border-radius: 4px;
      padding-left: 6px;
      border: 1px solid #cccccc;
    }
  }

  &__sign {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 24px;
    box-sizing: border-box;
    padding: 0 12px;

    svg {
      font-size: 12px;
      cursor: pointer;
    }

    svg + svg {
      margin-left: 12px;
    }
  }

  &__widgets {
    height: calc(100% - 56px);
    overflow: auto;
  }

  &__right {
    float: right;
    width: calc(100% - 251px);
    height: 100%;
  }

  &__icons {
    flex: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 240px;
    height: 100%;
    box-sizing: border-box;
    padding: 0 12px 0 0;

    svg {
      font-size: 24px;
      cursor: pointer;
    }

    svg + svg {
      margin-left: 12px;
    }
  }

  &__divider {
    flex: none;
    height: 16px;
    width: 1px;
    background: #cccccc;
    margin: 0 12px;
  }

  &__control {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    svg {
      font-size: 16px;
    }
  }

  &__title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 0 0 4px;
  }

  #painter {
    width: 100%;
    height: 100%;
  }
}

::-webkit-scrollbar {
  background-color: white;
  width: 6px;
  height: 6px;
  background-clip: padding-box;
}

::-webkit-scrollbar-button {
  height: 0;
  width: 0;
}

::-webkit-scrollbar-thumb {
  background-color: #b9b9bd;
  border-radius: 3px;
}
</style>
