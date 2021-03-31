import anime from 'animejs';
import Transition from '@/models/Transition';
import { Anchor, AnimationType } from '@/utils/types';
import { LEADING_TIME } from '@/utils/constant';

/**
 * format timeline options
 * @param transition
 */
const animateOptions = (transition: Transition) => {
  const anchorProps = (transition.animations || [])
    .flatMap(({ prop, anchors }: AnimationType) => anchors.map(({ time, value }: Anchor, index: number, array: Anchor[]) => {
      const preAnchor = array[index - 1];
      return {
        startTime: preAnchor ? preAnchor.time : 0,
        endTime: time,
        prop,
        value,
        preValue: preAnchor ? preAnchor.value : +(['opacity', 'scaleX', 'scaleY'].includes(prop) && 1),
      };
    }));

  // get all time
  const anchorTimes = [...new Set(anchorProps.map((anchorProp: any) => anchorProp.endTime))]
    .sort((a, b) => a - b) || [];

  const animateProps = anchorProps
    .flatMap(({
      startTime, endTime, prop, value, preValue,
    }) => {
      let middleTime = startTime;
      const sections: any[] = [];
      for (const anchorTime of anchorTimes) {
        if (startTime === 0 && endTime === 0) {
          const node = sections.find((section) => section.startTime === 0 && section.endTime === 0);
          if (node) {
            Object.assign(node, {
              [prop]: value,
            });
          } else {
            sections.push({
              startTime: middleTime,
              endTime: anchorTime,
              [prop]: value,
            });
          }
        }
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
    }, [{
      startTime: 0, endTime: 0, opacity: 1, scaleX: 1, scaleY: 1,
    }])
    .sort((a, b) => a.startTime - b.startTime)
    .map(({ endTime, ...props }: any, index: number, array: any[]) => {
      const preProp: any = array[index - 1];
      Reflect.deleteProperty(props, 'startTime');
      const duration = preProp ? endTime - preProp?.endTime : endTime;
      return {
        duration: duration || LEADING_TIME,
        ...props,
      };
    });

  return { anchorTimes, animateProps };
};

/**
 * generate animates
 * @param transitions
 */
const generateAnimates = (transitions: Transition[]) => {
  const animates: any[] = [];
  const times: any[] = [];

  transitions.forEach((transition: Transition) => {
    const { maxTime, isRepeat, key } = transition;
    const targets: HTMLElement | null = document.getElementById(key);
    if (targets) {
      targets.style.transform = 'none';
    }
    const animate = anime.timeline({
      targets,
      delay: 0,
      duration: (maxTime || 10000) + LEADING_TIME,
      direction: 'normal',
      easing: 'linear',
      loop: isRepeat,
      autoplay: false,
    });
    const { anchorTimes, animateProps } = animateOptions(transition || {});
    animateProps.forEach((animateProp) => animate.add(animateProp));
    animates.push(animate);
    times.push(...anchorTimes);
  });

  return {
    animates,
    times: [...new Set(times)].sort((a, b) => a - b),
  };
};

export {
  animateOptions,
  generateAnimates,
};
