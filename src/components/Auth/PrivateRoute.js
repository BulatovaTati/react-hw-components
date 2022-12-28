import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectIsFetchingCurrent,
  selectIsLoggedIn,
} from 'redux/auth/authSelectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const IsFetchingCurrent = useSelector(selectIsFetchingCurrent);
  const shouldRedirect = !isLoggedIn && !IsFetchingCurrent;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
export default PrivateRoute;
