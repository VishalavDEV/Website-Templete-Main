import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Phone, Mail, Sparkles } from 'lucide-react';
import { faqs, siteConfig } from '../data/content';

export default function FaqSection({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#FDFBF7] relative overflow-hidden scroll-mt-20 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-100 border border-forest-200 text-forest-800 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5 text-forest-700" />
            <span>Frequently Asked Questions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-forest-950 tracking-tight leading-tight mb-4"
          >
            Got Questions About <br />
            <span className="text-forest-700 italic">Deploying TerraNova?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-earth-700"
          >
            Everything you need to know about hardware installation, telemetry protocols, and organic transition certification.
          </motion.p>
        </div>

        {/* Accordion list & Support Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* FAQ Accordion Items */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-forest-100 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold font-display text-forest-950 pr-2">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-forest-800 text-white rotate-180' : 'bg-forest-50 text-forest-700'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-earth-700 leading-relaxed border-t border-forest-50">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Help Box */}
          <div className="lg:col-span-4 bg-gradient-to-br from-forest-900 to-forest-800 text-white rounded-3xl p-8 border border-forest-700 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-wheat-500/20 text-wheat-400 flex items-center justify-center mb-5">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold font-serif text-white mb-2">
              Have Specific Soil Conditions?
            </h3>
            <p className="text-forest-200 text-xs sm:text-sm leading-relaxed mb-6">
              Our regional field agronomists can review your past 3 years of soil tests and generate a complimentary transition feasibility report.
            </p>

            <div className="space-y-3 mb-6">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-forest-950/60 border border-forest-700/60 hover:border-wheat-400 transition-colors text-xs"
              >
                <Phone className="w-4 h-4 text-wheat-400" />
                <div>
                  <div className="text-forest-400 text-[10px]">Call Field Support</div>
                  <div className="font-bold text-white">{siteConfig.contact.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-forest-950/60 border border-forest-700/60 hover:border-wheat-400 transition-colors text-xs"
              >
                <Mail className="w-4 h-4 text-wheat-400" />
                <div>
                  <div className="text-forest-400 text-[10px]">Email Agronomy Team</div>
                  <div className="font-bold text-white">{siteConfig.contact.email}</div>
                </div>
              </a>
            </div>

            <button
              onClick={onOpenContact}
              className="w-full py-3 rounded-full bg-wheat-500 hover:bg-wheat-400 text-forest-950 font-bold text-xs shadow-md transition-all text-center"
            >
              Request Agronomist Callback
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
