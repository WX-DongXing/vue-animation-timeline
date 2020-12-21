import { AnimationType } from '@/utils/types.ts';

export default class Transition {
  name?: string;

  width: number;

  height: number;

  x: number;

  y: number;

  isExpanded: boolean;

  visible: boolean;

  isLocked: boolean;

  animations?: AnimationType[];

  constructor({
    name, width, height, x, y, animations,
  }: {
    name: string; width: number; height: number; x: number; y: number; animations?: AnimationType[];
  }) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.isExpanded = false;
    this.visible = true;
    this.isLocked = false;
    this.animations = animations || [];
  }
}