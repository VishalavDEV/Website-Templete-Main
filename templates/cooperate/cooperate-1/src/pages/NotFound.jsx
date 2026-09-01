import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 1.5rem', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '540px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '5rem', fontWeight: 800, color: 'var(--color-brand-light)', lineHeight: 1, marginBottom: '1rem' }}>
          404
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
          The requested system node or architecture page does not exist or has been relocated.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={16} />
            <span>Return to Homepage</span>
          </Link>
          <Link to="/services" className="btn btn-secondary">
            <Compass size={16} />
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
