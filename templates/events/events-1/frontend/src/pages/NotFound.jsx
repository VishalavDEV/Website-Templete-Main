import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="page-header" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="section-tag" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>404 ERROR</span>
        <h1 style={{ fontSize: '6rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1, marginBottom: '1rem' }}>
          404
        </h1>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-main)' }}>
          Page Not Found
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 2.5rem auto' }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
          <Home size={18} /> GO TO HOMEPAGE
        </Link>
      </div>
    </div>
  );
}
