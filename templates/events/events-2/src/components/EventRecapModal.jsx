import React from 'react';
import { X, Play, Users, Mic, Calendar, Award } from 'lucide-react';
import '../styles/cards.css';

export const EventRecapModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="glass-card modal-content-card" style={{ maxWidth: '900px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close recap modal">
          <X size={22} />
        </button>

        <span className="badge badge-amber" style={{ marginBottom: '12px' }}>
          EVENT RECAP EDITION • {event.year}
        </span>

        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '8px' }}>{event.title}</h2>
        <div style={{ fontSize: '1rem', color: 'var(--accent-cyan)', marginBottom: '24px' }}>
          {event.date} • {event.location}
        </div>

        {/* Video / Highlight Banner */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '320px',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            marginBottom: '32px',
            border: '1px solid var(--border-light)'
          }}
        >
          <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(9, 10, 15, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px'
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--gradient-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 10px 30px rgba(124, 58, 237, 0.6)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <Play size={28} fill="#ffffff" style={{ marginLeft: '4px' }} />
            </div>
            <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
              Watch Official {event.year} Summit Highlights (04:12)
            </span>
          </div>
        </div>

        {/* Impact Statistics */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px', color: '#ffffff' }}>
          Event Impact & Attendance Statistics
        </h3>
        <div className="stats-grid" style={{ marginBottom: '32px', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div className="glass-card stat-card" style={{ padding: '20px 12px' }}>
            <div className="stat-value" style={{ fontSize: '1.8rem' }}>{event.attendees}</div>
            <div className="stat-label" style={{ fontSize: '0.75rem' }}>Attendees</div>
          </div>
          <div className="glass-card stat-card" style={{ padding: '20px 12px' }}>
            <div className="stat-value" style={{ fontSize: '1.8rem' }}>{event.speakers}</div>
            <div className="stat-label" style={{ fontSize: '0.75rem' }}>Speakers</div>
          </div>
          <div className="glass-card stat-card" style={{ padding: '20px 12px' }}>
            <div className="stat-value" style={{ fontSize: '1.8rem' }}>{event.sessions}</div>
            <div className="stat-label" style={{ fontSize: '0.75rem' }}>Sessions</div>
          </div>
          <div className="glass-card stat-card" style={{ padding: '20px 12px' }}>
            <div className="stat-value" style={{ fontSize: '1.8rem' }}>{event.countries}</div>
            <div className="stat-label" style={{ fontSize: '0.75rem' }}>Countries</div>
          </div>
        </div>

        {/* Highlights List */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px', color: '#ffffff' }}>
          Key Summit Moments & Achievements
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
          {event.highlights?.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              <Award size={18} color="var(--accent-cyan)" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
