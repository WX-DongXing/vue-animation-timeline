<template>
  <div class="prop" v-if="animationProp">
    <svg-icon icon-name="close" @click="$emit('remove', animationProp)" />

    <span class="prop__divider"></span>

    <p>{{ animationProp.name }}</p>

    <input
      type="text"
      v-model.number="value"
      ref="input"
      @input="handleInput"
    >

    <svg-icon
      :class="{'prop__icon--active': animationProp.curve && isAnchorActive(animation.anchors)}"
      icon-name="all"
      @click="handleCurve"
    />

    <div class="prop__control">
      <svg-icon icon-name="left" @click="handleLeft" />

      <span
        :class="{
              'prop__anchor': true,
              'prop__anchor--active': isAnchorActive(animation.anchors),
            }"
        @click="handleAnchor"
      ></span>

      <svg-icon icon-name="right" @click="handleRight" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref, toRefs,
} from 'vue-demi';
import { Anchor, AnimationType } from '@/utils/types.ts';
import { ANIMATION_TYPES } from '@/utils/constant';
import { debouncedWatch } from '@vueuse/core';
import SvgIcon from './SvgIcon.vue';

export default {
  name: 'Prop',
  components: {
    SvgIcon,
  },
  props: {
    animation: {
      type: Object,
      default: () => ({}),
    },
    time: {
      type: Number,
      default: 0,
    },
  },
  setup(props: any, { emit }: any) {
    const { animation, time } = toRefs(props);
    const animationProp: any = ref(ANIMATION_TYPES.find((animationType) => animationType.prop === animation.value.prop));

    const value = ref(animationProp ? animationProp.value.value : 0);

    const isActive = (prop: string) => animation.value.find((type: AnimationType) => type.prop === prop);

    const isAnchorActive = (anchors: Anchor[]) => anchors.some((anchor: Anchor) => anchor.time === time.value);

    const handleInput = (event: any) => {
      const index = animation.value.anchors.findIndex((anchor: Anchor) => +anchor.time === +time.value);
      if (index !== -1) {
        const anchor: Anchor = animation.value.anchors[index];
        animation.value.anchors.splice(index, 1, { ...anchor, value: +event.target.value });
      }
      emit('update');
    };

    const handleCurve = () => {
      console.log('curve');
    };

    const handleLeft = () => {
      const { anchors } = animation.value;
      if (anchors.length === 0) return;
      const minAnchorTime = anchors[0].time;
      if (minAnchorTime >= time.value) {
        return;
      }
      const lastAnchor = anchors[anchors.length - 1];
      if (lastAnchor.time < time.value) {
        emit('timeUpdate', lastAnchor.time);
        return;
      }

      for (const index in anchors) {
        if (anchors[index].time >= time.value) {
          const preAnchor = anchors[+index - 1];
          !!preAnchor && emit('timeUpdate', preAnchor.time);
          break;
        }
      }
    };

    const handleAnchor = () => {
      const { anchors } = animation.value;
      const index = anchors.findIndex((anchor: Anchor) => anchor.time === time.value);
      if (index === -1) {
        anchors.push({ time: time.value, value: value.value });
        anchors.sort((anchorA: Anchor, anchorB: Anchor) => anchorA.time - anchorB.time);
      } else {
        anchors.splice(index, 1);
      }
      emit('update');
    };

    const handleRight = () => {
      const { anchors } = animation.value;
      if (anchors.length === 0) return;
      const maxAnchorTime = anchors[anchors.length - 1].time;
      if (maxAnchorTime <= time.value) {
        return;
      }

      for (const index in anchors) {
        if (anchors[index].time === time.value) {
          const nextAnchor = anchors[+index + 1];
          !!nextAnchor && emit('timeUpdate', nextAnchor.time);
          break;
        }

        if (anchors[index].time > time.value) {
          emit('timeUpdate', anchors[index].time);
          break;
        }
      }
    };

    debouncedWatch(time, (newTime) => {
      if (animation.value.anchors.length) {
        const anchor = animation.value.anchors.find((item: any) => item.time === newTime);
        if (anchor) {
          value.value = anchor.value;
        }
      }
    }, { debounce: 100 });

    return {
      value,
      animationProp,
      isActive,
      isAnchorActive,
      handleInput,
      handleCurve,
      handleLeft,
      handleAnchor,
      handleRight,
    };
  },
};
</script>

<style scoped lang="scss">
.prop {
  flex: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 32px;
  box-sizing: border-box;
  padding: 0 12px;
  background: whitesmoke;
  border-bottom: 1px solid #fafafa;

  svg {
    flex: none;
    font-size: 12px;
    cursor: pointer;
  }

  svg + svg {
    margin-left: 12px;
  }

  &__divider {
    flex: none;
    height: 16px;
    width: 1px;
    background: #cccccc;
    margin: 0 12px;
  }

  &__control {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-left: 6px;

    svg {
      font-size: 10px;
    }
  }

  p {
    flex: none;
    font-size: 12px;
    width: 56px;
    text-align: right;
    margin: 0;
  }

  input {
    flex: none;
    width: 40px;
    border: none;
    outline: none;
    font-size: 12px;
    border-top: 1px solid transparent;
    border-bottom: 1px solid rgba(0, 0, 0, .12);
    margin: 0 12px;
    background: transparent;
  }

  &__anchor {
    width: 5px;
    height: 5px;
    border: 1px solid rgba(0, 0, 0, .56);
    transform: rotate(45deg);
    cursor: pointer;
    box-sizing: content-box;

    &:hover {
      border: 1px solid rgba(0, 0, 0, 1);
    }

    &--active {
      background: black;
    }
  }

  &__icon {

    &--active {
      background: black;
    }
  }
}
</style>
