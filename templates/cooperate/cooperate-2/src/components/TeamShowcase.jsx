import React, { useState } from 'react';
import { ArrowUpRight } from './Icons';
import { TEAM } from '../data/content';

export default function TeamShowcase({ members = TEAM, limit = null }) {
  const [activeMember, setActiveMember] = useState(null);
  const displayMembers = limit ? members.slice(0, limit) : members;

  return (
    <div className="team-editorial-masonry">
      {displayMembers.map((member) => {
        const isToggled = activeMember === member.id;

        return (
          <div
            key={member.id}
            onClick={() => setActiveMember(isToggled ? null : member.id)}
            className="team-masonry-item"
          >
            {/* Portrait */}
            <div className="team-portrait-wrapper">
              <img src={member.image} alt={member.name} />
              
              <div className="work-badge" style={{ top: '0.75rem', left: '0.75rem', fontSize: '0.65rem' }}>
                {member.location}
              </div>

              {/* Bio Overlay */}
              <div className="team-bio-overlay" style={{ opacity: isToggled ? 1 : undefined }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <p className="font-mono text-ochre" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Focus</p>
                  <p className="font-serif" style={{ fontSize: '0.95rem', color: 'var(--bg-cream)' }}>{member.focus}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--bg-cream-300)', lineHeight: '1.5', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                    {member.bio}
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: '0.75rem', color: 'var(--accent-ochre)' }}>
                  <span>{member.experience}</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="team-caption">
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--text-charcoal)' }}>
                  {member.name}
                </h3>
                <p className="font-mono text-secondary" style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginTop: '0.2rem' }}>
                  {member.role}
                </p>
              </div>
              <span className="text-terracotta font-mono" style={{ fontSize: '0.9rem' }}>↗</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
