import { createSlice } from '@reduxjs/toolkit';

const workersSlice = createSlice({
  name: 'workers',
  initialState: { value: 0 },
  reducers: {
    addWorker: (state) => {
      state.value += 1;
    },
    reduceWorker: (state) => {
      state.value -= 1;
    },
  },
});

export default workersSlice;
