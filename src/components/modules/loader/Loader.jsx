import React from 'react';
import { Spinner } from 'components/widgets';

const Loader = (props) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-primary-100/50">
      <Spinner />
    </div>
  );
};

export default Loader;
