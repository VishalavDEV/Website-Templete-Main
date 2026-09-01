import React, { useState } from 'react';
import { Mail, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { useAppStore } from '../../store/appStore';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { isNewsletterSubscribed, handleSubscribe } = useAppStore();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      await handleSubscribe(email);
      setEmail('');
    } catch (err) {
      setError(err.message || 'Subscription failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="newsletter-section" aria-label="Newsletter Subscription">
      <div className="atlas-container">
        <div className="newsletter-box">
          <div className="newsletter-tag">
            <Mail size={14} />
            <span>Weekly Editorial Dispatch</span>
          </div>

          <h2 className="newsletter-title">The World, in Your Inbox.</h2>
          <p className="newsletter-desc">
            One thoughtful selection of stories, discoveries, unreleased field recordings and photography every Thursday.
          </p>

          {isNewsletterSubscribed ? (
            <div className="newsletter-success-box">
              <CheckCircle2 size={32} color="#c9933b" />
              <div className="newsletter-success-title">YOU’RE ON THE LIST.</div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(245,242,235,0.8)' }}>
                Thank you for subscribing to ATLAS. Your first expedition dispatch is on its way.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
                disabled={loading}
              />
              <button type="submit" className="atlas-btn atlas-btn-ochre" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Joining...</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          )}

          {error && (
            <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '1rem' }}>
              {error}
            </p>
          )}

          <p className="newsletter-fineprint">
            Zero spam. Unsubscribe anytime with a single click. Respecting your privacy since 1926.
          </p>
        </div>
      </div>
    </section>
  );
}
