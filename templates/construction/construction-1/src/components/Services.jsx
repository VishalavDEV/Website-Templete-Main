import React from 'react';

const servicesData = [
  {
    id: '01',
    category: 'HEAVY CRANE OPERATIONS & LIFT LOGISTICS',
    title: '1,200T Lattice & Tower Crane Infrastructure',
    description: 'Turnkey tower crane mobilization, 3D CAD lift simulation, wind-load stability modeling, and high-altitude structural steel rigging.',
    image: './assets/images/service-craft.jpg',
    features: [
      '3D Rigging & Vector Lift Calculations',
      'Wind Speed Monitoring Telemetry',
      'ENR-Certified Master Operators',
      'Super-Lift Counterweight Rigging'
    ],
    metric: '1,200T Capacity'
  },
  {
    id: '02',
    category: 'CIVIL & FOUNDATION ENGINEERING',
    title: 'Deep Sub-Structure Shoring & Concrete Piles',
    description: 'Subterranean seismic foundation piling, secant pile walls, high-strength pre-stressed concrete pours, and bridge pier caissons.',
    image: './assets/images/service-masonry.jpg',
    features: [
      '10,000 PSI High-Early Concrete',
      'Secant & Tangent Piling Solutions',
      'Seismic Damper Keying',
      'Sub-grade Hydrostatic Seals'
    ],
    metric: '85m Depth Piling'
  },
  {
    id: '03',
    category: 'TURNKEY COMMERCIAL LANDMARKS',
    title: 'High-Rise Structural Framing & Glass Enclosures',
    description: 'Accelerated structural steel erection, unitized glass curtain wall installation, and MEP BIM clash detection for high-rise commercial megastructures.',
    image: './assets/images/service-planning.jpg',
    features: [
      'BIM Level 5D Parametric Integration',
      'Unitized Curtain Wall Rigging',
      'LEED Platinum Energy Envelope',
      'Zero-Variance Schedule Tracking'
    ],
    metric: '64+ Story Framing'
  }
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge">CORE CAPABILITIES</div>
          <h2 className="section-title">
            ENGINEERING EXCELLENCE ACROSS <br />
            <span className="text-orange">HEAVY CIVIL INFRASTRUCTURE</span>
          </h2>
          <div className="heading-orange-bar center"></div>
          <p className="section-subtitle">
            From preliminary geotechnical analysis to complex multi-crane tandem lifts, our specialized divisions deliver uncompromised quality on complex megastructures.
          </p>
        </div>

        <div className="services-grid-3">
          {servicesData.map((svc) => (
            <div key={svc.id} className="service-card">
              <div className="service-img-box">
                <img src={svc.image} alt={svc.title} loading="lazy" />
                <div className="service-img-overlay">
                  <span className="service-num">{svc.id}</span>
                </div>
                <div className="service-metric-tag">{svc.metric}</div>
              </div>
              <div className="service-card-body">
                <div className="service-cat">{svc.category}</div>
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.description}</p>

                <ul className="service-features">
                  {svc.features.map((feat, idx) => (
                    <li key={idx}>
                      <span className="check-bullet">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a href="#calculator" className="service-link">
                  <span>SPECIFY THIS SERVICE</span>
                  <span className="service-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
