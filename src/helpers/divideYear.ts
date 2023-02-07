export const divideYear = (interval: number[]) => {
  const year = [];
  let i = 0;

  while (i < interval.length) {
    const currentMonth = new Date(interval[i]).getMonth();
    const month = [];

    while (currentMonth === new Date(interval[i]).getMonth()) {
      month.push(interval[i]);

      i += 1;
    }

    year.push(month);
  }

  return year;
};
