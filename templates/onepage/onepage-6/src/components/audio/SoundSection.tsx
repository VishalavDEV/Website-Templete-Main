import React from 'react';
import { AudioVisualizer } from './AudioVisualizer';
import { TrackExplorer } from './TrackExplorer';
import { Radio } from 'lucide-react';

export const SoundSection: React.FC = () => {
  return (
    <section id="sound" className="section-dark">
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
          <Radio size={14} />
          <span>07 — SOUND EXPERIENCE</span>
        </div>

        {/* Section Heading */}
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
            fontWeight: 400,
            lineHeight: 1.05,
            color: 'var(--bg-light)',
            marginBottom: '1rem'
          }}
        >
          THE SOUND <br />
          <span style={{ fontStyle: 'italic', color: 'var(--accent-warm)' }}>IS THE STORY.</span>
        </h2>

        <p
          style={{
            maxWidth: '540px',
            color: 'var(--text-muted-on-dark)',
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}
        >
          Explore the frequency catalog of NOVA//ECHO. Each track represents a physical room, acoustic resonance, or nocturnal memory captured on tape.
        </p>

        {/* Interactive Frequency Visualizer */}
        <AudioVisualizer />

        {/* Track Explorer List */}
        <TrackExplorer />
      </div>
    </section>
  );
};
