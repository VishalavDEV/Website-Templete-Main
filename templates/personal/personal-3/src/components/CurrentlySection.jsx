import { motion } from 'framer-motion';

export default function CurrentlySection({ profile }) {
  if (!profile) return null;

  // Destructure or parse the currently field: "LEARNING: Three.js & WebGL; BUILDING: Digital Editorial Platform; EXPLORING: Generative Agent Architectures; IMPROVING: Motion Design Systems"
  // Let's create a structured array of current activities
  const activities = [
    {
      label: 'LEARNING',
      value: 'Three.js & WebGL',
      color: 'var(--color-forest)',
      textColor: 'var(--color-bg-ivory)',
      animation: { scale: [1, 1.02, 1] },
      desc: 'Developing high-fidelity custom shaders and 3D camera path controls for immersive portfolios.'
    },
    {
      label: 'BUILDING',
      value: 'Digital Editorial Platform',
      color: 'var(--color-coral)',
      textColor: 'var(--color-bg-ivory)',
      animation: { rotate: [0, 1, -1, 0] },
      desc: 'Coding a CMS backend in Spring Boot coupled with a dynamic React layout builder for literary sites.'
    },
    {
      label: 'EXPLORING',
      value: 'Generative Agent Architectures',
      color: 'var(--color-muted-beige)',
      textColor: 'var(--color-charcoal)',
      animation: { y: [0, -5, 0] },
      desc: 'Interfacing Spring Boot REST endpoints with local Python LLM sub-orchestrators for smart search.'
    },
    {
      label: 'IMPROVING',
      value: 'Motion Design Systems',
      color: 'var(--color-bg-ivory)',
      textColor: 'var(--color-forest)',
      animation: { opacity: [0.9, 1, 0.9] },
      desc: 'Streamlining layout transitions using custom cubic-bezier curves in Framer Motion and GSAP.'
    }
  ];

  return (
    <section
      id="currently"
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
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '5rem', borderBottom: '1px solid rgba(13, 44, 30, 0.1)', paddingBottom: '1.5rem' }}>
          <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.3em', color: 'var(--color-coral)', marginBottom: '0.5rem', display: 'block' }}>
            CHAPTER 07
          </span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', textTransform: 'uppercase' }}>
            CURRENTLY ACTIVES
          </h2>
          <p style={{ fontSize: '13px', fontStyle: 'italic', opacity: 0.6, marginTop: '0.2rem' }}>
            WHAT I'M INTO RIGHT NOW
          </p>
        </div>

        {/* 2x2 Creative Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {activities.map((act, index) => (
            <motion.div
              key={act.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(13, 44, 30, 0.08)' }}
              style={{
                backgroundColor: act.color,
                color: act.textColor,
                padding: '3rem 2rem',
                border: '1px solid var(--color-muted-beige)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '350px',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
              }}
            >
              <div>
                {/* Micro Animated Tag */}
                <motion.span
                  animate={act.animation}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.25em',
                    display: 'inline-block',
                    padding: '4px 10px',
                    border: `1px solid ${act.textColor}`,
                    borderRadius: '20px',
                    marginBottom: '2rem',
                  }}
                >
                  {act.label}
                </motion.span>
                
                <h3 style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(24px, 3.5vw, 32px)',
                  fontWeight: '600',
                  lineHeight: 1.2,
                  color: act.textColor,
                  textTransform: 'uppercase',
                }}>
                  {act.value}
                </h3>
              </div>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                lineHeight: 1.6,
                opacity: 0.85,
              }}>
                {act.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
