import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Mail, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { profileData, experienceData, educationData, publications, recognitionData } from '../data/researchData';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1E1B4B]/50 backdrop-blur-sm print:p-0 print:bg-white print:static">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className="bg-white border border-[#E6E6E0] w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl p-8 sm:p-14 relative print:max-h-none print:shadow-none print:border-none print:p-0"
        >
          {/* TOP ACTIONS BAR (HIDDEN WHEN PRINTING) */}
          <div className="flex items-center justify-between border-b border-[#E6E6E0] pb-6 mb-8 print:hidden">
            <div>
              <span className="font-mono-tag text-xs text-[#4A6B5D] uppercase tracking-widest font-semibold block">
                CURRICULUM VITAE DOCUMENT
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#1E1B4B]">
                Dr. Mira Ellison &bull; Academic CV
              </h2>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrint}
                className="inline-flex items-center space-x-2 bg-[#1E1B4B] text-white px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-[#2A2F45] transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 text-[#6B7280] hover:text-[#1E1B4B] rounded-full border border-[#E6E6E0]"
                aria-label="Close CV preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* PRINTABLE CV BODY */}
          <div className="space-y-10 font-sans text-[#1E1B4B]">
            
            {/* CV HEADER */}
            <div className="border-b-2 border-[#1E1B4B] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#1E1B4B]">
                  DR. MIRA ELLISON
                </h1>
                <p className="font-mono-tag text-xs text-[#4A6B5D] tracking-widest uppercase mt-1">
                  BEHAVIORAL RESEARCHER & PSYCHOLOGY PROFESSIONAL
                </p>
                <p className="text-xs text-[#6B7280] mt-1 italic">
                  Specialization: Human Behavior, Decision-Making & Cognitive Adaptation
                </p>
              </div>

              <div className="space-y-1 font-mono-tag text-xs text-[#6B7280] sm:text-right">
                <p>Amsterdam, Netherlands</p>
                <p>hello@miraellison.example</p>
                <p>www.miraellison.example</p>
              </div>
            </div>

            {/* PROFESSIONAL SUMMARY */}
            <div className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-[#1E1B4B] uppercase tracking-wider border-b border-[#E6E6E0] pb-1">
                Executive Profile
              </h3>
              <p className="text-xs text-[#4B5563] leading-relaxed font-light">
                {profileData.biography[0]}
              </p>
            </div>

            {/* RESEARCH APPOINTMENTS */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#1E1B4B] uppercase tracking-wider border-b border-[#E6E6E0] pb-1">
                Research Appointments & Experience
              </h3>

              <div className="space-y-6">
                {experienceData.map((exp, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-baseline justify-between text-xs">
                      <span className="font-bold text-[#1E1B4B] font-serif text-base">{exp.role}</span>
                      <span className="font-mono-tag text-[#6B7280]">{exp.period}</span>
                    </div>
                    <div className="font-mono-tag text-xs text-[#4A6B5D]">
                      {exp.organization} &bull; {exp.location} ({exp.type})
                    </div>
                    <p className="text-xs text-[#6B7280] font-light">
                      {exp.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* EDUCATION */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#1E1B4B] uppercase tracking-wider border-b border-[#E6E6E0] pb-1">
                Academic Foundation & Education
              </h3>

              <div className="space-y-4">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="flex justify-between text-xs">
                    <div>
                      <h4 className="font-bold text-[#1E1B4B] font-serif text-base">{edu.degree}</h4>
                      <p className="font-mono-tag text-[#4A6B5D]">{edu.institution} &bull; {edu.location}</p>
                      {edu.dissertation && <p className="text-[11px] text-[#6B7280] italic mt-0.5">{edu.dissertation}</p>}
                    </div>
                    <span className="font-mono-tag text-[#6B7280] shrink-0 ml-4">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SELECTED PUBLICATIONS */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#1E1B4B] uppercase tracking-wider border-b border-[#E6E6E0] pb-1">
                Selected Peer-Reviewed Publications (Fictional)
              </h3>

              <div className="space-y-3">
                {publications.slice(0, 4).map((pub, idx) => (
                  <div key={idx} className="text-xs space-y-0.5">
                    <p className="font-semibold text-[#1E1B4B]">
                      Ellison, M. ({pub.year}). "{pub.title}". <span className="italic text-[#4A6B5D]">{pub.journal}</span>, {pub.volume}, {pub.pages}.
                    </p>
                    <p className="text-[10px] text-[#9CA3AF] font-mono-tag">DOI: {pub.doi} &bull; Fictional Publication</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RECOGNITION */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#1E1B4B] uppercase tracking-wider border-b border-[#E6E6E0] pb-1">
                Awards & Academic Recognition
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono-tag">
                {recognitionData.map((rec, idx) => (
                  <div key={idx} className="p-3 bg-[#FAFAFA] border border-[#E6E6E0]">
                    <span className="font-bold text-[#1E1B4B]">{rec.year}</span>
                    <p className="font-serif font-bold text-[#2A2F45] mt-1">{rec.title}</p>
                    <p className="text-[10px] text-[#6B7280] mt-0.5">{rec.organization}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FOOTER DISCLAIMER */}
            <div className="pt-6 border-t border-[#E6E6E0] text-center font-mono-tag text-[10px] text-[#9CA3AF]">
              *This CV document is a fictional demonstration profile for Dr. Mira Ellison. All institutions, publications, and honors are fictional entities.
            </div>

          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
