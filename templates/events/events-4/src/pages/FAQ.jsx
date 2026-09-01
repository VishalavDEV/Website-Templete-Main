import React from 'react';
import SectionTitle from '../components/SectionTitle';
import FAQAccordion from '../components/FAQAccordion';

const FAQ = () => {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <SectionTitle subheading="COMMON QUESTIONS" title="FREQUENTLY ASKED QUESTIONS" />
        <FAQAccordion />
      </div>
    </div>
  );
};

export default FAQ;
