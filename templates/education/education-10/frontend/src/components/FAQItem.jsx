import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  const headingId = `faq-heading-${faq.id}`;
  const panelId = `faq-panel-${faq.id}`;

  return (
    <motion.div
      className={`faq-item ${open ? 'open' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        id={headingId}
      >
        <h3>{faq.question}</h3>
        <div className="faq-icon" aria-hidden="true">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
