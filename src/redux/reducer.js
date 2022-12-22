import { combineReducers } from 'redux';

const contactsInitialState = [];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];
    case 'contacts/deleteContact':
      return state.filter(task => task.id !== action.payload);

    default:
      return state;
  }
};

const filterInitialState = {
  value: '',
};

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/getfilteredContacts':
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
