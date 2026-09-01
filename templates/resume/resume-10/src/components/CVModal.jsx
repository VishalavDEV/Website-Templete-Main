import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Mail, MapPin, Globe, Film } from 'lucide-react';
import {
  directorProfile,
  selectedFilms,
  careerExperience,
  productionToolkit,
  educationList,
  awardsList,
  disclaimerText
} from '../data/directorData';

const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-neutral-300 shadow-2xl relative p-6 sm:p-12 text-neutral-900"
        >
          {/* TOP ACTION BAR (Hidden during print) */}
          <div className="no-print flex items-center justify-between border-b border-neutral-200 pb-4 mb-8">
            <div className="flex items-center gap-2 font-mono-meta text-xs tracking-widest text-neutral-500 uppercase">
              <Film className="w-4 h-4 text-neutral-900" />
              <span>DIRECTOR CURRICULUM VITAE</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-950 text-white font-mono-meta text-xs tracking-widest uppercase hover:bg-neutral-800 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 bg-neutral-100 hover:bg-neutral-900 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* PRINTABLE RESUME BODY */}
          <div className="space-y-8">
            
            {/* Header / Contact Info */}
            <div className="border-b-2 border-neutral-900 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="font-serif-title text-4xl sm:text-5xl font-normal text-neutral-950 uppercase tracking-tight">
                  {directorProfile.name}
                </h1>
                <p className="font-mono-meta text-xs tracking-[0.2em] font-bold text-neutral-700 uppercase mt-1">
                  {directorProfile.title}
                </p>
                <p className="font-serif-title italic text-sm text-neutral-500 mt-1">
                  "{directorProfile.tagline}"
                </p>
              </div>

              <div className="font-mono-meta text-xs text-neutral-600 space-y-1 sm:text-right">
                <div><span className="text-neutral-400">LOCATION / </span>{directorProfile.location}</div>
                <div><span className="text-neutral-400">EXPERIENCE / </span>{directorProfile.experienceYears}</div>
                <div><span className="text-neutral-400">EMAIL / </span>{directorProfile.email}</div>
              </div>
            </div>

            {/* Profile Overview */}
            <div>
              <h2 className="font-mono-meta text-xs font-bold text-neutral-900 tracking-widest uppercase mb-2 border-b border-neutral-200 pb-1">
                PROFESSIONAL PROFILE
              </h2>
              <p className="text-xs text-neutral-700 leading-relaxed font-light">
                {directorProfile.extendedBio}
              </p>
            </div>

            {/* Selected Filmography */}
            <div>
              <h2 className="font-mono-meta text-xs font-bold text-neutral-900 tracking-widest uppercase mb-3 border-b border-neutral-200 pb-1">
                SELECTED FILMOGRAPHY (WRITER & DIRECTOR)
              </h2>
              <div className="space-y-4">
                {selectedFilms.map(film => (
                  <div key={film.id} className="border-l-2 border-neutral-900 pl-4 py-1">
                    <div className="flex items-center justify-between text-xs font-mono-meta font-bold text-neutral-950">
                      <span>{film.title} ({film.year})</span>
                      <span className="text-neutral-500 font-normal">{film.genre} • {film.runtime}</span>
                    </div>
                    <div className="font-mono-meta text-[11px] text-neutral-600">
                      <span className="font-bold">Role:</span> {film.role} | <span className="font-bold">Studio:</span> {film.studio}
                    </div>
                    <p className="text-xs text-neutral-600 font-light mt-1">
                      {film.synopsis}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Experience */}
            <div>
              <h2 className="font-mono-meta text-xs font-bold text-neutral-900 tracking-widest uppercase mb-3 border-b border-neutral-200 pb-1">
                DIRECTORIAL EXPERIENCE
              </h2>
              <div className="space-y-4">
                {careerExperience.map((exp, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono-meta">
                      <span className="font-bold text-neutral-950">{exp.role} — {exp.company}</span>
                      <span className="text-neutral-500">{exp.period}</span>
                    </div>
                    <div className="font-mono-meta text-[10px] text-neutral-500 uppercase">
                      {exp.companyType} • {exp.location}
                    </div>
                    <ul className="list-disc list-inside text-xs text-neutral-700 font-light space-y-0.5 pt-1">
                      {exp.contributions.map((c, cIdx) => (
                        <li key={cIdx}>{c}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Recognition */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h2 className="font-mono-meta text-xs font-bold text-neutral-900 tracking-widest uppercase mb-2 border-b border-neutral-200 pb-1">
                  EDUCATION & TRAINING
                </h2>
                <div className="space-y-3 font-mono-meta text-xs">
                  {educationList.map((edu, idx) => (
                    <div key={idx}>
                      <div className="font-bold text-neutral-950">{edu.degree}</div>
                      <div className="text-[11px] text-neutral-600">{edu.institution} ({edu.period})</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-mono-meta text-xs font-bold text-neutral-900 tracking-widest uppercase mb-2 border-b border-neutral-200 pb-1">
                  HONORS & RECOGNITION
                </h2>
                <div className="space-y-3 font-mono-meta text-xs">
                  {awardsList.map((award, idx) => (
                    <div key={idx}>
                      <div className="font-bold text-neutral-950">{award.award} ({award.year})</div>
                      <div className="text-[11px] text-neutral-600">{award.organization} — {award.project}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Disclaimer Footer */}
            <div className="pt-6 border-t border-neutral-200 text-center font-mono-meta text-[10px] text-neutral-400 uppercase tracking-widest">
              {disclaimerText}
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CVModal;
