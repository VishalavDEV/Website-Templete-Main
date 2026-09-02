import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Sparkles } from 'lucide-react';
import { testimonials } from '../data/landingData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 scroll-mt-28 relative border-t" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-pill)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ borderColor: 'var(--border-hover)', color: 'var(--accent-end)' }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Loved by Developers
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight"
            style={{ color: 'var(--text-main)' }}
          >
            Trusted by Builders at{' '}
            <span className="text-gradient-cyan-emerald">World-Class Startups.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg"
            style={{ color: 'var(--text-sub)' }}
          >
            See how engineering teams eliminate DevOps complexity and ship features at unprecedented velocity.
          </motion.p>
        </div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative group transition-all duration-300"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <div>
                {/* 5-Star Rating & Metrics Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span
                    className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full border flex items-center gap-1"
                    style={{
                      backgroundColor: 'var(--bg-pill)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--accent-mid)'
                    }}
                  >
                    <TrendingUp className="w-3 h-3" />
                    {item.metrics}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-[15px] leading-relaxed italic mb-6" style={{ color: 'var(--text-sub)' }}>
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t flex items-center gap-3" style={{ borderColor: 'var(--border-color)' }}>
                <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${item.color} flex items-center justify-center text-white font-bold text-xs shadow-md`}>
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-tight" style={{ color: 'var(--text-main)' }}>{item.name}</h4>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
