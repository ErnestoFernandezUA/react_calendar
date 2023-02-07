import { FunctionComponent, useEffect } from 'react';
import { List } from '../../components/List';
import { buildInterval } from '../../helpers/buildInterval';
import {
  selectCurrentDate,
  selectEndInterval,
  selectStartInterval,
  setCurrentDate,
  setFormat,
  setIntervalCalendar,
  setSpecialDate,
} from '../../store/features/Interval/intervalSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { FORMAT } from '../../constants/FORMAT';

import './HomePage.scss';

export const HomePage: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(selectCurrentDate);
  const start = useAppSelector(selectStartInterval);
  const end = useAppSelector(selectEndInterval);
  const interval = buildInterval(start, end);

  useEffect(() => {
    if (!currentDate) {
      dispatch(setCurrentDate());
    }

    dispatch(setSpecialDate(new Date(2023, 2, 19).valueOf()));
    dispatch(setFormat(FORMAT.WEEK));
    dispatch(setIntervalCalendar());
  }, []);

  return (
    <div className="HomePage">
      <List interval={interval} />
    </div>
  );
};
