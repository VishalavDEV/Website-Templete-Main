import React from 'react';
import { Globe } from 'lucide-react';
import { IconLinkedin, IconTwitter, IconGithub } from './SocialIcons';
import '../styles/cards.css';

export const SpeakerCard = ({ speaker, onSelect }) => {
  return (
    <div className="glass-card speaker-card" onClick={() => onSelect(speaker)}>
      <div className="speaker-image-wrapper">
        <img src={speaker.image} alt={speaker.name} className="speaker-img" />
        <div className="speaker-overlay">
          <span className="badge badge-cyan speaker-topic-badge">{speaker.category}</span>
          <h3 className="speaker-name">{speaker.name}</h3>
          <div className="speaker-role">{speaker.role}</div>
          <div className="speaker-company">{speaker.company}</div>

          {/* Social Icons Bar */}
          <div className="speaker-socials" onClick={(e) => e.stopPropagation()}>
            {speaker.socials.linkedin && (
              <a href={speaker.socials.linkedin} target="_blank" rel="noreferrer" className="social-icon-btn">
                <IconLinkedin size={16} />
              </a>
            )}
            {speaker.socials.twitter && (
              <a href={speaker.socials.twitter} target="_blank" rel="noreferrer" className="social-icon-btn">
                <IconTwitter size={16} />
              </a>
            )}
            {speaker.socials.github && (
              <a href={speaker.socials.github} target="_blank" rel="noreferrer" className="social-icon-btn">
                <IconGithub size={16} />
              </a>
            )}
            {speaker.socials.website && (
              <a href={speaker.socials.website} target="_blank" rel="noreferrer" className="social-icon-btn">
                <Globe size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div style={{ padding: '16px 20px', borderTop: '1px solid var(--border-light)' }}>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
          <strong style={{ color: '#ffffff' }}>Topic:</strong> {speaker.topic}
        </p>
      </div>
    </div>
  );
};
