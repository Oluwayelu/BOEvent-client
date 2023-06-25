import { AiOutlineSearch } from 'react-icons/ai';

import { Button } from 'components/widgets';
import { AUTH_LOGIN } from 'routes/CONSTANTS';

import NavLink from './NavLink';

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 right-0 w-full h-[10vh] px-5 md:px-10 py-5 flex items-center justify-between bg-white z-50">
      {/* left */}
      <div className="inline-flex space-x-10">
        {/* logo */}
        <img src="/img/logo.png" className="w-fit h-10" />
        {/* search bar */}
        <div className="w-80 border-2 border-dark rounded-lg hidden md:inline-flex overflow-hidden">
          <div className="w-10 h-full flex items-center justify-center">
            <AiOutlineSearch className="w-5 h-5 text-dark" />
          </div>
          <input type="search" className="w-full" placeholder="Search events" />
        </div>
      </div>

      {/* center */}
      <div className="hidden lg:inline-flex space-x-10">
        <NavLink href="/">Explore events</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/industry">Industry</NavLink>
      </div>

      {/* right */}
      <div className="inline-flex space-x-3 lg:space-x-5">
        <Button href="#">Create events</Button>
        <Button href={AUTH_LOGIN} className="bg-dark text-gray-50 ">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
