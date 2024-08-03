import PropTypes from 'prop-types';
import { FaAngleRight } from 'react-icons/fa';

import SidebarLink from './SidebarLink';
import { DASHBOARD } from 'routes/CONSTANTS';

const Sidebar = ({ info, selected, setSelected }) => {
  const sidebarLinks = [
    {
      id: 'events-booked',
      title: 'Booked events',
      value: info?.bookings?.length,
    },
    {
      id: 'events-created',
      title: 'My Events',
      value: info?.myEvents?.length,
    },
    // {
    //   id: 'liked-events',
    //   title: 'Liked events',
    //   value: 12,
    // },
  ];

  return (
    <div className="w-full md:w-1/4 space-y-3 md:space-y-5">
      <h3>Dashboard</h3>

      <div className="w-full md:w-60 grid grid-cols-2 md:grid-cols-1 gap-3">
        {sidebarLinks.map(({ id, title, value }, key) => (
          <div
            key={key}
            onClick={() => setSelected(id)}
            className={`${
              selected === id && 'bg-primary'
            } w-full p-2 md:p-3 flex justify-between items-center border-2 border-dark hover:bg-primary rounded-lg cursor-pointer`}
          >
            <div>
              <p className="text-xs md:text-sm">{title}</p>
              <p className="text-lg md:text-xl font-bold">{value || 0}</p>
            </div>

            <div>
              <FaAngleRight className="w-5 h-5 text-dark" />
            </div>
          </div>
        ))}
        {/* <SidebarLink
          active={selected === 'events-booked'}
          to={`${DASHBOARD}/events-booked`}
          title="Events booked"
          value={11}
        />
        <SidebarLink
          active={selected === 'events-created'}
          to={`${DASHBOARD}/events-created`}
          title="Events created"
          value={7}
        />
        <SidebarLink
          active={selected === 'liked-events'}
          to={`${DASHBOARD}/liked-events`}
          title="Liked events"
          value={12}
        /> */}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  info: PropTypes.object,
  selected: PropTypes.string,
  setSelected: PropTypes.func,
};

export default Sidebar;
