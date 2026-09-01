import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer style={{
      background: '#060608',
      borderTop: '2px solid rgba(255, 230, 0, 0.2)',
      paddingTop: '5rem',
      paddingBottom: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div className="navbar-logo-icon">VF</div>
              <div className="navbar-logo-text">
                VORTEX FORGE
                <span>FITNESS ARENA</span>
              </div>
            </div>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              "Train hard. Rise higher. Pushing athletes beyond physical limits in strength, endurance, and discipline."
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {['Instagram', 'Facebook', 'YouTube', 'X'].map((social) => (
                <a
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '4px',
                    background: 'var(--color-bg-card)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-yellow)',
                    fontSize: '0.85rem',
                    fontWeight: '800',
                    textDecoration: 'none',
                    transition: '0.3s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-yellow)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'none'; }}
                >
                  {social.substring(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1.2rem', marginBottom: '1.5rem', letterSpacing: '1px' }}>
              QUICK LINKS
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Gym Facilities', path: '/gym' },
                { name: 'Training Programs', path: '/programs' },
                { name: 'Class Timetable', path: '/classes' },
                { name: 'Iron Ascent 2026', path: '/event' },
                { name: 'Pricing & Packages', path: '/pricing' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{
                      color: 'var(--color-text-muted)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: '0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-yellow)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
                  >
                    ▸ {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1.2rem', marginBottom: '1.5rem', letterSpacing: '1px' }}>
              SUPPORT & EVENT
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'FAQ', path: '/faq' },
                { name: 'Leaderboard', path: '/leaderboard' },
                { name: 'Transformation', path: '/transformation' },
                { name: 'Nutrition Guide', path: '/nutrition' },
                { name: 'Terms & Conditions', path: '/faq' },
                { name: 'Privacy Policy', path: '/faq' },
                { name: 'Event Rules', path: '/event' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{
                      color: 'var(--color-text-muted)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: '0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-yellow)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
                  >
                    ▸ {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1.2rem', marginBottom: '1.5rem', letterSpacing: '1px' }}>
              JOIN THE FORGE
            </h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
              Subscribe to get exclusive training updates, event schedules, and fitness tips directly to your inbox.
            </p>
            {subscribed ? (
              <div style={{ background: 'rgba(255,230,0,0.15)', border: '1px solid var(--color-yellow)', color: 'var(--color-yellow)', padding: '0.8rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                ✓ Subscribed successfully! Welcome to the Forge.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    padding: '0.8rem 1rem',
                    background: 'var(--color-bg-card)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#FFF',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
                <Button type="submit" variant="primary" style={{ padding: '0.75rem' }}>
                  SUBSCRIBE
                </Button>
              </form>
            )}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
            © 2026 Vortex Forge Fitness. All Rights Reserved. Built for Iron Ascent 2026.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
            <Link to="/faq" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/faq" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
