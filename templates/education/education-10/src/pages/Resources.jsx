import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Library, ArrowRight } from 'lucide-react';
import AnimatedSection, { containerVariants, itemVariants } from '../components/AnimatedSection';
import ResourceCard from '../components/ResourceCard';
import { resources } from '../data/resources';

const tabs = ['All', 'E-Book', 'Cheat Sheet', 'Study Notes', 'Tutorial', 'Practice Questions', 'Learning Guide', 'Career Resources'];

export default function Resources() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? resources : resources.filter((r) => r.type === active);

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-badge"><Library size={12} /> Learning Resources</span>
            <h1>Free <span className="text-gradient">Learning Resources</span></h1>
            <p>Boost your learning with our library of free e-books, cheat sheets, study guides, and practice materials.</p>
          </motion.div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          {/* Tab Filter */}
          <AnimatedSection>
            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 'var(--space-2xl)' }}>
              {tabs.map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`btn ${active === tab ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  aria-pressed={active === tab}
                >
                  {tab}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          {/* Resources Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="grid grid-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((resource, i) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <ResourceCard resource={resource} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <AnimatedSection style={{ textAlign: 'center', marginTop: 'var(--space-4xl)', background: 'var(--primary-pale)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-3xl)' }}>
            <h2 className="heading-2" style={{ marginBottom: 'var(--space-md)' }}>
              Want Access to <span className="text-gradient">Premium Resources?</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-xl)', maxWidth: 480, margin: '0 auto var(--space-xl)' }}>
              Enroll in a course and unlock exclusive resources, extended materials, and instructor notes.
            </p>
            <a href="/courses" className="btn btn-primary btn-lg">
              Browse Courses <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
