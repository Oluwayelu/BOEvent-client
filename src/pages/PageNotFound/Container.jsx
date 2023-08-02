import { Landing } from 'components/layout';

import PageNotFoundView from './View';

export const PageNotFoundContainer = () => {
  return (
    <Landing footer={false}>
      <PageNotFoundView />
    </Landing>
  );
};
