import React from 'react';
import { Music, Users, Clock, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Stages() {
  const stagesData = [
    {
      id: 1,
      name: 'MAIN STAGE',
      tagline: 'Monumental Arena Performances',
      capacity: '10,000+ Attendees',
      style: 'Pop, Indie Headliners, Rock & Soul',
      artists: ['Lyra Voss', 'The Silver Room', 'Mira Vale', 'Zen Ray'],
      schedule: '6:00 PM - 12:00 AM',
      specs: '120,000 Watt L-Acoustics Sound System, 4K LED Curved Backdrop, Golden Laser Array',
      image: '/images/main_stage.jpg',
    },
    {
      id: 2,
      name: 'ECHO STAGE',
      tagline: 'Independent & Emerging Acoustic Revelations',
      capacity: '3,500 Attendees',
      style: 'Acoustic Indie, Dream Pop, Singer-Songwriters',
      artists: ['Elio Vane', 'Aria Noir', 'Acoustic Collective'],
      schedule: '5:30 PM - 11:00 PM',
      specs: 'Warm Acoustic Array, Natural Golden Spotlights, Surround Sound Canopy',
      image: '/images/hero_performer.jpg',
    },
    {
      id: 3,
      name: 'AFTERDARK STAGE',
      tagline: 'Late-Night Electronic & DJ Sanctuary',
      capacity: '2,500 Attendees',
      style: 'Electronic, Synth-Wave, Techno, Deep House',
      artists: ['Kael Nova', 'Nova Kai', 'Midnight Frequency DJs'],
      schedule: '11:00 PM - 2:00 AM',
      specs: 'Sub-bass Earthquake Subs, Hologram Projection Ring, Smoke Beams',
      image: '/images/dj_performer.jpg',
    },
  ];

  return (
    <div style={{ paddingTop: '120px', position: 'relative', zIndex: 10 }}>
      <section className="section-padding" style={{ textAlign: 'center', background: 'radial-gradient(circle at top, #1C1705 0%, #050505 80%)' }}>
        <div className="container">
          <span className="section-subtitle">THE THREE SONIC ARENAS</span>
          <h1 className="section-title">FESTIVAL STAGES</h1>
          <p className="section-desc">Explore the unique sound engineering and line-ups powering each of our 3 stages.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
          {stagesData.map((st) => (
            <div key={st.id} className="story-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '36px', alignItems: 'center' }}>
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '320px', border: 'var(--border-gold)' }}>
                <img src={st.image} alt={st.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--gold-bright)', letterSpacing: '2px' }}>{st.capacity}</span>
                <h2 style={{ fontFamily: 'var(--font-display)', color: '#FFF', fontSize: '2.2rem', margin: '6px 0 12px' }}>{st.name}</h2>
                <p style={{ color: 'var(--gold-primary)', fontStyle: 'italic', fontSize: '1.05rem', marginBottom: '16px' }}>“{st.tagline}”</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '20px' }}>
                  <div><strong>Style:</strong> {st.style}</div>
                  <div><strong>Schedule:</strong> {st.schedule}</div>
                  <div><strong>Featured Artists:</strong> {st.artists.join(', ')}</div>
                  <div><strong>Audio Tech:</strong> {st.specs}</div>
                </div>

                <Link to="/schedule" className="btn-secondary" style={{ padding: '10px 24px', fontSize: '0.82rem' }}>
                  VIEW STAGE SCHEDULE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
