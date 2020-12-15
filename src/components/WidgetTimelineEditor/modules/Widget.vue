<template>
  <div class="widget">
    <svg-icon
      :icon-name="!visible ? 'eye-off' : 'circle'"
      @click="handleVisible"
    />

    <svg-icon
      :icon-name="isLocked ? 'lock' : 'circle'"
      @click="handleLocked"
    />

    <span class="widget__divider"></span>

    <svg-icon
      :class="[
        'widget__expand',
        isExpanded ? 'widget__expand--active' : ''
      ]"
      icon-name="chevron-right"
      @click="handleExpanded"
    />

    <span @click="handleExpanded">{{ name }}</span>

    <div class="widget__animations">
      <svg-icon icon-name="activity" />
      <svg-icon icon-name="layers" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent, toRefs,
} from 'vue-demi';
import SvgIcon from './SvgIcon.vue';

export default defineComponent({
  components: {
    SvgIcon,
  },
  props: {
    option: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const { option } = toRefs(props);

    const name = computed(() => option.value.name);
    const visible = computed(() => option.value.visible);
    const isExpanded = computed(() => option.value.isExpanded);
    const isLocked = computed(() => option.value.isLocked);

    const handleVisible = () => {
      option.value.visible = !option.value.visible;
    };

    const handleLocked = () => {
      option.value.isLocked = !option.value.isLocked;
    };

    const handleExpanded = () => {
      option.value.isExpanded = !option.value.isExpanded;
    };

    return {
      name,
      visible,
      isExpanded,
      isLocked,
      handleVisible,
      handleLocked,
      handleExpanded,
    };
  },
});
</script>

<style scoped lang="less">
.widget {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  height: 32px;
  width: 100%;
  font-size: 12px;
  border-bottom: 1px solid #efefef;
  box-sizing: border-box;
  padding-right: 12px;

  svg {
    flex: none;
    font-size: 12px;
    cursor: pointer;
  }

  svg + svg {
    margin-left: 12px;
  }

  svg.widget__expand {
    font-size: 16px;
    margin: 0 4px 0 0;
    cursor: pointer;
    transition: transform 150ms;
    transform: rotate(0);

    &--active {
      transform: rotate(90deg);
    }
  }

  span {
    flex: none;
    cursor: pointer;
  }

  &__divider {
    flex: none;
    height: 16px;
    width: 1px;
    background: #cccccc;
    margin: 0 12px;
  }

  &__animations {
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
