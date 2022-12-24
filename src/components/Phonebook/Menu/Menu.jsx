import { Button, Wrapper } from './Menu.styled';
import { RiUserSearchLine, RiUserAddLine } from 'react-icons/ri';
import { TitleEl } from 'components/Phonebook/Title/Title';

const Menu = ({ toggle, isOpenFilter, isOpenForm }) => {
  return (
    <Wrapper>
      <TitleEl str="Phonebook" color="white" />

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
