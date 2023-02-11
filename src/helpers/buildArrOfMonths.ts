import { MONTH_NAMES_CUT } from '../constants/MONTH';

export const buildArrOfMonths = (currentDate: number) => {
  const arrOfMonth = [];

  for (let i = 0; i < 12; i += 1) {
    arrOfMonth.push({
      label: MONTH_NAMES_CUT[i],
      value: new Date(
        (new Date(currentDate).getFullYear()),
        i,
        1,
      ).valueOf().toString(),
    });
  }

  return arrOfMonth;
};
