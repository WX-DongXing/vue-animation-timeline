<template>
  <div id="app">
    <widget-timeline-editor />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WidgetTimelineEditor from '@/components/WidgetTimelineEditor/index.vue';

@Component({
  components: {
    WidgetTimelineEditor,
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
