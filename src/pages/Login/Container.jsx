import { Auth } from 'components/layout';

import LoginView from './View';

export const LoginContainer = () => {
  return (
    <Auth title="Login">
      <LoginView />
    </Auth>
  );
};
