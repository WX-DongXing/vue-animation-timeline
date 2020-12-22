import { DirectiveOptions, VNode, VNodeDirective } from 'vue';
import anime from 'animejs';
import Transition from '@/models/Transition';
import {
  Anchor, Animate, AnimationTimelineProp, AnimationType,
} from '@/utils/types';

// get animation timeline options
const animateOptions = (transition: Transition) => transition.animations || []
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
  .map(({ anchorTime, ...props }: any, index: number, array: any[]) => {
    const preProp: any = array[index - 1];
    return {
      time: preProp ? preProp.anchorTime : 0,
      duration: preProp ? anchorTime - preProp?.anchorTime : anchorTime,
      ...props,
    };
  });

const AnimationDirectiveV2: DirectiveOptions = {
  inserted(el: HTMLElement, { value }: VNodeDirective, vNode: VNode) {
    const { maxTime, animates } = (vNode.context as AnimationTimelineProp).$animateParams;
    const animate = anime.timeline({
      targets: el,
      delay: 0,
      duration: maxTime || 10000,
      direction: 'normal',
      loop: false,
      autoplay: false,
    });
    const options = animateOptions(value.transition || []);
    options.forEach((option) => animate.add(option));
    animates.push({ key: value.key, animate });
  },
  update(el: HTMLElement, { value }: VNodeDirective, vNode: VNode) {
    const { maxTime, animates } = (vNode.context as AnimationTimelineProp).$animateParams;
    const target = animates.find((ani: Animate) => ani.key === value.key);
    if (target) {
      target.animate.duration = maxTime;
      target.animate.children = [];
      const options = animateOptions(value.transition);
      options.forEach((option) => target.animate.add(option));
    }
  },
  unbind(el: HTMLElement, { value }: VNodeDirective, vNode: VNode) {
    const { animates } = (vNode.context as AnimationTimelineProp).$animateParams;
    const index = animates.findIndex((ani: Animate) => ani.key === value.key);
    if (index !== -1) {
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
