import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TipsAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const tips = [
    {
      title: 'How to Pack Light for Multi-Day Treks',
      content: 'The golden rule of backpacking is that your pack should not exceed 20% of your body weight. Prioritize moisture-wicking synthetic clothes, pack lightweight freeze-dried meals, and purchase a compact double-wall tent. Lay out all gear beforehand and eliminate half of the "nice-to-have" items.'
    },
    {
      title: 'Backcountry Campfire Safety Regulations',
      content: 'Always check regional fire restrictions before lighting a campfire. Use established fire rings, clear dry twigs and leaves in a 10-foot radius, and never leave fires unattended. Pour ample water over the ashes and stir until cool to the touch before sleeping or departing.'
    },
    {
      title: 'Wildlife Safety: What to Do in Bear Country',
      content: 'Keep a clean campsite by storing all food, trash, and scented items in certified bear canisters or hanging them 10 feet high between trees. Carry bear spray on your hip belt (not inside your pack), make noise while hiking, and never hike alone at dawn or dusk.'
    },
    {
      title: 'Navigating Trails Without Cellular Signal',
      content: 'Never rely solely on your phone\'s GPS maps. Always carry a physical topographic map and a magnetic compass (and know how to orient it). Download offline vector maps on apps like AllTrails or Gaia GPS beforehand, and keep your phone in battery-saving airplane mode.'
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading & Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-display font-extrabold text-[10px] tracking-widest text-slate-400 uppercase flex items-center gap-2">
              <span className="w-8 h-[2px] bg-slate-200" />
              Beginner Advice
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-charcoal tracking-tight leading-tight uppercase font-display">
              Our Tips for <br />
              Beginner Hikers
            </h2>
            <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed max-w-sm font-light">
              Trekking into the wilderness can be daunting. We have distilled our years of trail experience into quick, actionable guides to help you stay safe and comfortable.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => alert('Opening question submit form...')}
                className="bg-primary hover:bg-primary-light text-white text-xs font-extrabold py-3.5 px-6 rounded-xl uppercase tracking-widest flex items-center gap-2 cursor-pointer shadow-sm font-display"
              >
                <MessageCircle className="w-4 h-4 text-accent" />
                <span>Ask Question</span>
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#newsletter"
                className="border border-slate-200 hover:border-slate-400 text-slate-600 text-xs font-extrabold py-3.5 px-6 rounded-xl uppercase tracking-widest flex items-center gap-2 cursor-pointer font-display"
              >
                <Mail className="w-4 h-4 text-accent" />
                <span>Get Trail Tips</span>
              </motion.a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {tips.map((tip, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-slate-50 rounded-2xl border border-slate-100/80 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full p-6 text-left flex justify-between items-center font-display font-extrabold text-charcoal text-sm sm:text-base cursor-pointer hover:bg-slate-100/50 transition-colors"
                  >
                    <span>{tip.title}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown className="w-5 h-5 text-accent" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-slate-100 text-xs sm:text-sm text-slate-500 font-sans leading-relaxed font-light">
                          {tip.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
