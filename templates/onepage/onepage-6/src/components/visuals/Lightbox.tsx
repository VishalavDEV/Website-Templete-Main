import React, { useEffect } from 'react';
import type { GalleryItem } from '../../data/gallery';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, items, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      const currentIndex = items.findIndex(i => i.id === item.id);

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex(i => i.id === item.id);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 995,
        backgroundColor: 'rgba(36, 31, 35, 0.95)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '30px 4vw',
        animation: 'fadeIn 0.3s ease-out'
      }}
      onClick={onClose}
    >
      {/* Top Controls */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'var(--bg-light)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Eye size={16} style={{ color: 'var(--coral)' }} />
          <span style={{ fontFamily: 'var(--font-grotesk)', fontSize: '0.85rem', letterSpacing: '0.15em' }}>
            GALLERY // {item.category} ({currentIndex + 1} OF {items.length})
          </span>
        </div>

        <button
          onClick={onClose}
          style={{
            padding: '8px',
            borderRadius: '50%',
            backgroundColor: 'rgba(242, 238, 232, 0.1)',
            color: '#FFFFFF'
          }}
          aria-label="Close Lightbox"
          data-cursor="CLOSE"
        >
          <X size={22} />
        </button>
      </div>

      {/* Main Visual Frame & Navigation Arrows */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1000px',
          height: '65vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Arrow */}
        <button
          onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
          style={{
            position: 'absolute',
            left: '-20px',
            zIndex: 10,
            padding: '16px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-dark)',
            color: 'var(--bg-light)',
            border: '1px solid var(--border-dark)',
            boxShadow: 'var(--shadow-subtle)'
          }}
          data-cursor="PREV"
          aria-label="Previous Image"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Generated Abstract Canvas Artwork Frame */}
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '8px',
            backgroundColor: item.colorHex,
            background: `radial-gradient(circle at 50% 50%, ${item.colorHex} 0%, #241F23 100%)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            border: '1px solid var(--border-accent)',
            boxShadow: 'var(--shadow-elevated)',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              color: '#FFFFFF',
              letterSpacing: '0.05em',
              lineHeight: 1
            }}
          >
            {item.title}
          </div>
          <p style={{ fontFamily: 'var(--font-grotesk)', fontSize: '1rem', color: 'var(--lavender)', marginTop: '1rem' }}>
            {item.location} • {item.year}
          </p>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => onNavigate((currentIndex + 1) % items.length)}
          style={{
            position: 'absolute',
            right: '-20px',
            zIndex: 10,
            padding: '16px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-dark)',
            color: 'var(--bg-light)',
            border: '1px solid var(--border-dark)',
            boxShadow: 'var(--shadow-subtle)'
          }}
          data-cursor="NEXT"
          aria-label="Next Image"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Caption Bottom Bar */}
      <div
        style={{
          maxWidth: '600px',
          textAlign: 'center',
          color: 'var(--text-muted-on-dark)',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.95rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <p>{item.caption}</p>
        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-grotesk)', color: 'var(--coral)', display: 'block', marginTop: '6px' }}>
          USE LEFT / RIGHT ARROWS OR ESC TO NAVIGATE
        </span>
      </div>
    </div>
  );
};
