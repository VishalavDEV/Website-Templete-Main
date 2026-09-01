import React from 'react';
import './LogoCloud.css';

const logos = [
  {
    name: 'AEROVA DYNAMICS',
    svg: (
      <svg viewBox="0 0 160 36" fill="currentColor">
        <path d="M12 6L22 24H2L12 6Z" fillOpacity="0.8"/>
        <circle cx="12" cy="16" r="3" fill="#070B14"/>
        <text x="32" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="16" fontWeight="700" letterSpacing="2">AEROVA</text>
      </svg>
    )
  },
  {
    name: 'STRATA FINANCE',
    svg: (
      <svg viewBox="0 0 160 36" fill="currentColor">
        <rect x="2" y="6" width="6" height="20" rx="1"/>
        <rect x="11" y="10" width="6" height="16" rx="1" fillOpacity="0.8"/>
        <rect x="20" y="4" width="6" height="22" rx="1"/>
        <text x="34" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="16" fontWeight="700" letterSpacing="2">STRATA</text>
      </svg>
    )
  },
  {
    name: 'QUANTUM LABS',
    svg: (
      <svg viewBox="0 0 160 36" fill="currentColor">
        <circle cx="12" cy="18" r="10" stroke="currentColor" strokeWidth="3" fill="none"/>
        <line x1="2" y1="18" x2="22" y2="18" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="12" y1="8" x2="12" y2="28" stroke="currentColor" strokeWidth="2.5"/>
        <text x="32" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="16" fontWeight="700" letterSpacing="2">QUANTUM</text>
      </svg>
    )
  },
  {
    name: 'SYNAPSE AI',
    svg: (
      <svg viewBox="0 0 160 36" fill="currentColor">
        <polygon points="12,4 22,12 22,24 12,32 2,24 2,12" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <circle cx="12" cy="18" r="3" fill="currentColor"/>
        <text x="32" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="16" fontWeight="700" letterSpacing="2">SYNAPSE</text>
      </svg>
    )
  },
  {
    name: 'VELOCITY GLOBAL',
    svg: (
      <svg viewBox="0 0 170 36" fill="currentColor">
        <path d="M4 8L16 28L28 8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <text x="36" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="16" fontWeight="700" letterSpacing="2">VELOCITY</text>
      </svg>
    )
  },
  {
    name: 'NEXUS CLOUD',
    svg: (
      <svg viewBox="0 0 160 36" fill="currentColor">
        <path d="M6 22A6 6 0 0 1 12 12A8 8 0 0 1 24 16A5 5 0 0 1 24 24L6 24Z" fillOpacity="0.8"/>
        <text x="34" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="16" fontWeight="700" letterSpacing="2">NEXUS</text>
      </svg>
    )
  }
];

export default function LogoCloud({ title = "Trusted by teams building the future" }) {
  return (
    <div className="logocloud-section">
      <div className="container">
        {title && <p className="logocloud-title">{title}</p>}
        <div className="logocloud-grid">
          {logos.map((logo, index) => (
            <div key={index} className="logocloud-item" title={logo.name}>
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
