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
        v-for="animation in animations"
        :key="animation.prop"
        :title="animation.title"
        @click="handleSelectAnimation(animation)"
      >
        <svg-icon :icon-name="animation.icon" /> {{ animation.desc }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed, ref,
  defineComponent, toRefs, reactive,
} from 'vue-demi';
import { ANIMATIONS, Animation } from '@/utils/Constant';
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
    const animations = reactive(ANIMATIONS);

    const isShowAnimations = ref(false);
    const name = computed(() => option.value.name);
    const visible = computed(() => option.value.visible);
    const isExpanded = computed(() => option.value.isExpanded);
    const isLocked = computed(() => option.value.isLocked);

    const handleShowAnimations = () => {
      isShowAnimations.value = !isShowAnimations.value;
    };

    const handleSelectAnimation = (animation: Animation) => {
      console.log(animation);
    };

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
      animations,
      name,
      visible,
      isExpanded,
      isLocked,
      isShowAnimations,
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
      color: rgba(0, 0, 0, 1);
    }
  }
}
</style>
