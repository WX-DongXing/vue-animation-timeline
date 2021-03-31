import { isVue2 } from 'vue-demi';
import AnimationTimeline from '@/lib/AnimationTimeline.vue';
import {
  AnimationDirectiveV2,
  AnimationDirectiveV3,
} from '@/directive/AnimationDirective';
import '@/assets/iconfont';
import { LEADING_TIME } from '@/utils/constant';

export { AnimationTimeline };

export default {
  install: (app: any) => {
    app.component('AnimationTimeline', AnimationTimeline);
    app.directive(
      'transition', isVue2 ? AnimationDirectiveV2 : AnimationDirectiveV3,
    );

    if (isVue2) {
      app.prototype.$animateParams = {
        // timeline max time
        maxTime: 10000,
        // store anime instance
        animates: [],
        // repeat animate
        isRepeat: false,
        // all the anchor time
        times: [],
      };

      app.prototype.$animate = {
        play: (time: number | null) => {
          app.prototype.$animateParams.animates.forEach((animate: any) => {
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
          });
        },
        pause: () => {
          app.prototype.$animateParams.animates.forEach((animate: any) => animate.pause());
        },
        restart: () => {
          app.prototype.$animateParams.animates.forEach((animate: any) => {
            animate.play();
            animate.pause();
            animate.seek(LEADING_TIME);
            setTimeout(() => {
              animate.play();
            });
          });
        },
        seek: (time: number | null) => {
          app.prototype.$animateParams.animates.forEach((animate: any) => animate.seek(LEADING_TIME + (time || 0)));
        },
      };
    } else {
      app.config.globalProperties.$animateParams = {
        // timeline max time
        maxTime: 10000,
        // store anime instance
        animates: [],
        // repeat animate
        isRepeat: false,
        // all the anchor time
        times: [],
      };

      const { animates } = app.config.globalProperties.$animateParams;

      app.config.globalProperties.$animate = {
        play: (time: number | null) => {
          animates.forEach((animate: any) => {
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
          });
        },
        pause: () => {
          animates.forEach(({ animate }: any) => animate.pause());
        },
        restart: () => {
          animates.forEach(({ animate }: any) => {
            animate.play();
            animate.pause();
            animate.seek(LEADING_TIME);
            setTimeout(() => {
              animate.play();
            });
          });
        },
        seek: (time: number | null) => {
          animates.forEach(({ animate }: any) => animate.seek(LEADING_TIME + (time || 0)));
        },
      };
    }
  },
};
