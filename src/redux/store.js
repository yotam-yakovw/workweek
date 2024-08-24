import { configureStore } from '@reduxjs/toolkit';
import workersSlice from './workersSlice';

export const store = configureStore({
  reducer: {
    workers: workersSlice.reducer,
  },
});
