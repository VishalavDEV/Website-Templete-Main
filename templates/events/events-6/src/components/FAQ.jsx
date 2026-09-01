import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: 'When is Midnight Echo 2026?', a: 'Midnight Echo 2026 will take place on Saturday, 24 October 2026. Gates open at 5:00 PM and performances continue until 2:00 AM.' },
    { q: 'Where is the event?', a: 'The concert is held at the world-class Aurora Sound Arena, located in Chennai, India.' },
    { q: 'What time do doors open?', a: 'Main venue gates open at 5:00 PM. Warm-up DJ sets start at 5:30 PM, with main act performances starting at 6:00 PM.' },
    { q: 'What does the general ticket include?', a: 'General passes include full concert entry, access to Main Stage and Echo Stage, and access to the Food & Refreshments Village.' },
    { q: 'What does VIP include?', a: 'VIP Passes offer dedicated VIP fast-track entry, front-stage priority viewing zone, VIP Lounge access, complimentary refreshments, and artist meet & greet.' },
    { q: 'Can I transfer my ticket?', a: 'Yes! Passes can be digitally transferred to another attendee through the ticket verification email up to 24 hours before gate opening.' },
    { q: 'Is parking available?', a: 'Yes, Aurora Sound Arena has multi-level parking for over 4,000 vehicles with dedicated valet options for VIP pass holders.' },
    { q: 'Can children attend?', a: 'Midnight Echo is an all-ages event. Attendees under 16 must be accompanied by an adult ticket holder.' },
    { q: 'Can I bring a camera?', a: 'Personal smartphones and compact point-and-shoot cameras are welcome. Professional photography gear with detachable lenses requires press accreditation.' },
    { q: 'Are outside food and drinks allowed?', a: 'Outside food and beverages are not permitted. The Velora Food Village features a wide array of curated gourmet food and drink options.' },
    { q: 'Where can I buy merchandise?', a: 'Official Velora Live & Midnight Echo limited-edition merchandise will be available at the Merchandise Pavilion inside the main entrance and VIP Lounge.' },
  ];

  return (
    <div className="faq-accordion" style={{ position: 'relative', zIndex: 10 }}>
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
            <button
              className="faq-question"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <HelpCircle size={18} style={{ color: 'var(--gold-bright)', flexShrink: 0 }} />
                {faq.q}
              </span>
              <ChevronDown
                size={20}
                style={{
                  color: 'var(--gold-primary)',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </button>

            {isOpen && (
              <div className="faq-answer">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
