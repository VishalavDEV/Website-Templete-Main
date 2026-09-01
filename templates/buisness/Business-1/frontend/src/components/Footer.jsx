import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Send } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';
import { apiService } from '../utils/api';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await apiService.submitNewsletter(email);
      setStatus({ type: 'success', message: res.message });
      setEmail('');
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please check your email and try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <Zap className="logo-icon" />
            <span>ABC Business</span>
          </Link>
          <p className="footer-desc">
            Building premium digital platforms, automated business operations, and futuristic technology infrastructures.
          </p>
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="Github"><GithubIcon size={18} /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><TwitterIcon size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="Linkedin"><LinkedinIcon size={18} /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon size={18} /></a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/pricing">Pricing Plan</Link>
            <Link to="/blog">Blog & Insights</Link>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <Link to="/services">All Services</Link>
            <Link to="/services/digital-transformation">Digital Shift</Link>
            <Link to="/services/software-development">App Development</Link>
            <Link to="/services/cloud-solutions">Cloud Services</Link>
          </div>

          <div className="footer-col">
            <h4>Solutions</h4>
            <Link to="/solutions">B2B Strategy</Link>
            <Link to="/projects">Case Studies</Link>
            <Link to="/contact">Support Center</Link>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Subscribe to Insights</h4>
          <p>Get our latest weekly analysis on modern technology trends and corporate operations.</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
            <button type="submit" className="btn btn-primary newsletter-btn" disabled={loading} aria-label="Subscribe">
              <Send size={14} />
            </button>
          </form>
          {status.message && (
            <p className={`newsletter-status ${status.type}`}>
              {status.message}
            </p>
          )}
        </div>
      </div>

      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} ABC Business Solutions. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
