import get from 'lodash.get';
import { AnimationType } from '@/utils/types.ts';

const isBoolean = (bol: any) => Object.prototype.toString.call(bol) === '[object Boolean]';

export default class Transition {
  name?: string;

  width: number;

  height: number;

  left: number;

  top: number;

  maxTime: number;

  key: string | any;

  isExpanded: boolean;

  visible: boolean;

  isLocked: boolean;

  isRepeat: boolean;

  animations?: AnimationType[];

  constructor(widget: any, fieldMap: any) {
    this.name = get(widget, fieldMap.name);
    this.width = get(widget, fieldMap.width);
    this.height = get(widget, fieldMap.height);
    this.left = get(widget, fieldMap.left) || 0;
    this.top = get(widget, fieldMap.top) || 0;
    this.key = get(widget, fieldMap.key) || '';
    this.animations = get(widget, 'transition.animations') || [];
    this.isExpanded = get(widget, 'transition.isExpanded') || false;
    this.visible = isBoolean(get(widget, 'transition.visible')) ? get(widget, 'transition.visible') : true;
    this.isLocked = get(widget, 'transition.isLocked') || false;
    this.isRepeat = get(widget, 'transition.isRepeat') || false;
    this.maxTime = get(widget, 'transition.maxTime') || 10000;
  }
}
