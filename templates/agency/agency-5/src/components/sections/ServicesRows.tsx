import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { services } from '../../data/services';
import { SectionHeading } from '../ui/SectionHeading';
import { useCustomCursor } from '../../hooks/useCustomCursor';

export const ServicesRows: React.FC = () => {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(services[0].slug);
  const [mobileOpenSlug, setMobileOpenSlug] = useState<string | null>(services[0].slug);
  const { setCursorHover, resetCursor } = useCustomCursor();

  return (
    <section className="py-24 bg-[var(--surface-color)] border-y border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <SectionHeading
          number="02"
          badge="OUR CAPABILITIES"
          title="END-TO-END CAPABILITIES FOR THE DIGITAL ERA."
          align="split"
          description="We unify strategic positioning, iconic brand identity, spatial UI/UX design, and hardware-accelerated code under one cohesive studio execution."
        />

        {/* Desktop Interactive Horizontal Rows */}
        <div className="hidden lg:block space-y-0 divide-y divide-[var(--border-color)] border-y border-[var(--border-color)]">
          {services.map((service) => {
            const isHovered = activeHoverId === service.slug;
            return (
              <div
                key={service.slug}
                onMouseEnter={() => {
                  setActiveHoverId(service.slug);
                  setCursorHover('EXPLORE SERVICE', service.hoverImage);
                }}
                onMouseLeave={resetCursor}
                className="group relative py-8 px-6 transition-all duration-300 hover:bg-[var(--card-bg)] cursor-pointer"
              >
                <Link to={`/services/${service.slug}`} className="flex items-center justify-between gap-8">
                  {/* Number & Title */}
                  <div className="flex items-center gap-12 flex-1">
                    <span className="font-mono text-xl font-bold text-[var(--accent-color)]">
                      {service.number}
                    </span>
                    <h3 className="text-3xl xl:text-4xl font-extrabold uppercase tracking-tight text-[var(--text-color)] group-hover:translate-x-4 transition-transform duration-300 font-display">
                      {service.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-[var(--secondary-color)] max-w-md line-clamp-2 font-light hidden xl:block">
                    {service.shortDesc}
                  </p>

                  {/* Arrow Trigger */}
                  <div className="w-12 h-12 rounded-full border border-[var(--border-color)] group-hover:border-[var(--accent-color)] group-hover:bg-[var(--accent-color)] text-[var(--text-color)] group-hover:text-[#0A0A0A] flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </Link>

                {/* Expanded Deliverables Pills on Hover */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-4 flex flex-wrap gap-2 pl-24"
                  >
                    {service.deliverables.slice(0, 4).map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)]"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Accordion Stacked Panels */}
        <div className="lg:hidden divide-y divide-[var(--border-color)] border-y border-[var(--border-color)]">
          {services.map((service) => {
            const isOpen = mobileOpenSlug === service.slug;
            return (
              <div key={service.slug} className="py-4">
                <button
                  onClick={() => setMobileOpenSlug(isOpen ? null : service.slug)}
                  className="w-full flex items-center justify-between py-2 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-[var(--accent-color)]">
                      {service.number}
                    </span>
                    <h3 className="text-xl font-bold uppercase text-[var(--text-color)] font-display">
                      {service.title}
                    </h3>
                  </div>
                  <div className="p-2 rounded-full border border-[var(--border-color)]">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden space-y-4 pt-2 pb-4"
                    >
                      <p className="text-sm text-[var(--secondary-color)] leading-relaxed">
                        {service.shortDesc}
                      </p>

                      <div className="space-y-2">
                        <span className="text-xs font-mono text-[var(--accent-color)] uppercase">Key Deliverables:</span>
                        <ul className="space-y-1 text-xs text-[var(--text-color)] font-mono">
                          {service.deliverables.map((d, i) => (
                            <li key={i}>• {d}</li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[var(--accent-color)] pt-2"
                      >
                        <span>View Full Service Specs →</span>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
