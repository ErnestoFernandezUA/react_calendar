import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { selectCurrentDate } from '../store/features/Interval/intervalSlice';
import { useAppSelector } from '../store/hooks';

const Wrapper = styled.div`
`;

const DatePickerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 100px);
`;

export const DatePicker: FunctionComponent = () => {
  const currentDate = useAppSelector(selectCurrentDate);
  const arrYears = [];

  for (let i = 0; i < 12; i += 1) {
    arrYears.push(
      new Date(
        (new Date(currentDate).getFullYear()) - 4 + i,
        0,
        0,
      ).valueOf(),
    );
  }

  return (
    <Wrapper>
      DatePicker

      <DatePickerContainer>
        {arrYears.map(year => (
          <div key={year}>{new Date(year).getFullYear()}</div>
        ))}
      </DatePickerContainer>
    </Wrapper>
  );
};
