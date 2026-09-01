import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Scan, Dna, Video, ArrowRight, CheckCircle2, Clock, Zap, Calendar, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MedicalService } from '../types';

export const ServicesSection: React.FC = () => {
  const { services, openBooking } = useApp();
  const [activeServiceId, setActiveServiceId] = useState<string>(services[0]?.id || 'robotic-surgery');

  const activeService = services.find((s) => s.id === activeServiceId) || services[0];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Scan':
        return <Scan className="w-5 h-5" />;
      case 'Dna':
        return <Dna className="w-5 h-5" />;
      default:
        return <Video className="w-5 h-5" />;
    }
  };

  return (
    <section id="services-section" className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-gray-200/80 text-[#0A1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A535C]/10 text-[#1A535C] text-[10px] font-bold uppercase tracking-[0.3em] mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#1A535C]" />
            <span>Advanced Clinical Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128] tracking-tight font-['Manrope']">
            State-of-the-art diagnostic & surgical suites.
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] mt-2 leading-relaxed">
            Aurevia Health incorporates next-generation robotic instrumentation, 3-Tesla acoustic-dampened neuroimaging, and whole-exome genomic sequencing to deliver exact clinical answers.
          </p>
        </div>

        {/* Bento Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Large Spotlight Bento Tile (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="rounded-[36px] bg-[#0A1128] text-white p-6 sm:p-8 flex-1 flex flex-col justify-between overflow-hidden relative shadow-2xl border border-[#1A535C]"
              >
                {/* Background image container */}
                <div className="relative h-64 sm:h-72 w-full rounded-[28px] overflow-hidden mb-6 bg-slate-950 border border-white/10">
                  <img
                    src={activeService.imageUrl}
                    alt={activeService.name}
                    className="w-full h-full object-cover filter brightness-[0.95]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A1128]/90 backdrop-blur-md border border-[#4ECDC4]/40 text-xs font-bold text-[#4ECDC4]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{activeService.category}</span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-[10px] text-[#4ECDC4] font-bold uppercase tracking-[0.2em]">
                      Technology Platform
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white">
                      {activeService.technologyUsed}
                    </p>
                  </div>
                </div>

                {/* Content details */}
                <div>
                  <h3 className="text-2xl font-bold font-['Manrope'] mb-2 text-white">
                    {activeService.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {activeService.fullDesc}
                  </p>

                  {/* Clinical Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {activeService.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#4ECDC4] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Logistics Bar */}
                <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">
                        Turnaround Time
                      </span>
                      <span className="text-xs font-bold text-white flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#4ECDC4]" />
                        {activeService.turnaroundTime}
                      </span>
                    </div>
                    <div className="h-6 w-px bg-white/10" />
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">
                        Coverage & Cost
                      </span>
                      <span className="text-xs font-bold text-[#4ECDC4]">
                        {activeService.priceEstimate}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => openBooking()}
                    className="px-6 py-3 rounded-full bg-[#4ECDC4] hover:bg-[#3DB8AF] text-[#0A1128] text-xs font-extrabold flex items-center gap-2 transition-all shadow-lg active:scale-95 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Schedule Diagnostic Consultation</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Selectable Interactive Bento Stack (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {services.map((service) => {
              const isSelected = service.id === activeServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  id={`service-item-${service.id}`}
                  className={`p-5 rounded-[28px] cursor-pointer transition-all duration-200 border text-left flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#4ECDC4] shadow-md ring-2 ring-[#4ECDC4]/20 translate-x-1'
                      : 'bg-white hover:bg-gray-50 border-gray-200/90 text-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                          isSelected ? 'bg-[#1A535C] text-[#4ECDC4] shadow-xs' : 'bg-[#FAF9F6] text-[#1A535C] border border-gray-200'
                        }`}
                      >
                        {getServiceIcon(service.iconName)}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A5568]">
                          {service.category}
                        </span>
                        <h4 className="text-sm font-bold text-[#0A1128] leading-tight font-['Manrope']">
                          {service.name}
                        </h4>
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform shrink-0 ${
                        isSelected ? 'text-[#1A535C] translate-x-1' : 'text-slate-300'
                      }`}
                    />
                  </div>

                  <p className="text-xs text-[#4A5568] line-clamp-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#4A5568]">
                    <span>{service.turnaroundTime}</span>
                    <span className="font-bold text-[#1A535C]">Explore specs →</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
