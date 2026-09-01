import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Flame, ChevronDown, Menu, X, Trophy, Calendar, Shield, Users, Radio, MapPin, Ticket, Newspaper, HelpCircle, PhoneCall, Award, ShoppingBag, HeartHandshake } from 'lucide-react';
import { tournamentData } from '../data/tournamentData';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const location = useLocation();
  const navigate = useNavigate();

  // Scroll position spy for active section highlight
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (location.pathname === '/') {
        const sections = ['hero', 'tournament', 'live-score', 'matches', 'teams', 'players', 'standings'];
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close menus on route change
  useEffect(() => {
    setMoreOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (sectionId, path) => {
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    } else {
      navigate(path);
    }
  };

  const moreLinks = [
    { label: 'Fixtures', path: '/fixtures', icon: Calendar },
    { label: 'Venues', path: '/venues', icon: MapPin },
    { label: 'Tickets', path: '/tickets', icon: Ticket },
    { label: 'Registration', path: '/registration', icon: Users },
    { label: 'Leaderboard', path: '/leaderboard', icon: Trophy },
    { label: 'News & Updates', path: '/news', icon: Newspaper },
    { label: 'Gallery', path: '/gallery', icon: Shield },
    { label: 'Sponsors', path: '/sponsors', icon: HeartHandshake },
    { label: 'Rules & Regulations', path: '/rules', icon: Shield },
    { label: 'Tournament History', path: '/history', icon: Trophy },
    { label: 'Awards', path: '/awards', icon: Award },
    { label: 'Match Officials', path: '/officials', icon: Users },
    { label: 'Fan Zone', path: '/fan-zone', icon: Radio },
    { label: 'Merchandise', path: '/merchandise', icon: ShoppingBag },
    { label: 'FAQ', path: '/faq', icon: HelpCircle },
    { label: 'Contact Us', path: '/contact', icon: PhoneCall },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-brand">
            <div className="brand-icon">
              <Flame size={26} color="#ffffff" />
            </div>
            <div className="brand-text">
              <span className="brand-title">{tournamentData.info.name}</span>
              <span className="brand-subtitle">CHENNAI 2026</span>
            </div>
          </Link>

          {/* Desktop Nav Links (Ordered according to page sections) */}
          <ul className="navbar-links">
            <li className="nav-item">
              <button
                onClick={() => handleNavClick('hero', '/')}
                className={`nav-link ${location.pathname === '/' && activeSection === 'hero' ? 'active' : ''}`}
              >
                HOME
              </button>
            </li>

            <li className="nav-item">
              <button
                onClick={() => handleNavClick('tournament', '/about')}
                className={`nav-link ${(location.pathname === '/' && activeSection === 'tournament') || location.pathname === '/about' ? 'active' : ''}`}
              >
                TOURNAMENT
              </button>
            </li>

            <li className="nav-item">
              <button
                onClick={() => handleNavClick('live-score', '/live-score')}
                className={`nav-link ${(location.pathname === '/' && activeSection === 'live-score') || location.pathname === '/live-score' ? 'active' : ''}`}
              >
                <span className="badge-live-pulse" /> LIVE SCORE
              </button>
            </li>

            <li className="nav-item">
              <button
                onClick={() => handleNavClick('matches', '/matches')}
                className={`nav-link ${(location.pathname === '/' && activeSection === 'matches') || location.pathname === '/matches' ? 'active' : ''}`}
              >
                MATCHES
              </button>
            </li>

            <li className="nav-item">
              <button
                onClick={() => handleNavClick('teams', '/teams')}
                className={`nav-link ${(location.pathname === '/' && activeSection === 'teams') || location.pathname === '/teams' ? 'active' : ''}`}
              >
                TEAMS
              </button>
            </li>

            <li className="nav-item">
              <button
                onClick={() => handleNavClick('players', '/players')}
                className={`nav-link ${(location.pathname === '/' && activeSection === 'players') || location.pathname === '/players' ? 'active' : ''}`}
              >
                STARS & MVP
              </button>
            </li>

            <li className="nav-item">
              <button
                onClick={() => handleNavClick('standings', '/standings')}
                className={`nav-link ${(location.pathname === '/' && activeSection === 'standings') || location.pathname === '/standings' ? 'active' : ''}`}
              >
                STANDINGS
              </button>
            </li>

            {/* MORE Dropdown */}
            <li
              className="nav-item"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                className="nav-link"
                onClick={() => setMoreOpen(!moreOpen)}
                aria-expanded={moreOpen}
              >
                MORE <ChevronDown size={16} />
              </button>

              <div className={`more-dropdown ${moreOpen ? 'show' : ''}`}>
                {moreLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link key={item.path} to={item.path} className="dropdown-item">
                      <Icon size={16} color="#ff4d00" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </li>
          </ul>

          <div className="nav-actions">
            <Link to="/registration" className="btn-primary nav-register-btn">
              REGISTER NOW
            </Link>

            <button
              className="mobile-hamburger"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <button
          className="mobile-drawer-close"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close Mobile Navigation Menu"
        >
          <X size={24} />
        </button>

        <div className="brand-text" style={{ marginBottom: '20px' }}>
          <span className="brand-title">{tournamentData.info.name}</span>
          <span className="brand-subtitle">OFFICIAL MOBILE NAV</span>
        </div>

        <button onClick={() => { handleNavClick('hero', '/'); setMobileMenuOpen(false); }} className="mobile-link">
          HOME
        </button>
        <button onClick={() => { handleNavClick('tournament', '/about'); setMobileMenuOpen(false); }} className="mobile-link">
          TOURNAMENT
        </button>
        <button onClick={() => { handleNavClick('live-score', '/live-score'); setMobileMenuOpen(false); }} className="mobile-link text-orange">
          🔴 LIVE SCORE
        </button>
        <button onClick={() => { handleNavClick('matches', '/matches'); setMobileMenuOpen(false); }} className="mobile-link">
          MATCHES
        </button>
        <button onClick={() => { handleNavClick('teams', '/teams'); setMobileMenuOpen(false); }} className="mobile-link">
          TEAMS
        </button>
        <button onClick={() => { handleNavClick('players', '/players'); setMobileMenuOpen(false); }} className="mobile-link">
          STARS & MVP
        </button>
        <button onClick={() => { handleNavClick('standings', '/standings'); setMobileMenuOpen(false); }} className="mobile-link">
          STANDINGS
        </button>

        <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid var(--border)' }}>
          <div className="countdown-title" style={{ marginBottom: '10px' }}>
            QUICK ACCESS
          </div>
          {moreLinks.map((item) => (
            <Link key={item.path} to={item.path} className="mobile-link" style={{ fontSize: '1rem' }}>
              {item.label}
            </Link>
          ))}
        </div>

        <Link to="/registration" className="btn-primary" style={{ marginTop: '20px', textAlign: 'center' }}>
          REGISTER NOW
        </Link>
      </div>
    </>
  );
};
