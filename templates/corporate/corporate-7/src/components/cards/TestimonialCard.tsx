import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { TestimonialItem } from '../../data/testimonials';
import { fadeUp } from '../../utils/animations';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col justify-between bg-white border border-slate-200/90 hover:border-slate-300 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 text-slate-900"
    >
      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-sm text-slate-700 leading-relaxed italic mb-6">
          "{testimonial.content}"
        </blockquote>
      </div>

      {/* Author Profile */}
      <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          referrerPolicy="no-referrer"
          className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
        />
        <div className="overflow-hidden">
          <h4 className="text-sm font-bold text-slate-900 truncate">
            {testimonial.name}
          </h4>
          <p className="text-xs text-slate-500 truncate">
            {testimonial.role}, <span className="text-slate-800 font-medium">{testimonial.company}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};
