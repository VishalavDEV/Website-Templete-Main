import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileCheck2, KeyRound, Flag, ArrowRight } from 'lucide-react';

export default function StepCards({ onOpenBooking }) {
  const steps = [
    {
      number: "01",
      title: "RESEARCH AND COMPARE",
      description: "Start by researching luxury car rental companies in your desired location and explore our pristine fleet.",
      isHighlighted: false,
      icon: Search,
    },
    {
      number: "02",
      title: "CHECK RENTAL REQUIREMENTS",
      description: "Review the rental requirements of the company you choose with transparent terms and 0 hidden fees.",
      isHighlighted: true, // The iconic warm orange card from the reference
      icon: FileCheck2,
    },
    {
      number: "03",
      title: "CUSTOMIZE CONCIERGE SPEC",
      description: "Select airport tarmac pickup, private chauffeur options, or custom telemetry packages on demand.",
      isHighlighted: false,
      icon: KeyRound,
    },
    {
      number: "04",
      title: "IGNITE & COMMAND",
      description: "Receive your sanitized, fully fueled masterpiece anywhere in the world and command the open road.",
      isHighlighted: false,
      icon: Flag,
    },
  ];

  return (
    <section id="services" className="relative w-full py-24 bg-[#070709] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-[#F2994A] block mb-3"
          >
            Frictionless Protocol
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight"
          >
            Effortless Four-Step Process
          </motion.h2>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            if (step.isHighlighted) {
              // The Signature Highlighted Orange Card from Reference
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group rounded-2xl p-8 bg-gradient-to-br from-[#F2994A] via-[#E88029] to-[#D47020] text-black shadow-[0_10px_40px_-10px_rgba(242,153,74,0.5)] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                  onClick={onOpenBooking}
                >
                  {/* Subtle decorative background watermark number */}
                  <span className="absolute -bottom-4 -right-2 text-8xl font-display font-black text-black/10 select-none pointer-events-none">
                    {step.number}
                  </span>

                  <div>
                    <div className="w-12 h-12 rounded-xl bg-black/15 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-black/70 block mb-1">
                      Step {step.number}
                    </span>
                    <h3 className="text-xl font-display font-black tracking-tight leading-tight text-black mb-3">
                      {step.title}
                    </h3>
                    <p className="text-xs font-medium text-black/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black group-hover:translate-x-1 transition-transform">
                    <span>Instant Check</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            }

            // Dark Glass Regular Step Cards
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="relative group rounded-2xl p-8 bg-[#121217]/70 backdrop-blur-xl border border-white/[0.08] hover:border-[#F2994A]/40 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
              >
                {/* Background watermark number */}
                <span className="absolute -bottom-4 -right-2 text-8xl font-display font-black text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.06] transition-colors">
                  {step.number}
                </span>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#F2994A]/30 group-hover:bg-[#F2994A]/10 transition-colors">
                    <Icon className="w-6 h-6 text-[#F2994A]" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8E8E99] block mb-1">
                    Step {step.number}
                  </span>
                  <h3 className="text-xl font-display font-bold tracking-tight leading-tight text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#8E8E99] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8E8E99] group-hover:text-white transition-colors">
                  <span>Explore detail</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
