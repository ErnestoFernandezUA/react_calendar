/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../..';
import { INTERVAL, Interval } from '../../../type/format';
import { Todo } from '../../../type/Todo';

const IS_MONDAY_FIRST_DAY_OF_WEEK = 1;

export interface IntervalState {
  currentDate: number;
  start: number;
  end: number;

  storage: Todo[];
  formatCalendar: Interval;
}

const initialState: IntervalState = {
  currentDate: 0,
  start: 0,
  end: 0,

  storage: [],
  formatCalendar: 'month',
};

export const getIntervalAsync = createAsyncThunk(
  'Interval/fetchInterval',
  async () => {
    // const response: Post[] = await getAllInterval();

    // eslint-disable-next-line no-console
    // console.log(response);

    // return response;
  },
);

const intervalSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setCurrentDate: (
      state: IntervalState,
    ) => {
      state.currentDate = (new Date()).valueOf();
    },
    setSpecialDate: (
      state: IntervalState,
      action,
    ) => {
      state.currentDate = new Date(action.payload).valueOf();
    },
    addTodo: (state: IntervalState, action: PayloadAction<Todo>) => {
      state.storage.push(action.payload);
    },
    setFormat: (
      state: IntervalState,
      action: PayloadAction<Interval>,
    ) => {
      state.formatCalendar = action.payload;
    },
    setIntervalCalendar: (state: IntervalState) => {
      // eslint-disable-next-line no-console
      console.log('setIntervalCalendar', state.formatCalendar);

      if (!state.currentDate) {
        // eslint-disable-next-line no-console
        console.log('break');

        return;
      }

      switch (state.formatCalendar) {
        case INTERVAL.DAY:
          state.start = new Date(
            new Date(state.currentDate).getFullYear(),
            new Date(state.currentDate).getMonth(),
            new Date(state.currentDate).getDate(),
          ).valueOf();

          state.end = new Date(
            new Date(state.currentDate).getFullYear(),
            new Date(state.currentDate).getMonth(),
            new Date(state.currentDate).getDate() + 1,
          ).valueOf();
          break;

        case INTERVAL.WEEK:
          state.start = new Date(
            new Date(state.currentDate).getFullYear(),
            new Date(state.currentDate).getMonth(),
            new Date(state.currentDate).getDate()
            - new Date(state.currentDate).getDay()
            + IS_MONDAY_FIRST_DAY_OF_WEEK,
          ).valueOf();

          state.end = new Date(
            new Date(state.currentDate).getFullYear(),
            new Date(state.currentDate).getMonth(),
            new Date(state.currentDate).getDate()
            - new Date(state.currentDate).getDay()
            + IS_MONDAY_FIRST_DAY_OF_WEEK
            + 7,
          ).valueOf();

          // // eslint-disable-next-line no-console
          // console.log('week start', new Date(state.start).toString());
          // // eslint-disable-next-line no-console
          // console.log('week end', new Date(state.end).toString());
          break;

        case INTERVAL.MONTH:
          state.start = new Date(
            new Date(state.currentDate).getFullYear(),
            new Date(state.currentDate).getMonth(),
            IS_MONDAY_FIRST_DAY_OF_WEEK
            - (new Date(
              new Date(state.currentDate).getFullYear(),
              new Date(state.currentDate).getMonth(),
              0,
            )).getDay(),
          ).valueOf();

          state.end = new Date(
            new Date(state.currentDate).getFullYear(),
            new Date(state.currentDate).getMonth() + 1,
            (IS_MONDAY_FIRST_DAY_OF_WEEK
            + 7
            - (new Date(
              new Date(state.currentDate).getFullYear(),
              new Date(state.currentDate).getMonth() + 1,
              0,
            )).getDay()) % 7,
          ).valueOf();

          // eslint-disable-next-line no-console
          // console.log('start month', new Date(state.start).toString());
          // eslint-disable-next-line no-console
          // console.log('end month', new Date(state.end).toString());

          break;

        case INTERVAL.YEAR:
          state.start = new Date(
            new Date(state.currentDate).getFullYear(),
            0,
            1,
          ).valueOf();

          state.end = new Date(
            new Date(state.currentDate).getFullYear() + 1,
            0,
            1,
          ).valueOf();

          // eslint-disable-next-line no-console
          console.log('start year', new Date(state.start).toString());
          // eslint-disable-next-line no-console
          console.log('end year', new Date(state.end).toString());
          break;

        default:
      }
    },
    resetState: (state: IntervalState) => {
      return { ...state, ...initialState };
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getIntervalAsync.pending, (state: IntervalState) => {
  //       state.statusLoading = 'loading';
  //     })
  //     .addCase(getIntervalAsync.fulfilled, (state, action) => {
  //       state.storage.push(...action.payload);
  //       state.statusLoading = 'idle';
  //     })
  //     .addCase(getIntervalAsync.rejected, (state, action) => {
  //       state.statusLoading = 'failed';

  //       // eslint-disable-next-line no-console
  //       console.log(action);
  //     });
  // },
});

export default intervalSlice.reducer;
export const {
  setCurrentDate,
  setSpecialDate,
  setFormat,
  setIntervalCalendar,
  addTodo,
  resetState,
} = intervalSlice.actions;

export const selectTodos = (state: RootState) => state.interval.storage;
export const selectCurrentDate
= (state: RootState) => state.interval.currentDate;
export const selectIntervalFormat
= (state: RootState) => state.interval.formatCalendar;
