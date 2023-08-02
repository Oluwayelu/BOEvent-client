import React from 'react';

export { default as PageNotFound } from './PageNotFound';

export const Login = React.lazy(() => import('./Login'));
export const Register = React.lazy(() => import('./Register'));
export const BookEvent = React.lazy(() => import('./BookEvent'));
export const CreateEvent = React.lazy(() => import('./CreateEvent'));
export const ExploreEvents = React.lazy(() => import('./ExploreEvents'));
