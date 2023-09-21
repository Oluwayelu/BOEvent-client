import { useEffect, useContext } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

import { ToastContext } from 'context';

const Toast = () => {
  const { type, content, remove } = useContext(ToastContext);

  useEffect(() => {
    if (content) {
      setTimeout(() => {
        remove();
      }, 4000);
    }
  }, [content]);

  const color = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'error':
        return 'bg-red-500';

      default:
        return 'bg-green-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: '-12rem', opacity: 0 }}
      className="fixed top-[10vh] right-5 md:right-20 z-50"
    >
      <AnimatePresence>
        {content && (
          <motion.div
            layout
            initial={{ opacity: 0, y: '5rem' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            exit={{ x: '-12rem', opacity: 0 }}
            className={`${color()} relative w-fit max-w-[60vw] p-3 rounded-lg shadow text-white  md:text-xls space-y-1`}
          >
            <div className="w-full flex items-center justify-between">
              <p className="font-bold capitalize">{type}</p>
              <MdOutlineCancel onClick={remove} className=" w-5 h-5 cursor-pointer" />
            </div>
            <div className="w-full h-px bg-white" />
            <div>{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Toast;
