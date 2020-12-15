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
        { id: 1, name: '明细表' },
        { id: 2, name: '聚合表' },
        { id: 3, name: '透视表' },
        { id: 4, name: '指标卡' },
        { id: 5, name: '词云图' },
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
