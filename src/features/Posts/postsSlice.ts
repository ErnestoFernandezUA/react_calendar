/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllPosts } from '../../api/post';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../store';
import { Post } from '../../type/Post';

export interface PostsState {
  storage: Post[];
  statusLoading: 'idle' | 'loading' | 'failed';
  error: unknown;
}

const initialState: PostsState = {
  storage: [],
  statusLoading: 'idle',
  error: null,
};

export const getPostsAsync = createAsyncThunk('posts/fetchPosts', async () => {
  const response: Post[] = await getAllPosts();

  // eslint-disable-next-line no-console
  console.log(response);

  return response;
});

const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPosts: (state: PostsState, action: PayloadAction<Post[]>) => {
      state.storage.push(...action.payload);
    },
    setStatus: (
      state: PostsState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    setError: (state: PostsState, action: PayloadAction<unknown>) => {
      state.error = action.payload;
      state.statusLoading = 'failed';
    },
    resetState: (state: PostsState) => {
      return { ...state, ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsAsync.pending, (state: PostsState) => {
        state.statusLoading = 'loading';
      })
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        state.storage.push(...action.payload);
        state.statusLoading = 'idle';
      })
      .addCase(getPostsAsync.rejected, (state, action) => {
        state.statusLoading = 'failed';

        // eslint-disable-next-line no-console
        console.log(action);
      });
  },
});

export default postsSlice.reducer;
export const {
  addPosts,
  setStatus,
  setError,
  resetState,
} = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.storage;
export const selectPostStatusLoading
= (state: RootState) => state.posts.statusLoading;
export const selectPostError = (state: RootState) => state.posts.error;
