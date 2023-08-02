import React from 'react';

const PageNotFoundView = () => {
  return (
    <div className="w-full h-[70vh] flex items-center justify-center">
      <div className="flex items-center justify-center gap-3 md:gap-5">
        <p className="text-4xl md:text-8xl font-semibold">404</p>
        <div className="w-1 md:w-3 h-20 md:h-48 bg-gradient-to-b from-primary-300  to-dark rounded-full" />
        <p className="text-4xl md:text-8xl font-semibold">
          <span className="text-primary-300">Page</span> <br /> Not found
        </p>
      </div>
    </div>
  );
};

export default PageNotFoundView;
