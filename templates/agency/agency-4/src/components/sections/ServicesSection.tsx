import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Compass, Layers, Layout, Code, Eye, Lightbulb, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { SERVICES } from '../../data/services';

const ICON_MAP: Record<string, React.ElementType> = {
  Compass,
  Layers,
  Layout,
  Code,
  Eye,
  Lightbulb
};

export const ServicesSection: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleServiceClick = (serviceId: string) => {
    if (location.pathname === '/services') {
      const el = document.getElementById(`service-${serviceId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      navigate(`/services#service-${serviceId}`);
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Core Services"
          title="Capabilities tailored for brand distinction."
          subtitle="We focus on six core disciplines where deep domain mastery delivers outsized commercial and aesthetic impact."
        />

        {/* Asymmetric Cards Grid with Rich Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.iconName] || Layers;
            
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => handleServiceClick(service.id)}
                className="group cursor-pointer rounded-3xl bg-white border border-[#EAE6DF] shadow-sm hover:shadow-2xl hover:border-[#D96B43]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Top Image Banner */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#EAE6DF]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Floating Icon & Number */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md text-[#D96B43] flex items-center justify-center shadow-lg group-hover:bg-[#D96B43] group-hover:text-white transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-bold font-display text-white opacity-80">
                        {service.number}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-8">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#D96B43] mb-1">
                      {service.tagline}
                    </p>
                    <h3 className="text-2xl font-bold font-display text-[#1A1918] group-hover:text-[#D96B43] transition-colors mb-3">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#6B6863] leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Deliverables List Preview & Action Indicator */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                  <div className="pt-4 border-t border-[#EAE6DF] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#1A1918] group-hover:text-[#D96B43] transition-colors">
                      {service.deliverables.length} Key Deliverables
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleServiceClick(service.id);
                      }}
                      className="w-9 h-9 rounded-full bg-[#FAF8F5] text-[#1A1918] flex items-center justify-center group-hover:bg-[#D96B43] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      aria-label={`View details for ${service.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
