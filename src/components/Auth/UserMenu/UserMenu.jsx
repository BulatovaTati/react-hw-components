import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import { useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
};
