import {
  FunctionComponent,
  // MouseEvent,
  // useEffect,
} from 'react';
import styled, { css } from 'styled-components';
import { FORMAT } from '../constants/FORMAT';
import { WEEK } from '../constants/WEEK';
import {
  selectCurrentDate,
  selectFormat,
  setFormat,
  setIntervalCalendar,
  setSpecialDate,
} from '../store/features/Interval/intervalSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

type WrapperType = {
  format?: string,
  isWeekend?: boolean,
  isNotCurrentMonth: boolean,
  isCurrentDay: boolean;
};

const Wrapper = styled.div<WrapperType>`
  box-sizing: border-box;
  padding: 0;
  font-size: 14px;
  cursor: pointer;

  ${({ format }) => (format === FORMAT.DAY) && css`
    height: 100vh;
  `}

  ${({ format }) => (format === FORMAT.WEEK || format === FORMAT.MONTH) && css`
    height: 200px;
  `}

  ${({ format, isWeekend }) => (format === FORMAT.YEAR && isWeekend) && css`
    color: red;
  `}

  ${({ isNotCurrentMonth }) => isNotCurrentMonth && css`
    opacity: 0.4;
  `}



`;

const DayTitle = styled.div<{ isCurrentDay: boolean }>`
  border: 1px solid transparent;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${({ isCurrentDay }) => isCurrentDay && css`
    background-color: #79c6c6;
  `}

  &:hover {
    background-color: #e6e6e6;
  }
`;

const DayOfWeek = styled.button<{ isWeekend: boolean }>`
  border: none;
  background-color: transparent;
  cursor: pointer;

 ${({ isWeekend }) => {
    if (isWeekend) {
      return css`
        color: #a16e73;
        font-weight: bold;
      `;
    }

    return '';
  }}
`;

const DateString = styled.p<{ format?: string }>`
  padding: 0;
  margin: 0;
  ${({ format }) => format === FORMAT.YEAR && css`
    display: block;
    text-align: right;
  `}
`;

const DayListTodos = styled.div<{ format?: string }>`
  box-sizing: border-box;
  padding: 10px;

  ${({ format }) => {
    if (format === FORMAT.YEAR) {
      return css`
        display: none;
      `;
    }

    return '';
  }}
`;

interface DayProps {
  startDay: number;
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean;
}

const useDayHook = (value: number) => {
  const date = new Date(value);
  const day = date.getDate();
  const arr = date.toDateString().split(' ');
  const fullNameDayOfWeek = WEEK[date.getDay()];

  return {
    dayOfWeek: arr[0],
    month: arr[1],
    day,
    year: arr[3],
    fullNameDayOfWeek,
  };
};

const useCurrentHook = (current: number, anyDay: number) => {
  const isCurrentYear
  = new Date(current).getFullYear() === new Date(anyDay).getFullYear();

  const isCurrentMonth
  = new Date(current).getMonth() === new Date(anyDay).getMonth()
  && new Date(current).getFullYear() === new Date(anyDay).getFullYear();

  const isCurrentDay
   = new Date(current).getDate() === new Date(anyDay).getDate()
   && new Date(current).getMonth() === new Date(anyDay).getMonth()
   && new Date(current).getFullYear() === new Date(anyDay).getFullYear();

  return { isCurrentDay, isCurrentMonth, isCurrentYear };
};

export const Day: FunctionComponent<DayProps> = ({
  startDay,
  disabled = false,
}) => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(selectCurrentDate);
  const format = useAppSelector(selectFormat);
  const isWeekend = (new Date(startDay).getDay() === 0
  || new Date(startDay).getDay() === 6);
  const {
    dayOfWeek, month, day, year, fullNameDayOfWeek,
  } = useDayHook(startDay);
  const {
    isCurrentDay,
    isCurrentMonth,
  } = useCurrentHook(currentDate, startDay);

  const isTodosToday = false;

  const onDayClick = () => {
    // eslint-disable-next-line no-console
    console.log('Day onClick');

    if (isCurrentDay && format === FORMAT.DAY) {
      return;
    }

    if (isCurrentDay) {
      dispatch(setFormat(FORMAT.DAY));
      dispatch(setIntervalCalendar());

      return;
    }

    if (!disabled) {
      dispatch(setSpecialDate(startDay));
    }

    if (!disabled && !isCurrentMonth) {
      dispatch(setIntervalCalendar());
    }
  };

  const onWeekClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    let dayValue: string | undefined;

    if (e.target instanceof HTMLButtonElement) {
      dayValue = e.target.dataset.dayValue;
    }

    if (dayValue) {
      dispatch(setSpecialDate(+dayValue));
      dispatch(setFormat(FORMAT.WEEK));
      dispatch(setIntervalCalendar());
    }
  };

  if (disabled) {
    return (
      <div />
    );
  }

  return (
    <Wrapper
      format={format}
      isWeekend={isWeekend}
      isNotCurrentMonth={!isCurrentMonth}
      isCurrentDay={isCurrentDay}
    >
      <DayTitle
        isCurrentDay={isCurrentDay}
        onClick={onDayClick}
      >
        <DayOfWeek
          // value={String(startDay)}
          // name={String(startDay)}
          // dataValue={String(startDay)}
          isWeekend={isWeekend}
          onClick={(e) => onWeekClick(e)}
          data-day-value={String(startDay)}
        >
          {format === FORMAT.DAY && fullNameDayOfWeek}
          {(format === FORMAT.WEEK || format === FORMAT.MONTH) && dayOfWeek}
        </DayOfWeek>

        <DateString format={format}>
          {format === FORMAT.DAY ? `${day}/${month}/${year}` : day}
        </DateString>
      </DayTitle>

      {(format !== FORMAT.YEAR) && (
        <DayListTodos format={format}>
          {isTodosToday && <p>List of TODOS:</p>}
        </DayListTodos>
      )}
    </Wrapper>
  );
};
