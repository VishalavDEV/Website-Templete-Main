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
    <header
      className={`fixed top-0 left-0 right-0 z-[8000] transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090909]/95 text-[#f8f7f4] backdrop-blur-md py-4 border-b-2 border-[#D1FF00] shadow-2xl'
          : 'bg-transparent py-6'
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

        {/* RIGHT: Primary Action Button */}
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

        {/* MOBILE Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-none transition-colors cursor-pointer z-[8010] ${
            isScrolled || mobileMenuOpen ? 'text-[#D1FF00] hover:bg-white/10' : 'text-[#090909] hover:bg-black/5'
          }`}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE Fullscreen Accordion Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[8005] bg-[#090909] text-[#f8f7f4] flex flex-col justify-between p-6 pt-24 overflow-y-auto lg:hidden animate-in fade-in duration-300">
          <div className="space-y-6">
            <div className="font-mono text-xs text-[#D1FF00] uppercase tracking-[0.3em] font-black border-b border-white/10 pb-2">
              SYSTEM NAVIGATION //
            </div>

            <div className="space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-white/10 pb-3">
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-3xl font-serif font-black uppercase text-white hover:text-[#D1FF00] transition-colors tracking-tighter"
                    >
                      {link.name}
                    </Link>

                    {link.hasDropdown && (
                      <button
                        onClick={() =>
                          setExpandedMobileCategory(
                            expandedMobileCategory === link.dropdownType ? null : link.dropdownType
                          )
                        }
                        className="p-2 text-[#D1FF00] cursor-pointer"
                        aria-label={`Expand ${link.name}`}
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            expandedMobileCategory === link.dropdownType ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Expanded Nested Accordion Mobile Submenu */}
                  {link.hasDropdown && expandedMobileCategory === link.dropdownType && (
                    <div className="mt-3 pl-4 space-y-2 border-l-2 border-[#D1FF00]">
                      {link.dropdownType === 'services' &&
                        servicesItems.map((s) => (
                          <Link
                            key={s.name}
                            to={s.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-[#D1FF00]"
                          >
                            {s.name}
                          </Link>
                        ))}

                      {link.dropdownType === 'work' &&
                        workItems.map((w) => (
                          <Link
                            key={w.name}
                            to={w.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-[#D1FF00]"
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
                            className="block py-1.5 text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-[#D1FF00]"
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
                            className="block py-1.5 text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-[#D1FF00]"
                          >
                            {i.name}
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/contact');
              }}
              className="w-full py-4 bg-[#D1FF00] text-[#090909] font-mono text-sm uppercase tracking-widest font-black rounded-none border-2 border-[#090909] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex justify-between text-[10px] font-mono text-gray-400 uppercase tracking-widest">
              <span>NEW YORK // LONDON</span>
              <span>EST. 2026</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
