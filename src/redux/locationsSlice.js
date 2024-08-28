import { createSlice } from '@reduxjs/toolkit';

const locationsSlice = createSlice({
  name: 'locations',
  initialState: { value: 0 },
  reducers: {
    addLocation: (state) => {
      console.log(state.value);
      state.value += 1;
    },
    reduceLocation: (state) => {
      state.value -= 1;
    },
  },
});

export default locationsSlice;
