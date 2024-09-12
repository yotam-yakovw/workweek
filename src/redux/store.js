import { configureStore } from '@reduxjs/toolkit';
import workersSlice from './workersSlice';
import locationsSlice from './locationsSlice';
import notesSlice from './notesSlice';
import siteSlice from './siteSlice';
import inputSlice from './inputSlice';

export const store = configureStore({
  reducer: {
    workers: workersSlice.reducer,
    locations: locationsSlice.reducer,
    notes: notesSlice.reducer,
    site: siteSlice.reducer,
    input: inputSlice.reducer,
  },
});
