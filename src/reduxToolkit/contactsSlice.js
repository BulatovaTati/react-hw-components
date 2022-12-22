// import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addContact(state, { payload: { name, number } }) {
//       if (state.items.some(el => el.name === name)) {
//         Notify.failure(`${name} is already in contacts`);
//         return;
//       }
//       state.items.push({
//         id: nanoid(6),
//         name,
//         number,
//       });
//       Notify.success('Contact added');
//     },

//     deleteContact(state, action) {
//       state.items = state.items.filter(el => el.id !== action.payload);
//       Notify.success('Contact removed');
//     },
//   },
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const { addContact, deleteContact } = contactsSlice.actions;
