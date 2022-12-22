// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { filterSlice } from './filterSlice';
// import { contactsReducer } from './contactsSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterSlice.reducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// !V2
import { createReducer, configureStore } from '@reduxjs/toolkit';
import { addContact, deleteContact, getfilteredContacts } from './actions';

const contactsInitialState = [];

const contactsReducer = createReducer(contactsInitialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      state.unshift(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      state = state.filter(constact => constact.id !== action.payload);
    });
});

const filterInitialState = {
  value: '',
};

const filterSlice = createReducer(filterInitialState, builder => {
  builder.addCase(getfilteredContacts, (state, action) => {
    state.value = action.payload;
  });
});

export const store = configureStore({
  reducer: {
    constacts: contactsReducer,
    filter: filterSlice,
  },
});
