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
                className="btn-charcoal-outline"
                style={{ display: 'none', padding: '8px 10px' }}
                id="asym-mobile-trigger"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu size={18} />
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
            style={{ width: '40px', height: '40px', borderRadius: '2px', background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '24px', margin: '40px 0' }}>
          <li>
            <NavLink to="/company" style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#FFFFFF' }}>
              01 // About
            </NavLink>
          </li>
          <li>
            <NavLink to="/capabilities" style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#FFFFFF' }}>
              02 // Capabilities
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#FFFFFF' }}>
              03 // Solutions
            </NavLink>
          </li>
          <li>
            <NavLink to="/industries" style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#FFFFFF' }}>
              04 // Industries
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#FFFFFF' }}>
              05 // Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/insights" style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#FFFFFF' }}>
              06 // Insights
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: 'var(--c-copper)' }}>
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
