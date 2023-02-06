export type Interval = 'day' | 'week' | 'month' | 'year';

export const INTERVAL: { [key: string]: Interval } = {
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month',
  YEAR: 'year',
};
