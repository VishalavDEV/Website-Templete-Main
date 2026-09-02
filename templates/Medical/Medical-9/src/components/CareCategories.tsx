import React, { useState } from 'react';
import { CARE_CATEGORIES } from '../data/mockData';
import { CareCategory } from '../types';
import { CareCategoryModal } from './CareCategoryModal';
import {
  Activity,
  HeartPulse,
  ShieldAlert,
  Baby,
  Sparkles,
  Footprints,
  Eye,
  Stethoscope,
  ArrowRight
} from 'lucide-react';

interface CareCategoriesProps {
  onBookConsultation: (categoryTitle: string) => void;
}

export const CareCategories: React.FC<CareCategoriesProps> = ({ onBookConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<CareCategory | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      case 'Baby': return <Baby className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Footprints': return <Footprints className="w-6 h-6" />;
      case 'Eye': return <Eye className="w-6 h-6" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6" />;
      default: return <Activity className="w-6 h-6" />;
    }
  };

  return (
    <section id="care" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C97873] font-sans block mb-2">
              Comprehensive Medical Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#542F3B]">
              One condition. <br />
              <span className="italic font-normal text-[#C97873]">Many ways it affects you.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#70696C] max-w-md font-sans font-normal leading-relaxed">
            Diabetes is non-linear. Whether managing type 1 from childhood or reversing prediabetes in mid-life, our specialized units provide precise biological care.
          </p>
        </div>

        {/* 8 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARE_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-[#E5DDD8] hover:border-[#C97873] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedCategory(cat); }}
              aria-label={`View details for ${cat.title}`}
            >
              {/* Top subtle accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#C97873] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#FAF0EE] text-[#C97873] group-hover:bg-[#542F3B] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-5 shrink-0">
                  {getIcon(cat.iconName)}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-[#542F3B] group-hover:text-[#C97873] transition-colors mb-2">
                  {cat.title}
                </h3>

                {/* Subtitle badge */}
                <span className="inline-block text-[11px] font-bold text-[#C97873] bg-[#FAF0EE] px-2.5 py-0.5 rounded-md mb-3">
                  {cat.subtitle}
                </span>

                {/* Short Description */}
                <p className="text-xs text-[#70696C] font-sans font-normal leading-relaxed mb-6 line-clamp-3">
                  {cat.shortDesc}
                </p>
              </div>

              {/* Card Footer Arrow */}
              <div className="flex items-center gap-2 text-xs font-semibold text-[#542F3B] group-hover:text-[#C97873] transition-colors pt-4 border-t border-[#F2ECE9]">
                <span>Explore Care Protocol</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <CareCategoryModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onBookConsultation={onBookConsultation}
      />
    </section>
  );
};
