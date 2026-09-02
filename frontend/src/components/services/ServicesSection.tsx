import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { SERVICE_PACKAGES } from '../../data/portfolioData';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const handleSelect = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#66fcf1]" />
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#66fcf1]">
                Investment & Commissions
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-['Syne'] text-white tracking-tight">
              SERVICES & COMMISSIONS
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#c5c6c7]/70 font-light max-w-md leading-relaxed">
            Every assignment is executed with uncompromising precision, medium format fidelity, and comprehensive global licensing rights tailored to your scope.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col justify-between p-7 rounded-sm bg-[#12161f] border transition-all duration-300 ${
                pkg.popular
                  ? 'border-[#66fcf1]/50 shadow-[0_0_25px_rgba(102,252,241,0.12)]'
                  : 'border-white/10 hover:border-[#66fcf1]/40'
              }`}
            >
              {/* Highlight Tag */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded ${
                    pkg.popular
                      ? 'bg-[#66fcf1] text-[#0b0c10] font-bold shadow-[0_0_10px_#66fcf1]'
                      : 'bg-white/5 text-[#45a29e] border border-white/10'
                  }`}
                >
                  {pkg.tag}
                </span>

                {pkg.popular && (
                  <span className="flex items-center gap-1 text-[11px] text-[#66fcf1]">
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold font-['Syne'] text-white mb-2">
                  {pkg.title}
                </h3>
                <p className="text-xs text-[#c5c6c7]/70 font-light mb-6 leading-relaxed">
                  {pkg.subtitle}
                </p>

                {/* Price & Duration */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="text-2xl font-bold font-mono text-white mb-1">
                    {pkg.priceRange}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#c5c6c7]/60 font-mono">
                    <Clock className="w-3 h-3 text-[#45a29e]" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] uppercase tracking-wider font-mono text-[#c5c6c7]/40 block">
                    Deliverables:
                  </span>
                  {pkg.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#c5c6c7]/90 leading-snug">
                      <div className="mt-0.5 p-0.5 rounded-full bg-[#66fcf1]/10 text-[#66fcf1] shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleSelect(pkg.title)}
                className={`w-full py-3 px-4 rounded-sm text-xs uppercase font-mono tracking-wider font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                  pkg.popular
                    ? 'bg-[#66fcf1] text-[#0b0c10] hover:bg-[#86fdf4] shadow-[0_0_15px_rgba(102,252,241,0.3)]'
                    : 'bg-white/5 hover:bg-[#66fcf1]/10 text-white hover:text-[#66fcf1] border border-white/10 hover:border-[#66fcf1]/40'
                }`}
              >
                <span>Reserve Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
