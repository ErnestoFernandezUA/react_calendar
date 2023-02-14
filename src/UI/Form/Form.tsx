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
import { FormContainer } from './Form.Container';

const Wrapper = styled.div`
  background-color: white;
  z-index: 150;
`;

export const Form: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const isFormOpen = useAppSelector(selectIsShowAddItem);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onShowFormHandler = useCallback(
    () => dispatch(switchPopup(POPUP.IS_SHOW_ADD_ITEM)), [],
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
        <FormContainer
          buttonRef={buttonRef}
          onShowFormHandler={onShowFormHandler}
        />
      )}
    </Wrapper>
  );
};
