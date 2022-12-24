import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';

import { Contact, IconUser, Item, Button } from './ContactItem.styled';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { Notify } from 'notiflix';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
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
