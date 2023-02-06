import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Day } from './Day';

const Wrapper = styled.div`

`;

interface ListProps {
  interval: number[];
}

export const List: FunctionComponent<ListProps> = ({ interval }) => {
  return (
    <Wrapper>
      {interval.map((day: number) => (
        <Day key={day} day={day} />
      ))}
    </Wrapper>
  );
};
