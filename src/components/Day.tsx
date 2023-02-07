import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { FORMAT } from '../constants/FORMAT';
import { selectFormat } from '../store/features/Interval/intervalSlice';
import { useAppSelector } from '../store/hooks';

const Wrapper = styled.div<{ format?: string, isWeekend?: boolean }>`
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

  ${({ isWeekend }) => {
    if (isWeekend) {
      return css`
        background-color: #caead6;
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

const DayOfWeek = styled.div`

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
  // key?: number;
}

const useDayHook = (value: number) => new Date(value).toDateString().split(' ');

export const Day: FunctionComponent<DayProps> = ({ startDay }) => {
  const format = useAppSelector(selectFormat);
  const isWeekend = (new Date(startDay).getDay() === 0
  || new Date(startDay).getDay() === 6);

  const [
    dayOfWeek,
    month,
    day,
    year,
  ] = useDayHook(startDay);

  const isTodosToday = true;

  return (
    <Wrapper format={format} isWeekend={isWeekend}>
      <DayTitle>
        <DayOfWeek>
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
