import { FormatKeys, FormatValue } from '../type/Format';

export const FORMAT: { [key in FormatKeys]: FormatValue } = {
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month',
  YEAR: 'year',
};
