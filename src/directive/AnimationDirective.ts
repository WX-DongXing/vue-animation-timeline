import { generateAnimates } from '@/utils';
import { LEADING_TIME } from '@/utils/constant';

const AnimationDirectiveV2: any = {
  inserted(el: HTMLElement, { value }: any) {
    const [animate] = generateAnimates([value.transition]);
    if (animate) {
      animate.seek(LEADING_TIME);
      animate.play();
    }
  },
};

const AnimationDirectiveV3: any = {
  mounted(el: HTMLElement, { value }: any) {
    const [animate] = generateAnimates([value.transition]);
    if (animate) {
      animate.seek(LEADING_TIME);
      animate.play();
    }
  },
};

export {
  AnimationDirectiveV2,
  AnimationDirectiveV3,
};
