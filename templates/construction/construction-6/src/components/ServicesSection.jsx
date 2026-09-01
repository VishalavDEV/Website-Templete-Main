import React from 'react';

export default function ServicesSection({ services }) {
  const fallbackServices = [
    {
      id: 'srv-1',
      number: '01',
      title: 'Architectural Concept & 3D BIM',
      description: 'Complete parametric 3D modeling, daylight optimization, and structural clash-free coordination.'
    },
    {
      id: 'srv-2',
      number: '02',
      title: 'Luxury Villa & Estate Construction',
      description: 'Precision concrete foundations, custom steel framing, cantilevered pools, and smart climate glass.'
    },
    {
      id: 'srv-3',
      number: '03',
      title: 'Commercial & Civil Engineering',
      description: 'Turnkey high-rise core erection, pre-stressed viaducts, and large-scale public infrastructure.'
    }
  ];

  const serviceList = (services && services.length > 0) ? services : fallbackServices;

  return (
    <section className="arcstone-section" id="services">
      <div className="container">
        <div className="section-header-center">
          <span className="section-subtitle">OUR EXPERTISE</span>
          <h2 className="section-title">Comprehensive Architecture & EPC Services</h2>
        </div>

        <div className="services-grid">
          {serviceList.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-num">{service.number}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
