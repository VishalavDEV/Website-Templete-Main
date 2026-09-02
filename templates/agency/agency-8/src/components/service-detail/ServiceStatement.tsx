import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ServiceDetailConfig } from '../../data/serviceDetailData';

interface ServiceStatementProps {
  service: ServiceDetailConfig;
}

export const ServiceStatement: React.FC<ServiceStatementProps> = ({ service }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const yMove = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      className="py-32 sm:py-48 bg-[#080808] border-t border-[#ffffff10] px-6 sm:px-8 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-12 sm:mb-16"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
            {service.statementLabel}
          </span>
        </motion.div>

        {/* Dramatic Editorial Layout with Generous Negative Space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div style={{ y: yMove }} className="lg:col-span-8 space-y-3 select-none">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.92]"
            >
              {service.statementHeadline.line1} <br />
              <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.04em]">
                {service.statementHeadline.line2}
              </span> <br />
              {service.statementHeadline.line3}
            </motion.h2>
          </motion.div>

          <div className="lg:col-span-4 lg:pt-6 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-base sm:text-lg text-[#888888] leading-relaxed font-normal"
            >
              {service.statementParagraph}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#666666] uppercase tracking-wider"
            >
              <span>DISCIPLINE {service.number}</span>
              <span className="text-[#0066FF]">{service.statementFootnote}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
