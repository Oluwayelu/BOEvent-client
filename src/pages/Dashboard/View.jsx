import { Sidebar } from './sidebar';

const View = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* sidebar */}
      <Sidebar />

      {/* body content */}
      <div className="w-full md:w-3/4"></div>
    </div>
  );
};

export default View;
