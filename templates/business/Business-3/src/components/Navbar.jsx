import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, LayoutDashboard, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const activeLinkStyle = "text-primaryAccent font-semibold relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primaryAccent after:rounded-full";
  const inactiveLinkStyle = "text-secondaryText hover:text-primaryText transition-colors font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primaryAccent after:rounded-full hover:after:w-full after:transition-all after:duration-300";

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled || isOpen
        ? 'bg-[#180A2B]/95 backdrop-blur-xl py-3.5 shadow-xl border-b border-[#3B2163]' 
        : 'bg-[#180A2B]/90 md:bg-[#180A2B]/85 backdrop-blur-xl py-4.5 border-b border-[#3B2163]/50 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-200">
            A
          </div>
          <span className="font-extrabold text-xl tracking-tight text-primaryText">
            Nexus<span className="text-primaryAccent">Biz</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={location.pathname === link.path ? activeLinkStyle : inactiveLinkStyle}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link 
                to="/admin" 
                className="flex items-center gap-1.5 text-sm text-secondaryText hover:text-primaryText font-medium transition-colors"
              >
                <LayoutDashboard size={16} />
                Dashboard
              </Link>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-sm text-red-400 hover:text-red-500 font-medium transition-colors cursor-pointer"
              >
                <LogOut size={16} />
                Logout
              </button>
            </>
          ) : (
            <Link 
              to="/contact" 
              className="gradient-bg text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-95 shadow-lg shadow-purple-500/20 flex items-center gap-1.5 group transition-all duration-200"
            >
              Get Started
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-primaryText hover:bg-[#2E1A47] rounded-lg transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Backdrop & Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-[60px] bg-[#0D0517]/75 backdrop-blur-xs -z-10 md:hidden"
            />
            
            {/* Solid Opaque Dropdown Panel */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#180A2B] border-b border-[#3B2163] absolute top-full left-0 w-full overflow-hidden shadow-2xl z-50"
            >
              <div className="px-6 py-5 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-base py-2.5 px-3 rounded-xl transition-colors ${
                      location.pathname === link.path 
                        ? 'text-white bg-[#2E1A47] font-bold border border-[#7C3AED]/40' 
                        : 'text-secondaryText hover:text-white hover:bg-[#2E1A47]/60 font-medium'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="border-[#3B2163] my-2" />
                {isLoggedIn ? (
                  <div className="flex flex-col gap-2 pt-1">
                    <Link 
                      to="/admin" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 text-primaryText font-semibold py-2 px-3 rounded-xl hover:bg-[#2E1A47]"
                    >
                      <LayoutDashboard size={18} />
                      Admin Dashboard
                    </Link>
                    <button 
                      onClick={() => {
                        setIsOpen(false);
                        handleLogout();
                      }}
                      className="flex items-center gap-2 text-red-400 font-semibold py-2 px-3 rounded-xl hover:bg-red-950/30 text-left cursor-pointer"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="pt-2">
                    <Link 
                      to="/contact" 
                      onClick={() => setIsOpen(false)}
                      className="gradient-bg text-white py-3 rounded-xl font-semibold text-center shadow-lg shadow-purple-500/20 block hover:opacity-95"
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
