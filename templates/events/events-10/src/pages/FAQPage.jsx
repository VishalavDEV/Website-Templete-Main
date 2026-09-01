import React from 'react';
import { FAQAccordion } from '../components/FAQAccordion';

export const FAQPage = () => {
  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              FREQUENTLY ASKED <span>QUESTIONS</span>
            </h1>
            <div className="section-subtitle">TICKETING, REGISTRATION & TOURNAMENT RULES ANSWERED</div>
          </div>

          <FAQAccordion />
        </div>
      </section>
    </div>
  );
};
