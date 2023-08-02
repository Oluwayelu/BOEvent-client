import { useBackground } from 'hooks';
import PropTypes from 'prop-types';

import { EXPLORE_EVENTS } from 'routes/CONSTANTS';

const Auth = ({ children, title }) => {
  const image = useBackground();

  return (
    <div className="w-full h-screen relative flex justify-end">
      <img src={image} className="w-full h-full absolute inset-0 filter object-left object-cover" />
      <div className="w-full h-full bg-primary-100/80 lg:bg-primary-100/20 absolute inset-0 z" />

      <div className="hidden lg:block w-1/3 h-full"></div>
      <div className="w-full lg:w-2/3 h-full px-5 py-5 lg:px-40 lg:py-10 relative flex flex-col items-center lg:items-end">
        <img src="/img/login-blob.png" className="hidden lg:block w-full h-full absolute inset-0" />
        <a href={EXPLORE_EVENTS}>
          <img src="/img/logo.png" className="w-fit h-14 lg:h-20 mb-5 relative" />
        </a>
        <div className="relative w-full lg:w-2/3 h-full inline-flex flex-col lg:justify-center space-y-10">
          <h1 className="lg:text-right">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

Auth.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Auth;
