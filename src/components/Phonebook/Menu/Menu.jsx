import { Button, Wrapper, Title } from './Menu.styled';
import { RiUserSearchLine, RiUserAddLine } from 'react-icons/ri';

const Menu = ({ toggle, isOpenFilter, isOpenForm }) => {
  return (
    <Wrapper>
      <Title>PHONEBOOK</Title>

      <Button
        onClick={() => toggle('isOpenForm')}
        isOpen={isOpenForm}
        title="Add contact"
        type="button"
      >
        <RiUserAddLine />
      </Button>

      <Button
        onClick={() => toggle('isOpenFilter')}
        isOpen={isOpenFilter}
        title="Search"
        type="button"
      >
        <RiUserSearchLine />
      </Button>
    </Wrapper>
  );
};

export default Menu;
