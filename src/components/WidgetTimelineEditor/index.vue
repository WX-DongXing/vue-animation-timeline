<template>
  <div class="widget-timeline-editor">
    <!-- S header area -->
    <header>
      <div class="widget-timeline-editor__icons">
        <svg-icon icon-name="play" />
        <svg-icon icon-name="square" />
      </div>
      <!-- / icon area -->

      <div class="widget-timeline-editor__title">
        <span>{{ timeScale }}</span>
        <span>startTime: {{ calcStartTime }}</span>
        <span>endTime: {{ calcEndTime }}</span>
<!--        <span>maxTime: {{ calcMaxTime }}</span>-->
        <span>scaleRate: {{ scaleRate }}</span>
        <input type="text" v-model.trim="maxTimeScale">
      </div>
      <!-- / timescale area -->

    </header>
    <!-- E header area -->

    <!-- S content area -->
    <section>
      <div class="widget-timeline-editor__content">
        <div class="widget-timeline-editor__left">
        </div>
        <!-- E widget control panel -->

        <div class="widget-timeline-editor__right">
          <div id="painter"></div>
        </div>
        <!-- E timeline control panel  -->

      </div>
    </section>
    <!-- E content area -->

  </div>
</template>

<script>
import dayjs from 'dayjs';
import { Canvas } from '@antv/g-canvas';
import {
  defineComponent, onMounted, watch, ref,
  reactive, computed, onUnmounted,
} from 'vue-demi';
import { throttledWatch } from '@vueuse/core';
import SvgIcon from '@/components/SvgIcon.vue';
import useResize from '@/utils/useResize.ts';

export default defineComponent({
  components: {
    SvgIcon,
  },
  computed: {
    timeScale() {
      return dayjs(this.time).format('mm:ss:SSS');
    },
    maxTimeScale: {
      get() {
        return dayjs(this.maxTime).format('mm:ss:SSS');
      },
      set(time) {
        const pattern = /^([0-5][0-9]):([0-5][0-9]):([0-9][0-9][0-9])$/;
        if (pattern.test(time)) {
          const [, mm, ss, SSS] = time.match(pattern);
          const maxTime = +mm * 60 * 1000 + +ss * 1000 + +SSS;
          this.maxTime = maxTime;
          if (+maxTime <= this.endTime) {
            if (this.startTime >= +maxTime) {
              this.startTime = 0;
            }
            this.endTime = +maxTime || 1000;
          }
        }
      },
    },
  },
  setup() {
    const time = ref(0);
    const startTime = ref(0);
    const calcStartTime = ref(0);
    const endTime = ref(10000);
    const calcEndTime = ref(10000);
    const maxTime = ref(10000);
    const { rect } = useResize();
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

    const record = reactive({
      leftPosition: 0,
      startTime: 0,
      leftAnchor: 0,
      centerAnchor: 0,
      rightAnchor: 0,
      endTime: 0,
      rightPosition: 0,
      calcStartTime: 0,
      calcEndTime: 0,
      offset: 0,
    });

    const TICK_MAX_LENGTH = 150;
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
    // const extraLength = computed(
    //   () => Math.round(rect.width - 20 - unitTickCount.value * unitSecondLength.value),
    // );
    const calcMaxTime = computed(
      () => maxTime.value / ((endTime.value - startTime.value) / maxTime.value),
    );
    const scaleRate = computed(() => (endTime.value - startTime.value) / maxTime.value);

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
      const unitWidth = width / maxTime.value;
      record.leftPosition = startTime.value * unitWidth + 10;
      record.rightPosition = endTime.value * unitWidth - 10;

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
        x: ((width - 20) / maxTime.value) * time.value + 10,
      }, animateOptions);

      // set play bar line x
      playBarLine.animate({
        x1: ((width - 20) / maxTime.value) * time.value + 10,
        y1: 30,
        x2: ((width - 20) / maxTime.value) * time.value + 10,
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

      new Array(unitTickCount.value + 1).fill(null).forEach((_, index) => {
        const axisTick = painter.addShape('line', {
          name: 'axisTick',
          attrs: {
            // eslint-disable-next-line max-len
            x1: 10 + (index * unitSecondLength.value) / scaleRate.value - record.offset,
            y1: 40,
            // eslint-disable-next-line max-len
            x2: 10 + (index * unitSecondLength.value) / scaleRate.value - record.offset,
            y2: 48,
            stroke: '#212121',
            lineWidth: 1,
            cursor: 'move',
          },
        });

        const axisText = painter.addShape('text', {
          attrs: {
            x: (index >= 10 ? 0 : 5) + (
              index * unitSecondLength.value
            ) / scaleRate.value - record.offset,
            y: 40,
            fontFamily: 'PingFang SC',
            text: `${index}s`,
            fontSize: 12,
            fill: '#212121',
          },
        });

        let smallAxisTick = [];
        if (unitSecondLength.value / scaleRate.value >= TICK_MAX_LENGTH) {
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
              cursor: 'move',
            },
          }));
        }

        axisTicks.value.push(...[axisTick, axisText, ...smallAxisTick]);
      });
    };

    const stopMoving = () => {
      allowLeftMove = false;
      allowRightMove = false;
      allowCenterMove = false;
      allowPlayBarMove = false;
    };

    throttledWatch(rect, () => {
      resizeDecorate();
      calcEffect();
      resizeScaleBar();
      resizePlayBar();
      drawTick();
    }, { throttle: 16 });

    throttledWatch([startTime, endTime], () => {
      resizeDecorate();
      calcEffect();
      resizeScaleBar();
      resizePlayBar();
      drawTick();
    }, { throttle: 16 });

    watch(time, () => {
      resizePlayBar();
    });

    watch(maxTime, () => {
      resizeDecorate();
      resizeScaleBar();
      resizePlayBar();
      drawTick();
    });

    onMounted(() => {
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

      playBarTriangle.toFront();

      playBarLine.toFront();

      leftPoint.on('mousedown', ({ x }) => {
        allowLeftMove = true;
        record.leftAnchor = x;
        record.startTime = startTime.value;
        record.calcStartTime = calcStartTime.value;
      });

      rightPoint.on('mousedown', ({ x }) => {
        allowRightMove = true;
        record.rightAnchor = x;
        record.endTime = endTime.value;
        record.calcEndTime = calcEndTime.value;
      });

      centerBar.on('mousedown', ({ x }) => {
        allowCenterMove = true;
        record.startTime = startTime.value;
        record.centerAnchor = x;
        record.endTime = endTime.value;
      });

      playBarTriangle.on('mousedown', () => {
        allowPlayBarMove = true;
      });

      playBarLine.on('mousedown', () => {
        allowPlayBarMove = true;
      });

      painter.on('mousemove', ({ x }) => {
        // left point moving
        if (allowLeftMove && x >= 10 && x <= record.rightPosition) {
          const rate = (x - 10) / rect.width;
          startTime.value = maxTime.value * rate;
        }

        // right point moving
        if (allowRightMove && x <= rect.width - 10 && x >= record.leftPosition) {
          const rate = (x + 10) / rect.width;
          endTime.value = maxTime.value * rate;
        }

        // center rect moving
        if (
          allowCenterMove
          && record.leftPosition >= 10
          && record.rightPosition <= rect.width - 10
        ) {
          const distanceDiff = x - record.centerAnchor;
          const timeDiff = (distanceDiff / rect.width) * maxTime.value;
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
        if (allowPlayBarMove && x >= 10 && x <= width - 10) {
          const rate = maxTime.value / (Math.round(rect.width) - 20);
          time.value = rate * (x - 10);
        }
        return false;
      });

      document.addEventListener('mouseup', stopMoving);
    });

    onUnmounted(() => {
      document.removeEventListener('mouseup', stopMoving);
    });

    return {
      time,
      startTime,
      endTime,
      maxTime,
      scaleRate,
      calcStartTime,
      calcEndTime,
      calcMaxTime,
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
    width: 320px;
    height: 100%;
    border-right: 1px solid #efefef;
  }

  &__right {
    float: right;
    width: calc(100% - 321px);
    height: 100%;
  }

  &__icons {
    flex: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 320px;
    height: 100%;

    svg {
      cursor: pointer;
    }

    svg + svg {
      margin-left: 12px;
    }
  }

  &__title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

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
