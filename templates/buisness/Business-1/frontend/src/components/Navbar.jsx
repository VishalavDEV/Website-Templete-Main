import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <Zap className="logo-icon" />
          <span>ABC Business</span>
        </Link>

        {/* Desktop Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
              {location.pathname === link.path && <span className="active-dot" />}
            </Link>
          ))}
        </div>

        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/contact" className="btn btn-primary nav-cta">
            Get Started
          </Link>
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`mobile-nav-item ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary mobile-cta" onClick={() => setIsOpen(false)}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
