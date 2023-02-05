/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../..';

export type Todo = {
  todoId: string;
  createdAt: Date;
  changeAt: Date;
  title: string;
};
export type Interval = 'day' | 'week' | 'month' | 'year';

export interface IntervalState {
  currentDate: Date | null;

  storage: Todo[];
  format: Interval
}

const initialState: IntervalState = {
  currentDate: null,

  storage: [],
  format: 'week',
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
    addTodo: (state: IntervalState, action: PayloadAction<Todo>) => {
      state.storage.push(action.payload);
    },
    setFormat: (
      state: IntervalState,
      action: PayloadAction<Interval>,
    ) => {
      state.format = action.payload;
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
  addTodo,
  resetState,
} = intervalSlice.actions;

export const selectInterval = (state: RootState) => state.interval.storage;
export const selectIntervalFormat
= (state: RootState) => state.interval.format;
