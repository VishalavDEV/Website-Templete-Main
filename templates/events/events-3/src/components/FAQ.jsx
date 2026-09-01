import React, { useState } from 'react';
import { faqData } from '../data/faq';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-header">
        <div className="section-tag">
          <HelpCircle size={14} /> Clarifications & Information
        </div>
        <h2 className="section-title">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
        <p className="section-subtitle">
          Everything you need to know regarding hardware lab reservations, hackathon testbeds, student verification, and ticket transfer policies.
        </p>
      </div>

      <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {faqData.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="glass-card"
              onClick={() => toggleFAQ(idx)}
              style={{
                borderRadius: '16px',
                padding: '24px 30px',
                cursor: 'pointer',
                border: isOpen ? '1px solid var(--accent-cyan)' : '1px solid var(--glass-border)',
                transition: 'all 0.3s ease'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px'
                }}
              >
                <h4 style={{ fontSize: '1.1rem', color: isOpen ? 'var(--accent-cyan)' : 'var(--text-primary)' }}>
                  {item.question}
                </h4>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: isOpen ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isOpen ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0
                  }}
                >
                  <ChevronDown size={18} />
                </div>
              </div>

              {isOpen && (
                <div
                  style={{
                    marginTop: '16px',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6
                  }}
                >
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
