import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative flex flex-col justify-between h-full group hover:shadow-card-hover transition-all duration-300"
    >
      <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100 group-hover:text-primary-50 transition-colors pointer-events-none" />

      <div>
        {/* Rating stars */}
        <div className="flex items-center gap-1 mb-6 text-amber-400">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400" />
          ))}
        </div>

        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 italic relative z-10">
          "{testimonial.comment}"
        </p>
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-primary-500"
        />
        <div>
          <h4 className="font-extrabold text-slate-900 text-base">
            {testimonial.name}
          </h4>
          <p className="text-xs font-medium text-primary-600">
            {testimonial.role}
          </p>
          <p className="text-[11px] text-slate-400 font-medium">
            Course: {testimonial.course}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
