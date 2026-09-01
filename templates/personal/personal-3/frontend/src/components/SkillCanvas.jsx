import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SkillCanvas({ skills }) {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Pre-configured coordinate percentages for the skills grid (editorial placement)
  const layoutCoordinates = [
    { top: '15%', left: '10%' },
    { top: '22%', left: '45%' },
    { top: '18%', left: '75%' },
    { top: '40%', left: '20%' },
    { top: '35%', left: '55%' },
    { top: '48%', left: '80%' },
    { top: '65%', left: '15%' },
    { top: '60%', left: '40%' },
    { top: '72%', left: '68%' },
    { top: '80%', left: '35%' },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Normalized coordinates from -0.5 to 0.5
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      id="tools"
      style={{
        height: '100vh',
        width: '100%',
        backgroundColor: 'var(--color-bg-paper)',
        borderBottom: '1px solid var(--color-muted-beige)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '4rem 2rem 2rem 2rem',
      }}
    >
      {/* Title */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', zIndex: 5 }}>
        <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.3em', color: 'var(--color-coral)', marginBottom: '0.5rem', display: 'block' }}>
          CHAPTER 04
        </span>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', textTransform: 'uppercase' }}>
          MY TOOLS
        </h2>
        <p style={{ fontSize: '13px', fontStyle: 'italic', opacity: 0.6, marginTop: '0.2rem' }}>
          THE CANVA REVEAL · MOVE MOUSE AND CLICK A WORD
        </p>
      </div>

      {/* Floating Canvas Area */}
      <div
        ref={containerRef}
        style={{
          flex: 1,
          width: '100%',
          position: 'relative',
          marginTop: '2rem',
        }}
      >
        {skills.map((skill, index) => {
          const coords = layoutCoordinates[index % layoutCoordinates.length];
          
          // Parallax effect offset: faster/slower based on index
          const strength = (index % 4 + 1) * 20; 
          const offsetX = mousePos.x * strength;
          const offsetY = mousePos.y * strength;

          const isSelected = selectedSkill?.name === skill.name;

          return (
            <motion.div
              key={skill.name}
              onClick={() => setSelectedSkill(skill)}
              data-cursor="view"
              style={{
                position: 'absolute',
                top: coords.top,
                left: coords.left,
                transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
                transition: 'transform 0.4s ease-out',
                zIndex: isSelected ? 10 : 2,
              }}
            >
              <div
                className="floating-word"
                style={{
                  fontSize: 'clamp(18px, 3vw, 42px)',
                  fontWeight: isSelected ? '700' : '400',
                  color: isSelected ? 'var(--color-coral)' : 'var(--color-forest)',
                  borderBottom: isSelected ? '2px solid var(--color-coral)' : '1px solid transparent',
                  padding: '0.2rem 0.6rem',
                  backgroundColor: isSelected ? 'rgba(255, 90, 54, 0.05)' : 'transparent',
                }}
              >
                {skill.name}
              </div>
            </motion.div>
          );
        })}

        {/* Selected Skill Information Popup */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              style={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 20,
                width: '90%',
                maxWidth: '450px',
                backgroundColor: 'var(--color-soft-white)',
                border: '1px solid var(--color-forest)',
                padding: '2rem',
                boxShadow: '0 15px 40px rgba(13, 44, 30, 0.1)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(13, 44, 30, 0.1)', paddingBottom: '0.8rem', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-forest)' }}>
                  {selectedSkill.name}
                </h3>
                <span style={{ fontSize: '10px', color: 'var(--color-coral)', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {selectedSkill.category}
                </span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.6, color: 'var(--color-charcoal)' }}>
                {selectedSkill.description}
              </p>
              <button
                onClick={() => setSelectedSkill(null)}
                style={{
                  marginTop: '1.5rem',
                  border: 'none',
                  background: 'none',
                  color: 'var(--color-coral)',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                }}
              >
                CLOSE INFO
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer grid line */}
      <div style={{ width: '100%', borderTop: '1px solid rgba(13, 44, 30, 0.1)', padding: '1rem 0 0 0', display: 'flex', justifyContent: 'space-between', fontSize: '10px', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        <span>CANVAS LAYOUT · NATIVE ACCELERATED</span>
        <span>INTEGRATIONS MAP</span>
      </div>
    </section>
  );
}
