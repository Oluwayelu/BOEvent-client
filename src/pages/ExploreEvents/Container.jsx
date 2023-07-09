import { useContext } from 'react';

import { AuthContext } from 'context/auth';
import { Landing } from 'components/layout';

import View from './View';

export const ExploreEventsContainer = () => {
  const { isAuth } = useContext(AuthContext);

  console.log(isAuth);
  return (
    <Landing>
      <View />
    </Landing>
  );
};
