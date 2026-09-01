import React from 'react';
import FAQAccordion from '../components/FAQAccordion';

export default function FAQ() {
  return (
    <div style={{ background: 'var(--bg-midnight)', minHeight: '100vh', paddingTop: '40px', paddingBottom: '90px' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 24px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>HELP & FREQUENTLY ASKED QUESTIONS</div>
          <h1 className="font-display text-gradient" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            HAVE A QUESTION?
          </h1>
          <p style={{ color: 'var(--soft-grey)', maxWidth: '600px', margin: '16px auto 0 auto', fontSize: '1.05rem' }}>
            Find immediate answers regarding bib collection, hydration, race rules, medical support, and medals.
          </p>
        </div>

        <FAQAccordion />

      </div>
    </div>
  );
}
