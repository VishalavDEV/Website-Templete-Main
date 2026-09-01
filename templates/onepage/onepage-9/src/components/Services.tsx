import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';
import { ArrowUpRight, Sparkles, Cpu, Cloud, BarChart3, Briefcase, Code, ChevronDown, Check } from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onNavigate: (sectionId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onNavigate }) => {
  const [activeRowId, setActiveRowId] = useState<string>(SERVICES[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-emerald-600" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-emerald-600" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-emerald-600" />;
      case 'BarChart3': return <BarChart3 className="w-4 h-4 text-emerald-600" />;
      case 'Briefcase': return <Briefcase className="w-4 h-4 text-emerald-600" />;
      case 'Code': return <Code className="w-4 h-4 text-emerald-600" />;
      default: return <Sparkles className="w-4 h-4 text-emerald-600" />;
    }
  };

  const selectedService = SERVICES.find(s => s.id === activeRowId) || SERVICES[0];

  return (
    <section id="services" className="py-24 bg-[#FAF9F6] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-300">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">
              <span className="text-slate-900">02 /</span>
              <span>STRATEGIC CAPABILITY MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 uppercase font-sans">
              ENTERPRISE CAPABILITIES &amp; IMPACT MATRIX
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-600 max-w-md">
            Interactive breakdown of executive advisory capabilities, technical domains, and measurable ROI benchmarks.
          </p>
        </div>

        {/* ================= CAPABILITY MATRIX (TABLE VIEW ON DESKTOP) ================= */}
        <div className="mt-10 hidden lg:block border border-slate-300 bg-white shadow-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-mono text-xs uppercase tracking-wider border-b border-slate-900">
                <th className="py-4 px-6 font-bold w-1/4">CAPABILITY / MODULE</th>
                <th className="py-4 px-6 font-bold w-1/4">BUSINESS IMPACT</th>
                <th className="py-4 px-6 font-bold w-1/4">TECH DOMAIN</th>
                <th className="py-4 px-6 font-bold text-emerald-400">ROI METRIC</th>
                <th className="py-4 px-6 font-bold text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-mono text-xs">
              {SERVICES.map((service) => {
                const isActive = activeRowId === service.id;
                return (
                  <tr
                    key={service.id}
                    onMouseEnter={() => setActiveRowId(service.id)}
                    onClick={() => onSelectService(service)}
                    className={`cursor-pointer transition-colors ${
                      isActive ? 'bg-slate-100/90 font-bold' : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="py-4 px-6 font-sans font-bold text-slate-950 flex items-center space-x-3">
                      <div className="p-1.5 bg-slate-100 border border-slate-200 rounded">
                        {getIcon(service.iconName)}
                      </div>
                      <span className="text-sm">{service.title}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-700">{service.businessImpact}</td>
                    <td className="py-4 px-6 text-slate-600 text-[11px]">{service.techDomain}</td>
                    <td className="py-4 px-6 font-bold text-emerald-600 text-sm">{service.roiMetric}</td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService(service);
                        }}
                        className="inline-flex items-center text-xs font-mono font-bold text-slate-900 hover:text-emerald-600 tracking-wider uppercase"
                      >
                        <span>VIEW BRIEF</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Expanded Selected Service Detail Bar */}
          <div className="bg-slate-900 text-white p-6 border-t border-slate-800 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs uppercase font-bold">
                  <span>SELECTED MODULE: {selectedService.title}</span>
                  <span>•</span>
                  <span>ROI: {selectedService.roiMetric}</span>
                </div>
                <p className="text-sm text-slate-300 font-sans">{selectedService.shortDesc}</p>
              </div>

              <button
                onClick={() => onSelectService(selectedService)}
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-mono font-bold tracking-widest uppercase text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shrink-0"
              >
                <span>OPEN FULL BLUEPRINT</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Deliverables Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-800 font-mono text-[11px]">
              {selectedService.deliverables.map((deliv, i) => (
                <div key={i} className="flex items-center space-x-2 text-slate-300">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= MOBILE ACCORDION MATRIX ================= */}
        <div className="mt-8 lg:hidden space-y-3 font-mono text-xs">
          {SERVICES.map((service) => {
            const isOpen = activeRowId === service.id;
            return (
              <div
                key={service.id}
                className="border border-slate-300 bg-white overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => setActiveRowId(isOpen ? '' : service.id)}
                  className="w-full p-4 flex items-center justify-between text-left font-sans font-bold text-slate-950 bg-white hover:bg-slate-50"
                >
                  <div className="flex items-center space-x-3">
                    {getIcon(service.iconName)}
                    <span>{service.title}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-600 font-mono text-xs font-bold">{service.roiMetric}</span>
                    <ChevronDown className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-4 bg-slate-900 text-white space-y-4 border-t border-slate-200">
                    <div className="space-y-1">
                      <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">
                        IMPACT: {service.businessImpact}
                      </span>
                      <p className="text-xs text-slate-300 font-sans">{service.shortDesc}</p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-800 text-[11px]">
                      <span className="text-slate-400 font-bold uppercase">KEY DELIVERABLES:</span>
                      <ul className="space-y-1 text-slate-300">
                        {service.deliverables.map((d, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => onSelectService(service)}
                      className="w-full py-2.5 bg-emerald-400 text-slate-950 font-mono font-bold uppercase tracking-wider text-xs flex items-center justify-center space-x-1"
                    >
                      <span>VIEW FULL SPECIFICATION</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Matrix Footer Callout */}
        <div className="mt-12 p-6 bg-white border border-slate-300 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-mono font-bold text-slate-950 uppercase">REQUIRE A BESPOKE ARCHITECTURE BLUEPRINT?</h4>
            <p className="text-xs text-slate-600 font-sans">Our solutions architects build tailored multi-cloud, security, and process automation matrixes.</p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
          >
            01 — REQUEST CUSTOM MATRIX
          </button>
        </div>

      </div>
    </section>
  );
};
