import React, { useState } from 'react';
import { tournamentData } from '../data/tournamentData';
import { ChevronDown, Shield } from 'lucide-react';

export const RulesAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto' }}>
      {tournamentData.rules.map((rule, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="sports-card"
            style={{ marginBottom: '14px', border: isOpen ? '1px solid var(--orange)' : '1px solid var(--border)' }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              style={{
                width: '100%',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'left',
              }}
            >
              <div className="font-display" style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px', color: isOpen ? '#ff4d00' : '#fff' }}>
                <Shield size={20} color={isOpen ? '#ff4d00' : 'var(--gray)'} />
                {rule.title}
              </div>
              <ChevronDown
                size={20}
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  color: isOpen ? '#ff4d00' : 'var(--gray)',
                }}
              />
            </button>

            {isOpen && (
              <div style={{ padding: '0 24px 20px', fontSize: '1rem', color: 'var(--gray)', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
                {rule.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
