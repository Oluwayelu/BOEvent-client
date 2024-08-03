import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(
  ({ size = 'md', register, label, error, endAdorment, startAdorment, ...rest }, ref) => {
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
          className={`${getSize()} ${
            !startAdorment && !endAdorment ? 'px-3' : ''
          } w-full flex items-center border-2 border-dark bg-white placeholder-dark/50 rounded-lg overflow-hidden`}
        >
          {startAdorment && (
            <div className="w-fit h-full inline-flex bg-background items-center border-r pl-3 pr-2">
              {startAdorment}
            </div>
          )}
          <input
            ref={ref}
            {...rest}
            className={`${startAdorment && 'pl-2'} ${endAdorment && 'pr-2'} w-full h-full`}
          />
          {endAdorment && (
            <div className="w-fit h-full inline-flex items-center border-r pl-2 pr-3">
              {endAdorment}
            </div>
          )}
        </div>
        <span className="text-sm text-error">{error?.message}</span>
      </div>
    );
  }
);

Input.propTypes = {
  size: PropTypes.string,
  label: PropTypes.string,
  register: PropTypes.func,
  error: PropTypes.object,
  endAdorment: PropTypes.node,
  startAdorment: PropTypes.node,
};

Input.displayName = 'Input';
export default Input;
