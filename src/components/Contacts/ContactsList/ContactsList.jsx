import { ContactItem } from './ContactItem/ContactItem';
import { Notification } from 'components/Notification/Notification';
import { TitleEl } from 'components/Title/Title';
import { Wrapper } from './ContactsList.styled';
import { visibleContacts } from 'redux/contacts/contactsSelectors';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(visibleContacts);

  return (
    <Wrapper>
      <TitleEl>Contacts</TitleEl>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      ) : (
        <Notification message="Contact list is empty" />
      )}
    </Wrapper>
  );
};
