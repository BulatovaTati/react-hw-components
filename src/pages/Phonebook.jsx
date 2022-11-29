import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactsForm, Menu, ContactsList, Filter } from 'components/Phonebook';
import { Container } from 'components/Phonebook/Phonebook.styled';

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
    isOpenForm: false,
    isOpenFilter: false,
  };

  onSearch = evt => {
    const value = evt.target.value;
    this.setState({ filter: value });
  };

  addContact = data => {
    this.setState(
      prevState => ({
        contacts: [...prevState.contacts, data],
      }),
      Notify.success('Contact added')
    );
    this.toggle('isOpenForm');
  };

  deleteContact = id => {
    this.setState(
      prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      }),
      Notify.success('Contact removed')
    );
  };

  toggle = component => {
    this.setState(prevState => ({
      [component]: !prevState[component],
    }));
  };

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  componentDidMount() {
    const getContacts = JSON.parse(localStorage.getItem('contacts'));
    if (getContacts) {
      this.setState({ contacts: getContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { visibleContacts, toggle, addContact, deleteContact, onSearch } =
      this;
    const { filter, contacts, isOpenForm, isOpenFilter } = this.state;
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

        <ContactsList
          deleteHandler={deleteContact}
          contacts={filteredContacts}
        />
      </Container>
    );
  }
}
export default Phonebook;
