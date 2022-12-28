import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import { useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUserName } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUserName);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
