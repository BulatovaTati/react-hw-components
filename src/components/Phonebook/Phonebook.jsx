import { useState } from 'react';
import { ContactsForm, Menu, ContactsList, Filter } from 'components/Phonebook';
import { Container } from './Phonebook.styled';

const Phonebook = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

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

  return (
    <Container>
      <Menu
        isOpenForm={isOpenForm}
        isOpenFilter={isOpenFilter}
        toggle={toggle}
      />
      {isOpenForm && <ContactsForm toggle={toggle} />}
      {isOpenFilter && <Filter />}

      <ContactsList />
    </Container>
  );
};

export default Phonebook;
