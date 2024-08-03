import PropTypes from 'prop-types';
import { useState } from 'react';

import { Sidebar } from './sidebar';
import EventsBooked from './sections/EventsBooked';
import EventsCreated from './sections/EventsCreated';
import LikedEvents from './sections/LikedEvents';

const DashboardView = ({ myEvents, bookings }) => {
  const [selected, setSelected] = useState('events-booked');
  const info = { myEvents, bookings };

  return (
    <div className="w-full flex flex-col md:flex-row gap-3">
      {/* sidebar */}
      <Sidebar info={info} selected={selected} setSelected={setSelected} />

      {/* body content */}
      <div className="w-full md:w-3/4">
        {selected === 'events-booked' && <EventsBooked bookings={bookings} />}
        {selected === 'events-created' && <EventsCreated myEvents={myEvents} />}
        {selected === 'liked-events' && <LikedEvents />}
      </div>
    </div>
  );
};

DashboardView.propTypes = {
  myEvents: PropTypes.array,
  bookings: PropTypes.array,
};

export default DashboardView;
