import { DirectiveOptions, VNode, VNodeDirective } from 'vue';
import anime from 'animejs';
import Transition from '@/models/Transition';
import {
  Anchor, Animate, AnimationTimelineProp, AnimationType,
} from '@/utils/types';

// get animation timeline options
const animateOptions = (transition: Transition) => (transition.animations || [])
  .flatMap(({ prop, anchors }: AnimationType) => anchors.map(({ time, value }: Anchor) => ({ anchorTime: time, [prop]: value })))
  .reduce((acc: any[], cur: any) => {
    const collage = acc.find((item: any) => item.anchorTime === cur.anchorTime);
    if (collage) {
      Object.assign(collage, cur);
    } else {
      acc.push(cur);
    }
    return acc;
  }, [])
  .sort((a, b) => a.anchorTime - b.anchorTime)
  .map(({ anchorTime, ...props }: any, index: number, array: any[]) => {
    const preProp: any = array[index - 1];
    return {
      time: preProp ? preProp.anchorTime : 0,
      animateProp: {
        duration: preProp ? anchorTime - preProp?.anchorTime : anchorTime,
        ...props,
      },
    };
  });

const AnimationDirectiveV2: DirectiveOptions = {
  inserted(el: HTMLElement, { value }: VNodeDirective, vNode: VNode) {
    const { maxTime, isRepeat, animates } = (vNode.context as AnimationTimelineProp).$animateParams;
    // init animate instance
    const animate = anime.timeline({
      targets: el,
      delay: 0,
      duration: maxTime || 10000,
      direction: 'normal',
      easing: 'linear',
      loop: isRepeat,
      autoplay: false,
    });
    const options = animateOptions(value.transition || {});
    options.forEach(({ animateProp, time }) => animate.add(animateProp, time));
    animates.push({ key: value.key, animate });
  },
  update(el: HTMLElement, { value }: VNodeDirective, vNode: VNode) {
    const { maxTime, isRepeat, animates } = (vNode.context as AnimationTimelineProp).$animateParams;
    const target = animates.find((ani: Animate) => ani.key === value.key);
    if (target) {
      // update duration and clear old animate options
      target.animate.duration = maxTime;
      target.animate.loop = isRepeat;
      target.animate.children = [];
      const options = animateOptions(value.transition || {});
      // reset animate options
      options.forEach(({ animateProp, time }) => target.animate.add(animateProp, time));
    }
  },
  unbind(el: HTMLElement, { value }: VNodeDirective, vNode: VNode) {
    const { animates } = (vNode.context as AnimationTimelineProp).$animateParams;
    const index = animates.findIndex((ani: Animate) => ani.key === value.key);
    if (index !== -1) {
      // remove anime instance
      animates.splice(index, 1);
    }
  },
};

const AnimationDirectiveV3: any = {
  mounted(el: HTMLElement, { value }: any) {
    const options = animateOptions(value.transition);
    console.log('update: ', options);
  },
};

export {
  AnimationDirectiveV2,
  AnimationDirectiveV3,
};
