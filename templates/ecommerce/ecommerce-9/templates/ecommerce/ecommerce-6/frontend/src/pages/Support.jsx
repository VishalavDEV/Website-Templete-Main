import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Mail, MessageSquare, Plus, Minus, Check, ShieldAlert } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

const Support = () => {
  // FAQs list data
  const faqs = [
    {
      q: 'How long does shipping take?',
      a: 'Standard complimentary carrier delivery takes 3-5 business days for domestic regions. Insured worldwide shipping averages 6-10 business days depending on customs clearances.'
    },
    {
      q: 'What is your return policy?',
      a: 'We accept returns on all pristine design assets within 14 days of receipt. Items must be returned in their original packaging. You can initiate a return directly from your Profile portal.'
    },
    {
      q: 'Are the items covered by a warranty?',
      a: 'All AURA audio systems, timepieces, and lifestyle products are backed by a comprehensive 2-year manufacturer warranty. Any mechanical failure or structural assembly issue will be resolved immediately.'
    },
    {
      q: 'How can I apply coupon codes?',
      a: 'Enter active code keywords (such as WELCOME10 or FLASH50) inside the order summary section during checkout. The system will validate the coupon and apply discount percentages to subtotal sums.'
    }
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  // Ticket form states
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('Product Questions');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setSubject('');
    setMessage('');
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div style={{ padding: '120px 5% 80px 5%', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        <span style={{ color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.2em' }}>
          AURA CLIENT ASSISTANCE
        </span>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)' }}>SUPPORT ARCHIVE</h1>
        <div style={{ width: '45px', height: '1px', background: 'var(--accent-gold)', margin: '0.5rem auto 0 auto' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '5rem' }} className="support-grid-responsive">
        
        {/* Left Column: FAQ Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <HelpCircle size={20} color="var(--accent-gold)" /> FREQUENTLY ASKED QUESTIONS
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="glass-panel"
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid var(--border-glass)',
                    boxShadow: 'var(--shadow-premium)'
                  }}
                >
                  {/* Header click */}
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      color: isOpen ? 'var(--accent-gold)' : 'var(--text-primary)'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </button>

                  {/* Accordion expand */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
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

        {/* Right Column: Contact form / support ticket */}
        <div style={{ height: 'fit-content' }}>
          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '8px', boxShadow: 'var(--shadow-premium)' }}>
            <h2 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Mail size={20} color="var(--accent-gold)" /> LOG A SUPPORT TICKET
            </h2>

            {success && (
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', background: 'rgba(76, 175, 80, 0.08)', border: '1px solid rgba(76, 175, 80, 0.2)', color: '#4caf50', padding: '0.75rem 1rem', borderRadius: '4px', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                <Check size={16} />
                <span>Ticket registered successfully. Our agents will respond shortly.</span>
              </div>
            )}

            <form onSubmit={handleTicketSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Category selector */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>TICKET CLASSIFICATION</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="premium-input"
                  style={{ cursor: 'pointer', appearance: 'none', background: 'var(--bg-secondary) url("data:image/svg+xml;utf8,<svg fill=\'%23555555\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>") no-repeat right 1rem center' }}
                >
                  <option>Order Issues</option>
                  <option>Product Questions</option>
                  <option>Design Drop Allocations</option>
                  <option>General Support</option>
                </select>
              </div>

              {/* Subject Input */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>SUBJECT</label>
                <input
                  type="text"
                  placeholder="Summarize the issue..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="premium-input"
                />
              </div>

              {/* Message Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>MESSAGE LOG</label>
                <textarea
                  placeholder="Describe your request in detail..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="premium-input"
                  style={{ resize: 'none' }}
                />
              </div>

              <MagneticButton type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                DISPATCH TICKET
              </MagneticButton>
            </form>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .support-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Support;
