import {
  FunctionComponent,
  useRef,
} from 'react';
import styled from 'styled-components';
import {
  IoTimeOutline,
} from 'react-icons/io5';
import {
} from '../../store/features/Interval/intervalSlice';
import { TimePickerContainer } from './TimePicker.Container';

const Wrapper = styled.div`
  position: relative;
`;

const TimePickerTitle = styled.div`
  display: flex;
`;

const TimePickerButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-left: 40px;
`;

interface TimePickerProps {
  currentTime: number;
  onChangeTime: (value: number) => void;
  isShowTimePickerContainer: boolean;
  onShowTimePickerHandler: () => void;
}

export const TimePicker: FunctionComponent<TimePickerProps> = ({
  currentTime,
  onChangeTime,
  isShowTimePickerContainer,
  onShowTimePickerHandler,
}) => {
  const controlRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <TimePickerTitle ref={controlRef}>
        <TimePickerButton onClick={onShowTimePickerHandler}>
          <IoTimeOutline size={30} />
        </TimePickerButton>
      </TimePickerTitle>

      {isShowTimePickerContainer && (
        <TimePickerContainer
          currentTime={currentTime}
          TimePickerControlRef={controlRef}
          onChangeTime={onChangeTime}
          onShowTimePickerHandler={onShowTimePickerHandler}
        />
      )}
    </Wrapper>
  );
};
