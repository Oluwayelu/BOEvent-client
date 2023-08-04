import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

const Notification = ({ content, title = true, type = 'success' }) => {
  const [value, setValue] = useState(content);

  const remove = () => {
    setValue('');
  };

  useEffect(() => {
    setValue(content);

    if (content) {
      setTimeout(() => {
        remove();
      }, 5000);
    }
  }, [content]);

  const color = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'error':
        return 'bg-error';

      default:
        return 'bg-green-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: '-12rem', opacity: 0 }}
      className="fixed top-[12vh] right-5 md:right-20 z-50"
    >
      <AnimatePresence>
        {value && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            exit={{ x: '-12rem', opacity: 0 }}
            className={`${color()} relative w-fit max-w-[60vw] p-3 rounded-lg shadow text-white text-xl space-y-1`}
          >
            <div className="w-full flex items-center justify-between">
              <p className="font-bold capitalize">{title && type}</p>
              <MdOutlineCancel onClick={remove} className=" w-5 h-5 cursor-pointer" />
            </div>
            {title && <div className="w-full h-px bg-white" />}
            <div>{value}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

Notification.propTypes = {
  title: PropTypes.bool,
  content: PropTypes.string,
  type: PropTypes.oneOf(['error', 'success', 'warning']),
};

export default Notification;
