import { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';

import { Month } from '../../components/Month';
import { buildInterval } from '../../helpers/buildInterval';
import {
  selectCurrentDate,
  selectEndInterval,
  selectFormat,
  selectStartInterval,
  setCurrentDate,
  setFormat,
  setIntervalCalendar,
} from '../../store/features/Interval/intervalSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { FORMAT } from '../../constants/FORMAT';
import { Year } from '../../components/Year';
import { Day } from '../../components/Day';
import { Form } from '../../components/Form';

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
  const format = useAppSelector(selectFormat);

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
      {format === FORMAT.YEAR && <Year interval={interval} />}
      {(format === FORMAT.MONTH || format === FORMAT.WEEK)
      && <Month interval={interval} />}
      {format === FORMAT.DAY && <Day startDay={interval[0]} />}

      <Form />
    </Wrapper>
  );
};
