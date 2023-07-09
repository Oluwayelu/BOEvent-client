import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AUTH_LOGIN, AUTH_REGISTER, BOOK_EVENT, EXPLORE_EVENTS } from './CONSTANTS';
import { BookEvent, ExploreEvents, Login, Register } from 'pages';
import { PublicRoute } from 'components/guards';
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
        path={`${BOOK_EVENT}/:id`}
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
    </Routes>
  );
};

export default RouteConfig;
