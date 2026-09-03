import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Mail, Phone, MapPin, Send, Heart } from 'lucide-react';

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const Github = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed successfully! Thank you for staying updated.");
    e.target.reset();
  };

  return (
    <footer style={{
      background: 'var(--bg-dark)',
      color: 'rgba(255, 255, 255, 0.8)',
      paddingTop: '6rem',
      paddingBottom: '2.5rem',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(249, 115, 22, 0.15)'
    }}>
      
      {/* Decorative Glow elements */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(249, 115, 22, 0.1)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        
        {/* Footer Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr 0.8fr 1.2fr',
          gap: '3rem',
          marginBottom: '4rem'
        }} className="footer-grid">
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <div style={{
                background: 'var(--primary-gradient)',
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Sparkles size={16} color="#FFF" />
              </div>
              <span style={{
                fontFamily: 'var(--font-title)',
                fontWeight: 800,
                fontSize: '1.25rem',
                color: '#FFF'
              }}>
                OranGrow
              </span>
            </div>
            
            <p style={{
              fontSize: '0.9rem',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '1.5rem'
            }}>
              Helping ambitious businesses grow through innovative strategic advice, bleeding-edge web applications, brand refreshes, and conversion audits.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[
                { icon: <Linkedin size={18} />, url: 'https://linkedin.com' },
                { icon: <Twitter size={18} />, url: 'https://twitter.com' },
                { icon: <Github size={18} />, url: 'https://github.com' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFF',
                    cursor: 'pointer'
                  }}
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--primary)', borderColor: 'var(--primary)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links: Services */}
          <div>
            <h4 style={{ color: '#FFF', marginBottom: '1.5rem', fontFamily: 'var(--font-title)' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
              <Link to="/services" className="footer-link">Consulting</Link>
              <Link to="/services" className="footer-link">Digital Transformation</Link>
              <Link to="/services" className="footer-link">App Engineering</Link>
              <Link to="/services" className="footer-link">Brand Identity</Link>
              <Link to="/services" className="footer-link">Business Analytics</Link>
            </div>
          </div>

          {/* Links: Company */}
          <div>
            <h4 style={{ color: '#FFF', marginBottom: '1.5rem', fontFamily: 'var(--font-title)' }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/team" className="footer-link">Our Team</Link>
              <Link to="/projects" className="footer-link">Projects Portfolio</Link>
              <Link to="/testimonials" className="footer-link">Client Reviews</Link>
              <Link to="/faq" className="footer-link">FAQs</Link>
            </div>
          </div>

          {/* Newsletter / Contact details */}
          <div>
            <h4 style={{ color: '#FFF', marginBottom: '1.5rem', fontFamily: 'var(--font-title)' }}>Get Insights</h4>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '1.25rem' }}>
              Subscribe to our monthly advisory newsletter to double your conversions.
            </p>
            
            <form onSubmit={handleSubscribe} style={{ position: 'relative', marginBottom: '1.5rem' }}>
              <input
                type="email"
                required
                placeholder="Your email address"
                style={{
                  width: '100%',
                  padding: '0.8rem 3rem 0.8rem 1rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#FFF',
                  fontSize: '0.85rem'
                }}
                className="newsletter-input"
              />
              <button
                type="submit"
                style={{
                  position: 'absolute',
                  right: '4px',
                  top: '4px',
                  bottom: '4px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--primary-gradient)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFF',
                  cursor: 'pointer'
                }}
              >
                <Send size={14} />
              </button>
            </form>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} color="var(--primary)" /> info@orangrow.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={14} color="var(--primary)" /> Silicon Valley, CA
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr style={{ border: 'none', height: '1px', background: 'rgba(255, 255, 255, 0.1)', marginBottom: '2rem' }} />

        {/* Footer Bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: 'rgba(255, 255, 255, 0.5)'
        }}>
          <div>
            © {currentYear} OranGrow Consultants. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Built with <Heart size={14} color="var(--primary)" fill="var(--primary)" /> for modern business success.
          </div>
        </div>

      </div>

      <style>{`
        .footer-link {
          color: rgba(255, 255, 255, 0.6);
          transition: var(--transition-fast);
        }
        .footer-link:hover {
          color: var(--primary);
          padding-left: 4px;
        }
        .newsletter-input:focus {
          border-color: var(--primary) !important;
          box-shadow: 0 0 8px rgba(249, 115, 22, 0.3);
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
