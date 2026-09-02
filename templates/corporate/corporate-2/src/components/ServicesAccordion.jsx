import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from './Icons';
import { SERVICES } from '../data/content';

export default function ServicesAccordion({ services = SERVICES, limit = null }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <div className="services-list">
      {displayServices.map((service, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={service.id}
            onMouseEnter={() => setHoveredIndex(index)}
            className={`service-row ${isHovered ? 'is-active' : ''}`}
          >
            <div className="service-row-grid">
              
              {/* Number & Title */}
              <div className="service-title-col">
                <span className="service-num">{service.number}</span>
                <Link to={`/services/${service.id}`} className="service-title-link">
                  {service.title}
                </Link>
              </div>

              {/* Tagline & Expandable Description */}
              <div className="service-desc-col">
                <p className="service-tagline">{service.tagline}</p>
                <p className="service-full-desc">{service.description}</p>
              </div>

              {/* Actions & Preview Thumbnail */}
              <div className="service-action-col">
                {isHovered && (
                  <div className="service-preview-thumb">
                    <img src={service.image} alt={service.title} />
                  </div>
                )}
                <Link
                  to={`/services/${service.id}`}
                  className="btn-editorial-underline"
                  aria-label={`Explore ${service.title}`}
                >
                  <span>Explore</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>

            {/* Deliverables Bar when active */}
            {isHovered && (
              <div className="service-deliverables-grid">
                {service.deliverables.map((item, dIdx) => (
                  <div key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold' }}>›</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
