import React from 'react';
import { profileData } from '../data/portfolioData';

export default function Footer() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="arch-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* LEFT: MONOGRAM & BRAND */}
          <div className="footer-left">
            <div className="footer-brand">
              <div className="monogram-box">AV</div>
              <div className="brand-text">
                <span className="brand-name">{profileData.name}</span>
                <span className="brand-title">{profileData.profession}</span>
              </div>
            </div>
            <p className="footer-tagline">{profileData.tagline}</p>
          </div>

          {/* CENTER: NAV LINKS */}
          <div className="footer-center">
            <div className="footer-nav-col">
              <span className="mono-text nav-col-title">NAVIGATION</span>
              <button onClick={() => scrollTo('profile')} className="footer-nav-link">Profile</button>
              <button onClick={() => scrollTo('practice')} className="footer-nav-link">Practice Philosophy</button>
              <button onClick={() => scrollTo('projects')} className="footer-nav-link">Selected Works</button>
              <button onClick={() => scrollTo('experience')} className="footer-nav-link">Career Experience</button>
            </div>

            <div className="footer-nav-col">
              <span className="mono-text nav-col-title">ARCHIVE</span>
              <button onClick={() => scrollTo('expertise')} className="footer-nav-link">Design Expertise</button>
              <button onClick={() => scrollTo('education')} className="footer-nav-link">Academic Foundation</button>
              <button onClick={() => scrollTo('research')} className="footer-nav-link">Research & Public Work</button>
              <button onClick={() => scrollTo('contact')} className="footer-nav-link">Contact Studio</button>
            </div>
          </div>

          {/* RIGHT: COPYRIGHT & SPECS */}
          <div className="footer-right">
            <div className="spec-card">
              <span className="mono-text">LOCATION MATRIX</span>
              <span className="spec-val">Copenhagen / Denmark</span>
              <span className="mono-text mt-12">SYSTEM REVISION</span>
              <span className="spec-val">ARCH-VER 2026.04</span>
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL BAR WITH MANDATORY DISCLAIMER */}
        <div className="footer-bottom-bar">
          <span className="copyright-text">© 2026 {profileData.name}. All Rights Reserved.</span>
          <p className="legal-disclaimer">
            "{profileData.disclaimer}"
          </p>
        </div>
      </div>

      <style>{`
        .arch-footer {
          background-color: var(--bg-pure);
          border-top: 1px solid var(--border-dark);
          padding-top: 80px;
          padding-bottom: 40px;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr 0.8fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .footer-tagline {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 320px;
          line-height: 1.5;
        }

        .footer-center {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .footer-nav-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .nav-col-title {
          font-size: 0.7rem;
          color: var(--accent-green);
          margin-bottom: 6px;
        }

        .footer-nav-link {
          background: none;
          border: none;
          text-align: left;
          font-size: 0.9rem;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0;
          transition: color 0.2s ease;
        }

        .footer-nav-link:hover {
          color: var(--accent-green);
        }

        .footer-right {
          display: flex;
          flex-direction: column;
        }

        .spec-card {
          background-color: var(--bg-warm);
          border: 1px solid var(--border-light);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mt-12 {
          margin-top: 12px;
        }

        .spec-val {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--accent-charcoal);
        }

        .footer-bottom-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 32px;
          border-top: 1px solid var(--border-light);
          flex-wrap: wrap;
          gap: 16px;
        }

        .copyright-text {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--accent-charcoal);
          font-weight: 600;
        }

        .legal-disclaimer {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-light);
          max-width: 600px;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </footer>
  );
}
