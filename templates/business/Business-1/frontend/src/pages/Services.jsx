import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Cpu, Code, Megaphone, BarChart, Compass, Zap, Cloud, ArrowRight, CheckCircle } from 'lucide-react';
import { apiService } from '../utils/api';
import './Services.css';

// Mapping string names to Lucide icons dynamically
const iconMap = {
  Briefcase: <Briefcase size={28} />,
  Cpu: <Cpu size={28} />,
  Code: <Code size={28} />,
  Megaphone: <Megaphone size={28} />,
  BarChart: <BarChart size={28} />,
  Compass: <Compass size={28} />,
  Zap: <Zap size={28} />,
  Cloud: <Cloud size={28} />
};

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await apiService.getServices();
        setServices(data);
      } catch (err) {
        console.error("Failed fetching services:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="services-page">
      {/* Background Orbs */}
      <div className="glow-bg">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      {/* Header Banner */}
      <section className="services-header section-padding">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">CAPABILITIES</span>
            <h1 className="large-headline">High-Performance <br /><span className="text-gradient">Business Solutions</span></h1>
            <p className="lead-paragraph">
              Deploy custom APIs, microservices, secure cloud landing zones, and automated marketing funnels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-catalog-section section-padding">
        <div className="container">
          {loading ? (
            <div className="loading-spinner-box">
              <div className="spinner"></div>
              <p>Loading capabilities...</p>
            </div>
          ) : (
            <div className="services-catalog-grid">
              {services.map((service, idx) => (
                <motion.div
                  className="services-catalog-card glass-card"
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="card-top">
                    <div className="card-icon-frame">
                      {iconMap[service.icon] || <Cpu size={28} />}
                    </div>
                    <span className="card-glow-border"></span>
                  </div>

                  <div className="card-mid">
                    <h3>{service.title}</h3>
                    <p>{service.shortDesc}</p>
                  </div>

                  <div className="card-expand-details">
                    <h4>Key Deliverables:</h4>
                    <ul className="card-bullet-list">
                      {service.benefits.map((b, bIdx) => (
                        <li key={bIdx}>
                          <CheckCircle className="bullet-icon-check" size={14} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-footer-cta">
                    <Link to={`/services/${service.id}`} className="btn btn-secondary card-link-btn">
                      Explore Service Detail <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Reusable Solution Advisory Block */}
      <section className="services-consulting-banner section-padding">
        <div className="container">
          <div className="consulting-card glass-card text-center">
            <h2>Need a Tailored Development Sprint?</h2>
            <p>Our engineering managers coordinate with your tech leads to draft clean repository migration plans, API architectures, and pipeline audits.</p>
            <Link to="/contact" className="btn btn-primary">
              Connect with an Architect <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
