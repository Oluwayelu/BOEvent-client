import { FaPlus, FaMinus } from 'react-icons/fa';

import { Button } from 'components/widgets';

const BookEventView = () => {
  return (
    <div className="px-5 py-5 md:px-10 lg:px-40 lg:py-20 space-y-5 lg:space-y-10">
      {/* event banner */}
      <div className="w-full h-[40vh] md:h-[60vh] bg-primary-100">
        <img
          src="/img/sample-event.png"
          className="w-full h-full filter object-center object-cover"
        />
      </div>
      {/* event header */}
      <div className="w-full lg:w-2/3 flex flex-col md:flex-row items-stretch">
        {/* event date */}
        <div className="w-full md:w-1/6">
          <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center rounded-lg bg-primary">
            <p className="text-xl md:text-2xl text-center font-extrabold">
              21 <br /> JUN
            </p>
          </div>
        </div>

        {/*  */}
        <div className="w-full md:w-5/6 py-1 flex flex-col justify-between">
          <div>
            <h2>Learn forex for beginners</h2>
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-3">
            <div>
              <p className="text-lg text-primary-300 font-bold">Location</p>
              <p>Online event</p>
            </div>
            <div>
              <p className="text-lg text-primary-300 font-bold">Date</p>
              <p>Wed, 21 JUN</p>
            </div>
            <div>
              <p className="text-lg text-primary-300 font-bold">Time</p>
              <p>8:00 PM - 10:00 PM (2h)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
        <div className="w-full lg:w-2/3 space-y-5">
          <div>
            <h3>About event</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit alias error aperiam
              quasi eos eum eligendi, repellendus odit est corrupti sapiente eveniet quis odio dolor
              sed, recusandae commodi nihil dolorem. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Fugit alias error aperiam quasi eos eum eligendi, repellendus odit
              est corrupti sapiente eveniet quis odio dolor sed, recusandae commodi nihil dolorem.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit alias error aperiam
              quasi eos eum eligendi, repellendus odit est corrupti sapiente eveniet quis odio dolor
              sed, recusandae commodi nihil dolorem. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Fugit alias error aperiam quasi eos eum eligendi, repellendus odit
              est corrupti sapiente eveniet quis odio dolor sed, recusandae commodi nihil dolorem.s
            </p>
          </div>

          <div className="w-full h-px bg-white" />
          <div className="space-y-3">
            <h3>Organizer</h3>

            <div className="flex items-stretch space-x-3">
              <div className="w-20 h-20 bg-white rounded-full"></div>
              <div className="flex flex-col justify-around">
                <p className="font-bold">Oluwayelu Ifeoluwa</p>
                <div className="flex items-center space-x-3">
                  <div>2 followers</div>
                  <Button size="sm" className="border-2 border-dark text-dark">
                    Follow
                  </Button>
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
                  <Button className="bg-primary-100">
                    <FaMinus className="w-3 h-3" />
                  </Button>
                  <p>1</p>
                  <Button className="bg-primary">
                    <FaPlus className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              <div className="px-5 py-1 bg-background rounded-full text-sm">50 Remaining</div>
            </div>

            <div className="w-full flex justify-between items-center">
              <p className="text-lg font-bold">Ticket price: </p>
              <h3>5,000</h3>
            </div>
            <div className="w-full h-px bg-background" />
            <div className="w-full flex justify-between items-center">
              <p className="text-lg font-bold">Total price: </p>
              <h3>5,000</h3>
            </div>

            <Button className="w-full bg-dark text-white">Book event</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookEventView;
