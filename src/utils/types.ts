import Vue from 'vue';

interface Anchor {
  time: number;
  value: number;
  curve?: string;
}

interface AnimationType {
  name: string;
  title: string;
  icon: string;
  prop: string;
  desc: string;
  value: number;
  anchors: Anchor[];
}

interface Animate {
  key: number | string;
  animate: any;
}

interface AnimationParams {
  maxTime: number;
  animates: Animate[];
}

interface AnimationTimelineProp extends Vue {
  '$animateParams': AnimationParams;
  '$play': Function;
}

export {
  Anchor,
  Animate,
  AnimationType,
  AnimationParams,
  AnimationTimelineProp,
};
