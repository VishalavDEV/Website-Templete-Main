import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, ArrowUpRight } from "lucide-react";

export const EditorialNav = ({ onOpenBrief }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Lock body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  const navItems = [
    { num: "01", label: "ABOUT", path: "/about", desc: "Manifesto & Leadership" },
    { num: "02", label: "SERVICES", path: "/services", desc: "Core Capabilities Index" },
    { num: "03", label: "SOLUTIONS", path: "/solutions", desc: "Architectural Blueprints" },
    { num: "04", label: "INDUSTRIES", path: "/industries", desc: "Vertical Sector Practices" },
    { num: "05", label: "WORK", path: "/work", desc: "Selected Case Studies" },
    { num: "06", label: "INSIGHTS", path: "/insights", desc: "Executive Research" },
    { num: "07", label: "CONTACT", path: "/contact", desc: "Global Consultations" }
  ];

  return (
    <>
      <header className="editorial-header">
        {/* Top-Left Monogram */}
        <Link to="/" className="nav-monogram" aria-label="KINESIS Home">
          <div className="monogram-box">K</div>
          <span className="monogram-text">KINESIS // 2026</span>
        </Link>

        {/* Top-Right Circular MENU Button */}
        <button
          className="menu-trigger-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Fullscreen Navigation"
        >
          <span className="menu-dot-pulse"></span>
          <span>MENU</span>
        </button>
      </header>

      {/* Full-Screen Navigation Overlay */}
      <div className={`fullscreen-menu-overlay ${menuOpen ? "open" : ""}`}>
        <div className="menu-overlay-header">
          <div className="mono-tag">
            <span className="mono-tag-accent">[NAVIGATION INDEX]</span> — DIRECTORY
          </div>
          <button
            className="circle-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="menu-overlay-items">
          {navItems.map((item) => (
            <li key={item.num}>
              <Link
                to={item.path}
                className="menu-item-row"
                onClick={() => setMenuOpen(false)}
              >
                <div style={{ display: "flex", alignItems: "baseline" }}>
                  <span className="menu-item-num">{item.num}</span>
                  <span className="menu-item-title">{item.label}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                  <span className="menu-item-desc">{item.desc}</span>
                  <ArrowUpRight size={24} color="var(--accent-electric)" />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="menu-overlay-footer">
          <div>KINESIS GLOBAL SYSTEMS INC.</div>
          <div>GLOBAL OFFICES: SF / LDN / SGP / ZRH</div>
          <div>
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenBrief();
              }}
              style={{ color: "var(--accent-electric)", background: "transparent", border: "none", cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}
            >
              INITIATE BRIEF →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
