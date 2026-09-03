import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import AnimatedSection, { containerVariants, itemVariants } from '../components/AnimatedSection';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const itemsPerSlide = 1;
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const featured = testimonials[current];

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-badge"><Star size={12} /> Student Stories</span>
            <h1>What Our <span className="text-gradient">Students Say</span></h1>
            <p>Real stories from real learners who transformed their skills and careers with EduLearn.</p>
          </motion.div>
        </div>
      </header>

      {/* Featured carousel */}
      <section className="section" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <AnimatedSection>
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  style={{ width: 80, height: 80, borderRadius: '50%', background: `linear-gradient(135deg, ${featured.color}, ${featured.color}99)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.5rem', color: 'white', margin: '0 auto var(--space-lg)' }}
                  aria-hidden="true"
                >
                  {featured.avatar}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-lg)' }} aria-label={`${featured.rating} stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={20} fill={i < featured.rating ? '#fbbf24' : 'none'} color={i < featured.rating ? '#fbbf24' : '#d1d5db'} />
                  ))}
                </div>
                <blockquote>
                  <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: 'var(--space-xl)' }}>
                    "{featured.text}"
                  </p>
                </blockquote>
                <cite style={{ fontStyle: 'normal' }}>
                  <strong style={{ display: 'block', fontWeight: 700, fontSize: '1rem' }}>{featured.name}</strong>
                  <span style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600 }}>{featured.role}</span>
                  <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: 4 }}>Course: {featured.course}</span>
                </cite>
              </motion.div>

              <div className="carousel-controls" style={{ marginTop: 'var(--space-2xl)' }}>
                <button className="carousel-btn" onClick={prev} aria-label="Previous testimonial">
                  <ChevronLeft size={18} />
                </button>
                <div className="carousel-dots">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      className={`carousel-dot ${i === current ? 'active' : ''}`}
                      onClick={() => setCurrent(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button className="carousel-btn" onClick={next} aria-label="Next testimonial">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* All testimonials grid */}
      <section className="section">
        <div className="container">
          <AnimatedSection className="section-header">
            <h2 className="heading-1">All <span className="text-gradient">Student Reviews</span></h2>
            <p>Browse all testimonials from learners across our course catalog.</p>
          </AnimatedSection>
          <motion.div
            className="grid grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((t) => (
              <motion.div key={t.id} variants={itemVariants}>
                <TestimonialCard testimonial={t} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ background: 'var(--gradient-primary)', padding: 'var(--space-3xl) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4xl)', flexWrap: 'wrap' }}>
            {[
              { v: '25K+', l: 'Students Enrolled' },
              { v: '4.8/5', l: 'Average Rating' },
              { v: '95%', l: 'Satisfaction Rate' },
              { v: '98%', l: 'Would Recommend' },
            ].map((s) => (
              <motion.div
                key={s.l}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', color: 'white' }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900 }}>{s.v}</div>
                <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', marginTop: 4 }}>{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
