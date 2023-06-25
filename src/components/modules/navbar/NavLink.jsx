import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ href, children }) => {
  const { pathname } = useLocation();
  const active = href === pathname;

  return (
    <div className="flex flex-col items-center justify-center group">
      <Link
        to={href}
        className={`${
          active ? 'scale-125' : ''
        } rounded-lg font-bold transition group-hover:transform group-hover:scale-125 delay-100 duration-300 ease-in-out`}
      >
        {children}
      </Link>
      <div
        className={`${
          active ? 'bg-primary' : 'bg-transparent'
        } group-hover:bg-primary w-1/2 h-1 rounded`}
      />
    </div>
  );
};

NavLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

export default NavLink;
