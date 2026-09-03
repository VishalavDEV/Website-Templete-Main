import React, { useState, useEffect, useRef } from 'react';
import { STUDIO_MEMBERS, StudioMember } from '../../data/studio';
import { Lanyard } from '../react-bits/Lanyard';

export const Studio: React.FC = () => {
  const [counts, setCounts] = useState({ projects: 0, disciplines: 0, cities: 0, philosophy: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hoveredMember, setHoveredMember] = useState<StudioMember | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1200;
          const startTime = performance.now();

          const animate = (time: number) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
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

  return (
    <section className="studio-section" id="studio" aria-label="About the Studio">
      <div className="section-header-bar">
        <span className="section-number">06 / 08</span>
        <span className="section-category">Studio Collective & Ethos</span>
      </div>

      <div className="studio-hero-grid">
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

          {/* 22 Studio Statistics */}
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

        {/* 23 Layered Composition & Lanyard Credential Pass */}
        <div className="studio-visual-col">
          <div className="studio-layered-visual">
            <img
              src="/images/house_of_silence_interior.jpg"
              alt="Architectural studio workshop with models, plans and material samples"
              className="studio-base-image"
              loading="lazy"
            />
            <div className="studio-tracing-overlay" aria-hidden="true">
              <span className="blueprint-stamp">WORKSHOP / LAB 01</span>
              <span className="blueprint-stamp-right">SCALE 1:50</span>
            </div>
          </div>

          <div className="studio-lanyard-wrapper">
            <Lanyard />
          </div>
        </div>
      </div>

      {/* 24 Team Members */}
      <div className="studio-team-area">
        <div className="team-header-line">
          <span className="meta-label">LEADERSHIP // FICTIONAL SPATIAL RESEARCHERS</span>
          <span className="meta-label">03 MEMBERS</span>
        </div>

        <div className="team-typography-list" role="list">
          {STUDIO_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="team-member-row"
              role="listitem"
              onMouseEnter={() => setHoveredMember(member)}
              onMouseLeave={() => setHoveredMember(null)}
              tabIndex={0}
            >
              <div className="member-main-info">
                <h3 className="member-name">{member.name}</h3>
                <span className="member-role">{member.role}</span>
              </div>
              <p className="member-bio">{member.bio}</p>

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
