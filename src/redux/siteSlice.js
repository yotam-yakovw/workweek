import { createSlice } from '@reduxjs/toolkit';

const siteSlice = createSlice({
  name: 'site',
  initialState: {
    isEdit: false,
  },
  reducers: {
    switchEdit: (state) => {
      state.isEdit = !state.isEdit;
    },
  },
});

export default siteSlice;
