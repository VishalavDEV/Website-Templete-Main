import React, { useState } from 'react';
import { Cpu, Send, CheckCircle2 } from 'lucide-react';
import { LinkedInIcon, TwitterIcon, GitHubIcon, YouTubeIcon } from './SocialIcons';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const socialLinks = [
    { icon: LinkedInIcon, href: '#' },
    { icon: TwitterIcon, href: '#' },
    { icon: GitHubIcon, href: '#' },
    { icon: YouTubeIcon, href: '#' }
  ];

  return (
    <footer
      style={{
        background: 'rgba(5, 7, 12, 0.98)',
        borderTop: '1px solid rgba(0, 240, 255, 0.15)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 5%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '50px',
            marginBottom: '60px'
          }}
        >
          {/* Brand Col */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2) 0%, rgba(138, 43, 226, 0.3) 100%)',
                  border: '1px solid rgba(0, 240, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Cpu size={22} color="#00f0ff" />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                VERTEX
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Where Machines Learn to Move, and Ideas Learn to Scale. The international summit for bipedal robotics, quantum hardware, edge AI, and spatial XR.
            </p>

            <div style={{ display: 'flex', gap: '14px' }}>
              {socialLinks.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--glass-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-primary)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <IconComp size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
              Summit Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li><a href="#about" style={{ color: 'inherit' }}>About VERTEX</a></li>
              <li><a href="#tracks" style={{ color: 'inherit' }}>Technical Tracks</a></li>
              <li><a href="#speakers" style={{ color: 'inherit' }}>Keynotes & Speakers</a></li>
              <li><a href="#schedule" style={{ color: 'inherit' }}>Agenda Timeline</a></li>
              <li><a href="#hackathon" style={{ color: 'inherit' }}>$90K Hackathon Zone</a></li>
            </ul>
          </div>

          {/* Logistics Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
              Attendee Logistics
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li><a href="#venue" style={{ color: 'inherit' }}>Moscone Hub Venue</a></li>
              <li><a href="#venue" style={{ color: 'inherit' }}>Hotel Discounts</a></li>
              <li><a href="#gallery" style={{ color: 'inherit' }}>Visual Photo Archives</a></li>
              <li><a href="#register" style={{ color: 'inherit' }}>Pass Tier Pricing</a></li>
              <li><a href="#faq" style={{ color: 'inherit' }}>FAQs & Guidelines</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
              Summit Dispatch
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '16px' }}>
              Subscribe for keynote transcript releases, lab seating notifications, and hackathon challenge drops.
            </p>

            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)', fontSize: '0.9rem', fontWeight: 600 }}>
                <CheckCircle2 size={18} /> Subscribed to VERTEX Dispatch!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  required
                  placeholder="engineer@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid var(--glass-border)',
                    color: '#fff',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  style={{
                    padding: '10px 16px',
                    borderRadius: '10px',
                    background: 'var(--gradient-main)',
                    color: '#000',
                    fontWeight: 700,
                    border: 'none'
                  }}
                >
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.82rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © 2026 VERTEX — Robotics & Quantum Tech Summit. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit' }}>Terms of Service</a>
            <a href="#" style={{ color: 'inherit' }}>Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
