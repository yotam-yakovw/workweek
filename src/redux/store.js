import { configureStore } from '@reduxjs/toolkit';
import workersSlice from './workersSlice';
import locationsSlice from './locationsSlice';

export const store = configureStore({
  reducer: {
    workers: workersSlice.reducer,
    locations: locationsSlice.reducer,
  },
});
