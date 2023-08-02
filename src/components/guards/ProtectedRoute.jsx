import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { AuthContext } from 'context/auth';
import { AUTH_LOGIN } from 'routes/CONSTANTS';

const ProtectedRoute = () => {
  const { pathname } = useLocation();
  const { isAuth } = useContext(AuthContext);
  return isAuth ? <Outlet /> : <Navigate to={AUTH_LOGIN + `?redirect=${pathname}`} replace />;
};

export default ProtectedRoute;
