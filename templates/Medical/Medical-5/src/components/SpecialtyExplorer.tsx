import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import specialtiesData from '../data/specialties.json';
import { Specialty } from '../types';
import {
  HeartPulse,
  Brain,
  Sparkles,
  Activity,
  Baby,
  Flower2,
  Headphones,
  Eye,
  Stethoscope,
  Smile,
  Zap,
  Microscope,
  ArrowUpRight,
  ArrowRight,
  Users,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  Baby: <Baby className="w-6 h-6" />,
  Flower2: <Flower2 className="w-6 h-6" />,
  Headphones: <Headphones className="w-6 h-6" />,
  Eye: <Eye className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Smile: <Smile className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Microscope: <Microscope className="w-6 h-6" />,
};

export const SpecialtyExplorer: React.FC<{ isFullPage?: boolean }> = ({ isFullPage = false }) => {
  const { setActivePage, setFilterSpecialtyId } = useApp();
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const specialties = specialtiesData as Specialty[];

  const handleSelectSpecialty = (specId: string) => {
    setFilterSpecialtyId(specId);
    setActivePage('doctors');
  };

  return (
    <section
      id="specialty-explorer-section"
      className={`py-16 md:py-24 ${isFullPage ? 'pt-32' : 'bg-[#FFFDFC]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DDF2] text-[#665080] text-xs font-bold uppercase tracking-wider mb-3">
              <span>FIND THE RIGHT CARE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3E3445] tracking-tight">
              Clinical specialties tailored to your life.
            </h2>
            <p className="text-sm sm:text-base text-[#756B7C] mt-3 leading-relaxed">
              Every department is staffed by board-certified leaders in non-invasive diagnostics,
              integrative wellness, and advanced subspecialty treatments.
            </p>
          </div>

          {!isFullPage && (
            <button
              id="specialty-view-all-nav-btn"
              onClick={() => setActivePage('specialties')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8DDF2]/60 hover:bg-[#E8DDF2] text-[#665080] font-semibold text-sm rounded-full transition-colors self-start md:self-auto"
            >
              <span>Explore All Specialties</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specialties.map((spec) => (
            <div
              key={spec.id}
              id={`specialty-card-${spec.id}`}
              onClick={() => handleSelectSpecialty(spec.id)}
              className="lilac-card lilac-card-hover p-6 rounded-3xl cursor-pointer flex flex-col justify-between group relative overflow-hidden bg-white/80"
            >
              {/* Subtle accent glow in corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#E8DDF2]/50 to-transparent rounded-bl-full pointer-events-none transition-transform group-hover:scale-125" />

              <div>
                {/* Icon & Doctor Count */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8DDF2]/70 text-[#665080] flex items-center justify-center group-hover:bg-[#8B6FAE] group-hover:text-white transition-all group-hover:scale-110 shadow-xs">
                    {iconMap[spec.iconName] || <Activity className="w-6 h-6" />}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F9F7FB] border border-[#3E3445]/8 text-[#756B7C]">
                    <Users className="w-3 h-3 text-[#8B6FAE]" />
                    <span>{spec.doctorCount} Specialists</span>
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-xl font-bold text-[#3E3445] group-hover:text-[#665080] transition-colors mb-2">
                  {spec.name}
                </h3>
                <p className="text-xs text-[#756B7C] leading-relaxed mb-4">
                  {spec.description}
                </p>

                {/* Common Conditions Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {spec.commonConditions.slice(0, 2).map((condition) => (
                    <span
                      key={condition}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-[#F9F7FB] text-[#756B7C] border border-[#3E3445]/5"
                    >
                      {condition}
                    </span>
                  ))}
                  {spec.commonConditions.length > 2 && (
                    <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-[#F9F7FB] text-[#756B7C]/70">
                      +{spec.commonConditions.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action Arrow */}
              <div className="pt-3 border-t border-[#3E3445]/6 flex items-center justify-between text-xs font-semibold text-[#8B6FAE] group-hover:text-[#665080]">
                <span>Find Specialists</span>
                <div className="w-7 h-7 rounded-full bg-[#E8DDF2]/50 group-hover:bg-[#8B6FAE] group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
