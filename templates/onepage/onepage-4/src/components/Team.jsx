import React from 'react';
import { teamData } from '../data/content';
import { TwitterIcon, LinkedinIcon, GithubIcon, DribbbleIcon } from './SocialIcons';

export default function Team() {
  return (
    <section id="team" className="section" style={{ background: 'transparent' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div className="section-tag">
            LEADERSHIP & CRAFTSMEN
          </div>
          <h2 className="section-title">
            The Minds Behind <span className="text-gradient">AETHERIA</span>
          </h2>
          <p className="section-subtitle">
            Our principal architects, creative directors, and AI strategists bring decades of collective engineering leadership from top global Silicon Valley firms.
          </p>
        </div>

        {/* Team Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {teamData.map((member) => (
            <div
              key={member.id}
              className="glass-card"
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.25rem) clamp(1rem, 2.5vw, 1.75rem)',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative'
              }}
            >
              {/* Member AI Portrait Photo */}
              <div 
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  position: 'relative',
                  marginBottom: '1.25rem',
                  padding: '4px',
                  background: member.avatarGradient,
                  boxShadow: '0 10px 25px rgba(0, 102, 255, 0.25)'
                }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Experience Badge */}
              <span style={{ fontSize: '0.725rem', fontWeight: 700, padding: '0.2rem 0.65rem', borderRadius: '12px', background: 'rgba(0, 102, 255, 0.08)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                {member.experience}
              </span>

              {/* Name & Title */}
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                {member.name}
              </h3>

              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                {member.role}
              </span>

              {/* Bio */}
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {member.bio}
              </p>

              {/* Skill Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
                {member.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    style={{
                      padding: '0.25rem 0.65rem',
                      borderRadius: '8px',
                      background: 'var(--bg-secondary)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--text-subtle)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)', width: '100%', justifyContent: 'center' }}>
                {member.socials.twitter && (
                  <a href={member.socials.twitter} target="_blank" rel="noreferrer" style={{ color: 'var(--text-subtle)', transition: 'color 0.2s' }} aria-label="Twitter">
                    <TwitterIcon size={18} />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-subtle)', transition: 'color 0.2s' }} aria-label="LinkedIn">
                    <LinkedinIcon size={18} />
                  </a>
                )}
                {member.socials.github && (
                  <a href={member.socials.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-subtle)', transition: 'color 0.2s' }} aria-label="GitHub">
                    <GithubIcon size={18} />
                  </a>
                )}
                {member.socials.dribbble && (
                  <a href={member.socials.dribbble} target="_blank" rel="noreferrer" style={{ color: 'var(--text-subtle)', transition: 'color 0.2s' }} aria-label="Dribbble">
                    <DribbbleIcon size={18} />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
