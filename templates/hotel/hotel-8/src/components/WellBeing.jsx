import React from 'react';
import { Compass, Sparkles, Heart } from 'lucide-react';

export default function WellBeing() {
  const offerings = [
    { title: 'Luxury Spa', desc: 'Ayurvedic hot oil therapies administered by traditional healers.' },
    { title: 'Traditional Therapies', desc: 'Sandalwood body scrubs, herbal poultices, and deep tissue Abhyanga.' },
    { title: 'Yoga Shala', desc: 'Morning sun-salutation yoga classes on the peaceful pavilion.' },
    { title: 'Meditation Sanctum', desc: 'Guided mindfulness sessions accompanied by singing bowls.' },
    { title: 'Fitness Centre', desc: 'Modern strength equipment looking out onto lush garden greens.' }
  ];

  return (
    <section id="wellbeing" style={{ padding: '8rem 0', backgroundColor: 'var(--color-dark-bg)', color: 'var(--color-ivory)', position: 'relative' }}>
      
      {/* Background gradients */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 80% 20%, rgba(194, 155, 79, 0.03) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        
        {/* Intro Split */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '5rem', 
          alignItems: 'center',
          marginBottom: '6rem'
        }} className="spa-split">
          
          {/* Left Column: Image */}
          <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(194, 155, 79, 0.2)' }}>
            <img 
              src="images/7_wellbeing_spa.jpg" 
              alt="Ananthara Wellbeing Spa Suite" 
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '16/9',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            <div style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              right: '15px',
              bottom: '15px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              pointerEvents: 'none'
            }} />
          </div>

          {/* Right Column: Text */}
          <div>
            <span style={{
              fontFamily: 'var(--font-serif-sc)',
              color: 'var(--color-brass)',
              fontSize: '0.85rem',
              letterSpacing: '0.25em',
              display: 'block',
              marginBottom: '0.8rem'
            }}>
              VEDIC WELL-BEING
            </span>

            <h3 style={{
              fontSize: '2.5rem',
              color: 'var(--color-ivory)',
              marginBottom: '1.2rem',
              lineHeight: 1.2
            }}>
              RESTORE YOUR BALANCE
            </h3>

            <p style={{
              color: 'var(--color-sandstone-light)',
              opacity: 0.85,
              fontSize: '1.05rem',
              lineHeight: '1.8',
              fontWeight: 300,
              marginBottom: '2rem'
            }}>
              Constructed of aged sandstone, natural river stones, and delicate teak wood screens, our spa suite offers an oasis of quiet calm. Floating marigold and jasmine petals surround a circular soaking tub. Replenish your spirit with specialized treatments using organic oils of Sandalwood, Turmeric, and Ashwagandha.
            </p>

            <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
              <Heart size={20} style={{ color: 'var(--color-brass)' }} />
              <span style={{ fontFamily: 'var(--font-serif-sc)', fontSize: '0.85rem', color: 'var(--color-brass)', letterSpacing: '0.15em' }}>
                ANCIENT AYURVEDA MEDITATION SANCTUM
              </span>
            </div>
          </div>

        </div>

        {/* Offerings Grid */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ 
            fontFamily: 'var(--font-serif-sc)', 
            color: 'var(--color-brass)', 
            fontSize: '0.85rem', 
            letterSpacing: '0.25em',
            textTransform: 'uppercase'
          }}>
            WELLNESS REPUTATION
          </span>
        </div>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {offerings.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card-dark spa-card"
              style={{
                padding: '2rem',
                borderRadius: '4px',
                backgroundColor: '#140D0A',
                border: '1px solid rgba(194, 155, 79, 0.2)',
                transition: 'var(--transition-smooth)'
              }}
            >
              <h4 style={{ fontSize: '1.2rem', color: 'var(--color-ivory)', marginBottom: '0.8rem' }}>
                {item.title}
              </h4>
              <p style={{ color: 'var(--color-sandstone-light)', opacity: 0.8, fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .spa-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-brass) !important;
          box-shadow: 0 10px 25px rgba(0,0,0,0.4);
        }
        @media (min-width: 992px) {
          .spa-split {
            grid-template-columns: 1.2fr 1fr !important;
            gap: 5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
