import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BOOK_EVENT } from 'routes/CONSTANTS';

const EventCard = ({ eventData }) => {
  return (
    <Link to={`${BOOK_EVENT}/${eventData.id}`}>
      <div className="w-full h-fit bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow">
        {/* event image */}
        <div className="w-full h-3/4 bg-primary-100">
          <img
            src="/img/sample-event.png"
            className="w-full h-full filter object-center object-cover"
          />
        </div>

        <div className="w-full p-3 h-1/4 flex flex-col space-y-2">
          <h5 className="text-lg">Learn forex for beginners</h5>

          <div className="w-full h-full inline-flex justify-between">
            <div className="w-2/3">
              <p className="text-sm font-bold">NGN 5,000</p>
              <p className="text-sm">Wed, JUN 21, 8:00PM</p>
            </div>

            <div className="relative w-1/3">
              <div className="absolute bottom-0 right-0">
                <p className="text-sm font-bold">2h</p>
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
