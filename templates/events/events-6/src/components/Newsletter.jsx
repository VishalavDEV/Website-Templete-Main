import React, { useState } from 'react';
import { Send, CheckCircle2, Music } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setJoined(true);
    }
  };

  return (
    <section className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div className="newsletter-box">
          <Music size={42} style={{ color: 'var(--gold-bright)', marginBottom: '16px' }} />
          <span className="section-subtitle">EXCLUSIVE INSIDER ACCESS</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900, textTransform: 'uppercase', color: '#FFF', marginBottom: '16px' }}>
            STAY IN THE RHYTHM
          </h2>
          <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Get lineup announcements, early ticket access, exclusive content and festival updates delivered straight to your inbox.
          </p>

          {!joined ? (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn-primary">
                <Send size={16} /> JOIN THE LIST
              </button>
            </form>
          ) : (
            <div style={{ marginTop: '24px', padding: '16px 24px', background: 'rgba(245, 185, 0, 0.15)', border: 'var(--border-gold-bright)', borderRadius: 'var(--radius-pill)', display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--gold-bright)' }}>
              <CheckCircle2 size={24} />
              <span style={{ fontWeight: 800, fontSize: '1.05rem' }}>YOU'RE ON THE LIST! WELCOME TO VELORA LIVE.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
