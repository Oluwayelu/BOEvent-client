import { useQuery } from '@apollo/client';

import { Landing } from 'components/layout';
import { GET_EVENTS } from 'api/event/queries';

import View from './View';

export const ExploreEventsContainer = () => {
  const { loading, error, data } = useQuery(GET_EVENTS);

  return (
    <Landing>
      <View loading={loading} error={error} events={data?.events} />
    </Landing>
  );
};
