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
  return (
    <Wrapper>
      <Attributes>
        {new Date(dayProps).toDateString()}
      </Attributes>
    </Wrapper>
  );
};
