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
    this.name = widget[fieldMap.name];
    this.width = widget[fieldMap.width];
    this.height = widget[fieldMap.height];
    this.left = widget[fieldMap.left] || 0;
    this.top = widget[fieldMap.top] || 0;
    this.animations = widget.animations || [];
    this.isExpanded = false;
    this.visible = true;
    this.isLocked = false;
    this.needUpdateProp = false;
    this.needUpdateOption = false;
  }
}
