import anime from 'animejs';
import Transition from '@/models/Transition';
import { Anchor, AnimationType } from '@/utils/types';

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

/**
 * generate animates
 * @param transitions
 */
const generateAnimates = (transitions: Transition[]) => transitions.map((transition: Transition) => {
  const { maxTime, isRepeat, key } = transition;
  const animate = anime.timeline({
    targets: document.getElementById(key),
    delay: 0,
    duration: maxTime || 10000,
    direction: 'normal',
    easing: 'linear',
    loop: isRepeat,
    autoplay: false,
  });
  const options = animateOptions(transition || {});
  options.forEach(({ animateProp, time }) => animate.add(animateProp, time));
  return animate;
});

export {
  animateOptions,
  generateAnimates,
};
