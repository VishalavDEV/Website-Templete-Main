import React from 'react';
import { Globe, Share2, ExternalLink } from 'lucide-react';

export default function SpeakerCard({ speaker, onSelectSpeaker }) {
  return (
    <div className="speaker-card">
      <div className="speaker-img-wrap">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="speaker-img"
          loading="lazy"
        />
        <span className="badge" style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(17, 24, 39, 0.85)', color: '#fff' }}>
          {speaker.category}
        </span>
      </div>

      <div className="speaker-info">
        <h3 className="speaker-name">{speaker.name}</h3>
        <div className="speaker-role">{speaker.role}</div>
        <div className="speaker-company">{speaker.company}</div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
          {speaker.socials?.twitter && (
            <a href={speaker.socials.twitter} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
              <Share2 size={16} />
            </a>
          )}
          {speaker.socials?.linkedin && (
            <a href={speaker.socials.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
              <Globe size={16} />
            </a>
          )}
        </div>

        <button
          onClick={() => onSelectSpeaker(speaker)}
          className="btn btn-outline btn-sm"
          style={{ width: '100%' }}
        >
          VIEW PROFILE <ExternalLink size={14} />
        </button>
      </div>
    </div>
  );
}
