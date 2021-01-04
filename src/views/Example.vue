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
        }"
      >
        <div class="panel__side panel__font">
          <span>{{ widget.name }}</span>
        </div>
        <div class="panel__side panel__back"></div>
        <div class="panel__side panel__top"></div>
        <div class="panel__side panel__bottom"></div>
        <div class="panel__side panel__left"></div>
        <div class="panel__side panel__right"></div>
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
          key: 1, name: 'A', y: 32, x: 72, width: 84, height: 84,
        },
        {
          key: 2, name: 'B', y: 132, x: 72, width: 84, height: 84,
        },
        {
          key: 3, name: 'C', y: 232, x: 72, width: 84, height: 84,
        },
        {
          key: 4, name: 'D', y: 332, x: 72, width: 84, height: 84,
        },
        {
          key: 5, name: 'E', y: 432, x: 72, width: 84, height: 84,
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

<style scoped lang="scss">
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
  perspective: 1200px;
}

.panel {
  position: absolute;
  color: white;
  font-size: 32px;
  perspective: 1200px;
  transform-style: preserve-3d;

  &__side {
    position: absolute;
    width: 84px;
    height: 84px;
  }

  &__font {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    transform: translateZ(42px);
    background: #2ec7c9;
  }

  &__back {
    background: #5ab1ef;
    transform: translateZ(-42px);
  }

  &__top {
    background: #ffba80;
    transform: rotateX(90deg) translateZ(42px);
  }

  &__bottom {
    background: #d87a80;
    transform: rotateX(90deg) translateZ(-42px);
  }

  &__left {
    background: #8d99b3;
    transform: rotateY(90deg) translateZ(-42px);
  }

  &__right {
    background: #b7a2de;
    transform: rotateY(90deg) translateZ(42px);
  }
}
</style>
