import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const IsFetchingCurrent = useSelector(authSelectors.getIsFetchingCurrent);
  const shouldRedirect = !isLoggedIn && !IsFetchingCurrent;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
export default PrivateRoute;
