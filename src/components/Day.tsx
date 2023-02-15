import {
  FunctionComponent,
} from 'react';
import styled, { css } from 'styled-components';
import { FORMAT } from '../constants/FORMAT';
import { useCurrentHook } from '../customHooks/useCurrentHook';
import { useDayHook } from '../customHooks/useDayHook';
import {
  selectCurrentDate,
  selectFormat,
  setFormat,
  setIntervalCalendar,
  setSpecialDate,
} from '../store/features/Interval/intervalSlice';
import { selectTodos } from '../store/features/Todo/todoSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Todo } from '../type/Todo';

type StyledProps = {
  format?: string,
  isWeekend?: boolean,
  isNotCurrentMonth?: boolean,
  isCurrentDay?: boolean;
};

const Wrapper = styled.div<StyledProps>`
  box-sizing: border-box;
  padding: 0;
  font-size: 14px;
  cursor: pointer;

  ${({ format }) => (format === FORMAT.DAY) && css`
    height: 100vh;
  `}

  ${({ format }) => (format === FORMAT.WEEK || format === FORMAT.MONTH) && css`
    height: 200px;

    &:hover{
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
  `}

  ${({ format, isWeekend }) => (format === FORMAT.YEAR && isWeekend) && css`
    color: red;
  `}

  ${({ isNotCurrentMonth }) => isNotCurrentMonth && css`
    opacity: 0.4;
  `}

  ${({ isCurrentDay }) => isCurrentDay && css`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  `}
`;

const DayTitle = styled.div<{ isCurrentDay: boolean }>`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${({ isCurrentDay }) => isCurrentDay && css`
    background-color: #79c6c6;
  `}

  ${({ isCurrentDay }) => !isCurrentDay && css`
    &:hover {
      background-color: #e6e6e6;
    }
  `}
`;

const DayOfWeek = styled.button<StyledProps>`
  background-color: transparent;
  cursor: pointer;
  padding: 0 10px;
  line-height: 30px;
  border: none;
  outline: none;
  position: relative;
  cursor: pointer;
  text-align: left;

  border-right: 10px solid transparent;
  width: 80px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;

  ${({ isWeekend }) => isWeekend && css`
    color: #a16e73;
    font-weight: bold;
  `}


  ${({ isCurrentDay, format }) => !isCurrentDay
  && format !== FORMAT.WEEK && css`
    &:hover {
      transition: all 0.2s;
      border-bottom: 10px solid #79c6c6;
    }
  `}

  ${({ format }) => (format === FORMAT.YEAR)
  && css`
    display: none;
  `}
`;

const DateString = styled.p<{ format?: string }>`
  margin: 0;
  line-height: 40px;
  position: relative;
  overflow: hidden;
  padding: 0 10px;

  ${({ format }) => format === FORMAT.YEAR && css`
    display: block;
    text-align: right;
    padding: 0;
    margin: 0 auto;
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
  const todos = useAppSelector(selectTodos);

  const preparedTodos = todos.filter((todo: Todo) => {
    return (startDay <= Number(todo.date) + Number(todo.time))
    && (Number(todo.date) + Number(todo.time) < startDay + 24 * 60 * 60 * 1000);
  });

  const isTodosToday = preparedTodos.length;

  const onDayClick = () => {
    // eslint-disable-next-line no-console
    // console.log('Day onClick');

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
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>,
  ) => {
    if (format === FORMAT.WEEK) {
      return;
    }

    e.stopPropagation();
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
          isWeekend={isWeekend}
          onClick={(e) => onWeekClick(e)}
          data-day-value={String(startDay)}
          isCurrentDay={isCurrentDay}
          format={format}
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
          {isTodosToday && (
            <>
              <p>List of TODOS:</p>
              {preparedTodos.map(todo => (
                <p>{`${todo.title}: ${todo.description}`}</p>
              ))}
            </>
          )}
        </DayListTodos>
      )}
    </Wrapper>
  );
};
