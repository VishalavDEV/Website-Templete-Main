import React from 'react';
import { motion } from 'framer-motion';

export const HomeManifesto: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-[#332832] text-[#FAF7F1] px-6 md:px-12 border-b border-[#CFC7BE]/20 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Manifesto Tag */}
        <div className="lg:col-span-4 space-y-6">
          <span className="font-mono text-xs text-[#B8A8BD] tracking-widest uppercase block">
            // AGENCY MANIFESTO
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase leading-tight text-[#FAF7F1]">
            WE DO NOT COMPROMISE WITH THE ORDINARY.
          </h2>
          <p className="text-sm md:text-base text-[#B8A8BD] leading-relaxed font-sans">
            OFFGRID was built to destroy generic design conventions. We believe brands are living cultural monuments—not commoditized digital noise.
          </p>
        </div>

        {/* Right Animated Editorial Philosophy Statements */}
        <div className="lg:col-span-8 space-y-12">
          {/* Statement 1 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 md:p-12 border border-[#FAF7F1]/10 bg-[#2B2727]/60 backdrop-blur-sm relative group hover:border-[#D65F3F] transition-colors"
          >
            <span className="font-mono text-xs text-[#D65F3F] block mb-4 uppercase tracking-widest">
              [ PHILOSOPHY 01 ]
            </span>
            <blockquote className="font-serif-editorial italic text-3xl sm:text-4xl md:text-5xl text-[#FAF7F1] leading-snug mb-4">
              "GOOD DESIGN IS NOT DECORATION. <br />
              <span className="font-display not-italic font-bold text-[#D65F3F] uppercase text-2xl sm:text-3xl md:text-4xl">
                IT CHANGES BEHAVIOR.
              </span>"
            </blockquote>
            <p className="text-xs md:text-sm text-[#B8A8BD] max-w-xl font-mono">
              If an experience doesn’t alter how a customer thinks, feels, or acts, it’s just expensive wallpaper.
            </p>
          </motion.div>

          {/* Statement 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 md:p-12 border border-[#FAF7F1]/10 bg-[#2B2727]/60 backdrop-blur-sm relative group hover:border-[#D65F3F] transition-colors"
          >
            <span className="font-mono text-xs text-[#D65F3F] block mb-4 uppercase tracking-widest">
              [ PHILOSOPHY 02 ]
            </span>
            <blockquote className="font-serif-editorial italic text-3xl sm:text-4xl md:text-5xl text-[#FAF7F1] leading-snug mb-4">
              "WE'D RATHER BE <br />
              <span className="font-display not-italic font-bold text-[#FAF7F1] uppercase text-2xl sm:text-3xl md:text-4xl">
                REMEMBERED THAN APPROVED.
              </span>"
            </blockquote>
            <p className="text-xs md:text-sm text-[#B8A8BD] max-w-xl font-mono">
              Safe design gets signed off quickly. Radical design changes industries permanently.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
