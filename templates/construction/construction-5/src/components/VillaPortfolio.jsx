import React, { useEffect, useState } from 'react';

export default function VillaPortfolio() {
  const [villas, setVillas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVilla, setSelectedVilla] = useState(null);

  useEffect(() => {
    fetch('/api/villas')
      .then((res) => {
        if (!res.ok) throw new Error('Network error fetching villas');
        return res.json();
      })
      .then((data) => {
        setVillas(data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn('Backend API connection warning, using fallback data:', err);
        // Fallback data if backend is starting
        setVillas([
          {
            id: 'villa-01',
            number: '01',
            title: 'The Obsidian Lakefront Pavilion',
            location: 'Geneva, Switzerland',
            coordinates: '46.2044° N, 6.1432° E',
            price: '€4,850,000',
            status: 'COMPLETED',
            description: 'Cantilevered charred Siberian Yakisugi timber structure, structural floor-to-ceiling thermal glass, and an integrated 25-meter mirror-grade reflection infinity pool extending directly over Lake Geneva.',
            area: '680 M²',
            bedrooms: 5,
            poolSpec: '25 M Infinity Pool',
            energyRating: 'Swiss Minergie-P',
            tags: ['Lakefront', 'Yakisugi Timber', 'Swiss Minergie-P', 'Reflection Basin'],
            image: './assets/images/hero-villa.jpg'
          },
          {
            id: 'villa-02',
            number: '02',
            title: 'The Nordic Cedar Cantilever',
            location: 'Oslo Fjord, Norway',
            coordinates: '59.9139° N, 10.7522° E',
            price: '€3,900,000',
            status: 'COMPLETED',
            description: 'Solid Scandinavian timber joinery, triple-glazed thermally broken curtain walls, and geothermal radiant floor slab heating perched over coastal cliffs.',
            area: '520 M²',
            bedrooms: 4,
            poolSpec: 'Mirror Reflection Pond',
            energyRating: 'Passive House Plus',
            tags: ['Solid Cedar', 'Geothermal', '4 Suites', 'Cliffside Glass'],
            image: './assets/images/hero-villa.jpg'
          },
          {
            id: 'villa-03',
            number: '03',
            title: 'The Alpine Glass Monolith',
            location: 'Zermatt, Switzerland',
            coordinates: '45.9763° N, 7.7491° E',
            price: '€6,200,000',
            status: 'UNDER COMMISSION',
            description: 'Bespoke mountain villa with raw honed granite foundation walls, Swiss acoustic timber ceilings, subterranean wine vault, and wellness spa.',
            area: '750 M²',
            bedrooms: 6,
            poolSpec: 'Subterranean Thermal SPA',
            energyRating: 'Swiss Zero-Carbon',
            tags: ['Swiss Granite', 'Wine Vault', '6 Suites', 'Thermal Spa'],
            image: './assets/images/hero-villa.jpg'
          }
        ]);
        setLoading(false);
      });
  }, []);

  const featureVilla = villas[0];
  const secondaryVillas = villas.slice(1);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header-editorial">
          <div className="header-left">
            <span className="mini-tag">PORTFOLIO // SELECTED RESIDENCES</span>
            <h2 className="editorial-title">Private Architectural Landmarks</h2>
          </div>
          <div className="header-right">
            <span className="editorial-sub-text">
              Bespoke private estates engineered in Switzerland, Norway, and the Mediterranean. Connected via Spring Boot API.
            </span>
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--color-copper)' }}>
            Loading architectural portfolio from Spring Boot API...
          </div>
        ) : (
          <>
            {/* Feature Master Villa 01 */}
            {featureVilla && (
              <div className="villa-feature-hero">
                <div className="villa-feature-visual">
                  <img
                    src={featureVilla.image || './assets/images/hero-villa.jpg'}
                    alt={featureVilla.title}
                    className="feature-img"
                  />
                  <div className="feature-badge-top">
                    {featureVilla.location.toUpperCase()} • {featureVilla.coordinates}
                  </div>
                  <div className="feature-tag-price">
                    {featureVilla.price} // {featureVilla.status}
                  </div>
                </div>
                <div className="villa-feature-info">
                  <div className="v-num-pill">RESIDENCE {featureVilla.number} / 04</div>
                  <h3 className="feature-villa-title">{featureVilla.title}</h3>
                  <p className="feature-villa-desc">{featureVilla.description}</p>
                  <div className="feature-specs-grid">
                    <div className="spec-cell">
                      <strong>{featureVilla.area}</strong>
                      <span>Built Area</span>
                    </div>
                    <div className="spec-cell">
                      <strong>{featureVilla.bedrooms} BED</strong>
                      <span>Master Suites</span>
                    </div>
                    <div className="spec-cell">
                      <strong>{featureVilla.poolSpec}</strong>
                      <span>Amenity</span>
                    </div>
                    <div className="spec-cell">
                      <strong>{featureVilla.energyRating}</strong>
                      <span>Efficiency</span>
                    </div>
                  </div>
                  <a href="#configurator" className="btn-editorial-explore">
                    CONFIGURE SIMILAR RESIDENCE →
                  </a>
                </div>
              </div>
            )}

            {/* Secondary Dual Asymmetric Villa Cards */}
            <div className="villas-dual-grid">
              {secondaryVillas.map((villa) => (
                <div 
                  key={villa.id} 
                  className="villa-compact-card"
                  onClick={() => setSelectedVilla(villa)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="v-compact-img-box">
                    <img
                      src={villa.image || './assets/images/hero-villa.jpg'}
                      alt={villa.title}
                    />
                    <span className="compact-geo-tag">
                      {villa.location.split(',')[0].toUpperCase()} // {villa.area}
                    </span>
                  </div>
                  <div className="v-compact-body">
                    <div className="v-mini-header">
                      <span className="v-mini-num">{villa.number}</span>
                      <span className="v-mini-price">{villa.price}</span>
                    </div>
                    <h4 className="v-compact-title">{villa.title}</h4>
                    <p className="v-compact-desc">{villa.description}</p>
                    <div className="v-compact-tags">
                      {villa.tags && villa.tags.map((tag, idx) => (
                        <span key={idx}>
                          {tag} {idx < villa.tags.length - 1 ? '• ' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Modal for detail preview if clicked */}
        {selectedVilla && (
          <div 
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(8px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
            onClick={() => setSelectedVilla(null)}
          >
            <div 
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-copper)',
                maxWidth: '650px',
                width: '100%',
                borderRadius: '12px',
                padding: '32px',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedVilla(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-body)',
                  fontSize: '1.4rem',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
              <span className="mini-tag">RESIDENCE {selectedVilla.number} // {selectedVilla.status}</span>
              <h3 style={{ fontSize: '1.8rem', color: '#fff', margin: '12px 0' }}>{selectedVilla.title}</h3>
              <p style={{ color: 'var(--color-copper)', fontWeight: '600', marginBottom: '16px' }}>{selectedVilla.location} • {selectedVilla.coordinates}</p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>{selectedVilla.description}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
                <div style={{ background: '#0a0a0a', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-hairline)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>PRICE</div>
                  <div style={{ color: '#fff', fontWeight: 'bold' }}>{selectedVilla.price}</div>
                </div>
                <div style={{ background: '#0a0a0a', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-hairline)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>AREA</div>
                  <div style={{ color: '#fff', fontWeight: 'bold' }}>{selectedVilla.area}</div>
                </div>
                <div style={{ background: '#0a0a0a', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-hairline)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>BEDROOMS</div>
                  <div style={{ color: '#fff', fontWeight: 'bold' }}>{selectedVilla.bedrooms} Suites</div>
                </div>
              </div>
              <a 
                href="#configurator" 
                onClick={() => setSelectedVilla(null)}
                className="btn-editorial-explore" 
                style={{ display: 'inline-block', textAlign: 'center', width: '100%' }}
              >
                CUSTOMIZE THIS ARCHITECTURAL BLUEPRINT →
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
