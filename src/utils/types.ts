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

export {
  Anchor,
  AnimationType,
};
