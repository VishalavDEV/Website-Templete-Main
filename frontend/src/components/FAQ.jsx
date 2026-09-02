import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { faqs } from '../data/landingData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 scroll-mt-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ borderColor: 'var(--border-hover)', color: 'var(--accent-start)' }}
          >
            <HelpCircle className="w-3.5 h-3.5" style={{ color: 'var(--accent-mid)' }} />
            Got Questions?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight"
            style={{ color: 'var(--text-main)' }}
          >
            Frequently Asked{' '}
            <span className="text-gradient-purple-cyan">Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg"
            style={{ color: 'var(--text-sub)' }}
          >
            Everything you need to know about Aether, architecture, multi-cloud failover, and pricing.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl border transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: isOpen ? 'var(--bg-panel)' : 'var(--bg-card)',
                  borderColor: isOpen ? 'var(--accent-start)' : 'var(--border-color)',
                  boxShadow: isOpen ? '0 10px 30px -10px var(--glow-color)' : 'none'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg tracking-tight" style={{ color: 'var(--text-main)' }}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border"
                    style={{
                      backgroundColor: 'var(--bg-pill)',
                      borderColor: 'var(--border-color)',
                      color: isOpen ? 'var(--accent-mid)' : 'var(--text-muted)'
                    }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed border-t" style={{ borderColor: 'var(--border-color)', color: 'var(--text-sub)' }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Support Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-sm flex items-center justify-center gap-2"
          style={{ color: 'var(--text-muted)' }}
        >
          <MessageSquare className="w-4 h-4" style={{ color: 'var(--accent-mid)' }} />
          <span>Have a custom requirement? <a href="#pricing" className="underline font-medium hover:opacity-100" style={{ color: 'var(--accent-start)' }}>Chat with our engineering team</a></span>
        </motion.div>

      </div>
    </section>
  );
}
