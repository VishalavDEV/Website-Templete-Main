import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function ResumeDocument({ profile, education, experiences, achievements, skills }) {
  if (!profile) return null;

  return (
    <section
      id="resume"
      style={{
        minHeight: '120vh',
        width: '100%',
        padding: '6rem 2rem',
        backgroundColor: 'var(--color-bg-ivory)',
        borderBottom: '1px solid var(--color-muted-beige)',
        perspective: '1500px', // enables 3D unfolding visual space
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(13, 44, 30, 0.1)', paddingBottom: '1.5rem' }}>
          <div>
            <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.3em', color: 'var(--color-coral)', marginBottom: '0.5rem', display: 'block' }}>
              CHAPTER 09
            </span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', textTransform: 'uppercase' }}>
              THE FILE
            </h2>
          </div>
          <button
            onClick={() => alert('Resume Download Initiated (Mock)')}
            className="btn-editorial-coral"
            data-cursor="explore"
            style={{
              fontSize: '11px',
              padding: '0.6rem 1.4rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Download size={12} />
            <span>DOWNLOAD RESUME</span>
          </button>
        </div>

        {/* Unfolding Physical-Paper Document */}
        <motion.div
          initial={{ rotateX: 25, scale: 0.93, y: 50, opacity: 0.8 }}
          whileInView={{ rotateX: 0, scale: 1, y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="paper-document"
          style={{
            transformStyle: 'preserve-3d',
            position: 'relative',
          }}
        >
          {/* Subtle line marking paper fold */}
          <div style={{
            position: 'absolute',
            top: '25%',
            left: 0,
            width: '100%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(13, 44, 30, 0.05) 20%, rgba(13, 44, 30, 0.05) 80%, transparent)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            top: '60%',
            left: 0,
            width: '100%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(13, 44, 30, 0.05) 20%, rgba(13, 44, 30, 0.05) 80%, transparent)',
            pointerEvents: 'none',
          }} />

          {/* Paper Content Header */}
          <div style={{ borderBottom: '2px solid var(--color-forest)', paddingBottom: '1.5rem', marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div>
              <h3 style={{ fontSize: '32px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
                {profile.name}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: '600', color: 'var(--color-coral)', letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: '0.2rem' }}>
                {profile.role}
              </p>
            </div>
            <div style={{ textAlign: 'right', fontSize: '11px', fontStyle: 'italic', opacity: 0.7 }}>
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Paper Grid Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            {/* Section: Profile Statement */}
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-coral)', letterSpacing: '0.15em', textTransform: 'uppercase', borderBottom: '1px solid rgba(13, 44, 30, 0.1)', paddingBottom: '0.4rem', marginBottom: '0.8rem' }}>
                PROFILE
              </h4>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--color-charcoal)', opacity: 0.85 }}>
                {profile.bio}
              </p>
            </div>

            {/* Section: Experience & Education */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-coral)', letterSpacing: '0.15em', textTransform: 'uppercase', borderBottom: '1px solid rgba(13, 44, 30, 0.1)', paddingBottom: '0.4rem', marginBottom: '0.8rem' }}>
                  EXPERIENCE RECORD
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {experiences.slice(3, 6).map(exp => (
                    <div key={exp.stage}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <h5 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--color-forest)', textTransform: 'uppercase' }}>
                          {exp.title}
                        </h5>
                        <span style={{ fontSize: '11px', color: 'var(--color-coral)', fontWeight: '600' }}>
                          {exp.date}
                        </span>
                      </div>
                      <p style={{ fontSize: '12px', color: 'var(--color-charcoal)', opacity: 0.8, marginTop: '0.2rem' }}>
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-coral)', letterSpacing: '0.15em', textTransform: 'uppercase', borderBottom: '1px solid rgba(13, 44, 30, 0.1)', paddingBottom: '0.4rem', marginBottom: '0.8rem' }}>
                  EDUCATION ABSTRACTION
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {education.map(edu => (
                    <div key={edu.id}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <h5 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--color-forest)', textTransform: 'uppercase' }}>
                          {edu.degree}
                        </h5>
                        <span style={{ fontSize: '11px', color: 'var(--color-coral)', fontWeight: '600' }}>
                          {edu.date}
                        </span>
                      </div>
                      <span style={{ fontSize: '11px', display: 'block', fontStyle: 'italic', opacity: 0.8, marginTop: '0.1rem' }}>
                        {edu.school}
                      </span>
                      <p style={{ fontSize: '12px', color: 'var(--color-charcoal)', opacity: 0.8, marginTop: '0.2rem' }}>
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section: Achievements & Skills */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-coral)', letterSpacing: '0.15em', textTransform: 'uppercase', borderBottom: '1px solid rgba(13, 44, 30, 0.1)', paddingBottom: '0.4rem', marginBottom: '0.8rem' }}>
                  MILESTONES
                </h4>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '12px', color: 'var(--color-charcoal)', opacity: 0.85, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {achievements.map(ach => (
                    <li key={ach.id}>
                      <strong>{ach.category} ({ach.date})</strong>: {ach.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-coral)', letterSpacing: '0.15em', textTransform: 'uppercase', borderBottom: '1px solid rgba(13, 44, 30, 0.1)', paddingBottom: '0.4rem', marginBottom: '0.8rem' }}>
                  COMPETENCIES
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {skills.map(skill => (
                    <span
                      key={skill.name}
                      style={{
                        fontSize: '11px',
                        backgroundColor: 'var(--color-bg-ivory)',
                        border: '1px solid rgba(13, 44, 30, 0.1)',
                        padding: '4px 10px',
                        color: 'var(--color-forest)',
                        fontFamily: 'var(--font-body)',
                        fontWeight: '500',
                      }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Paper footer */}
          <div style={{ borderTop: '1px solid rgba(13, 44, 30, 0.15)', paddingTop: '1.5rem', marginTop: '3rem', display: 'flex', justifyContent: 'space-between', fontSize: '10px', opacity: 0.5 }}>
            <span>THE FILE / SIDDHARTH MEHTA PORTFOLIO</span>
            <span>UPDATED Q3 2026</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
