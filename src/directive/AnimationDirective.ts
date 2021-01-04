import { DirectiveOptions, VNode, VNodeDirective } from 'vue';
import anime from 'animejs';
import Transition from '@/models/Transition';
import {
  Anchor, Animate, AnimationTimelineProp, AnimationType,
} from '@/utils/types';

// get animation timeline options
const animateOptions = (transition: Transition) => {
  const anchorProps = (transition.animations || [])
    .flatMap(({ prop, anchors }: AnimationType) => anchors.map(({ time, value }: Anchor, index: number, array: Anchor[]) => {
      const preAnchor = array[index - 1];
      return {
        startTime: preAnchor ? preAnchor.time : 0,
        endTime: time,
        prop,
        value,
        preValue: preAnchor ? preAnchor.value : 0,
      };
    }));

  // get all time
  const anchorTimes = [...new Set(anchorProps.map((anchorProp: any) => anchorProp.endTime))]
    .sort((a, b) => a - b);

  return anchorProps
    .flatMap(({
      startTime, endTime, prop, value, preValue,
    }) => {
      let middleTime = startTime;
      const sections = [];
      for (const anchorTime of anchorTimes) {
        if (anchorTime > middleTime && anchorTime <= endTime) {
          sections.push({
            startTime: middleTime,
            endTime: anchorTime,
            [prop]: (anchorTime - startTime) / (endTime - startTime) * (value - preValue) + preValue,
          });
          middleTime = anchorTime;
        }
        if (anchorTime > endTime && endTime > middleTime) {
          sections.push({
            startTime: middleTime,
            endTime,
            [prop]: value,
          });
          break;
        }
      }
      return sections;
    })
    .reduce((acc: any[], cur: any) => {
      const collage = acc.find((item: any) => (item.startTime === cur.startTime) && (item.endTime === cur.endTime));
      if (collage) {
        Object.assign(collage, cur);
      } else {
        acc.push(cur);
      }
      return acc;
    }, [])
    .sort((a, b) => a.startTime - b.startTime)
    .map(({ startTime, endTime, ...props }: any, index: number, array: any[]) => {
      const preProp: any = array[index - 1];
      return {
        time: startTime,
        animateProp: {
          duration: preProp ? endTime - preProp?.endTime : endTime,
          ...props,
        },
      };
    });
};

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
    // only need update prop
    if (target && value.transition.needUpdateProp) {
      target.animate.duration = maxTime;
      target.animate.loop = isRepeat;
    }

    // need update options
    if (target && value.transition.needUpdateOption) {
      target.animate.children = [];
      const options = animateOptions(value.transition || {});
      // reset animate options
      options.forEach(({ animateProp, time }) => target.animate.add(animateProp, time));
    }
    value.transition.needUpdateProp = false;
    value.transition.needUpdateOption = false;
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
  mounted(el: HTMLElement, { instance, value }: any) {
    const { maxTime, isRepeat, animates } = instance.$animateParams;
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
  updated(el: HTMLElement, { instance, value }: any) {
    const { maxTime, isRepeat, animates } = instance.$animateParams;
    const target = animates.find((ani: Animate) => ani.key === value.key);
    if (!value.transition) return;
    // only need update prop
    if (target && value.transition.needUpdateProp) {
      target.animate.duration = maxTime;
      target.animate.loop = isRepeat;
    }

    // need update options
    if (target && value.transition.needUpdateOption) {
      target.animate.children = [];
      const options = animateOptions(value.transition || {});
      // reset animate options
      options.forEach(({ animateProp, time }) => target.animate.add(animateProp, time));
    }
    value.transition.needUpdateProp = false;
    value.transition.needUpdateOption = false;
  },
  unmounted(el: HTMLElement, { instance, value }: any) {
    const { animates } = instance.$animateParams;
    const index = animates.findIndex((ani: Animate) => ani.key === value.key);
    if (index !== -1) {
      // remove anime instance
      animates.splice(index, 1);
    }
  },
};

export {
  AnimationDirectiveV2,
  AnimationDirectiveV3,
};
