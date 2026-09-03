import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import AnimatedSection, { containerVariants, itemVariants } from '../components/AnimatedSection';
import InstructorCard from '../components/InstructorCard';
import { instructors } from '../data/instructors';

export default function Instructors() {
  return (
    <main>
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-badge"><Users size={12} /> Meet the Team</span>
            <h1>Learn from <span className="text-gradient">World-Class Experts</span></h1>
            <p>Our instructors are experienced educators and industry professionals who bring real-world knowledge to every lesson.</p>
          </motion.div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <motion.div
            className="grid grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {instructors.map((instructor) => (
              <motion.div key={instructor.id} variants={itemVariants}>
                <InstructorCard instructor={instructor} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="section" style={{ background: 'var(--gradient-primary)', padding: 'var(--space-3xl) 0' }}>
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', color: 'white' }}>
            <h2 style={{ color: 'white', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, marginBottom: 'var(--space-2xl)' }}>
              Our Instructor Community
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4xl)', flexWrap: 'wrap' }}>
              {[
                { value: '6+', label: 'Expert Instructors' },
                { value: '8+', label: 'Years Average Experience' },
                { value: '4.8', label: 'Average Rating' },
                { value: '67K+', label: 'Students Taught' },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900, color: 'white' }}>{s.value}</div>
                  <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', marginTop: 4, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
