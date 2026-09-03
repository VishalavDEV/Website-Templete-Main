import React, { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import { Radio, Check } from 'lucide-react';

export const SignalSignup: React.FC = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsSubscribed(true);
    showToast('SUBSCRIBED TO THE SIGNAL', 'accent');
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-on-dark)',
        padding: '60px 5vw',
        borderTop: '1px solid var(--border-dark)',
        borderBottom: '1px solid var(--border-dark)'
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--coral)',
            fontFamily: 'var(--font-grotesk)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            marginBottom: '1rem'
          }}
        >
          <Radio size={14} />
          <span>17 — TRANSMISSION SUBSCRIPTION</span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 400,
            marginBottom: '1rem',
            color: 'var(--bg-light)'
          }}
        >
          JOIN THE SIGNAL
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-grotesk)',
            fontSize: '0.95rem',
            color: 'var(--lavender)',
            marginBottom: '2.5rem',
            lineHeight: 1.6
          }}
        >
          New releases. Private sessions. Unexpected transmissions.
        </p>

        {isSubscribed ? (
          <div
            style={{
              padding: '24px',
              backgroundColor: 'rgba(215, 107, 74, 0.15)',
              border: '1px solid var(--accent-warm)',
              borderRadius: '4px',
              animation: 'fadeIn 0.3s ease-out'
            }}
          >
            <Check size={28} style={{ color: 'var(--coral)', margin: '0 auto 8px auto' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--bg-light)' }}>
              YOU'RE IN.
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-muted-on-dark)', marginTop: '4px' }}>
              The next signal will find you.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              maxWidth: '500px',
              margin: '0 auto'
            }}
          >
            <div style={{ display: 'flex', width: '100%', gap: '8px' }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flexGrow: 1,
                  padding: '14px 18px',
                  backgroundColor: 'rgba(242, 238, 232, 0.08)',
                  border: error ? '1px solid var(--coral)' : '1px solid var(--border-dark)',
                  borderRadius: '2px',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
                data-cursor="INPUT EMAIL"
                aria-label="Your email address"
              />
              <button
                type="submit"
                style={{
                  padding: '14px 28px',
                  backgroundColor: 'var(--accent-warm)',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-grotesk)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  borderRadius: '2px',
                  whiteSpace: 'nowrap'
                }}
                data-cursor="SUBSCRIBE"
              >
                SUBSCRIBE
              </button>
            </div>
            {error && (
              <span style={{ color: 'var(--coral)', fontSize: '0.8rem', fontFamily: 'var(--font-sans)' }}>
                {error}
              </span>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
