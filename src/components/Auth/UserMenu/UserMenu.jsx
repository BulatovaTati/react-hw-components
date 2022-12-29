import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUserName } from 'redux/auth/authSelectors';
import Button from '@mui/material/Button';
import { Container, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUserName);

  return (
    <Container>
      <UserName>Welcome, {name}</UserName>
      <Button
        type="submit"
        onClick={() => dispatch(logOut())}
        fullWidth
        variant="contained"
      >
        Log out
      </Button>
    </Container>
  );
};
