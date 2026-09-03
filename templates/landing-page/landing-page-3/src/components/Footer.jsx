import React, { useState } from 'react';
import { 
  Zap, 
  ArrowRight, 
  Github, 
  Twitter, 
  Linkedin, 
  Disc as Discord, 
  CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Footer({ onShowToast }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      if (onShowToast) onShowToast('⚠️ Please enter a valid email address');
      return;
    }

    setIsSubscribed(true);
    confetti({
      particleCount: 55,
      spread: 65,
      origin: { y: 0.9 },
      colors: ['#00E5FF', '#8A2BE2', '#00FFA3']
    });

    if (onShowToast) {
      onShowToast(`📬 Subscribed ${newsletterEmail} to Synapse Engineering Dispatch!`);
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        position: 'relative',
        background: '#030407',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '86px',
        paddingBottom: '44px',
        overflow: 'hidden',
      }}
    >
      <div className="section-wrapper" style={{ padding: '0 24px', maxWidth: '1280px', margin: '0 auto' }}>
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          {/* Brand & Mission */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.25), rgba(138, 43, 226, 0.35))',
                  border: '1px solid rgba(0, 229, 255, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 16px rgba(0, 229, 255, 0.3)',
                }}
              >
                <Zap size={18} color="#00E5FF" />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.28rem',
                  letterSpacing: '0.08em',
                  color: '#FFFFFF',
                }}
              >
                SYNAPSE
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '24px' }}>
              The hyper-dimensional neural fabric powering real-time spatial cognition, sub-millisecond inference, and planetary-scale autonomous systems.
            </p>

            {/* Live Operational Status Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '100px',
                background: 'rgba(0, 255, 163, 0.08)',
                border: '1px solid rgba(0, 255, 163, 0.25)',
                fontSize: '0.74rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--neon-emerald)',
              }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00FFA3', boxShadow: '0 0 6px #00FFA3' }} />
              <span>ALL 250+ EDGES OPERATIONAL</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 style={{ fontSize: '0.88rem', fontFamily: 'var(--font-mono)', color: '#FFFFFF', letterSpacing: '0.08em', marginBottom: '20px' }}>
              ARCHITECTURE
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              {['About', 'Features', 'Services', 'Why Us', 'Playground'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={(e) => handleNavClick(e, `#${item.toLowerCase().replace(' ', '-')}`)}
                    style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--neon-cyan)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers & Docs */}
          <div>
            <h4 style={{ fontSize: '0.88rem', fontFamily: 'var(--font-mono)', color: '#FFFFFF', letterSpacing: '0.08em', marginBottom: '20px' }}>
              DEVELOPER HUB
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {['SDK Documentation', 'REST & gRPC APIs', 'Model Registry', 'CLI Reference', 'Benchmark Reports'].map((item) => (
                <li key={item}>
                  <a
                    href="#hero"
                    style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--neon-cyan)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Input */}
          <div>
            <h4 style={{ fontSize: '0.88rem', fontFamily: 'var(--font-mono)', color: '#FFFFFF', letterSpacing: '0.08em', marginBottom: '12px' }}>
              ENGINEERING DISPATCH
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '18px' }}>
              Bi-weekly technical breakdowns on spatial AI, distributed GPU kernels, and compiler breakthroughs.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '11px 14px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#FFFFFF',
                    fontSize: '0.86rem',
                    outline: 'none',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--neon-cyan)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                />
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: '11px 16px', borderRadius: '10px' }}
                  aria-label="Subscribe"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--neon-emerald)', fontSize: '0.86rem' }}>
                <CheckCircle2 size={16} />
                <span>Subscribed successfully!</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '34px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            fontSize: '0.84rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} SYNAPSE INC. ALL RIGHTS RESERVED. ZERO-LATENCY PROTOCOL.
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {[
              { icon: Github, label: 'GitHub' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Discord, label: 'Discord' },
              { icon: Linkedin, label: 'LinkedIn' },
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href="#hero"
                  aria-label={social.label}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94A3B8',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = 'var(--neon-cyan)';
                    e.currentTarget.style.boxShadow = '0 0 14px rgba(0, 229, 255, 0.35)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#94A3B8';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
