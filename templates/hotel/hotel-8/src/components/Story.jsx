import React, { useState } from 'react';
import { Sparkles, Heart, HelpCircle } from 'lucide-react';

export default function Story() {
  const [activeTab, setActiveTab] = useState('entrance');
  const [doorsOpen, setDoorsOpen] = useState(false);

  const content = {
    entrance: {
      title: 'The Grand Entrance',
      subtitle: 'A Sacred Threshold of Marigolds & Jasmine',
      description: 'As you step through the hand-carved sandstone archways, you are greeted by the timeless scent of fresh marigold garlands and white jasmine. Our double teak doors, heavy with polished brass lion-head handles, open slowly to transition you from the outside world into a sanctuary of peaceful luxury.',
      highlight: 'Symmetrical Rajasthani architectural archway featuring hand-crafted metal lanterns and daily marigold draping ceremonies.',
      image: 'images/2_hotel_entrance.jpg',
      alt: 'Ananthara Heritage Hotel Symmetrical Entrance'
    },
    lobby: {
      title: 'The Imperial Lobby',
      subtitle: 'Where Heritage Architecture Meets Soft Candlelight',
      description: 'The central lobby, capped by a magnificent traditional dome, is bathed in the warm amber glow of hanging metal lanterns and a multi-tiered brass and crystal chandelier. Handcrafted dark wood armchairs upholstered in rich silk textiles frame the path towards the reception desk, where large brass bowls (urlis) float fresh marigolds and glowing candles.',
      highlight: 'Textured stone walls displaying authentic Mewari miniature paintings and polished marble floors leading under sandstone arches.',
      image: 'images/3_the_lobby.jpg',
      alt: 'Ananthara Heritage Hotel Grand Lobby'
    }
  };

  const active = content[activeTab];

  return (
    <section id="lobby" style={{ padding: '8rem 0', backgroundColor: 'var(--color-ivory)', position: 'relative' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        fontSize: '12rem',
        fontFamily: 'var(--font-serif-header)',
        color: 'var(--color-sandstone-light)',
        opacity: 0.15,
        userSelect: 'none',
        pointerEvents: 'none'
      }}>
        ANANTHARA
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">The Royal Welcome</span>
          <h2>The Entrance & Lobby Experience</h2>
        </div>

        {/* Tab Selectors */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem', 
          marginBottom: '4rem',
          borderBottom: '1px solid rgba(194, 155, 79, 0.2)',
          paddingBottom: '1rem'
        }}>
          <button 
            onClick={() => setActiveTab('entrance')}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-serif-sc)',
              fontSize: '1.05rem',
              letterSpacing: '0.15em',
              color: activeTab === 'entrance' ? 'var(--color-brass)' : 'var(--color-teak-light)',
              cursor: 'pointer',
              paddingBottom: '1rem',
              position: 'relative',
              transition: 'var(--transition-smooth)'
            }}
          >
            THE GRAND THRESHOLD
            {activeTab === 'entrance' && (
              <div style={{
                position: 'absolute',
                bottom: '-1px',
                left: 0,
                width: '100%',
                height: '2px',
                backgroundColor: 'var(--color-brass)'
              }} />
            )}
          </button>

          <button 
            onClick={() => setActiveTab('lobby')}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-serif-sc)',
              fontSize: '1.05rem',
              letterSpacing: '0.15em',
              color: activeTab === 'lobby' ? 'var(--color-brass)' : 'var(--color-teak-light)',
              cursor: 'pointer',
              paddingBottom: '1rem',
              position: 'relative',
              transition: 'var(--transition-smooth)'
            }}
          >
            THE IMPERIAL SANCTUARY
            {activeTab === 'lobby' && (
              <div style={{
                position: 'absolute',
                bottom: '-1px',
                left: 0,
                width: '100%',
                height: '2px',
                backgroundColor: 'var(--color-brass)'
              }} />
            )}
          </button>
        </div>

        {/* Interactive Dual-Column Presentation */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '4rem', 
            alignItems: 'center' 
          }}
        >
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            {/* Column 1: Interactive Image/Door Showcase */}
            <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-premium)' }}>
              
              {activeTab === 'entrance' ? (
                /* Interactive 3D Opening Doors Animation */
                <div 
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16/9',
                    backgroundColor: 'var(--color-dark-bg)',
                    cursor: 'pointer',
                    overflow: 'hidden'
                  }}
                  onClick={() => setDoorsOpen(!doorsOpen)}
                >
                  {/* Background: Lobby Reveal */}
                  <img 
                    src="images/3_the_lobby.jpg" 
                    alt="Revealed Lobby"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      zIndex: 1,
                      transform: doorsOpen ? 'scale(1.02)' : 'scale(1.0)',
                      transition: 'transform 3s cubic-bezier(0.25, 1, 0.5, 1)'
                    }}
                  />
                  
                  {/* Backdrop overlay for lobby depth */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: doorsOpen ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.5)',
                    zIndex: 2,
                    transition: 'background-color 2s ease-in-out'
                  }} />

                  {/* Symmetrical Entrance Arch Frame (Masking the doorway) */}
                  <img 
                    src="images/2_hotel_entrance.jpg" 
                    alt="Entrance Frame"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      zIndex: 3,
                      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 59% 100%, 59% 40%, 41% 40%, 41% 100%, 0% 100%)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Left Door Panel (3D Rotation) */}
                  <div 
                    style={{
                      position: 'absolute',
                      left: '41%',
                      top: '40%',
                      width: '9.1%',
                      height: '60%',
                      backgroundColor: '#32180F',
                      backgroundImage: 'url("images/2_hotel_entrance.jpg")',
                      backgroundSize: '1100% 167%', // scaling image to crop the left door
                      backgroundPosition: '45.1% 67%',
                      borderRight: '1px solid rgba(194, 155, 79, 0.4)',
                      zIndex: 4,
                      transformOrigin: 'left center',
                      transform: doorsOpen ? 'perspective(1200px) rotateY(-80deg)' : 'perspective(1200px) rotateY(0deg)',
                      transition: 'transform 2.5s cubic-bezier(0.25, 1, 0.5, 1)',
                      boxShadow: doorsOpen ? '5px 0 15px rgba(0,0,0,0.5)' : 'none'
                    }}
                  />

                  {/* Right Door Panel (3D Rotation) */}
                  <div 
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '40%',
                      width: '9.1%',
                      height: '60%',
                      backgroundColor: '#32180F',
                      backgroundImage: 'url("images/2_hotel_entrance.jpg")',
                      backgroundSize: '1100% 167%', // scaling image to crop the right door
                      backgroundPosition: '55.1% 67%',
                      borderLeft: '1px solid rgba(194, 155, 79, 0.4)',
                      zIndex: 4,
                      transformOrigin: 'right center',
                      transform: doorsOpen ? 'perspective(1200px) rotateY(80deg)' : 'perspective(1200px) rotateY(0deg)',
                      transition: 'transform 2.5s cubic-bezier(0.25, 1, 0.5, 1)',
                      boxShadow: doorsOpen ? '-5px 0 15px rgba(0,0,0,0.5)' : 'none'
                    }}
                  />

                  {/* Floating Action Tip */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    backgroundColor: 'rgba(15, 9, 6, 0.75)',
                    border: '1px solid var(--color-brass)',
                    padding: '0.5rem 1rem',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Sparkles size={14} style={{ color: 'var(--color-brass)' }} />
                    <span style={{ 
                      fontFamily: 'var(--font-serif-sc)', 
                      color: 'var(--color-ivory)', 
                      fontSize: '0.75rem', 
                      letterSpacing: '0.15em' 
                    }}>
                      {doorsOpen ? 'CLICK TO CLOSE DOORS' : 'CLICK DOORS TO ENTER'}
                    </span>
                  </div>

                </div>
              ) : (
                /* Static Lobby Showcase */
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <img 
                    src="images/3_the_lobby.jpg" 
                    alt="Ananthara Lobby" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    backgroundColor: 'rgba(15, 9, 6, 0.75)',
                    border: '1px solid var(--color-brass)',
                    padding: '0.5rem 1rem',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Sparkles size={14} style={{ color: 'var(--color-brass)' }} />
                    <span style={{ 
                      fontFamily: 'var(--font-serif-sc)', 
                      color: 'var(--color-ivory)', 
                      fontSize: '0.75rem', 
                      letterSpacing: '0.15em' 
                    }}>
                      GRAND CHANDELIER LOBBY
                    </span>
                  </div>
                </div>
              )}

              {/* Decorative Frame */}
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                right: '15px',
                bottom: '15px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                pointerEvents: 'none',
                zIndex: 5
              }} />
            </div>

            {/* Column 2: Text Info */}
            <div style={{ padding: '0 1rem' }}>
              <span style={{ 
                fontFamily: 'var(--font-serif-sc)', 
                color: 'var(--color-brass)', 
                fontSize: '0.85rem', 
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.8rem'
              }}>
                {active.subtitle}
              </span>
              
              <h3 style={{ 
                fontSize: '2.2rem', 
                color: 'var(--color-teak-dark)', 
                marginBottom: '1.5rem',
                lineHeight: 1.2
              }}>
                {active.title}
              </h3>
              
              <p style={{ 
                color: 'var(--color-teak-light)', 
                fontSize: '1.05rem', 
                lineHeight: '1.8', 
                fontWeight: 300,
                marginBottom: '2rem' 
              }}>
                {active.description}
              </p>

              <div 
                className="glass-card" 
                style={{ 
                  padding: '1.5rem', 
                  borderLeft: '4px solid var(--color-brass)',
                  backgroundColor: 'var(--color-sandstone-light)',
                  boxShadow: 'none'
                }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Heart size={20} style={{ color: 'var(--color-brass)', flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ 
                    fontFamily: 'var(--font-sans)', 
                    fontSize: '0.9rem', 
                    color: 'var(--color-teak-dark)', 
                    lineHeight: '1.6',
                    fontWeight: 400
                  }}>
                    {active.highlight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          #lobby > .container > div:nth-child(3) > div {
            grid-template-columns: 1.2fr 1fr !important;
            gap: 5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
