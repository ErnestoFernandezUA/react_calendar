import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { selectFormat } from '../store/features/Interval/intervalSlice';
import { useAppSelector } from '../store/hooks';
import { DayComponent } from './Day';

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(7, 1fr);
// `;

const Wrapper = styled.div<{ format?: string, isWeekend?: boolean }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  ${({ format }) => {
    if (format === 'day') {
      return css`
        display: block;
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

export const List: FunctionComponent<ListProps> = ({ interval }) => {
  const format = useAppSelector(selectFormat);

  return (
    <Wrapper format={format}>
      {interval.map((day: number) => (
        <DayComponent key={day} startDay={day} />
      ))}
    </Wrapper>
  );
};
