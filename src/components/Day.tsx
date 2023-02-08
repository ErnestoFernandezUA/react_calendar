import {
  FunctionComponent,
  // useEffect,
} from 'react';
import styled, { css } from 'styled-components';
import { FORMAT } from '../constants/FORMAT';
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
  padding: 10px;
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

  ${({ isCurrentDay }) => isCurrentDay && css`
    background-color: #79c6c6;
  `}

`;

const DayTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DayOfWeek = styled.div<{ isWeekend: boolean }>`
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

const DateString = styled.div`
`;

const DayListTodos = styled.div<{ format?: string }>`
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

const useDayHook = (value: number) => new Date(value).toDateString().split(' ');

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
  const [dayOfWeek, month, day, year] = useDayHook(startDay);
  const {
    isCurrentDay,
    isCurrentMonth,
  } = useCurrentHook(currentDate, startDay);

  const isTodosToday = true;

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
      <DayTitle>
        <DayOfWeek isWeekend={isWeekend}>
          {format !== FORMAT.YEAR && dayOfWeek}
        </DayOfWeek>

        <DateString
          onClick={onDayClick}
        >
          {format === FORMAT.DAY ? `${day}/${month}/${year}` : day}
        </DateString>
      </DayTitle>

      <DayListTodos format={format}>
        {isTodosToday && <p>List of TODOS:</p>}
      </DayListTodos>
    </Wrapper>
  );
};
