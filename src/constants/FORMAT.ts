import { FormatKeys, FormatValue } from '../type/FormatType';

export const FORMAT: { [key in FormatKeys]: FormatValue } = {
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month',
  YEAR: 'year',
};
