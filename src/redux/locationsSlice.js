import { createSlice } from '@reduxjs/toolkit';

const locationsSlice = createSlice({
  name: 'locations',
  initialState: {
    value: [
      {
        id: 0,
        name: '',
        days: ['', '', '', '', '', '', ''],
      },
    ],
  },
  reducers: {
    addLocation: (state) => {
      state.value.push({
        id:
          state.value.length === 0
            ? 0
            : state.value[state.value.length - 1].id + 1,
        name: '',
        days: ['', '', '', '', '', '', ''],
      });
    },
    removeLocation: (state, action) => {
      state.value = state.value.filter(({ id }) => id !== action.payload);
    },
    setLocationName: (state, action) => {
      const id = Number(action.payload.id.split('_')[0]);
      const locationIndex = state.value.findIndex(
        (location) => location.id === id
      );

      state.value[locationIndex].name = action.payload.value;
    },
    setLocationDay: (state, action) => {
      const id = action.payload.id.split('_');
      const locationIndex = state.value.findIndex(
        (location) => location.id === Number(id[0])
      );

      state.value[locationIndex].days[id[1]] = action.payload.value;
    },
  },
});

export default locationsSlice;
