import {
  FunctionComponent, useEffect, useRef, useState,
} from 'react';
import styled from 'styled-components';
import {
  IoCaretBackOutline,
  IoCaretForwardOutline,
  IoCalendarOutline,
} from 'react-icons/io5';
import {
  IS_MONDAY_FIRST_DAY_OF_WEEK,
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
import { buildInterval } from '../helpers/buildInterval';

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

const buildArrayOfYears = (currentDate: number) => {
  const years = [];

  for (let i = 0; i < 12; i += 1) {
    years.push(
      new Date(
        (new Date(currentDate).getFullYear()) - 4 + i,
        0,
        0,
      ).valueOf(),
    );
  }

  return years;
};

const buildArrOfMonths = (currentDate: number) => {
  const year = [];

  for (let i = 0; i < 12; i += 1) {
    year.push(
      new Date(
        (new Date(currentDate).getFullYear()),
        i,
        1,
      ).valueOf(),
    );
  }

  return year;
};

const buildArrOfDays = (startMonth: number) => {
  const month = [];

  const countEmptyItem = (new Date(startMonth).getDay()
  + 7 - IS_MONDAY_FIRST_DAY_OF_WEEK) % 7;

  // eslint-disable-next-line no-console
  console.log(countEmptyItem);

  for (let i = 0; i < countEmptyItem; i += 1) {
    month.push('');
  }

  month.push(...buildInterval(
    startMonth,
    new Date(
      new Date(startMonth).getFullYear(),
      new Date(startMonth).getMonth() + 1,
      1,
    ).valueOf(),
  ).map(d => String(d)));

  // eslint-disable-next-line no-console
  console.log(month);

  return month;
};

export const DatePicker: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(selectCurrentDate);
  const format = useAppSelector(selectFormat);
  const fullNameMonth = MONTH_NAMES[new Date(currentDate).getMonth()];
  const fullYear = new Date(currentDate).getFullYear();
  const isShowContainer = useAppSelector(selectIsShowDatePicker);

  const arrOfYears = useRef<number[]>([]);
  const [year, setYear] = useState('');
  const arrOfMonths = useRef<number[]>([]);
  const [month, setMonth] = useState('');
  const arrOfDays = useRef<string[]>([]);

  const controlRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    arrOfYears.current = buildArrayOfYears(currentDate);
  }, [currentDate]);

  useEffect(() => {
    const handleClickOutside
    = (event: MouseEvent) => {
      if (controlRef.current
        && controlRef.current.contains(event.target as Node)) {
        return;
      }

      if (formRef.current
        && !formRef.current.contains(event.target as Node)) {
        return;
      }

      if (formRef.current
        && !formRef.current.contains(event.target as Node)
        && controlRef.current
        && !controlRef.current.contains(event.target as Node)
      ) {
        // eslint-disable-next-line no-console
        console.log('handleClickOutside');
        dispatch(switchPopup(POPUP.IS_SHOW_DATE_PICKER));
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
    arrOfMonths.current = buildArrOfMonths(+e.currentTarget.value);
  };

  const onMonthHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentMonth = new Date(
      new Date(+year).getFullYear(),
      +e.currentTarget.value,
      1,
    ).valueOf();

    // eslint-disable-next-line no-console
    console.log(currentMonth);

    setMonth(String(currentMonth));

    arrOfDays.current.push(...buildArrOfDays(currentMonth));
  };

  const onDayHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    // eslint-disable-next-line no-console
    console.log(new Date(+month).toDateString());

    const day = e.currentTarget.value;

    dispatch(closeAllPopup());
    dispatch(setSpecialDate(new Date(
      new Date(+month).getFullYear(),
      new Date(+month).getMonth(),
      +day,
    ).valueOf()));
    dispatch(setFormat(FORMAT.MONTH));
    dispatch(setIntervalCalendar());
    setMonth('');
    setYear('');
  };

  // eslint-disable-next-line no-console
  console.log('year', year, 'month', month, 'days', arrOfDays.current);

  return (
    <Wrapper>
      <DatePickerTitle
        ref={controlRef}
      >
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
        <DatePickerContainer ref={formRef}>
          {arrOfYears.current.length
          && !arrOfMonths.current.length
          && !arrOfDays.current.length
          && arrOfYears.current.map((y:number) => (
            <Button
              key={y}
              type="button"
              value={String(y)}
              onClick={e => onYearHandler(e)}
            >
              {new Date(y).getFullYear()}
            </Button>
          ))}

          {arrOfYears.current.length
          && arrOfMonths.current.length
          && !arrOfDays.current.length
          && MONTH_NAMES_CUT.map((m, i) => (
            <Button
              key={m}
              type="button"
              value={String(arrOfMonths.current[i])}
              onClick={e => onMonthHandler(e)}
            >
              {m}
            </Button>
          ))}

          {arrOfYears.current.length
          && arrOfMonths.current.length
          && arrOfDays.current.length
          && (
            <>
              {arrOfDays.current.map((d: string) => (
                <Button
                  key={Math.random()}
                  type="button"
                  value={String(d)}
                  onClick={e => onDayHandler(e)}
                >
                  {d}
                </Button>
              ))}
            </>
          )}
        </DatePickerContainer>
      )}
    </Wrapper>
  );
};
