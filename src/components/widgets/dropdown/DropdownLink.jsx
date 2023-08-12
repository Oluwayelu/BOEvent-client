import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const DropdownLink = ({ to, children, activeClassName = '' }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? activeClassName
            ? activeClassName
            : 'text-primary font-bold'
          : 'hover:text-primary'
      }
    >
      {children}
    </NavLink>
  );
};

DropdownLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  activeClassName: PropTypes.string,
};

export default DropdownLink;
