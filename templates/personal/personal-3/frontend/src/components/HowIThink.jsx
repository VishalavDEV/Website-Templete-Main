import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HowIThink() {
  const [activeWord, setActiveWord] = useState(null);

  const principles = [
    {
      word: 'OBSERVE.',
      explanation: 'Studying how people interact with systems. Recognizing points of friction, inefficiencies, and undocumented user habits before writing a single line of code.'
    },
    {
      word: 'QUESTION.',
      explanation: 'Challenging existing design norms and technical assumptions. Asking why a flow is structured the way it is and exploring how it can be simplified.'
    },
    {
      word: 'BUILD.',
      explanation: 'Turning an abstract concept into a tangible, robust digital experience. Connecting clean back-ends to interactive, high-fidelity front-ends.'
    },
    {
      word: 'TEST.',
      explanation: 'Validating assumptions through code execution and user verification. Breaking components to discover edge cases and build resilience.'
    },
    {
      word: 'IMPROVE.',
      explanation: 'Refactoring systems for performance, accessibility, and visual polish. The design is never complete; it is continuously refined.'
    }
  ];

  const handleWordClick = (wordObj) => {
    if (activeWord?.word === wordObj.word) {
      setActiveWord(null);
    } else {
      setActiveWord(wordObj);
    }
  };

  return (
    <section
      id="thinking"
      style={{
        minHeight: '100vh',
        width: '100%',
        padding: '6rem 2rem',
        backgroundColor: 'var(--color-bg-ivory)',
        borderBottom: '1px solid var(--color-muted-beige)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.3em', color: 'var(--color-coral)', marginBottom: '0.5rem', display: 'block' }}>
            CHAPTER 03
          </span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', textTransform: 'uppercase' }}>
            HOW I THINK
          </h2>
          <p style={{ fontSize: '13px', fontStyle: 'italic', opacity: 0.6, marginTop: '0.5rem' }}>
            CLICK ANY CONCEPT TO READ THE ESSAY
          </p>
        </div>

        {/* Large Typography List */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'flex-start',
          }}
        >
          {principles.map((item, index) => {
            const isSelected = activeWord?.word === item.word;
            return (
              <div key={item.word} style={{ width: '100%', borderBottom: '1px solid rgba(13, 44, 30, 0.05)' }}>
                <motion.button
                  onClick={() => handleWordClick(item)}
                  data-cursor="view"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                  style={{
                    border: 'none',
                    background: 'none',
                    fontFamily: 'var(--font-editorial)',
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    fontWeight: '700',
                    lineHeight: 1.1,
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: isSelected ? 'var(--color-coral)' : 'var(--color-forest)',
                    padding: '1rem 0',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'color 0.3s ease',
                  }}
                  className="think-button"
                >
                  <span>{item.word}</span>
                  <span
                    style={{
                      fontSize: '18px',
                      fontFamily: 'var(--font-body)',
                      fontWeight: '300',
                      transform: isSelected ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    +
                  </span>
                </motion.button>

                {/* Animated Drawer Panel */}
                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        style={{
                          padding: '0 0 2rem 0',
                          maxWidth: '650px',
                          fontFamily: 'var(--font-editorial)',
                          fontSize: 'clamp(18px, 2.5vw, 24px)',
                          lineHeight: 1.5,
                          fontStyle: 'italic',
                          color: 'var(--color-charcoal)',
                          opacity: 0.85,
                        }}
                      >
                        {item.explanation}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .think-button:hover {
          color: var(--color-coral) !important;
          padding-left: 10px;
        }
        .think-button {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </section>
  );
}
