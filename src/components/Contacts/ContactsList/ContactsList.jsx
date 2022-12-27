import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { selectFilterValue } from 'redux/filter/filterSlice';
import { ContactItem } from './ContactItem/ContactItem';
import { Notification } from 'components/Notification/Notification';
import { TitleEl } from 'components/Title/Title';
import { Wrapper } from './ContactsList.styled';

export const ContactsList = () => {
  const filter = useSelector(selectFilterValue);
  const { data } = useGetContactsQuery();

  const visibleContacts = () =>
    data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const filteredContacts = visibleContacts();

  return (
    <Wrapper>
      <TitleEl>Contacts</TitleEl>
      {filteredContacts.length > 0 ? (
        <ul>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      ) : (
        <Notification message="Contact list is empty" />
      )}
    </Wrapper>
  );
};
