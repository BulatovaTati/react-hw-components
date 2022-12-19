import { createSlice } from '@reduxjs/toolkit';

const filterInitialValue = {
  value: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialValue,
  reducers: {
    getfilteredContacts(state, action) {
      state.filter(contact =>
        contact.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { getfilteredContacts } = filterSlice.actions;
