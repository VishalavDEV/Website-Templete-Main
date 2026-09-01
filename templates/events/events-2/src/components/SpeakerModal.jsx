import React from 'react';
import { X, Calendar, MapPin, Globe } from 'lucide-react';
import { IconLinkedin, IconTwitter, IconGithub } from './SocialIcons';
import '../styles/cards.css';

export const SpeakerModal = ({ speaker, onClose }) => {
  if (!speaker) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="glass-card modal-content-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <div className="modal-speaker-grid">
          {/* Left Column: Photo & Socials */}
          <div>
            <img src={speaker.image} alt={speaker.name} className="modal-speaker-img" />
            <div style={{ display: 'flex', gap: '10px', marginTop: '16px', justifyContent: 'center' }}>
              {speaker.socials.linkedin && (
                <a href={speaker.socials.linkedin} target="_blank" rel="noreferrer" className="social-icon-btn">
                  <IconLinkedin size={18} />
                </a>
              )}
              {speaker.socials.twitter && (
                <a href={speaker.socials.twitter} target="_blank" rel="noreferrer" className="social-icon-btn">
                  <IconTwitter size={18} />
                </a>
              )}
              {speaker.socials.github && (
                <a href={speaker.socials.github} target="_blank" rel="noreferrer" className="social-icon-btn">
                  <IconGithub size={18} />
                </a>
              )}
              {speaker.socials.website && (
                <a href={speaker.socials.website} target="_blank" rel="noreferrer" className="social-icon-btn">
                  <Globe size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Bio & Session */}
          <div>
            <span className="badge badge-purple" style={{ marginBottom: '12px' }}>
              {speaker.category}
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '4px' }}>{speaker.name}</h2>
            <div style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '2px' }}>
              {speaker.role}
            </div>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
              {speaker.company}
            </div>

            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px', color: '#ffffff' }}>
              Biography
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
              {speaker.bio}
            </p>

            {/* Key Expertise Pills */}
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '10px', color: '#ffffff' }}>
              Key Expertise
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {speaker.expertise?.map((skill, idx) => (
                <span key={idx} className="filter-pill" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  {skill}
                </span>
              ))}
            </div>

            {/* Session Info Box */}
            {speaker.session && (
              <div
                style={{
                  background: 'rgba(124, 58, 237, 0.1)',
                  border: '1px solid rgba(124, 58, 237, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px'
                }}
              >
                <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>
                  Speaker Session
                </h4>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '10px' }}>
                  {speaker.session.title}
                </div>
                <div style={{ display: 'flex', gap: '18px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} color="var(--accent-purple)" /> {speaker.session.time}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={14} color="var(--accent-purple)" /> {speaker.session.room}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
