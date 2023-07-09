import { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';

import { AuthContext } from 'context/auth';
import { Button } from 'components/widgets';
import { AUTH_LOGIN, EXPLORE_EVENTS } from 'routes/CONSTANTS';

import NavLink from './NavLink';

const Navbar = () => {
  const { pathname } = useLocation();
  const { isAuth } = useContext(AuthContext);

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
      {isAuth ? (
        <div className="inline-flex space-x-3 lg:space-x-5">
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
            <AiOutlineUser className="w-8 h-8 border-dark" />
          </div>
        </div>
      ) : (
        <div className="inline-flex space-x-3 lg:space-x-5">
          <Button href="#" className="bg-primary text-dark">
            Create events
          </Button>
          <Button href={AUTH_LOGIN} className="bg-dark text-white">
            Login
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
