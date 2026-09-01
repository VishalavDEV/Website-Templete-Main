import React, { useRef } from 'react';

const pillars = [
  {
    num: '01',
    badge: 'CONCEPT + BIM',
    title: 'Architectural Concept & 3D BIM',
    desc: 'From initial site study to clash-free digital twin modeling, we engineer spaces that harmonize with nature.',
    img: './assets/images/knack-pillar-1-bim.jpg'
  },
  {
    num: '02',
    badge: 'CONSTRUCTION',
    title: 'Luxury General Contracting',
    desc: 'Turnkey execution with dedicated master craftsmen, precision structural framing, and strict milestone tracking.',
    img: './assets/images/knack-pillar-2-build.jpg'
  },
  {
    num: '03',
    badge: 'BESPOKE INTERIOR',
    title: 'Kitchens & Bathrooms',
    desc: 'Custom European cabinetry, bookmatched marble slabs, concealed MEP, and high-performance fixtures.',
    img: './assets/images/knack-pillar-3-kitchen.jpg'
  },
  {
    num: '04',
    badge: 'LANDSCAPE & POOL',
    title: 'Outdoor Living & Infinity Pools',
    desc: 'Seamless indoor-outdoor integration with cantilevered pergolas, sunken firepits, and automated climate pools.',
    img: './assets/images/knack-pillar-4-pool.jpg'
  }
];

function PillarCard({ item }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -6;
    const rotY = ((x - centerX) / centerX) * 6;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    }
  };

  return (
    <div 
      ref={cardRef} 
      className="pillar-card tilt-card" 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="pillar-img-box">
        <img src={item.img} alt={item.title} />
        <span className="pillar-badge">{item.badge}</span>
      </div>
      <div className="pillar-body">
        <span className="pillar-num">{item.num}</span>
        <h3 className="pillar-title">{item.title}</h3>
        <p className="pillar-desc">{item.desc}</p>
      </div>
    </div>
  );
}

export default function Methodology() {
  return (
    <section className="knack-section bg-subtle" id="services">
      <div className="container">
        <div className="section-heading-center">
          <span className="k-tag">THE KNACK METHODOLOGY</span>
          <h2 className="k-title">Unified Architectural Design & General Contracting</h2>
          <p className="k-desc">
            Single-source accountability from schematic conceptualization through master build and interior commissioning.
          </p>
        </div>

        <div className="pillars-grid-4">
          {pillars.map((item, idx) => (
            <PillarCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
