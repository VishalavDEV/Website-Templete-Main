import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onOpenMenu: () => void;
  variant?: 'floating' | 'standard';
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu, variant = 'floating' }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (variant === 'standard') {
    return (
      <>
        <aside className="header-topbar d-none d-lg-block">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-4">
              <span><i className="bi bi-geo-alt text-accent me-2"></i>27 Garden Street, Chennai, Tamil Nadu</span>
              <span><i className="bi bi-clock text-accent me-2"></i>Mon–Thu: 11am–10pm | Fri–Sun: 11am–11:30pm</span>
            </div>
            <div className="d-flex align-items-center gap-4">
              <a href="tel:+919876543210" className="text-cream text-decoration-none"><i className="bi bi-telephone text-accent me-2"></i>+91 98765 43210</a>
            </div>
          </div>
        </aside>

        <header className="site-navbar">
          <div className="container d-flex align-items-center justify-content-between">
            <Link to="/" className="brand-logo text-decoration-none">
              <span className="brand-logo-text">EMBER<span className="accent-dot"></span>HOUSE</span>
              <span className="brand-logo-tagline">Gather. Taste. Stay Awhile.</span>
            </Link>

            <nav className="d-none d-lg-flex align-items-center gap-1">
              <Link className="nav-link-ember" to="/">Home</Link>
              <Link className="nav-link-ember" to="/about">Our Story</Link>
              <Link className="nav-link-ember" to="/menu">Menu</Link>
              <Link className="nav-link-ember" to="/chefs">Chefs</Link>
              <Link className="nav-link-ember" to="/events">Events</Link>
              <Link className="nav-link-ember" to="/gallery">Gallery</Link>
              <Link className="nav-link-ember" to="/blog">Journal</Link>
              <Link className="nav-link-ember" to="/contact">Contact</Link>
            </nav>

            <div className="d-flex align-items-center gap-3">
              <Link to="/contact#reservation" className="btn-ember-primary d-none d-sm-inline-flex">Reserve Table</Link>
              <button className="btn btn-link text-cream p-0 fs-2" type="button" onClick={onOpenMenu} aria-label="Open Menu">
                <i className="bi bi-grid-fill ms-1"></i>
              </button>
            </div>
          </div>
        </header>
      </>
    );
  }

  return (
    <header className={`floating-header ${isScrolled ? 'scrolled' : ''}`} id="siteHeader">
      <Link to="/" className="brand-minimal text-decoration-none">
        <span className="brand-minimal-title">EMBER<span className="accent-dot"></span>HOUSE</span>
        <span className="brand-minimal-sub">Chennai &bull; Est. 2012</span>
      </Link>
      <button type="button" className="btn-menu-trigger" id="btnMenuOpen" onClick={onOpenMenu} aria-label="Open Fullscreen Menu">
        MENU <i className="bi bi-grid-fill ms-1"></i>
      </button>
    </header>
  );
};

export default Header;
