import React from 'react';
import { Spinner } from 'components/widgets';

const Loader = (props) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-primary-100/50">
      <div className="w-full inline-flex flex-col items-center justify-center gap-5">
        <img src="/img/logo.png" className="w-fit h-20 md:h-10 lg:h-20" />
        <Spinner />
      </div>
    </div>
  );
};

export default Loader;
