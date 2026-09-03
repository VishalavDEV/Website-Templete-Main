import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Faq({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const defaultFaqs = [
    {
      id: 1,
      question: 'What makes Asentus hi-tech design distinct?',
      answer: 'Asentus blends minimalist European architectural geometry with responsive high-speed frontend engineering and resilient Java Spring Boot microservices.'
    },
    {
      id: 2,
      question: 'Can I customize the typography and theme palette?',
      answer: 'Yes, all design tokens, font families, and color gradients are configured via standard CSS variables and React design props.'
    },
    {
      id: 3,
      question: 'How does the Spring Boot backend connect to the UI?',
      answer: 'The Vite frontend communicates via asynchronous REST endpoints providing real-time data for slides, services, portfolio items, and validated contact inquiries.'
    },
    {
      id: 4,
      question: 'Is Asentus fully responsive across mobile and 4K displays?',
      answer: 'Yes, the layout uses fluid typographic scales and responsive flex/grid layouts specifically tested for seamless adaptability from mobile phones to ultra-wide displays.'
    }
  ];

  const items = faqs && faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <section id="faq" style={{
      padding: '120px 0',
      backgroundColor: '#0c0e12',
      borderTop: '1px solid var(--border-dark)'
    }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-tag" style={{ justifyContent: 'center' }}>Knowledge Base</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Everything you need to know about implementing the Asentus architecture framework.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id || idx}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: '8px',
                  border: `1px solid ${isOpen ? 'var(--accent)' : 'var(--border-dark)'}`,
                  overflow: 'hidden',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '22px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    color: '#ffffff',
                    fontSize: '1.05rem',
                    fontWeight: '600',
                    gap: '16px'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <HelpCircle size={18} color="var(--accent)" />
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    color="var(--text-muted)"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 24px 54px',
                    color: 'var(--text-muted)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    borderTop: '1px solid rgba(255,255,255,0.04)',
                    paddingTop: '16px'
                  }}>
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
