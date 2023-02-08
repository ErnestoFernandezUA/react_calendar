import { FunctionComponent, useRef } from 'react';
import styled from 'styled-components';
import { divideYear } from '../helpers/divideYear';
import { Month } from './Month';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

interface YearProps {
  interval: number[];
}

export const Year: FunctionComponent<YearProps> = ({ interval }) => {
  const prepared = useRef(divideYear(interval));

  return (
    <Wrapper>
      {prepared.current.map((month: number[]) => (
        <Month key={month[0]} interval={month} />
      ))}
    </Wrapper>
  );
};
