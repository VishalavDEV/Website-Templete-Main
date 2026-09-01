import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, Sparkles, Layers, Clock, ArrowRight, Award, Compass } from 'lucide-react';
import { api } from '../services/api';

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPrograms() {
      try {
        const data = await api.getPrograms();
        setPrograms(data);
        if (data.length > 0) {
          setSelectedProgram(data[0]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadPrograms();
  }, []);

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-6 font-outfit">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-600 text-xs font-semibold uppercase tracking-wider"
          >
            <Compass className="animate-spin" style={{ animationDuration: '6s' }} size={12} />
            Career Tracks
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-education-navy"
          >
            Structured Paths to Mastery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-education-navy/70 leading-relaxed"
          >
            Go from zero to industry-ready. Follow an animated step-by-step curriculum stage path designed to build production competence.
          </motion.p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 rounded-full border-4 border-sky-200 border-t-sky-500 animate-spin" />
          </div>
        ) : (
          <div className="space-y-12">
            
            {/* Top Selector Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {programs.map((prog) => {
                const isSelected = selectedProgram?.id === prog.id;
                return (
                  <button
                    key={prog.id}
                    onClick={() => setSelectedProgram(prog)}
                    className={`p-5 rounded-3xl text-left border flex flex-col justify-between h-48 transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-br from-sky-400 to-cyan-400 border-transparent text-white shadow-lg shadow-sky-200/50 scale-[1.02]'
                        : 'bg-white/60 backdrop-blur-sm border-sky-100/50 text-education-navy hover:border-sky-200 hover:bg-white/85'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-sky-50 text-sky-600'
                        }`}>
                          {prog.difficulty}
                        </span>
                        <span className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>
                          {prog.duration}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-sm leading-snug">{prog.title}</h3>
                      <p className={`text-xs leading-relaxed line-clamp-2 ${isSelected ? 'text-white/85' : 'text-education-navy/75'}`}>
                        {prog.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between w-full pt-4 border-t border-white/25 mt-2 text-xs font-semibold">
                      <span>{prog.coursesCount} Courses included</span>
                      <span className="flex items-center gap-0.5">
                        View Path <ArrowRight size={14} />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Stage Path Visual timeline */}
            {selectedProgram && (
              <div className="p-6 sm:p-10 rounded-[36px] border border-sky-100 bg-white/70 backdrop-blur-md shadow-inner space-y-10">
                <div className="text-center space-y-1">
                  <h3 className="font-extrabold text-lg text-education-navy">{selectedProgram.title} Roadmap</h3>
                  <p className="text-xs text-education-navy/60">Follow this connecting stage path chronologically.</p>
                </div>

                {/* Connectors Layout */}
                <div className="relative py-6 overflow-x-auto flex items-center justify-start lg:justify-center gap-8 md:gap-14 px-4 scrollbar-thin">
                  {selectedProgram.stages.map((stageName, index) => {
                    const isLast = index === selectedProgram.stages.length - 1;
                    return (
                      <React.Fragment key={index}>
                        {/* Stage Node */}
                        <div className="flex flex-col items-center text-center flex-shrink-0 w-36 relative">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400 to-cyan-400 text-white font-extrabold flex items-center justify-center shadow-md shadow-sky-100 z-10">
                            0{index + 1}
                          </div>
                          
                          <div className="mt-4 space-y-1 max-w-[130px]">
                            <h4 className="font-bold text-xs text-education-navy leading-tight">{stageName}</h4>
                            <span className="text-[10px] text-sky-500 font-bold uppercase tracking-wider">
                              {index === 0 ? 'Foundation' : isLast ? 'Capstone' : 'Core'}
                            </span>
                          </div>
                        </div>

                        {/* Connecting Line */}
                        {!isLast && (
                          <div className="flex-shrink-0 w-12 md:w-16 h-0.5 bg-gradient-to-r from-sky-300 to-cyan-300 relative z-0 hidden sm:block">
                            {/* Glowing flowing node animation */}
                            <motion.div
                              animate={{ left: ['0%', '100%'] }}
                              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 blur-[1px] shadow-md shadow-cyan-100"
                            />
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                <div className="flex justify-center pt-4">
                  <Link
                    to="/courses"
                    className="px-6 py-2.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-tr from-sky-400 to-cyan-400 hover:shadow-lg transition-shadow"
                  >
                    Enroll in Track Courses
                  </Link>
                </div>

              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
