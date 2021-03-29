import { generateAnimates } from '@/utils';

const AnimationDirectiveV2: any = {
  inserted(el: HTMLElement, { value }: any) {
    const [animate] = generateAnimates([value.transition]);
    if (animate) {
      animate.play();
    }
  },
};

const AnimationDirectiveV3: any = {
  mounted(el: HTMLElement, { value }: any) {
    const [animate] = generateAnimates([value.transition]);
    if (animate) {
      animate.play();
    }
  },
};

export {
  AnimationDirectiveV2,
  AnimationDirectiveV3,
};
