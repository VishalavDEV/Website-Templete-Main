import React from 'react';

export default function PartnerLogos({ partners = [], variant = 'minimalist' }) {
  // Duplicate array for infinite seamless marquee
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <div className={`partner-logos-section partner-${variant}`}>
      <div className="partner-label">
        <span>STRATEGIC PARTNERS & SPONSORING CONSORTIUMS</span>
      </div>
      <div className="marquee-container">
        <div className="marquee-content">
          {marqueeItems.map((partner, index) => (
            <div key={`${partner}-${index}`} className="partner-badge">
              <span className="partner-name">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
