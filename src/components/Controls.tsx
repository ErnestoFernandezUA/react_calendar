import {
  FunctionComponent,
} from 'react';
import styled from 'styled-components';

import { FORMAT } from '../constants/FORMAT';
import { MONTH_NAMES } from '../constants/MONTH';
import { closeAllPopup } from '../store/features/Controls/controlsSlice';
import {
  selectCurrentDate,
  selectFormat,
  setFormat,
  setIntervalCalendar,
  setSpecialDate,
} from '../store/features/Interval/intervalSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { ArrowNavigator } from './ArrowNavigator';
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

  const onChangeCurrentDate = (day: number) => {
    dispatch(closeAllPopup());
    dispatch(setSpecialDate(new Date(day).valueOf()));
    dispatch(setFormat(FORMAT.MONTH));
    dispatch(setIntervalCalendar());
  };

  return (
    <Wrapper>
      <Back
        format={format}
        onClick={onGoToPrevFormat}
      >
        {(format === FORMAT.DAY || format === FORMAT.WEEK) && fullNameMonth}
        {(format === FORMAT.MONTH || format === FORMAT.YEAR) && fullYear}
      </Back>

      <Form />

      <ControlsNavigate>
        <ArrowNavigator />

        <DatePicker
          onChangeDate={onChangeCurrentDate}
        />
      </ControlsNavigate>
    </Wrapper>
  );
};
