import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { SERVICES } from '../data/services';

export const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('brand-strategy');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <>
      <SEO
        title="Capabilities & Services — OFFGRID®"
        description="Brand strategy, visual identity systems, digital products, WebGL creative development, campaigns, and 3D motion."
      />
      <main className="pt-32 pb-32 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen">
        {/* Services Hero Header */}
        <section className="mb-20 pb-12 border-b border-[#CFC7BE]">
          <span className="font-mono text-xs text-[#D65F3F] tracking-widest uppercase block mb-4">
            // AGENCY DOMAINS & EXCELLENCE
          </span>
          <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-tighter uppercase text-[#2B2727] leading-[0.88] max-w-5xl">
            WE DON'T SELL SERVICES. <br />
            <span className="text-[#D65F3F]">WE SOLVE PROBLEMS.</span>
          </h1>
        </section>

        {/* Interactive Expandable Accordion Services List */}
        <section className="space-y-6">
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className={`border border-[#CFC7BE] transition-all duration-300 ${
                  isExpanded ? 'bg-[#FAF7F1] shadow-lg' : 'bg-transparent hover:bg-[#FAF7F1]/50'
                }`}
              >
                {/* Header Row Trigger */}
                <button
                  onClick={() => toggleExpand(service.id)}
                  className="w-full py-8 px-6 md:px-10 flex items-center justify-between text-left focus:outline-none"
                  data-cursor="link"
                >
                  <div className="grid grid-cols-12 items-center gap-4 w-full mr-4">
                    <div className="col-span-2 md:col-span-1 font-mono text-sm text-[#D65F3F]">
                      {service.number}
                    </div>

                    <div className="col-span-10 md:col-span-5">
                      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight uppercase text-[#2B2727]">
                        {service.title}
                      </h2>
                    </div>

                    <div className="hidden md:block col-span-6 font-mono text-xs text-[#77716D] uppercase">
                      {service.capabilities.slice(0, 3).join(' / ')}
                    </div>
                  </div>

                  <div className={`p-2 rounded-full border border-[#CFC7BE] transition-transform duration-300 ${
                    isExpanded ? 'rotate-180 bg-[#2B2727] text-[#FAF7F1]' : ''
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Expanded Content Body */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden border-t border-[#CFC7BE] px-6 md:px-10 py-10"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Overview & Deliverables */}
                        <div className="lg:col-span-5 space-y-8">
                          <p className="font-serif-editorial italic text-2xl text-[#332832] leading-snug">
                            "{service.tagline}"
                          </p>
                          <p className="text-sm text-[#77716D] leading-relaxed font-sans">
                            {service.description}
                          </p>

                          <div className="space-y-3">
                            <h4 className="font-mono text-xs text-[#D65F3F] uppercase tracking-widest">
                              // KEY DELIVERABLES
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#2B2727]">
                              {service.deliverables.map((del, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D65F3F] shrink-0" />
                                  <span>{del}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {service.featuredProjectSlug && (
                            <div className="pt-4">
                              <Link
                                to={`/work/${service.featuredProjectSlug}`}
                                className="inline-flex items-center gap-2 text-xs font-display font-bold tracking-widest text-[#2B2727] hover:text-[#D65F3F] uppercase"
                                data-cursor="link"
                              >
                                <span>VIEW REPRESENTATIVE CASE STUDY</span>
                                <ArrowUpRight className="w-4 h-4 text-[#D65F3F]" />
                              </Link>
                            </div>
                          )}
                        </div>

                        {/* Process & Capabilities Breakdown */}
                        <div className="lg:col-span-7 space-y-8">
                          <div>
                            <h4 className="font-mono text-xs text-[#77716D] uppercase tracking-widest mb-4">
                              // FULL CAPABILITIES MATRIX
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {service.capabilities.map((cap, idx) => (
                                <div
                                  key={idx}
                                  className="p-3 border border-[#CFC7BE] bg-[#FAF7F1] font-display font-medium text-sm uppercase text-[#2B2727]"
                                >
                                  {cap}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* 3-Step Execution Process */}
                          <div className="space-y-4 pt-4 border-t border-[#CFC7BE]">
                            <h4 className="font-mono text-xs text-[#77716D] uppercase tracking-widest">
                              // ENGAGEMENT PROCESS
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                              {service.process.map((p) => (
                                <div key={p.step} className="p-4 border border-[#CFC7BE] bg-[#FAF7F1] space-y-1">
                                  <span className="font-mono text-xs text-[#D65F3F]">{p.step}</span>
                                  <h5 className="font-display font-bold text-sm uppercase">{p.name}</h5>
                                  <p className="text-[11px] text-[#77716D] leading-tight">{p.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </section>

        {/* Bottom Contact CTA */}
        <section className="mt-24 p-12 bg-[#2B2727] text-[#FAF7F1] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight">
              HAVE A SPECIFIC REQUIREMENT?
            </h3>
            <p className="text-sm text-[#B8A8BD] mt-2 font-sans">
              We craft bespoke teams around your exact problem statement.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#D65F3F] hover:bg-[#B94732] text-[#FAF7F1] px-7 py-4 font-display font-bold text-xs tracking-widest uppercase transition-colors shrink-0"
            data-cursor="link"
          >
            <span>DISCUSS A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </main>
    </>
  );
};
