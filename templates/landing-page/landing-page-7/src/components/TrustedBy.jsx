import React from 'react';
import './TrustedBy.css';

export default function TrustedBy() {
  const brands = [
    {
      name: 'Vertex',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22h20L12 2zm0 4.8L18.6 19H5.4L12 6.8z" />
        </svg>
      ),
    },
    {
      name: 'Pulse',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      name: 'Nova',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" />
        </svg>
      ),
    },
    {
      name: 'Sphere',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="10" cy="12" r="7" />
          <circle cx="14" cy="12" r="7" />
        </svg>
      ),
    },
    {
      name: 'Orbit',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" />
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Codex',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 8h10M7 12h10M7 16h6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="trusted-section">
      <div className="container trusted-container">
        <p className="trusted-text">Built for ambitious teams worldwide</p>
        <div className="trusted-logos">
          {brands.map((brand, idx) => (
            <div key={idx} className="trusted-logo-item">
              {brand.svg}
              <span className="trusted-logo-name">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
