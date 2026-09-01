import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Newsletter({ showToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && /\S+@\S+\.\S+/.test(email)) {
      setSubscribed(true);
      if (showToast) showToast('Successfully subscribed to Eventora updates!');
      setEmail('');
    } else if (showToast) {
      showToast('Please enter a valid email address.');
    }
  };

  return (
    <section className="section" style={{ background: 'linear-gradient(135deg, rgba(108, 92, 231, 0.1), rgba(0, 184, 148, 0.1))', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ maxWidth: '750px', margin: '0 auto', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '1rem' }}>STAY UPDATED</span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-main)' }}>
            Never Miss an Event <span className="gradient-text">Announcement</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
            Get event announcements, speaker updates, workshop registration drops, and exclusive pass offers sent directly to your inbox.
          </p>

          {subscribed ? (
            <div style={{ background: 'var(--bg-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--secondary)', fontWeight: 700 }}>
              <CheckCircle2 size={24} />
              <span>✓ Successfully subscribed! Thank you for joining Eventora.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', maxWidth: '550px', margin: '0 auto', flexWrap: 'wrap' }}>
              <div style={{ flexGrow: 1, position: 'relative' }}>
                <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="form-input"
                  style={{ paddingLeft: '2.8rem' }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                SUBSCRIBE <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
