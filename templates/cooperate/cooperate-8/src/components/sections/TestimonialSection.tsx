import React from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { testimonialsData } from "../../data/testimonials";

export const TestimonialSection: React.FC = () => {
  const primaryTestimonial = testimonialsData[0];

  return (
    <section className="py-24 md:py-36 border-b border-[#24282F] bg-[#111315] text-[#FAF8F5] relative overflow-hidden">
      {/* Background Subtle Tech Grid in Dark Mode */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Monospace tag */}
        <div className="flex items-center justify-center gap-3 font-mono-tech text-[11px] uppercase tracking-widest text-[#CCF34A] mb-12">
          <span className="font-bold border border-[#CCF34A]/60 px-1.5 py-0.5 rounded-xs">11</span>
          <span>Verified Enterprise Impact</span>
        </div>

        {/* Big Quote Container */}
        <div className="text-center space-y-10">
          <div className="relative inline-block max-w-4xl mx-auto">
            {/* Animated subtle quotation icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.15 }}
              transition={{ duration: 0.8 }}
              className="absolute -top-12 -left-6 text-[#CCF34A] pointer-events-none hidden sm:block"
            >
              <Quote className="w-24 h-24" />
            </motion.div>

            <blockquote className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#FAF8F5] leading-[1.14] tracking-tight relative z-10">
              "{primaryTestimonial.quote}"
            </blockquote>
          </div>

          {/* Client Attribution Metadata */}
          <div className="pt-8 border-t border-[#24282F] max-w-xl mx-auto space-y-2">
            <div className="font-serif-editorial text-2xl text-[#FAF8F5]">
              {primaryTestimonial.author}
            </div>
            <div className="font-mono-tech text-xs text-[#CCF34A]">
              {primaryTestimonial.role} — {primaryTestimonial.company}
            </div>
            <div className="font-mono-tech text-[11px] text-[#7C828D]">
              {primaryTestimonial.industry} // {primaryTestimonial.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
