import React, { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Mail, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const { showToast } = useContext(ShopContext);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    setIsSubmitted(true);
    showToast('Thank you for joining Aurelia Private Circle.');
    setEmail('');
  };

  return (
    <section
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: '#064E3B',
        color: 'var(--ivory)',
        textAlign: 'center',
        borderTop: '1px solid var(--border-gold)'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '680px' }}>
        <div style={{ width: '50px', height: '50px', borderRadius: '50%', border: '1px solid var(--gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', color: 'var(--gold-primary)' }}>
          <Mail size={22} />
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
            letterSpacing: '0.15em',
            marginBottom: '1rem',
            color: '#FAF7F0'
          }}
        >
          ENTER THE WORLD OF AURELIA
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.98rem',
            color: '#D4DEC9',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
            fontWeight: '300'
          }}
        >
          Discover new collections, private events and timeless jewellery inspiration.
        </p>

        {isSubmitted ? (
          <div
            style={{
              padding: '1.2rem',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid var(--gold-primary)',
              color: 'var(--gold-light)',
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            <CheckCircle size={18} />
            <span>Welcome to Aurelia Private Circle. Your invitation has been dispatched.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
              maxWidth: '540px',
              margin: '0 auto'
            }}
          >
            <div style={{ display: 'flex', width: '100%' }} className="newsletter-input-group">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flexGrow: 1,
                  padding: '1rem 1.4rem',
                  background: '#FAF7F0',
                  border: '1px solid var(--border-gold)',
                  color: 'var(--charcoal)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
                required
              />
              <button type="submit" className="btn-gold-sweep">
                SUBSCRIBE
              </button>
            </div>
            <span style={{ fontSize: '0.7rem', color: '#909F98', marginTop: '0.4rem' }}>
              By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
            </span>
          </form>
        )}
      </div>

      <style>{`
        @media (max-width: 540px) {
          .newsletter-input-group {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}
