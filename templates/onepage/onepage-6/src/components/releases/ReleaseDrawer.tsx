import React, { useEffect } from 'react';
import type { Release } from '../../data/releases';
import { useToast } from '../../context/ToastContext';
import { X, Play, Disc } from 'lucide-react';

interface ReleaseDrawerProps {
  release: Release | null;
  onClose: () => void;
}

export const ReleaseDrawer: React.FC<ReleaseDrawerProps> = ({ release, onClose }) => {
  const { showToast } = useToast();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!release) return null;

  const handlePlayFirstTrack = () => {
    // Play associated first track or toast
    showToast(`PLAYING TRANSMISSION: ${release.title}`, 'accent');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 990,
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(36, 31, 35, 0.7)',
        backdropFilter: 'blur(12px)',
        animation: 'fadeIn 0.3s ease-out'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '560px',
          height: '100%',
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-on-dark)',
          padding: '40px',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-elevated)',
          borderLeft: '1px solid var(--border-accent)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-grotesk)',
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
                color: 'var(--coral)',
                textTransform: 'uppercase'
              }}
            >
              CATALOG // {release.catalog}
            </span>

            <button
              onClick={onClose}
              style={{
                padding: '8px',
                borderRadius: '50%',
                backgroundColor: 'rgba(242, 238, 232, 0.1)',
                color: 'var(--bg-light)',
                transition: 'var(--transition-smooth)'
              }}
              data-cursor="CLOSE"
              aria-label="Close Release Drawer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Release Artwork Preview Banner */}
          <div
            style={{
              width: '100%',
              height: '240px',
              borderRadius: '6px',
              background: release.coverStyle.bgGradient,
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginBottom: '2rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#FFF' }}>
              <Disc size={28} />
              <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '1.2rem' }}>{release.type} / {release.year}</span>
            </div>

            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#FFF', lineHeight: 1.1 }}>
                {release.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-grotesk)', fontSize: '0.85rem', color: 'var(--lavender)' }}>
                {release.trackCount} TRACKS • {release.duration}
              </p>
            </div>
          </div>

          {/* Description */}
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-muted-on-dark)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {release.description}
          </p>

          {/* Track List */}
          <div style={{ marginBottom: '2rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-grotesk)',
                fontSize: '0.85rem',
                letterSpacing: '0.15em',
                color: 'var(--accent-warm)',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}
            >
              TRACKLISTING
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {release.tracklist.map((trackName, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '10px 14px',
                    backgroundColor: 'rgba(242, 238, 232, 0.04)',
                    borderLeft: '2px solid var(--border-dark)',
                    fontFamily: 'var(--font-grotesk)',
                    fontSize: '0.85rem',
                    color: 'var(--bg-light)'
                  }}
                >
                  {trackName}
                </div>
              ))}
            </div>
          </div>

          {/* Credits */}
          <div style={{ marginBottom: '2rem', borderTop: '1px solid var(--border-dark)', paddingTop: '1.5rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-grotesk)',
                fontSize: '0.85rem',
                letterSpacing: '0.15em',
                color: 'var(--lavender)',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}
            >
              PRODUCTION CREDITS
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.8rem', color: 'var(--text-muted-on-dark)' }}>
              <div>PRODUCER: {release.credits.production}</div>
              <div>MIXING: {release.credits.mixing}</div>
              <div>MASTERING: {release.credits.mastering}</div>
              <div>ARTWORK: {release.credits.artwork}</div>
            </div>
          </div>
        </div>

        {/* Footer Play CTA */}
        <button
          onClick={handlePlayFirstTrack}
          style={{
            width: '100%',
            padding: '16px',
            backgroundColor: 'var(--accent-warm)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-grotesk)',
            fontSize: '0.9rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}
          data-cursor="PLAY RELEASE"
        >
          <Play size={18} />
          <span>PLAY RELEASE TRANSMISSION</span>
        </button>
      </div>
    </div>
  );
};
