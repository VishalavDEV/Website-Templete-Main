import React, { useState } from 'react';
import { HelpCircle, Truck, RotateCcw, ShieldCheck, Headphones, ChevronDown } from 'lucide-react';

export const HelpPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the estimated delivery time for my ORVANA order?',
      a: 'We deliver orders within 2 to 4 business days across all major Indian metro cities. Express delivery is complimentary on orders above ₹999.'
    },
    {
      q: 'How does the 30-day doorstep return policy work?',
      a: 'If you wish to return an item, go to your Account > Orders and select Return. Our courier partner will collect the item directly from your doorstep and initiate an instant refund.'
    },
    {
      q: 'Are all products on ORVANA 100% genuine?',
      a: 'Yes, ORVANA works directly with verified official brand partners (NOVA, ARCO, LUMA, KIVO, AERA, ORBIT, MIRA, VERO). All items carry manufacturer warranties.'
    },
    {
      q: 'Which payment options are accepted?',
      a: 'We accept UPI (GPay, PhonePe, Paytm), All Major Credit/Debit Cards, Net Banking, and Cash on Delivery (COD).'
    }
  ];

  return (
    <div style={{ padding: '3rem 0 6rem' }}>
      <div className="container-narrow">
        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-blue)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.3rem' }}>
            <HelpCircle size={16} /> SUPPORT CENTER
          </div>
          <h1 className="heading-xl">HELP & FREQUENTLY ASKED QUESTIONS</h1>
        </div>

        <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', padding: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={18} style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms ease' }} />
                </button>
                {openFaq === idx && (
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.6 }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
