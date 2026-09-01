import React from 'react';
import { faqItems } from '../../data/faq';
import { SectionHeading } from '../ui/SectionHeading';
import { Accordion } from '../ui/Accordion';

export const FAQSection: React.FC = () => {
  return (
    <section className="py-24 bg-[var(--bg-color)] border-b border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
        <SectionHeading
          number="09"
          badge="FREQUENTLY ASKED QUESTIONS"
          title="ANSWERS TO COMMON ENGAGEMENT INQUIRIES."
          align="center"
          description="Everything you need to know about our studio process, timelines, IP ownership, and WebGL technology fallbacks."
        />

        <Accordion items={faqItems} allowMultiple={false} />
      </div>
    </section>
  );
};
