import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function EditorialProject({ projects }) {
  if (!projects || projects.length === 0) return null;

  // Split projects: one main featured project, and the others as overlapping side elements
  const featured = projects[0];
  const remaining = projects.slice(1);

  return (
    <section
      id="projects"
      style={{
        minHeight: '100vh',
        width: '100%',
        padding: '6rem 2rem',
        backgroundColor: 'var(--color-bg-paper)',
        borderBottom: '1px solid var(--color-muted-beige)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(13, 44, 30, 0.1)', paddingBottom: '1.5rem' }}>
          <div>
            <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.3em', color: 'var(--color-coral)', marginBottom: '0.5rem', display: 'block' }}>
              CHAPTER 02
            </span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', textTransform: 'uppercase' }}>
              WHAT I CREATE
            </h2>
          </div>
          <span style={{ fontSize: '12px', fontFamily: 'var(--font-body)', fontWeight: '500', opacity: 0.5, fontStyle: 'italic' }}>
            EDITORIAL COLLAGE · FEAT. {projects.length} PIECES
          </span>
        </div>

        {/* Asymmetric Collage Grid */}
        <div className="grid-editorial" style={{ alignItems: 'start' }}>
          
          {/* Main Large Featured Project */}
          <div style={{ gridColumn: 'span 7' }}>
            <Link to={`/projects/${featured.id}`} style={{ textDecoration: 'none' }}>
              <motion.div
                data-cursor="explore"
                className="collage-item main-item"
                whileHover="hover"
                initial="initial"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid var(--color-muted-beige)',
                  cursor: 'pointer',
                  backgroundColor: 'var(--color-forest)',
                }}
              >
                <div style={{ overflow: 'hidden', height: '500px', width: '100%' }}>
                  <motion.img
                    variants={{
                      hover: { scale: 1.06, filter: 'grayscale(0%) contrast(100%)' },
                      initial: { scale: 1.0, filter: 'grayscale(50%) contrast(105%)' }
                    }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    src={featured.imageUrl}
                    alt={featured.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Hover Coral Overlay */}
                <motion.div
                  variants={{
                    hover: { opacity: 0.85 },
                    initial: { opacity: 0 }
                  }}
                  transition={{ duration: 0.4 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'var(--color-coral)',
                    zIndex: 1,
                  }}
                />

                {/* Overlaid Typography Details */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  padding: '2.5rem',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  background: 'linear-gradient(to top, rgba(13, 44, 30, 0.95) 0%, rgba(13, 44, 30, 0.4) 60%, transparent 100%)',
                }}
                className="collage-text"
                >
                  <span style={{ fontSize: '18px', fontFamily: 'var(--font-editorial)', color: 'var(--color-coral)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    {featured.number}
                  </span>
                  <h3 style={{ fontSize: '36px', fontWeight: '700', color: 'var(--color-bg-ivory)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                    {featured.title}
                  </h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '11px', color: 'rgba(250, 246, 240, 0.7)', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                      {featured.category}
                    </span>
                    <span style={{ fontSize: '11px', color: 'rgba(250, 246, 240, 0.9)', fontStyle: 'italic' }}>
                      {featured.technologies.join(' · ')}
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Right Side Overlay / Stacked Small Projects */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '4rem' }}>
            {remaining.map((project, idx) => (
              <Link to={`/projects/${project.id}`} key={project.id} style={{ textDecoration: 'none' }}>
                <motion.div
                  data-cursor="explore"
                  className="collage-item small-item"
                  whileHover="hover"
                  initial="initial"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid var(--color-muted-beige)',
                    cursor: 'pointer',
                    backgroundColor: 'var(--color-forest)',
                    // Custom offset for artistic asymmetry
                    alignSelf: idx % 2 === 0 ? 'flex-start' : 'flex-end',
                    width: '100%',
                  }}
                >
                  <div style={{ overflow: 'hidden', height: '280px', width: '100%' }}>
                    <motion.img
                      variants={{
                        hover: { scale: 1.08, filter: 'grayscale(0%) contrast(100%)' },
                        initial: { scale: 1.0, filter: 'grayscale(50%) contrast(105%)' }
                      }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      src={project.imageUrl}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Hover Coral Overlay */}
                  <motion.div
                    variants={{
                      hover: { opacity: 0.85 },
                      initial: { opacity: 0 }
                    }}
                    transition={{ duration: 0.4 }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'var(--color-coral)',
                      zIndex: 1,
                    }}
                  />

                  {/* Overlaid Typography Details */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    padding: '1.5rem',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    background: 'linear-gradient(to top, rgba(13, 44, 30, 0.95) 0%, rgba(13, 44, 30, 0.4) 60%, transparent 100%)',
                  }}
                  className="collage-text"
                  >
                    <span style={{ fontSize: '14px', fontFamily: 'var(--font-editorial)', color: 'var(--color-coral)', fontWeight: 'bold', marginBottom: '0.2rem' }}>
                      {project.number}
                    </span>
                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-bg-ivory)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                      {project.title}
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '9px', color: 'rgba(250, 246, 240, 0.7)', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        {project.category}
                      </span>
                      <span style={{ fontSize: '9px', color: 'rgba(250, 246, 240, 0.9)', fontStyle: 'italic' }}>
                        {project.technologies.slice(0, 3).join(' · ')}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        .collage-item {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }
        .collage-item:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 20px 40px rgba(13, 44, 30, 0.12);
        }
      `}</style>
    </section>
  );
}
