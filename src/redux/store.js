import { configureStore } from '@reduxjs/toolkit';
import workersSlice from './workersSlice';
import locationsSlice from './locationsSlice';
import notesSlice from './notesSlice';
import workplaceSlice from './workplaceSlice';

export const store = configureStore({
  reducer: {
    workers: workersSlice.reducer,
    locations: locationsSlice.reducer,
    notes: notesSlice.reducer,
    workplace: workplaceSlice.reducer,
  },
});
