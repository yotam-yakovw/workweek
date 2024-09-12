import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    value: [
      {
        id: 0,
        text: '',
      },
    ],
  },
  reducers: {
    addNote: (state) => {
      state.value.push({
        id:
          state.value.length === 0
            ? 0
            : state.value[state.value.length - 1].id + 1,
        text: '',
      });
    },
    removeNote: (state, action) => {
      state.value = state.value.filter(({ id }) => id !== action.payload);
    },
    setNote: (state, action) => {
      const id = Number(action.payload.id.split('_')[0]);
      const noteIndex = state.value.findIndex((note) => note.id === id);

      state.value[noteIndex].text = action.payload.value;
    },
    clearNotes: (state) => {
      state.value = [
        {
          id: 0,
          text: '',
        },
      ];
    },
  },
});

export default notesSlice;
