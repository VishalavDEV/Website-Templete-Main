import React, { useState } from 'react';
import { MapPin, Timer } from 'lucide-react';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80";

export default function ParticipantCard({ story }) {
  const [imgSrc, setImgSrc] = useState(story.image);

  return (
    <div 
      className="glass-panel"
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s ease',
        height: '100%'
      }}
    >
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#15171B' }}>
        <img 
          src={imgSrc} 
          alt={story.name}
          onError={() => setImgSrc(FALLBACK_IMAGE)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'var(--marathon-red)',
          color: '#FFF',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '0.7rem',
          fontWeight: 800,
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
        }}>
          {story.bib}
        </div>
      </div>

      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--bright-orange)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>
            {story.race}
          </div>

          <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '10px' }}>
            {story.name}
          </h3>

          <p style={{ color: 'var(--warm-white)', fontStyle: 'italic', fontSize: '0.92rem', marginBottom: '14px', lineHeight: 1.4 }}>
            "{story.quote}"
          </p>

          <p style={{ color: 'var(--soft-grey)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '20px' }}>
            {story.story}
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--soft-grey)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={12} color="var(--bright-orange)" /> {story.location}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Timer size={12} color="var(--bright-orange)" /> Target: {story.targetTime}</span>
        </div>
      </div>
    </div>
  );
}
