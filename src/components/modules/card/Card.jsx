import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children }) => {
  return <div className="w-full p-5 lg:p-7 rounded-lg bg-white shadow space-y-3">{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
