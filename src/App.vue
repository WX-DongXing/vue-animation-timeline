<template>
  <div id="app">
    <div class="screen">
      <div
        class="panel"
        v-for="{ key, x, y, width, height, color } in widgets"
        :key="key"
        :style="{
          height: `${height}px`,
          width: `${width}px`,
          top: `${y}px`,
          left: `${x}px`,
          background: `${color}`,
        }"
      >
      </div>
    </div>
    <widget-timeline-editor :widgets="widgets" @update="handleUpdate" />
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue-demi';
import { Component, Vue } from 'vue-property-decorator';
import WidgetTimelineEditor from '@/components/WidgetTimelineEditor/index.vue';

@Component({
  components: {
    WidgetTimelineEditor,
  },
  setup() {
    let widgets = reactive([
      {
        key: 1, name: '明细表', y: 16, x: 16, width: 84, height: 84, color: '#6597fb', transition: {},
      },
      {
        key: 2, name: '聚合表', y: 116, x: 16, width: 84, height: 84, color: '#61daac',
      },
      {
        key: 3, name: '透视表', y: 216, x: 16, width: 84, height: 84, color: '#667798',
      },
      {
        key: 4, name: '指标卡', y: 316, x: 16, width: 84, height: 84, color: '#76cced',
      },
      {
        key: 5, name: '词云图', y: 416, x: 16, width: 84, height: 84, color: '#e76b5a',
      },
    ]);

    const handleUpdate = (items: any[]) => {
      widgets = items;
    };

    return {
      widgets,
      handleUpdate,
    };
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  display: flex;
  flex-flow: column nowrap;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  padding: 24px;
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

.screen {
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 24px;
  border: 1px solid #efefef;
  overflow: auto;
}

.panel {
  position: absolute;
}
</style>
