import { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';

import { AuthContext } from 'context/auth';
import { Button, Dropdown, DropdownLink } from 'components/widgets';
import {
  AUTH_LOGIN,
  CREATE_EVENT,
  DASHBOARD,
  EXPLORE_EVENTS,
  MY_EVENTS,
  ORDERS,
  SETTINGS_PASSWORD,
  SETTINGS_USER,
} from 'routes/CONSTANTS';

import NavLink from './NavLink';

const Navbar = () => {
  const { pathname } = useLocation();
  const { isAuth, user, logout } = useContext(AuthContext);

  return (
    <div className="sticky top-0 left-0 right-0 w-full h-[10vh] px-5 md:px-10 py-5 flex items-center justify-between bg-white z-50">
      {/* left */}
      <div className="inline-flex space-x-10">
        {/* logo */}
        <Link to={EXPLORE_EVENTS}>
          <img src="/img/logo.png" className="w-fit h-10" />
        </Link>
        {/* search bar */}
        {pathname !== EXPLORE_EVENTS && (
          <div className="w-80 border-2 border-dark rounded-lg hidden md:inline-flex overflow-hidden">
            <div className="w-10 h-full flex items-center justify-center">
              <AiOutlineSearch className="w-5 h-5 text-dark" />
            </div>
            <input type="search" className="w-full" placeholder="Search events" />
          </div>
        )}
      </div>

      {/* center */}
      <div className="hidden lg:inline-flex space-x-10">
        <NavLink href="/">Explore events</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/industry">Industry</NavLink>
      </div>

      {/* right */}
      <div className="inline-flex space-x-3 lg:space-x-5">
        <Button href={CREATE_EVENT} className="bg-primary text-dark">
          Create events
        </Button>
        {isAuth ? (
          <Dropdown
            button={
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center overflow-hidden cursor-pointer">
                {user?.avatar ? (
                  <img src={user?.avatar} className="w-full h-full object-center object-cover" />
                ) : (
                  <AiOutlineUser className="w-8 h-8 border-dark" />
                )}
              </div>
            }
          >
            <div className="flex flex-col space-y-1">
              <DropdownLink to={DASHBOARD}>Dashboard</DropdownLink>
              <DropdownLink to={MY_EVENTS}>My events</DropdownLink>
              <DropdownLink to={ORDERS}>Orders</DropdownLink>
            </div>
            <div className="flex flex-col space-y-1">
              <DropdownLink to={SETTINGS_USER}>My profile</DropdownLink>
              <DropdownLink to={SETTINGS_PASSWORD}>Change password</DropdownLink>
            </div>
            <div className="flex flex-col space-y-1">
              <div onClick={logout} className="text-error cursor-pointer">
                Logout
              </div>
            </div>
          </Dropdown>
        ) : (
          <Button href={AUTH_LOGIN} className="bg-dark text-white">
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
