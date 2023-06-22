import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ navigate }) => {
  const isLoggedIn = true;
  return isLoggedIn ? <Outlet /> : <Navigate to={navigate} replace />;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  navigate: PropTypes.string,
};
