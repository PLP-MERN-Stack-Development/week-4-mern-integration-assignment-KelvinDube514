import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {/* Logo and Tagline */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">LuxeLane</h2>
          <p className="text-xs sm:text-sm text-gray-400">Where Fashion Meets Elegance.</p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Quick Links</h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/collections" className="hover:underline">Collections</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center sm:text-left">
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Contact</h3>
          <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
            <p>Email: support@luxelane.com</p>
            <p>Phone: +27 82 123 4567</p>
            <p>Cape Town, South Africa</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center sm:text-left">
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Follow Us</h3>
          <div className="flex justify-center sm:justify-start space-x-4 mt-2">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              <FaPinterest className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8 sm:mt-10 pt-4 border-t border-gray-800">
        © {new Date().getFullYear()} LuxeLane. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
