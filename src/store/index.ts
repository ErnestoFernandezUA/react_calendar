/* eslint-disable import/no-cycle */
import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import postsReducer from './features/Posts/postsSlice';
import intervalSlice from './features/Interval/intervalSlice';
import controlsSlice from './features/Controls/controlsSlice';
import todosSlice from './features/Todo/todoSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
  interval: intervalSlice,
  control: controlsSlice,
  todos: todosSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['interval', 'todos'],
  // blacklist: ['interval'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
        'posts',
      ],
    },
  }),
});

export default store;

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
