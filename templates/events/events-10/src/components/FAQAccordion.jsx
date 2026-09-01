import React, { useState } from 'react';
import { tournamentData } from '../data/tournamentData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQAccordion = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto' }}>
      {tournamentData.faqs.map((faq, i) => {
        const isOpen = openIdx === i;
        return (
          <div
            key={i}
            className="sports-card"
            style={{ marginBottom: '14px', border: isOpen ? '1px solid var(--orange)' : '1px solid var(--border)' }}
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              style={{
                width: '100%',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'left',
              }}
            >
              <div className="font-sports" style={{ fontSize: '1.2rem', fontWeight: 700, color: isOpen ? '#ff4d00' : '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <HelpCircle size={18} color={isOpen ? '#ff4d00' : 'var(--gray)'} />
                {faq.q}
              </div>
              <ChevronDown
                size={18}
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  color: isOpen ? '#ff4d00' : 'var(--gray)',
                }}
              />
            </button>

            {isOpen && (
              <div style={{ padding: '0 24px 20px', fontSize: '0.98rem', color: 'var(--gray)', lineHeight: 1.6 }}>
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
