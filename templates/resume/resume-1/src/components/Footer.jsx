// src/components/Footer.jsx
import { personalInfo, navLinks } from '../data/resumeData';
import Icons from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const leftLinks  = navLinks.slice(0, 4);
  const rightLinks = navLinks.slice(4);

  return (
    <footer className="t1-footer" role="contentinfo" aria-label="Site footer">
      <div className="t1-container">
        <div className="t1-footer-inner">
          {/* Brand */}
          <div>
            <div className="t1-footer-logo-mark" aria-hidden="true">
              {personalInfo.initials}
            </div>
            <div className="t1-footer-name">{personalInfo.name}</div>
            <p className="t1-footer-tagline">
              Software Engineer &amp; Full Stack Developer.<br />
              Building impactful digital products with precision and purpose.
            </p>
            <div className="t1-footer-social" aria-label="Social media links">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="t1-footer-social-link" aria-label="LinkedIn" id="t1-footer-linkedin">
                {Icons.linkedin}
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="t1-footer-social-link" aria-label="GitHub" id="t1-footer-github">
                {Icons.github}
              </a>
              <a href={`mailto:${personalInfo.email}`}
                className="t1-footer-social-link" aria-label="Email" id="t1-footer-email">
                {Icons.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="t1-footer-col-title">Navigation</div>
            <ul className="t1-footer-nav-list" role="list">
              {leftLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <div className="t1-footer-col-title">More</div>
            <ul className="t1-footer-nav-list" role="list">
              {rightLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={personalInfo.cvFile} download="Jordan_Davis_CV.pdf" aria-label="Download CV">
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="t1-footer-bottom">
          <p className="t1-footer-copyright">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <div className="t1-footer-bottom-links">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
