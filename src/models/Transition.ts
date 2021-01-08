import get from 'lodash.get';
import { AnimationType } from '@/utils/types.ts';

export default class Transition {
  name?: string;

  width: number;

  height: number;

  left: number;

  top: number;

  isExpanded: boolean;

  visible: boolean;

  isLocked: boolean;

  needUpdateProp: boolean;

  needUpdateOption: boolean;

  animations?: AnimationType[];

  constructor(widget: any, fieldMap: any) {
    this.name = get(widget, fieldMap.name);
    this.width = get(widget, fieldMap.width);
    this.height = get(widget, fieldMap.height);
    this.left = get(widget, fieldMap.left) || 0;
    this.top = get(widget, fieldMap.top) || 0;
    this.animations = get(widget, 'transition.animations') || [];
    this.isExpanded = get(widget, 'transition.isExpanded') || false;
    this.visible = get(widget, 'transition.visible') || true;
    this.isLocked = get(widget, 'transition.isLocked') || false;
    this.needUpdateProp = false;
    this.needUpdateOption = false;
  }
}
