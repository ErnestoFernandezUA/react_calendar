import { ColorKeys, ColorItemValue, ColorItemKey } from '../type/Color';

export const COLOR:
{ [key in ColorKeys]: { value: ColorItemValue, label: ColorItemKey } }
= {
  URGENT: { value: '#ff6666', label: 'urgent' },
  NORMAL: { value: '#ffe5a9', label: 'normal' },
  IMPORTANT: { value: '#cbbeb5', label: 'important' },
};
