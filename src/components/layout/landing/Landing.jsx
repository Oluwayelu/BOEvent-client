import PropTypes from 'prop-types';

import { Footer, Navbar } from 'components/modules';

const Landing = ({ children, footer = true }) => {
  return (
    <div className="relative">
      {/* navbar */}
      <Navbar />
      {/* content */}
      <div className="relative min-h-[90vh]">{children}</div>
      {/* footer */}
      {footer && <Footer />}
    </div>
  );
};

Landing.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.bool,
};

export default Landing;
