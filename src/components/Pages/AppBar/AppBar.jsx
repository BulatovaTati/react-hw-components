import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../../Auth/UserMenu/UserMenu';
import { AuthNav } from '../../Auth/AuthNav/AuthNav';
import { authSelectors } from 'redux/auth';
import css from './AppBar.module.css';
import { useSelector } from 'react-redux';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
