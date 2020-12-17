export interface AnimationType {
  title: string;
  icon: string;
  prop: string;
  desc: string;
}

export const ANIMATION_TYPES: AnimationType[] = [
  {
    title: 'width', icon: 'more-horizontal', prop: 'width', desc: '',
  },
  {
    title: 'height', icon: 'more-vertical', prop: 'height', desc: '',
  },
  {
    title: 'x', icon: 'move', prop: 'x', desc: 'x',
  },
  {
    title: 'y', icon: 'move', prop: 'y', desc: 'x',
  },
  {
    title: 'translate-x', icon: 'navigation', prop: 'translateX', desc: 'x',
  },
  {
    title: 'translate-y', icon: 'navigation', prop: 'translateY', desc: 'y',
  },
  {
    title: 'translate-z', icon: 'navigation', prop: 'translateZ', desc: 'z',
  },
  {
    title: 'opacity', icon: 'droplet', prop: 'opacity', desc: '',
  },
  {
    title: 'rotate-x', icon: 'rotate-cw', prop: 'rotateX', desc: 'x',
  },
  {
    title: 'rotate-y', icon: 'rotate-cw', prop: 'rotateY', desc: 'y',
  },
  {
    title: 'rotate-z', icon: 'rotate-cw', prop: 'rotateZ', desc: 'z',
  },
  {
    title: 'skew-x', icon: 'italic', prop: 'skewX', desc: 'x',
  },
  {
    title: 'skew-y', icon: 'italic', prop: 'skewY', desc: 'y',
  },
  {
    title: 'scale-x', icon: 'maximize-2', prop: 'scaleX', desc: 'x',
  },
  {
    title: 'scale-y', icon: 'maximize-2', prop: 'scaleY', desc: 'y',
  },
];
