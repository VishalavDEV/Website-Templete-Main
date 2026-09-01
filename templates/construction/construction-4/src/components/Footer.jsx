import React from 'react';

export default function Footer({ onOpenConsultModal }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="knack-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col-brand">
            <div className="knack-logo">
              <span className="logo-bold">knack</span>
              <span className="logo-pipe">|</span>
              <span className="logo-caps">DESIGN + BUILD</span>
            </div>
            <p className="footer-brand-desc">
              Bespoke modernist architecture and luxury construction crafted with timeless precision.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollTo('#home')}>Home</button></li>
              <li><button onClick={() => scrollTo('#about')}>People</button></li>
              <li><button onClick={() => scrollTo('#portfolio')}>Portfolio</button></li>
              <li><button onClick={() => scrollTo('#services')}>Kitchens & Bathrooms</button></li>
              <li><button onClick={() => scrollTo('#estimator')}>Contact Us</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollTo('#services')}>Custom Villa Construction</button></li>
              <li><button onClick={() => scrollTo('#services')}>3D BIM Digital Twin</button></li>
              <li><button onClick={() => scrollTo('#services')}>Infinity Pools & Landscape</button></li>
              <li><button onClick={() => scrollTo('#services')}>Bespoke Millwork & Marble</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Private Office</h4>
            <p className="f-info">
              740 Ocean Boulevard, Suite 400<br />
              Santa Monica, CA 90401
            </p>
            <p className="f-info">
              inquiries@knackdesignbuild.com<br />
              +1 (310) 845-9200
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 knack | DESIGN + BUILD. All rights reserved. Full Stack (React + Spring Boot).</span>
          <span>Template 4 — Luxury Modernist Design + Build</span>
        </div>
      </div>
    </footer>
  );
}
