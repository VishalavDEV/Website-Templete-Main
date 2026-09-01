import React, { useState } from 'react';
import { tracksData } from '../data/tracks';
import { Layers, ArrowUpRight, CheckCircle2, X } from 'lucide-react';

export default function Tracks() {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e, id) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max tilt 10deg
    const rotateY = ((x - centerX) / centerX) * 10;

    setTiltStyle((prev) => ({
      ...prev,
      [id]: {
        transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
      }
    }));
  };

  const handleMouseLeave = (id) => {
    setTiltStyle((prev) => ({
      ...prev,
      [id]: {
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
      }
    }));
  };

  return (
    <section id="tracks" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-header">
        <div className="section-tag">
          <Layers size={14} /> Four Core Pillars
        </div>
        <h2 className="section-title">
          Curated <span className="text-gradient">Technical Tracks</span>
        </h2>
        <p className="section-subtitle">
          Engineered for deep-tech specialists. Choose your specialization track or cross-pollinate across bipedal autonomy, quantum algorithms, edge micro-inference, and spatial computing.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid-2" style={{ gap: '32px' }}>
        {tracksData.map((track) => {
          const cardStyle = tiltStyle[track.id] || {
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
          };

          return (
            <div
              key={track.id}
              className="glass-card tilt-card"
              onMouseMove={(e) => handleMouseMove(e, track.id)}
              onMouseLeave={() => handleMouseLeave(track.id)}
              onClick={() => setSelectedTrack(track)}
              style={{
                ...cardStyle,
                cursor: 'pointer',
                borderRadius: '24px',
                minHeight: '380px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '32px',
                position: 'relative'
              }}
            >
              {/* Relevant Background Stock Image */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url('${track.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.2,
                  transition: 'opacity 0.4s ease'
                }}
              />

              {/* Dark Overlay Gradient */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(180deg, rgba(8, 11, 18, 0.4) 0%, rgba(8, 11, 18, 0.95) 100%)'
                }}
              />

              {/* Top Header */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: track.color,
                      opacity: 0.8
                    }}
                  >
                    {track.number}
                  </span>
                  <span className="badge badge-cyan" style={{ borderColor: track.color, color: track.color }}>
                    {track.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.75rem',
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                    lineHeight: 1.2
                  }}
                >
                  {track.title}
                </h3>
                <div
                  style={{
                    fontSize: '0.9rem',
                    color: track.color,
                    fontWeight: 600,
                    marginBottom: '16px'
                  }}
                >
                  {track.subtitle}
                </div>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '24px'
                  }}
                >
                  {track.description}
                </p>
              </div>

              {/* Topics Preview List */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '20px'
                  }}
                >
                  {track.topics.slice(0, 3).map((topic, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.78rem',
                        padding: '4px 12px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '9999px',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: track.color,
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  Explore Track Details <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Track Detail Modal */}
      {selectedTrack && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(8, 11, 18, 0.88)',
            backdropFilter: 'blur(16px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setSelectedTrack(null)}
        >
          <div
            className="glass-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '640px',
              width: '100%',
              padding: '36px',
              borderRadius: '24px',
              borderColor: selectedTrack.color,
              boxShadow: `0 0 40px ${selectedTrack.color}33`,
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span className="badge badge-cyan" style={{ color: selectedTrack.color, borderColor: selectedTrack.color }}>
                Track {selectedTrack.number} • {selectedTrack.badge}
              </span>
              <button
                onClick={() => setSelectedTrack(null)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '8px' }}>{selectedTrack.title}</h3>
            <div style={{ color: selectedTrack.color, fontWeight: 600, marginBottom: '20px' }}>{selectedTrack.subtitle}</div>
            
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
              {selectedTrack.description}
            </p>

            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
              Core Technical Sessions Included:
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {selectedTrack.topics.map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={18} color={selectedTrack.color} />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <a href="#schedule" onClick={() => setSelectedTrack(null)} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              View Schedule For This Track
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
