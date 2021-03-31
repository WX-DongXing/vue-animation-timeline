import { onMounted, onUnmounted } from 'vue-demi';
import key from 'keymaster';

export default function useKey(name: string, callback: KeyHandler) {
  onMounted(() => {
    key(name, callback);
  });

  onUnmounted(() => {
    key.unbind(name);
  });
}
