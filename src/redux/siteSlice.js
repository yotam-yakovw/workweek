import { createSlice } from '@reduxjs/toolkit';

const siteSlice = createSlice({
  name: 'site',
  initialState: {
    user: {
      email: '',
      workplace: '',
      isAdmin: false,
      id: 0,
    },
    isEdit: false,
    isForm: false,
  },
  reducers: {
    switchEdit: (state) => {
      state.isEdit = !state.isEdit;
    },
    switchForm: (state) => {
      state.isForm = !state.isForm;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default siteSlice;
