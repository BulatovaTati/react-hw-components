import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../../Auth/UserMenu/UserMenu';
import { AuthNav } from '../../Auth/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
