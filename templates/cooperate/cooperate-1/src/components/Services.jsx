import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BrainCircuit, Code2, CloudCog, ShieldCheck, DatabaseZap, TrendingUp } from 'lucide-react';
import { services } from '../data/services';
import './Services.css';

const iconMap = {
  BrainCircuit: BrainCircuit,
  Code2: Code2,
  CloudCog: CloudCog,
  ShieldCheck: ShieldCheck,
  DatabaseZap: DatabaseZap,
  TrendingUp: TrendingUp
};

export default function Services({
  limit,
  showHeader = true,
  title = "Capabilities built around your ambition.",
  subtitle = "Architecting resilient, high-throughput digital systems that translate technological complexity into enterprise market leadership."
}) {
  const displayServices = limit ? services.slice(0, limit) : services;
  const [hoveredService, setHoveredService] = useState(displayServices[0]?.id || null);

  return (
    <section className="services-section section">
      <div className="container">
        {showHeader && (
          <div className="section-header text-center">
            <span className="section-tag">01 / CAPABILITIES</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-description">{subtitle}</p>
          </div>
        )}

        {/* Sophisticated Numbered Interactive Service List */}
        <div className="luxury-services-list">
          {displayServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code2;
            const isHovered = hoveredService === service.id;

            return (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className={`luxury-service-row ${isHovered ? 'is-active' : ''}`}
                onMouseEnter={() => setHoveredService(service.id)}
              >
                <div className="service-row-left">
                  <span className="luxury-service-num">{service.number}</span>
                  <div className="service-title-group">
                    <h3 className="luxury-service-title">{service.title}</h3>
                    <p className="luxury-service-tagline">{service.tagline}</p>
                  </div>
                </div>

                <div className="service-row-center">
                  <p className="luxury-service-summary">{service.description}</p>
                  <div className="luxury-service-caps">
                    {service.capabilities.slice(0, 3).map((cap, i) => (
                      <span key={i} className="luxury-cap-pill">{cap.title}</span>
                    ))}
                  </div>
                </div>

                <div className="service-row-right">
                  <div className="luxury-service-icon-wrap">
                    <IconComponent size={24} />
                  </div>
                  <div className="luxury-arrow-box">
                    <ArrowUpRight size={20} className="row-arrow-icon" />
                  </div>
                </div>

                {/* Subtle row highlight beam */}
                <div className="service-hover-beam" />
              </Link>
            );
          })}
        </div>

        {/* Bottom review prompt */}
        <div className="services-bottom-prompt">
          <p>Looking for a custom architecture engagement or bespoke advisory?</p>
          <Link to="/contact" className="btn btn-outline">
            <span>Schedule Architecture Review</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
