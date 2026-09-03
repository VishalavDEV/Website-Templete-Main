import React from 'react';
import FAQAccordion from '../components/FAQAccordion';
import Newsletter from '../components/Newsletter';

export default function FAQ({ showToast }) {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <span className="section-tag">HELP & SUPPORT</span>
          <h1 className="page-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
            Find immediate answers to questions regarding passes, schedules, venues, and digital badges.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FAQAccordion />
        </div>
      </section>

      <Newsletter showToast={showToast} />
    </div>
  );
}
