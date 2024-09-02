import { configureStore } from '@reduxjs/toolkit';
import workersSlice from './workersSlice';
import locationsSlice from './locationsSlice';
import notesSlice from './notesSlice';
import workplaceSlice from './workplaceSlice';
import siteSlice from './siteSlice';

export const store = configureStore({
  reducer: {
    workers: workersSlice.reducer,
    locations: locationsSlice.reducer,
    notes: notesSlice.reducer,
    workplace: workplaceSlice.reducer,
    site: siteSlice.reducer,
  },
});
