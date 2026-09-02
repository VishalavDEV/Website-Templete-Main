import React from 'react';
import { motion } from 'motion/react';
import { ServiceDetailConfig } from '../../data/serviceDetailData';
import { Quote } from 'lucide-react';

interface ServiceTestimonialProps {
  service: ServiceDetailConfig;
}

export const ServiceTestimonial: React.FC<ServiceTestimonialProps> = ({ service }) => {
  return (
    <section className="py-32 sm:py-48 bg-[#080808] border-t border-[#ffffff10] px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Large Decorative Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Quote className="w-12 h-12 text-[#0066FF] opacity-60" />
        </motion.div>

        {/* Large Quote Typography */}
        <motion.blockquote
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial italic text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF9F6] leading-[1.15] tracking-normal mb-12 sm:mb-16"
        >
          "{service.testimonial.quote}"
        </motion.blockquote>

        {/* Author / Company Attribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div>
            <div className="font-display font-black text-lg sm:text-xl uppercase text-[#FAF9F6] tracking-wider">
              {service.testimonial.author}
            </div>
            <div className="font-mono text-xs text-[#888888] uppercase tracking-widest mt-1">
              {service.testimonial.role} • {service.testimonial.company}
            </div>
          </div>

          <div className="font-mono text-xs text-[#0066FF] uppercase tracking-widest">
            {service.testimonial.context}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
