<template>
  <div class="animation-timeline">
    <!-- S header area -->
    <header>
      <div class="animation-timeline__icons">
        <svg-icon :icon-name="isPlay ? 'pause' : 'play'" @click="handlePlay" />
        <svg-icon icon-name="square" @click="handleReset" />

        <span class="animation-timeline__divider"></span>

        <div class="animation-timeline__control">
          <svg-icon icon-name="corner-up-left" @click="handleBack" />
          <svg-icon :icon-name="isRepeat ? 'repeat' : 'shuffle'" @click="handleRepeat" />
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
              <svg-icon icon-name="eye-off" />
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
            v-for="(option, index) in options"
            :option="option"
            :key="index"
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
  defineComponent, onMounted, ref, getCurrentInstance,
  reactive, computed, onUnmounted, toRefs,
} from 'vue-demi';
import { throttledWatch } from '@vueuse/core';
import clonedeep from 'lodash.clonedeep';
import useResize from '@/utils/useResize.ts';
import Transition from '@/models/Transition';
import {
  OFFSET, TICK_MIN_LENGTH, TICK_MAX_LENGTH,
  ANIMATION_OPTIONS,
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
  },
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const { widgets } = toRefs(props);
    const { rect } = useResize();
    const options = reactive(
      clonedeep(widgets.value).map((widget) => reactive(
        { ...widget, transition: new Transition(widget) },
      )),
    );
    const time = ref(0);
    const startTime = ref(0);
    const calcStartTime = ref(0);
    const endTime = ref(10000);
    const calcEndTime = ref(10000);
    const maxTime = ref(10000);
    const isPlay = ref(false);
    const isRepeat = ref(false);

    let painter = ref();
    let timeRect = ref();
    let timelineRect = ref();
    let leftPoint = ref();
    let centerBar = ref();
    let rightPoint = ref();
    let playBarTriangle = ref();
    let playBarLine = ref();
    let timelineAxis = ref();
    let timelineGroup = ref();
    const axisTicks = ref([]);

    const container = ref();

    const element = reactive({
      animate: null,
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

    const unitTickCount = computed(() => Math.trunc(maxTime.value / 1000));
    const unitLength = computed(() => (rect.width - 20) / maxTime.value);
    const unitSecondLength = computed(() => unitLength.value * 1000);
    const calcMaxTime = computed(
      () => maxTime.value / ((endTime.value - startTime.value) / maxTime.value),
    );
    const scaleRate = computed(() => (endTime.value - startTime.value) / maxTime.value);
    const timeScale = computed(() => dayjs(time.value).format('mm:ss:SSS'));
    const maxTimeScale = computed({
      get: () => dayjs(maxTime.value).format('mm:ss:SSS'),
      set: (val) => {
        const pattern = /^([0-5][0-9]):([0-5][0-9]):([0-9][0-9][0-9])$/;
        if (pattern.test(val)) {
          const [, mm, ss, SSS] = val.match(pattern);
          const maxTimeValue = +mm * 60 * 1000 + +ss * 1000 + +SSS;
          maxTime.value = maxTimeValue;
          if (+maxTimeValue <= endTime.value) {
            if (startTime.value >= +maxTimeValue) {
              startTime.value = 0;
            }
            endTime.value = +maxTimeValue || 1000;
          }
        }
      },
    });

    const initCanvas = () => {
      const { width, height } = document.getElementById('painter').getBoundingClientRect();
      // init painter
      painter = new Canvas({
        container: 'painter',
        width,
        height,
      });

      timelineGroup = painter.addGroup();

      timeRect = painter.addShape('rect', {
        name: 'timeBar',
        attrs: {
          x: 0,
          y: 0,
          width,
          height: 20,
          fill: '#F5F5F6',
        },
      });

      leftPoint = painter.addShape('circle', {
        attrs: {
          x: 10,
          y: 10,
          r: 6,
          fill: '#757575',
          lineWidth: 0,
          cursor: 'ew-resize',
        },
      });

      rightPoint = painter.addShape('circle', {
        attrs: {
          x: width - 10,
          y: 10,
          r: 6,
          fill: '#757575',
          lineWidth: 0,
          cursor: 'ew-resize',
        },
      });

      centerBar = painter.addShape('rect', {
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

      timelineRect = painter.addShape('rect', {
        name: 'timelineBar',
        attrs: {
          x: 0,
          y: 20,
          width,
          height: 36,
          fill: '#eeeeee',
        },
      });

      playBarTriangle = painter.addShape('marker', {
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

      playBarLine = painter.addShape('line', {
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

      timelineAxis = painter.addShape('line', {
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
        duration: maxTime.value || 10000,
        direction: 'normal',
        easing: 'linear',
        loop: isRepeat,
        autoplay: false,
        update: (params) => {
          time.value = params.progress / 100 * maxTime.value;
        },
      }).add({ opacity: 0 });
    };

    const setAnimateOption = () => {
      if (element.animate) {
        element.animate.duration = maxTime.value;
        element.animate.loop = isRepeat.value;
        instance.$animateParams.maxTime = maxTime.value;
        instance.$animateParams.isRepeat = isRepeat.value;
      }
      options.forEach((option) => {
        Object.assign(option.transition, { needUpdateProp: true });
      });
      emit('onUpdate', options);
    };

    const resizeDecorate = () => {
      const { width, height } = rect;
      // change painter size
      painter.changeSize(width, height);

      // set time rect width
      timeRect.attr('width', width);

      // set timeline rect width
      timelineRect.attr('width', width);

      // set time line axis width
      timelineAxis.animate({
        x1: 10,
        y1: 48,
        x2: width - 10,
        y2: 48,
      }, ANIMATION_OPTIONS);
    };

    const resizeScaleBar = () => {
      const { width } = rect;
      const unitWidth = (width - 20) / maxTime.value;
      record.leftPosition = startTime.value * unitWidth + 10;
      record.rightPosition = endTime.value * unitWidth + 10;

      // set left point x position
      leftPoint.animate({
        x: record.leftPosition,
      }, ANIMATION_OPTIONS);

      // set right point x position
      rightPoint.animate({
        x: record.rightPosition,
      }, ANIMATION_OPTIONS);

      // set center bar width, x
      centerBar.animate({
        width: record.rightPosition - record.leftPosition,
        x: record.leftPosition,
      }, ANIMATION_OPTIONS);
    };

    const resizePlayBar = () => {
      const { width, height } = rect;
      // set play bar triangle x
      playBarTriangle.animate({
        x: ((width - 20) / maxTime.value) * time.value / scaleRate.value + 10 - record.offset,
      }, ANIMATION_OPTIONS);

      // set play bar line x
      playBarLine.animate({
        x1: ((width - 20) / maxTime.value) * time.value / scaleRate.value + 10 - record.offset,
        y1: 30,
        x2: ((width - 20) / maxTime.value) * time.value / scaleRate.value + 10 - record.offset,
        y2: height,
      }, ANIMATION_OPTIONS);
    };

    const calcEffect = () => {
      record.offset = (rect.width - 20) / scaleRate.value * (startTime.value / maxTime.value);
      const timeBuffer = (record.offset / (unitSecondLength.value / scaleRate.value)) * 1000;
      calcStartTime.value = startTime.value * scaleRate.value + timeBuffer;
      calcEndTime.value = endTime.value * scaleRate.value + timeBuffer;
    };

    const drawTick = () => {
      axisTicks.value.forEach((axis) => {
        axis.remove(true);
      });
      axisTicks.value = [];

      for (const _ in new Array(unitTickCount.value + 1).fill(null)) {
        const min = unitSecondLength.value / scaleRate.value <= TICK_MIN_LENGTH;
        const max = unitSecondLength.value / scaleRate.value >= TICK_MAX_LENGTH;
        const minCount = Math.trunc(TICK_MIN_LENGTH / (unitSecondLength.value / scaleRate.value));
        if (min && minCount > 0 && AnimationTimeline % (minCount * 2) !== 0 && +AnimationTimeline !== +unitTickCount.value) {
          continue;
        }
        const axisTick = painter.addShape('line', {
          name: 'axisTick',
          attrs: {
            x1: 10 + (AnimationTimeline * unitSecondLength.value) / scaleRate.value - record.offset,
            y1: 40,
            x2: 10 + (AnimationTimeline * unitSecondLength.value) / scaleRate.value - record.offset,
            y2: 48,
            stroke: '#212121',
            lineWidth: 1,
          },
        });

        const axisText = painter.addShape('text', {
          attrs: {
            x: (AnimationTimeline >= 10 ? 0 : 5) + (
              AnimationTimeline * unitSecondLength.value
            ) / scaleRate.value - record.offset,
            y: 40,
            fontFamily: 'PingFang SC',
            text: (AnimationTimeline > 0 && AnimationTimeline % 60 === 0) ? `${AnimationTimeline / 60}m` : `${AnimationTimeline}s`,
            fontSize: 12,
            fill: '#212121',
          },
        });

        let smallAxisTick = [];
        if (max) {
          smallAxisTick = new Array(6).fill(null).map((__, i) => painter.addShape('line', {
            name: 'axisTick',
            attrs: {
              x1: 10 + (
                AnimationTimeline * unitSecondLength.value + i * (unitSecondLength.value / 5)
              ) / scaleRate.value - record.offset,
              y1: 42,
              x2: 10 + (
                AnimationTimeline * unitSecondLength.value + i * (unitSecondLength.value / 5)
              ) / scaleRate.value - record.offset,
              y2: 48,
              stroke: '#212121',
              lineWidth: 1,
            },
          }));
        }

        axisTicks.value.push(...[axisTick, axisText, ...smallAxisTick]);
      }
    };

    // set play bar to front
    const setPlayBarToFront = () => {
      playBarTriangle.toFront();
      playBarLine.toFront();
    };

    const drawAnchors = () => {
      // clear timeline group all children
      timelineGroup.clear();
      const { width } = rect;
      const reduceList = options.reduce((acc, cur, index, array) => {
        const pre = array[AnimationTimeline - 1];
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
        timelineGroup.addShape('rect', {
          name: 'anchorRect',
          attrs: {
            x: 0,
            y: (57 + i * 33) + (totalList[i] * 32) - record.scroll,
            width,
            height: 32,
            fill: 'white',
          },
        });
        timelineGroup.addShape('line', {
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
            timelineGroup.addShape('marker', {
              name: 'anchor',
              attrs: {
                x: ((width - 20) / maxTime.value) * anchor / scaleRate.value + 10 - record.offset,
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
            timelineGroup.addShape('rect', {
              name: 'insideAnchorRect',
              attrs: {
                x: 0,
                y: (57 + i * 33 + 32) + (totalList[i] * 32) + (j * 32) - record.scroll,
                width,
                height: 31,
                fill: 'whitesmoke',
              },
            });
            timelineGroup.addShape('line', {
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
              timelineGroup.addShape('marker', {
                name: 'anchor',
                id: 'hi-anchor',
                attrs: {
                  x: ((width - 20) / maxTime.value) * anchor.time / scaleRate.value + 10 - record.offset,
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
      isPlay.value = !isPlay.value;
      if (isPlay.value) {
        element.animate.play();
        instance.$animate.play();
      } else {
        element.animate.pause();
        instance.$animate.pause();
      }
      emit(isPlay.value ? 'onPlay' : 'onPause');
    };

    const handleReset = () => {
      isPlay.value = false;
      time.value = 0;
      setTimeout(() => {
        isPlay.value = true;
        element.animate.restart();
        instance.$animate.restart();
        emit('onRestart');
      });
    };

    const handleBack = () => {
      isPlay.value = false;
      time.value = 0;
      instance.$animate.pause();
      instance.$animate.seek(0);
      element.animate.pause();
      element.animate.seek(0);
      emit('onPause');
      emit('onSeek');
    };

    const handleRepeat = () => {
      isRepeat.value = !isRepeat.value;
      handleReset();
    };

    const handleTimeUpdate = (t) => {
      time.value = t;
    };

    const handleUpdate = () => {
      drawAnchors();
      setPlayBarToFront();
      emit('onUpdate', options);
    };

    const onLeftPointMouseDown = () => {
      record.allowLeftMove = true;
      record.startTime = startTime.value;
    };

    const onRightPointMouseDown = () => {
      record.allowRightMove = true;
      record.endTime = endTime.value;
    };

    const onCenterBarMouseDown = ({ x }) => {
      record.allowCenterMove = true;
      record.startTime = startTime.value;
      record.centerAnchor = x;
      record.endTime = endTime.value;
    };

    const onAllowPlayBarMove = () => {
      record.allowPlayBarMove = true;
    };

    const onPainterMouseMove = ({ x }) => {
      // left point moving
      if (record.allowLeftMove && x >= 10 && x <= record.rightPosition - OFFSET) {
        const rate = (x - 10) / (rect.width - 20);
        startTime.value = maxTime.value * rate;
      }

      // right point moving
      if (record.allowRightMove && x <= rect.width - 10 && x >= record.leftPosition + OFFSET) {
        const rate = (x - 10) / (rect.width - 20);
        endTime.value = maxTime.value * rate;
      }

      // center rect moving
      if (
        record.allowCenterMove
        && record.leftPosition >= 10
        && Math.floor(record.rightPosition) <= Math.floor(rect.width - 10)
      ) {
        const distanceDiff = x - record.centerAnchor;
        const timeDiff = (distanceDiff / (rect.width - 20)) * maxTime.value;
        if (record.startTime + timeDiff <= 0) {
          startTime.value = 0;
          endTime.value = record.endTime - record.startTime;
          return false;
        }
        if (record.endTime + timeDiff >= maxTime.value) {
          startTime.value = maxTime.value - (record.endTime - record.startTime);
          endTime.value = maxTime.value;
          return false;
        }
        startTime.value = record.startTime + timeDiff;
        endTime.value = record.endTime + timeDiff;
      }

      // play bar moving
      if (record.allowPlayBarMove && x >= 10 && x <= rect.width - 10) {
        const rate = maxTime.value / ((rect.width - 20) / scaleRate.value);
        const timeBuffer = (record.offset / (unitSecondLength.value / scaleRate.value)) * 1000;
        time.value = rate * (x - 10) + timeBuffer;
      }
      return false;
    };

    const onMarkerMouseDown = () => {
      painter.on('anchor:mousedown', (event) => {
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
      leftPoint.on('mousedown', onLeftPointMouseDown);
      rightPoint.on('mousedown', onRightPointMouseDown);
      centerBar.on('mousedown', onCenterBarMouseDown);
      playBarTriangle.on('mousedown', onAllowPlayBarMove);
      playBarLine.on('mousedown', onAllowPlayBarMove);
      timelineRect.on('mousedown', onAllowPlayBarMove);
      painter.on('mousemove', onPainterMouseMove);
      onMarkerMouseDown();
      container.value.addEventListener('scroll', onContainerScroll);
      document.addEventListener('mouseup', onStopMoving);
    };

    const removeEvents = () => {
      leftPoint.off('mousedown', onLeftPointMouseDown);
      rightPoint.off('mousedown', onRightPointMouseDown);
      centerBar.off('mousedown', onCenterBarMouseDown);
      playBarTriangle.off('mousedown', onAllowPlayBarMove);
      playBarLine.off('mousedown', onAllowPlayBarMove);
      timelineRect.off('mousedown', onAllowPlayBarMove);
      painter.off('mousemove', onPainterMouseMove);
      container.value.removeEventListener('scroll', onContainerScroll);
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

    throttledWatch([startTime, endTime, maxTime], () => {
      calcEffect();
      resizeScaleBar();
      resizePlayBar();
      drawTick();
      drawAnchors();
      setPlayBarToFront();
    }, { throttle: 16 });

    throttledWatch(time, () => {
      resizePlayBar();
    }, { throttle: 16 });

    throttledWatch([isRepeat, maxTimeScale], setAnimateOption);

    onMounted(() => {
      initCanvas();
      initAnimate();
      addEvents();
    });

    onUnmounted(() => {
      removeEvents();
    });

    return {
      time,
      startTime,
      endTime,
      maxTime,
      scaleRate,
      timeScale,
      maxTimeScale,
      calcStartTime,
      calcEndTime,
      calcMaxTime,
      isPlay,
      isRepeat,
      container,
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

<style scoped lang="less">
.animation-timeline {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  min-height: 380px;
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
