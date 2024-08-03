import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Select = forwardRef(({ size = 'md', register, label, options, error, ...rest }, ref) => {
  const getSize = () => {
    switch (size) {
      case 'sm':
        return 'h-10';
      case 'md':
        return 'h-12';
      case 'lg':
        return 'h-16';

      default:
        return 'px-4 h-12 text-base';
    }
  };

  return (
    <div className="w-full flex flex-col space-y-1">
      {label && <label className="font-bold md:text-xl">{label}</label>}
      <div
        className={`${getSize()} w-full px-3 border-2 border-dark bg-white placeholder-dark/50 rounded-lg overflow-hidden`}
      >
        {/* <input ref={ref} {...rest} className="w-full h-full" /> */}
        <select ref={ref} {...rest} defaultValue="" className="w-full h-full">
          <option value="" disabled hidden>
            {rest.placeholder}
          </option>
          {options.map((option, key) => (
            <option key={key} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <span className="text-sm text-error">{error?.message}</span>
    </div>
  );
});

Select.propTypes = {
  size: PropTypes.string,
  label: PropTypes.string,
  register: PropTypes.func,
  error: PropTypes.object,
  options: PropTypes.array.isRequired,
};

Select.displayName = 'Select';
export default Select;
