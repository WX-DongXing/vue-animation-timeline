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
        { key: 1, name: '明细表', animations: [] },
        { key: 2, name: '聚合表', animations: [] },
        { key: 3, name: '透视表', animations: [] },
        { key: 4, name: '指标卡', animations: [] },
        { key: 5, name: '词云图', animations: [] },
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
