import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

const Attributes = styled.div`

`;

interface DayProps {
  day: number;
  // eslint-disable-next-line react/require-default-props
  // key?: number;
}

export const Day: FunctionComponent<DayProps> = ({ day: dayProps }) => {
  // eslint-disable-next-line no-console
  console.log(dayProps);
  const date = new Date(dayProps);

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const dayOfWeek = date.getDate();

  return (
    <Wrapper>
      <Attributes>
        {`${day}/${month}/${year}`}
        {dayOfWeek}
      </Attributes>
    </Wrapper>
  );
};
