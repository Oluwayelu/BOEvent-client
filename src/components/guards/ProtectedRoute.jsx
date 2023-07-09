import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from 'context/auth';

const ProtectedRoute = ({ navigate }) => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? <Outlet /> : <Navigate to={navigate} replace />;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  navigate: PropTypes.string,
};
