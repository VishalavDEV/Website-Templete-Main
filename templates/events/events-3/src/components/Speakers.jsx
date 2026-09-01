import React, { useState } from 'react';
import { featuredKeynote, speakersData } from '../data/speakers';
import { Mic, Sparkles, X, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon, TwitterIcon, GitHubIcon } from './SocialIcons';

export default function Speakers() {
  const [activeModalSpeaker, setActiveModalSpeaker] = useState(null);

  return (
    <section id="speakers" className="section-padding">
      <div className="section-header">
        <div className="section-tag">
          <Mic size={14} /> World-Class Luminaries
        </div>
        <h2 className="section-title">
          Summit <span className="text-gradient">Speakers & Keynotes</span>
        </h2>
        <p className="section-subtitle">
          Hear directly from scientists, principal architects, and founders defining the cutting edge of bipedal robotics, fault-tolerant quantum hardware, and embedded neural intelligence.
        </p>
      </div>

      {/* Featured Keynote Banner */}
      <div
        className="glass-card"
        style={{
          borderRadius: '24px',
          padding: '36px',
          marginBottom: '60px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          border: '1px solid rgba(0, 240, 255, 0.4)',
          background: 'linear-gradient(135deg, rgba(16, 24, 40, 0.9) 0%, rgba(138, 43, 226, 0.15) 100%)',
          boxShadow: '0 0 35px rgba(0, 240, 255, 0.15)'
        }}
      >
        {/* Left Photo Container */}
        <div
          style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            maxHeight: '340px',
            border: '2px solid var(--accent-cyan)',
            boxShadow: '0 0 25px rgba(0, 240, 255, 0.3)'
          }}
        >
          <img
            src={featuredKeynote.image}
            alt={featuredKeynote.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              background: 'rgba(8, 11, 18, 0.85)',
              border: '1px solid var(--accent-cyan)',
              padding: '6px 16px',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: 'var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Sparkles size={14} /> Featured Keynote
          </div>
        </div>

        {/* Right Speaker Info */}
        <div>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'var(--accent-cyan)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            Opening Summit Keynote
          </span>
          <h3
            style={{
              fontSize: '2.2rem',
              color: 'var(--text-primary)',
              marginTop: '4px',
              marginBottom: '6px'
            }}
          >
            {featuredKeynote.name}
          </h3>
          <div
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              fontWeight: 600,
              marginBottom: '16px'
            }}
          >
            {featuredKeynote.title} • <span style={{ color: 'var(--accent-cyan)' }}>{featuredKeynote.company}</span>
          </div>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              lineHeight: 1.6,
              marginBottom: '20px'
            }}
          >
            {featuredKeynote.bio}
          </p>

          <div
            style={{
              padding: '16px 20px',
              background: 'rgba(0, 240, 255, 0.08)',
              borderLeft: '4px solid var(--accent-cyan)',
              borderRadius: '8px',
              marginBottom: '24px'
            }}
          >
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase' }}>
              Keynote Presentation
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>
              {featuredKeynote.topic}
            </div>
          </div>

          <button
            onClick={() => setActiveModalSpeaker(featuredKeynote)}
            className="btn-primary"
            style={{ padding: '10px 24px', fontSize: '0.88rem' }}
          >
            Read Full Bio <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* Grid of Speaker Cards */}
      <div className="grid-3">
        {speakersData.map((speaker) => (
          <div
            key={speaker.id}
            className="glass-card"
            onClick={() => setActiveModalSpeaker(speaker)}
            style={{
              padding: '28px',
              borderRadius: '20px',
              textAlign: 'center',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* Circular Photo with Glow Border */}
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                overflow: 'hidden',
                marginBottom: '16px',
                border: '2px solid rgba(0, 240, 255, 0.4)',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '4px' }}>{speaker.name}</h4>
            <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '4px' }}>
              {speaker.title}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              {speaker.company}
            </div>

            <div
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.4,
                marginBottom: '20px',
                flexGrow: 1
              }}
            >
              "{speaker.topic}"
            </div>

            <div className="badge badge-cyan" style={{ marginBottom: '16px' }}>
              {speaker.track}
            </div>

            {/* Social Links */}
            <div
              style={{ display: 'flex', gap: '12px' }}
              onClick={(e) => e.stopPropagation()}
            >
              <a href={speaker.social.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
                <LinkedInIcon size={18} />
              </a>
              <a href={speaker.social.twitter} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
                <TwitterIcon size={18} />
              </a>
              <a href={speaker.social.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
                <GitHubIcon size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Speaker Bio Modal */}
      {activeModalSpeaker && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(8, 11, 18, 0.88)',
            backdropFilter: 'blur(16px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveModalSpeaker(null)}
        >
          <div
            className="glass-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '560px',
              width: '100%',
              padding: '32px',
              borderRadius: '24px',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setActiveModalSpeaker(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid var(--accent-cyan)'
                }}
              >
                <img src={activeModalSpeaker.image} alt={activeModalSpeaker.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.6rem', color: '#fff' }}>{activeModalSpeaker.name}</h3>
                <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem' }}>{activeModalSpeaker.title}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{activeModalSpeaker.company}</div>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                Summit Session Topic
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff' }}>
                {activeModalSpeaker.topic}
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px', fontSize: '0.95rem' }}>
              {activeModalSpeaker.bio || `${activeModalSpeaker.name} leads breakthroughs in ${activeModalSpeaker.track || 'DeepTech'}, pioneering next-generation solutions presented exclusively at VERTEX Summit 2026.`}
            </p>

            <a href="#schedule" onClick={() => setActiveModalSpeaker(null)} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              View Schedule Entry
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
