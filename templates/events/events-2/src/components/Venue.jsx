import React, { useState } from 'react';
import { MapPin, Navigation, Car, Bus, Building2, Shield, ExternalLink, X } from 'lucide-react';
import '../styles/cards.css';

export const Venue = () => {
  const [directionsModalOpen, setDirectionsModalOpen] = useState(false);

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag">SUMMIT VENUE</div>
          <h2 className="section-title">World-Class Conference Infrastructure</h2>
          <p className="section-subtitle">
            Hosted at India's premier international exhibition & convention centre in Bengaluru, offering state-of-the-art auditorium acoustics and exhibition facilities.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          {/* Styled Map Placeholder Card */}
          <div style={{ position: 'relative' }}>
            <div
              className="glass-card"
              style={{
                height: '420px',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                position: 'relative',
                background: '#ffffff',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              {/* Map grid graphics */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(rgba(79, 70, 229, 0.15) 2px, transparent 2px)',
                  backgroundSize: '24px 24px'
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80"
                alt="Bangalore International Exhibition Centre"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
              />

              {/* Pin Indicator */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'var(--gradient-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 25px rgba(79, 70, 229, 0.6)',
                    animation: 'pulsePin 2s infinite ease-in-out'
                  }}
                >
                  <MapPin size={24} color="#ffffff" />
                </div>
                <div
                  style={{
                    padding: '8px 16px',
                    background: '#ffffff',
                    border: '1px solid var(--accent-purple)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    boxShadow: 'var(--shadow-md)'
                  }}
                >
                  Bangalore International Exhibition Centre
                </div>
              </div>
            </div>
          </div>

          {/* Venue Information Cards */}
          <div>
            <div className="glass-card" style={{ padding: '32px', marginBottom: '24px', background: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <Building2 size={24} color="var(--accent-purple)" />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>Bangalore International Exhibition Centre</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                10th Mile, Tumkur Road, Madavara Post, Dasanapura Hobli, Bengaluru, Karnataka 562123, India.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <Bus size={18} color="var(--accent-purple)" />
                  <span><strong>Airport & Metro Access:</strong> Direct Green Line Metro access (Madavara Metro Station). 40 mins from Kempegowda International Airport (BLR).</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <Car size={18} color="var(--accent-purple)" />
                  <span><strong>Parking:</strong> On-site multi-level covered parking for 2,000+ vehicles with high-speed EV charging points.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <Shield size={18} color="var(--accent-purple)" />
                  <span><strong>Accessibility:</strong> Full wheelchair access, tactile paving, braille signage, and dedicated assistance desks.</span>
                </div>
              </div>

              <button className="btn btn-primary" onClick={() => setDirectionsModalOpen(true)}>
                <Navigation size={16} /> Get Directions →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Directions Modal */}
      {directionsModalOpen && (
        <div className="modal-backdrop" onClick={() => setDirectionsModalOpen(false)}>
          <div className="glass-card modal-content-card" style={{ maxWidth: '500px', background: '#ffffff' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setDirectionsModalOpen(false)}>
              <X size={20} />
            </button>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
              Directions to Venue
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px' }}>
              Bangalore International Exhibition Centre (BIEC), Tumkur Road, Bengaluru.
            </p>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              Open in Google Maps <ExternalLink size={16} />
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulsePin {
          0% { transform: scale(1); boxShadow: 0 0 0 0 rgba(79, 70, 229, 0.7); }
          70% { transform: scale(1.1); boxShadow: 0 0 0 20px rgba(79, 70, 229, 0); }
          100% { transform: scale(1); boxShadow: 0 0 0 0 rgba(79, 70, 229, 0); }
        }
      `}</style>
    </section>
  );
};
