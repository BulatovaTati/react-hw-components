import { useState } from 'react';
import { ContactsForm, Menu, ContactsList } from 'components/contacts';
import { Filter } from './Filter/Filter';
import { Container } from './Phonebook.styled';
import { Loader } from './Loader/Loader';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

export const App = () => {
  const { isFetching, error } = useGetContactsQuery();
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

  // return (
  //   <Container>
  //     <Menu
  //       isOpenForm={isOpenForm}
  //       isOpenFilter={isOpenFilter}
  //       toggle={toggle}
  //     />
  //     {isOpenForm && <ContactsForm toggle={toggle} />}
  //     {isOpenFilter && <Filter />}
  //     {isFetching && !error && <Loader />}
  //     {!isFetching && <ContactsList />}
  //   </Container>
  // );
};
