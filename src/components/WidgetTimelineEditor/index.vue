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
        <input type="text" v-model.trim="maxTimeScale">
      </div>
      <!-- / timescale area -->

    </header>
    <!-- E header area -->

    <!-- S content area -->
    <section>
      <div class="widget-timeline-editor__content">
        <div class="widget-timeline-editor__left"></div>
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
import { defineComponent } from 'vue-demi';
import SvgIcon from '@/components/SvgIcon.vue';
import Mixins from '@/utils/mixins.vue';
import { Canvas } from '@antv/g-canvas';

export default defineComponent({
  mixins: [Mixins],
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
          this.setMaxTime({ maxTime });
        } else {
          this.setMaxTime({ maxTime: this.maxTime });
        }
      },
    },
  },
  data() {
    return {
      ctx: null,
    };
  },
  mounted() {
    this.ctx = new Canvas({
      container: 'painter',
    })
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
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    height: 100%;
    border-top: 1px solid #efefef;
  }

  &__left {
    flex: none;
    width: 320px;
    height: 100%;
    border-right: 1px solid #efefef;
  }

  &__right {
    width: 100%;
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
}
</style>
