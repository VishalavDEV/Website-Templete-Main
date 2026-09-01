import React, { useState } from 'react';
import { Zap, Mail, ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const Footer = ({ onOpenSpecsModal }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 4000);
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="footer-top-glow"></div>
      
      <div className="footer-container">
        
        {/* Top Newsletter CTA */}
        <div className="footer-newsletter-card glass-panel">
          <div className="newsletter-text-col">
            <span className="badge-tag">
              <Sparkles size={13} /> VIP SPEED LAB ACCESS
            </span>
            <h3 className="newsletter-title">BE FIRST TO ACCESS FUTURE BATCH DROPS</h3>
            <p className="newsletter-sub">
              Receive secret drop coordinates, biomechanical test whitepapers, and athlete-exclusive colorways.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="newsletter-form">
            <div className="newsletter-input-wrap">
              <Mail size={18} className="mail-icon" />
              <input 
                type="email" 
                placeholder="Enter athlete email..." 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
              />
            </div>
            <button type="submit" className="btn-primary">
              <span>{isSubscribed ? 'Subscribed ✓' : 'Join The Drop List'}</span>
              <ArrowRight size={16} />
            </button>
          </form>
        </div>

        {/* Main Footer Links Columns */}
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <span className="footer-logo-icon"><Zap size={20} /></span>
              <span className="footer-brand-name">AEROSTRIDE</span>
            </div>
            <p className="footer-manifesto">
              Pioneering hyper-propulsive running shoe engineering. Dual carbon plate mechanics built to shatter PRs on every marathon course.
            </p>
            <div className="footer-badges">
              <span className="badge-pill-outline">World Athletics Approved</span>
              <span className="badge-pill-outline">Zero-Carbon Logistics</span>
            </div>
          </div>

          {/* Footwear Collections */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Collections</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">AEROSTRIDE X-PRO</a></li>
              <li><a href="#hero">Tempo Carbon Racer</a></li>
              <li><a href="#hero">Night-Vision Series</a></li>
              <li><a href="#hero">Marathon Elite Singlets</a></li>
              <li><a href="#hero">Nano-Grip Socks</a></li>
            </ul>
          </div>

          {/* Speed Lab & Innovation */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Innovation Lab</h4>
            <ul className="footer-links-list">
              <li><a href="#motion-lab">360° Biomechanics Lab</a></li>
              <li><a href="#technology">Carbon FlightPlate™ 3.0</a></li>
              <li><a href="#technology">Supercritical NitroFoam</a></li>
              <li><button onClick={onOpenSpecsModal} className="link-button">UI/UX Architecture Deliverables</button></li>
              <li><a href="#reviews">Athlete Race Reports</a></li>
            </ul>
          </div>

          {/* Support & Athletes */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Athlete Support</h4>
            <ul className="footer-links-list">
              <li><a href="#showcase">Size Guide & Fit Estimator</a></li>
              <li><a href="#hero">30-Day Road Trial Terms</a></li>
              <li><a href="#hero">2-Year Carbon Plate Warranty</a></li>
              <li><a href="#hero">Worldwide Order Tracking</a></li>
              <li><a href="#hero">Sustainability Report 2026</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-text font-mono">
            © 2026 AEROSTRIDE LABS INC. ALL RIGHTS RESERVED.
          </div>
          <div className="footer-bottom-links">
            <a href="#hero">Privacy Policy</a>
            <span>•</span>
            <a href="#hero">Terms of Service</a>
            <span>•</span>
            <a href="#hero">Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
