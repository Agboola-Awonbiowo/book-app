import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './features/books/bookSlice';

const store = configureStore({
  reducer: bookSlice,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
