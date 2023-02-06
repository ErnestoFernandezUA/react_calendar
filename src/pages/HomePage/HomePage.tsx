import { FunctionComponent, useEffect } from 'react';
import {
  selectCurrentDate,
  setCurrentDate,
  setFormat,
  setIntervalCalendar,
  setSpecialDate,
} from '../../store/features/Interval/intervalSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { INTERVAL } from '../../type/format';

import './HomePage.scss';

localStorage.clear();

export const HomePage: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(selectCurrentDate);

  useEffect(() => {
    if (!currentDate) {
      dispatch(setCurrentDate());
    }

    dispatch(setSpecialDate(new Date(2023, 0, 1).valueOf()));
    dispatch(setFormat(INTERVAL.WEEK));
    dispatch(setIntervalCalendar());
  }, []);

  return (
    <div className="HomePage">
      <h2>HomePage</h2>
      <p>{new Date(currentDate).toString()}</p>

    </div>
  );
};
