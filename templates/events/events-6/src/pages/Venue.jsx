import React from 'react';
import { MapPin, Navigation, Car, Shield, Coffee, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Venue() {
  const zones = [
    { name: 'MAIN ENTRANCE', code: 'GATE A & B', desc: 'E-Ticket scanning, security wristbanding, and information kiosk.' },
    { name: 'MAIN STAGE', code: 'ARENA CENTER', desc: '10,000 capacity main stadium arena featuring headliners.' },
    { name: 'ECHO STAGE', code: 'WEST WING', desc: 'Indie & acoustic canopy under golden ambient spotlights.' },
    { name: 'AFTERDARK STAGE', code: 'EAST PAVILION', desc: 'Enclosed synth dome for late-night electronic DJ performances.' },
    { name: 'VIP LOUNGE', code: 'NORTH TIER', desc: 'Private luxury lounge with elevated viewing deck & complimentary bar.' },
    { name: 'FOOD VILLAGE', code: 'SOUTH PLAZA', desc: '20+ gourmet food trucks, artisan woodfired pizza, and mocktail bars.' },
    { name: 'MERCHANDISE AREA', code: 'CENTRAL HUB', desc: 'Official festival apparel, vinyls, posters, and artist meet area.' },
    { name: 'PARKING', code: 'MULTI-LEVEL P1-P4', desc: '4,000 vehicle multi-story parking with VIP valet service.' },
    { name: 'REST AREA', code: 'CHILLOUT ZONE', desc: 'Hydration stations, lounge beanbags, and first-aid medical center.' },
  ];

  return (
    <div style={{ paddingTop: '120px', position: 'relative', zIndex: 10 }}>
      <section className="section-padding" style={{ textAlign: 'center', background: 'radial-gradient(circle at top, #1C1705 0%, #050505 80%)' }}>
        <div className="container">
          <span className="section-subtitle">THE ARENA LAYOUT</span>
          <h1 className="section-title">AURORA SOUND ARENA</h1>
          <p className="section-desc">Chennai, India — State-of-the-art concert venue engineered for acoustic brilliance.</p>
        </div>
      </section>

      {/* Stylized HTML/CSS Venue Map Container */}
      <section className="section-padding">
        <div className="container">
          <div className="venue-map-card">
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <span className="section-subtitle">INTERACTIVE ARENA ZONE DIRECTORY</span>
              <h2 style={{ fontFamily: 'var(--font-display)', color: '#FFF', fontSize: '2rem' }}>
                AURORA FESTIVAL MAP 2026
              </h2>
            </div>

            <div className="venue-map-grid">
              {zones.map((zone, idx) => (
                <div key={idx} className="venue-zone-box">
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--gold-primary)', letterSpacing: '1px' }}>
                    {zone.code}
                  </span>
                  <h4>{zone.name}</h4>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.88rem', lineHeight: '1.5' }}>
                    {zone.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '60px' }}>
            <div className="story-card">
              <div className="story-card-icon"><MapPin /></div>
              <h3>LOCATION ADDRESS</h3>
              <p style={{ color: 'var(--text-gray)' }}>
                Aurora Sound Arena, Outer Ring Road, ECR Cultural Belt, Chennai, Tamil Nadu 600119, India.
              </p>
            </div>

            <div className="story-card">
              <div className="story-card-icon"><Car /></div>
              <h3>PARKING & CAB ACCESS</h3>
              <p style={{ color: 'var(--text-gray)' }}>
                Dedicated ride-share pickup/dropoff bays at Gate 1. Multi-level parking tickets available on entry.
              </p>
            </div>

            <div className="story-card">
              <div className="story-card-icon"><Shield /></div>
              <h3>SAFETY & ACCESSIBILITY</h3>
              <p style={{ color: 'var(--text-gray)' }}>
                Fully wheelchair accessible ramps, 24/7 medical station, and lost-and-found desk.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
