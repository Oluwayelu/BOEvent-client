import PropTypes from 'prop-types';

import { Footer, Navbar } from 'components/modules';

const Landing = ({ children }) => {
  return (
    <div className="relative">
      {/* navbar */}
      <Navbar />
      {/* content */}
      <div className="min-h-[90vh]">{children}</div>
      {/* footer */}
      <Footer />
    </div>
  );
};

Landing.propTypes = {
  children: PropTypes.node,
};

export default Landing;
