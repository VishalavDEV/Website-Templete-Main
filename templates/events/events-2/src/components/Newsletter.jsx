import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SpecularButton } from './SpecularButton';
import '../styles/cards.css';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '50px 40px',
            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(6, 182, 212, 0.15) 100%)',
            border: '1px solid rgba(124, 58, 237, 0.3)',
            borderRadius: 'var(--radius-xl)',
            textAlign: 'center',
            boxShadow: 'var(--shadow-purple)'
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(124, 58, 237, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-cyan)',
              margin: '0 auto 20px auto'
            }}
          >
            <Mail size={28} />
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '12px' }}>Stay in the Loop</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 32px auto' }}>
            Get early speaker announcements, discount pass codes, and technical summit agenda releases delivered directly to your inbox.
          </p>

          {subscribed ? (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 28px',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid var(--accent-emerald)',
                borderRadius: 'var(--radius-full)',
                color: 'var(--accent-emerald)',
                fontWeight: 700,
                fontSize: '1rem'
              }}
            >
              <CheckCircle2 size={20} /> Thank you for subscribing to CYBERNEXUS Updates!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ maxWidth: '520px', margin: '0 auto', position: 'relative' }}>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <input
                  type="email"
                  placeholder="Enter your corporate email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    minWidth: '260px',
                    padding: '16px 22px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(9, 10, 15, 0.8)',
                    border: '1px solid var(--border-light)',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
                <SpecularButton
                  type="submit"
                  size="md"
                  radius={999}
                  lineColor="#00f2fe"
                  baseColor="#7c3aed"
                  textColor="#ffffff"
                  tint="#7c3aed"
                  tintOpacity={0.25}
                  autoAnimate
                  onClick={handleSubscribe}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    Subscribe <ArrowRight size={16} />
                  </span>
                </SpecularButton>
              </div>
              {error && <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '10px' }}>{error}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
