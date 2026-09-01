import React, { useEffect, useRef, useState } from 'react';
import { Search, Sliders, Database, History, Cpu, FileText, ArrowUpRight, BarChart2, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * GridScan - Instrument Panel & Archival Workstation
 * Configured for ELEMENTAL:
 * - Warm muted brown gridlines & terracotta scanline sweep
 * - Deep warm charcoal backdrop
 * - Interactive timeline filters, archive stats, and era selector
 */
export function GridScan({ archiveItems = [], onSelectVolume, className = '' }) {
  const canvasRef = useRef(null);
  const [selectedEra, setSelectedEra] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVolume, setActiveVolume] = useState(archiveItems[0] || null);

  useEffect(() => {
    if (archiveItems.length > 0 && !activeVolume) {
      setActiveVolume(archiveItems[0]);
    }
  }, [archiveItems]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 1000);
    let height = (canvas.height = 420);

    let scanY = 0;
    let animationFrameId = null;
    let isVisible = true;

    const render = () => {
      if (!isVisible) {
        animationFrameId = null;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Deep warm charcoal base
      ctx.fillStyle = '#201c18';
      ctx.fillRect(0, 0, width, height);

      // Warm muted grid lines
      ctx.strokeStyle = 'rgba(111, 81, 64, 0.25)';
      ctx.lineWidth = 1;

      const gridSize = 28;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Terracotta Scanline Sweep
      scanY = (scanY + 1.2) % height;
      const gradient = ctx.createLinearGradient(0, scanY - 35, 0, scanY + 15);
      gradient.addColorStop(0, 'rgba(217, 108, 74, 0)');
      gradient.addColorStop(0.7, 'rgba(217, 108, 74, 0.28)');
      gradient.addColorStop(1, 'rgba(255, 176, 90, 0.45)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanY - 35, width, 50);

      // Bright leading scan filament line
      ctx.strokeStyle = 'rgba(255, 176, 90, 0.75)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(width, scanY);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animationFrameId) {
          animationFrameId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    animationFrameId = requestAnimationFrame(render);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 420;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const filteredVolumes = archiveItems.filter((vol) => {
    const matchSearch =
      vol.volume.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vol.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vol.keyFigures.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchSearch;
  });

  return (
    <div
      className={`gridscan-lab-wrapper ${className}`}
      style={{
        backgroundColor: '#201c18',
        borderRadius: '6px',
        border: '1px solid rgba(217, 108, 74, 0.3)',
        boxShadow: 'var(--shadow-lg)',
        overflow: 'hidden',
        position: 'relative',
        color: '#fffaf1'
      }}
    >
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.85
        }}
        aria-hidden="true"
      />

      {/* Foreground Workstation Terminal */}
      <div style={{ position: 'relative', zIndex: 2, padding: '2rem' }}>
        {/* Terminal Header Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255, 250, 241, 0.15)',
            paddingBottom: '1.25rem',
            marginBottom: '1.5rem',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-amber)',
                boxShadow: '0 0 10px var(--accent-amber)'
              }}
            />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-amber)' }}>
              ARCHIVAL LAB // CHRONOLOGICAL MATRIX
            </span>
          </div>

          {/* Quick Filter Search */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ position: 'relative' }}>
              <Search size={14} style={{ position: 'absolute', left: 10, top: 9, color: '#d5c8be' }} />
              <input
                type="text"
                placeholder="Query era or scientist..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  backgroundColor: 'rgba(0,0,0,0.45)',
                  border: '1px solid rgba(217, 108, 74, 0.35)',
                  borderRadius: '2px',
                  padding: '0.35rem 0.75rem 0.35rem 2rem',
                  fontSize: '0.75rem',
                  color: '#fffaf1',
                  outline: 'none',
                  width: '210px'
                }}
              />
            </div>
            <Link
              to="/archive"
              className="btn-editorial-accent"
              style={{ padding: '0.4rem 0.85rem', fontSize: '0.72rem' }}
            >
              <span>Full Archive</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        {/* Workstation Grid Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {/* Left Column: Volume Navigation Buttons */}
          <div style={{ maxHeight: '280px', overflowY: 'auto', paddingRight: '0.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {filteredVolumes.map((vol) => {
                const isCurrent = activeVolume?.id === vol.id;
                return (
                  <button
                    key={vol.id}
                    onClick={() => {
                      setActiveVolume(vol);
                      if (onSelectVolume) onSelectVolume(vol);
                    }}
                    style={{
                      textAlign: 'left',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: isCurrent ? 'rgba(217, 108, 74, 0.25)' : 'rgba(0,0,0,0.3)',
                      border: isCurrent ? '1px solid var(--accent-amber)' : '1px solid rgba(255, 250, 241, 0.08)',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <p style={{ fontSize: '0.78rem', fontWeight: 700, color: isCurrent ? 'var(--accent-amber)' : '#fffaf1' }}>
                        {vol.volume}
                      </p>
                      <p style={{ fontSize: '0.68rem', color: '#d5c8be', marginTop: '2px' }}>
                        {vol.years} • {vol.era}
                      </p>
                    </div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--accent-terracotta)', fontWeight: 700 }}>
                      {vol.storyCount} stories
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Volume Inspector Panel */}
          {activeVolume && (
            <div
              style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                border: '1px solid rgba(217, 108, 74, 0.35)',
                borderRadius: '3px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.68rem', color: 'var(--accent-amber)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800 }}>
                    {activeVolume.years} // {activeVolume.era}
                  </span>
                  <span style={{ fontSize: '0.68rem', backgroundColor: 'rgba(217, 108, 74, 0.3)', color: '#fffaf1', padding: '2px 6px', borderRadius: '2px' }}>
                    {activeVolume.highlightTopic}
                  </span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: '#fffaf1', marginBottom: '0.5rem' }}>
                  {activeVolume.volume}
                </h4>
                <p style={{ fontSize: '0.82rem', color: '#d5c8be', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {activeVolume.description}
                </p>

                {/* Key Figures tags */}
                <div style={{ marginTop: '0.5rem' }}>
                  <p style={{ fontSize: '0.68rem', color: 'var(--accent-amber)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.35rem' }}>
                    Key Historical Figures:
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {activeVolume.keyFigures.map((fig) => (
                      <span
                        key={fig}
                        style={{
                          fontSize: '0.7rem',
                          backgroundColor: 'rgba(255, 250, 241, 0.08)',
                          color: '#fffaf1',
                          padding: '2px 7px',
                          borderRadius: '2px',
                          border: '1px solid rgba(255, 250, 241, 0.12)'
                        }}
                      >
                        {fig}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div style={{ borderTop: '1px solid rgba(255, 250, 241, 0.12)', paddingTop: '0.85rem', marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: '#d5c8be' }}>
                  Total Documented Records: <strong style={{ color: 'var(--accent-amber)' }}>{activeVolume.storyCount}</strong>
                </span>
                <Link
                  to={`/archive`}
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent-amber)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontWeight: 700
                  }}
                >
                  <span>Explore Era</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GridScan;
