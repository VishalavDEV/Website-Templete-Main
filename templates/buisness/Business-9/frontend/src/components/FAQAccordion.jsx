import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

function AccordionItem({ faq, isOpen, onToggle }) {
  const { question, answer } = faq;

  return (
    <div style={{
      marginBottom: '1.25rem',
      borderRadius: 'var(--border-radius-md)',
      border: '1px solid var(--glass-border)',
      background: isOpen ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.45)',
      boxShadow: isOpen ? '0 8px 24px rgba(249, 115, 22, 0.05)' : 'none',
      overflow: 'hidden',
      transition: 'var(--transition-normal)'
    }}>
      
      {/* Header / Trigger */}
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 2rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1rem'
        }}
      >
        <span style={{
          fontFamily: 'var(--font-title)',
          fontSize: '1.1rem',
          fontWeight: 700,
          color: 'var(--text-primary)'
        }}>
          {question}
        </span>
        
        {/* Toggle Icon */}
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: isOpen ? 'var(--primary-gradient)' : 'rgba(249, 115, 22, 0.05)',
          color: isOpen ? '#FFF' : 'var(--primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'transform 0.3s ease'
        }}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      {/* Answer Collapsible Panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <div style={{
              padding: '0 2rem 1.5rem 2rem',
              fontSize: '0.92rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)'
            }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={faq.id}
          faq={faq}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
