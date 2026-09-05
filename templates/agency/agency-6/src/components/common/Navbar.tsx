import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Compass,
  Palette,
  Globe,
  Cpu,
  Smartphone,
  TrendingUp,
  Layers,
  Sparkles,
  BookOpen,
  Briefcase
} from 'lucide-react';

interface NavbarProps {
  onCursorChange?: (text: string, variant: 'default' | 'hover' | 'menu') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCursorChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  // Close dropdowns & mobile menu on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = (name: string) => {
    setActiveDropdown(name);
    if (onCursorChange) onCursorChange('OPEN', 'hover');
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    if (onCursorChange) onCursorChange('', 'default');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      dropdownType: 'services'
    },
    {
      name: 'Work',
      path: '/work',
      hasDropdown: true,
      dropdownType: 'work'
    },
    {
      name: 'About',
      path: '/about',
      hasDropdown: true,
      dropdownType: 'about'
    },
    {
      name: 'Insights',
      path: '/insights',
      hasDropdown: true,
      dropdownType: 'insights'
    },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const servicesItems = [
    { name: 'Brand Strategy', path: '/services/strategy', icon: Compass, desc: 'Positioning & Category Creation' },
    { name: 'Brand Identity', path: '/services/branding', icon: Palette, desc: '3D Visual Identity & Direction' },
    { name: 'Digital Transformation', path: '/services/digital', icon: Globe, desc: 'High-Performance Web Platforms' },
    { name: 'AI & Automation', path: '/services/ai', icon: Cpu, desc: 'Multi-Agent Intelligence Systems' },
    { name: 'Product Engineering', path: '/services/product', icon: Smartphone, desc: 'Mobile & In-Vehicle Interfaces' },
    { name: 'Business Consulting', path: '/services/growth', icon: TrendingUp, desc: 'EBITDA Modeling & Enterprise Scale' }
  ];

  const workItems = [
    { name: 'Selected Work', path: '/work', desc: 'Featured 3D & AI Case Studies' },
    { name: 'Case Studies Archive', path: '/work?filter=All', desc: 'Complete Client Portfolio' },
    { name: 'Industries We Serve', path: '/industries', desc: 'FinTech, Tech, Luxury, Mobility, Biotech' }
  ];

  const aboutItems = [
    { name: 'Our Story & Vision', path: '/about', desc: 'The VANTA FORM Philosophy' },
    { name: 'Executive Leadership', path: '/about#leadership', desc: 'Meet Our Directors' },
    { name: 'Culture & Capabilities', path: '/about#capabilities', desc: 'Engineering & Artistry' }
  ];

  const insightsItems = [
    { name: 'Articles & Essays', path: '/insights', desc: 'Deep Dives into Design & Tech' },
    { name: 'Trends & Reports', path: '/insights', desc: 'Global Market Telemetry' },
    { name: 'Resources', path: '/insights', desc: 'Whitepapers & Design Frameworks' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[8000] transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090909]/95 text-[#f8f7f4] backdrop-blur-md py-4 border-b-2 border-[#D1FF00] shadow-2xl'
            : 'bg-[#f8f7f4]/90 backdrop-blur-sm sm:bg-transparent py-4 sm:py-6 border-b sm:border-b-0 border-[#090909]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* LEFT: Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onMouseEnter={() => onCursorChange && onCursorChange('VANTA', 'hover')}
            onMouseLeave={() => onCursorChange && onCursorChange('', 'default')}
          >
            <div className="w-5 h-5 bg-[#D1FF00] text-[#090909] font-black text-xs flex items-center justify-center border-2 border-[#090909] group-hover:bg-[#090909] group-hover:text-[#D1FF00] group-hover:border-[#D1FF00] transition-all duration-300">
              VF
            </div>
            <span className={`font-serif text-xl sm:text-2xl font-black tracking-tighter uppercase ${isScrolled ? 'text-[#f8f7f4]' : 'text-[#090909]'}`}>
              VANTA FORM
            </span>
          </Link>

          {/* CENTER: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 font-mono text-xs uppercase tracking-widest font-bold">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));

              return (
                <div
                  key={link.name}
                  className="relative py-2 px-3"
                  onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.dropdownType!)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1.5 transition-colors duration-200 hover:text-[#D1FF00] ${
                      isActive
                        ? 'text-[#D1FF00] font-black underline underline-offset-8 decoration-2 decoration-[#D1FF00]'
                        : isScrolled
                        ? 'text-[#f8f7f4]/80'
                        : 'text-[#090909]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === link.dropdownType ? 'rotate-180 text-[#D1FF00]' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu Overlay */}
                  {link.hasDropdown && activeDropdown === link.dropdownType && (
                    <div className="absolute top-full left-0 w-80 pt-2 z-50">
                      <div className="bg-[#090909] text-[#f8f7f4] border-2 border-[#D1FF00] p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="text-[10px] font-mono text-[#D1FF00] tracking-[0.25em] font-extrabold mb-3 border-b border-white/10 pb-2 flex items-center justify-between">
                          <span>EXPLORE {link.name.toUpperCase()}</span>
                          <Sparkles className="w-3 h-3 text-[#D1FF00]" />
                        </div>

                        {link.dropdownType === 'services' && (
                          <div className="space-y-1">
                            {servicesItems.map((s) => {
                              const IconComponent = s.icon;
                              return (
                                <Link
                                  key={s.name}
                                  to={s.path}
                                  className="group flex items-start gap-3 p-2.5 hover:bg-[#D1FF00] hover:text-[#090909] transition-colors border border-transparent hover:border-[#090909]"
                                >
                                  <IconComponent className="w-4 h-4 text-[#D1FF00] group-hover:text-[#090909] mt-0.5 group-hover:scale-110 transition-transform" />
                                  <div>
                                    <div className="text-xs font-black uppercase text-white group-hover:text-[#090909] transition-colors flex items-center gap-1">
                                      {s.name}
                                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="text-[10px] text-gray-400 group-hover:text-[#090909]/80 font-mono mt-0.5">{s.desc}</div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        )}

                        {link.dropdownType === 'work' && (
                          <div className="space-y-1">
                            {workItems.map((w) => (
                              <Link
                                key={w.name}
                                to={w.path}
                                className="group block p-2.5 hover:bg-[#D1FF00] hover:text-[#090909] transition-colors"
                              >
                                <div className="text-xs font-black uppercase text-white group-hover:text-[#090909] transition-colors flex items-center justify-between">
                                  {w.name}
                                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="text-[10px] text-gray-400 group-hover:text-[#090909]/80 font-mono mt-0.5">{w.desc}</div>
                              </Link>
                            ))}
                          </div>
                        )}

                        {link.dropdownType === 'about' && (
                          <div className="space-y-1">
                            {aboutItems.map((a) => (
                              <Link
                                key={a.name}
                                to={a.path}
                                className="group block p-2.5 hover:bg-[#D1FF00] hover:text-[#090909] transition-colors"
                              >
                                <div className="text-xs font-black uppercase text-white group-hover:text-[#090909] transition-colors flex items-center justify-between">
                                  {a.name}
                                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="text-[10px] text-gray-400 group-hover:text-[#090909]/80 font-mono mt-0.5">{a.desc}</div>
                              </Link>
                            ))}
                          </div>
                        )}

                        {link.dropdownType === 'insights' && (
                          <div className="space-y-1">
                            {insightsItems.map((i) => (
                              <Link
                                key={i.name}
                                to={i.path}
                                className="group block p-2.5 hover:bg-[#D1FF00] hover:text-[#090909] transition-colors"
                              >
                                <div className="text-xs font-black uppercase text-white group-hover:text-[#090909] transition-colors flex items-center justify-between">
                                  {i.name}
                                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="text-[10px] text-gray-400 group-hover:text-[#090909]/80 font-mono mt-0.5">{i.desc}</div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* RIGHT: Desktop Primary Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              onMouseEnter={() => onCursorChange && onCursorChange('GO', 'hover')}
              onMouseLeave={() => onCursorChange && onCursorChange('', 'default')}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#090909] text-[#f8f7f4] border-2 border-[#090909] text-xs font-mono uppercase tracking-widest font-black hover:bg-[#D1FF00] hover:text-[#090909] transition-all duration-300 shadow-lg group cursor-pointer"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* TABLET & MOBILE Navigation Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`flex items-center gap-2 px-3.5 py-2 font-mono text-xs uppercase tracking-wider font-extrabold transition-all duration-200 cursor-pointer z-[9500] border-2 ${
                mobileMenuOpen
                  ? 'bg-[#D1FF00] text-[#090909] border-[#090909]'
                  : isScrolled
                  ? 'bg-[#090909] text-[#D1FF00] border-[#D1FF00] hover:bg-[#D1FF00] hover:text-[#090909]'
                  : 'bg-[#090909] text-[#f8f7f4] border-[#090909] hover:bg-[#D1FF00] hover:text-[#090909]'
              }`}
              aria-label="Toggle System Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="hidden sm:inline">SYSTEM NAVIGATION //</span>
              <span className="sm:hidden font-mono">SYSTEM NAV //</span>
              {mobileMenuOpen ? (
                <X className="w-4 h-4 stroke-[3]" />
              ) : (
                <ChevronDown className="w-4 h-4 stroke-[3]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE & TABLET Fullscreen Navigation Drawer (Rendered outside header to prevent backdrop filter clipping) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[9000] w-full h-[100dvh] bg-[#090909] text-[#f8f7f4] flex flex-col justify-between p-5 sm:p-8 pt-24 pb-8 overflow-y-auto lg:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <div className="space-y-6 max-w-2xl mx-auto w-full">
            {/* Top Control Bar inside Drawer */}
            <div className="flex items-center justify-between border-b-2 border-[#D1FF00]/40 pb-3">
              <div
                onClick={() => {
                  // Toggle expand/collapse all
                  if (expandedMobileCategory) {
                    setExpandedMobileCategory(null);
                  } else {
                    setExpandedMobileCategory('services');
                  }
                }}
                className="font-mono text-xs text-[#D1FF00] uppercase tracking-[0.25em] font-black flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span className="w-2 h-2 rounded-full bg-[#D1FF00] animate-pulse" />
                <span>SYSTEM NAVIGATION //</span>
                <span className="text-[10px] text-white/50 lowercase font-mono">
                  ({expandedMobileCategory ? 'expanded' : 'tap to explore'})
                </span>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-[#D1FF00] hover:text-[#090909] text-xs font-mono font-bold uppercase transition-colors cursor-pointer border border-white/20"
                aria-label="Close Menu"
              >
                <span>CLOSE</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Navigation List with Accordion Controls */}
            <div className="space-y-3">
              {navLinks.map((link) => {
                const isExpanded = expandedMobileCategory === link.dropdownType;
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));

                return (
                  <div key={link.name} className="border-b border-white/10 pb-3">
                    {link.hasDropdown ? (
                      <div>
                        {/* Category Header Row with Full-Width Toggle */}
                        <div
                          onClick={() =>
                            setExpandedMobileCategory(isExpanded ? null : link.dropdownType!)
                          }
                          className="flex items-center justify-between py-1 cursor-pointer group"
                        >
                          <span
                            className={`text-2xl sm:text-3xl font-serif font-black uppercase tracking-tight transition-colors ${
                              isExpanded || isActive
                                ? 'text-[#D1FF00]'
                                : 'text-white group-hover:text-[#D1FF00]'
                            }`}
                          >
                            {link.name}
                          </span>

                          <div className="flex items-center gap-2 text-xs font-mono text-[#D1FF00]">
                            <span className="hidden sm:inline opacity-70">
                              {isExpanded ? 'COLLAPSE' : 'EXPLORE'}
                            </span>
                            <div className={`p-1.5 border border-[#D1FF00]/40 transition-transform duration-200 ${
                              isExpanded ? 'bg-[#D1FF00] text-[#090909] rotate-180' : 'text-[#D1FF00]'
                            }`}>
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </div>
                        </div>

                        {/* Accordion Submenu Items */}
                        {isExpanded && (
                          <div className="mt-3 pl-4 space-y-2.5 border-l-2 border-[#D1FF00] bg-white/[0.02] p-3 rounded-xs animate-in slide-in-from-top-1 duration-150">
                            <Link
                              to={link.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center justify-between py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#D1FF00] hover:underline"
                            >
                              <span>VIEW ALL {link.name.toUpperCase()} ARCHIVE</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>

                            {link.dropdownType === 'services' &&
                              servicesItems.map((s) => {
                                const IconComp = s.icon;
                                return (
                                  <Link
                                    key={s.name}
                                    to={s.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-2.5 py-1.5 text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-[#D1FF00] transition-colors"
                                  >
                                    <IconComp className="w-3.5 h-3.5 text-[#D1FF00]" />
                                    <span>{s.name}</span>
                                  </Link>
                                );
                              })}

                            {link.dropdownType === 'work' &&
                              workItems.map((w) => (
                                <Link
                                  key={w.name}
                                  to={w.path}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-1.5 text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-[#D1FF00] transition-colors"
                                >
                                  {w.name}
                                </Link>
                              ))}

                            {link.dropdownType === 'about' &&
                              aboutItems.map((a) => (
                                <Link
                                  key={a.name}
                                  to={a.path}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-1.5 text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-[#D1FF00] transition-colors"
                                >
                                  {a.name}
                                </Link>
                              ))}

                            {link.dropdownType === 'insights' &&
                              insightsItems.map((i) => (
                                <Link
                                  key={i.name}
                                  to={i.path}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-1.5 text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-[#D1FF00] transition-colors"
                                >
                                  {i.name}
                                </Link>
                              ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      /* Direct Links without Dropdown */
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-1 text-2xl sm:text-3xl font-serif font-black uppercase tracking-tight transition-colors ${
                          isActive ? 'text-[#D1FF00]' : 'text-white hover:text-[#D1FF00]'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Drawer Bottom Actions */}
          <div className="pt-6 border-t-2 border-white/10 space-y-4 max-w-2xl mx-auto w-full">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/contact');
              }}
              className="w-full py-3.5 bg-[#D1FF00] text-[#090909] font-mono text-sm uppercase tracking-widest font-black rounded-none border-2 border-[#090909] flex items-center justify-center gap-2 cursor-pointer hover:bg-white transition-colors shadow-lg"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 uppercase tracking-widest">
              <span>NEW YORK // LONDON</span>
              <span className="text-[#D1FF00]">VANTA FORM © 2026</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
