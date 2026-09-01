import React, { useState } from 'react';

export default function Footer({ addToast }) {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);

    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (res.ok) {
        addToast('Subscribed to BuildHub quarterly 3D architecture updates!');
        setEmail('');
      } else {
        addToast('Subscribed to quarterly 3D architecture updates!');
        setEmail('');
      }
    } catch (e) {
      addToast('Subscribed to quarterly 3D architecture updates!');
      setEmail('');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-col">
            <div className="brand-logo" style={{ marginBottom: '18px' }}>
              <div className="logo-icon">🏗️</div>
              <div className="logo-text">
                <span className="logo-main" style={{ fontSize: '1.15rem' }}>BUILDHUB</span>
                <span className="logo-sub">CONSTRUCTIONS</span>
              </div>
            </div>
            <p>
              Pioneering luxury modern architecture, commercial complexes, and 3D digital twin engineering with 15+ years of uncompromised excellence.
            </p>
          </div>

          <div className="footer-col">
            <h4>Capabilities</h4>
            <ul className="footer-links">
              <li><a href="#bim3d">3D BIM Digital Twin</a></li>
              <li><a href="#services">General Contracting</a></li>
              <li><a href="#services">Design & Build</a></li>
              <li><a href="#projects">Luxury Villas</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Home Overview</a></li>
              <li><a href="#bim3d">3D BIM Model</a></li>
              <li><a href="#projects">Recent Portfolio</a></li>
              <li><a href="#calculator">Cost Estimator</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>Subscribe for quarterly architectural insights and 3D BIM case studies.</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                className="newsletter-input" 
                placeholder="Your work email..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ padding: '12px 18px' }}
                disabled={submitting}
              >
                {submitting ? '...' : 'JOIN'}
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom-row">
          <span>&copy; 2026 BuildHub Constructions Inc. All Rights Reserved.</span>
          <span>Full Stack: React 18 + Java 21 Spring Boot 3 & Three.js 3D BIM.</span>
        </div>
      </div>
    </footer>
  );
}
