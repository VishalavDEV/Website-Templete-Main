import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { bookDetailsData } from '../data/bookData';

export default function FAQ() {
  const [openId, setOpenId] = useState('faq1');

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center center-content">
          <span className="section-label reveal-on-scroll">HELP & QUESTIONS</span>
          <h2 className="section-heading reveal-on-scroll delay-1">
            Frequently Asked Questions
          </h2>
          <p className="section-desc reveal-on-scroll delay-2">
            Everything you need to know about purchasing, shipping, and reading options.
          </p>
        </div>

        <div className="faq-wrapper reveal-on-scroll delay-3">
          {bookDetailsData.faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div className="faq-icon-box">
                    <Plus size={18} />
                  </div>
                </button>

                <div className="faq-answer-box">
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
