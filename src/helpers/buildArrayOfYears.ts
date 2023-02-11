export const buildArrayOfYears = (currentDate: number) => {
  const years = [];

  for (let i = 0; i < 12; i += 1) {
    years.push(
      new Date(
        (new Date(currentDate).getFullYear()) - 4 + i,
        0,
        0,
      ).valueOf().toString(),
    );
  }

  return years;
};
