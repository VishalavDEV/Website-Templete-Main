import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';
import { siteSettings } from '../../data/siteData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  const morePages = [
    { name: "Department Details", path: "/departments/cardiology" },
    { name: "Service Details", path: "/services/emergency-care" },
    { name: "Appointment", path: "/appointment" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Frequently Asked Questions", path: "/faq" },
    { name: "Gallery", path: "/gallery" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-2 sm:top-4 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-all duration-300">
      <div className={`floating-nav rounded-2xl sm:rounded-3xl border border-white/80 transition-all duration-300 px-4 sm:px-6 ${isScrolled ? 'py-2.5 shadow-xl shadow-slate-300/40 bg-white/95' : 'py-3 sm:py-3.5 shadow-lg shadow-slate-200/50 bg-white/90'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md shadow-blue-600/30 group-hover:scale-105 group-hover:bg-blue-700 transition-all">
              V
            </div>
            <div>
              <span className="text-xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">{siteSettings.name}</span>
              <span className="block text-[10px] font-bold text-blue-600 uppercase tracking-widest -mt-1">Hospital</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/60">
            <Link 
              to="/" 
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${isActive('/') ? 'text-blue-600 bg-white shadow-xs' : 'text-slate-700 hover:text-blue-600 hover:bg-white/60'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${isActive('/about') ? 'text-blue-600 bg-white shadow-xs' : 'text-slate-700 hover:text-blue-600 hover:bg-white/60'}`}
            >
              About
            </Link>
            <Link 
              to="/departments" 
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${isActive('/departments') ? 'text-blue-600 bg-white shadow-xs' : 'text-slate-700 hover:text-blue-600 hover:bg-white/60'}`}
            >
              Departments
            </Link>
            <Link 
              to="/services" 
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${isActive('/services') ? 'text-blue-600 bg-white shadow-xs' : 'text-slate-700 hover:text-blue-600 hover:bg-white/60'}`}
            >
              Services
            </Link>
            <Link 
              to="/doctors" 
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${isActive('/doctors') ? 'text-blue-600 bg-white shadow-xs' : 'text-slate-700 hover:text-blue-600 hover:bg-white/60'}`}
            >
              Doctors
            </Link>

            {/* More Pages Dropdown */}
            <div className="relative" onMouseLeave={() => setIsDropdownOpen(false)}>
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${isDropdownOpen ? 'text-blue-600 bg-white shadow-xs' : 'text-slate-700 hover:text-blue-600 hover:bg-white/60'}`}
              >
                <span>More Pages</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/80 p-2 py-3 mt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {morePages.map((page, index) => (
                    <Link
                      key={index}
                      to={page.path}
                      className="block px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${isActive('/contact') ? 'text-blue-600 bg-white shadow-xs' : 'text-slate-700 hover:text-blue-600 hover:bg-white/60'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              to="/appointment"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-md shadow-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/40 hover:scale-105 active:scale-95 text-xs sm:text-sm"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-200/80 animate-in fade-in slide-in-from-top-2 duration-300 max-h-[75vh] overflow-y-auto">
            <nav className="flex flex-col gap-1.5">
              <Link 
                to="/" 
                className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-slate-800 hover:bg-slate-100'}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${isActive('/about') ? 'bg-blue-50 text-blue-600' : 'text-slate-800 hover:bg-slate-100'}`}
              >
                About
              </Link>
              <Link 
                to="/departments" 
                className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${isActive('/departments') ? 'bg-blue-50 text-blue-600' : 'text-slate-800 hover:bg-slate-100'}`}
              >
                Departments
              </Link>
              <Link 
                to="/services" 
                className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${isActive('/services') ? 'bg-blue-50 text-blue-600' : 'text-slate-800 hover:bg-slate-100'}`}
              >
                Services
              </Link>
              <Link 
                to="/doctors" 
                className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${isActive('/doctors') ? 'bg-blue-50 text-blue-600' : 'text-slate-800 hover:bg-slate-100'}`}
              >
                Doctors
              </Link>

              {/* Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="w-full px-4 py-2.5 rounded-xl font-bold text-sm text-slate-800 hover:bg-slate-100 transition-colors flex justify-between items-center"
                >
                  <span>More Pages</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180 text-blue-600' : ''}`} />
                </button>
                {isMobileDropdownOpen && (
                  <div className="pl-4 py-2 flex flex-col gap-1 border-l-2 border-blue-500 ml-4 mt-1">
                    {morePages.map((page, index) => (
                      <Link
                        key={index}
                        to={page.path}
                        className="px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/contact" 
                className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${isActive('/contact') ? 'bg-blue-50 text-blue-600' : 'text-slate-800 hover:bg-slate-100'}`}
              >
                Contact
              </Link>

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
                <Link
                  to="/appointment"
                  className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md transition-colors text-sm"
                >
                  Book Appointment
                </Link>
                <a
                  href={`tel:${siteSettings.emergencyPhone}`}
                  className="w-full text-center flex items-center justify-center gap-2 bg-red-50 text-red-600 border border-red-200 font-bold py-3 rounded-xl transition-colors text-sm"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Emergency: {siteSettings.emergencyPhone}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
