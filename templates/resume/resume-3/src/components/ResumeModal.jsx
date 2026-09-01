import React from 'react';
import { X, Download, Printer, CheckCircle, FileText, Globe, MapPin, Mail } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, RECOGNITION } from '../data/resumeData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[90] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-white text-slate-900 rounded-xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative border border-slate-300 font-sans">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="sticky top-0 bg-slate-900 text-white px-6 py-4 flex items-center justify-between z-20 border-b border-slate-800 font-mono-tech print:hidden">
          <div className="flex items-center space-x-3">
            <FileText className="w-5 h-5 text-sky-400" />
            <span className="text-xs uppercase font-bold tracking-widest text-sky-300">
              CURRICULUM VITAE // DR. ARIN SOLBERG
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print CV</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Document Body */}
        <div className="p-8 sm:p-12 space-y-8 bg-white" id="cv-document-print">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl font-bold font-heading text-slate-900 uppercase tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-mono-tech font-bold text-sky-700 uppercase tracking-wider mt-1">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-slate-500 font-mono-tech mt-1">
                PROFILE ID: {PERSONAL_INFO.profileId} • SPECIALIZATION: SPACECRAFT SYSTEMS
              </p>
            </div>

            <div className="font-mono-tech text-xs text-slate-600 space-y-1 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-sky-600" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5 text-slate-400">
                <Globe className="w-3.5 h-3.5 text-sky-600" />
                <span>Norwegian Citizen (Fictional)</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono-tech font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-3">
              1.0 PROFESSIONAL PROFILE
            </h2>
            <p className="text-xs leading-relaxed text-slate-700">
              {PERSONAL_INFO.bioParagraphs[0]} {PERSONAL_INFO.bioParagraphs[1]}
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs font-mono-tech font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-3">
              2.0 CORE TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono-tech">
              {PERSONAL_INFO.disciplines.map((d, i) => (
                <div key={i} className="p-2 bg-slate-50 border border-slate-200 rounded font-semibold text-slate-800">
                  • {d}
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h2 className="text-xs font-mono-tech font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-4">
              3.0 PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-6">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-baseline font-mono-tech">
                    <span className="text-sm font-bold text-slate-900">{exp.role}</span>
                    <span className="text-xs text-sky-800 font-bold">{exp.period}</span>
                  </div>
                  <div className="text-xs font-mono-tech text-slate-600 font-semibold">
                    {exp.company} — {exp.location}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 pl-1 font-sans">
                    {exp.responsibilities.slice(0, 3).map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Background */}
          <div>
            <h2 className="text-xs font-mono-tech font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-4">
              4.0 EDUCATION &amp; ACADEMIC DEGREES
            </h2>

            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-baseline font-mono-tech">
                    <span className="text-xs font-bold text-slate-900">{edu.degree}</span>
                    <span className="text-xs text-slate-500">{edu.period}</span>
                  </div>
                  <div className="text-xs font-mono-tech text-slate-600">
                    {edu.institution} • {edu.location}
                  </div>
                  {edu.thesis && (
                    <div className="text-[11px] text-slate-500 italic">
                      Thesis: "{edu.thesis}"
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Fictional Disclaimer */}
          <div className="pt-6 border-t border-slate-200 text-center text-[10px] font-mono-tech text-slate-400">
            * Demonstration Resume Document for Fictional Profile: Dr. Arin Solberg. All details are fictional.
          </div>

        </div>

      </div>
    </div>
  );
}
