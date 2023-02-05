// 'use strict';

const isWeekStartsFromMonday = true;
// const isWeekStartsFromMonday = false;
const EU = () => (isWeekStartsFromMonday ? 1 : 0);

export const dateFunction = (
  d = new Date().getDate() + 1,
  m = new Date().getMonth() + 1,
  y = (new Date().getFullYear() + 1),
) => new Date(y, m - 1, d - 1);

// eslint-disable-next-line no-console
console.log(dateFunction());

const date = dateFunction();

// eslint-disable-next-line no-console
console.log('date = ', date);
// eslint-disable-next-line no-console
console.log('date.getDate() = ', date.getDate());
// eslint-disable-next-line no-console
console.log('date.getDay() = ', date.getDay());

const startCurrentWeek = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate() - date.getDay() + EU(),
);

// eslint-disable-next-line no-console
console.log('startCurrentWeek ', startCurrentWeek);

const endCurrentWeek = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate() - date.getDay() + EU() + 7,
);

// eslint-disable-next-line no-console
console.log('endCurentweek = ', endCurrentWeek);

const lastMondayBeforeMonth = new Date(
  date.getFullYear(),
  date.getMonth(),
  EU() - (new Date(
    date.getFullYear(),
    date.getMonth(),
    0,
  )).getDay(),
);

// eslint-disable-next-line no-console
console.log('lastMondayBeforeMonth ', lastMondayBeforeMonth);

const theEndOfFirstSundayAfterMonth = new Date(
  date.getFullYear(),
  date.getMonth() + 1,
  EU() - (new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  )).getDay(),
);

// eslint-disable-next-line no-console
console.log('firstSundayAfterMonth = ', theEndOfFirstSundayAfterMonth);

const startYear = new Date(
  date.getFullYear(),
  0,
  1,
);

// eslint-disable-next-line no-console
console.log('startYear', startYear);

const endOfYear = new Date(
  date.getFullYear() + 1,
  0,
  1,
);

// eslint-disable-next-line no-console
console.log('endOfYear = ', endOfYear);
//------------------------------------------------------
export function buildWeek() {
  const week = [];
  let current = new Date(
    startCurrentWeek.getFullYear(),
    startCurrentWeek.getMonth(),
    startCurrentWeek.getDate());

  // week.push({ date: current, todos: []});
  let today = startCurrentWeek.getDate();

  while (current < endCurrentWeek) {
    week.push({
      date: current,
      todos: [], // function load todos per day
    });

    // eslint-disable-next-line no-plusplus
    today++;
    current = new Date(
      startCurrentWeek.getFullYear(),
      startCurrentWeek.getMonth(),
      today,
    );
  }

  return week;
}

// console.log(buildWeek());

export function buildInterval(start: Date, end: Date) {
  const interval = [];
  let current = new Date(
    start.getFullYear(),
    start.getMonth(),
    start.getDate(),
  );

  // week.push({ date: current, todos: []});
  let today = start.getDate();

  while (current < end) {
    interval.push({
      date: current,
      todos: [], // function load todos per day
    });

    // eslint-disable-next-line no-plusplus
    today++;
    current = new Date(
      start.getFullYear(),
      start.getMonth(),
      today,
    );
  }

  return interval;
}

// eslint-disable-next-line no-console
console.log(
  buildInterval(lastMondayBeforeMonth, theEndOfFirstSundayAfterMonth),
);

// function buildMonth() {
//   const month = [];
//   const current = lastMondayBeforeMonth;

//   while (current < theEndOfFirstSundayAfterMonth) {
//     month.push({
//       date: new Date(
//         startCurrentWeek.getFullYear(),
//         startCurrentWeek.getMonth(),
//         startCurrentWeek.getDate() + i),
//       todos: [], // function load todos per day
//     });
//   }

//   return month;
// }
const i = 6;

// eslint-disable-next-line no-console
console.log('startCurrentWeek', startCurrentWeek);

// eslint-disable-next-line no-console
console.log(new Date(
  startCurrentWeek.getFullYear(),
  startCurrentWeek.getMonth(),
  startCurrentWeek.getDate() + i,
));

// eslint-disable-next-line no-console
console.log(new Date(
  startCurrentWeek.getFullYear(),
  startCurrentWeek.getMonth(),
  startCurrentWeek.getDate() + i,
) < endCurrentWeek);
