import { AnimationType } from '@/utils/types';

const OFFSET = 50;

const LEADING_TIME = 1000;

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
    name: '宽', title: 'width', icon: 'column-width', prop: 'width', desc: '', value: 0, anchors: [],
  },
  {
    name: '高', title: 'height', icon: 'colum-height', prop: 'height', desc: '', value: 0, anchors: [],
  },
  {
    name: '水平位置', title: 'x', icon: 'totop', prop: 'left', desc: 'x', value: 0, anchors: [],
  },
  {
    name: '垂直位置', title: 'y', icon: 'totop', prop: 'top', desc: 'y', value: 0, anchors: [],
  },
  {
    name: '水平位移', title: 'translate-x', icon: 'drag', prop: 'translateX', desc: 'x', value: 0, anchors: [],
  },
  {
    name: '垂直位移', title: 'translate-y', icon: 'drag', prop: 'translateY', desc: 'y', value: 0, anchors: [],
  },
  {
    name: '纵深位移', title: 'translate-z', icon: 'drag', prop: 'translateZ', desc: 'z', value: 0, anchors: [],
  },
  {
    name: '不透明度', title: 'opacity', icon: 'bulb', prop: 'opacity', desc: '', value: 1, anchors: [],
  },
  {
    name: '水平旋转', title: 'rotate-x', icon: 'rotate-right', prop: 'rotateX', desc: 'x', value: 0, anchors: [],
  },
  {
    name: '垂直旋转', title: 'rotate-y', icon: 'rotate-right', prop: 'rotateY', desc: 'y', value: 0, anchors: [],
  },
  {
    name: '纵深旋转', title: 'rotate-z', icon: 'rotate-right', prop: 'rotateZ', desc: 'z', value: 0, anchors: [],
  },
  {
    name: '水平倾斜', title: 'skew-x', icon: 'italic', prop: 'skewX', desc: 'x', value: 0, anchors: [],
  },
  {
    name: '垂直倾斜', title: 'skew-y', icon: 'italic', prop: 'skewY', desc: 'y', value: 0, anchors: [],
  },
  {
    name: '水平缩放', title: 'scale-x', icon: 'arrawsalt', prop: 'scaleX', desc: 'x', value: 1, anchors: [],
  },
  {
    name: '垂直缩放', title: 'scale-y', icon: 'arrawsalt', prop: 'scaleY', desc: 'y', value: 1, anchors: [],
  },
];

const DEFAULT_FIELDS = {
  key: 'key',
  name: 'name',
  width: 'width',
  height: 'height',
  top: 'top',
  left: 'left',
};

export {
  OFFSET,
  LEADING_TIME,
  TICK_MIN_LENGTH,
  TICK_MAX_LENGTH,
  DEFAULT_OPTION,
  ANIMATION_OPTIONS,
  ANIMATION_TYPES,
  DEFAULT_FIELDS,
};
