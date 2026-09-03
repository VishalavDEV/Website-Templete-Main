import React, { useState } from 'react';
import { RELEASES, type Release } from '../../data/releases';
import { ReleaseDrawer } from './ReleaseDrawer';
import { Disc, Layers, ArrowUpRight } from 'lucide-react';

export const ReleaseSection: React.FC = () => {
  const [selectedRelease, setSelectedRelease] = useState<Release | null>(null);

  return (
    <section id="releases" className="section-light">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            color: 'var(--accent-warm)',
            fontFamily: 'var(--font-grotesk)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}
        >
          <Layers size={14} />
          <span>09 — DISCOGRAPHY ARCHIVE</span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 400,
            color: 'var(--text-main)',
            lineHeight: 1.05,
            marginBottom: '3rem'
          }}
        >
          RECENT <br />
          <span style={{ fontStyle: 'italic', color: 'var(--wine)' }}>TRANSMISSIONS</span>
        </h2>

        {/* Large Creative Album Showcase Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}
        >
          {RELEASES.map((rel) => (
            <ReleaseCard
              key={rel.id}
              release={rel}
              onSelect={() => setSelectedRelease(rel)}
            />
          ))}
        </div>
      </div>

      {/* Release Detail Drawer */}
      <ReleaseDrawer
        release={selectedRelease}
        onClose={() => setSelectedRelease(null)}
      />
    </section>
  );
};

interface ReleaseCardProps {
  release: Release;
  onSelect: () => void;
}

const ReleaseCard: React.FC<ReleaseCardProps> = ({ release, onSelect }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -14, y: x * 14 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onClick={onSelect}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        cursor: 'pointer'
      }}
      data-cursor="VIEW RELEASE"
    >
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out',
          background: release.coverStyle.bgGradient,
          borderRadius: '8px',
          padding: '36px',
          minHeight: '420px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: '#FFFFFF',
          boxShadow: 'var(--shadow-elevated)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Geometric Abstract Overlay Pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.15,
            backgroundImage: release.coverStyle.pattern === 'sphere'
              ? 'radial-gradient(circle at 50% 50%, #FFF 10%, transparent 60%)'
              : 'repeating-linear-gradient(45deg, #FFF 0, #FFF 1px, transparent 0, transparent 20px)',
            pointerEvents: 'none'
          }}
        />

        {/* Top Meta Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '1.2rem',
              letterSpacing: '0.1em'
            }}
          >
            {release.catalog}
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(8px)',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-grotesk)'
            }}
          >
            <Disc size={12} />
            <span>{release.type} / {release.year}</span>
          </div>
        </div>

        {/* Center Big Artwork Typography */}
        <div style={{ position: 'relative', zIndex: 2, margin: '2rem 0' }}>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              lineHeight: 1,
              marginBottom: '8px'
            }}
          >
            {release.title}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-grotesk)',
              fontSize: '0.85rem',
              opacity: 0.9,
              letterSpacing: '0.05em'
            }}
          >
            {release.trackCount} TRACKS • {release.duration}
          </p>
        </div>

        {/* Bottom Drawer CTA Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            paddingTop: '16px',
            position: 'relative',
            zIndex: 2
          }}
        >
          <span style={{ fontFamily: 'var(--font-grotesk)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
            INSPECT TRANSMISSION
          </span>
          <ArrowUpRight size={18} />
        </div>
      </div>
    </div>
  );
};
