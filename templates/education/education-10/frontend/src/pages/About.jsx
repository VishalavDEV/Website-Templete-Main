import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Award, Globe, ArrowRight, Lightbulb, BookOpen, TrendingUp, Shield } from 'lucide-react';
import AnimatedSection, { containerVariants, itemVariants } from '../components/AnimatedSection';

const values = [
  { icon: BookOpen, title: 'Quality First', desc: 'Every course is meticulously designed and reviewed to ensure the highest educational standards.', color: '#6366f1' },
  { icon: Users, title: 'Community Driven', desc: 'We believe learning is better together. Our community supports every learner\'s journey.', color: '#8b5cf6' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We continuously evolve our platform with the latest technology and pedagogical research.', color: '#06b6d4' },
  { icon: Shield, title: 'Integrity', desc: 'We are transparent, honest, and committed to the success of every student on our platform.', color: '#f59e0b' },
  { icon: Globe, title: 'Accessibility', desc: 'Quality education should be accessible to everyone, everywhere, regardless of background.', color: '#ec4899' },
  { icon: TrendingUp, title: 'Growth Mindset', desc: 'We believe every person has the potential to grow. We\'re here to unlock that potential.', color: '#10b981' },
];

const milestones = [
  { year: '2019', event: 'EduLearn founded with 5 courses and a vision to democratize education.' },
  { year: '2020', event: 'Reached 1,000 students and launched our first industry partnership.' },
  { year: '2021', event: 'Expanded to 20+ courses and introduced our certification program.' },
  { year: '2022', event: 'Hit 10,000 enrolled students and onboarded 15+ expert instructors.' },
  { year: '2023', event: 'Launched 50+ courses across 8 categories. 95% student satisfaction rate.' },
  { year: '2024', event: '25,000+ learners. International reach. Premium EdTech platform of the year.' },
];

export default function About() {
  return (
    <main>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-badge"><Heart size={12} /> Our Story</span>
            <h1>Empowering Learners,<br /><span className="text-gradient">Shaping Futures</span></h1>
            <p>We started with a simple idea: make world-class education accessible to everyone, everywhere.</p>
          </motion.div>
        </div>
      </header>

      {/* Mission & Vision */}
      <section className="section about-mission">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3xl)', alignItems: 'center' }}>
            <AnimatedSection>
              <span className="section-badge"><Target size={12} /> Our Mission</span>
              <h2 className="heading-1" style={{ marginBottom: 'var(--space-lg)' }}>
                We're on a Mission to <span className="text-gradient">Transform Learning</span>
              </h2>
              <p className="body-lg" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
                EduLearn was founded on the belief that high-quality education should not be limited by geography, 
                background, or financial barriers. We create structured, practical, and engaging learning experiences 
                that empower people to build real skills and real careers.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                Our team of educators, technologists, and lifelong learners works every day to build a platform 
                that meets learners where they are and takes them where they want to go.
              </p>
            </AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}
            >
              {[
                { icon: Target, label: 'Mission', value: 'Democratize Education', color: '#6366f1' },
                { icon: Eye, label: 'Vision', value: 'Global Learning Leader', color: '#8b5cf6' },
                { icon: Users, label: 'Students', value: '25,000+', color: '#06b6d4' },
                { icon: Award, label: 'Satisfaction', value: '95%', color: '#f59e0b' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="value-card"
                  style={{ textAlign: 'center' }}
                >
                  <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: `${item.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-md)' }}>
                    <item.icon size={24} color={item.color} />
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontWeight: 800, fontSize: '1rem', fontFamily: 'var(--font-display)' }}>{item.value}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-badge"><Heart size={12} /> Our Values</span>
            <h2 className="heading-1">What We <span className="text-gradient">Stand For</span></h2>
            <p>These values guide every decision we make and every course we build.</p>
          </AnimatedSection>
          <motion.div
            className="grid grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {values.map((v) => (
              <motion.div key={v.title} className="feature-card" variants={itemVariants}>
                <div className="feature-icon" style={{ background: `${v.color}18` }}>
                  <v.icon size={28} color={v.color} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-badge"><TrendingUp size={12} /> Our Journey</span>
            <h2 className="heading-1">The EduLearn <span className="text-gradient">Story</span></h2>
            <p>From a small startup to a platform trusted by thousands of learners worldwide.</p>
          </AnimatedSection>
          <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: 'var(--gradient-primary)', transform: 'translateX(-50%)' }} />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end', marginBottom: 'var(--space-xl)', position: 'relative' }}
              >
                <div style={{ width: '45%', background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--gray-100)' }}>
                  <div style={{ color: 'var(--primary)', fontWeight: 800, fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: 4 }}>{m.year}</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{m.event}</p>
                </div>
                <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 16, height: 16, borderRadius: '50%', background: 'var(--gradient-primary)', border: '3px solid white', boxShadow: 'var(--shadow-primary)' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" aria-label="Call to action">
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection>
            <h2 className="heading-1" style={{ marginBottom: 'var(--space-md)' }}>
              Join Our Growing <span className="text-gradient">Community</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto var(--space-2xl)', fontSize: '1.05rem' }}>
              Be part of a community of passionate learners building their futures one skill at a time.
            </p>
            <Link to="/courses" className="btn btn-primary btn-lg">
              Start Learning Today <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
