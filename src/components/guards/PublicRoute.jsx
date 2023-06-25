import PropTypes from 'prop-types';

import { Navigate, Outlet } from 'react-router-dom';
import { EXPLORE_EVENTS } from 'routes/CONSTANTS';

const PublicRoute = ({ navigate }) => {
  const isLoggedIn = false;
  return isLoggedIn ? <Navigate to={EXPLORE_EVENTS} replace /> : <Outlet />;
};

export default PublicRoute;

PublicRoute.propTypes = {
  navigate: PropTypes.string,
};
