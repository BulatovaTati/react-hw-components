import { nanoid } from 'nanoid';

export const addContact = ({ name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(6),
      name,
      number,
    },
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/deleteContact',
    payload: id,
  };
};

export const getfilteredContacts = value => {
  return {
    type: 'filter/getfilteredContacts',
    payload: value,
  };
};
