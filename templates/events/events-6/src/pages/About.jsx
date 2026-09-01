import React from 'react';
import { Shield, Sparkles, Heart, Compass, Music, Flame, Users } from 'lucide-react';
import Newsletter from '../components/Newsletter';

export default function About() {
  return (
    <div style={{ paddingTop: '120px', position: 'relative', zIndex: 10 }}>
      {/* Header */}
      <section className="section-padding" style={{ textCenter: 'center', background: 'radial-gradient(circle at top, #1A1505 0%, #050505 80%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-subtitle">ABOUT VELORA LIVE</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }}>
            MORE THAN MUSIC.
          </h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '750px', margin: '20px auto 0', lineHeight: '1.8' }}>
            “Velora Live creates immersive music experiences where artists and audiences connect through sound, light and unforgettable moments.”
          </p>
        </div>
      </section>

      {/* Story Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="story-cards-grid">
            <div className="story-card">
              <div className="story-card-icon"><Compass /></div>
              <h3>OUR STORY</h3>
              <p style={{ color: 'var(--text-gray)' }}>
                Founded in 2022, Velora Live began with a singular vision: to liberate live music from standard arena routines and build cinematic, story-driven sonic nights.
              </p>
            </div>

            <div className="story-card">
              <div className="story-card-icon"><Sparkles /></div>
              <h3>OUR VISION</h3>
              <p style={{ color: 'var(--text-gray)' }}>
                To establish Asia's premier independent live music festival brand, celebrated for pristine audio architecture and striking visual aesthetics.
              </p>
            </div>

            <div className="story-card">
              <div className="story-card-icon"><Shield /></div>
              <h3>OUR MISSION</h3>
              <p style={{ color: 'var(--text-gray)' }}>
                To champion breakthrough indie artists, electronic producers, and visionary singers alongside state-of-the-art stage light design.
              </p>
            </div>

            <div className="story-card">
              <div className="story-card-icon"><Heart /></div>
              <h3>OUR VALUES</h3>
              <p style={{ color: 'var(--text-gray)' }}>
                Uncompromised sound quality, fan-first safety, artistic integrity, and fostering a global community bound by rhythm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Live Music Dedicated Section */}
      <section className="section-padding" style={{ background: '#080808' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">THE CORE PHILOSOPHY</span>
            <h2 className="section-title">WHY LIVE MUSIC?</h2>
            <p className="section-desc">“Recorded music can be heard anywhere. Live music is experienced together.”</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {[
              { title: 'Human Connection', desc: 'Shedding digital screens to stand shoulder-to-shoulder with thousands feeling the exact same beat.', icon: <Users /> },
              { title: 'Pure Live Performance', desc: 'Raw vocals, unscripted instrument solos, and acoustic improvisations that happen only once in a lifetime.', icon: <Music /> },
              { title: 'Crowd Energy', desc: 'An exhilarating collective roar that amplifies performance intensity beyond any studio track.', icon: <Flame /> },
              { title: 'Artist Interaction', desc: 'Singers looking directly into the crowd, sharing personal stories between songs.', icon: <Heart /> },
              { title: 'Shared Memories', desc: 'Moments frozen in golden spotlight rays that stay etched in memory forever.', icon: <Sparkles /> },
              { title: 'Visual Experience', desc: 'Massive laser rigs, atmospheric smoke fog, and dynamic audio-reactive visuals.', icon: <Compass /> },
            ].map((item, idx) => (
              <div key={idx} className="story-card" style={{ display: 'flex', gap: '16px' }}>
                <div style={{ color: 'var(--gold-bright)' }}>{item.icon}</div>
                <div>
                  <h4 style={{ color: '#FFF', fontSize: '1.2rem', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Statistics Banner */}
      <section className="stats-banner">
        <div className="container">
          <div className="stats-grid">
            <div>
              <div className="stat-number">30+</div>
              <div className="stat-label">ARTISTS</div>
            </div>
            <div>
              <div className="stat-number">15K+</div>
              <div className="stat-label">ATTENDEES</div>
            </div>
            <div>
              <div className="stat-number">10+</div>
              <div className="stat-label">HOURS OF MUSIC</div>
            </div>
            <div>
              <div className="stat-number">3</div>
              <div className="stat-label">STAGES</div>
            </div>
            <div>
              <div className="stat-number">50+</div>
              <div className="stat-label">LIVE MOMENTS</div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
