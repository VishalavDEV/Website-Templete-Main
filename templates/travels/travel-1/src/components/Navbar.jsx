import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, User, Compass, X, Moon, Sun, ShoppingBag } from 'lucide-react';

export default function Navbar({ wishlistCount = 0 }) {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // Handle scroll to toggle floating nav height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSearch(false);
      navigate(`/destinations?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed left-0 right-0 z-40 transition-all duration-500 px-6 py-4 ${
          isScrolled 
            ? 'top-2 max-w-6xl mx-auto rounded-full glass-nav shadow-lg py-2' 
            : 'top-0 w-full bg-transparent border-b border-transparent py-4'
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              animate={isScrolled ? { scale: 0.9 } : { scale: 1.1 }}
              className="text-indigo-400"
            >
              <Compass className="w-8 h-8 group-hover:rotate-45 transition-transform duration-300" />
            </motion.div>
            <span className="font-extrabold text-xl tracking-wider bg-gradient-to-r from-indigo-400 to-teal-300 bg-clip-text text-transparent group-hover:opacity-85 transition-opacity">
              TRAVELVERSE
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-700">
            <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
            <Link to="/destinations" className="hover:text-indigo-400 transition-colors">Destinations</Link>
            <Link to="/tours" className="hover:text-indigo-400 transition-colors">Tours</Link>
            <Link to="/hotels" className="hover:text-indigo-400 transition-colors">Hotels</Link>
            <Link to="/experiences" className="hover:text-indigo-400 transition-colors">Experiences</Link>
            <Link to="/transportation" className="hover:text-indigo-400 transition-colors">Transportation</Link>
            <Link to="/about" className="hover:text-indigo-400 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center space-x-4">
            {/* Search Trigger */}
            <button 
              onClick={() => setShowSearch(true)} 
              className="text-slate-700 hover:text-indigo-600 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Link */}
            <Link to="/destinations" className="relative text-slate-700 hover:text-indigo-600 transition-colors">
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Trip Planner CTAs */}
            <Link 
              to="/planner" 
              className="hidden md:flex items-center text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 hover:from-indigo-600 hover:to-teal-500 text-white shadow-md glow-btn"
            >
              Trip Planner
            </Link>

            {/* User Profile / Login */}
            {isLoggedIn ? (
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="text-slate-700 hover:text-rose-500 text-xs font-medium flex items-center space-x-1"
              >
                <User className="w-4 h-4 text-teal-400" />
                <span>Logout</span>
              </button>
            ) : (
              <button 
                onClick={() => setShowLogin(true)} 
                className="text-slate-700 hover:text-indigo-600 transition-colors"
              >
                <User className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* SEARCH OVERLAY */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 z-50 flex items-center justify-center p-4"
          >
            <button 
              onClick={() => setShowSearch(false)} 
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>
            <form onSubmit={handleSearchSubmit} className="w-full max-w-2xl text-center">
              <h3 className="text-2xl font-bold mb-6 text-indigo-400">Search Your Next Destination</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Dubai, Switzerland, Maldives..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-indigo-500/30 rounded-full px-6 py-4 text-white text-lg focus:outline-none focus:border-indigo-500"
                  autoFocus
                />
                <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 bg-indigo-500 hover:bg-indigo-600 text-white p-2.5 rounded-full">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LOGIN MODAL */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 relative shadow-2xl"
            >
              <button 
                onClick={() => setShowLogin(false)} 
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-300 mb-2">
                Welcome Back
              </h2>
              <p className="text-slate-400 text-sm mb-6">Enter details to check bookings and travel plans</p>
              
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Username</label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Password</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 text-white font-bold hover:shadow-lg transition-shadow mt-4"
                >
                  Sign In
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
