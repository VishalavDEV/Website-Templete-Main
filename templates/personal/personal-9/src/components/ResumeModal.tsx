import React from 'react';
import { X, Download, Printer, MapPin, Mail, Globe, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_DATA, ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, darkMode }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div
        className={`relative w-full max-w-4xl rounded-3xl border shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col ${
          darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="font-bold text-base">Arjun Mehta — Resume</span>
            <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              PDF Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto text-left space-y-8 print:p-0">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold font-heading tracking-tight text-slate-900 dark:text-white">
                Arjun Mehta
              </h1>
              <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-1">
                AI Engineer & Full-Stack Developer
              </p>
            </div>

            <div className="flex flex-col text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-500" />
                Bengaluru, Karnataka, India
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-500" />
                arjunmehta.dev
              </span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              Innovative AI Engineer and Full-Stack Developer experienced in building production LLM pipelines, computer vision systems, and modern web applications. Passionate about marrying cutting-edge neural architectures with accessible, human-first UX.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Code className="w-4 h-4 text-blue-500" />
              <span>Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white">AI / ML & LLMs:</span>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  PyTorch, TensorFlow, Hugging Face, LangChain, LlamaIndex, RAG Pipelines, Fine-tuning, YOLOv9, OpenCV, Embeddings & Vector Search (pgvector, ChromaDB).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white">Full-Stack & Systems:</span>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Python, TypeScript, JavaScript, FastAPI, Node.js, Express, React, Tailwind CSS, PostgreSQL, MongoDB, Redis, Docker, Git, CI/CD.
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-indigo-500" />
              <span>Work Experience</span>
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-blue-500 pl-4 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {exp.role} — <span className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-500">{exp.year}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {exp.description} Developed microservice infrastructure, optimized latency, and implemented continuous integration routines.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-purple-500" />
              <span>Education</span>
            </h2>
            <div className="border-l-2 border-purple-500 pl-4 space-y-1">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {EDUCATION_DATA.degree}
                </h3>
                <span className="text-xs font-mono text-slate-500">{EDUCATION_DATA.period}</span>
              </div>
              <p className="text-xs text-purple-600 dark:text-purple-400 font-semibold">
                {EDUCATION_DATA.institution} • {EDUCATION_DATA.cgpa}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Coursework: {EDUCATION_DATA.coursework.join(', ')}
              </p>
            </div>
          </div>

          {/* Honors & Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Honors & Certifications</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {ACHIEVEMENTS.map(ach => (
                <div key={ach.id} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <span className="font-semibold">{ach.title}</span>
                  <span className="text-slate-500 text-[11px]">— {ach.subtitle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
