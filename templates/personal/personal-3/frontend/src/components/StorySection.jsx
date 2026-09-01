import { motion } from 'framer-motion';

export default function StorySection({ profile }) {
  if (!profile) return null;

  return (
    <section
      id="person"
      style={{
        minHeight: '100vh',
        width: '100%',
        padding: '6rem 2rem 4rem 2rem',
        backgroundColor: 'var(--color-bg-ivory)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderBottom: '1px solid var(--color-muted-beige)',
        position: 'relative'
      }}
    >
      <div className="grid-editorial" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        
        {/* Left Side - Large Typography Title */}
        <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.3em', color: 'var(--color-coral)', marginBottom: '1.5rem', display: 'block' }}>
            CHAPTER 01
          </span>
          <h2
            style={{
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: '700',
              lineHeight: 1.0,
              textTransform: 'uppercase',
              color: 'var(--color-forest)',
              letterSpacing: '-0.02em',
            }}
          >
            THIS IS <br />MY STORY.
          </h2>
          <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--color-coral)', marginTop: '2rem' }}></div>
        </div>

        {/* Right Side - Introduction & Portrait & Metadata */}
        <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '3rem', justifyContent: 'center' }}>
          
          {/* Animated Introduction text */}
          <div style={{ maxWidth: '600px' }}>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(22px, 3.5vw, 32px)',
                lineHeight: 1.3,
                color: 'var(--color-charcoal)',
                fontWeight: '400',
                marginBottom: '2rem'
              }}
            >
              "{profile.storyIntro}"
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'rgba(30, 35, 33, 0.8)'
              }}
            >
              {profile.bio}
            </motion.p>
          </div>

          {/* Portrait Image with Scroll Parallax Effect */}
          <div style={{ overflow: 'hidden', height: '400px', width: '100%', position: 'relative', border: '1px solid var(--color-muted-beige)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <motion.img
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              src={profile.portraitUrl}
              alt="Siddharth Portrait"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(30%) contrast(105%)'
              }}
            />
            {/* Coral highlight tag */}
            <div style={{
              position: 'absolute', bottom: '1.5rem', right: '1.5rem', backgroundColor: 'var(--color-coral)', color: '#FFFFFF',
              padding: '6px 12px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.15em', textTransform: 'uppercase'
            }}>
              EDITION 2026
            </div>
          </div>

          {/* Metadata Grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', borderTop: '1px solid rgba(13, 44, 30, 0.1)',
            paddingTop: '2rem', marginTop: '1rem'
          }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: '700', color: 'var(--color-coral)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                BASED IN
              </h4>
              <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '18px', fontWeight: '700', color: 'var(--color-forest)' }}>
                {profile.location}
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: '700', color: 'var(--color-coral)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                FOCUS
              </h4>
              <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '18px', fontWeight: '700', color: 'var(--color-forest)', textTransform: 'uppercase' }}>
                {profile.focus.split(' / ')[0]} / {profile.focus.split(' / ')[1]}
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: '700', color: 'var(--color-coral)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                CURRENTLY
              </h4>
              <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '18px', fontWeight: '700', color: 'var(--color-forest)' }}>
                {profile.currently}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
