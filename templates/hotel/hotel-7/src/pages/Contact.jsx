import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, ChevronDown, ChevronUp, Send } from 'lucide-react';

const FAQS = [
  {
    q: 'How do I access the resort?',
    a: 'Aurelia Haven is located off Highway 1 in Big Sur, California. We provide private chauffeured transfers from San Francisco International Airport (SFO) and Monterey Regional Airport (MRY).'
  },
  {
    q: 'Are spa treatments included in the suite rates?',
    a: 'Morning clifftop yoga, forest meditation walks, and access to the thermal steam caves are complimentary. Specialized botanical massages, custom aromatherapy bodywork, and private sound baths can be reserved with our concierge.'
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Reservations canceled up to 14 days prior to your arrival date will receive a full refund. Cancellations made within 14 days of arrival are subject to a fee equal to the cost of one night stay.'
  },
  {
    q: 'Do you accommodate special dietary needs?',
    a: 'Yes, our soil-to-table restaurants Terra and Ember cater fully to vegan, gluten-free, keto, and allergen-specific diets. Please notify our concierge team of any specific requirements prior to your arrival.'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. Your inquiry has been routed to our concierge team. We will respond within 4 hours.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div
      style={{ padding: '140px 40px 100px', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box', fontFamily: 'var(--font-sans)' }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          fontWeight: '700',
          letterSpacing: '3px',
          color: '#c5a880',
          textTransform: 'uppercase'
        }}>
          Get in Touch
        </span>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '3rem',
          fontWeight: '400',
          margin: '10px 0 20px 0',
          color: '#1e1e1e'
        }}>
          Connect With Us
        </h1>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.95rem',
          color: '#777777',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6',
          fontWeight: '300'
        }}>
          For general inquiries, reservation updates, or private event planning, our dedicated concierge team is here to assist.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '60px',
        alignItems: 'start',
        marginBottom: '100px'
      }}>
        {/* Left Column: Form & Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {/* Info Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: '400', color: '#1e1e1e', margin: 0 }}>
              Concierge Desk
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '0.9rem', color: '#555555' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin size={18} style={{ color: '#c5a880' }} />
                <span>18 Aurelia Cliff Way, Big Sur, CA 93920</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} style={{ color: '#c5a880' }} />
                <span>+1 (800) 555-0199</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} style={{ color: '#c5a880' }} />
                <span>concierge@aureliahaven.fictional</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#777777' }}>Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    padding: '12px',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#777777' }}>Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    padding: '12px',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#777777' }}>Subject</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '12px',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#777777' }}>Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '12px',
                  fontSize: '0.85rem',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: '#c5a880',
                color: '#ffffff',
                border: '1px solid #c5a880',
                padding: '14px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#c5a880';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#c5a880';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              Send Inquiry <Send size={14} />
            </button>
          </form>
        </div>

        {/* Right Column: Custom SVG Map Placeholder & FAQs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {/* Custom vector styled Map Placeholder */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: '400', color: '#1e1e1e', margin: 0 }}>
              Our Coastal Location
            </h3>
            
            <div style={{
              width: '100%',
              aspectRatio: '16/10',
              backgroundColor: '#eae3d5',
              border: '1px solid rgba(197, 168, 128, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Premium vector map background using SVG */}
              <svg viewBox="0 0 400 250" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
                {/* Coastline */}
                <path d="M-50,0 Q100,80 200,120 T450,250 L450,0 Z" fill="#ebf6fa" />
                <path d="M-50,0 Q100,80 200,120 T450,250" fill="none" stroke="#add8e6" strokeWidth="6" />
                
                {/* Coastal Forest land */}
                <rect x="0" y="0" width="400" height="250" fill="#2d372e" opacity="0.06" />
                
                {/* Contours lines */}
                <path d="M120,40 Q150,90 220,130" fill="none" stroke="#c5a880" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M80,30 Q110,80 180,110" fill="none" stroke="#c5a880" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M160,50 Q190,100 260,150" fill="none" stroke="#c5a880" strokeWidth="1" strokeDasharray="3,3" />
                
                {/* Highway 1 Route */}
                <path d="M10,250 Q160,160 280,10 T400,0" fill="none" stroke="#bb9663" strokeWidth="2.5" />
                <text x="240" y="80" fill="#bb9663" fontSize="8" transform="rotate(-30 240 80)">HIGHWAY 1</text>
                
                {/* Ocean Label */}
                <text x="50" y="210" fill="#a0c2cc" fontSize="12" letterSpacing="2" fontFamily="var(--font-serif)">PACIFIC OCEAN</text>
                
                {/* Resort Point Indicator */}
                <circle cx="210" cy="125" r="7" fill="#c5a880" />
                <circle cx="210" cy="125" r="15" fill="none" stroke="#c5a880" strokeWidth="1.5">
                  <animate attributeName="r" values="7;18;7" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0;1" dur="2.5s" repeatCount="indefinite" />
                </circle>
                
                {/* Label box */}
                <rect x="225" y="112" width="105" height="26" fill="#111111" rx="2" />
                <text x="233" y="128" fill="#ffffff" fontSize="9" fontWeight="700" letterSpacing="0.5">AURELIA HAVEN</text>
              </svg>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: '400', color: '#1e1e1e', margin: 0 }}>
              Frequently Asked Questions
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {FAQS.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        padding: '10px 0',
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.1rem',
                        color: isOpen ? '#c5a880' : '#1e1e1e',
                        cursor: 'pointer',
                        fontWeight: '500'
                      }}
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 0.8 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#555555', margin: '5px 0 10px 0' }}>
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
