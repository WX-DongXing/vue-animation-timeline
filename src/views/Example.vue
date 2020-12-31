<template>
  <div class="example">
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
        <span>{{ widget.name }}</span>
      </div>
    </div>
    <animation-timeline :widgets="widgets" :fields="fields" @onUpdate="handleUpdate" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  data() {
    return {
      widgets: [
        {
          key: 1, name: 'A', y: 16, x: 16, width: 84, height: 84, color: '#6597fb',
        },
        {
          key: 2, name: 'B', y: 116, x: 16, width: 84, height: 84, color: '#61daac',
        },
        {
          key: 3, name: 'C', y: 216, x: 16, width: 84, height: 84, color: '#667798',
        },
        {
          key: 4, name: 'D', y: 316, x: 16, width: 84, height: 84, color: '#76cced',
        },
        {
          key: 5, name: 'E', y: 416, x: 16, width: 84, height: 84, color: '#e76b5a',
        },
      ],
      fields: {
        name: 'name',
        width: 'width',
        height: 'height',
        top: 'y',
        left: 'x',
      },
    };
  },
  methods: {
    handleUpdate(items: any[]) {
      this.widgets = items;
    },
  },
});
</script>

<style scoped>
.example {
  display: flex;
  flex-flow: column nowrap;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 24px;
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
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  perspective: 600px;
  color: white;
  font-size: 32px;
}
</style>
