import React from 'react';
import { Button } from '../ui/Button';

export interface FinalCTAProps {
  onOpenInquiry: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenInquiry }) => {
  return (
    <section className="final-cta-section" id="final-cta" aria-label="Final Call to Action">
      <div className="final-cta-container">
        <span className="index-supertitle" style={{ color: 'var(--color-clay)', marginBottom: '1.5rem', display: 'block' }}>
          07 / 08 — COMMISSIONS
        </span>

        <h2 className="final-cta-headline">
          HAVE A SPACE<br />IN MIND?
        </h2>

        <p className="final-cta-sub">
          Let's turn the idea into somewhere real.
        </p>

        <div className="final-cta-buttons">
          <Button
            variant="primary"
            onClick={onOpenInquiry}
            aria-label="Open Project Inquiry Form"
          >
            START A PROJECT →
          </Button>

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
