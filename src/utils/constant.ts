export interface Anchor {
  time: number;
  value: number;
  curve?: string;
}

export interface AnimationType {
  name: string;
  title: string;
  icon: string;
  prop: string;
  desc: string;
  value: number;
  anchors: Anchor[];
}

const OFFSET = 50;

const TICK_MIN_LENGTH = 50;

const TICK_MAX_LENGTH = 150;

const DEFAULT_OPTION = {
  isExpanded: false,
  visible: true,
  isLocked: false,
  animations: [],
};

const ANIMATION_OPTIONS = {
  delay: 0,
  duration: 50,
  easing: 'easeLinear',
};

const ANIMATION_TYPES: AnimationType[] = [
  {
    name: '宽', title: 'width', icon: 'more-horizontal', prop: 'width', desc: '', value: 0, anchors: [],
  },
  {
    name: '高', title: 'height', icon: 'more-vertical', prop: 'height', desc: '', value: 0, anchors: [],
  },
  {
    name: '水平位置', title: 'x', icon: 'move', prop: 'x', desc: 'x', value: 0, anchors: [],
  },
  {
    name: '垂直位置', title: 'y', icon: 'move', prop: 'y', desc: 'y', value: 0, anchors: [],
  },
  {
    name: '水平位移', title: 'translate-x', icon: 'navigation', prop: 'translateX', desc: 'x', value: 0, anchors: [],
  },
  {
    name: '垂直位移', title: 'translate-y', icon: 'navigation', prop: 'translateY', desc: 'y', value: 0, anchors: [],
  },
  {
    name: '纵深位移', title: 'translate-z', icon: 'navigation', prop: 'translateZ', desc: 'z', value: 0, anchors: [],
  },
  {
    name: '不透明度', title: 'opacity', icon: 'droplet', prop: 'opacity', desc: '', value: 1, anchors: [],
  },
  {
    name: '水平旋转', title: 'rotate-x', icon: 'rotate-cw', prop: 'rotateX', desc: 'x', value: 0, anchors: [],
  },
  {
    name: '垂直旋转', title: 'rotate-y', icon: 'rotate-cw', prop: 'rotateY', desc: 'y', value: 0, anchors: [],
  },
  {
    name: '纵深旋转', title: 'rotate-z', icon: 'rotate-cw', prop: 'rotateZ', desc: 'z', value: 0, anchors: [],
  },
  {
    name: '水平倾斜', title: 'skew-x', icon: 'italic', prop: 'skewX', desc: 'x', value: 0, anchors: [],
  },
  {
    name: '垂直倾斜', title: 'skew-y', icon: 'italic', prop: 'skewY', desc: 'y', value: 0, anchors: [],
  },
  {
    name: '水平缩放', title: 'scale-x', icon: 'maximize-2', prop: 'scaleX', desc: 'x', value: 0, anchors: [],
  },
  {
    name: '垂直缩放', title: 'scale-y', icon: 'maximize-2', prop: 'scaleY', desc: 'y', value: 0, anchors: [],
  },
];

export {
  OFFSET,
  TICK_MIN_LENGTH,
  TICK_MAX_LENGTH,
  DEFAULT_OPTION,
  ANIMATION_OPTIONS,
  ANIMATION_TYPES,
};
