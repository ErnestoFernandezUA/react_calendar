import {
  IS_MONDAY_FIRST_DAY_OF_WEEK,
} from '../store/features/Interval/intervalSlice';
import { buildInterval } from './buildInterval';

export const buildArrOfDays = (startMonth: number) => {
  const month = [];
  const values = buildInterval(
    startMonth,
    new Date(
      new Date(startMonth).getFullYear(),
      new Date(startMonth).getMonth() + 1,
      1,
    ).valueOf(),
  );

  const countEmptyItem = (new Date(startMonth).getDay()
    + 7 - IS_MONDAY_FIRST_DAY_OF_WEEK) % 7;

  for (let i = 0; i < countEmptyItem; i += 1) {
    month.push({
      id: String(i),
      value: '',
      label: '',
    });
  }

  for (let i = countEmptyItem; i < countEmptyItem + values.length; i += 1) {
    month.push({
      id: String(i),
      value: String(values[i - countEmptyItem]),
      label: String(new Date(values[i - countEmptyItem]).getDate()),
    });
  }

  return month;
};
