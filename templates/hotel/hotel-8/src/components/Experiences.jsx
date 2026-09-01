import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Sun, Sunset, Moon, Sunrise } from 'lucide-react';

export default function Experiences() {
  const sectionRef = useRef(null);
  const [activePeriod, setActivePeriod] = useState('morning');

  const periods = {
    morning: {
      label: 'Morning',
      tagline: 'Soft sunlight, breakfast, yoga, peaceful gardens',
      title: 'Sunrise Serenity',
      desc: 'Wake up to the soft rays of morning sun streaming through sandstone arches. Participate in a peaceful yoga session on the lake-facing pavilion, followed by a fresh traditional breakfast of local flatbreads and hot masala chai in our verdant courtyard gardens.',
      image: 'images/5_the_view.jpg',
      icon: <Sunrise size={18} />,
      bgColor: 'rgba(255, 230, 150, 0.04)',
      accentColor: '#D9B589'
    },
    afternoon: {
      label: 'Afternoon',
      tagline: 'Brighter sunlight, swimming pool, spa, and local culture',
      title: 'Midday Rejuvenation',
      desc: 'As the sun rises high and bright, take a refreshing dip in our deep teal-green courtyard pool. Indulge in an Ayurveda wellness massage inside our sandstone spa chambers, or explore Udaipur\'s rich local crafts and historic alleys with a personal hotel guide.',
      image: 'images/7_wellbeing_spa.jpg',
      icon: <Sun size={18} />,
      bgColor: 'rgba(255, 200, 100, 0.06)',
      accentColor: '#F0A500'
    },
    golden: {
      label: 'Golden Hour',
      tagline: 'Warm sunset light, courtyard tea, and cultural experiences',
      title: 'Sunset Splendor',
      desc: 'Experience the magical transition as Udaipur is bathed in warm golden light. Gather in the central courtyard for traditional high tea (Masala cutting chai and snacks), accompanied by soft live Rajasthani folk music and classical sitar performances.',
      image: 'images/8_courtyard_pool.jpg',
      icon: <Sunset size={18} />,
      bgColor: 'rgba(224, 90, 23, 0.12)',
      accentColor: '#E05A17'
    },
    night: {
      label: 'Evening & Night',
      tagline: 'Rooftop dinner, lantern-lit courtyard, and stargazing',
      title: 'Midnight Enchantment',
      desc: 'Under a clear night sky and crescent moon, watch the palace lanterns illuminate one-by-one. Conclude your day with an elegant candle-lit dinner on our sprawling rooftop terrace, looking out onto Udaipur\'s glowing domes and distant dark hills.',
      image: 'images/9_evening_experience.jpg',
      icon: <Moon size={18} />,
      bgColor: 'rgba(10, 9, 20, 0.6)',
      accentColor: '#C29B4F'
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress within this specific section
      // rect.top is the distance from the top of viewport to the top of section
      const totalHeight = rect.height;
      const progress = -rect.top / (totalHeight - windowHeight);
      
      if (progress < 0) {
        setActivePeriod('morning');
      } else if (progress < 0.33) {
        setActivePeriod('morning');
      } else if (progress < 0.66) {
        setActivePeriod('afternoon');
      } else if (progress < 0.90) {
        setActivePeriod('golden');
      } else {
        setActivePeriod('night');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const active = periods[activePeriod];

  return (
    <section 
      ref={sectionRef}
      id="experiences" 
      style={{ 
        position: 'relative', 
        minHeight: '220vh', // long scroll height to allow scrollytelling
        backgroundColor: 'var(--color-dark-bg)',
        color: 'var(--color-ivory)'
      }}
    >
      {/* Sticky Content Viewport */}
      <div 
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          transition: 'background-color 1.5s ease',
          backgroundColor: 'var(--color-dark-bg)'
        }}
      >
        
        {/* Dynamic Light/Color Tint Layer representing the time of day */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transition: 'background-color 2.0s ease, opacity 2.0s ease',
          backgroundColor: active.bgColor,
          zIndex: 2,
          mixBlendMode: 'multiply',
          pointerEvents: 'none'
        }} />

        {/* Background image fade */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url("${active.image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.35,
          transition: 'background-image 1.8s ease-in-out, opacity 1.8s ease-in-out',
          zIndex: 1
        }} />

        {/* Cinematic Vignette */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(10, 6, 4, 0.9) 0%, rgba(10, 6, 4, 0.4) 50%, rgba(10, 6, 4, 0.9) 100%), linear-gradient(to top, rgba(10, 6, 4, 0.95) 0%, transparent 40%)',
          zIndex: 3,
          pointerEvents: 'none'
        }} />

        {/* Main Content Layout */}
        <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
          
          {/* Section title */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '3.5rem' }}>
            <span style={{ fontFamily: 'var(--font-serif-sc)', color: 'var(--color-brass)', fontSize: '0.8rem', letterSpacing: '0.25em' }}>
              CHRONICLES OF TIME
            </span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-ivory)' }}>
              A Day at Ananthara
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="timeline-grid">
            
            {/* Timeline selector (Morning -> Afternoon -> Golden -> Night) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {Object.keys(periods).map((key) => {
                const item = periods[key];
                const isSelected = activePeriod === key;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      // scroll to correct progress position
                      const rect = sectionRef.current.getBoundingClientRect();
                      const scrollTop = window.scrollY;
                      const totalHeight = rect.height;
                      const windowHeight = window.innerHeight;
                      let scrollRatio = 0.1;
                      if (key === 'afternoon') scrollRatio = 0.45;
                      if (key === 'golden') scrollRatio = 0.78;
                      if (key === 'night') scrollRatio = 0.95;
                      
                      window.scrollTo({
                        top: scrollTop + rect.top + (totalHeight - windowHeight) * scrollRatio,
                        behavior: 'smooth'
                      });
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      textAlign: 'left',
                      cursor: 'pointer',
                      padding: '1rem',
                      borderRadius: '4px',
                      borderLeft: isSelected ? `3px solid ${item.accentColor}` : '3px solid transparent',
                      backgroundColor: isSelected ? 'rgba(255,255,255,0.03)' : 'transparent',
                      transition: 'var(--transition-smooth)'
                    }}
                  >
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? item.accentColor : 'rgba(255,255,255,0.05)',
                      color: isSelected ? 'var(--color-dark-bg)' : 'var(--color-brass)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transition: 'var(--transition-smooth)'
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ 
                        fontFamily: 'var(--font-serif-sc)', 
                        fontSize: '1rem', 
                        color: isSelected ? 'var(--color-ivory)' : 'var(--color-sandstone-light)',
                        opacity: isSelected ? 1 : 0.6,
                        letterSpacing: '0.1em'
                      }}>
                        {item.label}
                      </h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-sandstone-light)', opacity: 0.5, fontWeight: 300 }}>
                        {item.tagline}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Period details panel */}
            <div 
              key={activePeriod}
              className="glass-card-dark animate-fade-in"
              style={{
                padding: '2.5rem',
                borderRadius: '4px',
                border: `1px solid ${active.accentColor}`,
                boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                backgroundColor: 'rgba(20, 12, 8, 0.9)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <Sparkles size={14} style={{ color: active.accentColor }} />
                <span style={{ 
                  fontFamily: 'var(--font-serif-sc)', 
                  color: active.accentColor, 
                  fontSize: '0.8rem', 
                  letterSpacing: '0.15em' 
                }}>
                  {active.label.toUpperCase()} CHRONICLE
                </span>
              </div>

              <h3 style={{ fontSize: '2rem', color: 'var(--color-ivory)', marginBottom: '1.2rem' }}>
                {active.title}
              </h3>

              <p style={{ color: 'var(--color-sandstone-light)', opacity: 0.9, fontSize: '0.98rem', lineHeight: '1.8', fontWeight: 300 }}>
                {active.desc}
              </p>
            </div>

          </div>

        </div>

        {/* Scroll indicator for the scrollytelling section */}
        <div style={{
          position: 'absolute',
          bottom: '25px',
          right: '50px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem',
          fontSize: '0.75rem',
          color: 'var(--color-brass)',
          fontFamily: 'var(--font-serif-sc)',
          letterSpacing: '0.1em',
          zIndex: 10,
          opacity: 0.8
        }}>
          <span>SCROLL DOWN TO PROGRESS TIME</span>
          <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-brass)' }}></div>
        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .timeline-grid {
            grid-template-columns: 1fr 1.3fr !important;
            gap: 5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
