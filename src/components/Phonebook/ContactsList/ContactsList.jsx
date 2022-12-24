import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { selectFilterValue } from 'redux/selectors';

import ContactItem from './ContactItem/ContactItem';
import { Notification } from 'common/Notification/Notification';
import { Title, Wrapper } from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilterValue);

  const visibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const filteredContacts = visibleContacts();

  return (
    <Wrapper>
      <Title>Contacts</Title>
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

export default ContactsList;
