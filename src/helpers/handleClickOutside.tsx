import { RefObject } from 'react';

export const handleClickOutside = (
  event: MouseEvent,
  refControl: RefObject<Element>,
  refContainer: RefObject<Element>,
  onShowHandler: () => void,
) => {
  // eslint-disable-next-line no-console
  // console.log('start handleClickOutside');

  if (refControl.current
    && !refControl.current.contains(event.target as Node)) {
    // eslint-disable-next-line no-console
    // console.log('outside refControl', refControl);
  }

  if (refContainer.current
    && !refContainer.current.contains(event.target as Node)) {
    // eslint-disable-next-line no-console
    // console.log('outside refContainer', refContainer);
  }

  if (refControl.current
    && !refControl.current.contains(event.target as Node)
    && refContainer.current
    && !refContainer.current.contains(event.target as Node)) {
    // eslint-disable-next-line no-console
    // console.log('outside refControl and refContainer',
    // refControl, refContainer);

    onShowHandler();
  }
};
