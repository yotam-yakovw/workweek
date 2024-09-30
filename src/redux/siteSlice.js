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
    selectedForm: false,
  },
  reducers: {
    switchEdit: (state) => {
      state.isEdit = !state.isEdit;
    },
    selectForm: (state, action) => {
      state.selectedForm = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = {
        email: '',
        workplace: '',
        isAdmin: false,
        id: 0,
      };
    },
  },
});

export default siteSlice;
