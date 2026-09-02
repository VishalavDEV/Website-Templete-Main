import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Endorsements"
          title="What founders & engineering leaders say."
          highlightedWord="founders & engineering leaders"
          description="Direct feedback from team leaders, founders, and product directors on shipped collaborations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-3xl glass-card border border-slate-200 bg-white flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 shadow-sm hover:shadow-xl group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200/60">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed mb-6 font-medium">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-11 h-11 rounded-full object-cover border-2 border-blue-400/40 shadow-sm"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
