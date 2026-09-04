import React, { useState } from 'react';
import { TIMELINE_ENTRIES, type TimelineEntry } from '../../data/timeline';
import { History, Quote, CheckCircle2 } from 'lucide-react';

export const ArtistTimeline: React.FC = () => {
  const [selectedYearIndex, setSelectedYearIndex] = useState<number>(4); // Default 2026

  const activeEntry: TimelineEntry = TIMELINE_ENTRIES[selectedYearIndex];

  return (
    <section id="story" className="section-dark">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Tag */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            color: 'var(--coral)',
            fontFamily: 'var(--font-grotesk)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}
        >
          <History size={14} />
          <span>15 — ARTIST BIOGRAPHY & CHRONOLOGY</span>
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
            fontWeight: 400,
            lineHeight: 1.05,
            color: 'var(--bg-light)',
            marginBottom: '3rem'
          }}
        >
          BUILT FROM NOISE. <br />
          <span style={{ fontStyle: 'italic', color: 'var(--accent-warm)' }}>SHAPED BY SILENCE.</span>
        </h2>

        <style>{`
          @media (max-width: 640px) {
            .timeline-year-btn {
              padding: 8px 14px !important;
              font-size: 1.1rem !important;
            }
          }
        `}</style>
        {/* Year Selector Navigation Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            borderBottom: '1px solid var(--border-dark)',
            paddingBottom: '24px',
            marginBottom: '3rem'
          }}
        >
          {TIMELINE_ENTRIES.map((entry, idx) => {
            const isSelected = selectedYearIndex === idx;
            return (
              <button
                key={entry.year}
                onClick={() => setSelectedYearIndex(idx)}
                className="timeline-year-btn"
                style={{
                  padding: '12px 24px',
                  borderRadius: '4px',
                  backgroundColor: isSelected ? 'var(--accent-warm)' : 'rgba(242, 238, 232, 0.05)',
                  color: isSelected ? '#FFFFFF' : 'var(--text-muted-on-dark)',
                  fontFamily: 'var(--font-condensed)',
                  fontSize: '1.4rem',
                  letterSpacing: '0.1em',
                  transition: 'var(--transition-smooth)',
                  border: isSelected ? 'none' : '1px solid var(--border-dark)'
                }}
                data-cursor={entry.year}
              >
                {entry.year} // {entry.title}
              </button>
            );
          })}
        </div>

        {/* Selected Era Content Grid */}
        <div
          key={activeEntry.year}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            animation: 'fadeIn 0.4s ease-out'
          }}
        >
          {/* Left Column: Era Title & Content */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-condensed)',
                fontSize: '4rem',
                color: 'var(--coral)',
                lineHeight: 1
              }}
            >
              {activeEntry.year}
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.2rem',
                color: 'var(--bg-light)',
                marginTop: '8px',
                marginBottom: '4px'
              }}
            >
              {activeEntry.title}
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-grotesk)',
                fontSize: '0.9rem',
                color: 'var(--lavender)',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              {activeEntry.subtitle}
            </p>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                color: 'var(--text-muted-on-dark)',
                lineHeight: 1.7
              }}
            >
              {activeEntry.content}
            </p>
          </div>

          {/* Right Column: Manifesto Quote & Highlights */}
          <div
            style={{
              backgroundColor: 'rgba(242, 238, 232, 0.03)',
              border: '1px solid var(--border-dark)',
              padding: '36px',
              borderRadius: '6px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <Quote size={28} style={{ color: 'var(--accent-warm)', marginBottom: '16px' }} />
              <blockquote
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '1.3rem',
                  color: 'var(--bg-light)',
                  lineHeight: 1.4,
                  marginBottom: '2rem'
                }}
              >
                "{activeEntry.manifestoQuote}"
              </blockquote>
            </div>

            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-grotesk)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.15em',
                  color: 'var(--coral)',
                  marginBottom: '12px',
                  textTransform: 'uppercase'
                }}
              >
                KEY MILESTONES
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {activeEntry.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--text-muted-on-dark)' }}>
                    <CheckCircle2 size={14} style={{ color: 'var(--accent-warm)', flexShrink: 0 }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
