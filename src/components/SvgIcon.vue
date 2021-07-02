/**
 * @desc svg icon
 * @date: 2020/12/7
 * @time: 13:59
 */

<template>
  <svg :class="svgClass" aria-hidden="true" v-bind="$attrs" @click="$emit('click')">
    <use :xlink:href="svgName" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from 'vue-demi';

export default defineComponent({
  props: {
    iconName: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const { iconName, className } = toRefs(props);
    const svgName = computed(() => `#icon-${iconName.value}`);
    const svgClass = computed(() => `svg-icon ${className.value}`);
    return {
      svgName,
      svgClass,
    };
  },
});
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
</style>
