import React from 'react';
import { Building2, Compass, Wrench, ShieldCheck } from 'lucide-react';

export default function ServicesStrip() {
  const services = [
    {
      icon: <Building2 size={26} />,
      title: 'GENERAL CONSTRUCTION',
      desc: 'End-to-end construction services with superior quality and on-time delivery.'
    },
    {
      icon: <Compass size={26} />,
      title: 'DESIGN & BUILD',
      desc: 'Innovative design solutions combined with expert construction and 3D BIM.'
    },
    {
      icon: <Wrench size={26} />,
      title: 'RENOVATION & REMODELING',
      desc: 'Transforming spaces with modern designs and exceptional craftsmanship.'
    },
    {
      icon: <ShieldCheck size={26} />,
      title: 'PROJECT MANAGEMENT',
      desc: 'Efficient management ensuring quality, budget, and timely completion.'
    }
  ];

  return (
    <section className="services-strip-section perspective-container" id="services">
      <div className="container">
        <div className="services-strip-grid">
          {services.map((s, idx) => (
            <div key={idx} className="service-strip-card tilt-3d">
              <div className="service-icon-box">
                {s.icon}
              </div>
              <h3 className="service-strip-title">{s.title}</h3>
              <p className="service-strip-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
