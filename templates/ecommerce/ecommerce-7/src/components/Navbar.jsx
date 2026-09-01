import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, User, Search, Menu, X, LogOut, ChevronRight, Package, Grid, Compass } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cart, wishlist, cartAnimationTrigger } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Track scroll position to change background styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartItems = cart.items ? cart.items.reduce((acc, item) => acc + item.quantity, 0) : 0;
  const totalWishlistItems = wishlist.products ? wishlist.products.length : 0;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?query=${searchQuery}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Track Order', path: '/track' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 px-4 md:px-8' : 'py-5 px-4 md:px-8'
      }`}>
        <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled ? 'glass-navbar shadow-md px-6 py-2' : 'bg-transparent px-2 py-2'
        } flex items-center justify-between`}>
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 select-none group">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 15 }}
              className="bg-gradient-to-tr from-pink-400 to-rose-500 text-white p-2 rounded-xl shadow-premium"
            >
              <Package size={22} className="animate-drive-slow" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg md:text-xl leading-none text-gradient">
                Pink Delivery
              </span>
              <span className="text-[10px] text-pink-500 font-medium font-display tracking-widest uppercase">
                Universe
              </span>
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`relative font-medium text-sm transition-colors hover:text-pink-600 ${
                  location.pathname === link.path ? 'text-pink-600' : 'text-gray-600'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="activeNavIndicator" 
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-pink-500 rounded-full" 
                  />
                )}
              </Link>
            ))}

          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            
            {/* Search Toggle */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)} 
              className="p-2 text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-full transition-all"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Wishlist */}
            {(!user || user.role === 'CUSTOMER') && (
              <Link 
                to="/wishlist" 
                className="relative p-2 text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-full transition-all"
              >
                <Heart size={20} />
                {totalWishlistItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-md">
                    {totalWishlistItems}
                  </span>
                )}
              </Link>
            )}

            {/* Cart */}
            {(!user || user.role === 'CUSTOMER') && (
              <Link 
                to="/cart" 
                className="relative p-2 text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-full transition-all"
              >
                <motion.div
                  animate={cartAnimationTrigger ? { scale: [1, 1.4, 0.9, 1.1, 1], rotate: [0, -10, 10, -5, 0] } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <ShoppingCart size={20} />
                </motion.div>
                {totalCartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-md">
                    {totalCartItems}
                  </span>
                )}
              </Link>
            )}

            {/* User Account / Profile */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-1 p-2 text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-full transition-all">
                  <User size={20} />
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white/95 backdrop-blur-md border border-pink-100 rounded-2xl shadow-xl p-2 hidden group-hover:block transition-all">
                  <div className="px-4 py-2 border-b border-gray-100 mb-1">
                    <p className="text-xs font-semibold text-gray-400">Signed in as</p>
                    <p className="text-sm font-bold text-gray-800 truncate">{user.name}</p>
                  </div>

                  {user.role === 'CUSTOMER' && (
                    <Link to="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-xl transition-all">
                      <User size={16} /> Profile
                    </Link>
                  )}
                  <button 
                    onClick={logout} 
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 rounded-xl text-left transition-all"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link 
                to="/auth" 
                className="flex items-center justify-center bg-gradient-to-r from-pink-400 to-rose-500 text-white font-medium text-xs md:text-sm px-4 py-2 rounded-xl hover:shadow-premium hover:opacity-95 transition-all"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 md:hidden text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-full transition-all"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>
      </nav>

      {/* Expandable Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-pink-100 py-6 px-4 shadow-lg"
          >
            <div className="max-w-3xl mx-auto flex items-center gap-2">
              <form onSubmit={handleSearchSubmit} className="flex-grow flex items-center bg-pink-50 rounded-2xl border border-pink-100 overflow-hidden pr-3">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for clothes, makeup, mugs, keycaps..." 
                  className="w-full bg-transparent px-5 py-3 outline-none text-gray-800 text-sm"
                  autoFocus
                />
                <button type="submit" className="text-pink-500 hover:text-pink-600">
                  <Search size={18} />
                </button>
              </form>
              <button 
                onClick={() => setSearchOpen(false)}
                className="p-2 text-gray-500 hover:text-pink-500 rounded-xl hover:bg-pink-50"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black"
            />
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white/95 backdrop-blur-md shadow-2xl p-6 flex flex-col gap-6"
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <span className="font-display font-bold text-gray-800">Menu Navigation</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-500 hover:bg-pink-50 hover:text-pink-500 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-4 flex-grow">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between font-medium text-gray-700 hover:text-pink-600 p-2 rounded-xl hover:bg-pink-50/50 transition-all"
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={16} />
                  </Link>
                ))}

                {user && user.role === 'CUSTOMER' && (
                  <Link 
                    to="/profile" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between font-medium text-gray-700 p-2 rounded-xl hover:bg-pink-50 transition-all"
                  >
                    <span>Profile settings</span>
                    <ChevronRight size={16} />
                  </Link>
                )}
              </div>

              {user ? (
                <button 
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="w-full bg-red-50 text-red-500 font-semibold py-3 rounded-xl hover:bg-red-100 flex items-center justify-center gap-2 transition-all"
                >
                  <LogOut size={18} /> Logout
                </button>
              ) : (
                <Link 
                  to="/auth" 
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-gradient-to-r from-pink-400 to-rose-500 text-white font-semibold py-3 rounded-xl shadow-premium text-center block transition-all"
                >
                  Login / Sign Up
                </Link>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
