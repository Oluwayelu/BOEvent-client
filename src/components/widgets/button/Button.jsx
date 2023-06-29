import PropTypes from 'prop-types';

const Button = ({ variant = 'filled', size = 'md', href, className, children, ...rest }) => {
  const getSize = () => {
    switch (size) {
      case 'sm':
        return 'px-2 h-10 text-sm';
      case 'md':
        return 'px-4 h-12 text-base';
      case 'lg':
        return 'px-6 h-16 text-2xl';

      default:
        return 'px-4 h-12 text-base';
    }
  };

  const Button = () => {
    return (
      <button {...rest} className={`${className} ${getSize()} rounded-lg font-bold`}>
        {children}
      </button>
    );
  };

  if (href !== undefined) {
    return (
      <a href={href}>
        <Button />
      </a>
    );
  } else {
    return <Button />;
  }
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['outline', 'filled']),
};

export default Button;
