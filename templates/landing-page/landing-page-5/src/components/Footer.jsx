import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Send, CheckCircle2 } from 'lucide-react';
import { footerLinks } from '../data/landingData';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2500);
  };

  return (
    <footer
      style={{
        backgroundColor: '#171412',
        borderTop: '1px solid rgba(200, 120, 115, 0.2)',
        padding: '5.5rem 0 3rem 0',
        position: 'relative',
        overflow: 'hidden',
        color: '#f8fafc',
      }}
    >
      {/* Subtle bottom ambient rose glow */}
      <div
        className="ambient-glow ambient-rose"
        style={{ bottom: '-30%', left: '30%', width: 600, height: 600, opacity: 0.25 }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3.5rem',
            marginBottom: '4.5rem',
          }}
        >
          {/* Brand Info & Newsletter (5 Columns) */}
          <div style={{ gridColumn: 'span 5' }} className="footer-brand-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: 'linear-gradient(135deg, #c87873, #dfba89)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}
              >
                <Layers size={20} />
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
                AURA<span style={{ color: '#c87873' }}>FLOW</span>
              </span>
            </div>

            <p style={{ color: '#a8a096', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 380, marginBottom: '2rem' }}>
              The high-velocity React atmospheric motion framework empowering visionary product teams to craft luxurious, fluid, and memorable digital spaces.
            </p>

            {/* Newsletter Input Form */}
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.75rem' }}>
                Join our architectural release dispatch
              </div>

              {subscribed ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontSize: '0.9rem', padding: '0.5rem 0' }}>
                  <CheckCircle2 size={18} />
                  <span>You're subscribed to weekly design & engineering releases!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem', maxWidth: 400 }}>
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter professional email..."
                    style={{
                      flex: 1,
                      padding: '0.75rem 1.15rem',
                      borderRadius: 12,
                      background: 'rgba(255, 255, 255, 0.07)',
                      border: '1px solid rgba(200, 120, 115, 0.25)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                  <button type="submit" className="btn-primary" style={{ padding: '0.75rem 1.25rem', borderRadius: 12 }}>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Links Columns (7 Columns) */}
          <div style={{ gridColumn: 'span 7' }} className="footer-links-col">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '2.5rem',
              }}
            >
              {/* Services */}
              <div>
                <h5 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#dfba89', marginBottom: '1.25rem' }}>
                  Services
                </h5>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {footerLinks.services.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} style={{ color: '#a8a096', fontSize: '0.9rem', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#c87873')} onMouseLeave={(e) => (e.currentTarget.style.color = '#a8a096')}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h5 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#dfba89', marginBottom: '1.25rem' }}>
                  Solutions
                </h5>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {footerLinks.solutions.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} style={{ color: '#a8a096', fontSize: '0.9rem', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#c87873')} onMouseLeave={(e) => (e.currentTarget.style.color = '#a8a096')}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h5 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#dfba89', marginBottom: '1.25rem' }}>
                  Resources
                </h5>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {footerLinks.resources.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} style={{ color: '#a8a096', fontSize: '0.9rem', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#c87873')} onMouseLeave={(e) => (e.currentTarget.style.color = '#a8a096')}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h5 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#dfba89', marginBottom: '1.25rem' }}>
                  Company
                </h5>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {footerLinks.company.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} style={{ color: '#a8a096', fontSize: '0.9rem', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#c87873')} onMouseLeave={(e) => (e.currentTarget.style.color = '#a8a096')}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div
          style={{
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            fontSize: '0.875rem',
            color: '#857d74',
          }}
        >
          <div>
            © {new Date().getFullYear()} AuraFlow Systems Inc. All rights reserved. Featuring Rose Gold Aura architecture.
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {[
              { name: 'X / Twitter', icon: '𝕏', href: '#' },
              { name: 'GitHub', icon: '⌘', href: '#' },
              { name: 'Discord', icon: '❖', href: '#' },
              { name: 'LinkedIn', icon: 'in', href: '#' },
            ].map((s, idx) => (
              <motion.a
                key={idx}
                href={s.href}
                whileHover={{ y: -3, scale: 1.15, color: '#c87873', borderColor: '#c87873' }}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(200, 120, 115, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#d4cec5',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-brand-col {
            grid-column: span 12 !important;
          }
          .footer-links-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </footer>
  );
}
