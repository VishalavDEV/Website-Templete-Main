import { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`} id="navbar">
      <div className="navbar__inner container">
        {/* Brand */}
        <a href="#home" className="navbar__brand" onClick={(e) => { e.preventDefault(); handleNav("#home"); }}>
          <div className="navbar__monogram" aria-label="ME monogram">ME</div>
          <div className="navbar__brand-text">
            <span className="navbar__name">Dr. Maya Ellison</span>
            <span className="navbar__role">Consultant Cardiologist</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link${active === link.href.slice(1) ? " navbar__link--active" : ""}`}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar__actions">
          <a href="#" className="btn btn--primary navbar__cv-btn" download>
            Download CV
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu${menuOpen ? " navbar__mobile-menu--open" : ""}`} aria-hidden={!menuOpen}>
        <nav className="navbar__mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__mobile-link${active === link.href.slice(1) ? " active" : ""}`}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="navbar__mobile-actions">
          <a href="#" className="btn btn--outline" style={{ width: "100%", justifyContent: "center" }}>Download CV</a>
        </div>
      </div>
    </header>
  );
}
