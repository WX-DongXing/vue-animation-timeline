<template>
  <div class="widget-timeline-editor">
    <!-- S header area -->
    <header>
      <div class="widget-timeline-editor__icons">
        <svg-icon :icon-name="isPlay ? 'pause' : 'play'" @click="handlePlay" />
        <svg-icon icon-name="square" @click="handleReset" />

        <span class="widget-timeline-editor__divider"></span>

        <div class="widget-timeline-editor__control">
          <svg-icon icon-name="corner-up-left" @click="handleBack" />
          <svg-icon :icon-name="isRepeat ? 'repeat' : 'shuffle'" @click="handleRepeat" />
        </div>
      </div>
      <!-- / icon area -->

      <div class="widget-timeline-editor__title">
        <span>{{ timeScale }}</span>
        <input type="text" v-model.trim="maxTimeScale">
      </div>
      <!-- / timescale area -->

    </header>
    <!-- E header area -->

    <!-- S content area -->
    <section class="widget-timeline-editor__content">
      <div class="widget-timeline-editor__left">
        <div class="widget-timeline-editor__menu">

          <div class="widget-timeline-editor__sign">
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

        <div class="widget-timeline-editor__widgets">
          <widget
            v-for="(option, index) in options"
            :option="option"
            :key="index"
          />
        </div>
      </div>
      <!-- E widget control panel -->

      <div class="widget-timeline-editor__right">
        <div id="painter"></div>
      </div>
      <!-- E timeline control panel  -->
    </section>
    <!-- E content area -->

  </div>
</template>

<script>
import dayjs from 'dayjs';
import { Canvas } from '@antv/g-canvas';
import {
  defineComponent, onMounted, ref,
  reactive, computed, onUnmounted, toRefs,
} from 'vue-demi';
import { throttledWatch } from '@vueuse/core';
import useResize from '@/utils/useResize.ts';
import SvgIcon from './modules/SvgIcon';
import Widget from './modules/Widget';

const OFFSET = 50;
const TICK_MIN_LENGTH = 50;
const TICK_MAX_LENGTH = 150;
const DEFAULT_OPTION = {
  isExpanded: false,
  visible: true,
  isLocked: false,
};

export default defineComponent({
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
  setup(props) {
    const { widgets } = toRefs(props);
    const { rect } = useResize();
    const options = reactive(
      [...widgets.value].map((widget) => reactive({ ...widget, ...DEFAULT_OPTION })),
    );
    const time = ref(0);
    const startTime = ref(0);
    const calcStartTime = ref(0);
    const endTime = ref(10000);
    const calcEndTime = ref(10000);
    const maxTime = ref(10000);
    let painter = ref();
    let timeRect = ref();
    let timelineRect = ref();
    let leftPoint = ref();
    let centerBar = ref();
    let rightPoint = ref();
    let playBarTriangle = ref();
    let playBarLine = ref();
    let timelineAxis = ref();
    const axisTicks = ref([]);
    const isPlay = ref(false);
    const isRepeat = ref(false);

    const record = reactive({
      leftPosition: 0,
      startTime: 0,
      centerAnchor: 0,
      endTime: 0,
      rightPosition: 0,
      offset: 0,
    });

    const animateOptions = {
      delay: 0,
      duration: 50,
      easing: 'easeLinear',
    };
    let allowLeftMove = false;
    let allowRightMove = false;
    let allowCenterMove = false;
    let allowPlayBarMove = false;

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

    const handlePlay = () => {
      isPlay.value = !isPlay.value;
    };

    const handleReset = () => {
      isPlay.value = false;
      time.value = 0;
      setTimeout(() => {
        isPlay.value = true;
      });
    };

    const handleBack = () => {
      isPlay.value = false;
      time.value = 0;
    };

    const handleRepeat = () => {
      isRepeat.value = !isRepeat.value;
    };

    const handleLeftPointMouseDown = () => {
      allowLeftMove = true;
      record.startTime = startTime.value;
    };

    const handleRightPointMouseDown = () => {
      allowRightMove = true;
      record.endTime = endTime.value;
    };

    const handleCenterBarMouseDown = ({ x }) => {
      allowCenterMove = true;
      record.startTime = startTime.value;
      record.centerAnchor = x;
      record.endTime = endTime.value;
    };

    const handleAllowPlayBarMove = () => {
      allowPlayBarMove = true;
    };

    const handlePainterMouseMove = ({ x }) => {
      // left point moving
      if (allowLeftMove && x >= 10 && x <= record.rightPosition - OFFSET) {
        const rate = (x - 10) / (rect.width - 20);
        startTime.value = maxTime.value * rate;
      }

      // right point moving
      if (allowRightMove && x <= rect.width - 10 && x >= record.leftPosition + OFFSET) {
        const rate = (x - 10) / (rect.width - 20);
        endTime.value = maxTime.value * rate;
      }

      // center rect moving
      if (
        allowCenterMove
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
      if (allowPlayBarMove && x >= 10 && x <= rect.width - 10) {
        const rate = maxTime.value / ((rect.width - 20) / scaleRate.value);
        const timeBuffer = (record.offset / (unitSecondLength.value / scaleRate.value)) * 1000;
        time.value = rate * (x - 10) + timeBuffer;
      }
      return false;
    };

    const handleStopMoving = () => {
      allowLeftMove = false;
      allowRightMove = false;
      allowCenterMove = false;
      allowPlayBarMove = false;
    };

    const addEvents = () => {
      leftPoint.on('mousedown', handleLeftPointMouseDown);
      rightPoint.on('mousedown', handleRightPointMouseDown);
      centerBar.on('mousedown', handleCenterBarMouseDown);
      playBarTriangle.on('mousedown', handleAllowPlayBarMove);
      playBarLine.on('mousedown', handleAllowPlayBarMove);
      timelineRect.on('mousedown', handleAllowPlayBarMove);
      painter.on('mousemove', handlePainterMouseMove);
      document.addEventListener('mouseup', handleStopMoving);
    };

    const removeEvents = () => {
      leftPoint.off('mousedown', handleLeftPointMouseDown);
      rightPoint.off('mousedown', handleRightPointMouseDown);
      centerBar.off('mousedown', handleCenterBarMouseDown);
      playBarTriangle.off('mousedown', handleAllowPlayBarMove);
      playBarLine.off('mousedown', handleAllowPlayBarMove);
      timelineRect.off('mousedown', handleAllowPlayBarMove);
      painter.off('mousemove', handlePainterMouseMove);
      document.removeEventListener('mouseup', handleStopMoving);
    };

    const initCanvas = () => {
      const { width, height } = document.getElementById('painter').getBoundingClientRect();
      // init painter
      painter = new Canvas({
        container: 'painter',
        width,
        height,
      });

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
      }, animateOptions);
    };

    const resizeScaleBar = () => {
      const { width } = rect;
      const unitWidth = (width - 20) / maxTime.value;
      record.leftPosition = startTime.value * unitWidth + 10;
      record.rightPosition = endTime.value * unitWidth + 10;

      // set left point x position
      leftPoint.animate({
        x: record.leftPosition,
      }, animateOptions);

      // set right point x position
      rightPoint.animate({
        x: record.rightPosition,
      }, animateOptions);

      // set center bar width, x
      centerBar.animate({
        width: record.rightPosition - record.leftPosition,
        x: record.leftPosition,
      }, animateOptions);
    };

    const resizePlayBar = () => {
      const { width, height } = rect;
      // set play bar triangle x
      playBarTriangle.animate({
        x: ((width - 20) / maxTime.value) * time.value / scaleRate.value + 10 - record.offset,
      }, animateOptions);

      // set play bar line x
      playBarLine.animate({
        x1: ((width - 20) / maxTime.value) * time.value / scaleRate.value + 10 - record.offset,
        y1: 30,
        x2: ((width - 20) / maxTime.value) * time.value / scaleRate.value + 10 - record.offset,
        y2: height,
      }, animateOptions);
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

      for (const index in new Array(unitTickCount.value + 1).fill(null)) {
        const min = unitSecondLength.value / scaleRate.value <= TICK_MIN_LENGTH;
        const max = unitSecondLength.value / scaleRate.value >= TICK_MAX_LENGTH;
        const minCount = Math.trunc(TICK_MIN_LENGTH / (unitSecondLength.value / scaleRate.value));
        // eslint-disable-next-line max-len
        if (min && minCount > 0 && index % (minCount * 2) !== 0 && +index !== +unitTickCount.value) {
          continue;
        }
        const axisTick = painter.addShape('line', {
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

        const axisText = painter.addShape('text', {
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
          smallAxisTick = new Array(6).fill(null).map((__, i) => painter.addShape('line', {
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

        axisTicks.value.push(...[axisTick, axisText, ...smallAxisTick]);
      }

      // set play bar to front
      playBarTriangle.toFront();
      playBarLine.toFront();
    };

    throttledWatch(rect, () => {
      resizeDecorate();
      calcEffect();
      resizeScaleBar();
      resizePlayBar();
      drawTick();
    }, { throttle: 16 });

    throttledWatch([startTime, endTime, maxTime], () => {
      calcEffect();
      resizeScaleBar();
      resizePlayBar();
      drawTick();
    }, { throttle: 16 });

    throttledWatch(time, () => {
      resizePlayBar();
    }, { throttle: 16 });

    onMounted(() => {
      initCanvas();
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
      options,
      handlePlay,
      handleReset,
      handleBack,
      handleRepeat,
    };
  },
});
</script>

<style scoped lang="less">
.widget-timeline-editor {
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

  section {
    box-sizing: border-box;
    padding: 0 12px 12px;
    height: 500px;
  }

  &__content {
    height: 100%;
    border-top: 1px solid #efefef;
    overflow: hidden;
  }

  &__left {
    float: left;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    width: 240px;
    height: 100%;
    border-right: 1px solid #efefef;
  }

  &__menu {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    height: 56px;
    border-bottom: 1px solid #efefef;
  }

  &__sign {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 24px;
    box-sizing: border-box;
    padding-right: 12px;

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
    width: calc(100% - 241px);
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

    input {
      width: 78px;
      border: 1px solid #cccccc;
      outline: none;
      border-radius: 4px;
      padding-left: 6px;
    }
  }

  #painter {
    width: 100%;
    height: 100%;
  }
}
</style>
