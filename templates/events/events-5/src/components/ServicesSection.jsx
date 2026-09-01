import React from 'react';
import { services } from '../data/servicesData';
import ServiceCard from './ServiceCard';

export const ServicesSection = ({ limit = 6 }) => {
  const displayedServices = services.slice(0, limit);

  return (
    <section style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">AUTOMOTIVE SERVICES</span>
          <h2 className="section-title">BUILT FOR YOUR CAR.</h2>
          <p className="section-subtitle">
            Professional automotive care from surface to finish.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {displayedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
