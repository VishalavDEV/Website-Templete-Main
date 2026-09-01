import React from 'react';
import { X, Globe, Share2, BookOpen } from 'lucide-react';

export default function SpeakerModal({ speaker, onClose }) {
  if (!speaker) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2rem' }}>
          <img
            src={speaker.image}
            alt={speaker.name}
            style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--primary)' }}
          />
          <div>
            <span className="badge" style={{ marginBottom: '0.5rem' }}>{speaker.category}</span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)' }}>{speaker.name}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{speaker.role}</p>
            <p style={{ color: 'var(--primary)', fontWeight: 600 }}>{speaker.company}</p>
          </div>
        </div>

        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '0.9rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
            Biography
          </h4>
          <p style={{ color: 'var(--text-main)', lineHeight: 1.6 }}>{speaker.bio}</p>
        </div>

        <div style={{ background: 'var(--bg-main)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '0.9rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <BookOpen size={16} /> Session Presentation
          </h4>
          <p style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)' }}>
            "{speaker.topic}"
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Social Links:</span>
          {speaker.socials?.twitter && (
            <a href={speaker.socials.twitter} target="_blank" rel="noreferrer" className="theme-toggle-btn">
              <Share2 size={16} />
            </a>
          )}
          {speaker.socials?.linkedin && (
            <a href={speaker.socials.linkedin} target="_blank" rel="noreferrer" className="theme-toggle-btn">
              <Globe size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
