import React from 'react';
import { useApp } from '../context/AppContext';
import servicesData from '../data/services.json';
import { Service } from '../types';
import {
  Microscope,
  Activity,
  Video,
  FileCheck,
  Zap,
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'diagnostics':
      return <Microscope className="w-6 h-6" />;
    case 'consultations':
      return <Activity className="w-6 h-6" />;
    case 'preventive care':
      return <Sparkles className="w-6 h-6" />;
    case 'telemedicine':
      return <Video className="w-6 h-6" />;
    case 'health screening':
      return <FileCheck className="w-6 h-6" />;
    default:
      return <Zap className="w-6 h-6" />;
  }
};

export const ServicesView: React.FC<{ isFullPage?: boolean }> = ({ isFullPage = false }) => {
  const { openBooking } = useApp();
  const services = servicesData as Service[];

  return (
    <section
      id="services-section"
      className={`py-16 md:py-24 ${isFullPage ? 'pt-32' : 'bg-[#FFFDFC]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DDF2] text-[#665080] text-xs font-bold uppercase tracking-wider mb-3">
            <span>CLINICAL EXCELLENCE & FACILITIES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3E3445] tracking-tight">
            High-precision diagnostics in serene environments.
          </h2>
          <p className="text-sm sm:text-base text-[#756B7C] mt-3 leading-relaxed">
            State-of-the-art diagnostic imaging, automated clinical pathology, and tailored wellness
            suites engineered to provide answers without unnecessary anxiety.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => (
            <div
              key={srv.id}
              id={`service-card-${srv.id}`}
              className="lilac-card lilac-card-hover p-8 rounded-3xl bg-white flex flex-col justify-between group space-y-6"
            >
              <div>
                {/* Icon & Category Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#E8DDF2]/70 text-[#665080] flex items-center justify-center group-hover:bg-[#8B6FAE] group-hover:text-white transition-all shadow-xs">
                    {getCategoryIcon(srv.category)}
                  </div>

                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#F9F7FB] border border-[#3E3445]/8 text-[#756B7C]">
                    {srv.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-xl font-bold text-[#3E3445] group-hover:text-[#665080] transition-colors mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs text-[#756B7C] leading-relaxed mb-4">
                  {srv.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 text-xs text-[#3E3445] mb-4">
                  {srv.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#739B82] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Footer & Action */}
              <div className="pt-4 border-t border-[#3E3445]/8 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#756B7C]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#8B6FAE]" />
                    <span>Turnaround: {srv.turnaroundTime}</span>
                  </div>
                  <span className="font-semibold text-[#3E3445]">{srv.priceEstimate}</span>
                </div>

                <button
                  id={`book-service-btn-${srv.id}`}
                  onClick={() => openBooking()}
                  className="w-full py-2.5 bg-[#8B6FAE] hover:bg-[#665080] text-white text-xs font-semibold rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation & Scan</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
