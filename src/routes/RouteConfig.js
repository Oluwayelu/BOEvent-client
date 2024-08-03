import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  BOOK_EVENT,
  CREATE_EVENT,
  DASHBOARD,
  EXPLORE_EVENTS,
  MY_EVENTS,
  SETTINGS_USER,
} from './CONSTANTS';
import {
  BookEvent,
  CreateEvent,
  CreateEventNew,
  Dashboard,
  ExploreEvents,
  Login,
  MyEvents,
  PageNotFound,
  Register,
  SettingsUserInfo,
} from 'pages';
import { ProtectedRoute, PublicRoute } from 'components/guards';
import { Loader } from 'components/modules';

const RouteConfig = () => {
  return (
    <Routes>
      <Route
        path={EXPLORE_EVENTS}
        element={
          <Suspense fallback={<Loader />}>
            <ExploreEvents />
          </Suspense>
        }
      />

      <Route
        path={`${BOOK_EVENT}/:url`}
        element={
          <Suspense fallback={<Loader />}>
            <BookEvent />
          </Suspense>
        }
      />

      {/* public routes */}
      <Route path="/" element={<PublicRoute />}>
        <Route
          path={AUTH_LOGIN}
          element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path={AUTH_REGISTER}
          element={
            <Suspense fallback={<Loader />}>
              <Register />
            </Suspense>
          }
        />
      </Route>

      {/* protected routes */}
      <Route path="/" element={<ProtectedRoute />}>
        <Route
          path={CREATE_EVENT}
          element={
            <Suspense fallback={<Loader />}>
              <CreateEventNew />
            </Suspense>
          }
        />

        <Route path={DASHBOARD} element={<Dashboard />} />
        <Route path={MY_EVENTS} element={<MyEvents />} />
        <Route path={SETTINGS_USER} element={<SettingsUserInfo />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RouteConfig;
