import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { servicesData } from '../../data/services';
import SectionHeading from '../ui/SectionHeading';

export default function TravelSolutionsRows() {
  const [activeRow, setActiveRow] = useState<number>(0);

  return (
    <section className="py-20 sm:py-28 bg-[#F8F5EE] border-t border-[#D8C3A8]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Enterprise Solutions"
          title="Engineered for Every Corporate Journey"
          subtitle="Select a capability below to explore how Aurelia delivers bespoke precision across every dimension of business mobility."
          align="left"
        />

        {/* Large Horizontal Interactive Rows */}
        <div className="divide-y divide-[#D8C3A8]/60 border-y border-[#D8C3A8]/60">
          {servicesData.map((service, index) => {
            const isActive = activeRow === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveRow(index)}
                onClick={() => setActiveRow(index)}
                className={`transition-all duration-300 group cursor-pointer ${
                  isActive ? 'bg-[#FBF9F5] shadow-inner py-8 sm:py-10' : 'hover:bg-[#FBF9F5]/60 py-6 sm:py-7'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center px-4 sm:px-6">
                  {/* Col 1: Number & Title */}
                  <div className="lg:col-span-5 flex items-start sm:items-center gap-6">
                    <span
                      className={`font-serif text-2xl sm:text-3xl font-light transition-colors ${
                        isActive ? 'text-[#C29B38] font-medium' : 'text-[#8FA29A]'
                      }`}
                    >
                      {service.number}
                    </span>
                    <div>
                      <h3
                        className={`font-serif text-2xl sm:text-3xl tracking-tight transition-colors ${
                          isActive ? 'text-[#0E1412] font-semibold' : 'text-[#25332E] group-hover:text-[#0F382E]'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <div className="text-xs text-[#62756D] uppercase tracking-wider font-medium mt-1">
                        {service.targetAudience}
                      </div>
                    </div>
                  </div>

                  {/* Col 2: Description & Features */}
                  <div className="lg:col-span-4">
                    <p className="text-sm text-[#3E5049] leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {service.tagline}
                    </p>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-[#D8C3A8]/40 space-y-2"
                      >
                        <div className="text-xs font-semibold uppercase text-[#0F382E] tracking-wider">
                          Key Advantages:
                        </div>
                        <ul className="space-y-1.5 text-xs text-[#62756D]">
                          {service.features.slice(0, 3).map((feat, fIndex) => (
                            <li key={fIndex} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C29B38]" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>

                  {/* Col 3: Supporting Image Thumbnail & Action Arrow */}
                  <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-6">
                    {/* Supporting Image */}
                    <div
                      className={`relative rounded-xl overflow-hidden shadow-md transition-all duration-300 ${
                        isActive
                          ? 'w-36 sm:w-44 h-24 sm:h-28 opacity-100 ring-2 ring-[#0F382E]'
                          : 'w-24 h-16 opacity-40 group-hover:opacity-80'
                      }`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Action Arrow / Link */}
                    <Link
                      to={`/${service.slug}`}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                        isActive
                          ? 'bg-[#0F382E] text-white rotate-45 scale-110 shadow-lg'
                          : 'bg-[#EADBCA]/40 text-[#25332E] group-hover:bg-[#0F382E] group-hover:text-white group-hover:rotate-45'
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
