import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    getfilteredContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { getfilteredContacts } = filterSlice.actions;
