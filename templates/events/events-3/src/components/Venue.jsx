import React from 'react';
import { MapPin, Building, BedDouble, Navigation, ExternalLink } from 'lucide-react';

export default function Venue() {
  const hotels = [
    {
      name: 'W Hotel San Francisco',
      stars: '5-Star Luxury',
      distance: '0.2 miles (3 min walk)',
      rate: '$249 / night (Summit Rate)',
      code: 'VERTEX2026',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'St. Regis San Francisco',
      stars: '5-Star Executive',
      distance: '0.3 miles (4 min walk)',
      rate: '$299 / night (VIP Partner)',
      code: 'VERTEXVIP',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Marriott Marquis SF',
      stars: '4-Star Premier',
      distance: '0.4 miles (5 min walk)',
      rate: '$199 / night (Standard Rate)',
      code: 'VERTEXMARR',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="venue" className="section-padding">
      <div className="section-header">
        <div className="section-tag">
          <MapPin size={14} /> Location & Travel Guide
        </div>
        <h2 className="section-title">
          Venue & <span className="text-gradient">Accommodations</span>
        </h2>
        <p className="section-subtitle">
          Hosted at San Francisco's flagship Moscone Innovation Hub. Special summit partner rates available at top adjacent hotels.
        </p>
      </div>

      {/* Main Venue Overview Container */}
      <div
        className="glass-card"
        style={{
          borderRadius: '24px',
          overflow: 'hidden',
          marginBottom: '60px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '0'
        }}
      >
        {/* Left Venue Photo */}
        <div style={{ position: 'relative', minHeight: '320px' }}>
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
            alt="Moscone Center Innovation Hub"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              background: 'rgba(8, 11, 18, 0.85)',
              border: '1px solid var(--accent-cyan)',
              padding: '6px 16px',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: 'var(--accent-cyan)'
            }}
          >
            Summit Convention Venue
          </div>
        </div>

        {/* Right Info & Interactive Map Frame */}
        <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '12px' }}>
            Moscone Innovation Hub
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '16px' }}>
            <MapPin size={18} /> 747 Howard St, San Francisco, CA 94103
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
            Featuring over 150,000 sq ft of high-tech exhibition arenas, soundproofed quantum hardware presentation auditoriums, outdoor micro-drone flight domes, and 5G low-latency developer lab spaces.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '24px',
              fontSize: '0.88rem',
              color: 'var(--text-primary)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Navigation size={16} color="#00f0ff" /> 14 min from SFO Airport
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Building size={16} color="#8a2be2" /> Powell St BART Direct Access
            </div>
          </div>

          {/* Stylized Simulated Map Container */}
          <div
            style={{
              height: '140px',
              borderRadius: '16px',
              background: '#121826',
              border: '1px solid var(--glass-border)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: 'radial-gradient(var(--glass-border) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
                opacity: 0.6
              }}
            />
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', padding: '10px', background: 'rgba(0, 240, 255, 0.2)', borderRadius: '50%', marginBottom: '6px', border: '1px solid var(--accent-cyan)' }}>
                <MapPin size={22} color="#00f0ff" />
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>Interactive Map Marker Activated</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>San Francisco Tech District</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hotel Cards Header */}
      <h3 style={{ textAlign: 'center', fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '32px', fontFamily: 'var(--font-heading)' }}>
        <BedDouble size={20} color="var(--accent-cyan)" style={{ verticalAlign: 'middle', marginRight: '8px' }} />
        Official Summit Partner Hotels
      </h3>

      <div className="grid-3">
        {hotels.map((hotel, idx) => (
          <div
            key={idx}
            className="glass-card"
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
              <img src={hotel.image} alt={hotel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span
                className="badge badge-cyan"
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px'
                }}
              >
                {hotel.stars}
              </span>
            </div>

            <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '4px' }}>{hotel.name}</h4>
                <div style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '12px' }}>
                  {hotel.distance}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginBottom: '12px'
                  }}
                >
                  {hotel.rate}
                </div>
              </div>

              <div
                style={{
                  padding: '10px 14px',
                  background: 'rgba(0, 240, 255, 0.06)',
                  border: '1px dashed rgba(0, 240, 255, 0.3)',
                  borderRadius: '10px',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '12px'
                }}
              >
                <span>Promo Code: <strong style={{ color: '#fff' }}>{hotel.code}</strong></span>
                <ExternalLink size={14} color="#00f0ff" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
