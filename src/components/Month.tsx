import { FunctionComponent, useRef } from 'react';
import styled, { css } from 'styled-components';
import { FORMAT } from '../constants/FORMAT';
import { MONTH_NAMES } from '../constants/MONTH';
import {
  IS_MONDAY_FIRST_DAY_OF_WEEK,
  // selectCurrentDate,
  selectFormat,
  setFormat,
  setIntervalCalendar,
  setSpecialDate,
} from '../store/features/Interval/intervalSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Day } from './Day';

const Wrapper = styled.div<{ format?: string }>`


  ${({ format }) => {
    if (format === FORMAT.DAY) {
      return css`
        display: block;
      `;
    }

    if (format === FORMAT.YEAR) {
      return css`
        /* max-width: 200px; */
      `;
    }

    return '';
  }}
`;

const MonthTitle = styled.div<{ format?: string }>`

  cursor: pointer;

  ${({ format }) => (format === FORMAT.DAY) && css`
    display: none;
  `}

  ${({ format }) => (format === FORMAT.YEAR) && css`
    padding: 10px;
  `}

  & button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

const MonthContainer = styled.div<{ format?: string }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  ${({ format }) => (format === FORMAT.DAY) && css`
    display: block;
  `}
`;

interface MonthProps {
  interval: number[];
}

export const Month: FunctionComponent<MonthProps> = ({ interval }) => {
  const dispatch = useAppDispatch();
  const format = useAppSelector(selectFormat);
  // const currentDate = useAppSelector(selectCurrentDate);
  // const currentMonthName = useRef(new Date(currentDate).getMonth());
  const monthName = useRef(new Date(interval[0]).getMonth());
  const countEmptyItem = useRef((new Date(interval[0]).getDay()
  + 7 - IS_MONDAY_FIRST_DAY_OF_WEEK) % 7);

  const empty = [];

  for (let i = 0; i < countEmptyItem.current; i += 1) {
    empty.push(-i);
  }

  const onMonthHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (format === FORMAT.MONTH) {
      return;
    }

    let monthValue: string | undefined;

    if (e.target instanceof HTMLButtonElement) {
      monthValue = e.target.dataset.monthValue;
    }

    if (monthValue) {
      dispatch(setSpecialDate(+monthValue));
      dispatch(setFormat(FORMAT.MONTH));
      dispatch(setIntervalCalendar());
    }
  };

  return (
    <Wrapper format={format}>
      <MonthTitle
        format={format}
      >
        <button
          type="button"
          onClick={e => onMonthHandler(e)}
          data-month-value={String(interval[0])}
        >
          {format === FORMAT.YEAR && MONTH_NAMES[monthName.current]}
          {/* {format === FORMAT.MONTH && MONTH_NAMES[currentMonthName.current]} */}
        </button>
      </MonthTitle>

      <MonthContainer
        format={format}
      >
        {empty.map((emptyItem: number) => (
          <Day key={emptyItem} startDay={emptyItem} disabled />
        ))}

        {interval.map((day: number) => (
          <Day key={day} startDay={day} />
        ))}
      </MonthContainer>
    </Wrapper>
  );
};
