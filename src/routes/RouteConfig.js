import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AUTH_LOGIN, AUTH_REGISTER, BOOK_EVENT, CREATE_EVENT, EXPLORE_EVENTS } from './CONSTANTS';
import { BookEvent, CreateEvent, ExploreEvents, Login, PageNotFound, Register } from 'pages';
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

      {/* protected routes */}
      <Route path="/" element={<ProtectedRoute />}>
        <Route
          path={CREATE_EVENT}
          element={
            <Suspense fallback={<Loader />}>
              <CreateEvent />
            </Suspense>
          }
        />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RouteConfig;
