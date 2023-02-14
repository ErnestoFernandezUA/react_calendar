import {
  FunctionComponent,
  useRef,
} from 'react';
import styled from 'styled-components';
import {
  IoCalendarOutline,
} from 'react-icons/io5';
import {
} from '../store/features/Interval/intervalSlice';
import { DatePickerContainer } from './DatePicker.Container';

const Wrapper = styled.div`
  position: relative;
`;

const DatePickerTitle = styled.div`
  display: flex;
`;

const DatePickerButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-left: 40px;
`;

interface DatePickerProps {
  currentDate: number;
  onChangeDate: (value: number) => void;
  isShowDatePickerContainer: boolean;
  onShowDatePickerHandler: () => void;
}

export const DatePicker: FunctionComponent<DatePickerProps> = ({
  currentDate,
  onChangeDate,
  isShowDatePickerContainer,
  onShowDatePickerHandler,
}) => {
  const controlRef = useRef<HTMLDivElement>(null);

  // const onShowHandler
  // = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   // eslint-disable-next-line no-console
  //   console.log(e);
  //   // console.log('--------------------------DatePicker// onShowHandler');

  //   // e.stopPropagation();
  //   onShowDatePickerHandler();
  // };

  // eslint-disable-next-line no-console
  console.log('isShowDatePickerContainer', isShowDatePickerContainer);

  return (
    <Wrapper>
      <DatePickerTitle ref={controlRef}>
        <DatePickerButton onClick={onShowDatePickerHandler}>
          <IoCalendarOutline size={30} />
        </DatePickerButton>
      </DatePickerTitle>

      {isShowDatePickerContainer && (
        <DatePickerContainer
          currentDate={currentDate}
          datePickerControlRef={controlRef}
          onChangeDate={onChangeDate}
          onShowDatePickerHandler={onShowDatePickerHandler}
        />
      )}
    </Wrapper>
  );
};
