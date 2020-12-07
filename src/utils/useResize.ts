import {
  onMounted, onUnmounted, reactive, ref,
} from 'vue-demi';
import { useThrottleFn } from '@vueuse/core';

export default function useResize() {
  const rect = reactive({
    x: ref(0),
    y: ref(0),
    width: ref(0),
    height: ref(0),
  });

  const resized = () => {
    const dom = document.getElementById('painter');
    const {
      x, y, height, width,
    } = dom?.getBoundingClientRect() || {
      x: 0, y: 0, width: 0, height: 0,
    };
    rect.x = x;
    rect.y = y;
    rect.width = width;
    rect.height = height;
  };

  onMounted(() => {
    window.addEventListener('resize', useThrottleFn(resized, 16));
  });

  onUnmounted(() => {
    window.removeEventListener('resize', useThrottleFn(resized, 16));
  });

  return {
    rect,
  };
}
