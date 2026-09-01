/**
 * Footer — Site footer with quick links, contact, social icons, and newsletter.
 * @prop {Object} siteInfo
 * @prop {Array} footerLinks - Array of { heading, links[] }
 * @prop {Array} socialLinks - Array of { platform, icon, url }
 */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Globe, Share2, Camera, Rss, Play, Send } from 'lucide-react';
import styles from './Footer.module.css';

// lucide-react v0.400+ removed brand icons; map to generic equivalents
const socialIconMap = {
  Twitter: Globe,
  Facebook: Share2,
  Instagram: Camera,
  Linkedin: Rss,
  Youtube: Play,
};

const Footer = ({ siteInfo, footerLinks, socialLinks }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(''); }
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={['container', styles.top].join(' ')}>
        {/* Brand column */}
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <div className={styles.logoIcon}>
              <GraduationCap size={26} color="white" aria-hidden="true" />
            </div>
            <span className={styles.brandName}>{siteInfo.institutionName}</span>
          </div>
          <p className={styles.tagline}>{siteInfo.tagline}</p>
          <address className={styles.contact}>
            <span>{siteInfo.address}</span>
            <a href={`tel:${siteInfo.phone}`}>{siteInfo.phone}</a>
            <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
          </address>
          <div className={styles.socials} aria-label="Social media links">
            {socialLinks.map(s => {
              const Icon = socialIconMap[s.icon];
              return Icon ? (
                <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer"
                   aria-label={s.platform} className={styles.socialIcon}>
                  <Icon size={16} />
                </a>
              ) : null;
            })}
          </div>
        </div>

        {/* Link columns */}
        {footerLinks.map(col => (
          <div key={col.heading} className={styles.linkCol}>
            <h3 className={styles.colHeading}>{col.heading}</h3>
            <ul>
              {col.links.map(l => (
                <li key={l.label}>
                  <Link to={l.path} className={styles.footerLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <h3 className={styles.colHeading}>Stay Updated</h3>
          <p>Subscribe for news, events, and programme announcements.</p>
          {submitted ? (
            <p className={styles.success}>✓ Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleNewsletter} className={styles.form}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                className={styles.input}
                required
              />
              <button type="submit" className={styles.sendBtn} aria-label="Subscribe">
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} {siteInfo.institutionName}. All rights reserved.</p>
          <ul className={styles.legalLinks}>
            <li><Link to="/pages">Privacy Policy</Link></li>
            <li><Link to="/pages">Terms of Use</Link></li>
            <li><Link to="/pages">Accessibility</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  siteInfo: PropTypes.object.isRequired,
  footerLinks: PropTypes.array.isRequired,
  socialLinks: PropTypes.array.isRequired,
};

export default Footer;
