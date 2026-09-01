import React from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Liam Carter',
      role: 'VP of Product at Vertex',
      quote: 'Moving our product team to Flowly AI saved us at least 4 hours of meetings per week. The AI action items generated from our transcript notes are incredibly accurate and save hours of manual typing.',
      initials: 'LC',
      avatarGrad: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    },
    {
      name: 'Sophia Chen',
      role: 'Engineering Lead at Pulse',
      quote: 'Our developers love the automated priorities list. No more sorting through massive backlogs—the AI identifies dependencies, and updates task statuses based on our actual code completions.',
      initials: 'SC',
      avatarGrad: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
    },
    {
      name: 'Elena Rostova',
      role: 'Founder at Nova Tech',
      quote: 'Flowly is the first platform that truly unifies tasks, calendars, and documentation. Having our knowledge hub connected directly to our execution dashboard cut onboarding times in half.',
      initials: 'ER',
      avatarGrad: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    },
  ];

  return (
    <section className="section-padding testimonials-section" id="testimonials">
      <div className="glow-blur testimonials-glow"></div>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">Loved by teams that move fast.</h2>
          <p className="section-desc">
            Discover how leading product and engineering teams use Flowly AI to unify operations and accelerate sprints.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="glass-card testimonial-card reveal">
              <p className="testimonial-quote">"{rev.quote}"</p>
              <div className="testimonial-user">
                <div
                  className="testimonial-avatar"
                  style={{ background: rev.avatarGrad }}
                >
                  {rev.initials}
                </div>
                <div className="testimonial-info">
                  <span className="testimonial-name">{rev.name}</span>
                  <span className="testimonial-role">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
