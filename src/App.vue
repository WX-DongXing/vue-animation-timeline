<template>
  <div id="app">
    <widget-timeline-editor :widgets="widgets" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WidgetTimelineEditor from '@/components/WidgetTimelineEditor/index.vue';

@Component({
  components: {
    WidgetTimelineEditor,
  },
  data() {
    return {
      widgets: [
        { key: 1, name: '明细表' },
        { key: 2, name: '聚合表' },
        { key: 3, name: '透视表' },
        { key: 4, name: '指标卡' },
        { key: 5, name: '词云图' },
      ],
    };
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  box-sizing: border-box;
  padding: 32px;
}
</style>
