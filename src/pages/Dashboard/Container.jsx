import { Profile } from 'components/layout';

import DashboardView from './View';
import { useQuery } from '@apollo/client';
import { GET_My_EVENTS_CREATED } from 'api/event/queries';
import { GET_BOOKINGS, GET_ORDERS } from 'api/booking/queries';

export const DashboardContainer = () => {
  const { data: events } = useQuery(GET_My_EVENTS_CREATED);
  const { data: bookings } = useQuery(GET_BOOKINGS);

  const { data } = useQuery(GET_ORDERS);

  console.log('Orders: ', data);

  return (
    <Profile>
      <DashboardView myEvents={events?.myEvents} bookings={bookings?.bookings} />
    </Profile>
  );
};
