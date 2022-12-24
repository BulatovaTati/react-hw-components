import { useSelector } from 'react-redux';
import { visibleContacts } from 'redux/selectors';
import ContactItem from './ContactItem/ContactItem';
import { Notification } from 'components/Phonebook/Notification/Notification';
import { Title, Wrapper } from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(visibleContacts);

  return (
    <Wrapper>
      <Title>Contacts</Title>
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

export default ContactsList;
