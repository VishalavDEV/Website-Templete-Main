import React from 'react';
import { 
  X, 
  Award, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  GraduationCap, 
  BookOpen, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { AcademicProgram } from '../types';

interface ProgramDetailModalProps {
  program: AcademicProgram | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (prog: AcademicProgram) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  isOpen,
  onClose,
  onApply
}) => {
  if (!isOpen || !program) return null;

  const sampleCurriculum = [
    { term: 'Year 1: Foundations', courses: ['Introductory Computational Paradigms', 'Discrete Mathematical Structures', 'Foundations of Empirical Inquiry', 'Ethics & Communication'] },
    { term: 'Year 2: Core Theory', courses: ['Data Systems & Algorithmic Complexity', 'Specialized Laboratory Practicum', 'Statistical Modeling & Inference', 'Faculty Mentored Research'] },
    { term: 'Year 3: Advanced Electives', courses: ['Autonomous Systems & Neural Networks', 'Global Fieldwork or Industry Co-op', 'Interdisciplinary Seminar', 'Advanced Quantitative Methods'] },
    { term: 'Year 4: Senior Capstone', courses: ['Senior Thesis & Defense', 'Innovation Incubator Project', 'Leadership & Professional Practicum', 'Graduate Level Research Elective'] }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* Modal Header Image with Close Button */}
        <div className="relative h-48 sm:h-64 w-full bg-slate-900 flex-shrink-0">
          <img
            src={program.image}
            alt={program.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" />
              <span>{program.faculty} • {program.degree} Degree</span>
            </div>
            <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold leading-tight">
              {program.title}
            </h2>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-700">
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 block mb-0.5">Program Duration</span>
              <span className="font-bold text-slate-900 text-sm">{program.duration}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Required Credits</span>
              <span className="font-bold text-slate-900 text-sm">{program.credits} Credits</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Delivery Format</span>
              <span className="font-bold text-emerald-700 text-sm">{program.format}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Tuition / Term</span>
              <span className="font-bold text-slate-900 text-sm">{program.tuitionPerSemester}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
              Program Overview & Educational Objectives
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {program.description} Designed in accordance with international academic standards and continuously audited by industrial advisory boards, this program prepares students for leadership in competitive global environments.
            </p>
          </div>

          {/* Sample Curriculum */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>Curriculum & Course Roadmap</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sampleCurriculum.map((sem, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
                  <span className="font-bold text-slate-900 block mb-1.5 text-emerald-800">
                    {sem.term}
                  </span>
                  <ul className="space-y-1 text-slate-600">
                    {sem.courses.map((c, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        <span className="truncate">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Career Paths */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
              Career Trajectories & Employer Placements
            </h3>
            <div className="flex flex-wrap gap-2">
              {program.careerPaths.map((cp, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center gap-1.5"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  {cp}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Close Overview
          </button>
          <button
            onClick={() => {
              onClose();
              onApply(program);
            }}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Apply For This Program</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
