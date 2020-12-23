<template>
  <div id="app">
    <div class="screen">
      <div
        class="panel"
        v-for="widget in widgets"
        v-animation="widget"
        :key="widget.key"
        :style="{
          height: `${widget.height}px`,
          width: `${widget.width}px`,
          top: `${widget.y}px`,
          left: `${widget.x}px`,
          background: `${widget.color}`,
        }"
      >
      </div>
    </div>
    <animation-timeline :widgets="widgets" @update="handleUpdate" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  data() {
    return {
      widgets: [
        {
          key: 1, name: '明细表', y: 16, x: 16, width: 84, height: 84, color: '#6597fb',
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
      ],
    };
  },
  methods: {
    handleUpdate(items: any[]) {
      this.widgets = items;
    },
  },
});
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
  perspective: 600px;
}
</style>
