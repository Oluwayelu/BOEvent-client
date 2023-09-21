import PropTypes from 'prop-types';
import { AiOutlineUser } from 'react-icons/ai';

const Avatar = ({ size = 'md', src, alt }) => {
  const getSize = () => {
    switch (size) {
      case 'sm':
        return 'w-14 h-14 border-2 md:border-4';
      case 'md':
        return 'w-20 h-20 md:w-28 md:h-28 lg:w-48 lg:h-48 border-4 md:border-8';
      case 'lg':
        return 'w-28 h-28 md:w-48 md:h-48 lg:w-60 lg:h-60 border-4 md:border-8';
      default:
        break;
    }
  };

  return (
    <div
      className={`${getSize()} flex items-center justify-center bg-primary-100 border-white rounded-full overflow-hidden`}
    >
      {src ? (
        <img
          src={src}
          alt={alt ? alt : 'avatar'}
          className="w-full h-full object-center object-cover"
        />
      ) : (
        <AiOutlineUser className="w-2/3 h-2/3" />
      )}
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Avatar;
