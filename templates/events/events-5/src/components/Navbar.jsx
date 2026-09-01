import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Car, 
  Sparkles, 
  Droplet, 
  ShieldCheck, 
  Palette, 
  Wrench, 
  Layers
} from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Ordered list of menu items
  const menuItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'services', label: 'Services', path: '/services', hasDropdown: true, dropdownType: 'services' },
    { id: 'pricing', label: 'Pricing', path: '/pricing' },
    { id: 'paint', label: 'Paint', path: '/paint', hasDropdown: true, dropdownType: 'paint' },
    { id: 'equipment', label: 'Equipment', path: '/equipment' },
    { id: 'cars', label: 'Cars', path: '/cars' },
    { id: 'gallery', label: 'Gallery', path: '/gallery' },
    { id: 'offers', label: 'Offers', path: '/offers' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  // Scroll listener for sticky background glass transformation and scroll spy
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy logic for Home Page sections
      if (location.pathname === '/') {
        const sections = menuItems.map(item => document.getElementById(item.id)).filter(Boolean);
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section.offsetTop <= scrollPosition) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Smooth scroll handler for home section or navigation
  const handleNavClick = (e, item) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(item.id);
      } else {
        navigate(item.path);
      }
    } else {
      navigate(item.path);
    }
  };

  // Determine if a menu item is currently active
  const isItemActive = (item) => {
    if (location.pathname === '/') {
      return activeSection === item.id;
    }
    return location.pathname === item.path;
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.35s ease',
      background: scrolled ? 'rgba(7, 9, 11, 0.94)' : 'rgba(7, 9, 11, 0.55)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: scrolled ? '1px solid rgba(124, 255, 79, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.9)' : 'none'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px'
      }}>
        {/* Brand Logo */}
        <Link to="/" onClick={(e) => handleNavClick(e, { id: 'home', path: '/' })} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #111417 0%, #1b2024 100%)',
            border: '1px solid #7cff4f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(124, 255, 79, 0.3)'
          }}>
            <Droplet size={24} style={{ color: '#7cff4f', fill: 'rgba(124,255,79,0.2)' }} />
          </div>
          <div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.45rem',
              fontWeight: '900',
              letterSpacing: '0.08em',
              color: '#f5f7f8',
              lineHeight: 1
            }}>
              AQUAVEXA
            </div>
            <div style={{
              fontSize: '0.68rem',
              fontWeight: '800',
              letterSpacing: '0.3em',
              color: '#7cff4f',
              textTransform: 'uppercase',
              marginTop: '2px'
            }}>
              AUTO SPA
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links in Logical Order */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
          {menuItems.map((item) => {
            const active = isItemActive(item);

            if (item.hasDropdown) {
              return (
                <div
                  key={item.id}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setActiveDropdown(item.dropdownType)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`nav-item ${active ? 'active' : ''}`}
                  >
                    {item.label} <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: activeDropdown === item.dropdownType ? 'rotate(180deg)' : 'none' }} />
                  </a>

                  {activeDropdown === item.dropdownType && item.dropdownType === 'services' && (
                    <div className="dropdown-menu">
                      <Link to="/services" className="dropdown-item">
                        <Droplet size={16} color="#7cff4f" /> Foam Wash
                      </Link>
                      <Link to="/services" className="dropdown-item">
                        <Sparkles size={16} color="#25bfff" /> Premium Detailing
                      </Link>
                      <Link to="/services" className="dropdown-item">
                        <ShieldCheck size={16} color="#7cff4f" /> Ceramic Coating
                      </Link>
                      <Link to="/services" className="dropdown-item">
                        <Layers size={16} color="#25bfff" /> Paint Correction
                      </Link>
                      <Link to="/services" className="dropdown-item">
                        <Car size={16} color="#7cff4f" /> Interior Deep Clean
                      </Link>
                    </div>
                  )}

                  {activeDropdown === item.dropdownType && item.dropdownType === 'paint' && (
                    <div className="dropdown-menu">
                      <Link to="/paint" className="dropdown-item">
                        <Palette size={16} color="#7cff4f" /> Color Studio
                      </Link>
                      <Link to="/paint" className="dropdown-item">
                        <Car size={16} color="#25bfff" /> Color Visualizer
                      </Link>
                      <Link to="/paint" className="dropdown-item">
                        <Layers size={16} color="#7cff4f" /> Paint Types
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={item.id}
                href={item.path}
                onClick={(e) => handleNavClick(e, item)}
                className={`nav-item ${active ? 'active' : ''}`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link to="/booking" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.85rem' }}>
            Book Now
          </Link>
          
          <button 
            className="mobile-hamburger" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              color: '#f5f7f8',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={28} color="#7cff4f" /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: '#07090b',
          borderBottom: '1px solid rgba(124, 255, 79, 0.3)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {menuItems.map((item) => {
            const active = isItemActive(item);
            return (
              <a
                key={item.id}
                href={item.path}
                onClick={(e) => {
                  handleNavClick(e, item);
                  setMobileMenuOpen(false);
                }}
                className={`mobile-nav-item ${active ? 'active' : ''}`}
              >
                {item.label}
              </a>
            );
          })}
          <Link to="/booking" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center', marginTop: '12px' }}>
            BOOK APPOINTMENT
          </Link>
        </div>
      )}

      <style>{`
        .nav-item {
          color: var(--text-silver);
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 8px 0;
          position: relative;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .nav-item:hover, .nav-item.active {
          color: var(--accent-green);
          text-shadow: 0 0 10px rgba(124, 255, 79, 0.5);
        }

        .nav-item.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--accent-green);
          box-shadow: 0 0 12px var(--accent-green);
          border-radius: 2px;
          animation: pulseGlow 2s infinite ease-in-out;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: -10px;
          width: 220px;
          background: rgba(17, 20, 23, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(124, 255, 79, 0.3);
          border-radius: 10px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.8);
          animation: fadeIn 0.2s ease;
        }

        .dropdown-item {
          padding: 10px 14px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #f5f7f8;
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .dropdown-item:hover {
          background: rgba(124, 255, 79, 0.1);
          color: var(--accent-green);
          transform: translateX(4px);
        }

        .mobile-nav-item {
          color: var(--text-white);
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          text-decoration: none;
        }

        .mobile-nav-item.active {
          color: var(--accent-green);
        }

        @media (max-width: 1100px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
