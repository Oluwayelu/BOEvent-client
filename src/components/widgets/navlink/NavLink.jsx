import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const CustomNavLink = ({ to, children, activeClassName = '' }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? activeClassName
            ? activeClassName
            : 'bg-primary px-5 py-2 rounded-lg font-bold'
          : 'hover:bg-primary px-5 py-2 rounded-lg'
      }
    >
      {children}
    </NavLink>
  );
};

CustomNavLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  activeClassName: PropTypes.string,
};

export default CustomNavLink;
