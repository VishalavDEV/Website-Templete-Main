import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Shield,
  Briefcase,
  Plane,
  Sparkles,
  Layers,
  Globe,
  Lock,
  PhoneCall
} from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    {
      name: 'Solutions',
      path: '/corporate-travel',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Corporate Travel Management', desc: 'Unified travel policy & global expense control', path: '/corporate-travel', icon: Briefcase },
        { title: 'Executive & C-Suite Mobility', desc: 'Discreet VIP charters & tarmac fast-track', path: '/executive-travel', icon: Shield },
        { title: 'MICE & Corporate Events', desc: 'Mega-conferences, retreats & venue sourcing', path: '/mice', icon: Layers },
        { title: 'Group & Incentive Journeys', desc: 'Transformative international team rewards', path: '/experiences', icon: Sparkles }
      ]
    },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Insights', path: '/insights' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#FBF9F6]/90 backdrop-blur-md shadow-xs border-b border-[#1A1A1A]/5'
            : 'py-4.5 bg-[#FBF9F6]/75 backdrop-blur-md border-b border-[#1A1A1A]/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <Link
              to="/"
              id="brand-logo"
              className="flex items-center gap-3 group select-none flex-shrink-0"
            >
              <div className="w-9 h-9 rounded-full bg-[#0D4433] flex items-center justify-center text-white transition-transform group-hover:scale-105 shadow-sm">
                <Compass className="w-5 h-5 transition-transform group-hover:rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-normal tracking-tight text-[#1A1A1A] leading-none">
                  AURELIA
                </span>
                <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-[#0D4433] mt-0.5">
                  Journeys
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setSolutionsDropdownOpen(true)}
                      onMouseLeave={() => setSolutionsDropdownOpen(false)}
                    >
                      <button
                        id="nav-dropdown-solutions"
                        className={`whitespace-nowrap px-3.5 py-2 text-[12px] uppercase font-semibold tracking-[0.14em] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                          isActive(link.path) || solutionsDropdownOpen
                            ? 'text-[#0D4433] font-bold'
                            : 'text-[#1A1A1A]/80 hover:text-[#0D4433] hover:bg-black/[0.02]'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 flex-shrink-0 ${
                            solutionsDropdownOpen ? 'rotate-180 text-[#0D4433]' : 'text-[#919E99]'
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {solutionsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 top-full pt-2 w-84 z-50"
                          >
                            <div className="p-3 bg-white/95 rounded-2xl shadow-xl border border-black/5 backdrop-blur-md">
                              <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#65726D] px-3 py-1 mb-1">
                                Enterprise Capabilities
                              </div>
                              {link.dropdownItems?.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                  <Link
                                    key={item.title}
                                    to={item.path}
                                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FBF9F6] transition-colors group"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-[#0D4433]/10 text-[#0D4433] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0D4433] group-hover:text-white transition-colors mt-0.5">
                                      <IconComponent className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <div className="text-xs font-semibold text-[#1A1A1A] group-hover:text-[#0D4433] transition-colors">
                                        {item.title}
                                      </div>
                                      <div className="text-[11px] text-[#65726D] leading-relaxed mt-0.5">
                                        {item.desc}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                const active = isActive(link.path);

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`whitespace-nowrap px-3.5 py-2 text-[12px] uppercase font-semibold tracking-[0.14em] rounded-lg transition-all relative ${
                      active
                        ? 'text-[#0D4433] font-bold after:content-[\'\'] after:absolute after:bottom-0.5 after:left-3.5 after:right-3.5 after:h-[2px] after:bg-[#0D4433] after:rounded-full'
                        : 'text-[#1A1A1A]/80 hover:text-[#0D4433] hover:bg-black/[0.02]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
              <Link
                to="/login"
                id="nav-client-login"
                className="whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A]/85 hover:text-[#0D4433] flex items-center gap-1.5 py-2 px-3 rounded-lg hover:bg-black/[0.02] transition-colors"
              >
                <Lock className="w-3.5 h-3.5 text-[#0D4433] flex-shrink-0" />
                <span>Client Login</span>
              </Link>

              <button
                id="nav-talk-to-expert-btn"
                onClick={onOpenConsultation}
                className="whitespace-nowrap inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0D4433] text-white text-[11px] font-bold uppercase tracking-[0.16em] hover:bg-[#083024] active:scale-[0.98] transition-all shadow-xs hover:shadow-md cursor-pointer border border-[#0D4433] flex-shrink-0"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-3 lg:hidden flex-shrink-0">
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-white/80 border border-black/5 text-[#1A1A1A] hover:bg-white transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Animated Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[70px] z-30 bg-[#FBF9F6]/95 backdrop-blur-xl border-t border-[#1A1A1A]/10 p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="space-y-3 pt-2">
              <div className="text-xs uppercase font-bold tracking-[0.25em] text-[#919E99] px-2">
                Navigation
              </div>
              <div className="space-y-1">
                <Link
                  to="/"
                  className={`block px-3 py-2.5 text-sm uppercase font-bold tracking-wider rounded-lg ${
                    location.pathname === '/' ? 'bg-[#0D4433]/10 text-[#0D4433]' : 'text-[#1A1A1A]'
                  }`}
                >
                  Home Overview
                </Link>
                <Link
                  to="/corporate-travel"
                  className="block px-3 py-2.5 text-sm uppercase font-bold tracking-wider text-[#1A1A1A] hover:bg-white/60 rounded-lg"
                >
                  Corporate Travel Management
                </Link>
                <Link
                  to="/executive-travel"
                  className="block px-3 py-2.5 text-sm uppercase font-bold tracking-wider text-[#1A1A1A] hover:bg-white/60 rounded-lg"
                >
                  Executive & C-Suite Mobility
                </Link>
                <Link
                  to="/mice"
                  className="block px-3 py-2.5 text-sm uppercase font-bold tracking-wider text-[#1A1A1A] hover:bg-white/60 rounded-lg"
                >
                  MICE & Corporate Events
                </Link>
                <Link
                  to="/destinations"
                  className="block px-3 py-2.5 text-sm uppercase font-bold tracking-wider text-[#1A1A1A] hover:bg-white/60 rounded-lg"
                >
                  Global Destinations
                </Link>
                <Link
                  to="/experiences"
                  className="block px-3 py-2.5 text-sm uppercase font-bold tracking-wider text-[#1A1A1A] hover:bg-white/60 rounded-lg"
                >
                  Curated Experiences & Retreats
                </Link>
                <Link
                  to="/case-studies"
                  className="block px-3 py-2.5 text-sm uppercase font-bold tracking-wider text-[#1A1A1A] hover:bg-white/60 rounded-lg"
                >
                  Case Studies & ROI
                </Link>
                <Link
                  to="/insights"
                  className="block px-3 py-2.5 text-sm uppercase font-bold tracking-wider text-[#1A1A1A] hover:bg-white/60 rounded-lg"
                >
                  Intelligence & Insights
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2.5 text-sm uppercase font-bold tracking-wider text-[#1A1A1A] hover:bg-white/60 rounded-lg"
                >
                  About Aurelia Journeys
                </Link>
                <Link
                  to="/careers"
                  className="block px-3 py-2.5 text-sm uppercase font-bold tracking-wider text-[#1A1A1A] hover:bg-white/60 rounded-lg"
                >
                  Careers
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1A1A1A]/10 space-y-3 pb-8">
              <button
                id="mobile-talk-to-expert-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0D4433] text-white text-xs font-bold uppercase tracking-[0.2em] shadow-md active:scale-98"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Talk to an Expert</span>
              </button>

              <Link
                to="/login"
                id="mobile-client-login"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-[#1A1A1A]/10 text-xs font-bold uppercase tracking-wider text-[#1A1A1A]"
              >
                <Lock className="w-4 h-4 text-[#0D4433]" />
                <span>Client & Executive Portal Login</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
