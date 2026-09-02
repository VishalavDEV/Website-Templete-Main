import React from 'react';
import { motion } from 'motion/react';
import { ServiceDetailConfig } from '../../data/serviceDetailData';

interface ServicePhilosophyProps {
  service: ServiceDetailConfig;
}

export const ServicePhilosophy: React.FC<ServicePhilosophyProps> = ({ service }) => {
  return (
    <section className="py-32 sm:py-48 bg-[#0a0a0a] border-t border-[#ffffff10] px-6 sm:px-8 lg:px-12 relative overflow-hidden text-center">
      {/* Background ambient center gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0066FF]/[0.03] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
            {service.philosophyLabel}
          </span>
        </motion.div>

        {/* Large Statement */}
        <div className="space-y-2 select-none">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.95]"
          >
            {service.philosophyHeadline.line1}
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95]"
          >
            {service.philosophyHeadline.line2}
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.95]"
          >
            {service.philosophyHeadline.line3}
          </motion.h2>
        </div>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-sans text-base sm:text-lg lg:text-xl text-[#888888] max-w-2xl mx-auto leading-relaxed"
        >
          {service.philosophyBody}
        </motion.p>
      </div>
    </section>
  );
};
