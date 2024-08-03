import PropTypes from 'prop-types';

import { EventCard, EventCardSkeleton } from 'components/modules';

const EventsCreated = ({ myEvents }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-3">
      {(myEvents && myEvents.map((event, key) => <EventCard key={key} eventData={event} />)) || (
        <EventCardSkeleton cards={4} />
      )}
    </div>
  );
};

EventsCreated.propTypes = {
  myEvents: PropTypes.array,
};

export default EventsCreated;
