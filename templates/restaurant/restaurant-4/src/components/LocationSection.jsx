import React from 'react';

export default function LocationSection() {
  return (
    <section id="contact" className="location-section-split" style={{ padding: 'var(--section-gap) var(--site-padding)' }}>
      <div className="container">
        <div className="location-split-grid">
          <div className="location-exterior-frame" data-cursor="VIEW">
            <img src="assets/images/hero.jpg" alt="CHENNAI Restaurant Exterior" className="location-exterior-img" />
          </div>
          <div className="location-info-side">
            <span className="house-meta-tag">VISIT US</span>
            <h2 className="location-title-huge">
              COME FIND US.<br />
              CHENNAI
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--color-sage)', textTransform: 'uppercase' }}>
                  ADDRESS
                </div>
                <div style={{ fontSize: '1.2rem', color: 'var(--color-forest)' }}>
                  Boat Club Road, R.A. Puram, Chennai, Tamil Nadu 600028
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--color-sage)', textTransform: 'uppercase' }}>
                  HOURS
                </div>
                <div style={{ fontSize: '1.2rem', color: 'var(--color-forest)' }}>
                  Open Tuesday &ndash; Sunday &bull; 12:00 &ndash; 23:30
                </div>
              </div>
              <div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 700, letterSpacing: '0.2em', color: 'var(--color-clay)', textTransform: 'uppercase' }}
                >
                  VIEW MAP &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
