import PropTypes from 'prop-types';
import { FaPlus, FaMinus, FaCalendar, FaClock, FaLocationArrow } from 'react-icons/fa';

import { MdLocationPin, MdCalendarToday } from 'react-icons/md';

import { Avatar, Button, NairaIcon } from 'components/widgets';
import { getDate, getTime, diffTime } from 'utils/date-time';

const BookEventView = ({
  event,
  follow,
  ticket,
  noOfTickets,
  isFollowing,
  isOrganizer,
  totalPrice,
  bookEvent,
}) => {
  console.log(event);
  return (
    <div className="px-5 py-5 md:px-10 lg:px-40 lg:py-10 space-y-5 lg:space-y-10">
      {/* event banner */}
      <div className="w-full h-[40vh] md:h-[60vh] bg-primary-100">
        <img src={event?.banner[0]} className="w-full h-full filter object-center object-cover" />
      </div>
      {/* event header */}
      <div className="w-full lg:w-2/3 flex flex-col md:flex-row items-stretch md:space-x-3">
        {/* event date */}
        <div className="w-full md:w-1/6">
          <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center rounded-lg bg-primary">
            <p className="text-xl md:text-2xl text-center font-extrabold">
              {getDate(event.time.startDate).day} <br />
              {getDate(event.time.startDate).month}
            </p>
          </div>
        </div>

        {/*  */}
        <div className="w-full md:w-5/6 py-1 flex flex-col justify-between">
          <div>
            <h2>{event?.title}</h2>
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-3">
            <div>
              <div className="flex items-center text-primary-300 gap-1">
                <MdLocationPin className="w-5 h-5" />
                <p className="text-lg text-primary-300 font-bold">Location</p>
              </div>
              <p>{event.venue.type === 'online' ? 'Online event' : event.venue.location}</p>
            </div>
            <div>
              <div className="flex items-center text-primary-300 gap-1">
                <MdCalendarToday className="w-5 h-5" />
                <p className="text-lg font-bold">Date</p>
              </div>
              <p>
                <span>{getDate(event.time.startDate).date}</span>
                {event.time.startDate !== event.time.endDate && (
                  <span> - {getDate(event.time.endDate).date}</span>
                )}
              </p>
            </div>
            <div>
              <div className="flex items-center text-primary-300 gap-1">
                <FaClock className="w-5 h-5" />
                <p className="text-lg text-primary-300 font-bold">Time</p>
              </div>
              <p>
                {getTime(event.time.startTime)} - {getTime(event.time.endTime)} (
                {diffTime(event.time.startTime, event.time.endTime)})
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
        <div className="w-full lg:w-2/3 space-y-5">
          <div>
            <h3>About event</h3>
            <p dangerouslySetInnerHTML={{ __html: event.description }} />
          </div>

          <div className="w-full h-px bg-white" />
          <div className="space-y-3">
            <h3>Organizer</h3>

            <div className="flex items-center space-x-3">
              <Avatar size="sm" src={event.organizer.avatar} />
              <div className="flex flex-col justify-around">
                <p className="font-bold">{event.organizer.name.fullname}</p>
                <div className="flex items-center space-x-2">
                  <div>{event.organizer.followers.length} followers</div>
                  {!isOrganizer && (
                    <Button onClick={follow} size="sm" className="border-2 border-dark text-dark">
                      {isFollowing ? 'Unfollow' : 'Follow'}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <div className="w-full p-3 md:p-5 bg-white shadow rounded-lg space-y-3">
            <div className="w-full flex flex-col items-end space-y-1">
              <div className="w-full flex justify-between items-center">
                <p className="text-lg font-bold">No. of Tickets:</p>

                <div className="flex items-center space-x-3">
                  <Button
                    onClick={() => ticket('sub')}
                    className={noOfTickets > 1 ? 'bg-primary' : 'bg-primary-100'}
                  >
                    <FaMinus className="w-3 h-3" />
                  </Button>
                  <p>{noOfTickets}</p>
                  <Button onClick={() => ticket()} className="bg-primary">
                    <FaPlus className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              {event.ticket.stockType === 'limited' && (
                <div className="px-5 py-1 bg-background rounded-full text-sm">
                  {event.ticket.stock} Remaining
                </div>
              )}
            </div>

            <div className="w-full flex justify-between items-center">
              <p className="text-lg font-bold">Ticket price: </p>
              <h3>
                {event.ticket.type === 'paid' ? (
                  <span>
                    <NairaIcon /> {event.ticket.price.toLocaleString()}
                  </span>
                ) : (
                  <span className="italic">free</span>
                )}
              </h3>
            </div>
            <div className="w-full h-px bg-background" />
            <div className="w-full flex justify-between items-center">
              <p className="text-lg font-bold">Total price: </p>
              <h3>
                {totalPrice > 0 ? (
                  <span>
                    <NairaIcon /> {totalPrice.toLocaleString()}
                  </span>
                ) : (
                  <span className="italic">free</span>
                )}
              </h3>
            </div>

            <Button onClick={bookEvent} className="w-full bg-dark text-white">
              Book event
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

BookEventView.propTypes = {
  loading: PropTypes.bool,
  event: PropTypes.object,
  ticket: PropTypes.func,
  follow: PropTypes.func,
  noOfTickets: PropTypes.number,
  totalPrice: PropTypes.number,
  isFollowing: PropTypes.bool,
  isOrganizer: PropTypes.bool,
  bookEvent: PropTypes.func,
};

export default BookEventView;
