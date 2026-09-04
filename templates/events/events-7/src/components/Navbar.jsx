import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Flame, HelpCircle, Activity, Award, Compass, ShieldAlert, Volume2, VolumeX } from 'lucide-react';
import { audioManager } from '../utils/audioManager';

// Menu items aligned in EXACT top-to-bottom page order of sections on the Home page, with Contact directly next to Gallery
const MENU_SECTIONS = [
  { id: 'hero', label: 'Home', path: '/' },
  { id: 'countdown', label: 'Countdown', path: '/' },
  { id: 'races', label: 'Races', path: '/race-info' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'stats', label: 'Stats', path: '/' },
  { id: 'route', label: 'Route', path: '/route' },
  { id: 'schedule', label: 'Schedule', path: '/schedule' },
  { id: 'participants', label: 'Stories', path: '/participants' },
  { id: 'finish', label: 'Finish', path: '/' },
  { id: 'sponsors', label: 'Sponsors', path: '/sponsors' },
  { id: 'gallery', label: 'Gallery', path: '/gallery' },
  { id: 'contact', label: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [headerBottom, setHeaderBottom] = useState(104);
  const headerRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Audio manager subscription
  useEffect(() => {
    return audioManager.subscribe(setIsPlayingAudio);
  }, []);

  // Close desktop dropdown if screen is mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setActiveDropdown(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track exact header bottom position for overlay
  useEffect(() => {
    const updatePosition = () => {
      if (headerRef.current) {
        setHeaderBottom(Math.round(headerRef.current.getBoundingClientRect().bottom));
      }
    };
    updatePosition();
    window.addEventListener('scroll', updatePosition, { passive: true });
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [mobileMenuOpen]);

  // Audio manager subscription
  useEffect(() => {
    return audioManager.subscribe(setIsPlayingAudio);
  }, []);

  // ScrollSpy listener to dynamically track active section in exact page order
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        const sections = MENU_SECTIONS.map(item => document.getElementById(item.id)).filter(Boolean);
        const scrollPosition = window.scrollY + 180;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle body scroll lock when mobile menu opens/closes
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Smooth scroll to section if on Home page, or navigate to route if on another page
  const handleNavClick = (e, item) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const targetElement = document.getElementById(item.id);
      if (targetElement) {
        e.preventDefault();
        const navHeight = 60;
        const targetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
        setActiveSection(item.id);
      } else if (item.path !== '/') {
        navigate(item.path);
      }
    }
  };

  const isLinkActive = (item) => {
    if (location.pathname === '/') {
      return activeSection === item.id;
    }
    return location.pathname === item.path;
  };

  return (
    <>
      <header 
        ref={headerRef}
        className="h-14 md:h-16 px-3 md:px-6 flex items-center justify-between w-full bg-black/90 backdrop-blur-md relative z-50 border-b border-white/[0.08]"
        style={{ boxSizing: 'border-box' }}
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo with Marathon Crest (Scaled to h-7 w-auto on mobile) */}
          <Link to="/" className="flex items-center gap-2 no-underline shrink-0">
            <div className="h-7 w-7 rounded bg-gradient-to-br from-[#E92B2B] to-[#FF6B2C] flex items-center justify-center shadow-sm shrink-0">
              <Flame size={15} color="#FFFFFF" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base md:text-lg text-white leading-none tracking-wider">
                VAYORA
              </span>
              <span className="text-[7px] md:text-[8px] font-extrabold text-[#FF6B2C] tracking-wider leading-none">
                RUNFEST 2026
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Only visible on lg+ screens: hidden lg:flex) */}
          <nav className="desktop-nav hidden lg:flex items-center gap-1">
            {MENU_SECTIONS.map(item => {
              const active = isLinkActive(item);

              return (
                <Link 
                  key={item.id}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-[0.78rem] font-semibold px-2 py-1.5 rounded transition-colors no-underline whitespace-nowrap ${
                    active ? 'text-[#FF6B2C] font-bold bg-[#FF6B2C]/10' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Extra Pages Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('more')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                type="button"
                className="bg-transparent border-none text-neutral-300 hover:text-white font-semibold text-[0.78rem] cursor-pointer flex items-center gap-1 px-2 py-1.5"
              >
                More <ChevronDown size={12} />
              </button>

              {activeDropdown === 'more' && (
                <div className="glass-panel absolute top-full right-0 w-52 p-2.5 flex flex-col gap-1 shadow-2xl z-50 bg-[#15171B] border border-white/10 rounded-lg">
                  <Link to="/results" className="text-neutral-200 hover:text-white hover:bg-white/5 no-underline p-2 rounded text-xs flex items-center gap-2">
                    <Activity size={14} className="text-[#FF6B2C]" /> Live Leaderboard
                  </Link>
                  <Link to="/expo" className="text-neutral-200 hover:text-white hover:bg-white/5 no-underline p-2 rounded text-xs flex items-center gap-2">
                    <Award size={14} className="text-[#FF6B2C]" /> Race Expo
                  </Link>
                  <Link to="/training" className="text-neutral-200 hover:text-white hover:bg-white/5 no-underline p-2 rounded text-xs flex items-center gap-2">
                    <Compass size={14} className="text-[#FF6B2C]" /> Training Plans
                  </Link>
                  <Link to="/volunteers" className="text-neutral-200 hover:text-white hover:bg-white/5 no-underline p-2 rounded text-xs flex items-center gap-2">
                    <ShieldAlert size={14} className="text-[#FF6B2C]" /> Volunteer Program
                  </Link>
                  <Link to="/faq" className="text-neutral-200 hover:text-white hover:bg-white/5 no-underline p-2 rounded text-xs flex items-center gap-2">
                    <HelpCircle size={14} className="text-[#FF6B2C]" /> FAQs
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Bar (Audio + REGISTER NOW CTA + Hamburger Menu) */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Audio Playback Button */}
            <button
              onClick={() => audioManager.toggle()}
              className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors bg-white/10 border border-white/15 text-white hover:border-[#FF6B2C] hover:text-[#FF6B2C] shrink-0"
              title={isPlayingAudio ? "Mute race sound" : "Play marathon race audio"}
              aria-label="Toggle race audio"
            >
              {isPlayingAudio ? <Volume2 size={15} className="text-[#FF6B2C]" /> : <VolumeX size={15} />}
            </button>

            {/* REGISTER NOW CTA Button (Scaled strictly to text-[11px] px-3 py-1.5 h-8 font-semibold) */}
            <Link 
              to="/register" 
              className="text-[11px] px-3 py-1.5 h-8 font-semibold rounded bg-gradient-to-r from-[#E92B2B] to-[#FF6B2C] text-white uppercase flex items-center justify-center whitespace-nowrap no-underline shadow-md active:scale-95 transition-transform shrink-0"
            >
              REGISTER NOW
            </Link>

            {/* Mobile Menu Toggle Icon */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10 border border-white/15 text-white lg:hidden cursor-pointer shrink-0"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} className="text-[#FF6B2C]" /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer: Fixed overlay directly below header */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-x-0 top-[header-height] bg-black/95 z-40 p-4 border-b border-neutral-800 shadow-2xl overflow-y-auto backdrop-blur-xl lg:hidden"
          style={{
            top: `${headerBottom}px`,
            maxHeight: `calc(100vh - ${headerBottom}px)`,
            boxSizing: 'border-box'
          }}
        >
          {/* Main sections */}
          <div className="flex flex-col gap-1 mb-3">
            {MENU_SECTIONS.map(item => (
              <Link 
                key={item.id}
                to={item.path} 
                onClick={(e) => handleNavClick(e, item)}
                className={`py-2 px-3 rounded-md text-sm font-semibold no-underline flex items-center justify-between transition-colors ${
                  isLinkActive(item) ? 'text-[#FF6B2C] bg-[#FF6B2C]/15 font-bold' : 'text-neutral-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="h-px bg-neutral-800 my-2" />

          {/* Quick Register CTA in Drawer */}
          <Link 
            to="/register" 
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-2.5 text-center text-xs font-bold uppercase rounded bg-gradient-to-r from-[#E92B2B] to-[#FF6B2C] text-white no-underline block shadow-lg active:scale-95 transition-transform my-2"
          >
            REGISTER NOW
          </Link>

          {/* Extra Links Grid */}
          <div className="grid grid-cols-2 gap-2 mt-2 pt-1">
            <Link to="/results" onClick={() => setMobileMenuOpen(false)} className="text-neutral-300 hover:text-white text-xs font-medium py-2 px-2.5 rounded bg-white/5 no-underline flex items-center gap-1.5">
              <Activity size={13} className="text-[#FF6B2C]" /> Live Results
            </Link>
            <Link to="/expo" onClick={() => setMobileMenuOpen(false)} className="text-neutral-300 hover:text-white text-xs font-medium py-2 px-2.5 rounded bg-white/5 no-underline flex items-center gap-1.5">
              <Award size={13} className="text-[#FF6B2C]" /> Race Expo
            </Link>
            <Link to="/training" onClick={() => setMobileMenuOpen(false)} className="text-neutral-300 hover:text-white text-xs font-medium py-2 px-2.5 rounded bg-white/5 no-underline flex items-center gap-1.5">
              <Compass size={13} className="text-[#FF6B2C]" /> Training
            </Link>
            <Link to="/volunteers" onClick={() => setMobileMenuOpen(false)} className="text-neutral-300 hover:text-white text-xs font-medium py-2 px-2.5 rounded bg-white/5 no-underline flex items-center gap-1.5">
              <ShieldAlert size={13} className="text-[#FF6B2C]" /> Volunteers
            </Link>
            <Link to="/faq" onClick={() => setMobileMenuOpen(false)} className="text-neutral-300 hover:text-white text-xs font-medium py-2 px-2.5 rounded bg-white/5 no-underline flex items-center gap-1.5 col-span-2">
              <HelpCircle size={13} className="text-[#FF6B2C]" /> FAQs
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}

