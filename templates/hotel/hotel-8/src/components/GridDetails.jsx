import React from 'react';
import { Sparkles, Compass, Shield, Flame } from 'lucide-react';

export default function GridDetails() {
  const details = [
    {
      title: 'Traditional Urli Platter',
      tag: 'FRESH FLOWERS & CANDLES',
      description: 'Hand-beaten dark metal bowls (urlis) filled with vibrant orange marigold petals, white jasmine buds, and floating beeswax candles, welcoming guests with sweet, calming aromas.',
      image: 'images/lobby_offering_detail.jpg',
      icon: <Sparkles size={16} />
    },
    {
      title: 'Antique Teak & Brass',
      tag: 'HANDCRAFTED DOORS',
      description: 'Grand entrance double doors made of seasoned dark teak wood, adorned with polished brass filigree, heavy studs, and majestic lion-head handles crafted by Mewar smiths.',
      image: 'images/2_hotel_entrance.jpg',
      icon: <Compass size={16} />
    },
    {
      title: 'Hammered Thali Service',
      tag: 'ROYAL EPICUREAN',
      description: 'Gastronomic specialties served in hand-hammered heavy brass platters (thalis) and bowls, preserving the traditional Mewari presentation of saffron rice, fresh naans, and rich curries.',
      image: 'images/6_fine_dining.jpg',
      icon: <Shield size={16} />
    },
    {
      title: 'The Brass Diya Flame',
      tag: 'WARM EVENING GLOW',
      description: 'Polished brass oil lamps (diyas) placed along sandstone walkways and pool steps, their small flames dancing gently in the evening breeze, reflecting heritage warmth.',
      image: 'images/8_courtyard_pool.jpg',
      icon: <Flame size={16} />
    }
  ];

  return (
    <section style={{ padding: '8rem 0', backgroundColor: 'var(--color-ivory)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">Heritage Details</span>
          <h2>The Artistry of Mewar</h2>
        </div>

        {/* Details Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2.5rem' 
          }}
        >
          {details.map((detail, idx) => (
            <div 
              key={idx}
              className="glass-card detail-card"
              style={{
                borderRadius: '4px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'var(--transition-smooth)',
                backgroundColor: 'var(--color-ivory)'
              }}
            >
              {/* Image box */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img 
                  src={detail.image} 
                  alt={detail.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'var(--transition-slow)'
                  }}
                  className="card-zoom"
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, rgba(15, 9, 6, 0.4) 0%, transparent 60%)',
                  pointerEvents: 'none'
                }} />
                
                {/* Floating Tag */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: 'rgba(35, 18, 11, 0.85)',
                  border: '1px solid var(--color-brass)',
                  borderRadius: '2px',
                  padding: '0.4rem 0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <span style={{ color: 'var(--color-brass)', display: 'flex', alignItems: 'center' }}>
                    {detail.icon}
                  </span>
                  <span style={{ 
                    fontFamily: 'var(--font-serif-sc)', 
                    color: 'var(--color-ivory)', 
                    fontSize: '0.65rem', 
                    letterSpacing: '0.15em' 
                  }}>
                    {detail.tag}
                  </span>
                </div>
              </div>

              {/* Text details */}
              <div style={{ padding: '1.8rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-teak-dark)', marginBottom: '0.8rem' }}>
                  {detail.title}
                </h3>
                <p style={{ 
                  color: 'var(--color-teak-light)', 
                  fontSize: '0.9rem', 
                  lineHeight: '1.6', 
                  fontWeight: 300,
                  flex: 1
                }}>
                  {detail.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .detail-card {
          border: var(--border-brass);
          box-shadow: var(--shadow-premium);
          transition: var(--transition-smooth);
        }
        .detail-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(15, 9, 6, 0.2);
          border-color: var(--color-brass);
        }
        .detail-card:hover .card-zoom {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
