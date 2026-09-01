import React from 'react';
import { Music, Zap, Disc, Utensils, Palette, ShoppingBag, Camera, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Experience() {
  const experiencesList = [
    { title: 'LIVE MUSIC', desc: 'Prerequisites: 3 stages, 30+ artists, 10 hours of non-stop live performances spanning pop, soul, electronic, and rock.', icon: <Music size={32} />, image: '/images/hero_performer.jpg' },
    { title: 'LIGHT SHOW', desc: 'Synchronized golden spotlight arrays, high-power laser beam cannons, and volumetric fog curtains.', icon: <Zap size={32} />, image: '/images/main_stage.jpg' },
    { title: 'DJ ZONE', desc: 'After-hours synth sanctuary featuring modular synthesizer DJ sets and deep electronic grooves until dawn.', icon: <Disc size={32} />, image: '/images/dj_performer.jpg' },
    { title: 'FOOD VILLAGE', desc: 'Curated gourmet street food trucks, artisan woodfired pizzas, vegan specialties, and craft mocktails.', icon: <Utensils size={32} />, image: '/images/main_stage.jpg' },
    { title: 'ART INSTALLATIONS', desc: 'Interactive audio-reactive light sculptures and oversized glowing neon acoustic installations.', icon: <Palette size={32} />, image: '/images/hero_performer.jpg' },
    { title: 'MERCHANDISE', desc: 'Limited edition Velora Live hoodies, vintage concert poster prints, vinyl records, and golden wristbands.', icon: <ShoppingBag size={32} />, image: '/images/dj_performer.jpg' },
    { title: 'PHOTO ZONE', desc: 'Golden glowing stage backdrop photo booths designed for unforgettable memory capturing.', icon: <Camera size={32} />, image: '/images/main_stage.jpg' },
    { title: 'VIP LOUNGE', desc: 'Air-conditioned luxury lounge, private bar, front-stage viewing deck, and exclusive artist meet & greets.', icon: <Crown size={32} />, image: '/images/hero_performer.jpg' },
  ];

  return (
    <div style={{ paddingTop: '120px', position: 'relative', zIndex: 10 }}>
      <section className="section-padding" style={{ textAlign: 'center', background: 'radial-gradient(circle at top, #1E1705 0%, #050505 80%)' }}>
        <div className="container">
          <span className="section-subtitle">IMMERSIVE FESTIVAL WORLD</span>
          <h1 className="section-title">THE VELORA EXPERIENCE</h1>
          <p className="section-desc">More than a concert — step into an immersive night of music, art, lights, and luxury.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {experiencesList.map((exp, idx) => (
              <div key={idx} className="story-card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img src={exp.image} alt={exp.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, #141414 0%, transparent 100%)' }} />
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ color: 'var(--gold-bright)', marginBottom: '12px' }}>{exp.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: '#FFF', fontSize: '1.4rem', marginBottom: '8px' }}>{exp.title}</h3>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', lineHeight: '1.6' }}>{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/tickets" className="btn-primary" style={{ padding: '16px 40px' }}>
              RESERVE YOUR PASS NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
