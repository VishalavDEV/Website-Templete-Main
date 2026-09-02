import React from 'react';
import { motion } from 'motion/react';
import { fadeIn } from '../../utils/animations';

export const ClientLogos: React.FC = () => {
  const logos = [
    { name: "Microsoft", symbol: "⊞ Microsoft" },
    { name: "AWS", symbol: "aws" },
    { name: "Google Cloud", symbol: "Google" },
    { name: "Oracle", symbol: "ORACLE" },
    { name: "Adobe", symbol: "A Adobe" },
    { name: "SAP", symbol: "SAP" },
    { name: "Deloitte", symbol: "Deloitte." }
  ];

  return (
    <section className="py-10 bg-slate-50/70 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6"
        >
          Trusted by innovative companies worldwide
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-65 hover:opacity-100 transition-opacity">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-slate-600 hover:text-slate-900 font-bold text-base sm:text-lg font-mono tracking-tight transition-colors duration-200 cursor-default select-none"
            >
              {logo.symbol}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
