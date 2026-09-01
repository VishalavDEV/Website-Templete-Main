import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Flame, Trophy, Calendar, MapPin, Users, HelpCircle, Activity, Award, Compass, ShieldAlert } from 'lucide-react';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');

  const location = useLocation();
  const navigate = useNavigate();

  // ScrollSpy listener to dynamically track active section in exact page order
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // ScrollSpy active section detection on Home page
      if (location.pathname === '/') {
        const sections = MENU_SECTIONS.map(item => document.getElementById(item.id)).filter(Boolean);
        const scrollPosition = window.scrollY + 180;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section.offsetTop <= scrollPosition) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Smooth scroll to section if on Home page, or navigate to route if on another page
  const handleNavClick = (e, item) => {
    if (location.pathname === '/') {
      const targetElement = document.getElementById(item.id);
      if (targetElement) {
        e.preventDefault();
        const navHeight = 70;
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
    <header 
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.35s ease',
        background: isScrolled 
          ? 'rgba(9, 10, 13, 0.95)' 
          : 'linear-gradient(180deg, rgba(9, 10, 13, 0.9) 0%, rgba(9, 10, 13, 0) 100%)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.6)' : 'none'
      }}
    >
      <div style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        padding: '0 16px',
        height: 'var(--navbar-height)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        
        {/* Brand Logo with Marathon Crest */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, var(--marathon-red), var(--bright-orange))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px var(--glow-red)'
          }}>
            <Flame size={20} color="#FFFFFF" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="font-display" style={{ fontSize: '1.5rem', color: '#FFFFFF', lineHeight: 0.9, letterSpacing: '1.5px' }}>
              VAYORA
            </span>
            <span style={{ fontSize: '0.6rem', fontWeight: 800, color: 'var(--bright-orange)', letterSpacing: '2px' }}>
              RUNFEST 2026
            </span>
          </div>
        </Link>

        {/* Dynamic Desktop ScrollSpy Menu Bars (Contact placed directly next to Gallery) */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {MENU_SECTIONS.map(item => {
            const active = isLinkActive(item);

            return (
              <Link 
                key={item.id}
                to={item.path}
                onClick={(e) => handleNavClick(e, item)}
                style={{
                  color: active ? 'var(--bright-orange)' : 'var(--warm-white)',
                  textDecoration: 'none',
                  fontWeight: active ? 800 : 600,
                  fontSize: '0.8rem',
                  position: 'relative',
                  padding: '6px 8px',
                  borderRadius: '6px',
                  background: active ? 'rgba(255, 107, 44, 0.15)' : 'transparent',
                  transition: 'all 0.25s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {item.label}

                {/* Active Indicator Underline */}
                {active && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: '6px',
                    right: '6px',
                    height: '2px',
                    background: 'linear-gradient(90deg, var(--marathon-red), var(--bright-orange))',
                    borderRadius: '2px',
                    boxShadow: '0 0 8px var(--glow-orange)'
                  }} />
                )}
              </Link>
            );
          })}

          {/* Extra Pages Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown('more')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              style={{
                background: 'none',
                border: 'none',
                color: ['/expo', '/training', '/volunteers', '/results', '/faq'].includes(location.pathname) ? 'var(--bright-orange)' : 'var(--warm-white)',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
                padding: '6px 6px'
              }}
            >
              More <ChevronDown size={12} />
            </button>

            {activeDropdown === 'more' && (
              <div className="glass-panel" style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                width: '210px',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                zIndex: 100
              }}>
                <Link to="/results" style={{ color: 'var(--warm-white)', textDecoration: 'none', padding: '8px 12px', borderRadius: '6px', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Activity size={14} color="var(--bright-orange)" /> Live Leaderboard
                </Link>
                <Link to="/expo" style={{ color: 'var(--warm-white)', textDecoration: 'none', padding: '8px 12px', borderRadius: '6px', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Award size={14} color="var(--bright-orange)" /> Race Expo
                </Link>
                <Link to="/training" style={{ color: 'var(--warm-white)', textDecoration: 'none', padding: '8px 12px', borderRadius: '6px', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Compass size={14} color="var(--bright-orange)" /> Training Plans
                </Link>
                <Link to="/volunteers" style={{ color: 'var(--warm-white)', textDecoration: 'none', padding: '8px 12px', borderRadius: '6px', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldAlert size={14} color="var(--bright-orange)" /> Volunteer Program
                </Link>
                <Link to="/faq" style={{ color: 'var(--warm-white)', textDecoration: 'none', padding: '8px 12px', borderRadius: '6px', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <HelpCircle size={14} color="var(--bright-orange)" /> FAQs
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Right Primary Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link to="/register" className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.8rem' }}>
            REGISTER NOW
          </Link>

          {/* Mobile Drawer Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              display: 'none'
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="glass-panel" style={{
          position: 'fixed',
          top: 'var(--navbar-height)',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(9, 10, 13, 0.98)',
          backdropFilter: 'blur(20px)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          overflowY: 'auto',
          zIndex: 999
        }}>
          {MENU_SECTIONS.map(item => (
            <Link 
              key={item.id}
              to={item.path} 
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavClick(e, item);
              }}
              style={{
                color: isLinkActive(item) ? 'var(--bright-orange)' : 'var(--warm-white)',
                textDecoration: 'none',
                fontSize: '1.15rem',
                fontWeight: 700
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/register" style={{ color: 'var(--bright-orange)', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 800 }}>Register Now</Link>
          <Link to="/results" style={{ color: 'var(--warm-white)', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 700 }}>Live Results</Link>
          <Link to="/expo" style={{ color: 'var(--warm-white)', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 700 }}>Race Expo</Link>
          <Link to="/training" style={{ color: 'var(--warm-white)', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 700 }}>Training Plans</Link>
          <Link to="/volunteers" style={{ color: 'var(--warm-white)', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 700 }}>Volunteers</Link>
          <Link to="/faq" style={{ color: 'var(--warm-white)', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 700 }}>FAQs</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 1180px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
