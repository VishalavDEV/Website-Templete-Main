import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Award, Globe, Shield, Users } from 'lucide-react';
import { getAuthors } from '../../services/mockApi';

export default function About() {
  const [fellows, setFellows] = useState([]);

  useEffect(() => {
    getAuthors().then(setFellows);
  }, []);

  return (
    <div style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <div className="atlas-container" style={{ paddingBottom: '7rem' }}>
        <header style={{ textAlign: 'center', maxWidth: '840px', margin: '3rem auto 5rem' }}>
          <div className="atlas-section-eyebrow" style={{ justifyContent: 'center' }}>
            <Compass size={14} />
            <span>Editorial Charter</span>
          </div>
          <h1 className="atlas-section-title">About ATLAS</h1>
          <p className="atlas-section-subtitle" style={{ margin: '0 auto', fontSize: '1.25rem' }}>
            "There is always more to discover." — An independent international publication dedicated to advancing scientific comprehension, documenting environmental thresholds, and illuminating the human condition.
          </p>
        </header>

        {/* 3 Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          <div style={{ padding: '2.5rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '16px', boxShadow: '0 10px 30px -10px rgba(80,60,40,0.08)', backdropFilter: 'blur(8px)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(196,137,44,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-ochre)', marginBottom: '1.5rem' }}>
              <Globe size={24} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Direct Fieldwork
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
              We fund independent researchers and technical photographers to spend months in situ—from Antarctic ice cores to deep ocean trenches.
            </p>
          </div>

          <div style={{ padding: '2.5rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '16px', boxShadow: '0 10px 30px -10px rgba(80,60,40,0.08)', backdropFilter: 'blur(8px)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(39,66,55,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-forest)', marginBottom: '1.5rem' }}>
              <Shield size={24} color="#274237" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Scientific Integrity
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
              Every dispatch is rigorously peer-reviewed by leading domain specialists in geology, biology, astrophysics, and archaeology.
            </p>
          </div>

          <div style={{ padding: '2.5rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '16px', boxShadow: '0 10px 30px -10px rgba(80,60,40,0.08)', backdropFilter: 'blur(8px)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(30,58,95,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-ocean)', marginBottom: '1.5rem' }}>
              <Award size={24} color="#1e3a5f" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Visual Excellence
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
              Photography is our primary editorial language. We champion medium-format documentary truth without synthetic exaggeration.
            </p>
          </div>
        </div>

        {/* Expedition Fellows Masthead */}
        <div className="atlas-section-eyebrow" style={{ marginBottom: '2rem' }}>
          <Users size={14} />
          <span>Expedition Fellows & Editors</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {fellows.map(fellow => (
            <div
              key={fellow.id}
              style={{
                padding: '2rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '14px',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
                boxShadow: '0 10px 30px -10px rgba(80,60,40,0.08)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <img
                src={fellow.avatar}
                alt={fellow.name}
                style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-ochre)', flexShrink: 0 }}
              />
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {fellow.name}
                </h4>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-ochre)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  {fellow.role}
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '8px' }}>
                  {fellow.bio}
                </p>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  📍 {fellow.location} · {fellow.articleCount} Dispatches
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
