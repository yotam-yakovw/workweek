import { createSlice } from '@reduxjs/toolkit';

const siteSlice = createSlice({
  name: 'site',
  initialState: {
    isEdit: false,
  },
  reducers: {
    startEdit: (state) => state.isEdit(true),
    endEdit: (state) => state.isEdit(false),
  },
});

export default siteSlice;
