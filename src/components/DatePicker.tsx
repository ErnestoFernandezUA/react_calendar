import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import {
  IoCaretBackOutline,
  IoCaretForwardOutline,
  IoCalendarOutline,
} from 'react-icons/io5';
import {
  navigateMonth,
  navigateYear,
  selectCurrentDate,
  selectFormat,
  setFormat,
  setIntervalCalendar,
  setSpecialDate,
} from '../store/features/Interval/intervalSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { FORMAT } from '../constants/FORMAT';
import { MONTH_NAMES, MONTH_NAMES_CUT } from '../constants/MONTH';
import {
  closeAllPopup,
  selectIsShowDatePicker,
  switchPopup,
} from '../store/features/Controls/controlsSlice';
import { POPUP } from '../constants/POPUP';
import { MOVE } from '../constants/MOVE';
import { Button } from '../UI/Button';

const Wrapper = styled.div`
  position: relative;
`;

const DatePickerTitle = styled.div`
  display: flex;
`;

const DatePickerArrow = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  outline: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;

const DatePickerButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-left: 100px;
`;

const DatePickerContainer = styled.div`
  z-index: 50;
  position: absolute;
  right: 0;
  top: 45px;
  background-color: white;
  opacity: 1;
  width: 400px;
  box-sizing: border-box;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const DatePicker: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(selectCurrentDate);
  const format = useAppSelector(selectFormat);
  const fullNameMonth = MONTH_NAMES[new Date(currentDate).getMonth()];
  const fullYear = new Date(currentDate).getFullYear();
  const isShowContainer = useAppSelector(selectIsShowDatePicker);
  const [year, setYear] = useState('');

  const arrYears = [];

  for (let i = 0; i < 12; i += 1) {
    arrYears.push(
      new Date(
        (new Date(currentDate).getFullYear()) - 4 + i,
        0,
        0,
      ).valueOf(),
    );
  }

  const onNavigateHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (format !== FORMAT.YEAR) {
      dispatch(navigateMonth(e.currentTarget.value));
      dispatch(setFormat(FORMAT.MONTH));
    }

    if (format === FORMAT.YEAR) {
      dispatch(navigateYear(e.currentTarget.value));
    }

    dispatch(setIntervalCalendar());
  };

  const onShowHandler = () => {
    setYear('');
    dispatch(switchPopup(POPUP.IS_SHOW_DATE_PICKER));
  };

  const onYearHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setYear(e.currentTarget.value);
  };

  const onMonthHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const month = e.currentTarget.value;

    dispatch(closeAllPopup());
    dispatch(setSpecialDate(new Date(
      new Date(+year).getFullYear(),
      +month,
      1,
    ).valueOf()));
    dispatch(setFormat(FORMAT.MONTH));
    dispatch(setIntervalCalendar());
    setYear('');
  };

  return (
    <Wrapper>
      <DatePickerTitle>
        <DatePickerArrow
          type="button"
          value={MOVE.BACK}
          onClick={onNavigateHandler}
        >
          <IoCaretBackOutline />
        </DatePickerArrow>

        {format !== FORMAT.YEAR && (
          <>
            &nbsp;
            {fullNameMonth}
          </>
        )}
        &nbsp;
        {fullYear}
        &nbsp;

        <DatePickerArrow
          type="button"
          value={MOVE.FORWARD}
          onClick={onNavigateHandler}
        >
          <IoCaretForwardOutline />
        </DatePickerArrow>

        <DatePickerButton
          onClick={onShowHandler}
        >
          <IoCalendarOutline size={30} />
        </DatePickerButton>
      </DatePickerTitle>

      {isShowContainer && (
        <DatePickerContainer>
          {!year && arrYears.map(y => (
            <Button
              key={y}
              type="button"
              value={String(y)}
              onClick={e => onYearHandler(e)}
            >
              {new Date(y).getFullYear()}
            </Button>
          ))}

          {year && MONTH_NAMES_CUT.map((m, i) => (
            <Button
              key={m}
              type="button"
              value={String(i)}
              onClick={e => onMonthHandler(e)}
            >
              {m}
            </Button>
          ))}
        </DatePickerContainer>
      )}
    </Wrapper>
  );
};
