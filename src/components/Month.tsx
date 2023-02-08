import { FunctionComponent, useRef } from 'react';
import styled, { css } from 'styled-components';
import { FORMAT } from '../constants/FORMAT';
import { MONTH_NAMES } from '../constants/MONTH';
import {
  IS_MONDAY_FIRST_DAY_OF_WEEK,
  selectFormat,
} from '../store/features/Interval/intervalSlice';
import { useAppSelector } from '../store/hooks';
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
  ${({ format }) => (format === FORMAT.DAY) && css`
    display: none;
  `}
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
  const format = useAppSelector(selectFormat);
  const monthName = useRef(new Date(interval[0]).getMonth());

  const countEmptyItem = (new Date(interval[0]).getDay()
  + 7 - IS_MONDAY_FIRST_DAY_OF_WEEK) % 7;

  const empty = [];

  for (let i = 0; i < countEmptyItem; i += 1) {
    empty.push(-i);
  }

  return (
    <Wrapper format={format}>
      <MonthTitle format={format}>{MONTH_NAMES[monthName.current]}</MonthTitle>

      <MonthContainer format={format}>
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
