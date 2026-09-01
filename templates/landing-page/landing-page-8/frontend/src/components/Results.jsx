import React from 'react';

export default function Results() {
  const stats = [
    {
      value: '120+',
      label: 'Projects launched'
    },
    {
      value: '18',
      label: 'Countries reached'
    },
    {
      value: '42',
      label: 'Brands transformed'
    },
    {
      value: '9',
      label: 'Years creating'
    }
  ];

  return (
    <section 
      className="section-padding"
      style={{
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        zIndex: 1,
        backgroundColor: '#F5F3EF'
      }}
    >
      <div className="container">
        
        {/* Statistics Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '4rem',
            textAlign: 'left'
          }}
          className="results-grid"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="reveal-on-scroll"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                borderLeft: index === 0 ? 'none' : '1px solid rgba(17,17,17,0.1)',
                paddingLeft: index === 0 ? '0' : '2.5rem'
              }}
              className="results-col"
            >
              <span 
                style={{
                  fontFamily: 'var(--font-headings)',
                  fontSize: 'clamp(3.5rem, 6vw, 6.5rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em'
                }}
              >
                {stat.value}
              </span>
              
              <span 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .results-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 4rem 2rem !important;
          }
          .results-col {
            border-left: none !important;
            padding-left: 0 !important;
          }
        }
        @media (max-width: 480px) {
          .results-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
