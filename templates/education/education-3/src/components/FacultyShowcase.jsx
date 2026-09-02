import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FACULTY_MEMBERS } from '../data/faculty';
import { Award, BookOpen, Mail, ArrowRight, UserCheck } from 'lucide-react';

export default function FacultyShowcase() {
  const navigate = useNavigate();
  const [selectedFacultyId, setSelectedFacultyId] = useState(FACULTY_MEMBERS[0].id);

  const selectedFaculty = FACULTY_MEMBERS.find(f => f.id === selectedFacultyId) || FACULTY_MEMBERS[0];

  return (
    <section className="py-24 relative bg-slate-950/70 overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-electric-400 text-xs font-mono tracking-widest uppercase mb-2">
              <UserCheck className="w-4 h-4" />
              <span>DISTINGUISHED SCHOLARS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Expert Faculty.
            </h2>
          </div>
          <button
            onClick={() => navigate('/faculty')}
            className="text-xs font-mono font-bold text-electric-400 hover:text-electric-300 flex items-center gap-1.5"
          >
            <span>VIEW FULL FACULTY DIRECTORY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Large Single Spotlight Profile Display */}
        <div className="rounded-3xl glass-panel border border-white/10 p-8 sm:p-12 bg-slate-900/60 relative overflow-hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFaculty.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-electric-500/20 text-electric-300 border border-electric-500/30">
                    {selectedFaculty.department}
                  </span>
                  <h3 className="text-3xl sm:text-5xl font-extrabold text-white font-display mt-3 tracking-tight">
                    {selectedFaculty.name}
                  </h3>
                  <p className="text-base text-electric-300 font-medium mt-1">
                    {selectedFaculty.title}
                  </p>
                  <div className="text-xs font-mono text-slate-400 mt-2">
                    {selectedFaculty.experience} • h-index: {selectedFaculty.hIndex}
                  </div>
                </div>

                <p className="text-slate-300 text-sm font-light leading-relaxed max-w-xl">
                  {selectedFaculty.bio}
                </p>

                {/* Research Topics Pill List */}
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                    Primary Research Focus:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedFaculty.researchTopics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-slate-950/80 border border-white/10 text-xs font-mono text-cyan-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Latest Publication Snippet */}
                <div className="p-4 rounded-xl bg-slate-950/90 border border-white/5 space-y-1">
                  <div className="text-[10px] font-mono text-violetAccent-400 font-bold uppercase flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>LATEST PUBLICATION</span>
                  </div>
                  <p className="text-xs text-slate-200 font-serifDisplay italic">
                    "{selectedFaculty.latestPaper}"
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => navigate('/faculty')}
                    className="px-6 py-3 rounded-full bg-electric-600 hover:bg-electric-500 text-white font-bold text-xs tracking-wider shadow-lg shadow-electric-500/20 flex items-center gap-2"
                  >
                    <span>VIEW FULL PROFILE & PAPERS</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={`mailto:${selectedFaculty.email}`}
                    className="p-3 rounded-full glass-panel border border-white/10 text-slate-300 hover:text-white"
                    title="Contact via email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Portrait Image */}
              <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden glass-panel border border-white/10">
                <img
                  src={selectedFaculty.avatar}
                  alt={selectedFaculty.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-panel border border-white/10 text-xs font-mono text-slate-300 flex justify-between">
                  <span>Citations: {selectedFaculty.citationsCount}</span>
                  <span>Papers: {selectedFaculty.publicationsCount}</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Small Instructor Thumbnails Row Underneath */}
        <div className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar">
          {FACULTY_MEMBERS.map((fac) => {
            const isSelected = selectedFacultyId === fac.id;
            return (
              <button
                key={fac.id}
                onClick={() => setSelectedFacultyId(fac.id)}
                className={`p-3 rounded-2xl glass-panel border transition-all duration-300 flex items-center gap-3 shrink-0 ${
                  isSelected
                    ? 'border-electric-400 bg-slate-900 shadow-md shadow-electric-500/20'
                    : 'border-white/10 hover:border-white/20 bg-slate-950/40 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={fac.avatar}
                  alt={fac.name}
                  className="w-10 h-10 rounded-xl object-cover"
                />
                <div className="text-left">
                  <div className="text-xs font-bold text-white font-display">{fac.name}</div>
                  <div className="text-[10px] font-mono text-slate-400">{fac.title.split(' ')[0]}</div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
