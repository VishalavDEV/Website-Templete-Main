import React from 'react';
import { ArrowRight } from 'lucide-react';
import './FinalCTA.css';

export default function FinalCTA({ onOpenAuth }) {
  return (
    <section className="cta-section">
      <div className="glow-blur cta-glow"></div>
      <div className="grid-bg"></div>

      <div className="container">
        <div className="cta-box reveal">
          <div className="cta-box-grid"></div>
          
          <h2 className="cta-title">Your best work starts here.</h2>
          <p className="cta-desc">
            Bring your tasks, ideas, and team together in one intelligent workspace. Start streamlining your operations in seconds.
          </p>

          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => onOpenAuth && onOpenAuth('signup')}>
              Start for free <ArrowRight size={16} />
            </button>
            <button className="btn btn-secondary" onClick={() => onOpenAuth && onOpenAuth('signup')}>
              Request enterprise demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
