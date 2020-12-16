<template>
  <div class="widget">
    <div class="widget__header">
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

      <div class="widget__suffix">
        <svg-icon icon-name="activity" />
        <svg-icon icon-name="layers" @click="handleShowAnimations"/>
      </div>
    </div>

    <div class="widget__animations" v-if="isShowAnimations">
      <span
        v-for="animationType in animationTypes"
        :class="{'widget__animations--active': isActive(animationType.prop)}"
        :key="animationType.prop"
        :title="animationType.title"
        @click="handleSelectAnimation(animationType)"
      >
        <svg-icon :icon-name="animationType.icon" /> {{ animationType.desc }}
      </span>
    </div>

    <div class="widget__row"></div>
  </div>
</template>

<script lang="ts">
import {
  computed, ref,
  defineComponent, toRefs, reactive,
} from 'vue-demi';
import { ANIMATIONTYPES, AnimationType } from '@/utils/Constant.ts';
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
    const animationTypes = reactive(ANIMATIONTYPES);
    const isShowAnimations = ref(false);
    const name = computed(() => option.value.name);
    const visible = computed(() => option.value.visible);
    const isExpanded = computed(() => option.value.isExpanded);
    const isLocked = computed(() => option.value.isLocked);
    const animations = reactive<AnimationType | any>(option.value.animations || []);

    const handleShowAnimations = () => {
      isShowAnimations.value = !isShowAnimations.value;
    };

    const handleSelectAnimation = (animationType: AnimationType) => {
      // eslint-disable-next-line max-len
      const target = animations.find((animation: AnimationType) => animation.prop === animationType.prop);
      if (!target) {
        animations.push(animationType);
      } else {
        // eslint-disable-next-line max-len
        const index = animations.findIndex((animation: AnimationType) => animation.prop === target.prop);
        animations.splice(index, 1);
      }
    };

    // eslint-disable-next-line max-len
    const isActive = (prop: string) => animations.find((animation: AnimationType) => animation.prop === prop);

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
      isShowAnimations,
      animations,
      animationTypes,
      isActive,
      handleVisible,
      handleLocked,
      handleExpanded,
      handleShowAnimations,
      handleSelectAnimation,
    };
  },
});
</script>

<style scoped lang="less">
.widget {
  width: 100%;
  font-size: 12px;
  border-bottom: 1px solid #efefef;
  box-sizing: border-box;
  padding-right: 12px;

  &__header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 32px;
  }

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

  &__suffix {
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
  }

  &__animations {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    height: 48px;

    span, svg {
      color: rgba(0, 0, 0, .34);
    }

    span + span {
      margin: 4px;
      color: rgba(0, 0, 0, .34);
    }

    &--active {
      color: rgba(0, 0, 0, 1) !important;

      svg {
        color: rgba(0, 0, 0, 1);
      }
    }
  }

  &__row {
    height: 32px;
  }
}
</style>
