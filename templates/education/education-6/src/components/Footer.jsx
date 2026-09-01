import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { contentData } from '../data/content';

/**
 * Footer component including contact details, quick links,
 * social media icons, and a newsletter subscription form.
 */
export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { contact, navigation, institution } = contentData;

  const handleSubscribe = (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email address is required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Simulate API subscription call
    setSubmitted(true);
    setEmail('');
  };

  // Helper to render dynamic Lucide social icons
  const renderSocialIcon = (iconName) => {
    const IconComp = Icons[iconName];
    return IconComp ? <IconComp size={20} /> : null;
  };

  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        {/* Info Column */}
        <div className="footer-col info-col">
          <div className="footer-logo">
            <Icons.GraduationCap size={28} className="logo-icon" />
            <span>{institution.logoText}</span>
          </div>
          <p className="footer-tagline">{institution.tagline}</p>
          <div className="footer-socials">
            {contact.socials.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.name}
                className="social-btn"
              >
                {renderSocialIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>

        {/* Links Column */}
        <div className="footer-col links-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {navigation.links.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col contact-col">
          <h4>Contact Us</h4>
          <ul className="footer-contact-details">
            <li>
              <Icons.MapPin size={18} className="contact-icon" />
              <span>{contact.address}</span>
            </li>
            <li>
              <Icons.Phone size={18} className="contact-icon" />
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </li>
            <li>
              <Icons.Mail size={18} className="contact-icon" />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <Icons.Clock size={18} className="contact-icon" />
              <span>{contact.hours}</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="footer-col newsletter-col">
          <h4>Stay Updated</h4>
          <p>Subscribe to our monthly newsletter for campus news, events, and course updates.</p>
          {submitted ? (
            <div className="newsletter-success">
              <Icons.CheckCircle size={18} />
              <span>Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="newsletter-input-group">
                <input 
                  type="email" 
                  className="form-input newsletter-input" 
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-secondary newsletter-submit" aria-label="Subscribe">
                  <Icons.Send size={16} />
                </button>
              </div>
              {error && <p className="form-error">{error}</p>}
            </form>
          )}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="container flex-between bottom-container">
          <p>&copy; {new Date().getFullYear()} {institution.name}. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
