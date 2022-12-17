import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactsForm, Menu, ContactsList, Filter } from 'components/Phonebook';
import { Container } from './Phonebook.styled';
import useLocalStorage from 'hooks/useLocalStorage';

const Phonebook = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const onSearch = evt => {
    const value = evt.target.value;
    setFilter(value);
  };

  const addContact = data => {
    setContacts(
      prevState => {
        return [data, ...prevState];
      },

      Notify.success('Contact added')
    );
    toggle('isOpenForm');
  };

  const deleteContact = id => {
    setContacts(
      prevState => prevState.filter(contact => contact.id !== id),
      Notify.success('Contact removed')
    );
  };

  const toggle = component => {
    switch (component) {
      case 'isOpenForm':
        setIsOpenForm(f => !f);
        break;
      case 'isOpenFilter':
        setIsOpenFilter(f => !f);
        break;
      default:
        throw new Error(`Unknown component${component}`);
    }
  };

  const visibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const filteredContacts = visibleContacts();

  return (
    <Container>
      <Menu
        isOpenForm={isOpenForm}
        isOpenFilter={isOpenFilter}
        toggle={toggle}
      />
      {isOpenForm && (
        <ContactsForm
          toggle={toggle}
          contacts={contacts}
          addContact={addContact}
        />
      )}

      {isOpenFilter && <Filter value={filter} onSearch={onSearch} />}

      <ContactsList deleteHandler={deleteContact} contacts={filteredContacts} />
    </Container>
  );
};

export default Phonebook;
