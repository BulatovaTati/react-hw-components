import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getfilteredContacts: (_, action) => action.payload,
  },
});

export const { getfilteredContacts } = filterSlice.actions;
export const selectFilterValue = state => state.filter;
