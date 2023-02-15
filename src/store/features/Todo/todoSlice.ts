/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../..';
import { Todo } from '../../../type/Todo';
import todos from '../../../server/todos.json';

export interface TodoState {
  storage: Todo[];
  statusLoading: 'idle' | 'loading' | 'failed';
  error: unknown;
}

const initialState: TodoState = {
  storage: [],
  statusLoading: 'idle',
  error: null,
};

const getTodos = async (delay = 3000): Promise<Todo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(todos as unknown as Todo[]);
    }, delay);
  });
};

export const getTodosAsync = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const response: Todo[] = await getTodos();

    // eslint-disable-next-line no-console
    console.log(response);

    return response;
  },
);

const todosSlice = createSlice({
  name: 'interval',
  initialState,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<Todo>) => {
      state.storage.push(action.payload);
    },
    setStatus: (
      state: TodoState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    setError: (state: TodoState, action: PayloadAction<unknown>) => {
      state.error = action.payload;
      state.statusLoading = 'failed';
    },
    resetState: (state: TodoState) => {
      return { ...state, ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodosAsync.pending, (state: TodoState) => {
        state.statusLoading = 'loading';
      })
      .addCase(getTodosAsync.fulfilled, (state, action) => {
        state.storage.push(...action.payload);
        state.statusLoading = 'idle';
      })
      .addCase(getTodosAsync.rejected, (state, action) => {
        state.statusLoading = 'failed';

        // eslint-disable-next-line no-console
        console.log(action);
      });
  },
});

export default todosSlice.reducer;
export const {
  addTodo,
  setStatus,
  setError,
  resetState,
} = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos.storage;
export const selectTodosStatusLoading
= (state: RootState) => state.todos.statusLoading;
export const selectTodosError = (state: RootState) => state.todos.error;
