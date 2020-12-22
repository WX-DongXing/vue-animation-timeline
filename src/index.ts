import { isVue2 } from 'vue-demi';
import VueAnimationTimeline from '@/components/AnimationTimeline/index.vue';
import { AnimationDirectiveV2, AnimationDirectiveV3 } from '@/directive/AnimationDirective';

const install = (app: any) => {
  app.component(VueAnimationTimeline.name, VueAnimationTimeline);
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
      // @ts-ignore
      app.prototype.$animateParams.animates.forEach(({ animate }: any) => animate.play());
    },
    pause: () => {
      // @ts-ignore
      app.prototype.$animateParams.animates.forEach(({ animate }: any) => animate.pause());
    },
    restart: () => {
      // @ts-ignore
      app.prototype.$animateParams.animates.forEach(({ animate }: any) => animate.restart());
    },
    seek: (timeStamp: number) => {
      // @ts-ignore
      app.prototype.$animateParams.animates.forEach(({ animate }: any) => animate.seek(timeStamp));
    },
  };
};

export default install;
