import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    { q: 'Is there a real database integrated?', a: 'No, this application runs fully self-contained using an in-memory Java Spring Boot service. This makes it perfect for demonstrations and local verification without requiring SQL setup.' },
    { q: 'How long does the simulated shipment tracking take?', a: 'To demonstrate the animated timeline in real-time, the order status advances through all 5 phases (Placed -> Confirmed -> Packed -> Shipped -> Delivered) sequentially every 30 seconds.' },
    { q: 'How can I test registration and login?', a: 'You can register any new email or log in using the preloaded mock account credentials: princess@lavender.com with password password123.' },
    { q: 'Are credit card transactions processed?', a: 'No. All checkouts and card/UPI payments are mock operations designed purely to demonstrate checkout transitions and animated confirmation dialogs.' },
  ];

  return (
    <div style={{ padding: '120px 40px 80px 40px', maxWidth: '800px', margin: '0 auto', minHeight: '80vh' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontFamily: 'Outfit', fontSize: '2.5rem', color: '#1e133e', fontWeight: 800 }}>Frequently Asked Questions</h2>
        <p style={{ color: '#5c4e8c', fontSize: '1rem', marginTop: '6px' }}>
          Quick answers about the Lavender E-Commerce simulator.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              style={{
                backgroundColor: '#fff',
                border: '1.5px solid rgba(124, 92, 255, 0.08)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(124, 92, 255, 0.02)',
              }}
            >
              {/* Question Header */}
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 24px',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#1e133e', fontWeight: 600, fontSize: '0.95rem' }}>
                  <HelpCircle size={18} style={{ color: '#7c5cff' }} />
                  {faq.q}
                </div>
                {isOpen ? <ChevronUp size={18} style={{ color: '#7c5cff' }} /> : <ChevronDown size={18} style={{ color: '#7c5cff' }} />}
              </button>

              {/* Answer expandable body */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 24px 20px 54px', fontSize: '0.9rem', color: '#5c4e8c', lineHeight: '1.6' }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
