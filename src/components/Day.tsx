import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { selectFormat } from '../store/features/Interval/intervalSlice';
import { useAppSelector } from '../store/hooks';

const Wrapper = styled.div<{
  format?: string,
  isWeekend?: boolean,
}>`
  ${({ format }) => {
    if (format === 'week') {
      return css`
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

interface DayProps {
  startDay: number;
  // eslint-disable-next-line react/require-default-props
  // key?: number;
}

export const DayComponent: FunctionComponent<DayProps> = ({ startDay }) => {
  const format = useAppSelector(selectFormat);
  const dayString = new Date(startDay).toDateString();
  const isWeekend = (new Date(startDay).getDay() === 0
  || new Date(startDay).getDay() === 6);

  if (format === 'year') {
    return (
      <Wrapper format={format} isWeekend={isWeekend}>
        {new Date(startDay).getDate()}
      </Wrapper>
    );
  }

  if (format === 'week' || format === 'month') {
    return (
      <Wrapper format={format} isWeekend={isWeekend}>
        {dayString}
        {format}
      </Wrapper>
    );
  }

  return (
    <Wrapper format={format} isWeekend={isWeekend}>
      {dayString}

      List of TODOS:
    </Wrapper>
  );
};
