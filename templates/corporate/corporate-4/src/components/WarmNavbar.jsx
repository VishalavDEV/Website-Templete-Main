import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

export const WarmNavbar = ({ onOpenProjectModal }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileDrawerOpen]);

  const handleLinkClick = () => {
    document.body.style.overflow = "auto";
    setMobileDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="editorial-navbar">
        <div className="editorial-nav-container">
          {/* Left: Typographic Logo */}
          <Link
            to="/"
            className="editorial-nav-logo"
            onClick={handleLinkClick}
          >
            <span>KINESIS</span>
            <span style={{ fontSize: "0.65rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", marginLeft: "6px", color: "var(--bg-terracotta)" }}>GLOBAL</span>
            <span className="dot">.</span>
          </Link>

          {/* Center: Navigation Links */}
          <ul className="editorial-nav-links">
            <li className="editorial-nav-item">
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li className="editorial-nav-item">
              <NavLink to="/services">CAPABILITIES</NavLink>
            </li>
            <li className="editorial-nav-item">
              <NavLink to="/solutions">SOLUTIONS</NavLink>
            </li>
            <li className="editorial-nav-item">
              <NavLink to="/industries">INDUSTRIES</NavLink>
            </li>
            <li className="editorial-nav-item">
              <NavLink to="/work">WORK</NavLink>
            </li>
            <li className="editorial-nav-item">
              <NavLink to="/insights">INSIGHTS</NavLink>
            </li>
            <li className="editorial-nav-item">
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>

          {/* Right: Distinctive Pill-Shaped CTA & Mobile Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button className="pill-btn pill-btn-dark header-cta-pill" onClick={onOpenProjectModal}>
              <span>START A PROJECT</span>
              <ArrowUpRight size={16} />
            </button>

            {/* Mobile Menu Circle Button */}
            <button
              className="mobile-menu-circle-btn"
              onClick={() => setMobileDrawerOpen(true)}
              aria-label="Open mobile navigation"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Drawer Backdrop */}
      {mobileDrawerOpen && (
        <div
          className="mobile-drawer-backdrop"
          onClick={() => setMobileDrawerOpen(false)}
        />
      )}

      {/* Mobile & Tablet Drawer */}
      <div className={`mobile-editorial-drawer ${mobileDrawerOpen ? "open" : ""}`}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1.25rem" }}>
          <Link
            to="/"
            onClick={handleLinkClick}
            style={{ textDecoration: "none", fontFamily: "var(--font-serif)", fontSize: "1.75rem", color: "#fff" }}
          >
            KINESIS<span style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "var(--accent-chartreuse)", marginLeft: "6px" }}>GLOBAL</span><span style={{ color: "var(--accent-chartreuse)" }}>.</span>
          </Link>
          <button
            onClick={() => setMobileDrawerOpen(false)}
            style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", cursor: "pointer", width: "42px", height: "42px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-drawer-links">
          <li>
            <NavLink to="/" onClick={handleLinkClick}>
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleLinkClick}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={handleLinkClick}>
              Capabilities
            </NavLink>
          </li>
          <li>
            <NavLink to="/solutions" onClick={handleLinkClick}>
              Solutions & Blueprints
            </NavLink>
          </li>
          <li>
            <NavLink to="/industries" onClick={handleLinkClick}>
              Industry Sectors
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" onClick={handleLinkClick}>
              Selected Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/insights" onClick={handleLinkClick}>
              Insights & Essays
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleLinkClick}>
              Contact & RFPs
            </NavLink>
          </li>
        </ul>

        <div style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <button
            className="pill-btn pill-btn-chartreuse"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => {
              document.body.style.overflow = "auto";
              setMobileDrawerOpen(false);
              onOpenProjectModal();
            }}
          >
            <span>START A PROJECT</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
};
