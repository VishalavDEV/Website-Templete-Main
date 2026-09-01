import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faq';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState('0-0');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFAQ = (idxKey) => {
    setOpenIndex(openIndex === idxKey ? null : idxKey);
  };

  return (
    <div style={{ maxWidth: '840px', margin: '0 auto' }}>
      
      {/* FAQ Search Bar */}
      <div style={{
        position: 'relative',
        marginBottom: '40px'
      }}>
        <input 
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search questions e.g. bib, hydration, medical, medal..."
          style={{
            width: '100%',
            padding: '16px 20px 16px 50px',
            background: 'rgba(21, 23, 27, 0.8)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '30px',
            color: '#FFFFFF',
            fontSize: '0.95rem',
            outline: 'none'
          }}
        />
        <Search size={20} color="var(--bright-orange)" style={{ position: 'absolute', left: '18px', top: '16px' }} />
      </div>

      {/* Accordions Grouped by Category */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {FAQ_DATA.map((group, groupIdx) => {
          const matchingQuestions = group.questions.filter(item => 
            item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.a.toLowerCase().includes(searchTerm.toLowerCase())
          );

          if (searchTerm && matchingQuestions.length === 0) return null;

          return (
            <div key={groupIdx}>
              <h3 style={{
                color: 'var(--bright-orange)',
                fontSize: '0.9rem',
                fontWeight: 800,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <HelpCircle size={16} /> {group.category}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {(searchTerm ? matchingQuestions : group.questions).map((item, itemIdx) => {
                  const key = `${groupIdx}-${itemIdx}`;
                  const isOpen = openIndex === key;

                  return (
                    <div 
                      key={itemIdx}
                      className="glass-panel"
                      style={{
                        borderRadius: '8px',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        border: isOpen ? '1px solid var(--bright-orange)' : '1px solid rgba(255,255,255,0.08)'
                      }}
                    >
                      <button
                        onClick={() => toggleFAQ(key)}
                        style={{
                          width: '100%',
                          padding: '20px',
                          background: 'none',
                          border: 'none',
                          color: '#FFFFFF',
                          textAlign: 'left',
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '16px'
                        }}
                      >
                        <span>{item.q}</span>
                        <ChevronDown 
                          size={18} 
                          color="var(--bright-orange)"
                          style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                          }} 
                        />
                      </button>

                      {isOpen && (
                        <div style={{
                          padding: '0 20px 20px 20px',
                          color: 'var(--soft-grey)',
                          fontSize: '0.92rem',
                          lineHeight: 1.6,
                          borderTop: '1px solid rgba(255,255,255,0.05)',
                          paddingTop: '16px'
                        }}>
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
