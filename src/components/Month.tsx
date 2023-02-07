import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { FORMAT } from '../constants/FORMAT';
import { selectFormat } from '../store/features/Interval/intervalSlice';
import { useAppSelector } from '../store/hooks';
import { Day } from './Day';

const Wrapper = styled.div<{ format?: string, isWeekend?: boolean }>`
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
        max-width: 200px;
      `;
    }

    return '';
  }}

  ${({ isWeekend }) => {
    if (isWeekend) {
      return css`
        background-color: #caead6;
      `;
    }

    return '';
  }}
`;

interface ListProps {
  interval: number[];
}

export const Month: FunctionComponent<ListProps> = ({ interval }) => {
  const format = useAppSelector(selectFormat);

  return (
    <Wrapper format={format}>
      {interval.map((day: number) => (
        <Day key={day} startDay={day} />
      ))}
    </Wrapper>
  );
};
