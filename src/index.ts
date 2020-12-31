import { isVue2 } from 'vue-demi';
import AnimationTimeline from '@/lib/AnimationTimeline.vue';
import { AnimationDirectiveV2, AnimationDirectiveV3 } from '@/directive/AnimationDirective';

export { AnimationTimeline };

export default {
  install: (app: any) => {
    app.component(AnimationTimeline.name, AnimationTimeline);
    app.directive(
      'animation', isVue2 ? AnimationDirectiveV2 : AnimationDirectiveV3,
    );
    app.prototype.$animateParams = {
      // timeline max time
      maxTime: 10000,
      // store anime instance
      animates: [],
      // repeat animate
      isRepeat: false,
    };

    app.prototype.$animate = {
      play: () => {
        app.prototype.$animateParams.animates.forEach(({ animate }: any) => animate.play());
      },
      pause: () => {
        app.prototype.$animateParams.animates.forEach(({ animate }: any) => animate.pause());
      },
      restart: () => {
        app.prototype.$animateParams.animates.forEach(({ animate }: any) => animate.restart());
      },
      seek: (timeStamp: number) => {
        app.prototype.$animateParams.animates.forEach(({ animate }: any) => animate.seek(timeStamp));
      },
    };
  },
};
