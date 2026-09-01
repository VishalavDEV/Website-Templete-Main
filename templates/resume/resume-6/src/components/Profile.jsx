import React from 'react';
import { profile } from '../data.js';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import './Profile.css';

export default function Profile() {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation(0.1);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.1);

  return (
    <section id="profile" className="em-profile section-padding">
      <div className="container">
        <div ref={headRef} className={`em-profile__header fade-up ${headVisible ? 'visible' : ''}`}>
          <span className="section-label">01 — The Perspective</span>
          <div className="divider" style={{ marginTop: '1rem' }}></div>
        </div>

        <div className={`em-profile__statement fade-up delay-100 ${headVisible ? 'visible' : ''}`}>
          <blockquote className="em-profile__quote">
            "Good design doesn't just make something<br />
            <em>look</em> different. It makes people <em>feel</em> something different."
          </blockquote>
        </div>

        <div className="em-profile__split" ref={contentRef}>
          <div className={`em-profile__story fade-up ${contentVisible ? 'visible' : ''}`}>
            <h2 className="em-profile__story-title">Creative Philosophy</h2>
            {profile.philosophy.body.map((para, i) => (
              <p key={i} className={`body-lg em-profile__para fade-up delay-${(i + 2) * 100} ${contentVisible ? 'visible' : ''}`}>
                {para}
              </p>
            ))}
          </div>

          <div ref={statsRef} className={`em-profile__sidebar fade-in delay-300 ${statsVisible ? 'visible' : ''}`}>
            <div className="em-profile__sidebar-label">
              <span className="section-label">Profile</span>
              <div className="divider" style={{ marginTop: '0.75rem' }}></div>
            </div>
            <div className="em-profile__stats">
              {profile.stats.map((stat, i) => (
                <div key={i} className={`em-profile__stat fade-up delay-${(i + 1) * 100} ${statsVisible ? 'visible' : ''}`}>
                  <span className="em-profile__stat-value">{stat.value}</span>
                  <span className="em-profile__stat-label section-label">{stat.label}</span>
                  <div className="divider"></div>
                </div>
              ))}
            </div>
            <div className="em-profile__availability">
              <span className="section-label" style={{ display: 'block', marginBottom: '0.5rem' }}>Currently</span>
              <div className="em-profile__availability-dot"></div>
              <span className="body-sm">Available for selected collaborations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
