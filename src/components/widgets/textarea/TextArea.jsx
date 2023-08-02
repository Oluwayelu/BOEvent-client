import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TextArea = forwardRef(({ rows = 6, register, label, error, ...rest }, ref) => {
  return (
    <div className="w-full flex flex-col space-y-1">
      {label && <label className="font-bold md:text-xl">{label}</label>}
      <div className="w-full px-3 py-1 border-2 border-dark bg-white placeholder-dark/50 rounded-lg overflow-hidden">
        <textarea rows={rows} ref={ref} {...rest} className="w-full h-full" />
      </div>
      <span className="text-sm text-error">{error?.message}</span>
    </div>
  );
});

TextArea.propTypes = {
  rows: PropTypes.number,
  label: PropTypes.string,
  register: PropTypes.func,
  error: PropTypes.object,
};

TextArea.displayName = 'TextArea';
export default TextArea;
