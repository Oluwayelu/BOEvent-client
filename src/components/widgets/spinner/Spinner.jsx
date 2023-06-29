const Spinner = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-10 h-10 flex items-center justify-center border-l-2 border-l-dark rounded-full animate-spin">
        <div className="w-8 h-8 flex items-center justify-center border-t-2 border-t-primary-300 rounded-full">
          <div className="w-6 h-6 border-r-2 border-r-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
