<template>
  <div class="prop">
    <svg-icon icon-name="close" @click="$emit('remove', animate)" />

    <span class="prop__divider"></span>

    <p>{{ animate.name }}</p>

    <input
      type="text"
      v-model.number="animate.value"
      ref="input"
      @input="handleInput"
    >

    <svg-icon
      :class="{'prop__icon--active': animate.curve && isAnchorActive(animate.anchors)}"
      icon-name="all"
      @click="handleCurve"
    />

    <div class="prop__control">
      <svg-icon icon-name="left" @click="$emit('left', animate)" />

      <span
        :class="{
              'prop__anchor': true,
              'prop__anchor--active': isAnchorActive(animate.anchors),
            }"
        @click="$emit('anchor', animate)"
      ></span>

      <svg-icon icon-name="right" @click="$emit('right', animate)" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref, toRefs } from 'vue-demi';
import { Anchor, AnimationType } from '@/utils/types.ts';
import { ANIMATION_TYPES } from '@/utils/constant';
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
    const animate = computed(() => {
      const defaultAnimationType = ANIMATION_TYPES.find((animationType) => animationType.prop === animation.value.prop);
      return { ...defaultAnimationType, ...animation.value };
    });

    const value = ref('');

    const isActive = (prop: string) => animation.value.find((type: AnimationType) => type.prop === prop);

    const isAnchorActive = (anchors: Anchor[]) => anchors.some((anchor: Anchor) => anchor.time === time.value);

    const handleInput = (event: Event) => {
      console.log('input: ', event);
    };

    const handleCurve = () => {
      console.log('remove');
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
      console.log('remove');
    };

    const handleRight = () => {
      console.log('remove');
    };

    return {
      value,
      animate,
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
