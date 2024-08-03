import { NairaIcon } from 'components/widgets';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BOOK_EVENT } from 'routes/CONSTANTS';
import { diffTime, getDate } from 'utils/date-time';

const EventCard = ({ eventData }) => {
  return (
    <Link to={`${BOOK_EVENT}/${eventData.url}`}>
      <div className="w-full h-60 md:h-80 bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow">
        {/* event image */}
        <div className="w-full h-1/2 md:h-2/3 bg-primary-100">
          <img
            src={eventData.banner[0]}
            className="w-full h-full filter object-center object-cover"
          />
        </div>

        <div className="w-full p-3 h-1/2 md:h-1/3 flex flex-col space-y-2">
          <h5 className="text-lg">{eventData.title}</h5>

          <div className="w-full h-full inline-flex justify-between">
            <div className="w-2/3">
              <p className="text-sm font-bold">
                {eventData.ticket.type === 'paid' ? (
                  <span>
                    <NairaIcon className="text-sm" /> {eventData.ticket.price.toLocaleString()}
                  </span>
                ) : (
                  <span className="italic">free</span>
                )}
              </p>
              <p className="text-sm">
                <span>{getDate(eventData.time.startDate).date}</span>
                {eventData.time.startDate !== eventData.time.endDate && (
                  <span> - {getDate(eventData.time.endDate).date}</span>
                )}
              </p>
            </div>

            <div className="relative w-1/3">
              <div className="absolute bottom-0 right-0">
                <p className="text-sm font-bold">
                  {diffTime(eventData.time.startTime, eventData.time.endTime)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

EventCard.propTypes = {
  eventData: PropTypes.object,
};

export default EventCard;
