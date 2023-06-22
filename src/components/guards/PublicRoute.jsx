import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ navigate }) => {
  const isLoggedIn = true;
  return !isLoggedIn ? <Outlet /> : <Navigate to={navigate} replace />;
};

export default PublicRoute;

PublicRoute.propTypes = {
  navigate: PropTypes.string,
};
