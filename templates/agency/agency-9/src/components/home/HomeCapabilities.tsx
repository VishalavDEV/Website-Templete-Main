import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../../data/services';

export const HomeCapabilities: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto border-b border-[#CFC7BE]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#CFC7BE]">
        <div>
          <span className="font-mono text-xs text-[#D65F3F] tracking-widest uppercase block mb-2">
            // 02 — CAPABILITIES & DOMAINS
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight uppercase text-[#2B2727]">
            WE DON'T SELL SERVICES. WE SOLVE PROBLEMS.
          </h2>
        </div>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 font-display text-sm tracking-widest uppercase hover:text-[#D65F3F] transition-colors"
          data-cursor="link"
        >
          <span>VIEW FULL CAPABILITIES</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <Link
            key={service.id}
            to="/services"
            className="group p-8 border border-[#CFC7BE] bg-[#FAF7F1] hover:bg-[#332832] hover:text-[#FAF7F1] transition-all duration-300 flex flex-col justify-between h-[360px]"
            data-cursor="link"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-[#D65F3F] mb-6">
                <span>{service.number}</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight uppercase mb-4">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-[#77716D] group-hover:text-[#B8A8BD] leading-relaxed line-clamp-3">
                {service.tagline}
              </p>
            </div>

            <div className="pt-6 border-t border-[#CFC7BE]/40 group-hover:border-[#FAF7F1]/20">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#77716D] group-hover:text-[#FAF7F1]">
                {service.capabilities.slice(0, 3).join(' • ')}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
