import React, { useState, useEffect } from 'react';
import { Eye, Check, Sparkles } from 'lucide-react';

export default function Suites() {
  const [viewMode, setViewMode] = useState('suite'); // 'suite' or 'view'
  const [curtainsOpening, setCurtainsOpening] = useState(false);

  useEffect(() => {
    if (viewMode === 'view') {
      setCurtainsOpening(true);
    } else {
      setCurtainsOpening(false);
    }
  }, [viewMode]);

  const specs = [
    '1,200 sq. ft. Luxury Bedroom',
    'Handcrafted Teak Four-Poster Bed',
    'Private Sandstone Jharokha Window',
    'Ayurvedic Pillow Menu & Silk Linens',
    'Marble Master Bathroom',
    'Personal Butler Service (24/7)',
  ];

  return (
    <section id="suites" style={{ padding: '8rem 0', backgroundColor: 'var(--color-dark-bg)', color: 'var(--color-ivory)', position: 'relative' }}>
      {/* Golden accent background texture */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 10% 20%, rgba(194, 155, 79, 0.05) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header dark">
          <span className="subtitle" style={{ color: 'var(--color-brass)' }}>Imperial Lodging</span>
          <h2 style={{ color: 'var(--color-ivory)' }}>The Palace Suite Experience</h2>
        </div>

        {/* Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem', alignItems: 'center' }}>
          
          {/* Column 1: Immersive Dual View Panel */}
          <div>
            <div 
              style={{ 
                position: 'relative', 
                borderRadius: '4px', 
                overflow: 'hidden', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                border: '1px solid rgba(194, 155, 79, 0.2)'
              }}
            >
              {/* Image container */}
              <div style={{ position: 'relative', width: '100%', overflow: 'hidden', aspectRatio: '16/9' }}>
                
                {/* Underneath: The Room or View Image */}
                <img 
                  src={viewMode === 'suite' ? 'images/4_palace_suite.jpg' : 'images/5_the_view.jpg'} 
                  alt={viewMode === 'suite' ? 'Ananthara Palace Suite Interior' : 'Ananthara Palace Suite Bay Window View'} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    animation: 'fadeInSimple 0.6s ease-in-out'
                  }}
                  key={viewMode}
                />

                {/* Simulated Curtains Layer for "view" mode */}
                {viewMode === 'view' && (
                  <>
                    {/* Left Curtain */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '50%',
                        height: '100%',
                        background: 'linear-gradient(to right, #4A3B32 0%, #B3925C 70%, #8A6D3B 90%, #5E4A28 100%)',
                        borderRight: '2px solid rgba(255,255,255,0.1)',
                        zIndex: 8,
                        transform: curtainsOpening ? 'translateX(-85%)' : 'translateX(0%)',
                        transition: 'transform 4.0s cubic-bezier(0.25, 1, 0.5, 1)',
                        boxShadow: '5px 0 15px rgba(0,0,0,0.5)'
                      }}
                    >
                      {/* Gold Fold Lines */}
                      <div style={{ width: '100%', height: '100%', opacity: 0.15, background: 'repeating-linear-gradient(90deg, transparent, transparent 15px, #fff 15px, #fff 30px)' }} />
                    </div>

                    {/* Right Curtain */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '50%',
                        height: '100%',
                        background: 'linear-gradient(to left, #4A3B32 0%, #B3925C 70%, #8A6D3B 90%, #5E4A28 100%)',
                        borderLeft: '2px solid rgba(255,255,255,0.1)',
                        zIndex: 8,
                        transform: curtainsOpening ? 'translateX(85%)' : 'translateX(0%)',
                        transition: 'transform 4.0s cubic-bezier(0.25, 1, 0.5, 1)',
                        boxShadow: '-5px 0 15px rgba(0,0,0,0.5)'
                      }}
                    >
                      {/* Gold Fold Lines */}
                      <div style={{ width: '100%', height: '100%', opacity: 0.15, background: 'repeating-linear-gradient(-90deg, transparent, transparent 15px, #fff 15px, #fff 30px)' }} />
                    </div>
                  </>
                )}
                
                {/* Visual Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, rgba(15, 9, 6, 0.4) 0%, transparent 100%)',
                  pointerEvents: 'none',
                  zIndex: 9
                }} />
              </div>

              {/* View Toggle Bar (Glassmorphic) */}
              <div 
                className="glass-card-dark"
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '1rem',
                  padding: '0.6rem 1rem',
                  borderRadius: '30px',
                  border: '1px solid rgba(194, 155, 79, 0.3)',
                  zIndex: 10
                }}
              >
                <button
                  onClick={() => setViewMode('suite')}
                  style={{
                    background: viewMode === 'suite' ? 'var(--color-brass)' : 'transparent',
                    border: 'none',
                    borderRadius: '20px',
                    color: 'var(--color-ivory)',
                    padding: '0.4rem 1.2rem',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-serif-sc)',
                    letterSpacing: '0.1em',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Sparkles size={12} />
                  THE PALACE SUITE
                </button>
                <button
                  onClick={() => setViewMode('view')}
                  style={{
                    background: viewMode === 'view' ? 'var(--color-brass)' : 'transparent',
                    border: 'none',
                    borderRadius: '20px',
                    color: 'var(--color-ivory)',
                    padding: '0.4rem 1.2rem',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-serif-sc)',
                    letterSpacing: '0.1em',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Eye size={12} />
                  THE SANCTUM VIEW
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Details & Spec */}
          <div>
            <span style={{
              fontFamily: 'var(--font-serif-sc)',
              color: 'var(--color-brass)',
              fontSize: '0.85rem',
              letterSpacing: '0.25em',
              display: 'block',
              marginBottom: '0.8rem'
            }}>
              {viewMode === 'suite' ? 'ROYAL ACCOMMODATION' : 'SCENIC PANORAMA'}
            </span>

            <h3 style={{
              color: 'var(--color-ivory)',
              fontSize: '2.2rem',
              marginBottom: '1.5rem',
              lineHeight: 1.2
            }}>
              {viewMode === 'suite' ? 'The Palace Suite' : 'The Jharokha Window Outlook'}
            </h3>

            <p style={{
              color: 'var(--color-sandstone-light)',
              opacity: 0.85,
              fontSize: '1.05rem',
              lineHeight: '1.8',
              fontWeight: 300,
              marginBottom: '2rem'
            }}>
              {viewMode === 'suite' 
                ? 'Embodying the spirit of royal Mewari architectures, the Palace Suite features authentic high sandstone walls decorated with exquisite traditional miniature fresco paintings. A magnificent dark teak headboard crowns the king bed, flanked by soft glows of warm brass lanterns.'
                : 'Flanked by cascading rich silk gold-embroidered curtains, the hand-crafted bay window frame captures Udaipur\'s misty hills. The marble windowsill is carefully arranged with handcrafted traditional brass diyas, looking onto a lush tropical garden and central water lily pond.'
              }
            </p>

            {/* Specifications list */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}>
              {specs.map((spec, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                  <div style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(194, 155, 79, 0.15)',
                    border: '1px solid var(--color-brass)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexShrink: 0
                  }}>
                    <Check size={10} style={{ color: 'var(--color-brass)' }} />
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-sandstone-light)', opacity: 0.9 }}>
                    {spec}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <button className="btn-gold" style={{ padding: '1rem 2.5rem' }}>
                BOOK THIS SUITE
              </button>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-brass)', fontFamily: 'var(--font-serif-sc)', letterSpacing: '0.15em' }}>
                FROM ₹35,000 / NIGHT
              </span>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          #suites > .container > div:nth-child(2) {
            grid-template-columns: 1.3fr 1fr !important;
            gap: 5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
