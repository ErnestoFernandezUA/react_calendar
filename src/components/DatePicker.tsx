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
  /* opacity: 1; */
  width: 400px;
  box-sizing: border-box;
  padding: 20px;


  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Years = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  & > :hover{
    background-color: #e6e6e6;
  }
`;

const Months = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  & > :hover{
    background-color: #e6e6e6;
  }
`;

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 20px;
  & > :hover{
    background-color: #e6e6e6;
  }
`;

const buildArrayOfYears = (currentDate: number) => {
  const years = [];

  for (let i = 0; i < 12; i += 1) {
    years.push(
      new Date(
        (new Date(currentDate).getFullYear()) - 4 + i,
        0,
        0,
      ).valueOf().toString(),
    );
  }

  return years;
};

const buildArrOfMonths = (currentDate: number) => {
  const arrOfMonth = [];

  for (let i = 0; i < 12; i += 1) {
    arrOfMonth.push({
      label: MONTH_NAMES_CUT[i],
      value: new Date(
        (new Date(currentDate).getFullYear()),
        i,
        1,
      ).valueOf().toString(),
    });
  }

  return arrOfMonth;
};

const buildArrOfDays = (startMonth: number) => {
  const month = [];
  const values = buildInterval(
    startMonth,
    new Date(
      new Date(startMonth).getFullYear(),
      new Date(startMonth).getMonth() + 1,
      1,
    ).valueOf(),
  );

  const countEmptyItem = (new Date(startMonth).getDay()
  + 7 - IS_MONDAY_FIRST_DAY_OF_WEEK) % 7;

  for (let i = 0; i < countEmptyItem; i += 1) {
    month.push({
      id: String(i),
      value: '',
      label: '',
    });
  }

  for (let i = countEmptyItem; i < countEmptyItem + values.length; i += 1) {
    month.push({
      id: String(i),
      value: String(values[i - countEmptyItem]),
      label: String(new Date(values[i - countEmptyItem]).getDate()),
    });
  }

  return month;
};

export const DatePicker: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(selectCurrentDate);
  const format = useAppSelector(selectFormat);
  const fullNameMonth = MONTH_NAMES[new Date(currentDate).getMonth()];
  const fullYear = new Date(currentDate).getFullYear();
  const isShowContainer = useAppSelector(selectIsShowDatePicker);

  const [arrOfYears, setArrOfYears] = useState<string[]>([]);
  const [arrOfMonths, setArrOfMonths]
  = useState<{ label: string, value: string }[]>([]);
  const [arrOfDays, setArrOfDays]
  = useState<{ id: string, value: string, label: string }[]>([]);

  const controlRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside
    = (event: MouseEvent) => {
      // eslint-disable-next-line no-console
      console.log('handleClickOutside');

      // eslint-disable-next-line no-console
      console.log(controlRef.current
        && !controlRef.current.contains(event.target as Node));

      // eslint-disable-next-line no-console
      console.log(formRef.current
        && !formRef.current.contains(event.target as Node));

      // if (controlRef.current
      //   && controlRef.current.contains(event.target as Node)) {
      //   return;
      // }

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
        console.log('handleClickOutside --------------');
        dispatch(switchPopup(POPUP.IS_SHOW_DATE_PICKER));
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setArrOfYears(buildArrayOfYears(currentDate));
  }, [currentDate]);

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
    dispatch(switchPopup(POPUP.IS_SHOW_DATE_PICKER));
  };

  const onYearHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentYear = +(e.target as HTMLButtonElement).value;

    setArrOfMonths(buildArrOfMonths(currentYear));
  };

  const onMonthHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const month = +(e.target as HTMLButtonElement).value;

    const currentMonth = new Date(
      new Date(month).getFullYear(),
      new Date(month).getMonth(),
      1,
    ).valueOf();

    setArrOfDays(buildArrOfDays(currentMonth));
  };

  const onDayHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const day = +(e.target as HTMLButtonElement).value;

    dispatch(closeAllPopup());
    dispatch(setSpecialDate(new Date(day).valueOf()));
    dispatch(setFormat(FORMAT.MONTH));
    dispatch(setIntervalCalendar());
    setArrOfMonths([]);
    setArrOfDays([]);
  };

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
          <Years>
            {arrOfYears.length > 0
            && arrOfMonths.length === 0
            && arrOfDays.length === 0
            && (arrOfYears.map((y:string) => (
              <Button
                key={y}
                type="button"
                value={y}
                onClick={e => onYearHandler(e)}
              >
                {new Date(+y).getFullYear()}
              </Button>
            )))}
          </Years>

          <Months>
            {arrOfYears.length > 0
            && arrOfMonths.length > 0
            && arrOfDays.length === 0
            && (arrOfMonths.map((m) => (
              <Button
                key={m.label}
                type="button"
                value={m.value}
                onClick={e => onMonthHandler(e)}
              >
                {m.label}
              </Button>
            )))}
          </Months>

          <Days>
            {arrOfYears.length > 0
            && arrOfMonths.length > 0
            && arrOfDays.length > 0
            && arrOfDays.map(
              (d: { id: string, value: string, label: string }) => (
                <Button
                  key={d.id}
                  type="button"
                  value={d.value}
                  onClick={e => onDayHandler(e)}
                >
                  {d.label}
                </Button>
              ),
            )}
          </Days>
        </DatePickerContainer>
      )}
    </Wrapper>
  );
};
