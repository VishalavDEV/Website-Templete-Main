import React, { useState } from 'react';
import { PageId, LearningPath } from '../types';
import { LEARNING_PATHS_DATA } from '../data/edupathData';
import { GradientText } from '../components/reactbits/GradientText';
import {
  Map,
  CheckCircle2,
  Briefcase,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LearningPathsPageProps {
  onNavigate: (page: PageId) => void;
}

export const LearningPathsPage: React.FC<LearningPathsPageProps> = ({ onNavigate }) => {
  const [selectedPath, setSelectedPath] = useState<LearningPath>(LEARNING_PATHS_DATA[0]);
  const [enrolledPaths, setEnrolledPaths] = useState<string[]>(['path-1']);

  const handleEnrollPath = (pathId: string) => {
    if (!enrolledPaths.includes(pathId)) {
      setEnrolledPaths([...enrolledPaths, pathId]);
      try {
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      } catch (e) {}
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-mono font-bold uppercase tracking-wider border border-purple-200">
            <Map className="w-3.5 h-3.5" />
            <span>STRUCTURED CAREER ACCELERATORS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900">
            Career Learning{' '}
            <GradientText colors={['#4F46E5', '#7C3AED', '#2563EB', '#4F46E5']}>
              Paths
            </GradientText>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            From foundational comprehension to principal-level execution. Each curriculum path is a structured, milestone-guided sequence designed to build portfolio-ready proof of work.
          </p>
        </div>
      </section>

      {/* Main Interactive Path Exploration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Path Selector Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                Available Specializations
              </h3>
              <span className="text-xs font-mono text-indigo-600 font-bold">
                {LEARNING_PATHS_DATA.length} Programs
              </span>
            </div>
            <div className="space-y-3">
              {LEARNING_PATHS_DATA.map((path) => {
                const isSelected = selectedPath.id === path.id;
                const isEnrolled = enrolledPaths.includes(path.id);
                return (
                  <div
                    key={path.id}
                    onClick={() => setSelectedPath(path)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-2.5 ${
                      isSelected
                        ? 'bg-indigo-50/50 border-indigo-500 shadow-md shadow-indigo-100 ring-1 ring-indigo-500'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md">
                        {path.category}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        {path.estimatedWeeks} Weeks
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 font-display">
                      {path.title}
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {path.description}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 font-mono text-[11px]">
                      <span>{path.coursesCount} Courses • {path.enrolledStudents.toLocaleString()} Learners</span>
                      {isEnrolled && (
                        <span className="text-emerald-600 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Enrolled
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Selected Path Roadmap (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
              {/* Path Header */}
              <div className="space-y-4 pb-6 border-b border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                    {selectedPath.level} Level
                  </span>
                  <div className="text-xs text-slate-600 font-medium flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full">
                    <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Target: <strong className="text-slate-900">{selectedPath.careerRole}</strong></span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  {selectedPath.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedPath.description}
                </p>

                <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between text-xs border border-slate-200">
                  <div>
                    <span className="text-slate-500 block text-[10px] font-mono">Industry Target Salary</span>
                    <strong className="text-base text-indigo-700 font-bold font-mono">{selectedPath.averageSalary}</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 block text-[10px] font-mono">Recommended Timeline</span>
                    <strong className="text-base text-slate-900 font-bold font-mono">{selectedPath.estimatedWeeks} Weeks (6-8 hrs/wk)</strong>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Milestone Timeline */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>Curriculum Milestones & Capstone Deliverables</span>
                </h4>

                <div className="space-y-4 relative pl-6 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-0.5 before:bg-indigo-200">
                  {selectedPath.milestones.map((m, idx) => (
                    <div key={idx} className="relative space-y-1.5">
                      <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-indigo-600 border-2 border-white shadow-xs" />
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-indigo-700 uppercase font-mono">
                          {m.phase}
                        </span>
                      </div>
                      <h5 className="text-sm font-bold text-slate-900 font-display">
                        {m.title}
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {m.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {m.skills.map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-mono"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-mono">Accredited digital certificate included</span>
                </div>
                {enrolledPaths.includes(selectedPath.id) ? (
                  <div className="flex items-center gap-2 px-6 py-2.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Track Active in Progress</span>
                  </div>
                ) : (
                  <button
                    onClick={() => handleEnrollPath(selectedPath.id)}
                    className="px-7 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-indigo-600/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
                  >
                    Enroll in This Program
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
