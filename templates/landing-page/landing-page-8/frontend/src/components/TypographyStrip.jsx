import React from 'react';

export default function TypographyStrip() {
  const marqueeItems = [
    { text: 'STRATEGY', outline: false },
    { text: 'IDENTITY', outline: true },
    { text: 'DIGITAL', outline: false },
    { text: 'CULTURE', outline: true },
    { text: 'DESIGN', outline: false },
    { text: 'TECHNOLOGY', outline: true }
  ];

  // Repeat items to ensure smooth continuous marquee flow
  const renderItems = () => (
    <div 
      className="marquee-content"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4rem',
        paddingRight: '4rem'
      }}
    >
      {marqueeItems.map((item, idx) => (
        <span
          key={idx}
          style={{
            fontFamily: 'var(--font-headings)',
            fontSize: 'clamp(3rem, 6vw, 6.5rem)',
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '4rem',
            color: item.outline ? 'transparent' : 'var(--text-primary)',
            WebkitTextStroke: item.outline ? '1.5px var(--text-primary)' : 'none',
            opacity: item.outline ? 0.35 : 0.9,
            transition: 'var(--transition-fast)'
          }}
        >
          <span>{item.text}</span>
          <span style={{ color: 'var(--accent-color)', WebkitTextStroke: 'none', opacity: 0.8 }}>—</span>
        </span>
      ))}
    </div>
  );

  return (
    <div 
      style={{
        width: '100%',
        overflow: 'hidden',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        padding: '2.5rem 0',
        backgroundColor: '#F5F3EF',
        position: 'relative',
        zIndex: 1,
        whiteSpace: 'nowrap',
        pointerEvents: 'auto',
        userSelect: 'none'
      }}
      className="marquee-container"
    >
      <div 
        style={{
          display: 'inline-flex',
          width: 'max-content'
        }}
        className="marquee-track"
      >
        {renderItems()}
        {renderItems()}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        
        .marquee-track {
          animation: marquee 28s linear infinite;
        }

        /* Speed up marquee track animation when hovered */
        .marquee-container:hover .marquee-track {
          animation-duration: 14s !important; /* Elegant speed expansion */
        }
        
        /* Make outlined texts light up on hover */
        .marquee-container:hover span {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
