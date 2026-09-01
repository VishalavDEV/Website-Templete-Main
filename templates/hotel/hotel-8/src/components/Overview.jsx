import React from 'react';
import { Sparkles, MapPin, Calendar, Award } from 'lucide-react';

export default function Overview() {
  const highlights = [
    { title: 'Luxury Stays', description: 'Handcrafted suites reflecting Mewari royalty.', href: '#stay' },
    { title: 'Fine Dining', description: 'Traditional culinary excellence at The Jharokha.', href: '#dining' },
    { title: 'Well-being', description: 'Ayurvedic treatments in our sandstone spa.', href: '#wellbeing' },
    { title: 'Experiences', description: 'A complete day of heritage rituals and vistas.', href: '#experiences' },
  ];

  return (
    <section id="overview" style={{ padding: '8rem 0 6rem 0', backgroundColor: 'var(--color-ivory)', position: 'relative' }}>
      {/* Visual background accents */}
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '2%',
        fontSize: '10rem',
        fontFamily: 'var(--font-serif-header)',
        color: 'var(--color-sandstone-light)',
        opacity: 0.1,
        userSelect: 'none',
        pointerEvents: 'none'
      }}>
        ANANTHARA
      </div>

      <div className="container">
        
        {/* Main Header / Intro text */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }} className="overview-split">
          
          {/* Text block */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <div style={{ width: '25px', height: '1px', backgroundColor: 'var(--color-brass)' }} />
              <span style={{ 
                fontFamily: 'var(--font-serif-sc)', 
                color: 'var(--color-brass)', 
                fontSize: '0.8rem', 
                letterSpacing: '0.2em',
                textTransform: 'uppercase'
              }}>
                A SANCTUARY OF SOVEREIGNTY
              </span>
            </div>

            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              color: 'var(--color-teak-dark)', 
              marginBottom: '1.5rem',
              lineHeight: 1.2
            }}>
              WELCOME TO ANANTHARA
            </h2>

            <p style={{ 
              color: 'var(--color-teak-light)', 
              fontSize: '1.05rem', 
              lineHeight: '1.8', 
              fontWeight: 300,
              marginBottom: '1.5rem'
            }}>
              Constructed entirely of hand-carved golden Jaisalmer sandstone and white Makrana marble, Ananthara stands as a living testament to Udaipur's imperial Mewari heritage. Every arch, pillar, and doorway has been hand-chiseled by local stone artisans to create an authentic royal sanctuary.
            </p>

            <p style={{ 
              color: 'var(--color-teak-light)', 
              fontSize: '1.02rem', 
              lineHeight: '1.8', 
              fontWeight: 300,
              marginBottom: '2rem'
            }}>
              Our guests do not simply stay; they embark on a curated heritage journey. From the scent of morning jasmine to the twilight reflections in the teal-green courtyard pool, Ananthara is where timeless history greets you with warm modern hospitality.
            </p>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <MapPin size={16} style={{ color: 'var(--color-brass)' }} />
              <span style={{ fontSize: '0.85rem', letterSpacing: '0.05em', color: 'var(--color-teak-dark)', fontWeight: 500 }}>
                Haridas Ji Ki Magri, Udaipur, Rajasthan, India
              </span>
            </div>
          </div>

          {/* Image Block (Lobby view showing details of where camera settled) */}
          <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-premium)' }}>
            <img 
              src="images/3_the_lobby.jpg" 
              alt="Ananthara Grand Lobby Interior" 
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '16/10',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            
            {/* Soft inner glow overlay */}
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

        </div>

        {/* Highlights links grid */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ 
            fontFamily: 'var(--font-serif-sc)', 
            color: 'var(--color-brass)', 
            fontSize: '0.85rem', 
            letterSpacing: '0.25em',
            textTransform: 'uppercase'
          }}>
            THE ANANTHARA EXPERIENCE
          </span>
        </div>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {highlights.map((item, idx) => (
            <a 
              key={idx}
              href={item.href}
              className="glass-card overview-card"
              style={{
                padding: '2rem',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                backgroundColor: 'var(--color-ivory)',
                transition: 'var(--transition-smooth)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--color-teak-dark)' }}>
                  {item.title}
                </h4>
                <Sparkles size={16} style={{ color: 'var(--color-brass)' }} />
              </div>
              
              <p style={{ color: 'var(--color-teak-light)', fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.6 }}>
                {item.description}
              </p>
              
              <span style={{ 
                fontSize: '0.75rem', 
                color: 'var(--color-brass)', 
                fontFamily: 'var(--font-serif-sc)', 
                letterSpacing: '0.1em',
                marginTop: 'auto',
                display: 'block'
              }}>
                DISCOVER SECTION &rarr;
              </span>
            </a>
          ))}
        </div>

      </div>

      <style>{`
        .overview-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(10, 6, 4, 0.1);
          border-color: var(--color-brass);
        }
        @media (min-width: 992px) {
          .overview-split {
            grid-template-columns: 1.1fr 1fr !important;
            gap: 5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
