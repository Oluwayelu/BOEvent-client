import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

const EventCardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, key) => (
      <div
        key={key}
        className="w-full h-fit bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow"
      >
        <Skeleton height={200} />

        <div className="w-full p-3 h-1/4 flex flex-col space-y-2">
          <Skeleton />
          <div className="w-full h-full inline-flex justify-between">
            <div className="w-2/3">
              <Skeleton count={2} height={15} />
            </div>

            <div className="relative w-1/3">
              <div className="absolute bottom-0 right-0">
                <Skeleton width={20} height={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
};

EventCardSkeleton.propTypes = {
  cards: PropTypes.number,
};

export default EventCardSkeleton;
