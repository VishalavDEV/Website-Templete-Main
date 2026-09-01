import React from 'react';
import { Link } from 'react-router-dom';
import { Disc, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textCenter: 'center', paddingTop: '120px', position: 'relative', zIndex: 10 }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <div className="anim-rotate-vinyl" style={{ display: 'inline-block', color: 'var(--gold-bright)', marginBottom: '24px' }}>
          <Disc size={90} />
        </div>
        
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '5rem', fontWeight: 900, color: 'var(--gold-bright)', lineHeight: 1, marginBottom: '16px' }}>
          404
        </h1>
        
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', textTransform: 'uppercase', color: '#FFF', marginBottom: '16px' }}>
          LOST IN THE RHYTHM
        </h2>
        
        <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', marginBottom: '32px' }}>
          “The page you're looking for disappeared somewhere between the beats.”
        </p>

        <Link to="/" className="btn-primary">
          <Home size={18} /> BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
