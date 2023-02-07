export function buildInterval(start: number, end: number) {
  const interval = [];
  let day = start;

  while (day < end) {
    interval.push(day);

    day = new Date(
      new Date(day).getFullYear(),
      new Date(day).getMonth(),
      new Date(day).getDate() + 1,
    ).valueOf();
  }

  return interval;
}
