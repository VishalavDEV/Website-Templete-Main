import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQAccordion({ faqs = [], variant = 'minimalist' }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className={`faq-section-container faq-${variant}`}>
      <div className="faq-header-block">
        <span className="section-pill">
          <HelpCircle size={14} />
          <span>ATTENDEE BRIEFING & FAQ</span>
        </span>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Everything you need to know about attendance, early-bird VIP credentials, and virtual stages.
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`faq-item-card ${isOpen ? 'is-open' : ''}`}
            >
              <button
                className="faq-question-btn"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
              >
                <div className="faq-question-content">
                  <span className="faq-num">0{idx + 1}.</span>
                  <span className="faq-q-text">{item.q}</span>
                </div>
                <div className={`faq-chevron ${isOpen ? 'rotate-chevron' : ''}`}>
                  <ChevronDown size={18} />
                </div>
              </button>

              {isOpen && (
                <div className="faq-answer-pane">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
