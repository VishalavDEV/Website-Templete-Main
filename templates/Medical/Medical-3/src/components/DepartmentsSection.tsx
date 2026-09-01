import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Users, Building2, ChevronRight, Stethoscope } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Department } from '../types';

export const DepartmentsSection: React.FC = () => {
  const { departments, setActiveTab, setSelectedSpecialtyFilter } = useApp();

  const handleExplore = (dept: Department) => {
    const filterName = dept.id === 'cardiology' ? 'Cardiology'
      : dept.id === 'neurology' ? 'Neurology'
      : dept.id === 'oncology' ? 'Oncology'
      : dept.id === 'orthopedics' ? 'Orthopedics'
      : dept.id === 'pediatrics' ? 'Pediatrics'
      : dept.id === 'dermatology' ? 'Dermatology'
      : 'All';

    setSelectedSpecialtyFilter(filterName);
    setActiveTab('doctors');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="departments-section" className="py-16 sm:py-24 bg-[#FAF9F6] text-[#0A1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A535C]/10 text-[#1A535C] text-[10px] font-bold uppercase tracking-[0.3em] mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Institutes of Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128] tracking-tight font-['Manrope']">
              Specialized clinical departments.
            </h2>
            <p className="text-sm sm:text-base text-[#4A5568] mt-2 leading-relaxed">
              Every department at Aurevia Health is structured around integrated clinical research, dedicated fellowship faculty, and multi-disciplinary boards.
            </p>
          </div>

          <button
            onClick={() => {
              setSelectedSpecialtyFilter('All');
              setActiveTab('doctors');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="self-start md:self-auto inline-flex items-center gap-2 text-xs font-bold text-[#0A1128] hover:text-[#1A535C] bg-white hover:bg-gray-100 px-5 py-3 rounded-full transition-all border border-gray-200 shadow-2xs cursor-pointer"
          >
            <span>View All 120+ Specialists</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#4ECDC4]" />
          </button>
        </div>

        {/* Bento Department Grid with asymmetric spans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => {
            const isFeatured = index === 0; // First department gets featured style
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative rounded-[32px] bg-white border border-gray-200/90 hover:border-[#4ECDC4] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Header */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={dept.imageUrl}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.96]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/90 via-[#0A1128]/30 to-transparent" />

                  {/* Top Badge: Specialist Count */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#0A1128] border border-white/40 shadow-xs">
                    <Users className="w-3.5 h-3.5 text-[#1A535C]" />
                    <span>{dept.specialistCount} Specialists</span>
                  </div>

                  {/* Department Code & Title */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#4ECDC4] uppercase">
                      {dept.code}
                    </span>
                    <h3 className="text-lg font-extrabold text-white leading-snug font-['Manrope']">
                      {dept.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-[#4A5568] leading-relaxed mb-4">
                      {dept.shortDescription}
                    </p>

                    {/* Key Specializations */}
                    <div className="space-y-1.5 mb-5 pt-3 border-t border-gray-100">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A5568]">
                        Core Specializations
                      </p>
                      {dept.keyProcedures.slice(0, 2).map((proc, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#0A1128] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4]" />
                          <span className="truncate">{proc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">Department Chief</span>
                      <span className="text-xs font-bold text-[#0A1128]">{dept.headOfDepartment.split(',')[0]}</span>
                    </div>
                    <button
                      onClick={() => handleExplore(dept)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A535C] hover:text-[#0A1128] group-hover:translate-x-1 transition-all cursor-pointer"
                    >
                      <span>Specialists</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#4ECDC4]" />
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
