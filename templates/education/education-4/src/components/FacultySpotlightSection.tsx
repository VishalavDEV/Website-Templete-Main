import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  FileText, 
  GraduationCap, 
  Sparkles, 
  ChevronRight, 
  ExternalLink,
  Users,
  Search
} from 'lucide-react';
import { FACULTY_MEMBERS } from '../data/universityData';
import { FacultySpotlight } from '../types';

interface FacultySpotlightSectionProps {
  onOpenAdmissions?: () => void;
}

export const FacultySpotlightSection: React.FC<FacultySpotlightSectionProps> = ({
  onOpenAdmissions
}) => {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultySpotlight>(FACULTY_MEMBERS[0]);
  const [activeDepartment, setActiveDepartment] = useState<string>('All');

  const departments = [
    'All',
    'Engineering & Computing',
    'Health & Medical Sciences',
    'Business & Economics',
    'Law & Public Policy'
  ];

  const filteredFaculty = FACULTY_MEMBERS.filter(
    (f) => activeDepartment === 'All' || f.department === activeDepartment
  );

  return (
    <section id="faculty" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3 border border-slate-200">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>Distinguished Scholars & Research Chairs</span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Learn Directly From World-Renowned Faculty
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our professors are Guggenheim Fellows, National Academy of Sciences laureates, and pioneering industry advisors who mentor students in intimate seminar settings.
          </p>
        </div>

        {/* Department Filter Chips */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDepartment(dept)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeDepartment === dept
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Faculty Grid & Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredFaculty.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedFaculty(member)}
              className={`bg-slate-50 rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col group cursor-pointer ${
                selectedFaculty.id === member.id
                  ? 'border-emerald-600 ring-2 ring-emerald-500/20 shadow-xl bg-white'
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              {/* Faculty Headshot */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                <img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block">
                    {member.department}
                  </span>
                  <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-white">
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* Faculty Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-800 mb-1.5 line-clamp-1">
                    {member.role}
                  </p>
                  <p className="text-[11px] font-medium text-emerald-700 mb-3 bg-emerald-50 px-2 py-1 rounded inline-block">
                    {member.credentials}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                    <strong>{member.publicationsCount}</strong> Published Works
                  </span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Profile</span>
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Metrics Bar */}
        <div className="mt-14 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-['Playfair_Display',serif] text-xl font-bold text-white">
                Undergraduate Research Opportunities Program (UROP)
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Over 86% of undergraduate students participate in funded, faculty-mentored research prior to graduation across science, humanities, and business laboratories.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="#programs"
              className="py-3 px-5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl uppercase tracking-wider transition-all whitespace-nowrap text-center w-full md:w-auto"
            >
              Explore Research Labs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
