import { Routes, Route } from 'react-router-dom';

import { AUTH_LOGIN, AUTH_REGISTER, EXPLORE_EVENTS } from './CONSTANTS';
import { ExploreEvents, Login, Register } from 'pages';
import { PublicRoute } from 'components/guards';

const RouteConfig = () => {
  return (
    <Routes>
      <Route path={EXPLORE_EVENTS} element={<ExploreEvents />} />

      {/* public routes */}
      <Route path="/" element={<PublicRoute />}>
        <Route path={AUTH_LOGIN} element={<Login />} />
        <Route path={AUTH_REGISTER} element={<Register />} />
      </Route>
    </Routes>
  );
};

export default RouteConfig;
