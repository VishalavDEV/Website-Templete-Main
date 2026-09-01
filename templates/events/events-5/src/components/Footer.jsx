import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-carbon" style={{
      color: '#b9c0c5',
      borderTop: '1px solid rgba(124, 255, 79, 0.2)',
      paddingTop: '80px',
      paddingBottom: '30px',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: '#111417',
                border: '1px solid #7cff4f',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(124, 255, 79, 0.3)'
              }}>
                <Droplet size={24} style={{ color: '#7cff4f' }} />
              </div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.4rem', fontWeight: '900', color: '#f5f7f8', letterSpacing: '0.08em', lineHeight: 1 }}>
                  AQUAVEXA
                </div>
                <div style={{ fontSize: '0.65rem', fontWeight: '800', letterSpacing: '0.3em', color: '#7cff4f', textTransform: 'uppercase', marginTop: '2px' }}>
                  AUTO SPA
                </div>
              </div>
            </Link>

            <p style={{ fontSize: '0.92rem', color: '#b9c0c5', marginBottom: '20px', lineHeight: '1.6' }}>
              “Wash. Restore. Transform.”<br />
              Premium Care for Every Drive. Master auto wash, detailing, ceramic coating & paint studio.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="footer-title">COMPANY</h4>
            <div className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/equipment">Equipment</Link>
              <Link to="/contact">Careers</Link>
              <Link to="/gallery">Gallery</Link>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="footer-title">SERVICES</h4>
            <div className="footer-links">
              <Link to="/services">Car Wash</Link>
              <Link to="/services">Detailing</Link>
              <Link to="/services">Ceramic Coating</Link>
              <Link to="/services">Paint Correction</Link>
              <Link to="/paint">Painting Studio</Link>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="footer-title">EXPLORE</h4>
            <div className="footer-links">
              <Link to="/pricing">Pricing Tiers</Link>
              <Link to="/paint">Paint Studio</Link>
              <Link to="/cars">Car Brands</Link>
              <Link to="/offers">Offers</Link>
              <Link to="/contact">FAQ</Link>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="footer-title">CONTACT</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <MapPin size={16} color="#7cff4f" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>45 Velocity Avenue, Aurora Industrial District</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Phone size={16} color="#25bfff" style={{ flexShrink: 0 }} />
                <span>+91 90000 45678</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Mail size={16} color="#7cff4f" style={{ flexShrink: 0 }} />
                <span>hello@aquavexa.example</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Clock size={16} color="#25bfff" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>Mon-Sat: 8AM - 8PM<br />Sun: 9AM - 6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '30px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.82rem'
        }}>
          <div>
            © 2026 AQUAVEXA AUTO SPA. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: '#b9c0c5' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#b9c0c5' }}>Terms of Service</a>
            <a href="#" style={{ color: '#b9c0c5' }}>Cookie Policy</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-title {
          font-family: 'Space Grotesk', sans-serif;
          color: #f5f7f8;
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
          border-bottom: 2px solid #7cff4f;
          display: inline-block;
          padding-bottom: 4px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 0.9rem;
        }

        .footer-links a {
          color: #b9c0c5;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .footer-links a:hover {
          color: #7cff4f;
          transform: translateX(4px);
        }

        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: #111417;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #f5f7f8;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .social-icon:hover {
          background: #7cff4f;
          color: #07090b;
          box-shadow: 0 0 15px rgba(124, 255, 79, 0.4);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
