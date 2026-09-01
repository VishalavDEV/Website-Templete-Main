import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Send, CheckCircle, Github, Linkedin, Twitter, Disc as Discord, Instagram } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Challenges', path: '/challenges' },
    { name: 'Teams', path: '/teams' },
    { name: 'Mentors', path: '/mentors' },
    { name: 'Prizes', path: '/prizes' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Venue', path: '/venue' },
    { name: 'Food & Breaks', path: '/food' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Rules', path: '/rules' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer
      style={{
        backgroundColor: '#030503',
        borderTop: '1px solid rgba(0, 255, 102, 0.2)',
        paddingTop: '5rem',
        paddingBottom: '2rem',
        position: 'relative',
        zIndex: 10
      }}
      className="cyber-grid-bg"
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Col 1: Brand & Tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  backgroundColor: 'rgba(0, 255, 102, 0.15)',
                  border: '1px solid #00ff66',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00ff66',
                  boxShadow: '0 0 15px rgba(0, 255, 102, 0.3)'
                }}
              >
                <Terminal size={24} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '900', color: '#fff' }}>
                  NEXORA
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#00ff66', letterSpacing: '3px' }}>
                  AFTERDARK
                </div>
              </div>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              “CODE THROUGH THE NIGHT. BUILD WHAT'S NEXT.”
            </p>
            <p style={{ color: '#64748b', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
              24-Hour Overnight Student Hackathon<br />
              Nexora Innovation Lab, Chennai, India
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                color: '#ffffff',
                marginBottom: '1.25rem',
                borderLeft: '3px solid #00ff66',
                paddingLeft: '0.65rem'
              }}
            >
              NAVIGATION
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.6rem 1rem'
              }}
            >
              {footerLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00ff66')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  &gt; {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Newsletter & Social */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                color: '#ffffff',
                marginBottom: '1.25rem',
                borderLeft: '3px solid #00ff66',
                paddingLeft: '0.65rem'
              }}
            >
              GET EVENT UPDATES
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>
              Subscribe for announcements, schedule alerts, and track hints.
            </p>

            {subscribed ? (
              <div
                style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: 'rgba(0, 255, 102, 0.1)',
                  border: '1px solid #00ff66',
                  color: '#00ff66',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem'
                }}
              >
                <CheckCircle size={18} /> SUBSCRIBED TO NIGHT LOGS!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <input
                  type="email"
                  placeholder="hacker@college.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="cyber-input"
                  style={{ flex: 1, padding: '0.65rem 0.85rem', fontSize: '0.85rem' }}
                  required
                />
                <button type="submit" className="btn btn-primary" style={{ padding: '0.65rem 1rem' }}>
                  <Send size={16} />
                </button>
              </form>
            )}

            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#64748b', marginBottom: '0.75rem' }}>
              CONNECT WITH US:
            </h4>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: Github, link: 'https://github.com' },
                { icon: Linkedin, link: 'https://linkedin.com' },
                { icon: Twitter, link: 'https://twitter.com' },
                { icon: Discord, link: 'https://discord.com' },
                { icon: Instagram, link: 'https://instagram.com' }
              ].map((soc, idx) => {
                const IconComponent = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(0, 255, 102, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00ff66',
                      transition: 'all 0.2s ease'
                    }}
                    className="interactive"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#00ff66';
                      e.currentTarget.style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.color = '#00ff66';
                    }}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: '#64748b'
          }}
        >
          <div>© 2026 NEXORA AFTERDARK. ALL RIGHTS RESERVED.</div>
          <div style={{ color: '#00ff66' }}>“Built for builders who don't sleep.”</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
