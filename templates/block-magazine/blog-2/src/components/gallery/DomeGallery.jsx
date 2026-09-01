import React, { useState, useRef, useEffect } from 'react';
import { X, ExternalLink, Compass, Calendar, Bookmark, ChevronRight, ChevronLeft, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * DomeGallery - 3D Spherical Archival Collection Viewer
 * Styled with warm sepia, cream, and terracotta tones for ELEMENTAL.
 */
export function DomeGallery({ items = [], onSelectItem, className = '' }) {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 12, y: -15 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [selectedItem, setSelectedItem] = useState(null);
  const [filterType, setFilterType] = useState('All');

  const filteredItems = filterType === 'All'
    ? items
    : items.filter((item) => item.type.toLowerCase() === filterType.toLowerCase() || item.category?.toLowerCase() === filterType.toLowerCase());

  // Mouse / Touch drag handlers for 3D rotation
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    setRotation((prev) => ({
      x: Math.max(-30, Math.min(30, prev.x - dy * 0.15)),
      y: prev.y + dx * 0.2
    }));
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - dragStart.x;
    const dy = e.touches[0].clientY - dragStart.y;
    setRotation((prev) => ({
      x: Math.max(-30, Math.min(30, prev.x - dy * 0.15)),
      y: prev.y + dx * 0.2
    }));
    setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (onSelectItem) onSelectItem(item);
  };

  const categories = ['All', 'Instrument', 'Manuscript', 'Apparatus', 'Diagram', 'Specimen'];

  return (
    <div className={`dome-gallery-wrapper ${className}`} style={{ position: 'relative', width: '100%' }}>
      {/* Category filter pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem', alignItems: 'center' }}>
        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginRight: '0.5rem', fontWeight: 600 }}>
          Filter Artifacts:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterType(cat)}
            style={{
              padding: '0.35rem 0.85rem',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontWeight: 600,
              borderRadius: '2px',
              border: filterType === cat ? '1px solid var(--accent-terracotta)' : '1px solid var(--border-light)',
              backgroundColor: filterType === cat ? 'var(--accent-terracotta)' : 'var(--bg-surface)',
              color: filterType === cat ? '#ffffff' : 'var(--text-ink)',
              cursor: 'pointer',
              transition: 'var(--transition-editorial)'
            }}
          >
            {cat}
          </button>
        ))}
        <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
          Drag to rotate spherical archive ({filteredItems.length} artifacts)
        </span>
      </div>

      {/* 3D Sphere / Dome Canvas Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          height: '520px',
          backgroundColor: 'rgba(32, 28, 24, 0.03)',
          border: '1px solid var(--border-light)',
          borderRadius: '4px',
          overflow: 'hidden',
          position: 'relative',
          perspective: '1200px',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none'
        }}
      >
        {/* Archival Sphere Background Grid Pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(217, 108, 74, 0.08) 0%, transparent 70%), linear-gradient(rgba(111, 81, 64, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(111, 81, 64, 0.05) 1px, transparent 1px)',
            backgroundSize: '100% 100%, 40px 40px, 40px 40px',
            pointerEvents: 'none'
          }}
        />

        {/* 3D Rotational Stage */}
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {filteredItems.map((item, index) => {
            const count = filteredItems.length;
            const phi = Math.acos(-1 + (2 * index) / Math.max(count, 1));
            const theta = Math.sqrt(count * Math.PI) * phi;
            const radius = 340; // Sphere radius in px

            const x = radius * Math.cos(theta) * Math.sin(phi);
            const y = (radius * 0.7) * Math.cos(phi);
            const z = radius * Math.sin(theta) * Math.sin(phi);

            return (
              <div
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  handleItemClick(item);
                }}
                style={{
                  position: 'absolute',
                  width: '140px',
                  height: '180px',
                  transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${-theta * (180 / Math.PI)}deg)`,
                  transformStyle: 'preserve-3d',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  padding: '6px',
                  boxShadow: 'var(--shadow-md)',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
                }}
                className="dome-card"
              >
                <div style={{ position: 'relative', width: '100%', height: '115px', overflow: 'hidden', backgroundColor: '#201c18' }}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'sepia(25%) contrast(105%)',
                      transition: 'transform 0.4s ease, filter 0.4s ease'
                    }}
                    loading="lazy"
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: 4,
                      right: 4,
                      backgroundColor: 'rgba(32, 28, 24, 0.85)',
                      color: 'var(--accent-amber)',
                      fontSize: '0.65rem',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 700,
                      padding: '1px 5px',
                      borderRadius: '2px'
                    }}
                  >
                    {item.year}
                  </span>
                </div>
                <div style={{ padding: '6px 2px 2px' }}>
                  <p
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-display)',
                      color: 'var(--text-ink)',
                      lineHeight: 1.2,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: '0.65rem',
                      color: 'var(--accent-terracotta)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontWeight: 600,
                      marginTop: '2px'
                    }}
                  >
                    {item.type}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Controls Overlay */}
        <div style={{ position: 'absolute', bottom: 12, right: 12, display: 'flex', gap: '6px', zIndex: 10 }}>
          <button
            onClick={() => setRotation((r) => ({ ...r, y: r.y - 45 }))}
            aria-label="Rotate left"
            style={{
              width: 34,
              height: 34,
              borderRadius: '2px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-light)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-ink)'
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setRotation((r) => ({ ...r, y: r.y + 45 }))}
            aria-label="Rotate right"
            style={{
              width: 34,
              height: 34,
              borderRadius: '2px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-light)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-ink)'
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Focused Artifact Metadata Modal / Drawer */}
      {selectedItem && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(32, 28, 24, 0.75)',
            backdropFilter: 'blur(6px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setSelectedItem(null)}
        >
          <div
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-light)',
              maxWidth: '720px',
              width: '100%',
              borderRadius: '3px',
              boxShadow: 'var(--shadow-lg)',
              overflow: 'hidden',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <div style={{ position: 'relative', minHeight: '300px', backgroundColor: '#201c18' }}>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(15%)' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: 12,
                    left: 12,
                    backgroundColor: 'rgba(32, 28, 24, 0.9)',
                    color: 'var(--accent-amber)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '2px'
                  }}
                >
                  Provenance Year: {selectedItem.year}
                </span>
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <span className="category-badge">{selectedItem.type}</span>
                  <button
                    onClick={() => setSelectedItem(null)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--text-muted)',
                      padding: 4
                    }}
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', marginBottom: '0.75rem', color: 'var(--text-ink)' }}>
                  {selectedItem.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-ink-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {selectedItem.description}
                </p>
                <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                    Archival Provenance:
                  </p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-warm-brown)', fontStyle: 'italic', marginTop: '2px' }}>
                    {selectedItem.provenance}
                  </p>
                  {selectedItem.relatedStoryId && (
                    <Link
                      to={`/story/${selectedItem.relatedStoryId === 'art-1' ? 'the-accident-that-changed-the-cold' : 'the-woman-who-mapped-the-ocean-rift'}`}
                      className="btn-editorial-primary"
                      style={{ marginTop: '1.25rem', width: '100%', fontSize: '0.78rem' }}
                      onClick={() => setSelectedItem(null)}
                    >
                      <span>Read Related Investigation</span>
                      <ExternalLink size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DomeGallery;
