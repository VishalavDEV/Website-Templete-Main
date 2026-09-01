import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, Sparkles, CheckCircle2, ArrowRight, Compass, Flame, Users, Activity } from 'lucide-react';
import Lanyard from '../components/card/Lanyard';

export function AboutPage() {
  return (
    <div className="about-page-view" style={{ padding: '3.5rem 0 6rem' }}>
      <div className="container">
        {/* Editorial Manifesto Hero */}
        <div style={{ maxWidth: '840px', margin: '0 auto 4rem', textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span>EDITORIAL MANIFESTO</span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 5.5vw, 4rem)',
              lineHeight: 1.1,
              color: 'var(--text-ink)',
              margin: '0.75rem 0 1.5rem'
            }}
          >
            Science Didn't Happen in a Vacuum.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '1.35rem',
              lineHeight: 1.6,
              color: 'var(--text-ink-secondary)',
              fontStyle: 'italic'
            }}
          >
            "Science happened through people, mistakes, accidents, ambition, politics, culture, money, experimentation, failure, persistence, and unexpected discoveries."
          </p>
        </div>

        {/* 2-Column Split: Philosophy + 3D Credential Badge */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
            marginBottom: '5rem'
          }}
        >
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text-ink)', marginBottom: '1.25rem' }}>
              Why ELEMENTAL Exists
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-ink-secondary)', marginBottom: '1.25rem' }}>
              Most popular science media treats discovery as a neat, linear march from genius intuition to peer-reviewed triumph. Textbooks omit the explosions, the stolen notes, the decades of institutional resistance, and the crucial labor of women and assistants who were systematically erased from the official record.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-ink-secondary)', marginBottom: '1.5rem' }}>
              ELEMENTAL is a narrative science-history magazine. We exist to make readers stop and think: <strong style={{ color: 'var(--text-ink)' }}>"Why have I never heard this story?"</strong>
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--text-ink)' }}>
                <CheckCircle2 size={16} color="var(--accent-terracotta)" />
                <span>Primary archival sources verified across museum collections</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--text-ink)' }}>
                <CheckCircle2 size={16} color="var(--accent-terracotta)" />
                <span>Focus on material culture: brass instruments, notebooks, and glassware</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--text-ink)' }}>
                <CheckCircle2 size={16} color="var(--accent-terracotta)" />
                <span>Human-first narrative journalism, not dry textbook summaries</span>
              </div>
            </div>
          </div>

          <div>
            <Lanyard
              position={[0, 0, 24]}
              gravity={[0, -40, 0]}
              lanyardWidth={1}
            />
          </div>
        </div>

        {/* The 10 Tenets of Science History */}
        <div style={{ padding: '4rem 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>OUR EDITORIAL TENETS</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--text-ink)' }}>
              How Knowledge Actually Evolves
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Accidents', desc: 'Shattered condensers and contaminated petri dishes that yielded unexpected truths.' },
              { title: 'Mistakes', desc: 'When erroneous hypotheses pushed experimental technique to revolutionary precision.' },
              { title: 'Ambition & Feuds', desc: 'Rivalries that drove competing investigators to measure the impossible.' },
              { title: 'Politics & Statecraft', desc: 'State secrets, naval cartography, and wartime laboratories.' },
              { title: 'Persistence', desc: 'Decades spent staring through monocular lenses into stubborn darkness.' }
            ].map((tenet, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '3px',
                  padding: '1.5rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <span style={{ fontSize: '0.72rem', color: 'var(--accent-terracotta)', fontWeight: 800 }}>0{idx + 1}.</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-ink)', margin: '0.35rem 0 0.5rem' }}>
                  {tenet.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-ink-secondary)', lineHeight: 1.5 }}>
                  {tenet.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Masthead Team Link */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-ink)', marginBottom: '0.75rem' }}>
            Meet the Editorial Team
          </h3>
          <p style={{ fontSize: '1rem', color: 'var(--text-ink-secondary)', marginBottom: '1.5rem' }}>
            Our contributing historians, instrument curators, and archival journalists work across Edinburgh, Paris, Boston, and Oxford.
          </p>
          <Link to="/authors" className="btn-editorial-primary">
            <span>View All Contributors</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
