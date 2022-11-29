import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactsForm, Menu, ContactsList, Filter } from 'components/Phonebook';
import { Container } from 'components/Phonebook/Phonebook.styled';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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

  render() {
    const { filter, contacts, isOpenForm, isOpenFilter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <main>
        <Container>
          <Menu
            isOpenForm={isOpenForm}
            isOpenFilter={isOpenFilter}
            toggle={this.toggle}
          />
          {isOpenForm && (
            <ContactsForm
              toggle={this.toggle}
              contacts={contacts}
              addContact={this.addContact}
            />
          )}

          {isOpenFilter && <Filter value={filter} onSearch={this.onSearch} />}

          <ContactsList
            deleteHandler={this.deleteContact}
            contacts={filteredContacts}
          />
        </Container>
      </main>
    );
  }
}
export default Phonebook;
