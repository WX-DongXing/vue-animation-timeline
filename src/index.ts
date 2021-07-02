import { isVue2 } from 'vue-demi';
import AnimationTimeline from '@/lib/AnimationTimeline.vue';
import {
  AnimationDirectiveV2,
  AnimationDirectiveV3,
} from '@/directive/AnimationDirective';
import '@/assets/iconfont';
import { LEADING_TIME } from '@/utils/constant';

export { AnimationTimeline };

const animateParams = {
  // timeline max time
  maxTime: 10000,
  // store anime instance
  animates: [],
  // repeat animate
  isRepeat: false,
};

const batchPlay = (time: number | null, animates: any[]) => {
  for (const animate of animates) {
    if (time) {
      animate.completed = false;
      animate.play();
      return;
    }
    animate.play();
    animate.pause();
    animate.seek(LEADING_TIME);
    setTimeout(() => {
      animate.play();
    });
  }
};

const batchPause = (animates: any[]) => {
  for (const animate of animates) {
    animate.pause();
  }
};

const batchRestart = (animates: any[]) => {
  for (const animate of animates) {
    animate.play();
    animate.pause();
    animate.seek(LEADING_TIME);
    setTimeout(() => {
      animate.play();
    });
  }
};

const batchSeek = (time: number | null, animates: any[]) => {
  for (const animate of animates) {
    animate.seek(LEADING_TIME + (time || 0));
  }
};

export default {
  install: (app: any) => {
    app.component('AnimationTimeline', AnimationTimeline);
    app.directive(
      'transition', isVue2 ? AnimationDirectiveV2 : AnimationDirectiveV3,
    );

    if (isVue2) {
      app.prototype.$animateParams = { ...animateParams };

      app.prototype.$animate = {
        play: (time: number | null) => batchPlay(time, app.prototype.$animateParams.animates),
        pause: () => batchPause(app.prototype.$animateParams.animates),
        restart: () => batchRestart(app.prototype.$animateParams.animates),
        seek: (time: number | null) => batchSeek(time, app.prototype.$animateParams.animates),
      };
    } else {
      app.config.globalProperties.$animateParams = { ...animateParams };

      app.config.globalProperties.$animate = {
        play: (time: number | null) => batchPlay(time, app.config.globalProperties.$animateParams.animates),
        pause: () => batchPause(app.config.globalProperties.$animateParamsanimates),
        restart: () => batchRestart(app.config.globalProperties.$animateParams.animates),
        seek: (time: number | null) => batchSeek(time, app.config.globalProperties.$animateParams.animates),
      };
    }
  },
};
