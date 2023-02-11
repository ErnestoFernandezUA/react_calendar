import { WEEK } from '../constants/WEEK';

export const useDayHook = (value: number) => {
  const date = new Date(value);
  const day = date.getDate();
  const arr = date.toDateString().split(' ');
  const fullNameDayOfWeek = WEEK[date.getDay()];

  return {
    dayOfWeek: arr[0],
    month: arr[1],
    day,
    year: arr[3],
    fullNameDayOfWeek,
  };
};
