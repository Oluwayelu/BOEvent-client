import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { FaAngleRight } from 'react-icons/fa';

const SidebarLink = ({ to, title, value }) => {
  return (
    <NavLink to={to} end>
      {({ isActive }) => (
        <div
          className={`${
            isActive && 'bg-primary'
          } w-full p-3 flex justify-between items-center border-2 border-dark hover:bg-primary rounded-lg cursor-pointer`}
        >
          <div>
            <p className="text-sm">{title}</p>
            <p className="text-xl font-bold">{value}</p>
          </div>

          <div>
            <FaAngleRight className="w-5 h-5 text-dark" />
          </div>
        </div>
      )}
    </NavLink>
  );
};

SidebarLink.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
};

export default SidebarLink;
