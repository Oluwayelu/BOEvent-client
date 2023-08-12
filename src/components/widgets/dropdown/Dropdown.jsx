import { useMemo, cloneElement, Children } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ children, button }) => {
  const dropdownElements = useMemo(() => {
    const childrenArray = Children.toArray(children);
    const className = 'px-1 py-2 border-b last:border-b-0 whitespace-nowrap';

    return childrenArray.map((child) => {
      return cloneElement(child, {
        ...child.props,
        className: child.props.className + ' ' + className,
      });
    });
  }, [children]);

  return (
    <div className="group relative">
      {button}
      <div className="hidden absolute right-0 group-hover:block transition-transform duration-1000 z-20">
        <div className="px-3 bg-white rounded-xl shadow overflow-hidden">{dropdownElements}</div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node,
  button: PropTypes.node,
};

export default Dropdown;
