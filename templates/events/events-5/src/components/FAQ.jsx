import React, { useState } from 'react';
import { faqs } from '../data/faqData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section style={{ padding: '90px 0', background: '#0a0d10', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        <div className="section-header">
          <span className="section-label">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="section-title">CLEAR ANSWERS. NO SURPRISES.</h2>
          <p className="section-subtitle">
            Everything you need to know about our automotive detailing, wash standards, and paint studio procedures.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(180deg, #111417 0%, #0d1013 100%)',
                  border: isOpen ? '1px solid #7cff4f' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen ? '0 8px 25px rgba(124, 255, 79, 0.12)' : 'none'
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    color: isOpen ? '#7cff4f' : '#f5f7f8',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.15rem',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <HelpCircle size={18} color={isOpen ? '#7cff4f' : '#25bfff'} />
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    style={{
                      transition: 'transform 0.3s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      color: isOpen ? '#7cff4f' : '#64748b'
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 22px 54px',
                    color: '#b9c0c5',
                    fontSize: '0.98rem',
                    lineHeight: '1.6',
                    animation: 'fadeIn 0.3s ease'
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
