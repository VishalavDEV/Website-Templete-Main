import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/index.html';
  const headerClass = `site-header${!isHomePage ? ' header-light' : ''}`;

  const isActive = (path: string) => {
    if (path === '/' || path === 'index.html') {
      return location.pathname === '/' || location.pathname === '/index.html';
    }
    return location.pathname.includes(path);
  };

  const closeOffcanvas = () => {
    const offcanvasEl = document.getElementById('mobileNavOffcanvas');
    if (offcanvasEl && (window as any).bootstrap) {
      const bsOffcanvas = (window as any).bootstrap.Offcanvas.getInstance(offcanvasEl);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  };

  return (
    <>
      <header id="mainHeader" className={headerClass}>
        <div className="container-xl d-flex align-items-center justify-content-between">
          
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" id="brandLogo">
            <span className="brand-logo-text">EMBER <span>&</span> OLIVE</span>
            <span className="brand-subtext">Est. 2012 · Artisan Cuisine</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="d-none d-lg-flex align-items-center gap-1" aria-label="Main Navigation">
            <Link to="/" className={`nav-link-custom ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link-custom ${isActive('about') ? 'active' : ''}`}>About</Link>
            <Link to="/menu" className={`nav-link-custom ${isActive('menu') ? 'active' : ''}`}>Menu</Link>
            <Link to="/#signature" className="nav-link-custom">Experience</Link>
            <Link to="/events" className={`nav-link-custom ${isActive('events') ? 'active' : ''}`}>Events</Link>
            <Link to="/gallery" className={`nav-link-custom ${isActive('gallery') ? 'active' : ''}`}>Gallery</Link>
            <Link to="/contact" className={`nav-link-custom ${isActive('contact') ? 'active' : ''}`}>Contact</Link>
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="d-flex align-items-center gap-3">
            <Link to="/#reservation" className="btn-custom btn-primary-accent d-none d-sm-inline-flex" id="navReserveBtn">
              <i className="bi bi-calendar-check"></i>
              <span>Reserve a Table</span>
            </Link>

            {/* Mobile Offcanvas Trigger */}
            <button 
              className="mobile-nav-toggle d-lg-none" 
              type="button" 
              data-bs-toggle="offcanvas" 
              data-bs-target="#mobileNavOffcanvas" 
              aria-controls="mobileNavOffcanvas" 
              aria-label="Toggle navigation menu"
            >
              <i className="bi bi-list"></i>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Offcanvas Menu */}
      <div className="offcanvas offcanvas-end offcanvas-custom" tabIndex={-1} id="mobileNavOffcanvas" aria-labelledby="mobileNavOffcanvasLabel">
        <div className="offcanvas-header border-bottom border-dark-subtle p-4">
          <div className="brand-logo">
            <span className="brand-logo-text fs-4 text-white">EMBER <span>&</span> OLIVE</span>
            <span className="brand-subtext text-bone">Seasonal Dining</span>
          </div>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-4 d-flex flex-column justify-content-between">
          <nav className="offcanvas-nav d-flex flex-column gap-2" aria-label="Mobile Navigation">
            <Link to="/" onClick={closeOffcanvas} className={`nav-link-mobile ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link to="/about" onClick={closeOffcanvas} className={`nav-link-mobile ${isActive('about') ? 'active' : ''}`}>About Our Story</Link>
            <Link to="/menu" onClick={closeOffcanvas} className={`nav-link-mobile ${isActive('menu') ? 'active' : ''}`}>Seasonal Menu</Link>
            <Link to="/#signature" onClick={closeOffcanvas} className="nav-link-mobile" data-bs-dismiss="offcanvas">Signature Dishes</Link>
            <Link to="/events" onClick={closeOffcanvas} className={`nav-link-mobile ${isActive('events') ? 'active' : ''}`}>Private Dining & Events</Link>
            <Link to="/gallery" onClick={closeOffcanvas} className={`nav-link-mobile ${isActive('gallery') ? 'active' : ''}`}>Visual Gallery</Link>
            <Link to="/contact" onClick={closeOffcanvas} className={`nav-link-mobile ${isActive('contact') ? 'active' : ''}`}>Contact & Location</Link>
          </nav>

          <div className="mt-4 pt-4 border-top border-dark-subtle">
            <Link to="/#reservation" onClick={closeOffcanvas} className="btn-custom btn-primary-accent w-100 mb-3" data-bs-dismiss="offcanvas">
              <i className="bi bi-calendar-check me-2"></i>
              <span>Reserve a Table</span>
            </Link>
            <div className="text-bone opacity-75 small">
              <p className="mb-1"><i className="bi bi-geo-alt me-2 text-accent"></i> 28 Garden Avenue, Chennai</p>
              <p className="mb-0"><i className="bi bi-telephone me-2 text-accent"></i> +91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
