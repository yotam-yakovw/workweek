import { createSlice } from '@reduxjs/toolkit';

const siteSlice = createSlice({
  name: 'site',
  initialState: {
    user: {
      username: 'hi',
      email: '',
      workplace: 'WorkPlace',
      isAdmin: true,
    },
    isEdit: false,
  },
  reducers: {
    switchEdit: (state) => {
      state.isEdit = !state.isEdit;
    },
  },
});

export default siteSlice;
