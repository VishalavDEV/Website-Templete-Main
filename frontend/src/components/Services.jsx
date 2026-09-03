import React, { useEffect, useState } from 'react';
import './Services.css';
import { getServices } from '../services/api';
import { Code, Layout, Feather, Globe, Smartphone, Sparkles, ArrowRight, Check } from 'lucide-react';

const iconMap = {
  code: Code,
  layout: Layout,
  feather: Feather,
  globe: Globe,
  mobile: Smartphone,
  default: Sparkles,
};

// Rich extended details for the "Learn More" modal or expanded cards
const serviceDetails = {
  1: {
    features: ['Custom SPA / SSR Development', 'REST & GraphQL APIs', 'Database Optimization & Security', 'Performance & SEO Engineering'],
    deliverables: 'Complete production-ready web application with automated tests, responsive UI, and deployment pipelines.',
    technologies: ['React 19', 'Spring Boot 3', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS']
  },
  2: {
    features: ['High-Fidelity Wireframing & Prototyping', 'Design Systems & Component Libraries', 'Mobile & Desktop Responsive Design', 'User Journey & Usability Research'],
    deliverables: 'Figma interactive prototypes, style guides, asset exports, and developer handoff specs.',
    technologies: ['Figma', 'Adobe Creative Suite', 'Framer', 'Protopie', 'Design Tokens']
  },
  3: {
    features: ['Brand Identity & Logo Crafting', 'Color Theory & Typography Guidelines', 'Marketing Collateral & Social Kits', 'Brand Tone & Voice Guidelines'],
    deliverables: 'Comprehensive brand style kit, vector SVG assets, and digital guidelines manual.',
    technologies: ['Illustrator', 'Photoshop', 'Brand Strategy', 'Visual Identity']
  }
};

export default function Services({ onSelectService }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeModalService, setActiveModalService] = useState(null);

  useEffect(() => {
    let isMounted = true;
    getServices()
      .then((data) => {
        if (isMounted) {
          setServices(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Error fetching services:', err);
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleOpenDetails = (service) => {
    const details = serviceDetails[service.id] || {
      features: ['Tailored Solutions', 'Production Quality Code', 'Cross-Platform Compatibility', 'Continuous Support'],
      deliverables: 'Full source code, documentation, and handover support.',
      technologies: ['React', 'Spring Boot', 'Modern UI']
    };
    setActiveModalService({ ...service, ...details });
  };

  const handleCloseModal = () => {
    setActiveModalService(null);
  };

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} />
            What I Offer
          </span>
          <h2 className="section-title">Specialized Services & Expertise</h2>
          <p className="section-subtitle">
            Delivering end-to-end digital solutions that blend cutting-edge engineering with refined aesthetic excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {loading ? (
            <div className="services-loading glass-card">
              <div className="loading-spinner"></div>
              <p>Fetching services from backend API...</p>
            </div>
          ) : (
            services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || iconMap.default;
              return (
                <div 
                  key={service.id || index} 
                  className="service-card glass-card"
                  tabIndex={0}
                  role="region"
                  aria-label={service.title}
                >
                  <div className="service-header-row">
                    <div className="service-icon-box">
                      <IconComponent size={26} />
                    </div>
                    <span className="service-category-badge">{service.category || 'Specialty'}</span>
                  </div>

                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.description}</p>

                  <div className="service-card-footer">
                    <button 
                      className="service-learn-more-btn"
                      onClick={() => handleOpenDetails(service)}
                      id={`service-btn-${service.id}`}
                    >
                      <span>Explore Details</span>
                      <ArrowRight size={16} className="arrow-icon" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="service-modal-overlay" onClick={handleCloseModal}>
          <div className="service-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="service-modal-header">
              <div className="service-modal-title-group">
                <span className="service-category-badge">{activeModalService.category}</span>
                <h3 className="service-modal-title">{activeModalService.title}</h3>
              </div>
              <button 
                className="service-modal-close" 
                onClick={handleCloseModal}
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <p className="service-modal-desc">{activeModalService.description}</p>

            <div className="service-modal-section">
              <h4 className="service-modal-subtitle">What's Included:</h4>
              <ul className="service-features-list">
                {activeModalService.features?.map((item, idx) => (
                  <li key={idx}>
                    <Check size={16} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-modal-section">
              <h4 className="service-modal-subtitle">Key Deliverable:</h4>
              <p className="service-deliverable-text">{activeModalService.deliverables}</p>
            </div>

            <div className="service-modal-section">
              <h4 className="service-modal-subtitle">Tech & Tools:</h4>
              <div className="service-modal-tags">
                {activeModalService.technologies?.map((tech, idx) => (
                  <span key={idx} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>

            <div className="service-modal-actions">
              <button 
                className="btn-primary"
                onClick={() => {
                  handleCloseModal();
                  if (onSelectService) {
                    onSelectService(activeModalService.title);
                  }
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Request This Service</span>
                <ArrowRight size={16} />
              </button>
              <button className="btn-secondary" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
