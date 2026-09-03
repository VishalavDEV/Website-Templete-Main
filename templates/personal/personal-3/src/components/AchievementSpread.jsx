import { motion } from 'framer-motion';

export default function AchievementSpread({ achievements, certifications }) {
  if (!achievements) return null;

  return (
    <section
      id="moments"
      style={{
        minHeight: '100vh',
        width: '100%',
        padding: '6rem 2rem',
        backgroundColor: 'var(--color-bg-paper)',
        borderBottom: '1px solid var(--color-muted-beige)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '5rem', borderBottom: '1px solid rgba(13, 44, 30, 0.1)', paddingBottom: '1.5rem' }}>
          <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.3em', color: 'var(--color-coral)', marginBottom: '0.5rem', display: 'block' }}>
            CHAPTER 06
          </span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', textTransform: 'uppercase' }}>
            MOMENTS & MILESTONES
          </h2>
          <p style={{ fontSize: '13px', fontStyle: 'italic', opacity: 0.6, marginTop: '0.2rem' }}>
            A PHOTO-SPREAD HIGHLIGHTING HONORS & CREDENTIALS
          </p>
        </div>

        {/* Alternate Columns Layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          {/* Main Achievements Loop */}
          {achievements.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{
                  display: 'flex',
                  flexDirection: isEven ? 'row' : 'row-reverse',
                  alignItems: 'center',
                  gap: '3rem',
                  width: '100%',
                  flexWrap: 'wrap',
                }}
              >
                {/* Visual Clipping Accent block */}
                <div style={{
                  flex: '1 1 350px',
                  height: '240px',
                  backgroundColor: isEven ? 'var(--color-forest)' : 'var(--color-coral)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  border: '1px solid var(--color-muted-beige)',
                  position: 'relative',
                  overflow: 'hidden',
                  clipPath: isEven ? 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)' : 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)',
                }}
                className="moment-visual"
                >
                  {/* Decorative faint grid overlay */}
                  <div style={{ position: 'absolute', width: '100%', height: '100%', border: '1px dashed rgba(250, 246, 240, 0.1)', top: 0, left: 0 }} />
                  
                  {/* Category overlay */}
                  <div style={{ zIndex: 1, color: '#FFFFFF', opacity: 0.85, textAlign: 'center' }}>
                    <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.3em', display: 'block', marginBottom: '0.5rem' }}>
                      {item.category}
                    </span>
                    <h4 style={{ fontFamily: 'var(--font-editorial)', fontSize: '28px', color: 'var(--color-bg-ivory)' }}>
                      {item.date}
                    </h4>
                  </div>
                </div>

                {/* Typography info */}
                <div style={{ flex: '1 1 450px', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                  <span style={{
                    fontFamily: 'var(--font-editorial)',
                    fontSize: '64px',
                    fontWeight: '700',
                    color: 'rgba(255, 90, 54, 0.3)',
                    lineHeight: 0.8,
                  }}>
                    {item.number}
                  </span>
                  <div>
                    <h3 style={{ fontSize: '28px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-forest)', marginBottom: '0.8rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.6, color: 'var(--color-charcoal)', opacity: 0.8 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Certifications Sub-Section */}
        <div style={{ marginTop: '6rem', borderTop: '1px solid rgba(13, 44, 30, 0.1)', paddingTop: '4rem' }}>
          <h3 style={{ fontSize: '28px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '3rem', color: 'var(--color-forest)' }}>
            LICENSES & CREDENTIALS
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {certifications && certifications.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  border: '1px solid rgba(13, 44, 30, 0.1)',
                  padding: '2rem',
                  backgroundColor: 'var(--color-soft-white)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '200px',
                }}
              >
                <div>
                  <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--color-coral)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>
                    {cert.issuer.toUpperCase()}
                  </span>
                  <h4 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-forest)', textTransform: 'uppercase', lineHeight: 1.2, marginBottom: '0.5rem' }}>
                    {cert.title}
                  </h4>
                  <span style={{ fontSize: '12px', color: 'var(--color-charcoal)', opacity: 0.6 }}>
                    ISSUED · {cert.date}
                  </span>
                </div>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="explore"
                  style={{
                    color: 'var(--color-forest)',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.05em',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--color-forest)',
                    alignSelf: 'flex-start',
                    marginTop: '1rem',
                  }}
                >
                  VERIFY CREDENTIAL →
                </a>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .moment-visual {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .moment-visual:hover {
          transform: scale(1.03) rotate(0.5deg);
        }
      `}</style>
    </section>
  );
}
