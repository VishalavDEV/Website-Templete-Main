import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function JourneyStrip({ experiences }) {
  const targetRef = useRef(null);

  // Track scroll position of the parent section wrapper
  const { scrollYProgress } = useScroll({
    target: targetRef
  });

  // Transform scroll progress (0 to 1) into horizontal displacement (-x percentage)
  // Since we have 7 items, we want to slide them sufficiently.
  // Translating from 0% (first item visible) to -78% (last item visible).
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  // Abstract visual renderer for each journey stage
  const renderVisual = (type) => {
    switch (type) {
      case 'circle':
        return <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-coral)' }} />;
      case 'square':
        return <div style={{ width: '38px', height: '38px', backgroundColor: 'var(--color-forest)', transform: 'rotate(15deg)' }} />;
      case 'triangle':
        return (
          <div style={{
            width: 0, height: 0,
            borderLeft: '20px solid transparent', borderRight: '20px solid transparent',
            borderBottom: '38px solid var(--color-coral)'
          }} />
        );
      case 'star':
        return (
          <div style={{
            width: '40px', height: '40px', background: 'var(--color-forest)',
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }} />
        );
      case 'hexagon':
        return (
          <div style={{
            width: '40px', height: '40px', background: 'var(--color-coral)',
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
          }} />
        );
      case 'diamond':
        return <div style={{ width: '36px', height: '36px', backgroundColor: 'var(--color-forest)', transform: 'rotate(45deg)' }} />;
      case 'plus':
      default:
        return (
          <div style={{ position: 'relative', width: '40px', height: '40px' }}>
            <div style={{ position: 'absolute', top: '18px', left: 0, width: '40px', height: '4px', backgroundColor: 'var(--color-coral)' }} />
            <div style={{ position: 'absolute', top: 0, left: '18px', width: '4px', height: '40px', backgroundColor: 'var(--color-coral)' }} />
          </div>
        );
    }
  };

  return (
    <div ref={targetRef} style={{ height: '300vh', position: 'relative', borderBottom: '1px solid var(--color-muted-beige)' }}>
      {/* Sticky viewport frame */}
      <div
        id="journey"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          backgroundColor: 'var(--color-bg-ivory)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '4rem 0 2rem 0',
          overflow: 'hidden',
        }}
      >
        {/* Header Title */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 2rem', zIndex: 1 }}>
          <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.3em', color: 'var(--color-coral)', marginBottom: '0.5rem', display: 'block' }}>
            CHAPTER 05
          </span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', textTransform: 'uppercase' }}>
            THE ROAD SO FAR
          </h2>
          <p style={{ fontSize: '13px', fontStyle: 'italic', opacity: 0.6, marginTop: '0.2rem' }}>
            SCROLL DOWN VERTICALLY TO NAVIGATE THE HORIZONTAL STRIP
          </p>
        </div>

        {/* Horizontal Moving Content */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <motion.div
            style={{
              x,
              display: 'flex',
              gap: '4rem',
              padding: '0 10vw',
              willChange: 'transform',
            }}
          >
            {experiences.map((exp, idx) => (
              <div
                key={exp.stage}
                style={{
                  width: '320px',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  borderLeft: '1px solid rgba(13, 44, 30, 0.1)',
                  paddingLeft: '2rem',
                  position: 'relative'
                }}
              >
                {/* Visual Accent */}
                <div style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                  {renderVisual(exp.visualElement)}
                </div>

                {/* Stage Index & Date */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '1rem' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-body)', fontWeight: '700', color: 'var(--color-coral)' }}>
                    STAGE {idx + 1}
                  </span>
                  <span style={{ fontSize: '18px', fontFamily: 'var(--font-editorial)', fontStyle: 'italic', color: 'var(--color-forest)' }}>
                    {exp.date}
                  </span>
                </div>

                {/* Text Content */}
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                    {exp.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: 1.6, color: 'rgba(30, 35, 33, 0.8)' }}>
                    {exp.description}
                  </p>
                </div>

                {/* Vertical Divider Indicator */}
                <div style={{
                  position: 'absolute', left: '-1px', top: '15px', width: '3px', height: '20px',
                  backgroundColor: 'var(--color-coral)'
                }} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Footer info line */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', fontSize: '10px', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          <span>BIOGRAPHY STRIP · CHRONO LOG</span>
          <span>SCROLL PROGRESS INDICATOR</span>
        </div>
      </div>
    </div>
  );
}
