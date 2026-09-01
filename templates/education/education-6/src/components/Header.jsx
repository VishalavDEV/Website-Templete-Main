import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { contentData } from '../data/content';

/**
 * Header component for site navigation.
 * Includes logo and dynamic responsive hamburger drawer menu.
 * 
 * @param {Object} props
 * @param {string} [props.logoText] - Optional override for logo text
 * @param {string} [props.institutionName] - Optional override for institution name
 */
export default function Header({ logoText, institutionName }) {
  const [isOpen, setIsOpen] = useState(false);
  const { navigation, institution } = contentData;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const displayLogoText = logoText || institution.logoText;
  const displayInstName = institutionName || institution.name;

  return (
    <header className="navbar-header">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <GraduationCap className="logo-icon" size={32} />
          <span className="logo-text">{displayLogoText}</span>
          <span className="logo-full-text">| {displayInstName}</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navigation.links.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => isActive ? "nav-link nav-active" : "nav-link"}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/admissions" className="btn btn-primary nav-cta">
            {navigation.ctaText}
          </Link>
        </nav>

        {/* Mobile menu trigger */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Navigation Menu">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-nav-drawer ${isOpen ? 'drawer-open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navigation.links.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => isActive ? "mobile-nav-link nav-active" : "mobile-nav-link"}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/admissions" className="btn btn-primary btn-block mobile-nav-cta" onClick={closeMenu}>
            {navigation.ctaText}
          </Link>
        </nav>
      </div>
    </header>
  );
}
