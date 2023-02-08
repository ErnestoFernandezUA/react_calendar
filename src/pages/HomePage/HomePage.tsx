import { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';

import { Month } from '../../components/Month';
import { buildInterval } from '../../helpers/buildInterval';
import {
  selectCurrentDate,
  selectEndInterval,
  selectStartInterval,
  setCurrentDate,
  setFormat,
  setIntervalCalendar,
} from '../../store/features/Interval/intervalSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { FORMAT } from '../../constants/FORMAT';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const HomePage: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(selectCurrentDate);
  const start = useAppSelector(selectStartInterval);
  const end = useAppSelector(selectEndInterval);
  const interval = buildInterval(start, end);

  useEffect(() => {
    if (!currentDate) {
      dispatch(setCurrentDate());
      dispatch(setFormat(FORMAT.MONTH));
    }

    // dispatch(setSpecialDate(new Date(2023, 2, 19).valueOf()));
    dispatch(setIntervalCalendar());
  }, []);

  // eslint-disable-next-line no-console
  // console.log('HomePage//',
  //   new Date(start).toDateString(),
  //   '-----------',
  //   new Date(end).toDateString());

  return (
    <Wrapper>
      <Month interval={interval} />
    </Wrapper>
  );
};
