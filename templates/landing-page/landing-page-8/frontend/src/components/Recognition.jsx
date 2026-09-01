import React from 'react';

export default function Recognition() {
  const awards = [
    { name: 'Awwwards', count: '6x Site of the Day' },
    { name: 'CSS Design Awards', count: '4x Best UI/UX' },
    { name: 'Behance', count: '12x Featured Projects' },
    { name: 'FWA', count: '3x Developer Award' }
  ];

  return (
    <section 
      className="section-padding"
      style={{
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        zIndex: 1,
        backgroundColor: '#F5F3EF',
        paddingTop: '6rem',
        paddingBottom: '6rem'
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '4rem',
            alignItems: 'center',
            textAlign: 'left'
          }}
          className="recognition-grid"
        >
          {/* Header */}
          <div className="reveal-on-scroll">
            <span className="text-meta">Recognition</span>
            <h3 
              style={{
                fontFamily: 'var(--font-headings)',
                fontSize: '1.75rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginTop: '0.5rem',
                lineHeight: 1.2
              }}
            >
              Recognized for work that works.
            </h3>
          </div>

          {/* Badges Layout */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2.5rem 3rem'
            }}
            className="badges-grid"
          >
            {awards.map((award, index) => (
              <div 
                key={index}
                className="reveal-on-scroll"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  borderBottom: '1px solid rgba(17,17,17,0.1)',
                  paddingBottom: '1rem'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'var(--font-headings)',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)'
                  }}
                >
                  {award.name}
                </span>
                
                <span 
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500
                  }}
                >
                  {award.count}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .recognition-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .badges-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
