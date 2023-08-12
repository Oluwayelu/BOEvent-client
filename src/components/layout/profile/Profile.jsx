import { useContext } from 'react';

import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

import { AuthContext } from 'context/auth';
import { Navbar } from 'components/modules';
import { NavLink } from 'components/widgets';
import { DASHBOARD, MY_EVENTS, ORDERS, SETTINGS_USER } from 'routes/CONSTANTS';

const Profile = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="min-h-screen ">
      <Navbar />

      {/* body */}
      <div className="min-h-[90vh] w-full">
        {/* parallax */}
        <div className="relative w-full h-[45vh] bg-primary-100">
          <img src="/img/profile-background.png" className="hidden md:block w-full h-full" />

          <div className="absolute w-full h-full inset-0 flex items-center md:items-end p-5 md:py-10 md:px-10 lg:px-40">
            <div className="w-full flex flex-col md:flex-row md:space-x-5">
              {/* avatar */}
              <div className="w-28 h-28 md:w-48 md:h-48 lg:w-60 lg:h-60 border-4 md:border-8 border-white bg-gray rounded-full overflow-hidden">
                <img
                  src="/img/user-male.png"
                  className="w-full h-full object-center object-cover"
                />
              </div>

              {/* user info */}
              <div className="w-fit flex flex-col space-y-1">
                <p className="text-xl">welcome</p>
                <h1>{user?.name?.fullname || <Skeleton />}</h1>
                <h3>{user?.email || <Skeleton />}</h3>
                <div className="w-full flex items-center space-x-3">
                  <p className="text-lg">{user?.followers?.length} followers</p>
                  <div className="w-2 h-2 bg-dark rounded-full" />
                  <p className="text-lg">{user?.following?.length} following</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* body */}
        <div className="w-full flex flex-col items-end p-5 md:py-10 md:px-10 lg:px-40 space-y-5">
          {/* tabs */}
          <div className="w-full md:w-3/4 flex md:space-x-5">
            <NavLink to={DASHBOARD}>Dashboard</NavLink>
            <NavLink to={MY_EVENTS}>My event</NavLink>
            <NavLink to={ORDERS}>Orders</NavLink>
            <NavLink to={SETTINGS_USER}>Settings</NavLink>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  children: PropTypes.node,
};

export default Profile;
