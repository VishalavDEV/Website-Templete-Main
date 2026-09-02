import React, { useState, useEffect, useRef } from "react";
import { companyData } from "../data/companyData";

export const StatsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(companyData.stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters
          const duration = 1800; // ms
          const steps = 40;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            setCounts(
              companyData.stats.map((stat) =>
                Math.round(stat.rawNumber * easeOutQuart)
              )
            );

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts(companyData.stats.map((stat) => stat.rawNumber));
            }
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: "rgba(10, 12, 18, 0.6)" }}>
      <div className="container">
        <div className="stats-grid">
          {companyData.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="corner-bracket top-left"></div>
              <div className="corner-bracket bottom-right"></div>

              <div className="stat-number-wrap">
                <span className="stat-number">
                  {counts[idx]}
                  {stat.suffix}
                </span>
              </div>

              <div className="stat-label">{stat.label}</div>
              <p className="stat-detail">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
