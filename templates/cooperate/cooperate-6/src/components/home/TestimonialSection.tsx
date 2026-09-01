import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#0A261F] text-white relative overflow-hidden">
      {/* Editorial Watermark Quote Icon */}
      <Quote className="absolute -top-10 -left-10 w-64 h-64 text-[#165042]/25 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-1 text-[#DFBA58] mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-[#FCFAF6] leading-[1.25] tracking-tight max-w-4xl mx-auto"
        >
          "Aurelia transformed corporate travel from an operational challenge into a seamless strategic advantage for our entire organization."
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center space-y-2"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#C29B38]/50 shadow-lg mb-2">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
              alt="Rachel Morgan"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-serif text-2xl font-semibold text-white">
            Rachel Morgan
          </div>
          <div className="text-xs uppercase tracking-widest text-[#DFBA58] font-semibold">
            Global Operations Director • Northstar Technologies
          </div>
          <div className="text-xs text-[#D8C3A8]/70">
            Managing 1,400+ monthly journeys across 18 countries
          </div>
        </motion.div>
      </div>
    </section>
  );
}
