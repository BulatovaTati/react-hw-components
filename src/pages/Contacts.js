import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { ContactsForm, Menu, ContactsList } from 'components/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/Phonebook.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      {isLoading && !error && <Loader />}
      {!isLoading && <ContactsList />}
    </Container>
  );
};

export default Contacts;
