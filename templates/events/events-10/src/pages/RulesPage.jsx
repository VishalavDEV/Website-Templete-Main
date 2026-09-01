import React from 'react';
import { RulesAccordion } from '../components/RulesAccordion';
import { Shield } from 'lucide-react';

export const RulesPage = () => {
  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              RULES & <span>REGULATIONS</span>
            </h1>
            <div className="section-subtitle">OFFICIAL FIBA TOURNAMENT GAME & DISCIPLINARY RULEBOOK</div>
          </div>

          <RulesAccordion />
        </div>
      </section>
    </div>
  );
};
