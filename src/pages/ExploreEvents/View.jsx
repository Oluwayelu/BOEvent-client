import { useBackground } from 'hooks';
import { EventCard, Search } from 'components/modules';

const ExploreEventsView = () => {
  const image = useBackground();
  return (
    <div className="">
      {/* parallax */}
      <div className="relative h-[50vh] lg:h-[65vh] bg-primary-100 ">
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
      <div className="px-5 py-10 md:px-10 lg:px-40 lg:py-20 space-y-10">
        <div className="w-full flex flex-wrap justify-center space-x-3">
          <button className="bg-primary px-5 py-2 rounded-lg font-bold">All</button>
          <button className="hover:bg-primary px-5 py-2 rounded-lg font-bold">For you</button>
          <button className="hover:bg-primary px-5 py-2 rounded-lg font-bold">Online</button>
          <button className="hover:bg-primary px-5 py-2 rounded-lg font-bold">Today</button>
          <button className="hover:bg-primary px-5 py-2 rounded-lg font-bold">Tommorrow</button>
          <button className="hover:bg-primary px-5 py-2 rounded-lg font-bold">Education</button>
          <button className="hover:bg-primary px-5 py-2 rounded-lg font-bold">Music</button>
          <button className="hover:bg-primary px-5 py-2 rounded-lg font-bold">Food & Drinks</button>
          <button className="hover:bg-primary px-5 py-2 rounded-lg font-bold">Charity</button>
          <button className="hover:bg-primary px-5 py-2 rounded-lg font-bold">Free</button>
        </div>

        {/*  */}
        <div className="space-y-5">
          <h3 className="text-2xl font-bold">Upcoming event</h3>

          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-10">
            {[0, 1, 2, 3, 4, 5, 6].map((i, key) => (
              <EventCard key={key} eventData={{ id: i }} />
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <h3 className="text-2xl font-bold">Free event</h3>

          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-10">
            {[0, 1, 2, 3].map((i, key) => (
              <EventCard key={key} eventData={{ id: i }} />
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <h3 className="text-2xl font-bold">Charity event</h3>

          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-10">
            {[0, 1, 2].map((i, key) => (
              <EventCard key={key} eventData={{ id: i }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreEventsView;
