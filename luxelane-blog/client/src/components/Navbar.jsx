import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Searching for:', searchQuery);
  };

  const handleLogout = () => {
    logout();
    closeMobileMenu();
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/30 relative z-20">
      {/* Logo Section */}
      <div className="flex items-center">
        <h1 className="font-semibold text-white text-xl sm:text-2xl md:text-3xl tracking-wide">
          <span>Luxe</span><span className="text-pink-400 drop-shadow-lg">Lane</span>
        </h1>
      </div>
      
      {/* Navigation Section */}
      <div className="flex items-center gap-6">
        {/* Navigation Links - Desktop */}
        <ul className="hidden lg:flex items-center space-x-6 text-white/90">
          <li>
            <Link to="/" className="font-semibold uppercase tracking-wide hover:text-pink-400 hover:drop-shadow-lg transition-all duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-semibold uppercase tracking-wide hover:text-pink-400 hover:drop-shadow-lg transition-all duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/collections" className="font-semibold uppercase tracking-wide hover:text-pink-400 hover:drop-shadow-lg transition-all duration-300">
              Collections
            </Link>
          </li>
          <li>
            <Link to="/blog" className="font-semibold uppercase tracking-wide hover:text-pink-400 hover:drop-shadow-lg transition-all duration-300">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/reviews" className="font-semibold uppercase tracking-wide hover:text-pink-400 hover:drop-shadow-lg transition-all duration-300">
              Reviews
            </Link>
          </li>
          <li>
            <Link to="/social" className="font-semibold uppercase tracking-wide hover:text-pink-400 hover:drop-shadow-lg transition-all duration-300">
              Social
            </Link>
          </li>
          <li>
            <Link to="/suggestions" className="font-semibold uppercase tracking-wide hover:text-pink-400 hover:drop-shadow-lg transition-all duration-300">
              Style Tips
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-semibold uppercase tracking-wide hover:text-pink-400 hover:drop-shadow-lg transition-all duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Search Bar - Desktop */}
        <div className="hidden lg:block relative">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400/50 transition-all duration-300 w-48 text-sm"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-pink-400 transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>

        {/* Authentication - Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-3">
              <span className="text-white/90 text-sm">
                Welcome, {user?.name}
              </span>
              <Link
                to="/create"
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
              >
                Create Post
              </Link>
              <button
                onClick={handleLogout}
                className="text-white/90 hover:text-pink-400 transition-colors duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/auth"
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="lg:hidden text-white/90 hover:text-pink-400 hover:drop-shadow-lg transition-all duration-300 p-1"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="p-4">
          {/* Mobile Search Bar */}
          <div className="relative mb-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400/50 transition-all duration-300 text-sm"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-pink-400 transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
          
          <ul className="flex flex-col space-y-2 text-white/90">
            <li>
              <Link to="/" onClick={closeMobileMenu} className="font-semibold uppercase tracking-wide hover:text-pink-400 hover:drop-shadow-lg transition-all duration-300 block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu} className="font-semibold uppercase tracking-wide hover:text-pink-400 hover:drop-shadow-lg transition-all duration-300 block py-2">
                About
              </Link>
            </li>
            <li>
              <Link to="/collections" onClick={closeMobileMenu} className="font-semibold uppercase tracking-wide hover:text-pink-400 hover:drop-shadow-lg transition-all duration-300 block py-2">
                Collections
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMobileMenu} className="font-semibold uppercase tracking-wide hover:text-pink-400 hover:drop-shadow-lg transition-all duration-300 block py-2">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/reviews" onClick={closeMobileMenu} className="font-semibold uppercase tracking-wide hover:text-pink-400 hover:drop-shadow-lg transition-all duration-300 block py-2">
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/social" onClick={closeMobileMenu} className="font-semibold uppercase tracking-wide hover:text-pink-400 hover:drop-shadow-lg transition-all duration-300 block py-2">
                Social
              </Link>
            </li>
            <li>
              <Link to="/suggestions" onClick={closeMobileMenu} className="font-semibold uppercase tracking-wide hover:text-pink-400 hover:drop-shadow-lg transition-all duration-300 block py-2">
                Style Tips
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu} className="font-semibold uppercase tracking-wide hover:text-pink-400 hover:drop-shadow-lg transition-all duration-300 block py-2">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Authentication */}
          <div className="mt-6 pt-6 border-t border-white/20">
            {isAuthenticated ? (
              <div className="space-y-3">
                <p className="text-white/90 text-sm">
                  Welcome, {user?.name}
                </p>
                <Link
                  to="/create"
                  onClick={closeMobileMenu}
                  className="block w-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-3 rounded-lg font-medium text-center transition-colors duration-300"
                >
                  Create Post
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-white/90 hover:text-pink-400 transition-colors duration-300 text-center py-2"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                onClick={closeMobileMenu}
                className="block w-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-3 rounded-lg font-medium text-center transition-colors duration-300"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
