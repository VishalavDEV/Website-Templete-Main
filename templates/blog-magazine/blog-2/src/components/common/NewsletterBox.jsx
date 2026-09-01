import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react';
import { subscribeNewsletter } from '../../services/mockApi';

export function NewsletterBox({ className = '', variant = 'standard' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setFeedback('');

    const res = await subscribeNewsletter(email);
    if (res.success) {
      setStatus('success');
      setFeedback(res.message);
      setEmail('');
    } else {
      setStatus('error');
      setFeedback(res.error);
    }
  };

  return (
    <div
      className={`newsletter-box ${className}`}
      style={{
        backgroundColor: variant === 'dark' ? '#201c18' : 'var(--bg-surface)',
        border: '1px solid var(--border-light)',
        borderRadius: '4px',
        padding: '3rem 2rem',
        boxShadow: 'var(--shadow-md)',
        color: variant === 'dark' ? '#fffaf1' : 'var(--text-ink)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Stamp Seal */}
      <div
        style={{
          position: 'absolute',
          top: -20,
          right: -20,
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          border: '1px dashed var(--accent-terracotta)',
          opacity: 0.25,
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--accent-terracotta)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginBottom: '0.75rem'
          }}
        >
          <Mail size={14} />
          <span>EDITORIAL DISPATCH</span>
        </span>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.2rem',
            letterSpacing: '-0.01em',
            marginBottom: '0.75rem',
            color: variant === 'dark' ? '#fffaf1' : 'var(--text-ink)'
          }}
        >
          The Weekly Element
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-editorial)',
            fontSize: '1.15rem',
            lineHeight: 1.5,
            color: variant === 'dark' ? '#d5c8be' : 'var(--text-ink-secondary)',
            marginBottom: '2rem'
          }}
        >
          A small selection of unusual stories, overlooked discoveries, and the people behind them. Delivered every Thursday morning.
        </p>

        {status === 'success' ? (
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: 'rgba(125, 138, 114, 0.15)',
              border: '1px solid var(--accent-sage)',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              color: variant === 'dark' ? '#fffaf1' : 'var(--text-ink)'
            }}
          >
            <CheckCircle size={20} color="var(--accent-sage)" />
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{feedback}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                justifyContent: 'center'
              }}
            >
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: '1 1 280px',
                  maxWidth: '380px',
                  padding: '0.85rem 1.25rem',
                  fontSize: '0.9rem',
                  backgroundColor: variant === 'dark' ? 'rgba(0,0,0,0.4)' : '#ffffff',
                  border: status === 'error' ? '1px solid var(--accent-coral)' : '1px solid var(--border-light)',
                  borderRadius: '2px',
                  color: variant === 'dark' ? '#fffaf1' : 'var(--text-ink)',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-editorial-primary"
                style={{ minWidth: '160px' }}
              >
                {status === 'loading' ? (
                  <Loader2 size={16} className="spin" />
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </div>

            {status === 'error' && (
              <p style={{ fontSize: '0.8rem', color: 'var(--accent-coral)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', marginTop: '0.25rem' }}>
                <AlertCircle size={14} />
                <span>{feedback}</span>
              </p>
            )}

            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              No spam. No tracking pixels. Unsubscribe anytime with a single click.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default NewsletterBox;
