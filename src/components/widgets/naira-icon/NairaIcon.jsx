import PropTypes from 'prop-types';

const NairaIcon = ({ className = '' }) => {
  return <span className={`${className} font-bold`}>&#x20A6;</span>;
};

NairaIcon.propTypes = {
  className: PropTypes.string,
};

export default NairaIcon;
