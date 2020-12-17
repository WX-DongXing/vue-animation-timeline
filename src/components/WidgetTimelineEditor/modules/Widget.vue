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
      <div
        class="widget__row"
        v-for="animation in animations"
        :key="animation.prop"
      >
        <svg-icon icon-name="x" @click="handleRemove(animation)" />

        <span class="widget__divider"></span>

        <p>{{ animation.name }}: </p>

        <input
          type="text"
          v-model.number="animation.value"
          ref="input"
        >

        <div class="widget__control">
          <svg-icon icon-name="chevron-left" @click="handleLeft(animation)" />

          <span
            :class="{
              'widget__anchor': true,
              'widget__anchor--active': isAnchorActive(animation.anchors),
            }"
            @click="handleAnchor(animation)"
          ></span>

          <svg-icon icon-name="chevron-right" @click="handleRight(animation)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed, ref,
  defineComponent, toRefs, reactive,
} from 'vue-demi';
import { Anchor, ANIMATION_TYPES, AnimationType } from '@/utils/Constant.ts';
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
    time: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const { option, time } = toRefs(props);
    const animationTypes = reactive(ANIMATION_TYPES);
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
      option.value.isExpanded = true;
      const target = animations.find(
        (animation: AnimationType) => animation.prop === animationType.prop,
      );
      if (!target) {
        animations.push(animationType);
      } else {
        const index = animations.findIndex(
          (animation: AnimationType) => animation.prop === target.prop,
        );
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

    const handleRemove = ({ prop }: AnimationType) => {
      const index = animations.findIndex((animation: AnimationType) => animation.prop === prop);
      animations[index].anchors = [];
      animations.splice(index, 1);
    };

    const handleLeft = ({ prop }: AnimationType) => {
      console.log(prop);
    };

    const handleRight = ({ anchors }: AnimationType) => {
      console.log(anchors);
      emit('timeUpdate', 1000);
    };

    const handleAnchor = ({ anchors, value }: AnimationType) => {
      const index = anchors.findIndex((anchor: Anchor) => anchor.time === time.value);
      if (index === -1) {
        anchors.push({ time: time.value, value });
        anchors.sort((anchorA: Anchor, anchorB: Anchor) => anchorA.time - anchorB.time);
      } else {
        anchors.splice(index, 1);
      }
    };

    // eslint-disable-next-line max-len
    const isAnchorActive = (anchors: Anchor[]) => anchors.some((anchor: Anchor) => anchor.time === time.value);

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
      handleLeft,
      handleRight,
      handleAnchor,
      isAnchorActive,
    };
  },
});
</script>

<style scoped lang="less">
.widget {
  position: relative;
  width: 100%;
  font-size: 12px;
  border-bottom: 1px solid #f5f5f5;
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

    svg:nth-of-type(2):hover + .widget__animations {
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
    width: calc(100% - 13px);
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
      height: 32px;
      width: 32px;
      top: -32px;
      right: -12px;
      cursor: pointer;
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

  &__row {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 32px;
    border-top: 1px solid #F5F5F5;

    svg {
      cursor: pointer;
      color: rgba(0, 0, 0, .56);

      &:hover {
        color: rgba(0, 0, 0, 1);
      }
    }

    p {
      flex: none;
      font-size: 12px;
      width: 56px;
      text-align: right;
    }

    input {
      flex: none;
      width: 60px;
      border: none;
      outline: none;
      font-size: 12px;
      //cursor: ew-resize;
      border-top: 1px solid transparent;
      border-bottom: 1px solid rgba(0, 0, 0, .12);
      margin: 0 12px;
      background: transparent;
    }
  }

  &__control {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  &__anchor {
    width: 5px;
    height: 5px;
    border: 1px solid rgba(0, 0, 0, .56);
    transform: rotate(45deg);
    cursor: pointer;

    &:hover {
      border: 1px solid rgba(0, 0, 0, 1);
    }

    &--active {
      background: black;
    }
  }
}
</style>
