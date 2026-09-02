import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({ badge, title, highlight, subtitle, center = false, light = false }) {
  return (
    <div className={`max-w-3xl mb-12 ${center ? 'mx-auto text-center' : ''}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-3"
        >
          <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
            light 
              ? 'bg-white/10 text-sky-200 border border-white/20' 
              : 'bg-primary-50 text-primary-700 border border-primary-100'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary-600 animate-pulse"></span>
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4 ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-base md:text-lg leading-relaxed ${
            light ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
