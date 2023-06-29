import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import { EXPLORE_EVENTS } from 'routes/CONSTANTS';

const Footer = () => {
  return (
    <div>
      <div className="w-full px-5 md:px-10 lg:px-40 py-10 bg-primary-100 grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="col-span-2 lg:col-span-1">
          <img src="/img/logo.png" className="w-fit h-20 md:h-10 lg:h-20" />
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-bold">Product</h3>

          <div className="inline-flex flex-col">
            <a href="#">Book events</a>
            <a href="#">Create events</a>
            <a href={EXPLORE_EVENTS}>Explore events</a>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-bold">Help & Support</h3>

          <div className="inline-flex flex-col">
            <a href="#">Contact Us</a>
            <a href="#">FAQs</a>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-bold">Connect with us</h3>

          <div className="inline-flex flex-col">
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
      <div className="w-full px-5 md:px-10 lg:px-40 py-5 bg-dark text-white text-sm flex flex-wrap items-center justify-center lg:justify-between gap-3">
        {/* left */}
        <div>
          <p>&copy; 2022 - {new Date().getFullYear()}, BOEvent.</p>
        </div>

        <div className="space-x-5">
          <a href="#">about</a>
          <a href="#">contact us</a>
          <a href="#">privacy</a>
          <a href="#">terms & condition</a>
        </div>

        <div className="flex space-x-3">
          <a
            href="#"
            className="w-6 h-6 flex items-center justify-center bg-white rounded-full transform hover:scale-125 duration-300"
          >
            <FaTwitter className="w-3 h-3 text-dark" />
          </a>
          <a
            href="#"
            className="w-6 h-6 flex items-center justify-center bg-white rounded-full transform hover:scale-125 duration-300"
          >
            <FaFacebook className="w-3 h-3 text-dark" />
          </a>
          <a
            href="#"
            className="w-6 h-6 flex items-center justify-center bg-white rounded-full transform hover:scale-125 duration-300"
          >
            <FaInstagram className="w-3 h-3 text-dark" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
