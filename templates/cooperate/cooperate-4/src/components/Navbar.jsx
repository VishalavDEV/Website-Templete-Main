import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export const Navbar = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? "navbar-scrolled" : ""}`}>
        <nav className="navbar-container">
          {/* Logo */}
          <Link to="/" className="brand-logo" aria-label="KINESIS Global Home">
            <div className="brand-icon">
              <span>K</span>
            </div>
            <div>
              <span>KINESIS</span>
              <span className="tag">GLOBAL</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/solutions" className={({ isActive }) => (isActive ? "active" : "")}>
                Solutions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/industries" className={({ isActive }) => (isActive ? "active" : "")}>
                Industries
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/work" className={({ isActive }) => (isActive ? "active" : "")}>
                Work
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/insights" className={({ isActive }) => (isActive ? "active" : "")}>
                Insights
              </NavLink>
            </li>
          </ul>

          {/* Action CTA */}
          <div className="nav-actions">
            <button
              className="btn btn-primary"
              onClick={onOpenContact}
              style={{ padding: "0.65rem 1.4rem", fontSize: "0.85rem" }}
            >
              <span>Let's Talk</span>
              <ArrowRight size={14} />
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? "open" : ""}`}>
        <button
          className="mobile-nav-close"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        <div style={{ marginBottom: "2rem" }}>
          <div className="eyebrow">
            <span className="eyebrow-indicator"></span>
            GLOBAL ENTERPRISE NAVIGATION
          </div>
        </div>

        <ul className="mobile-nav-links">
          <li>
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>
              About Company
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={() => setMobileMenuOpen(false)}>
              Capabilities & Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/solutions" onClick={() => setMobileMenuOpen(false)}>
              Enterprise Solutions
            </NavLink>
          </li>
          <li>
            <NavLink to="/industries" onClick={() => setMobileMenuOpen(false)}>
              Target Industries
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" onClick={() => setMobileMenuOpen(false)}>
              Selected Case Studies
            </NavLink>
          </li>
          <li>
            <NavLink to="/insights" onClick={() => setMobileMenuOpen(false)}>
              Executive Insights
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact & Locations
            </NavLink>
          </li>
        </ul>

        <div>
          <button
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
          >
            <span>Start a Conversation</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
};
