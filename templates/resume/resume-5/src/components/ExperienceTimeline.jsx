import React, { useRef } from 'react';
import { experienceData } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, MapPin, Building2, Calendar, Check } from 'lucide-react';

export default function ExperienceTimeline() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className="arch-section experience-section">
      <div className="arch-grid-lines"></div>

      <div className="container">
        {/* SECTION HEADER & CONTROLS */}
        <div className="section-header-bar">
          <div className="header-left">
            <span className="section-number">03</span>
            <div className="header-titles">
              <span className="section-label">CAREER TRAJECTORY</span>
              <h2 className="section-title display-title">Professional Experience</h2>
            </div>
          </div>

          <div className="timeline-nav-buttons">
            <button className="timeline-scroll-btn" onClick={() => scroll('left')} aria-label="Scroll left">
              <ChevronLeft size={20} />
            </button>
            <button className="timeline-scroll-btn" onClick={() => scroll('right')} aria-label="Scroll right">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* HORIZONTAL ARCHITECTURAL TIMELINE CONTAINER */}
        <div className="timeline-outer-wrapper">
          <div className="timeline-track-line"></div>

          <div className="timeline-scroll-container" ref={scrollContainerRef}>
            {experienceData.map((item, idx) => (
              <div key={idx} className="timeline-node-card arch-card">
                <div className="arch-corner-tick tick-tl"></div>
                <div className="arch-corner-tick tick-tr"></div>
                <div className="arch-corner-tick tick-bl"></div>
                <div className="arch-corner-tick tick-br"></div>

                {/* NODAL CONNECTOR PIN */}
                <div className="node-pin-container">
                  <div className="node-pin"></div>
                  <span className="mono-text coord-text">{item.coordinates}</span>
                </div>

                <div className="node-header">
                  <span className="node-period">{item.period}</span>
                  <span className="node-company-type">{item.type}</span>
                </div>

                <h3 className="node-role">{item.role}</h3>

                <div className="node-company-row">
                  <Building2 size={16} className="company-icon" />
                  <span className="company-name">{item.company}</span>
                  <span className="bullet-sep">•</span>
                  <MapPin size={14} className="location-icon" />
                  <span className="location-text">{item.location}</span>
                </div>

                <p className="node-summary">{item.description}</p>

                {/* RESPONSIBILITIES LIST */}
                <div className="responsibilities-list">
                  <span className="mono-text list-title">KEY DELIVERABLES:</span>
                  {item.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="resp-item">
                      <Check size={12} className="resp-icon" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .experience-section {
          background-color: var(--bg-pure);
          border-bottom: 1px solid var(--border-light);
          overflow: hidden;
        }

        .timeline-nav-buttons {
          display: flex;
          gap: 10px;
        }

        .timeline-scroll-btn {
          width: 44px;
          height: 44px;
          background-color: var(--bg-pure);
          border: 1px solid var(--border-medium);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .timeline-scroll-btn:hover {
          background-color: var(--accent-charcoal);
          color: var(--bg-pure);
          border-color: var(--accent-charcoal);
        }

        /* TIMELINE TRACK */
        .timeline-outer-wrapper {
          position: relative;
          padding-top: 40px;
        }

        .timeline-track-line {
          position: absolute;
          top: 70px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--border-medium);
          z-index: 1;
        }

        .timeline-scroll-container {
          display: flex;
          gap: 32px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding-bottom: 30px;
          padding-top: 10px;
          position: relative;
          z-index: 2;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
        }

        .timeline-node-card {
          flex: 0 0 380px;
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          background-color: var(--bg-pure);
          margin-top: 30px;
          border-top: 3px solid var(--accent-green);
        }

        .node-pin-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: -46px;
          margin-bottom: 20px;
          position: relative;
        }

        .node-pin {
          width: 16px;
          height: 16px;
          background-color: var(--accent-green);
          border: 3px solid var(--bg-pure);
          outline: 1px solid var(--accent-green);
          border-radius: 50%;
        }

        .coord-text {
          font-size: 0.68rem;
          color: var(--text-light);
        }

        .node-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .node-period {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--accent-charcoal);
        }

        .node-company-type {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--accent-green);
          background-color: var(--bg-gray);
          padding: 4px 8px;
        }

        .node-role {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--accent-green);
          margin-bottom: 8px;
        }

        .node-company-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .company-icon, .location-icon {
          color: var(--accent-charcoal);
        }

        .bullet-sep {
          color: var(--border-medium);
        }

        .node-summary {
          font-size: 0.95rem;
          color: var(--text-main);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .responsibilities-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px dashed var(--border-light);
        }

        .list-title {
          font-size: 0.7rem;
          color: var(--text-light);
        }

        .resp-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        .resp-icon {
          color: var(--accent-green);
          margin-top: 3px;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .timeline-node-card {
            flex: 0 0 300px;
          }
        }
      `}</style>
    </section>
  );
}
