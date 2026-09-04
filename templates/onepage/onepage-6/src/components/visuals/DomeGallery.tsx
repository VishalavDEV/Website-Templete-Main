import React, { useState } from 'react';
import { GALLERY_ITEMS, type GalleryItem } from '../../data/gallery';

interface DomeGalleryProps {
  onSelect: (item: GalleryItem) => void;
}

export const DomeGallery: React.FC<DomeGalleryProps> = ({ onSelect }) => {
  const [rotation, setRotation] = useState<number>(0);

  const handleNext = () => setRotation(prev => prev - 60);
  const handlePrev = () => setRotation(prev => prev + 60);

  return (
    <div
      style={{
        position: 'relative',
        height: '420px',
        width: '100%',
        perspective: '1200px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2rem'
      }}
    >
      <style>{`
        @media (max-width: 640px) {
          .dome-ring-wrapper {
            transform: scale(0.62) rotateY(${rotation}deg) !important;
          }
        }
      `}</style>
      {/* 3D Curved Cylinder Ring */}
      <div
        className="dome-ring-wrapper"
        style={{
          width: '280px',
          height: '320px',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rotation}deg)`,
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {GALLERY_ITEMS.map((item, idx) => {
          const angle = idx * 60; // 6 items = 360 deg
          return (
            <div
              key={item.id}
              onClick={() => onSelect(item)}
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '8px',
                background: `linear-gradient(135deg, ${item.colorHex} 0%, #241F23 100%)`,
                transform: `rotateY(${angle}deg) translateZ(340px)`,
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: '#FFF',
                border: '1px solid var(--border-accent)',
                boxShadow: 'var(--shadow-elevated)',
                cursor: 'pointer'
              }}
              data-cursor="INSPECT DOME"
            >
              <span style={{ fontFamily: 'var(--font-grotesk)', fontSize: '0.75rem', color: 'var(--lavender)' }}>
                {item.category} // {item.year}
              </span>
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>{item.location}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Control Buttons */}
      <div style={{ position: 'absolute', bottom: '20px', display: 'flex', gap: '16px', zIndex: 10 }}>
        <button
          onClick={handlePrev}
          style={{
            padding: '8px 20px',
            backgroundColor: 'var(--bg-dark)',
            color: 'var(--bg-light)',
            fontFamily: 'var(--font-grotesk)',
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
            borderRadius: '2px'
          }}
          data-cursor="ROTATE LEFT"
        >
          ← PREV DOME NODE
        </button>
        <button
          onClick={handleNext}
          style={{
            padding: '8px 20px',
            backgroundColor: 'var(--accent-warm)',
            color: '#FFF',
            fontFamily: 'var(--font-grotesk)',
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
            borderRadius: '2px'
          }}
          data-cursor="ROTATE RIGHT"
        >
          NEXT DOME NODE →
        </button>
      </div>
    </div>
  );
};
