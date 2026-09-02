import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROGRAM_TIMELINE } from '../data/programs';
import { FACULTY_MEMBERS } from '../data/faculty';
import { ArrowLeft, Clock, Award, Briefcase, GraduationCap, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ProgramDetails({ onOpenAdmissions }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const program = PROGRAM_TIMELINE.find(p => p.id === id) || PROGRAM_TIMELINE[0];
  const leadFaculty = FACULTY_MEMBERS[0];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0F19]">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/programs')}
          className="mb-8 px-4 py-2 rounded-full glass-panel border border-white/10 text-slate-300 text-xs font-semibold flex items-center gap-2 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL PROGRAMS</span>
        </button>

        {/* Program Header Card */}
        <div className="rounded-3xl glass-panel border border-electric-500/40 p-8 sm:p-12 bg-slate-900/80 mb-12 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono uppercase bg-electric-600 text-white font-bold tracking-wider">
              {program.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-950 text-slate-300 border border-white/10">
              {program.level}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
              Enrolled: {program.enrolledCount}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            {program.title}
          </h1>

          <p className="text-slate-300 text-lg font-light leading-relaxed max-w-3xl">
            {program.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 space-y-1">
              <div className="text-slate-400 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-electric-400" /> DURATION
              </div>
              <div className="text-white font-bold text-sm">{program.duration}</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 space-y-1">
              <div className="text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-violetAccent-400" /> RIGOR INDEX
              </div>
              <div className="text-white font-bold text-sm">{program.difficulty}</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 space-y-1">
              <div className="text-slate-400 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cyan-400" /> CREDENTIAL
              </div>
              <div className="text-white font-bold text-sm">Accredited Diploma</div>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <button
              onClick={() => onOpenAdmissions()}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-electric-600 to-violetAccent-600 text-white font-bold text-xs tracking-wider shadow-lg shadow-electric-500/30"
            >
              ENROLL IN THIS PROGRAM NOW
            </button>
          </div>
        </div>

        {/* Detailed Curriculum & Career Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Core Modules & Syllabus */}
          <div className="md:col-span-7 space-y-8">
            <div className="rounded-3xl glass-panel border border-white/10 p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white font-display flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-electric-400" />
                <span>Curriculum Modules & Syllabus</span>
              </h3>

              <div className="space-y-4">
                {program.subjects.map((subj, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-electric-600/20 text-electric-300 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white font-display">{subj}</h4>
                      <p className="text-xs text-slate-400 font-light mt-1">
                        In-depth theoretical foundation coupled with hands-on lab experiments and continuous assessment.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info: Faculty Chair & Careers */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Career Outcomes */}
            <div className="rounded-3xl glass-panel border border-white/10 p-6 space-y-4">
              <h4 className="text-base font-bold text-white font-display flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-violetAccent-400" />
                <span>Target Career Destinations</span>
              </h4>

              <ul className="space-y-2">
                {program.careerPaths.map((cp, idx) => (
                  <li key={idx} className="text-xs text-slate-300 font-mono flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{cp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lead Program Faculty */}
            <div className="rounded-3xl glass-panel border border-white/10 p-6 space-y-4 bg-slate-950/60">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                PROGRAM FACULTY CHAIR
              </span>

              <div className="flex items-center gap-3">
                <img src={leadFaculty.avatar} alt={leadFaculty.name} className="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <div className="text-sm font-bold text-white font-display">{leadFaculty.name}</div>
                  <div className="text-xs text-electric-300">{leadFaculty.title}</div>
                </div>
              </div>

              <p className="text-xs text-slate-400 font-light">
                "{leadFaculty.bio.slice(0, 120)}..."
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
