import {
  FunctionComponent,
} from 'react';
import styled from 'styled-components';

import { FORMAT } from '../constants/FORMAT';
import { MONTH_NAMES } from '../constants/MONTH';
import {
  selectCurrentDate,
  selectFormat,
  setFormat,
  setIntervalCalendar,
} from '../store/features/Interval/intervalSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { DatePicker } from './DatePicker';
import { Form } from './Form';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Back = styled.div<{ format: string }>`
  cursor: pointer;
`;

const ControlsNavigate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Controls: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(selectCurrentDate);
  const format = useAppSelector(selectFormat);
  const fullNameMonth = MONTH_NAMES[new Date(currentDate).getMonth()];
  const fullYear = new Date(currentDate).getFullYear();

  const onGoToPrevFormat = () => {
    if (format === FORMAT.YEAR) {
      return;
    }

    switch (format) {
      case FORMAT.DAY:
      case FORMAT.WEEK:
        dispatch(setFormat(FORMAT.MONTH));
        break;

      case FORMAT.MONTH:
        dispatch(setFormat(FORMAT.YEAR));
        break;

      default:
    }

    dispatch(setIntervalCalendar());
  };

  return (
    <Wrapper>
      <Back
        format={format}
        onClick={onGoToPrevFormat}
      >
        {/* {new Date(currentDate).toDateString()} */}
        {(format === FORMAT.DAY || format === FORMAT.WEEK) && fullNameMonth}
        {(format === FORMAT.MONTH || format === FORMAT.YEAR) && fullYear}
      </Back>

      <Form />

      <ControlsNavigate>
        <DatePicker />
      </ControlsNavigate>
    </Wrapper>
  );
};
