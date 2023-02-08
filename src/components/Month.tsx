import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { FORMAT } from '../constants/FORMAT';
import {
  IS_MONDAY_FIRST_DAY_OF_WEEK,
  selectFormat,
} from '../store/features/Interval/intervalSlice';
import { useAppSelector } from '../store/hooks';
import { Day } from './Day';

const Wrapper = styled.div<{ format?: string }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

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

interface MonthProps {
  interval: number[];
}

export const Month: FunctionComponent<MonthProps> = ({ interval }) => {
  const format = useAppSelector(selectFormat);

  const countEmptyItem = (new Date(interval[0]).getDay()
  + 7 - IS_MONDAY_FIRST_DAY_OF_WEEK) % 7;

  const empty = [];

  for (let i = 0; i < countEmptyItem; i += 1) {
    empty.push(-i);
  }

  return (
    <Wrapper format={format}>
      {empty.map((emptyItem: number) => (
        <Day key={emptyItem} startDay={emptyItem} disabled />
      ))}

      {interval.map((day: number) => (
        <Day key={day} startDay={day} />
      ))}
    </Wrapper>
  );
};
