import { useQuery } from '@apollo/client';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { AUTH_LOGIN } from 'routes/CONSTANTS';
import { LOGIN_SUCCESS } from 'api/users/queries';

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { data } = useQuery(LOGIN_SUCCESS);
  const { pathname } = useLocation();
  if (!data?.loginSuccess?.user) {
    navigate(AUTH_LOGIN + `?redirect=${pathname}`);
  }
  return <Outlet />;
};

export default ProtectedRoute;
