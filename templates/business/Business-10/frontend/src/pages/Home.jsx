import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Target, Zap, Users, TrendingUp,
  X, Star
} from 'lucide-react';
import Hero from '../components/Hero/Hero';
import StatsCounter from '../components/StatsCounter/StatsCounter';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import TestimonialCard from '../components/TestimonialCard/TestimonialCard';
import Button from '../components/Button/Button';
import { stats, processSteps } from '../data/stats';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import './Home.css';

const whyUsPoints = [
  { icon: <Target size={18} />, title: 'Outcome-Driven', desc: 'We measure success by your business results, not lines of code.' },
  { icon: <Zap size={18} />, title: 'Agile Delivery', desc: 'Two-week sprints with continuous demos and full transparency.' },
  { icon: <Users size={18} />, title: 'Dedicated Teams', desc: 'Senior engineers assigned full-time to your project — no juniors-only teams.' },
  { icon: <TrendingUp size={18} />, title: 'Post-Launch Support', desc: '90-day warranty period + long-term SLAs built into every engagement.' },
  { icon: <CheckCircle size={18} />, title: 'Proven Track Record', desc: '200+ successful projects delivered across 30+ countries.' },
  { icon: <Star size={18} />, title: '98% Satisfaction', desc: 'Our NPS score of 72 reflects our commitment to client experience.' },
];

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const handleTestimonialNext = () => {
    setCurrentTestimonial((c) => (c + 1) % testimonials.length);
  };
  const handleTestimonialPrev = () => {
    setCurrentTestimonial((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main id="main-content">
      {/* ─── Hero ─── */}
      <Hero />

      {/* ─── Stats ─── */}
      <section className="stats-section section-sm" aria-label="Company statistics">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat) => (
              <StatsCounter key={stat.id} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Overview ─── */}
      <section className="section" id="services-overview" aria-label="Our services">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">What We Do</span>
              <h2 className="section-title">
                Full-Spectrum <span className="text-gradient">Technology</span> Services
              </h2>
              <p className="section-subtitle">
                From idea to production, we cover the entire technology stack so you can focus on what matters — your business.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="home__services-cta">
              <Link to="/services">
                <Button variant="outline" size="lg" icon={<ArrowRight size={16} />}>
                  Explore All Services
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="section home__why" aria-label="Why choose NeXus Digital">
        <div className="container">
          <div className="home__why-grid">
            <ScrollReveal direction="left">
              <div className="home__why-text">
                <span className="section-tag">Why NeXus</span>
                <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 1rem' }}>
                  We Don't Just Build — <span className="text-gradient">We Deliver Outcomes</span>
                </h2>
                <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 2rem' }}>
                  Every engagement is structured around your business goals. Our engineers, designers, and strategists work as one unified team.
                </p>
                <Link to="/about">
                  <Button variant="primary" size="md" icon={<ArrowRight size={16} />}>
                    Learn Our Story
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            <div className="home__why-points">
              {whyUsPoints.map((point, i) => (
                <ScrollReveal key={point.title} delay={i * 0.06} direction="right">
                  <div className="home__why-item">
                    <div className="home__why-icon">{point.icon}</div>
                    <div>
                      <h3 className="home__why-item-title">{point.title}</h3>
                      <p className="home__why-item-desc">{point.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="section" aria-label="Our process">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">How We Work</span>
              <h2 className="section-title">
                A Process Built for <span className="text-gradient">Predictable Success</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="home__process">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="home__process-step">
                  <div className="home__process-num">{step.step}</div>
                  {i < processSteps.length - 1 && <div className="home__process-connector" aria-hidden="true" />}
                  <h3 className="home__process-title">{step.title}</h3>
                  <p className="home__process-desc">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Projects ─── */}
      <section className="section" aria-label="Featured projects">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">Our Work</span>
              <h2 className="section-title">
                Projects That <span className="text-gradient">Move Businesses</span>
              </h2>
              <p className="section-subtitle">
                Real problems, real solutions, real results. Explore a selection of our recent work.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {projects.slice(0, 3).map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onView={setSelectedProject}
              />
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="home__services-cta">
              <Link to="/projects">
                <Button variant="outline" size="lg" icon={<ArrowRight size={16} />}>
                  View All Projects
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="section home__testimonials" aria-label="Client testimonials">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">Testimonials</span>
              <h2 className="section-title">
                Trusted by <span className="text-gradient">Industry Leaders</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="home__testimonial-carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="home__testimonial-slide"
              >
                <TestimonialCard testimonial={testimonials[currentTestimonial]} />
              </motion.div>
            </AnimatePresence>

            <div className="home__testimonial-controls">
              <button
                className="home__testimonial-btn"
                onClick={handleTestimonialPrev}
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <div className="home__testimonial-dots" role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`home__testimonial-dot ${i === currentTestimonial ? 'home__testimonial-dot--active' : ''}`}
                    onClick={() => setCurrentTestimonial(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    role="tab"
                    aria-selected={i === currentTestimonial}
                  />
                ))}
              </div>
              <button
                className="home__testimonial-btn"
                onClick={handleTestimonialNext}
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="section home__cta-section" aria-label="Call to action">
        <div className="container">
          <ScrollReveal>
            <div className="home__cta-box">
              <div className="home__cta-bg" aria-hidden="true" />
              <span className="section-tag">Ready to Start?</span>
              <h2 className="home__cta-title font-display">
                Let's Build Something <span className="text-gradient">Extraordinary</span>
              </h2>
              <p className="home__cta-sub">
                Tell us about your project. We'll get back to you within 24 hours with a tailored proposal.
              </p>
              <div className="home__cta-actions">
                <Link to="/contact">
                  <Button variant="primary" size="lg" icon={<ArrowRight size={16} />}>
                    Start Your Project
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="secondary" size="lg">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Project details: ${selectedProject.title}`}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
              <div className="modal-header" style={{ background: selectedProject.gradient }} />
              <div className="modal-body">
                <span className="section-tag">{selectedProject.category}</span>
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-desc">{selectedProject.description}</p>

                <div className="modal-grid">
                  <div>
                    <h4 className="modal-section-title">Challenge</h4>
                    <p className="modal-text">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h4 className="modal-section-title">Solution</h4>
                    <p className="modal-text">{selectedProject.solution}</p>
                  </div>
                </div>

                <h4 className="modal-section-title">Results</h4>
                <ul className="modal-results">
                  {selectedProject.results.map((r) => (
                    <li key={r} className="modal-result-item">
                      <CheckCircle size={15} style={{ flexShrink: 0 }} /> <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="modal-section-title">Technologies</h4>
                <div className="modal-tags">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="project-card__tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Home;
