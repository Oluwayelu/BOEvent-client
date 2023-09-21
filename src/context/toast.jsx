import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

import { Toast } from 'components/modules';

const defaultState = {
  toast: (type, content) => {},
};

export const ToastContext = createContext(defaultState);

export const ToastProvider = ({ children }) => {
  const [type, setType] = useState('success');
  const [content, setContent] = useState('');

  const toast = (type = 'success', content) => {
    setType(type);
    setContent(content);
  };

  const remove = () => {
    setType('');
    setContent('');
  };

  return (
    <ToastContext.Provider value={{ toast, type, content, remove }}>
      <Toast />
      {children}
    </ToastContext.Provider>
  );
};

ToastProvider.propTypes = {
  children: PropTypes.node,
};
