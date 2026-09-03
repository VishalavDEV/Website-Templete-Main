import { Link } from 'react-router-dom';
import { GraduationCap, ExternalLink, AtSign, Play, MessageSquare, Heart } from 'lucide-react';

const footerLinks = {
  Platform: [
    { label: 'About', to: '/about' },
    { label: 'Courses', to: '/courses' },
    { label: 'Instructors', to: '/instructors' },
    { label: 'Resources', to: '/resources' },
  ],
  Support: [
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
    { label: 'Testimonials', to: '/testimonials' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms & Conditions', to: '/terms' },
  ],
};

const socialLinks = [
  { icon: ExternalLink, href: '#', label: 'LinkedIn' },
  { icon: AtSign, href: '#', label: 'Instagram' },
  { icon: Play, href: '#', label: 'YouTube' },
  { icon: MessageSquare, href: '#', label: 'X / Twitter' },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="navbar-logo-icon">
                <GraduationCap size={20} />
              </div>
              EduLearn
            </div>
            <p className="footer-tagline">
              Empowering learners worldwide with premium courses, expert instructors, 
              and practical skills that open doors to new opportunities.
            </p>
            <div className="footer-social">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} className="footer-social-link" aria-label={label} target="_blank" rel="noopener noreferrer">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="footer-col">
              <h4>{title}</h4>
              <nav className="footer-links" aria-label={`${title} links`}>
                {links.map(({ label, to }) => (
                  <Link key={label} to={to} className="footer-link">{label}</Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} EduLearn. All rights reserved.</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            Made with <Heart size={14} color="#ec4899" fill="#ec4899" /> for learners everywhere
          </span>
        </div>
      </div>
    </footer>
  );
}
