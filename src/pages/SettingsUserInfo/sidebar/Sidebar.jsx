import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/4 space-y-5">
      <h3>Settings</h3>

      <div className="w-full md:w-60 grid grid-cols-3 md:grid-cols-1 gap-1 md:gap-3">
        <p className="text-primary-300 underline decoration-primary-300 font-bold">My profile</p>
      </div>
    </div>
  );
};

export default Sidebar;
