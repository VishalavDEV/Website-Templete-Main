import React from 'react';
import BiophilicAtmosphere from './BiophilicAtmosphere';

export default function Hero({ onOpenModal }) {
  return (
    <section className="heroSection" id="hero" style={{ backgroundImage: `url('/assets/images/buildx-hero.jpg')` }}>
      <div className="heroOverlay" />
      <BiophilicAtmosphere />

      <div className="heroGrid">
        <div>
          <h1 className="heroTitle">
            ECO-MODERN<br />
            LIVING MEGASTRUCTURES
          </h1>
          <div className="heroSubtitle">
            100% MASS TIMBER CLT · VERTICAL BOTANICAL FORESTS · NET-ZERO ARCHITECTURE
          </div>

          <div className="heroBadgesRow">
            <div className="heroBadgeCol">
              <span className="heroBadgeIcon">🌿</span>
              <span className="heroBadgeTitle">SUSTAINABILITY</span>
            </div>

            <div className="heroDivider" />

            <div className="heroBadgeCol">
              <span className="heroBadgeIcon">🌱</span>
              <span className="heroBadgeTitle">WELL-BEING</span>
            </div>

            <div className="heroDivider" />

            <div className="heroBadgeCol">
              <span className="heroBadgeIcon">🏛️</span>
              <span className="heroBadgeTitle">CLT TIMBER</span>
            </div>
          </div>
        </div>

        <div style={{
          background: 'rgba(13, 30, 23, 0.75)',
          padding: '36px',
          borderRadius: '24px',
          border: '1px solid var(--forest-border)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
        }}>
          <div style={{
            fontFamily: 'Space Grotesk, monospace',
            fontSize: '0.8rem',
            fontWeight: 800,
            color: 'var(--green-bright)',
            letterSpacing: '0.15em',
            marginBottom: '12px'
          }}>
            BIOPHILIC PHILOSOPHY
          </div>
          <h3 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '1.5rem',
            fontWeight: 900,
            marginBottom: '14px',
            lineHeight: 1.2
          }}>
            Architecture as an Extension of Natural Ecosystems
          </h3>
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--text-body)',
            lineHeight: 1.6,
            marginBottom: '24px'
          }}>
            We replace carbon-intensive concrete with cross-laminated mass timber (CLT), integrating endemic living flora that actively scrub urban atmosphere and restore human biological equilibrium.
          </p>
          <button className="consultationCtaBtn" style={{ width: '100%' }} onClick={onOpenModal}>
            EXPLORE SUSTAINABLE DOSSIER →
          </button>
        </div>
      </div>
    </section>
  );
}
