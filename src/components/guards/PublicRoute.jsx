import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from 'context/auth';
import { EXPLORE_EVENTS } from 'routes/CONSTANTS';

const PublicRoute = () => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? <Navigate to={EXPLORE_EVENTS} replace /> : <Outlet />;
};

export default PublicRoute;

PublicRoute.propTypes = {
  navigate: PropTypes.string,
};
