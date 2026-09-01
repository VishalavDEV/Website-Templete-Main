import React, { useState } from 'react';
import GlitchText from '../components/GlitchText';
import { MapPin, Navigation, Wifi, Car, Moon, Coffee, Shield, Gamepad2, Zap, HelpCircle, Layers } from 'lucide-react';

const Venue = () => {
  const [selectedZone, setSelectedZone] = useState('MAIN_LAB');

  const zones = [
    {
      id: 'MAIN_LAB',
      name: 'Main Hacker Workstations',
      floor: 'Floor 1 — Grand Hall',
      desc: '500+ ergonomic desks equipped with dual power sockets, gigabit ethernet ports, and high-speed Wi-Fi access.',
      icon: Zap
    },
    {
      id: 'REST_ZONE',
      name: 'Sleeping & Rest Zone',
      floor: 'Floor 2 — Quiet Suite',
      desc: 'Sound-dampened quiet lounge with comfortable beanbags, sleeping pods, warm lighting, and fresh linens.',
      icon: Moon
    },
    {
      id: 'FOOD_ZONE',
      name: 'Dining & Refreshment Deck',
      floor: 'Ground Floor — Cafeteria',
      desc: 'Spacious dining deck hosting buffet meals, midnight pizza counter, and 24/7 espresso & energy drink bar.',
      icon: Coffee
    },
    {
      id: 'RECREATION',
      name: 'Gaming & Recreation Lounge',
      floor: 'Floor 3 — Rooftop Arena',
      desc: 'Retro arcade machines, PS5 gaming consoles, foosball tables, and synthwave DJ stage to decompress.',
      icon: Gamepad2
    },
    {
      id: 'HELP_DESK',
      name: 'Tech Desk & First Aid',
      floor: 'Main Entrance Lobby',
      desc: '24/7 help desk for hardware replacement, Wi-Fi credentials, medical first-aid, and organizer support.',
      icon: Shield
    }
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Page Hero */}
      <section className="section-padding cyber-grid-bg" style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 255, 102, 0.2)' }}>
        <div className="container">
          <div className="badge-tag">● HACKATHON CAMPUS</div>
          <GlitchText text="NEXORA INNOVATION LAB" tag="h1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.75rem' }} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#94a3b8', maxWidth: '650px', margin: '0 auto' }}>
            Chennai, India — State-of-the-art 30,000 sq ft innovation campus built for 24-hour overnight hacking sprints.
          </p>
        </div>
      </section>

      {/* Address & Quick Info Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginBottom: '4rem' }}>
            {/* Left: Venue Address Card */}
            <div className="cyber-card" style={{ padding: '2.5rem', backgroundColor: 'rgba(10, 16, 12, 0.9)' }}>
              <div className="cyber-corner-tl" />
              <div className="cyber-corner-br" />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <MapPin size={28} color="#00ff66" />
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>VENUE ADDRESS</h3>
                  <div style={{ color: '#00ff66', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>NEXORA INNOVATION CAMPUS</div>
                </div>
              </div>

              <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.95rem' }}>
                Nexora Tech Park, Sector 4,<br />
                OMR IT Expressway, Perungudi,<br />
                Chennai, Tamil Nadu - 600096, India
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#94a3b8', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Navigation size={16} color="#00ff66" />
                  <span>Landmark: Opposite Cyber Tower Metro Station</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Car size={16} color="#00ff66" />
                  <span>Free Hacker Parking available inside Gate 2</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Wifi size={16} color="#00ff66" />
                  <span>Gigabit Fiber (Network SSID: NEXORA-HACKER-MESH)</span>
                </div>
              </div>
            </div>

            {/* Right: Map Placeholder Box */}
            <div
              className="cyber-card"
              style={{
                padding: '2rem',
                backgroundColor: 'rgba(5, 8, 6, 0.95)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                border: '1px solid #00ff66',
                boxShadow: '0 0 25px rgba(0, 255, 102, 0.2)'
              }}
            >
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 255, 102, 0.15)',
                  border: '2px solid #00ff66',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00ff66',
                  marginBottom: '1rem',
                  boxShadow: '0 0 20px #00ff66'
                }}
              >
                <MapPin size={36} />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem' }}>INTERACTIVE CAMPUS MAP</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
                GPS: 12.9654° N, 80.2461° E
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{ padding: '0.65rem 1.5rem', fontSize: '0.85rem' }}
              >
                OPEN IN GOOGLE MAPS <Navigation size={16} />
              </a>
            </div>
          </div>

          {/* Interactive CSS Venue Blueprint / Zones */}
          <div className="title-container">
            <div className="badge-tag">● CAMPUS LAYOUT</div>
            <h2 className="section-title text-gradient">INTERACTIVE VENUE MAP ZONES</h2>
            <p className="section-subtitle">Click a campus section to explore facilities and workstation areas.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {zones.map((z) => {
              const IconComp = z.icon;
              const isSel = selectedZone === z.id;
              return (
                <button
                  key={z.id}
                  onClick={() => setSelectedZone(z.id)}
                  style={{
                    padding: '1.25rem 1rem',
                    borderRadius: '8px',
                    backgroundColor: isSel ? 'rgba(0, 255, 102, 0.15)' : 'rgba(10, 16, 12, 0.8)',
                    border: `1px solid ${isSel ? '#00ff66' : 'rgba(0, 255, 102, 0.2)'}`,
                    color: isSel ? '#00ff66' : '#94a3b8',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    textAlign: 'center',
                    boxShadow: isSel ? '0 0 20px rgba(0, 255, 102, 0.3)' : 'none'
                  }}
                >
                  <IconComp size={24} color={isSel ? '#00ff66' : '#94a3b8'} />
                  <span>{z.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Zone Detail Card */}
          {zones
            .filter((z) => z.id === selectedZone)
            .map((z) => (
              <div
                key={z.id}
                className="cyber-card pulse-glow"
                style={{
                  padding: '2.5rem',
                  backgroundColor: 'rgba(10, 16, 12, 0.95)',
                  border: '1px solid #00ff66'
                }}
              >
                <div className="badge-tag">{z.floor}</div>
                <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.75rem' }}>{z.name}</h3>
                <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.7' }}>{z.desc}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Venue;
