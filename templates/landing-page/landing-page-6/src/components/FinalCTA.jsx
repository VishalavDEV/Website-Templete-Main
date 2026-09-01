import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="container center-content">
        <span className="section-label reveal-on-scroll">THE TIME IS NOW</span>

        <h2 className="final-cta-heading reveal-on-scroll delay-1">
          Your Next Story <br />
          <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Begins Here</span>
        </h2>

        <p className="final-cta-desc reveal-on-scroll delay-2">
          Step into a world where memories have consequences and tomorrow is never guaranteed. Order your copy today.
        </p>

        <a href="#purchase" className="btn-primary reveal-on-scroll delay-3" style={{ fontSize: '1.125rem', padding: '16px 40px' }}>
          Get Your Copy <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}
