import {
  FunctionComponent,
  useCallback,
  useRef,
} from 'react';
import styled from 'styled-components';
import { POPUP } from '../../constants/POPUP';
import {
  selectIsShowAddItem,
  switchPopup,
} from '../../store/features/Controls/controlsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Button } from '../Button';
import { Form } from './Form';

const Wrapper = styled.div`
  background-color: white;
  z-index: 150;
`;

export const FormParentControl: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const isFormOpen = useAppSelector(selectIsShowAddItem);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onShowFormHandler = useCallback(
    () => dispatch(switchPopup(POPUP.IS_SHOW_FORM)), [],
  );

  return (
    <Wrapper>
      <Button
        ref={buttonRef}
        onClick={onShowFormHandler}
      >
        Add new item
      </Button>

      {isFormOpen && (
        <Form
          buttonRef={buttonRef}
          onShowFormHandler={onShowFormHandler}
        />
      )}
    </Wrapper>
  );
};
