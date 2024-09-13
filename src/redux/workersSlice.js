import { createSlice } from '@reduxjs/toolkit';

const workersSlice = createSlice({
  name: 'workers',
  initialState: {
    value: [
      {
        id: 0,
        name: '',
        days: {
          morning: ['', '', '', '', ''],
          night: ['', '', '', '', ''],
        },
      },
    ],
  },
  reducers: {
    addWorker: (state) => {
      state.value.push({
        id:
          state.value.length === 0
            ? 0
            : state.value[state.value.length - 1].id + 1,
        name: '',
        days: {
          morning: ['', '', '', '', ''],
          night: ['', '', '', '', ''],
        },
      });
    },
    removeWorker: (state, action) => {
      state.value = state.value.filter(({ id }) => id !== action.payload);
    },
    setWorkerName: (state, action) => {
      const id = Number(action.payload.id.split('_')[0]);
      const workerIndex = state.value.findIndex((worker) => worker.id === id);

      state.value[workerIndex].name = action.payload.value;
    },
    setWorkerDay: (state, action) => {
      const id = action.payload.id.split('_');
      const workerIndex = state.value.findIndex(
        (worker) => worker.id === Number(id[0])
      );

      state.value[workerIndex].days[id[1]][id[2]] = action.payload.value;
    },
    setWorkers: (state, action) => {
      state.value = action.payload;
    },
    clearWorkers: (state) => {
      state.value = [
        {
          id: 0,
          name: '',
          days: {
            morning: ['', '', '', '', ''],
            night: ['', '', '', '', ''],
          },
        },
      ];
    },
  },
});

export default workersSlice;
