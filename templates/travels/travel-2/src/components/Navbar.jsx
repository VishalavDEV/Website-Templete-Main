import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Compass, Search, Heart, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ favoriteCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/destinations?search=${encodeURIComponent(searchText)}`);
      setShowSearch(false);
      setSearchText('');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Discover', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Trips', path: '/planner' },
    { name: 'Travel Stories', path: '/stories' },
    { name: 'About', path: '/about' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-[9999] px-6 py-4 transition-all duration-300 ${
          scrolled 
            ? 'glass-panel mx-4 mt-4 rounded-2xl py-3 border border-white/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Animated Logo */}
          <Link to="/" className="flex items-center gap-2 group text-stone-800 font-extrabold text-2xl tracking-tight decoration-0">
            <Compass className="text-[#ff2a74] group-hover:rotate-90 transition-transform duration-500" size={26} />
            <span className="bg-gradient-to-r from-[#ff2a74] to-[#0066ff] bg-clip-text text-transparent font-heading">
              Wanderly
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link text-sm font-medium ${
                  location.pathname === link.path ? 'active' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right-side Utilities */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-stone-800/80 hover:text-[#ff2a74] transition-colors p-1.5 rounded-lg hover:bg-black/5"
            >
              <Search size={20} />
            </button>

            {/* Favorite Indicator */}
            <Link
              to="/destinations?favorites=true"
              className="relative text-stone-800/80 hover:text-[#ff2a74] transition-colors p-1.5 rounded-lg hover:bg-black/5"
            >
              <Heart size={20} />
              {favoriteCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#ff2a74] to-[#0066ff] text-[9px] font-bold text-white w-4.5 h-4.5 rounded-full flex items-center justify-center border border-white shadow-lg">
                  {favoriteCount}
                </span>
              )}
            </Link>

            {/* Profile Avatar */}
            <button
              onClick={() => navigate('/about')}
              className="text-stone-800/80 hover:text-[#ff2a74] transition-colors p-1.5 rounded-lg hover:bg-black/5 hidden sm:block"
            >
              <User size={20} />
            </button>

            {/* Explore Button */}
            <button
              onClick={() => navigate('/planner')}
              className="hidden sm:inline-flex py-2 px-5 bg-gradient-to-r from-[#ff2a74] to-[#0066ff] hover:opacity-90 text-white text-xs font-bold rounded-xl shadow-md transition-all hover:scale-103 cursor-pointer"
            >
              Explore
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-800 hover:text-[#ff2a74] transition-colors lg:hidden p-1.5"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Global Search Bar Overlay */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mt-3"
            >
              <form onSubmit={handleSearchSubmit} className="flex gap-2 p-1 w-full max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search destinations, experiences, stories..."
                  className="w-full glass-input text-sm py-2.5 px-4"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  autoFocus
                />
                <button type="submit" className="bg-gradient-to-r from-[#ff2a74] to-[#0066ff] hover:opacity-95 text-white text-xs font-semibold px-5 rounded-xl cursor-pointer">
                  Search
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 bg-white z-[9998] pt-24 px-6 flex flex-col gap-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xl font-heading font-bold text-stone-800 hover:text-[#ff2a74] transition-colors border-b border-stone-100 pb-3"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                navigate('/planner');
                setIsOpen(false);
              }}
              className="w-full py-3.5 bg-gradient-to-r from-[#ff2a74] to-[#0066ff] text-white text-sm font-bold rounded-xl shadow-lg mt-4 cursor-pointer text-center"
            >
              Explore
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
