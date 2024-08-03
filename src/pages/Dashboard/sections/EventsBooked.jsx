import PropTypes from 'prop-types';

import { EventCard, EventCardSkeleton } from 'components/modules';

const EventsBooked = ({ bookings }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-3">
      {(bookings &&
        bookings.map(({ event }, key) => <EventCard key={key} eventData={event} />)) || (
        <EventCardSkeleton cards={4} />
      )}
    </div>
  );
};

EventsBooked.propTypes = {
  bookings: PropTypes.array,
};

export default EventsBooked;
