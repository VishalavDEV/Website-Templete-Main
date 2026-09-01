import React, { useState } from 'react';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award, 
  CheckCircle, 
  Play, 
  ArrowRight,
  Sparkles,
  Building,
  Target,
  Compass,
  MapPin,
  X
} from 'lucide-react';
import { UNIVERSITY_INFO } from '../data/universityData';

interface AboutSectionProps {
  onOpenAdmissions: () => void;
  onExploreCourses: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenAdmissions,
  onExploreCourses
}) => {
  const [isCampusModalOpen, setIsCampusModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="about-us" className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* 2-Column "Welcome To Our Campus" Section (Matching Screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#132238] tracking-tight leading-tight mb-6">
              Welcome To Our Campus
            </h2>

            <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed mb-4">
              Empowering over 45,000 students across 120 nations with future-ready skills, interdisciplinary research, and transformative education.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Founded on the principles of academic excellence and global innovation, Eikra provides state-of-the-art computational facilities, modern science laboratories, and expansive green campuses designed to nurture tomorrow's leaders.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
              Our student-first curriculum pairs rigorous academic foundations with hands-on capstone projects, global exchange semesters, and guaranteed corporate mentorship networks.
            </p>

            {/* Golden "READ MORE" Button */}
            <button
              onClick={() => setIsCampusModalOpen(true)}
              className="bg-[#ffb606] hover:bg-[#e5a405] text-slate-950 font-black text-xs uppercase tracking-widest px-8 py-3.5 rounded-none transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
            >
              READ MORE
            </button>
          </div>

          {/* Right Column: Two Students with Blue Backpacks Walking on Campus */}
          <div className="lg:col-span-6">
            <div 
              onClick={() => setIsCampusModalOpen(true)}
              className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer group border-4 border-white bg-slate-100"
            >
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                alt="Students walking together with backpacks on campus"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80';
                }}
                className="w-full h-[440px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#132238]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm font-bold text-[#ffb606] flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Experience Student Life</span>
                  </p>
                  <p className="text-xs text-slate-200">Click to explore our vibrant campus communities, student clubs, and labs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive "Read More" Campus Modal */}
      {isCampusModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="bg-[#132238] text-white p-6 relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ffb606] text-slate-950 flex items-center justify-center font-black">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">
                    About Eikra University
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    Global Ranking #14 • Melbourne, Australia & Global Centers
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsCampusModalOpen(false)}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 text-slate-800 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#ffb606] mb-2">
                    Our Heritage & Philosophy
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Eikra is committed to academic freedom, interdisciplinary discovery, and equitable global access. Since our founding, we have provided transformative educational opportunities to students from over 120 nations.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#ffb606] mb-2">
                    Global Research Impact
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    With over $180M in annual sponsored research grants, our faculties pioneer breakthroughs in artificial intelligence, CRISPR biomedical therapeutics, renewable energy, and international law.
                  </p>
                </div>
              </div>

              {/* Highlights 4-box */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
                  <p className="text-xl font-black text-[#132238]">45,000+</p>
                  <p className="text-[11px] text-slate-500 font-semibold">Active Students</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
                  <p className="text-xl font-black text-[#ffb606]">98.4%</p>
                  <p className="text-[11px] text-slate-500 font-semibold">Career Placement</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
                  <p className="text-xl font-black text-[#132238]">150+</p>
                  <p className="text-[11px] text-slate-500 font-semibold">Degree Programs</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
                  <p className="text-xl font-black text-[#ffb606]">$45M</p>
                  <p className="text-[11px] text-slate-500 font-semibold">Scholarship Fund</p>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    setIsCampusModalOpen(false);
                    onOpenAdmissions();
                  }}
                  className="flex-1 py-3 bg-[#ffb606] hover:bg-[#e5a405] text-slate-950 font-black text-xs uppercase tracking-wider rounded-none shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Apply For Admission 2026</span>
                </button>
                <button
                  onClick={() => {
                    setIsCampusModalOpen(false);
                    onExploreCourses();
                  }}
                  className="px-6 py-3 bg-[#132238] hover:bg-[#1e2f47] text-white font-bold text-xs uppercase rounded-none cursor-pointer"
                >
                  Browse Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
