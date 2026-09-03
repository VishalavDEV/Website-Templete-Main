import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../data/faqs';

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto' }}>
      <div className="section-header" style={{ marginBottom: '2.5rem' }}>
        <span className="section-tag">FREQUENTLY ASKED QUESTIONS</span>
        <h2 className="section-title">
          Got <span className="gradient-text">Questions?</span>
        </h2>
        <p className="section-subtitle">
          Everything you need to know about Eventora passes, schedules, venues, and registration.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className="glass-card"
            style={{
              padding: '1.25rem 1.5rem',
              cursor: 'pointer',
              borderColor: openIdx === idx ? 'var(--primary)' : 'var(--border)'
            }}
            onClick={() => toggle(idx)}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: openIdx === idx ? 'var(--primary)' : 'var(--text-main)' }}>
                {item.question}
              </h3>
              <ChevronDown
                size={20}
                style={{
                  transform: openIdx === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  color: 'var(--primary)'
                }}
              />
            </div>

            {openIdx === idx && (
              <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, borderTop: '1px solid var(--border)', paddingTop: '0.85rem' }}>
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
