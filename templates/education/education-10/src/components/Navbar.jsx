import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GraduationCap, X, Menu } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/courses', label: 'Courses' },
  { to: '/instructors', label: 'Instructors' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={() => setMobileOpen(false)}>
            <div className="navbar-logo-icon">
              <GraduationCap size={20} />
            </div>
            <span>EduLearn</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar-nav" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="navbar-actions">
            <Link to="/courses" className="btn btn-primary btn-sm">
              Start Learning
            </Link>
            <button
              className="hamburger"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <button
              onClick={() => setMobileOpen(false)}
              style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', cursor: 'pointer' }}
              aria-label="Close navigation menu"
            >
              <X size={28} color="var(--text-primary)" />
            </button>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'text-primary-color' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06 }}
            >
              <Link to="/courses" className="btn btn-primary btn-lg" onClick={() => setMobileOpen(false)}>
                Start Learning
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
