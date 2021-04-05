<template>
  <div class="widget" :class="active ? 'widget--active' : ''" v-if="option">
    <div class="widget__header">
      <svg-icon
        :icon-name="!visible ? 'eye-close' : 'circle'"
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
        icon-name="right"
        @click="handleExpanded"
      />

      <span @click="handleExpanded">{{ name }}</span>

      <div class="widget__suffix">
        <svg-icon icon-name="appstore" @click="handleShowAnimations"/>

        <div class="widget__animations">
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
      </div>
    </div>

    <div class="widget__content" v-if="isExpanded">
      <Prop
        v-for="animation in animations"
        :key="animation.prop"
        :time="time"
        :animation="animation"
        @remove="handleRemove"
        @update="handleUpdate"
        @timeUpdate="handleTimeUpdate"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed, ref, reactive,
  defineComponent, toRefs,
} from 'vue-demi';
import clonedeep from 'lodash.clonedeep';
import { ANIMATION_TYPES } from '@/utils/constant.ts';
import { AnimationType } from '@/utils/types.ts';
import SvgIcon from './SvgIcon.vue';
import Prop from './Prop.vue';

export default defineComponent({
  components: {
    SvgIcon,
    Prop,
  },
  props: {
    option: {
      type: Object,
      default: () => ({}),
    },
    time: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      default: false,
    },
    id: {
    },
  },
  setup(props, { emit }) {
    const { option, id } = toRefs(props);
    const animationTypes = reactive(clonedeep(ANIMATION_TYPES));
    const isShowAnimations = ref(false);
    const name = computed(() => option.value.name);
    const visible = computed(() => option.value.visible);
    const isExpanded = computed(() => option.value.isExpanded);
    const isLocked = computed(() => option.value.isLocked);
    const animations = computed(() => option.value.animations);

    const isActive = (prop: string) => animations.value.find((animation: AnimationType) => animation.prop === prop);

    const handleUpdate = () => {
      emit('update', { transition: option.value, key: id?.value });
    };

    const handleTimeUpdate = (t: number) => {
      emit('timeUpdate', t);
    };

    const handleShowAnimations = () => {
      isShowAnimations.value = !isShowAnimations.value;
    };

    const handleSelectAnimation = (animationType: AnimationType) => {
      option.value.isExpanded = true;
      const target = animations.value.find(
        (animation: AnimationType) => animation.prop === animationType.prop,
      );
      if (!target) {
        const propList = ['width', 'height', 'top', 'left'];
        if (propList.includes(animationType.prop)) {
          Object.assign(animationType, { value: option.value[animationType.prop] });
        }
        const { anchors, prop } = animationType;
        animations.value.push(reactive({ anchors, prop }));
      } else {
        const index = animations.value.findIndex(
          (animation: AnimationType) => animation.prop === target.prop,
        );
        animations.value.splice(index, 1);
      }
      handleUpdate();
    };

    const handleVisible = () => {
      option.value.visible = !option.value.visible;
      emit('update', { transition: option.value, key: id?.value });
    };

    const handleLocked = () => {
      option.value.isLocked = !option.value.isLocked;
      handleUpdate();
    };

    const handleExpanded = () => {
      option.value.isExpanded = !option.value.isExpanded;
      handleUpdate();
    };

    const handleRemove = ({ prop }: AnimationType) => {
      const index = animations.value.findIndex((animation: AnimationType) => animation.prop === prop);
      const defaultAnimationType = ANIMATION_TYPES.find((animationType) => animationType.prop === animations.value[index].type);
      Object.assign(animations.value[index], defaultAnimationType);
      animations.value.splice(index, 1);
      handleUpdate();
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
      handleRemove,
      handleUpdate,
      handleTimeUpdate,
    };
  },
});
</script>

<style scoped lang="scss">
.widget {
  position: relative;
  width: 100%;
  font-size: 12px;
  border-bottom: 1px solid #f5f5f5;
  box-sizing: border-box;

  &:hover {
    background: #d7d7d7;
  }

  &--active {
    background: #d7d7d7;
  }

  &__header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 32px;
    padding: 0 12px;
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
    font-size: 12px;
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

    svg:nth-of-type(1):hover + .widget__animations {
      display: flex;
    }
  }

  &__animations {
    position: absolute;
    display: none;
    flex: 1;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    z-index: 1;
    top: 32px;
    background: white;
    overflow: visible;
    width: calc(100% - 24px);
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),
    0 2px 2px 0 rgba(0,0,0,.14),
    0 1px 5px 0 rgba(0,0,0,.12);

    &:hover {
      display: flex;
    }

    &:after {
      position: absolute;
      display: block;
      content: '';
      height: 84px;
      width: 84px;
      top: -32px;
      right: -12px;
      cursor: pointer;
      z-index: -1;
    }

    svg {
      font-size: 14px;
    }

    span, svg {
      color: rgba(0, 0, 0, .34);
    }

    span {
      flex: none;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      width: 22px;
      height: 22px;
      margin: 2px;
    }

    &--active {
      color: rgba(0, 0, 0, 1) !important;

      svg {
        color: rgba(0, 0, 0, 1);
      }
    }
  }
}
</style>
