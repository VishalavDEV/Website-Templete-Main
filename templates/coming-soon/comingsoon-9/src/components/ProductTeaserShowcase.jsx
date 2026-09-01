import React, { useState } from 'react';
import { Eye, Info, Sparkles, Layers, CheckCircle2, ChevronRight } from 'lucide-react';

export default function ProductTeaserShowcase({ currentPreset, lang = 'en', t }) {
  const [activeHotspotId, setActiveHotspotId] = useState(1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const activeHotspot = currentPreset.hotspots.find(h => h.id === activeHotspotId) || currentPreset.hotspots[0];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div style={{ margin: '60px 0 80px 0', width: '100%' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div className="glass-pill" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          fontSize: '12px',
          fontWeight: 700,
          color: 'var(--text-accent)',
          marginBottom: '12px'
        }}>
          <Sparkles size={13} />
          <span>{t.interactivePreview}</span>
        </div>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
          Explore Architectural Innovations
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', maxWidth: '600px', margin: '0 auto' }}>
          {t.clickHotspots}
        </p>
      </div>

      {/* Main Interactive Stage */}
      <div className="showcase-stage-grid">
        {/* Visual Showcase Card with 3D Tilt & Interactive Hotspots */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-glow), 0 20px 50px rgba(0,0,0,0.6)',
            border: '1px solid var(--border-card)',
            background: '#000',
            transform: `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
            transition: 'transform 0.15s ease-out',
            aspectRatio: '16/9'
          }}
        >
          <img
            src={currentPreset.image}
            alt={currentPreset.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />

          {/* Vignette & Ambient Glow Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
            pointerEvents: 'none'
          }} />

          {/* Clickable Hotspot Pins */}
          {currentPreset.hotspots.map((hotspot) => {
            const isActive = hotspot.id === activeHotspotId;
            return (
              <div
                key={hotspot.id}
                onClick={() => setActiveHotspotId(hotspot.id)}
                style={{
                  position: 'absolute',
                  top: `${hotspot.y}%`,
                  left: `${hotspot.x}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10,
                  cursor: 'pointer'
                }}
              >
                <div
                  className={`hotspot-pin ${isActive ? 'active' : ''}`}
                  style={{
                    background: isActive ? '#ffffff' : 'var(--accent-1)',
                    color: isActive ? 'var(--accent-1)' : '#ffffff',
                    border: '2px solid #ffffff'
                  }}
                >
                  {hotspot.id}
                </div>
                <div style={{
                  position: 'absolute',
                  inset: -6,
                  borderRadius: '50%',
                  border: `2px solid ${isActive ? 'var(--accent-1)' : 'rgba(255,255,255,0.4)'}`,
                  animation: 'radarPing 2.2s infinite',
                  pointerEvents: 'none'
                }} />
              </div>
            );
          })}

          {/* Floating Category Tag */}
          <div style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(10px)',
            padding: '6px 14px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(255,255,255,0.15)',
            fontSize: '12px',
            color: '#fff',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            <span>Interactive 3D Preview: {currentPreset.name}</span>
          </div>
        </div>

        {/* Feature Teaser Info and Step Switcher */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Active Hotspot Inspector Card */}
          <div className="glass-panel" style={{
            padding: '24px',
            border: '1px solid var(--border-accent)',
            background: 'var(--bg-card)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--accent-1)'
              }}>
                <Info size={14} />
                <span>SPECIFICATION NODE 0{activeHotspot.id}</span>
              </div>
              <span className="glass-pill" style={{ padding: '2px 10px', fontSize: '11px', color: 'var(--text-muted)' }}>
                Patent Pending
              </span>
            </div>

            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              {activeHotspot.title}
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
              {activeHotspot.desc}
            </p>
          </div>

          {/* Hotspot Step Selector Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {currentPreset.hotspots.map((h) => {
              const isSelected = h.id === activeHotspotId;
              return (
                <button
                  key={h.id}
                  onClick={() => setActiveHotspotId(h.id)}
                  className="glass-panel"
                  style={{
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    background: isSelected ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                    borderColor: isSelected ? 'var(--border-accent)' : 'var(--border-subtle)',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: isSelected ? 'var(--accent-1)' : 'var(--bg-pill)',
                      color: isSelected ? '#fff' : 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 700
                    }}>
                      {h.id}
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                      {h.title}
                    </span>
                  </div>
                  <ChevronRight size={16} style={{ color: isSelected ? 'var(--accent-1)' : 'var(--text-muted)' }} />
                </button>
              );
            })}
          </div>

          {/* Quick Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            marginTop: '8px'
          }}>
            {currentPreset.stats.map((stat, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '12px 8px', textAlign: 'center', background: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 800, color: 'var(--accent-2)' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
