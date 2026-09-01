import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-list">
      {weddingData.faqs.map((faq, idx) => (
        <div key={idx} className="faq-item">
          <button 
            className="faq-question" 
            onClick={() => toggleIndex(idx)}
            aria-expanded={openIndex === idx}
          >
            <span>{faq.q}</span>
            {openIndex === idx ? <ChevronUp size={20} color="var(--accent)" /> : <ChevronDown size={20} />}
          </button>

          {openIndex === idx && (
            <div className="faq-answer">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
