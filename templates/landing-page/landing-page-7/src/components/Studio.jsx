import React, { useState, useEffect, useRef } from 'react';
import { Lanyard } from './react-bits/Lanyard.jsx';

export const Studio = () => {
  const [counts, setCounts] = useState({ projects: 0, disciplines: 0, cities: 0, philosophy: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hoveredMember, setHoveredMember] = useState(null);
  const statsRef = useRef(null);

  // Animate statistics numbers subtly when entering viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1200;
          const startTime = performance.now();

          const animate = (time) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const ease = 1 - (1 - progress) * (1 - progress);

            setCounts({
              projects: Math.floor(ease * 12),
              disciplines: Math.floor(ease * 4),
              cities: Math.floor(ease * 7),
              philosophy: 1,
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // 24 — Fictional Studio Members
  const teamMembers = [
    {
      name: 'ARUN MEHTA',
      role: 'FOUNDING ARCHITECT',
      bio: 'Trained in Ahmedabad and Zurich. Focuses on structural mass, post-tensioned concrete, and thermal monolithic enclosures.',
      portraitInitials: 'AM',
      accentColor: 'var(--color-clay)',
    },
    {
      name: 'MIRA SEN',
      role: 'SPATIAL DESIGN',
      bio: 'Investigates shadow choreography, acoustic reflection, and the transition of natural light across interior thresholds.',
      portraitInitials: 'MS',
      accentColor: 'var(--color-rust)',
    },
    {
      name: 'NOAH RAO',
      role: 'MATERIAL RESEARCH',
      bio: 'Leads geological sourcing and earth pigment alchemy, testing volcanic basalt, slag concrete, and coastal river clays.',
      portraitInitials: 'NR',
      accentColor: 'var(--color-deep-brown)',
    },
  ];

  return (
    <section className="studio-section" id="studio" aria-label="About the Studio">
      {/* Editorial Header */}
      <div className="section-header-bar">
        <span className="section-number">06 / 08</span>
        <span className="section-category">Studio Collective & Ethos</span>
      </div>

      <div className="studio-hero-grid">
        {/* Left Column: Heading & Content */}
        <div className="studio-content-col">
          <h2 className="studio-editorial-heading">
            A SMALL STUDIO.<br />
            A LARGE FIELD.
          </h2>

          <p className="studio-body-p">
            MONOLITH works across architecture, interiors and experimental spatial design.
          </p>

          <p className="studio-body-p sub">
            We are interested in the relationship between material, light, landscape and human movement.
          </p>

          {/* 22 — Fictional Studio Statistics */}
          <div ref={statsRef} className="studio-stats-grid">
            <div className="studio-stat-box">
              <span className="stat-number">{counts.projects < 10 ? `0${counts.projects}` : counts.projects}</span>
              <span className="stat-label">PROJECTS</span>
            </div>
            <div className="studio-stat-box">
              <span className="stat-number">0{counts.disciplines}</span>
              <span className="stat-label">DISCIPLINES</span>
            </div>
            <div className="studio-stat-box">
              <span className="stat-number">0{counts.cities}</span>
              <span className="stat-label">CITIES</span>
            </div>
            <div className="studio-stat-box">
              <span className="stat-number">0{counts.philosophy}</span>
              <span className="stat-label">PHILOSOPHY</span>
            </div>
          </div>
        </div>

        {/* Right Column: 23 Layered Composition & Lanyard Exhibition Credential */}
        <div className="studio-visual-col">
          <div className="studio-layered-visual">
            <img 
              src="/images/house_of_silence_interior.jpg" 
              alt="Architectural studio workshop with raw concrete models, timber workbench, and material samples" 
              className="studio-base-image"
            />
            {/* Layered Blueprint Tracing Overlay */}
            <div className="studio-tracing-overlay" aria-hidden="true">
              <span className="blueprint-stamp">WORKSHOP / LAB 01</span>
              <span className="blueprint-stamp-right">SCALE 1:50</span>
            </div>
          </div>

          {/* 21 — React Bits Lanyard Credential Pass */}
          <div className="studio-lanyard-wrapper">
            <Lanyard />
          </div>
        </div>
      </div>

      {/* =====================================================================
          PART 24: TEAM (Minimal Typography with Hover Portrait Reveal)
          ===================================================================== */}
      <div className="studio-team-area">
        <div className="team-header-line">
          <span className="meta-label">LEADERSHIP // FICTIONAL SPATIAL RESEARCHERS</span>
          <span className="meta-label">03 MEMBERS</span>
        </div>

        <div className="team-typography-list">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="team-member-row"
              onMouseEnter={() => setHoveredMember(member)}
              onMouseLeave={() => setHoveredMember(null)}
              tabIndex={0}
            >
              <div className="member-main-info">
                <h3 className="member-name">{member.name}</h3>
                <span className="member-role">{member.role}</span>
              </div>
              <p className="member-bio">{member.bio}</p>

              {/* Hover Portrait Badge Reveal */}
              <div 
                className={`member-hover-portrait ${hoveredMember?.name === member.name ? 'show' : ''}`}
                style={{ backgroundColor: member.accentColor }}
                aria-hidden="true"
              >
                <div className="portrait-inner">
                  <span className="portrait-monogram">{member.portraitInitials}</span>
                  <span className="portrait-fictional-tag">STUDIO ARCHIVE</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
