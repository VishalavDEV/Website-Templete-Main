import React from 'react';
import FAQAccordion from '../components/FAQAccordion';

export default function FAQ() {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-label">QUESTIONS & ANSWERS</span>
          <h1 className="serif-title">FREQUENTLY ASKED QUESTIONS</h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0.8rem auto 0' }}>
            Everything you need to know about our wedding celebration in Chennai.
          </p>
        </div>

        <FAQAccordion />
      </div>
    </div>
  );
}
