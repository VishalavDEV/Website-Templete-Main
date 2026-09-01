import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { LinkedinIcon, TwitterIcon, InstagramIcon, GithubIcon } from './SocialIcons';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="luxury-footer">
      <div className="footer-glow-light" />

      {/* Top Brand Statement & Editorial Newsletter Bar */}
      <div className="container footer-top-container">
        <div className="footer-statement-grid">
          {/* Brand Manifesto */}
          <div className="footer-manifesto">
            <div className="footer-brand-lockup">
              <div className="footer-symbol">
                <svg viewBox="0 0 28 28" width="22" height="22" fill="none">
                  <path d="M14 2L26 8.5V21.5L14 28L2 21.5V8.5L14 2Z" stroke="#5B8CFF" strokeWidth="1.75" />
                  <circle cx="14" cy="15" r="2.5" fill="#7CA7FF" />
                </svg>
              </div>
              <span className="footer-brand-wordmark">NEXORA</span>
            </div>

            <div className="footer-tagline-statement">
              Technology.<br />
              Strategy.<br />
              Impact.
            </div>

            <p className="footer-vision-text">
              Engineering cognitive AI, resilient cloud platforms, and enterprise digital solutions for global industry leaders.
            </p>
          </div>

          {/* Luxury Newsletter Input */}
          <div className="footer-newsletter-column">
            <span className="newsletter-eyebrow">THE ENTERPRISE SIGNAL</span>
            <h4 className="newsletter-heading">Bi-weekly engineering briefs on autonomous AI & zero-trust cloud.</h4>

            {subscribed ? (
              <div className="newsletter-success-box">
                <CheckCircle2 size={18} />
                <span>You're subscribed to The Enterprise Signal.</span>
              </div>
            ) : (
              <form className="luxury-newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  required
                  placeholder="Your enterprise work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="luxury-news-input"
                />
                <button type="submit" className="luxury-news-submit">
                  <span>Subscribe</span>
                  <ArrowUpRight size={16} />
                </button>
              </form>
            )}

            <div className="footer-cert-badge">
              <ShieldCheck size={16} className="cert-shield" />
              <span>SOC2 Type II • ISO 27001 Certified Practice</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Directory Links */}
      <div className="container footer-directory-container">
        <div className="footer-nav-grid">
          {/* Company */}
          <div className="footer-nav-col">
            <h5 className="footer-col-header">Company</h5>
            <ul className="footer-menu">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/team">Leadership & Team</Link></li>
              <li><Link to="/careers">Careers <span className="footer-pill-tag">Hiring</span></Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-nav-col">
            <h5 className="footer-col-header">Services</h5>
            <ul className="footer-menu">
              <li><Link to="/services/artificial-intelligence">AI & Automation</Link></li>
              <li><Link to="/services/software-engineering">Software Engineering</Link></li>
              <li><Link to="/services/cloud-transformation">Cloud Modernization</Link></li>
              <li><Link to="/services/cybersecurity">Cybersecurity & Zero Trust</Link></li>
              <li><Link to="/services/data-analytics">Data & Analytics</Link></li>
              <li><Link to="/services/digital-transformation">Digital Strategy</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="footer-nav-col">
            <h5 className="footer-col-header">Industries</h5>
            <ul className="footer-menu">
              <li><Link to="/industries">Financial Services</Link></li>
              <li><Link to="/industries">Healthcare & Life Sciences</Link></li>
              <li><Link to="/industries">Retail & eCommerce</Link></li>
              <li><Link to="/industries">Manufacturing 4.0</Link></li>
              <li><Link to="/industries">Logistics & Supply Chain</Link></li>
              <li><Link to="/industries">Technology & SaaS</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-nav-col">
            <h5 className="footer-col-header">Resources</h5>
            <ul className="footer-menu">
              <li><Link to="/blog">Executive Insights</Link></li>
              <li><Link to="/work">Case Studies</Link></li>
              <li><Link to="/solutions">Enterprise Solutions</Link></li>
              <li><Link to="/contact">Architecture Review</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-nav-col">
            <h5 className="footer-col-header">Connect</h5>
            <div className="footer-social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-soc-btn" aria-label="LinkedIn">
                <LinkedinIcon size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-soc-btn" aria-label="Twitter / X">
                <TwitterIcon size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-soc-btn" aria-label="Instagram">
                <InstagramIcon size={16} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-soc-btn" aria-label="GitHub">
                <GithubIcon size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container footer-bottom-container">
        <div className="footer-bottom-flex">
          <p className="footer-copy-text">
            © 2026 NEXORA Technologies Inc. All rights reserved.
          </p>
          <div className="footer-legal-row">
            <Link to="/contact">Privacy Policy</Link>
            <span className="legal-sep">•</span>
            <Link to="/contact">Terms of Service</Link>
            <span className="legal-sep">•</span>
            <Link to="/contact">Security Whitepaper</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
