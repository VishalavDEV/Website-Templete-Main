import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ArrowRight, HelpCircle, ChevronDown, ChevronUp, Cpu, Settings } from 'lucide-react';
import { apiService } from '../utils/api';
import './ServiceDetails.css';

export default function ServiceDetails() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const fetchServiceDetail = async () => {
      setLoading(true);
      try {
        const data = await apiService.getServiceById(id);
        setService(data);
      } catch (err) {
        console.error("Failed fetching service details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServiceDetail();
  }, [id]);

  const toggleFaq = (index) => {
    setActiveFaq(prev => prev === index ? null : index);
  };

  if (loading) {
    return (
      <div className="service-details-page loading-box container">
        <div className="spinner"></div>
        <p>Loading service profiles...</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="service-details-page error-box container text-center">
        <h2>Capability Profile Not Found</h2>
        <p>The service profile you are trying to access does not exist or has been relocated.</p>
        <Link to="/services" className="btn btn-primary">
          <ArrowLeft size={16} /> Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="service-details-page">
      {/* Background Glow */}
      <div className="glow-bg">
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      {/* Hero Intro */}
      <section className="detail-hero-section section-padding">
        <div className="container">
          <Link to="/services" className="back-link">
            <ArrowLeft size={14} /> Back to Services Catalog
          </Link>
          <div className="detail-hero-grid">
            <motion.div
              className="detail-hero-info"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="service-tag">Capability Details</div>
              <h1>{service.title}</h1>
              <p className="lead-text">{service.longDesc}</p>
              <div className="detail-ctas">
                <Link to="/contact" className="btn btn-primary">
                  Draft Solution Map <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="detail-hero-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="detail-visual-box glass-card">
                <Settings className="rotating-icon" size={48} />
                <h3>{service.title} Systems</h3>
                <p>Configured & deployed directly into your repositories.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits & Features Grid */}
      <section className="detail-benefits-section section-padding">
        <div className="container grid-benefits">
          <div className="benefits-left">
            <h2>Key Operational Impact</h2>
            <p>We replace conceptual slides with measurable metrics. Here is what this service delivers to your organization:</p>
            <div className="benefits-metrics-list">
              {service.benefits.map((b, idx) => (
                <div className="metric-item glass-card" key={idx}>
                  <CheckCircle size={20} className="check-icon" />
                  <p>{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="features-right glass-card">
            <h3>Standard Package Deliverables</h3>
            <p className="subtext">Our software sprints cover execution across these major nodes:</p>
            <div className="features-checklist">
              {service.features.map((f, idx) => (
                <div className="check-bullet" key={idx}>
                  <Cpu size={16} className="feature-icon" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Execution Process Roadmap */}
      <section className="detail-process-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">PROJECT PIPELINE</span>
            <h2 className="section-title">Deployment Process</h2>
            <p className="section-desc">How we transition your systems from audits to live production deployments.</p>
          </div>

          <div className="details-process-timeline">
            {service.processSteps.map((step, idx) => (
              <motion.div
                className="details-process-card glass-card"
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="step-num">Step 0{idx + 1}</div>
                <h3>{step}</h3>
                <p>Milestone execution checkpoint aligned with team sprint schedules.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility Tools */}
      <section className="detail-tools-section section-padding">
        <div className="container text-center">
          <div className="section-header">
            <h2 className="section-title">Compatible Technology Stack</h2>
            <p className="section-desc">We build solutions that safely integrate with your existing technology nodes.</p>
          </div>
          <div className="tools-grid">
            {service.technologies.map((t, idx) => (
              <div className="tool-tag glass-card" key={idx}>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="detail-faq-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">FAQ</span>
            <h2 className="section-title">Common Inquiries</h2>
            <p className="section-desc">Answers to architectural, contracting, and operational questions.</p>
          </div>

          <div className="faq-accordion-list">
            {service.faqs.map((faq, idx) => (
              <div
                className={`faq-accordion-card glass-card ${activeFaq === idx ? 'active' : ''}`}
                key={idx}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question-row">
                  <HelpCircle className="faq-icon" size={20} />
                  <h3>{faq.question}</h3>
                  <button className="faq-toggle-btn" aria-label="Toggle FAQ">
                    {activeFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                {activeFaq === idx && (
                  <motion.div
                    className="faq-answer-row"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
