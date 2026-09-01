/**
 * Navbar — Main navigation header.
 * @prop {Object} siteInfo - Institution name and tagline
 * @prop {Array} navLinks - Array of { label, path }
 */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
import Button from '../../common/Button/Button';
import styles from './Navbar.module.css';

const Navbar = ({ siteInfo, navLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change / resize
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <header className={[styles.navbar, scrolled ? styles.scrolled : ''].join(' ')} role="banner">
      <div className={['container', styles.inner].join(' ')}>
        {/* Logo + name */}
        <NavLink to="/" className={styles.brand} aria-label={`${siteInfo.institutionName} home`}>
          <div className={styles.logoIcon}>
            <GraduationCap size={30} color="white" aria-hidden="true" />
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>{siteInfo.institutionName}</span>
            <span className={styles.brandTagline}>{siteInfo.tagline}</span>
          </div>
        </NavLink>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navLinks.map(link => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    [styles.navLink, isActive ? styles.active : ''].join(' ')
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className={styles.cta}>
          <Button variant="outline" size="sm" as={NavLink} to="/contact">
            Get Started
          </Button>
        </div>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        id="mobile-nav"
        className={[styles.mobileNav, menuOpen ? styles.open : ''].join(' ')}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileList}>
          {navLinks.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  [styles.mobileLink, isActive ? styles.mobileActive : ''].join(' ')
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className={styles.mobileCta}>
            <Button variant="primary" size="md">Get Started</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  siteInfo: PropTypes.shape({
    institutionName: PropTypes.string,
    tagline: PropTypes.string,
  }).isRequired,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, path: PropTypes.string })
  ).isRequired,
};

export default Navbar;
