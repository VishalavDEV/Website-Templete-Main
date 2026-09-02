import React, { useState } from 'react';
import { DOCTORS } from '../data/mockData';
import { Doctor } from '../types';
import { DoctorModal } from './DoctorModal';
import { ArrowRight, UserCheck, Languages } from 'lucide-react';

interface DoctorsProps {
  onBookWithDoctor: (doctorName: string) => void;
}

export const Doctors: React.FC<DoctorsProps> = ({ onBookWithDoctor }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  return (
    <section id="specialists" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C97873] font-sans block mb-2">
              Multidisciplinary Medical Faculty
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#542F3B]">
              Specialists who treat <br />
              <span className="italic font-normal text-[#C97873]">the whole human.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#70696C] max-w-md font-sans font-normal leading-relaxed">
            Our physicians are leaders in endocrinology, podiatric surgery, retinal ophthalmology, and metabolic nutrition, collaborating daily for your care.
          </p>
        </div>

        {/* Doctor Profile Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl p-6 border border-[#E5DDD8] hover:border-[#C97873] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Photo */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-[#F2ECE9]">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-[#542F3B] shadow-xs">
                    {doc.experience}
                  </div>
                </div>

                {/* Name & Specialty */}
                <h3 className="font-serif text-xl font-bold text-[#542F3B] group-hover:text-[#C97873] transition-colors">
                  {doc.name}
                </h3>
                <p className="text-xs font-bold text-[#C97873] font-sans mt-0.5 mb-2">
                  {doc.specialty}
                </p>

                <p className="text-xs text-[#70696C] font-sans font-normal line-clamp-2 leading-relaxed mb-4">
                  {doc.bio}
                </p>

                <div className="flex items-center gap-1.5 text-[11px] text-[#70696C] font-sans">
                  <Languages className="w-3.5 h-3.5 text-[#C97873]" />
                  <span>{doc.languages.join(', ')}</span>
                </div>
              </div>

              {/* View Profile CTA */}
              <div className="pt-5 mt-5 border-t border-[#F2ECE9]">
                <button
                  onClick={() => setSelectedDoctor(doc)}
                  className="w-full py-2.5 rounded-xl bg-[#FAF0EE] text-[#542F3B] group-hover:bg-[#542F3B] group-hover:text-white transition-colors text-xs font-bold flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#C97873]"
                >
                  <span>View Full Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Doctor Modal */}
      <DoctorModal
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        onBookWithDoctor={onBookWithDoctor}
      />
    </section>
  );
};
