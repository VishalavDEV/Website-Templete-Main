import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

export const WarmNavbar = ({ onOpenProjectModal }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <>
      <header className="editorial-navbar">
        <div className="editorial-nav-container">
          {/* Left: Typographic Logo */}
          <Link
            to="/"
            className="editorial-nav-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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

          {/* Right: Distinctive Pill-Shaped CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button className="pill-btn pill-btn-dark" onClick={onOpenProjectModal}>
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

      {/* Mobile Drawer */}
      <div className={`mobile-editorial-drawer ${mobileDrawerOpen ? "open" : ""}`}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link
            to="/"
            onClick={() => {
              setMobileDrawerOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{ textDecoration: "none", fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "#fff" }}
          >
            KINESIS<span style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "var(--accent-chartreuse)", marginLeft: "6px" }}>GLOBAL</span><span style={{ color: "var(--accent-chartreuse)" }}>.</span>
          </Link>
          <button
            onClick={() => setMobileDrawerOpen(false)}
            style={{ background: "transparent", border: "none", color: "#fff", cursor: "pointer" }}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <ul className="mobile-drawer-links">
          <li>
            <NavLink to="/" onClick={() => setMobileDrawerOpen(false)}>
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMobileDrawerOpen(false)}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={() => setMobileDrawerOpen(false)}>
              Capabilities
            </NavLink>
          </li>
          <li>
            <NavLink to="/solutions" onClick={() => setMobileDrawerOpen(false)}>
              Solutions & Blueprints
            </NavLink>
          </li>
          <li>
            <NavLink to="/industries" onClick={() => setMobileDrawerOpen(false)}>
              Industry Sectors
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" onClick={() => setMobileDrawerOpen(false)}>
              Selected Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/insights" onClick={() => setMobileDrawerOpen(false)}>
              Insights & Essays
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMobileDrawerOpen(false)}>
              Contact & RFPs
            </NavLink>
          </li>
        </ul>

        <div>
          <button
            className="pill-btn pill-btn-chartreuse"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => {
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
