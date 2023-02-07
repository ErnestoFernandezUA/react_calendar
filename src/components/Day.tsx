import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { FORMAT } from '../constants/FORMAT';
import {
  selectCurrentDate,
  selectFormat,
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

  ${({ format }) => {
    if (format === FORMAT.WEEK || format === FORMAT.MONTH) {
      return css`
        height: 200px;
      `;
    }

    if (format === FORMAT.YEAR) {
      return css`
      `;
    }

    return '';
  }}



  ${({ isNotCurrentMonth }) => {
    if (isNotCurrentMonth) {
      return css`
        opacity: 0.4;
      `;
    }

    return '';
  }}

  ${({ isCurrentDay }) => {
    if (isCurrentDay) {
      return css`
        background-color: #79c6c6;
      `;
    }

    return '';
  }}
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

  return [isCurrentDay, isCurrentMonth, isCurrentYear];
};

export const Day: FunctionComponent<DayProps> = ({ startDay }) => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(selectCurrentDate);
  const format = useAppSelector(selectFormat);
  const isWeekend = (new Date(startDay).getDay() === 0
  || new Date(startDay).getDay() === 6);
  const [dayOfWeek, month, day, year] = useDayHook(startDay);
  const [isCurrentDay, isCurrentMonth] = useCurrentHook(currentDate, startDay);

  const isTodosToday = true;

  const onClick = () => {
    dispatch(setSpecialDate(startDay));
    dispatch(setIntervalCalendar());
  };

  return (
    <Wrapper
      format={format}
      isWeekend={isWeekend}
      isNotCurrentMonth={!isCurrentMonth}
      isCurrentDay={isCurrentDay}
      onClick={onClick}
    >
      <DayTitle>
        <DayOfWeek isWeekend={isWeekend}>
          {format !== FORMAT.YEAR && dayOfWeek}
        </DayOfWeek>

        <DateString>
          {format === FORMAT.DAY ? `${day}/${month}/${year}` : day}
        </DateString>
      </DayTitle>

      <DayListTodos format={format}>
        {isTodosToday && <p>List of TODOS:</p>}
      </DayListTodos>
    </Wrapper>
  );
};
