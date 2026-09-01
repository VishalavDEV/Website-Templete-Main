import "./Footer.css";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Profile", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer__main">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__monogram" aria-label="ME monogram">ME</div>
          <div className="footer__brand-text">
            <span className="footer__name">Dr. Maya Ellison</span>
            <span className="footer__role">Consultant Cardiologist</span>
          </div>
          <p className="footer__brand-desc">
            Preventive Cardiology &amp; Cardiovascular Medicine.<br />
            Based in Melbourne, Australia.
          </p>
        </div>

        {/* Quick links */}
        <div className="footer__links-col">
          <div className="footer__col-title">Quick Links</div>
          <nav aria-label="Footer navigation">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer__link"
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Social */}
        <div className="footer__social-col">
          <div className="footer__col-title">Connect</div>
          <div className="footer__social-links">
            <a href="#" className="footer__social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a href="mailto:maya.ellison@example.com" className="footer__social-link" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span className="footer__copyright">© 2026 Dr. Maya Ellison</span>
          <span className="footer__disclaimer">
            This website is a fictional Resume/CV template demonstration. All names, organisations, qualifications, projects, and content are fictional.
          </span>
        </div>
      </div>
    </footer>
  );
}
