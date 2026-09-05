import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { BRAND } from '../data/corporateData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header className={`asym-navbar-wrap ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-asym">
          <div className="asym-nav-inner">
            {/* Logo Far Left */}
            <Link to="/" className="asym-nav-brand" aria-label="AXIOM SYSTEMS">
              <span>AXIOM</span>
              <span className="asym-nav-badge">SYSTEMS</span>
            </Link>

            {/* Right Group: Navigation Links toward Right + Extreme Right CTA */}
            <div className="asym-nav-right-group">
              <nav>
                <ul className="asym-nav-links-list">
                  <li>
                    <NavLink to="/company" className={({ isActive }) => `asym-nav-link ${isActive ? 'active' : ''}`}>
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/capabilities" className={({ isActive }) => `asym-nav-link ${isActive ? 'active' : ''}`}>
                      Capabilities
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/technology" className={({ isActive }) => `asym-nav-link ${isActive ? 'active' : ''}`}>
                      Solutions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/industries" className={({ isActive }) => `asym-nav-link ${isActive ? 'active' : ''}`}>
                      Industries
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/work" className={({ isActive }) => `asym-nav-link ${isActive ? 'active' : ''}`}>
                      Work
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/insights" className={({ isActive }) => `asym-nav-link ${isActive ? 'active' : ''}`}>
                      Insights
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <Link to="/contact" className="btn-copper-primary asym-nav-cta" style={{ padding: '10px 22px', fontSize: '11px' }}>
                <span>Contact Us</span>
                <ArrowRight size={13} />
              </Link>

              <button
                className="asym-mobile-toggle-btn"
                id="asym-mobile-trigger"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`asym-mobile-curtain ${mobileOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="asym-nav-brand" style={{ color: '#FFFFFF' }}>
            <span>AXIOM</span>
            <span className="asym-nav-badge">SYSTEMS</span>
          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="asym-mobile-close-btn"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="asym-mobile-links-list">
          <li>
            <NavLink to="/company" onClick={() => setMobileOpen(false)}>
              01 // About
            </NavLink>
          </li>
          <li>
            <NavLink to="/capabilities" onClick={() => setMobileOpen(false)}>
              02 // Capabilities
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" onClick={() => setMobileOpen(false)}>
              03 // Solutions
            </NavLink>
          </li>
          <li>
            <NavLink to="/industries" onClick={() => setMobileOpen(false)}>
              04 // Industries
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" onClick={() => setMobileOpen(false)}>
              05 // Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/insights" onClick={() => setMobileOpen(false)}>
              06 // Insights
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMobileOpen(false)} style={{ color: 'var(--c-copper)' }}>
              07 // Contact
            </NavLink>
          </li>
        </ul>

        <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', color: 'var(--c-stone)', fontFamily: 'var(--font-mono)' }}>© 2026 {BRAND.name}</span>
          <Link to="/contact" className="btn-copper-primary" style={{ padding: '12px 20px', fontSize: '11px' }}>
            <span>Initiate Transmission →</span>
          </Link>
        </div>
      </div>
    </>
  );
}
