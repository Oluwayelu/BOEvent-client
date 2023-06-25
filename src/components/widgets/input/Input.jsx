import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(({ size = 'md', register, label, error, ...rest }, ref) => {
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
        <input ref={ref} {...rest} className="w-full h-full" />
      </div>
      <span className="text-sm text-error">{error?.message}</span>
    </div>
  );
});

Input.propTypes = {
  size: PropTypes.string,
  label: PropTypes.string,
  register: PropTypes.func,
  error: PropTypes.object,
};

Input.displayName = 'Input';
export default Input;
