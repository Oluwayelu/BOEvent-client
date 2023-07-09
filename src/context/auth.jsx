import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';

const defaultState = {
  token: '',
  isAuth: false,
  setToken: () => {},
  getToken: () => {},
  removeToken: () => {},
};

export const AuthContext = createContext(defaultState);

const AuthProvider = ({ children }) => {
  const [token, sToken] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      sToken(savedToken);
      setIsAuth(true);
    }
  }, []);

  const setToken = (value) => {
    sToken(value);
    setIsAuth(true);
    localStorage.setItem('token', value);
  };

  const getToken = () => {
    if (token === null) {
      const savedToken = localStorage.getItem('token');
      sToken(savedToken);
    }
    return token;
  };

  const removeToken = () => {
    sToken(null);
    setIsAuth(false);
    localStorage.removeItem('token');
  };

  const authContextValue = { token, isAuth, setToken, getToken, removeToken };
  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
