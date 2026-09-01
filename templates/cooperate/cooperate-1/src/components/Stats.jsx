import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

const defaultStats = [
  { value: "180+", label: "PROJECTS DELIVERED", detail: "Mission-critical architectures deployed across 14 countries" },
  { value: "35+", label: "GLOBAL CLIENTS", detail: "Fortune 500 enterprises and category disruptors" },
  { value: "92%", label: "RETENTION RATE", detail: "Multi-year collaborative engineering partnerships" },
  { value: "4.8/5", label: "CLIENT SATISFACTION", detail: "Independently audited post-deployment benchmark" }
];

export default function Stats({ items = defaultStats, title, subtitle }) {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="dramatic-stats-section" ref={sectionRef}>
      <div className="stats-ambient-light" />
      <div className="container">
        {title && (
          <div className="section-header text-center">
            <span className="section-tag">BY THE NUMBERS</span>
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-description">{subtitle}</p>}
          </div>
        )}

        <div className={`dramatic-stats-grid ${inView ? 'is-animated' : ''}`}>
          {items.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="dramatic-stat-column">
                <div className="dramatic-stat-value">{stat.value}</div>
                <div className="dramatic-stat-label">{stat.label}</div>
                {stat.detail && <p className="dramatic-stat-detail">{stat.detail}</p>}
              </div>
              {idx < items.length - 1 && <div className="dramatic-stat-separator" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
