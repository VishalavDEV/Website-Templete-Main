import React from 'react';

/**
 * 25 — Final CTA Section
 * Dramatic conclusion of the architectural narrative
 */
export const FinalCTA = ({ onOpenInquiry }) => {
  return (
    <section className="final-cta-section" id="final-cta" aria-label="Final Call to Action">
      <div className="final-cta-container">
        <span className="index-supertitle" style={{ color: 'var(--color-clay)', marginBottom: '1.5rem', display: 'block' }}>
          07 / 08 — COMMISSIONS
        </span>

        {/* Large Heading */}
        <h2 className="final-cta-headline">
          HAVE A SPACE<br />IN MIND?
        </h2>

        {/* Supporting Text */}
        <p className="final-cta-sub">
          Let's turn the idea into somewhere real.
        </p>

        {/* Action Buttons */}
        <div className="final-cta-buttons">
          {/* Primary Button */}
          <button 
            className="btn-cta-primary" 
            onClick={onOpenInquiry}
            aria-label="Open Project Inquiry Form"
          >
            START A PROJECT →
          </button>

          {/* Secondary Button */}
          <a 
            href="#project-index" 
            className="btn-cta-secondary"
            aria-label="View Selected Work Archive"
          >
            VIEW SELECTED WORK
          </a>
        </div>
      </div>
    </section>
  );
};
