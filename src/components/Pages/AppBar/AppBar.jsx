import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../../Auth/UserMenu/UserMenu';
import { AuthNav } from '../../Auth/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Header } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

export default AppBar;
