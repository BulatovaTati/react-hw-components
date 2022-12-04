import { useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Notification } from 'common/Notification/Notification';

import ContactItem from './ContactItem/ContactItem';
import { Title, Wrapper } from './ContactsList.styled';

const EntryContainer = ({ children, ...props }) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition {...props} timeout={500} classNames="item" nodeRef={nodeRef}>
      {/* When the in prop is set to true, the child component will first receive
      the class example-enter (item), then the example-enter-active (item+active) will be added in
      the next tick.  */}
      <div ref={nodeRef}>{children}</div>
    </CSSTransition>
  );
};

const ContactsList = ({ contacts, deleteHandler }) => {
  return (
    <Wrapper>
      <Title>Contacts</Title>
      {contacts.length > 0 ? (
        <ul>
          <TransitionGroup>
            {contacts.map(({ id, name, number }) => (
              <EntryContainer key={id}>
                <ContactItem
                  id={id}
                  name={name}
                  number={number}
                  deleteHandler={deleteHandler}
                />
              </EntryContainer>
            ))}
          </TransitionGroup>
        </ul>
      ) : (
        <Notification message="Contact list is empty" />
      )}
    </Wrapper>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteHandler: PropTypes.func,
};
