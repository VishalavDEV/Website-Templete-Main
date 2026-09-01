import React from 'react';
import { Coffee, Shield, Compass, Sparkles } from 'lucide-react';

export default function FineDining() {
  const menus = [
    { title: 'Traditional Indian', description: 'Royal Mewari curries, slow-cooked dal, and hot naans served on hammered thali platters.' },
    { title: 'South Indian Specialties', description: 'Crisp hand-pressed dosas, fluffy idlis, and fresh coconut chutneys prepared by guest master chefs.' },
    { title: 'International Dining', description: 'Classic continental breakfasts and fine global delicacies adapted with subtle organic infusions.' },
    { title: 'Breakfast Experience', description: 'Freshly squeezed juices, hot masala chai, and local hand-kneaded flatbreads under morning sunlight.' },
    { title: 'Private Dining', description: 'A secluded royal dining canopy lit by candles, with custom menu selections and dedicated servers.' }
  ];

  return (
    <section id="dining" style={{ padding: '8rem 0', backgroundColor: 'var(--color-ivory)', position: 'relative' }}>
      <div className="container">
        
        {/* Dining Intro Row */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '5rem', 
          alignItems: 'center',
          marginBottom: '6rem'
        }} className="dining-split">
          
          {/* Left Column: Text */}
          <div>
            <span style={{
              fontFamily: 'var(--font-serif-sc)',
              color: 'var(--color-brass)',
              fontSize: '0.85rem',
              letterSpacing: '0.25em',
              display: 'block',
              marginBottom: '0.8rem'
            }}>
              EPICUREAN SOVEREIGNTY
            </span>

            <h3 style={{
              fontSize: '2.5rem',
              color: 'var(--color-teak-dark)',
              marginBottom: '1.5rem',
              lineHeight: 1.2
            }}>
              Fine Dining: "The Jharokha"
            </h3>

            <p style={{
              color: 'var(--color-teak-light)',
              fontSize: '1.05rem',
              lineHeight: '1.8',
              fontWeight: 300,
              marginBottom: '2rem'
            }}>
              Step under the intricate sandstone archways and sandstone lattice screens (jalis). The Jharokha restaurant features dark wood tables, silk-patterned cushions, and a warm ambient glow from multi-tiered brass chandeliers. Enjoy a culinary journey featuring traditional Indian meals, served gracefully on hand-hammered heavy brass platters.
            </p>

            <button className="btn-gold" style={{ padding: '1rem 2.5rem' }}>
              EXPLORE OUR MENU
            </button>
          </div>

          {/* Right Column: Image with steam particles overlay */}
          <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-premium)' }}>
            <img 
              src="images/6_fine_dining.jpg" 
              alt="Ananthara Fine Dining Thali Platter" 
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '16/9',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            
            {/* Rising Culinary Steam Particles */}
            <div className="steam-particle" style={{ left: '46%', bottom: '26%', width: '12px', height: '12px', animationDelay: '0s' }} />
            <div className="steam-particle" style={{ left: '52%', bottom: '28%', width: '15px', height: '15px', animationDelay: '1.2s' }} />
            <div className="steam-particle" style={{ left: '49%', bottom: '24%', width: '10px', height: '10px', animationDelay: '2.5s' }} />

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

        {/* Experience Cards Grid */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ 
            fontFamily: 'var(--font-serif-sc)', 
            color: 'var(--color-brass)', 
            fontSize: '0.85rem', 
            letterSpacing: '0.25em',
            textTransform: 'uppercase'
          }}>
            CULINARY EXPERIENCES
          </span>
        </div>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {menus.map((menu, idx) => (
            <div 
              key={idx}
              className="glass-card dining-card"
              style={{
                padding: '2rem',
                borderRadius: '4px',
                backgroundColor: 'var(--color-ivory)',
                border: 'var(--border-brass)',
                transition: 'var(--transition-smooth)'
              }}
            >
              <h4 style={{ fontSize: '1.2rem', color: 'var(--color-teak-dark)', marginBottom: '0.8rem' }}>
                {menu.title}
              </h4>
              <p style={{ color: 'var(--color-teak-light)', fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.6 }}>
                {menu.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .dining-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-brass);
          box-shadow: 0 10px 25px rgba(10, 6, 4, 0.15);
        }
        @media (min-width: 992px) {
          .dining-split {
            grid-template-columns: 1fr 1.2fr !important;
            gap: 5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
