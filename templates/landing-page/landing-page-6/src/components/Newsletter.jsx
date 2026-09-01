import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="newsletter-card reveal-on-scroll">
          <span className="section-label" style={{ backgroundColor: 'rgba(244, 124, 32, 0.2)', color: 'var(--accent)', marginBottom: '16px' }}>
            EXCLUSIVE COMMUNITY
          </span>

          <h2 className="newsletter-heading">
            Enter The World Before Everyone Else
          </h2>

          <p className="newsletter-desc">
            Receive release updates, exclusive excerpts, author notes, and special offers directly from Lunara Press.
          </p>

          {isSubmitted ? (
            <div className="newsletter-success">
              <CheckCircle size={22} />
              <span>Welcome to the Lunara Press reader list! Check your inbox for your free prologue PDF.</span>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <input 
                  type="email" 
                  className="newsletter-input" 
                  placeholder="Your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <span style={{ color: '#FF6B6B', fontSize: '0.8125rem', textAlign: 'left', marginLeft: '12px' }}>{error}</span>}
              </div>

              <button type="submit" className="btn-primary" style={{ flexShrink: 0 }}>
                Join The List <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
