import PropTypes from 'prop-types';
import { Contact, IconUser, Item, Button } from './ContactItem.styled';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { Notify } from 'notiflix';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();

  const handleDelete = () => {
    deleteContact(id);
    Notify.success('Contact removed');
  };

  return (
    <Item>
      <Contact>
        <IconUser />
        {name} : {number}
      </Contact>
      <Button onClick={handleDelete} title="Delete" type="button">
        <RiDeleteBin7Line />
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
