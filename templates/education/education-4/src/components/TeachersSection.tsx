import React, { useState } from 'react';
import { 
  Users, 
  GraduationCap, 
  Star, 
  BookOpen, 
  Mail, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Sparkles,
  Award,
  X,
  Calendar,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { TEACHERS_DATA, COURSES_DATA } from '../data/universityData';
import { Teacher } from '../types';

interface TeachersSectionProps {
  onSelectTeacher?: (teacher: Teacher) => void;
  onOpenAdmissions: () => void;
}

export const TeachersSection: React.FC<TeachersSectionProps> = ({
  onSelectTeacher,
  onOpenAdmissions
}) => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [activeTeacherModal, setActiveTeacherModal] = useState<Teacher | null>(null);

  const departments = [
    'All',
    'Computing & AI',
    'Medicine & Health',
    'Business & Law',
    'Design & Humanities'
  ];

  const filteredTeachers = selectedDepartment === 'All'
    ? TEACHERS_DATA
    : TEACHERS_DATA.filter((t) => t.department === selectedDepartment);

  const handleTeacherClick = (teacher: Teacher) => {
    setActiveTeacherModal(teacher);
    if (onSelectTeacher) onSelectTeacher(teacher);
  };

  return (
    <section id="teachers" className="py-20 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#ffb606] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR QUALIFIED TEACHERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#132238] tracking-tight leading-tight mb-4">
            Learn From World-Class Educators
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our esteemed faculty are distinguished authors, researchers, and mentors dedicated to cultivating intellectual rigor and practical excellence.
          </p>
        </div>

        {/* Department Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedDepartment === dept
                  ? 'bg-[#ffb606] text-slate-950 shadow-md shadow-[#ffb606]/20 font-black'
                  : 'bg-slate-50 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {dept === 'All' ? 'All Faculty Members' : dept}
            </button>
          ))}
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Photo & Social Overlay */}
                <div 
                  onClick={() => handleTeacherClick(teacher)}
                  className="relative h-72 w-full overflow-hidden bg-slate-100 cursor-pointer"
                >
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132238]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <div className="flex items-center gap-3 text-white" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={teacher.socials.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#ffb606] hover:text-slate-950 flex items-center justify-center transition-colors"
                        title="Facebook"
                      >
                        <Facebook className="w-4 h-4 fill-current" />
                      </a>
                      <a
                        href={teacher.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#ffb606] hover:text-slate-950 flex items-center justify-center transition-colors"
                        title="Twitter"
                      >
                        <Twitter className="w-4 h-4 fill-current" />
                      </a>
                      <a
                        href={teacher.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#ffb606] hover:text-slate-950 flex items-center justify-center transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4 fill-current" />
                      </a>
                    </div>
                  </div>

                  {/* Rating Tag */}
                  <div className="absolute top-3 right-3 bg-[#132238]/90 text-[#ffb606] text-xs font-bold px-2.5 py-1 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{teacher.rating}</span>
                  </div>

                  {/* Department Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 text-slate-800 text-[10px] font-bold px-2.5 py-1">
                    {teacher.department}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 
                    onClick={() => handleTeacherClick(teacher)}
                    className="text-base font-black text-slate-900 group-hover:text-[#ffb606] transition-colors mb-1 cursor-pointer"
                  >
                    {teacher.name}
                  </h3>
                  <p className="text-xs font-bold text-[#ffb606] mb-2">
                    {teacher.role}
                  </p>
                  <p className="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed">
                    {teacher.bio}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
                    <span className="font-semibold">{teacher.coursesCount} Courses</span>
                    <span className="font-semibold">{teacher.studentsCount} Students</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-4 pt-0">
                <button
                  onClick={() => handleTeacherClick(teacher)}
                  className="w-full py-2.5 bg-slate-100 hover:bg-[#ffb606] text-slate-700 hover:text-slate-950 font-black text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>View Faculty Profile</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Teacher Profile Modal */}
      {activeTeacherModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="bg-[#132238] text-white p-6 relative">
              <button
                onClick={() => setActiveTeacherModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <img
                  src={activeTeacherModal.image}
                  alt={activeTeacherModal.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-full object-cover object-top border-2 border-[#ffb606]"
                />
                <div>
                  <h3 className="text-xl font-black text-white">
                    {activeTeacherModal.name}
                  </h3>
                  <p className="text-xs text-[#ffb606] font-bold">
                    {activeTeacherModal.role} • {activeTeacherModal.department}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Experience: {activeTeacherModal.experience} • Rating: {activeTeacherModal.rating} / 5.0
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 text-slate-800 max-h-[70vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#ffb606] mb-2">
                  Academic Biography
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeTeacherModal.bio}
                </p>
              </div>

              {/* Faculty Stats */}
              <div className="grid grid-cols-3 gap-3 bg-slate-50 p-4 border border-slate-200 text-center">
                <div>
                  <p className="text-lg font-black text-slate-900">{activeTeacherModal.coursesCount}</p>
                  <p className="text-[11px] text-slate-500 font-semibold">Active Courses</p>
                </div>
                <div>
                  <p className="text-lg font-black text-slate-900">{activeTeacherModal.studentsCount}</p>
                  <p className="text-[11px] text-slate-500 font-semibold">Mentored Students</p>
                </div>
                <div>
                  <p className="text-lg font-black text-slate-900">{activeTeacherModal.experience}</p>
                  <p className="text-[11px] text-slate-500 font-semibold">Teaching Tenure</p>
                </div>
              </div>

              {/* Contact Direct */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Official Communication
                </h4>
                <div className="p-3 bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#ffb606]" />
                    <span className="font-semibold text-slate-700">{activeTeacherModal.socials.email}</span>
                  </div>
                  <span className="text-emerald-600 font-bold">Office Hours: Mon/Wed 10:00 - 13:00</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => {
                    setActiveTeacherModal(null);
                    onOpenAdmissions();
                  }}
                  className="flex-1 py-3 bg-[#ffb606] hover:bg-[#e5a405] text-slate-950 font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Enroll in Faculty Courses / Book Advisor</span>
                </button>
                <button
                  onClick={() => setActiveTeacherModal(null)}
                  className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
