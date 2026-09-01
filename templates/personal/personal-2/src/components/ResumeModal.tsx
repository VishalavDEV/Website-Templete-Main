import { X, Download, Printer, ExternalLink, Mail, MapPin, Globe, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA, EXPERIENCES, EDUCATION_LIST, FEATURED_PROJECTS, ACHIEVEMENTS, TECH_UNIVERSE } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Modal Frame */}
      <div className="relative w-full max-w-4xl my-8 rounded-3xl bg-[#090d1c] border border-cyan-500/30 shadow-2xl shadow-cyan-950/80 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 sticky top-0 z-20 backdrop-blur-md print:hidden">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="font-heading font-bold text-base text-white">
              Curriculum Vitae — Arjun Mehta
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 bg-[#090d1c] text-slate-200 font-sans print:p-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                {PROFILE_DATA.name}
              </h1>
              <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase">
                {PROFILE_DATA.role}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {PROFILE_DATA.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                {PROFILE_DATA.email}
              </span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-slate-500" />
                github.com/arjunmehta-ai
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-slate-500" />
                linkedin.com/in/arjunmehta-dev
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="font-heading font-bold text-sm uppercase tracking-widest text-cyan-400">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              AI Engineer and Full-Stack Developer with hands-on expertise building production machine learning pipelines, retrieval-augmented generation (RAG) architectures, computer vision edge models, and scalable cloud backends with Python, FastAPI, React, and PyTorch. Proven track record in hackathons and rapid prototype engineering.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-3">
            <h2 className="font-heading font-bold text-sm uppercase tracking-widest text-cyan-400">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 font-bold block mb-1">AI, ML &amp; FRAMEWORKS:</span>
                <span className="text-slate-200">Python, PyTorch, TensorFlow, LangChain, OpenCV, YOLO, HuggingFace Transformers, OpenAI API, Gemini SDK</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 font-bold block mb-1">BACKEND &amp; CLOUD:</span>
                <span className="text-slate-200">FastAPI, Node.js, Express, PostgreSQL (pgvector), MongoDB, Redis, Docker, AWS (EC2/S3/Lambda), Git CI/CD</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="font-heading font-bold text-sm uppercase tracking-widest text-cyan-400">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="font-heading font-bold text-sm sm:text-base text-white">
                      {exp.role} <span className="text-cyan-400 font-normal">@ {exp.company}</span>
                    </span>
                    <span className="font-mono text-xs text-slate-400">{exp.duration}</span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300 list-disc pl-5">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="font-heading font-bold text-sm uppercase tracking-widest text-cyan-400">
              Key Engineering Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURED_PROJECTS.map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="font-heading font-bold text-sm text-white">{p.title}</span>
                    <span className="font-mono text-[10px] text-cyan-400">{p.technologies.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Honors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-800">
            <div className="space-y-2">
              <h2 className="font-heading font-bold text-sm uppercase tracking-widest text-cyan-400">
                Education
              </h2>
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.id} className="text-xs space-y-0.5">
                  <div className="font-bold text-white">{edu.degree}</div>
                  <div className="text-slate-400">{edu.institution} • {edu.period}</div>
                  <div className="text-slate-500 font-mono">{edu.focus}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h2 className="font-heading font-bold text-sm uppercase tracking-widest text-cyan-400">
                Honors &amp; Certifications
              </h2>
              <ul className="text-xs space-y-1 text-slate-300">
                <li>• <strong>1st Place</strong> — AI Innovations Hackathon 2024</li>
                <li>• <strong>Top 5 Finalist</strong> — National ML Challenge</li>
                <li>• <strong>DeepLearning.AI Specialization</strong></li>
                <li>• <strong>AWS Certified Cloud Practitioner</strong></li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
