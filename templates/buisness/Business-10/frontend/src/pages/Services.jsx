import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Wrench, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import Button from '../components/Button/Button';
import { services } from '../data/services';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedService]);

  return (
    <main id="main-content">
      {/* ─── Page Hero ─── */}
      <section className="page-hero" aria-label="Services">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__blob page-hero__blob--1" />
          <div className="page-hero__blob page-hero__blob--2" />
        </div>
        <div className="container">
          <motion.div
            className="page-hero__content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">What We Offer</span>
            <h1 className="page-hero__title font-display">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="page-hero__subtitle">
              From custom software to cloud infrastructure — we provide end-to-end technology services
              designed to drive real business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="section" aria-label="All services">
        <div className="container">
          <div className="grid-3">
            {services.map((service, i) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={i}
                onLearnMore={setSelectedService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process Banner ─── */}
      <section className="section-sm services__banner" aria-label="Our development process">
        <div className="container">
          <ScrollReveal>
            <div className="services__banner-inner">
              <div className="services__banner-icon" aria-hidden="true">
                <Wrench size={28} />
              </div>
              <div className="services__banner-text">
                <h2 className="services__banner-title font-display">
                  Every Engagement Starts with a <span className="text-gradient">Free Discovery Session</span>
                </h2>
                <p className="services__banner-sub">
                  No commitment. No jargon. Just a straightforward conversation about your goals and how we can help.
                </p>
              </div>
              <Button variant="primary" size="lg" icon={<ArrowRight size={16} />} onClick={() => navigate('/contact')}>
                Book Discovery Call
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Service Detail Modal ─── */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Service details: ${selectedService.title}`}
          >
            <motion.div
              className="modal-content services__modal"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedService(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div
                className="services__modal-header"
                style={{ '--accent': selectedService.color }}
              >
                <span className="section-tag" style={{ color: selectedService.color }}>Service Detail</span>
                <h2 className="modal-title">{selectedService.title}</h2>
              </div>

              <div className="modal-body">
                <p className="modal-desc">{selectedService.fullDescription}</p>

                <div>
                  <h4 className="modal-section-title">Key Benefits</h4>
                  <ul className="services__modal-benefits">
                    {selectedService.benefits.map((b) => (
                      <li key={b} className="services__modal-benefit">
                        <CheckCircle2 size={15} style={{ color: selectedService.color, flexShrink: 0 }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="modal-section-title">Technologies & Tools</h4>
                  <div className="modal-tags">
                    {selectedService.technologies.map((t) => (
                      <span
                        key={t}
                        className="project-card__tag"
                        style={{
                          color: selectedService.color,
                          background: `color-mix(in srgb, ${selectedService.color} 12%, transparent)`,
                          borderColor: `color-mix(in srgb, ${selectedService.color} 25%, transparent)`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  icon={<ArrowRight size={16} />}
                  onClick={() => {
                    setSelectedService(null);
                    navigate('/contact');
                  }}
                >
                  Discuss This Service
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Services;
