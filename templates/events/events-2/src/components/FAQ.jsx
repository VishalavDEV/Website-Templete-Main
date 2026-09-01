import React, { useState } from 'react';
import { faqs } from '../data/faqs';
import { Plus, Minus } from 'lucide-react';
import '../styles/cards.css';

export const FAQ = () => {
  const [openId, setOpenId] = useState('faq-1');

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="section-title">Everything You Need to Know</h2>
          <p className="section-subtitle">
            Find immediate answers regarding passes, venue directions, ticket transfers, and speaker schedules.
          </p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-card"
                style={{
                  padding: '24px 28px',
                  cursor: 'pointer',
                  borderColor: isOpen ? 'var(--accent-purple)' : 'var(--border-light)',
                  transition: 'var(--transition-fast)'
                }}
                onClick={() => toggleFAQ(faq.id)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                    {faq.question}
                  </h3>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      flexShrink: 0,
                      transition: 'transform 0.3s ease, background 0.3s ease'
                    }}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
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
                      lineHeight: 1.6,
                      animation: 'fadeIn 0.3s ease'
                    }}
                  >
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
