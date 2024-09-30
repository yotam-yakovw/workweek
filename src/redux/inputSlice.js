import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    email: '',
    password: '',
    workplace: '',
  },
  reducers: {
    updateValue: (state, action) => {
      const { id, value } = action.payload;
      state[id] = value;
    },
  },
});

export default inputSlice;
