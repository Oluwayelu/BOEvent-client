import React from 'react';
import SidebarLink from './SidebarLink';
import { DASHBOARD } from 'routes/CONSTANTS';

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/4 space-y-5">
      <h3>Dashboard</h3>

      <div className="w-full md:w-60 grid grid-cols-3 md:grid-cols-1 gap-1 md:gap-3">
        {/* <SidebarLink to={`${DASHBOARD}/events-booked`} title="Events booked" value={11} />
        <SidebarLink to={`${DASHBOARD}/events-created`} title="Events created" value={7} />
        <SidebarLink to={`${DASHBOARD}/liked-events`} title="Liked events" value={12} /> */}
        <p className="text-primary-300 underline decoration-primary-300 font-bold">My profile</p>
      </div>
    </div>
  );
};

export default Sidebar;
