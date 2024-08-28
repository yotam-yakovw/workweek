import { createSlice } from '@reduxjs/toolkit';

const workplaceSlice = createSlice({
  name: 'workplace',
  initialState: {
    name: '',
    workers: [
      {
        id: 0,
        name: '',
        days: {
          morning: ['', '', '', '', ''],
          night: ['', '', '', '', ''],
        },
      },
    ],
    locations: [
      {
        id: 0,
        name: '',
        days: ['', '', '', '', '', '', ''],
      },
    ],
    notes: [
      {
        id: 0,
        text: '',
      },
    ],
  },
  reducers: {
    fillWorkplace: (state, action) => (state = action.payload),
    editWorkplaceName: (state, action) => (state.name = action.payload),
    addWorker: (state) => {
      state.workers = [
        ...state.workers,
        {
          id:
            state.workers.length === 0
              ? 0
              : state.workers[state.workers.length - 1].id + 1,
          name: '',
          days: {
            morning: ['', '', '', '', ''],
            night: ['', '', '', '', ''],
          },
        },
      ];
    },
    removeWorker: (state, action) => {
      const newWorkers = state.workers.filter(
        ({ id }) => id !== action.payload
      );

      state.workers = newWorkers;
    },
    setWorkerName: (state, action) => {
      const workerIndex = state.workers.findIndex(
        (worker) => worker.id === action.payload.id
      );

      state.workers[workerIndex].name = action.payload.value;
    },
  },
});

export default workplaceSlice;
