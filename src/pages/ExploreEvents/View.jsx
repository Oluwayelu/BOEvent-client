import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

import { useBackground } from 'hooks';
import { EventCard, EventCardSkeleton, Search } from 'components/modules';

const ExploreEventsView = ({ loading, error, events }) => {
  const image = useBackground();
  return (
    <div className="">
      {/* parallax */}
      <div className="relative h-[65vh] bg-primary-100 ">
        <img
          src={image}
          className="w-full h-full filter object-cover object-center absolute inset-0 z-0"
        />

        <div className="relative w-full h-full p-5 md:px-10 lg:px-40 bg-dark/50 flex z-10">
          <div className="relative w-full lg:w-2/3 h-full flex flex-col justify-around">
            <h1 className="leading-snug text-white">
              Unlock Unforgettable Experiences: <br />{' '}
              <span className="text-primary-200">Book</span> Your Adventure Today!
            </h1>

            <Search />
          </div>
        </div>
      </div>

      {/* body */}
      <div className="px-5 py-10 md:px-10 lg:px-40 lg:py-20 space-y-5">
        {/* tabs */}
        <div className="w-full flex pb-2 space-x-3 border-b-2 border-b-white overflow-x-auto">
          <button className="w-fit bg-primary px-5 py-2 rounded-lg font-bold whitespace-nowrap">
            All
          </button>
          <button className="w-fit hover:bg-primary px-5 py-2 rounded-lg font-bold whitespace-nowrap">
            For you
          </button>
          <button className="w-fit hover:bg-primary px-5 py-2 rounded-lg font-bold whitespace-nowrap">
            Online
          </button>
          <button className="w-fit hover:bg-primary px-5 py-2 rounded-lg font-bold whitespace-nowrap">
            Today
          </button>
          <button className="w-fit hover:bg-primary px-5 py-2 rounded-lg font-bold whitespace-nowrap">
            Tommorrow
          </button>
          <button className="w-fit hover:bg-primary px-5 py-2 rounded-lg font-bold whitespace-nowrap">
            Education
          </button>
          <button className="w-fit hover:bg-primary px-5 py-2 rounded-lg font-bold whitespace-nowrap">
            Music
          </button>
          <button className="w-fit hover:bg-primary px-5 py-2 rounded-lg font-bold whitespace-nowrap">
            Food & Drinks
          </button>
          <button className="hover:bg-primary px-5 py-2 rounded-lg font-bold">Charity</button>
          <button className="hover:bg-primary px-5 py-2 rounded-lg font-bold">Free</button>
        </div>

        {/*  */}
        <div className="space-y-5">
          <div className="w-full flex justify-between items-center text-primary-300">
            <h3 className="text-2xl font-bold ">{'Upcoming event' || <Skeleton />}</h3>

            <p className="underline">See all &gt; </p>
          </div>

          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
            {(events && events.map((event, key) => <EventCard key={key} eventData={event} />)) || (
              <EventCardSkeleton cards={4} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ExploreEventsView.propTypes = {
  loading: PropTypes.bool,
  events: PropTypes.array,
  error: PropTypes.string,
};

export default ExploreEventsView;
