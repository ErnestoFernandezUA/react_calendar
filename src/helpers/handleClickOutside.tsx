import { RefObject } from 'react';

export const handleClickOutside = (
  event: MouseEvent,
  refParent: RefObject<Element>,
  refChild: RefObject<Element>,
  onShowHandler: () => void,
) => {
  // eslint-disable-next-line no-console
  console.log('start handleClickOutside');

  // if (refParent.current
  //   && refParent.current.contains(event.target as Node)) {
  //   // eslint-disable-next-line no-console
  //   console.log('outside refControl', refParent, refChild);
  // } else {
  //   onShowHandler();
  // }

  // if (refParent.current
  //   && !refParent.current.contains(event.target as Node)) {
  //   // eslint-disable-next-line no-console
  //   console.log('outside refControl', refParent);
  // }

  // if (refChild.current
  //   && !refChild.current.contains(event.target as Node)) {
  //   // eslint-disable-next-line no-console
  //   console.log('outside refContainer', refChild);
  // }

  if (refParent.current
    && !refParent.current.contains(event.target as Node)
    && refChild.current
    && !refChild.current.contains(event.target as Node)) {
    // eslint-disable-next-line no-console
    console.log('outside refControl and refContainer',
      refParent, refChild);

    onShowHandler();
  }
};
