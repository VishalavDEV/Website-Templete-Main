import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Ticket, Sparkles, ArrowRight, X, Maximize2 } from 'lucide-react';
import StageLights from './StageLights';
import SoundWave from './SoundWave';
import Modal from './Modal';

export default function Hero() {
  const [showSingerModal, setShowSingerModal] = useState(false);

  return (
    <section className="hero-section">
      <StageLights />

      <div className="container hero-grid">
        {/* Left Column: Poster-inspired Typography & Info */}
        <div className="hero-content fade-in-up">
          <div className="hero-tag-badge">
            <Sparkles size={14} /> A NIGHT OF LIVE SOUND
          </div>

          <div className="hero-poster-title">
            <h1 className="hero-title-main">
              MIDNIGHT<br />
              <span className="gold-highlight">ECHO</span>
            </h1>
            <span className="hero-year-badge">2026</span>
          </div>

          <p className="hero-description">
            “An unforgettable night where independent artists, electronic sounds, powerful vocals and thousands of music lovers come together under one sky.”
          </p>

          <div className="hero-details-row">
            <div className="hero-detail-item">
              <Calendar size={18} />
              <span>24 OCTOBER 2026</span>
            </div>
            <div className="hero-detail-divider" />
            <div className="hero-detail-item">
              <MapPin size={18} />
              <span>AURORA SOUND ARENA</span>
            </div>
            <div className="hero-detail-divider" />
            <div className="hero-detail-item">
              <span style={{ color: 'var(--gold-bright)' }}>CHENNAI, INDIA</span>
            </div>
          </div>

          <div className="hero-actions">
            <Link to="/tickets" className="btn-primary">
              <Ticket size={18} /> GET TICKETS
            </Link>
            <Link to="/artists" className="btn-secondary">
              EXPLORE ARTISTS <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Right Column: Singer Visual overlapping poster theme */}
        <div className="hero-image-wrapper fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="hero-spotlight-bg" />

          <div
            className="hero-performer-container"
            onClick={() => setShowSingerModal(true)}
            style={{ cursor: 'pointer', title: 'Click to view singer photo' }}
          >
            <img
              src="/images/hero_performer.jpg"
              alt="Velora Live Lead Performer"
              className="hero-performer-img"
            />
            <div className="hero-image-overlay-shadow" />

            <div
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(5, 5, 5, 0.75)',
                border: '1px solid var(--gold-bright)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-bright)',
                zIndex: 5,
                backdropFilter: 'blur(6px)',
              }}
            >
              <Maximize2 size={16} />
            </div>

            <div className="hero-soundwave-container">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--gold-bright)', letterSpacing: '2px' }}>
                  LIVE SOUNDWAVE FREQUENCY
                </span>
                <span style={{ fontSize: '0.75rem', color: '#FFF', fontWeight: 700 }}>
                  98.4 BPM
                </span>
              </div>
              <SoundWave barsCount={28} height={36} />
            </div>
          </div>
        </div>
      </div>

      {/* Singer Photo Preview Modal (Compact Length & Cross Close Button) */}
      {showSingerModal && (
        <Modal onClose={() => setShowSingerModal(false)}>
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold-bright)', fontSize: '1.4rem', textTransform: 'uppercase', marginBottom: '16px' }}>
              LYRA VOSS — LEAD PERFORMER
            </h3>

            <div style={{ borderRadius: '12px', overflow: 'hidden', border: 'var(--border-gold-bright)', maxHeight: '55vh', margin: '0 auto 20px', boxShadow: '0 0 40px rgba(0,0,0,0.9)' }}>
              <img
                src="/images/hero_performer.jpg"
                alt="Singer Live Performance"
                style={{ width: '100%', maxHeight: '55vh', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '20px', fontStyle: 'italic' }}>
              “Live at Midnight Echo 2026 under golden stage spotlights”
            </p>

            <button
              className="btn-primary"
              onClick={() => setShowSingerModal(false)}
              style={{ padding: '12px 32px', fontSize: '0.85rem' }}
            >
              CLOSE PREVIEW
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
}
