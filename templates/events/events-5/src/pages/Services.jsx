import React, { useState } from 'react';
import { services, serviceCategories } from '../data/servicesData';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle, ArrowRight, Sparkles, Droplet } from 'lucide-react';

export const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Services');

  const filteredServices = selectedCategory === 'All Services'
    ? services
    : services.filter(s => s.category === selectedCategory);

  return (
    <div style={{ background: '#07090b', paddingBottom: '90px' }}>
      {/* Header */}
      <section style={{
        padding: '90px 0 50px 0',
        background: 'radial-gradient(ellipse at top, #161c22 0%, #07090b 80%)',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div className="container">
          <span className="section-label">AUTOMOTIVE SERVICES</span>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#f5f7f8',
            marginBottom: '16px'
          }}>
            PRECISION CARE FOR EVERY DRIVE.
          </h1>
          <p style={{ color: '#b9c0c5', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto' }}>
            Explore our complete range of specialized detailing, paint correction, ceramic coatings, and high-pressure snow foam wash treatments.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0' }}>
        <div className="container">
          {/* Category Filter Tabs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '50px'
          }}>
            {serviceCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={isActive ? "btn-primary" : "btn-secondary"}
                  style={{ padding: '10px 20px', fontSize: '0.85rem', borderRadius: '99px' }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Detailed Service Cards List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="glass-card"
                style={{
                  padding: '36px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '36px',
                  alignItems: 'center',
                  background: 'linear-gradient(145deg, #111417 0%, #0d1013 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {/* Image Side */}
                <div style={{ position: 'relative', height: '340px', borderRadius: '16px', overflow: 'hidden' }}>
                  <img
                    src={service.image}
                    alt={service.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'rgba(7, 9, 11, 0.85)',
                    border: '1px solid #7cff4f',
                    color: '#7cff4f',
                    padding: '6px 14px',
                    borderRadius: '99px',
                    fontSize: '0.78rem',
                    fontWeight: '800'
                  }}>
                    {service.badge}
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    background: 'rgba(7, 9, 11, 0.85)',
                    color: '#25bfff',
                    padding: '6px 14px',
                    borderRadius: '99px',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Clock size={14} /> Duration: {service.duration}
                  </div>
                </div>

                {/* Details Side */}
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#7cff4f', fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px' }}>
                    {service.category}
                  </div>

                  <h2 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '2rem',
                    color: '#f5f7f8',
                    marginBottom: '12px'
                  }}>
                    {service.name}
                  </h2>

                  <p style={{ color: '#b9c0c5', fontSize: '1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                    {service.description}
                  </p>

                  {/* Key Benefits */}
                  <h4 style={{ color: '#f5f7f8', fontSize: '0.95rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Key Service Benefits:
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginBottom: '28px' }}>
                    {service.benefits.map((b, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#b9c0c5' }}>
                        <CheckCircle size={15} color="#7cff4f" style={{ flexShrink: 0 }} />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & CTA */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Starting Package</span>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.8rem', fontWeight: '900', color: '#7cff4f' }}>
                        {service.startingPrice}
                      </div>
                    </div>

                    <Link to="/booking" className="btn-primary" style={{ padding: '12px 28px' }}>
                      BOOK SERVICE <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
