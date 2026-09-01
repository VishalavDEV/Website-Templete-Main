import React from 'react';
import { Coffee, Shield, Compass, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section id="dining" style={{ padding: '8rem 0', backgroundColor: 'var(--color-ivory)', position: 'relative' }}>
      <div className="container">
        
        {/* Experience 1: Fine Dining */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '5rem', 
          alignItems: 'center',
          marginBottom: '8rem'
        }} className="exp-grid">
          
          {/* Left Column: Text */}
          <div className="exp-text">
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
              fontSize: '2.2rem',
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
              Step into an intimate setting of sandstone arches and intricate jali stonework. The Jharokha restaurant pairs bone-inlay wooden tables and silk cushions with a warm ambient glow from multi-tiered brass chandeliers. Savor curated thalis, saffron pulao, slow-cooked curries, and warm naan served on hand-hammered brass platters.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-brass)', fontFamily: 'var(--font-serif-sc)', letterSpacing: '0.1em' }}>RESTAURANT HOURS</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-teak-dark)' }}>12:00 PM - 11:30 PM</span>
              </div>
              <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(194, 155, 79, 0.3)' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-brass)', fontFamily: 'var(--font-serif-sc)', letterSpacing: '0.1em' }}>DRESS CODE</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-teak-dark)' }}>Smart Casual / Traditional</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-premium)' }}>
            <img 
              src="images/6_fine_dining.jpg" 
              alt="Ananthara Fine Dining Restaurant" 
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

        {/* Experience 2: Spa & Wellness */}
        <div id="wellness" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '5rem', 
          alignItems: 'center'
        }} className="exp-grid-reverse">
          
          {/* Left Column: Image */}
          <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-premium)' }} className="exp-img">
            <img 
              src="images/7_wellbeing_spa.jpg" 
              alt="Ananthara Wellbeing Spa" 
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
          <div className="exp-text">
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
              fontSize: '2.2rem',
              color: 'var(--color-teak-dark)',
              marginBottom: '1.5rem',
              lineHeight: 1.2
            }}>
              Well-Being: The Ayurvedic Spa
            </h3>

            <p style={{
              color: 'var(--color-teak-light)',
              fontSize: '1.05rem',
              lineHeight: '1.8',
              fontWeight: 300,
              marginBottom: '2rem'
            }}>
              Carved into local sandstone and finished with teak wood screens, our spa suite offers a tranquil retreat. A circular natural river stone tub set into the floor holds warm, mineral-rich water with fresh flower petals. Experience customized massages with organic Ayurvedic oils—infusions of Ashwagandha, Sandalwood, and Turmeric.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-brass)', fontFamily: 'var(--font-serif-sc)', letterSpacing: '0.1em' }}>SPECIALTY</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-teak-dark)' }}>Abhyanga Massage & Shirodhara</span>
              </div>
              <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(194, 155, 79, 0.3)' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-brass)', fontFamily: 'var(--font-serif-sc)', letterSpacing: '0.1em' }}>PRODUCTS</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-teak-dark)' }}>100% Organic Vedic Herbals</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .exp-grid {
            grid-template-columns: 1fr 1.2fr !important;
            gap: 5rem !important;
          }
          .exp-grid-reverse {
            grid-template-columns: 1.2fr 1fr !important;
            gap: 5rem !important;
          }
          .exp-grid-reverse .exp-img {
            order: 1 !important;
          }
          .exp-grid-reverse .exp-text {
            order: 2 !important;
          }
        }
      `}</style>
    </section>
  );
}
