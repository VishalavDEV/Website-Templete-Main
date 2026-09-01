import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  Download,
  Printer,
  Copy,
  Check,
  Award,
  GraduationCap,
  Briefcase,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  PERSONAL_INFO,
  EXPERIENCE,
  EDUCATION,
  CERTIFICATIONS,
  ACHIEVEMENTS,
} from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [activeResumeTab, setActiveResumeTab] = useState<'preview' | 'timeline' | 'citations'>('preview');

  const handleDownloadCV = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#eab308', '#f59e0b', '#ffffff', '#10b981'],
    });

    // Create a generated high-formatted text resume / simulated PDF download
    const cvContent = `
============================================================
${PERSONAL_INFO.fullName.toUpperCase()}
${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}
Website / Portfolio: https://julianriviera.studio
============================================================

EXECUTIVE SUMMARY:
${PERSONAL_INFO.shortBio}

CORE COMPETENCIES:
• Architecture: React 19, TypeScript, Next.js, WebGPU, Micro-Frontends
• AI Engineering: Multimodal Interfaces, Gemini 2.5, WebSockets, Vector DBs
• Motion & Design: Tailwind CSS, Framer Motion, Design Tokens, WCAG AAA
• Cloud & Systems: Node.js, Express, Docker, Cloud Run, Edge Runtimes

PROFESSIONAL EXPERIENCE:
${EXPERIENCE.map(
  (e) => `
* ${e.role.toUpperCase()} — ${e.company} (${e.period})
  - Location: ${e.location}
  - Responsibilities:
    ${e.responsibilities.map((r) => `• ${r}`).join('\n    ')}
  - Key Achievements:
    ${e.achievements.map((a) => `• ${a}`).join('\n    ')}
  - Technologies: ${e.techStack.join(', ')}
`
).join('\n')}

EDUCATION:
${EDUCATION.map(
  (ed) => `
* ${ed.degree} in ${ed.field}
  - ${ed.institution} (${ed.period})
  - Honors: ${ed.gpaOrHonors}
  - Thesis: ${ed.thesis}
`
).join('\n')}

CERTIFICATIONS & HONORS:
${CERTIFICATIONS.map((c) => `* ${c.title} — ${c.issuer} (${c.issueDate}, ID: ${c.credentialId})`).join('\n')}
${ACHIEVEMENTS.map((a) => `* ${a.badge}: ${a.title} (${a.organization}, ${a.year})`).join('\n')}

============================================================
`;
    const blob = new Blob([cvContent.trim()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Sakthi_Ravi_Staff_Creative_Technologist_CV.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyCitation = () => {
    const citation = `Sakthivel Ravichandran. (2025). Principal Creative Technologist & AI Experience Architect Portfolio. San Francisco, CA. contact.sakthii19@gmail.com`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="resume"
      className="relative py-28 bg-neutral-950 text-white border-t border-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-amber-400 mb-3">
              <FileText size={14} />
              <span>06 / CURRICULUM VITAE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white max-w-2xl">
              Professional Credentials & <span className="text-amber-400">Dossier</span>.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mt-3 max-w-xl">
              A comprehensive summary of academic honors, staff engineering leadership, and recognized industry certifications.
            </p>
          </div>

          {/* Action Buttons: Download CV & Print */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              id="resume-copy-citation-btn"
              onClick={handleCopyCitation}
              className="px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white hover:border-neutral-700 transition-all flex items-center gap-2"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'Citation Copied!' : 'Copy Citation'}</span>
            </button>

            <button
              type="button"
              id="resume-download-full-cv-btn"
              onClick={handleDownloadCV}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-neutral-950 font-bold text-xs tracking-wide shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Download size={14} />
              <span>Download Official CV</span>
            </button>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-2 mb-8 p-1.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 w-fit">
          <button
            type="button"
            onClick={() => setActiveResumeTab('preview')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              activeResumeTab === 'preview'
                ? 'bg-amber-400 text-neutral-950 font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Visual Dossier Preview
          </button>
          <button
            type="button"
            onClick={() => setActiveResumeTab('timeline')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              activeResumeTab === 'timeline'
                ? 'bg-amber-400 text-neutral-950 font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Structured Overview
          </button>
        </div>

        {/* Visual PDF Preview Card */}
        {activeResumeTab === 'preview' && (
          <div className="rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl p-6 sm:p-10 relative overflow-hidden backdrop-blur-md">
            
            {/* Top Toolbar */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-neutral-800 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="font-mono text-xs text-neutral-400 ml-2">
                  Sakthi_Ravi_Dossier_2025.pdf
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setZoomLevel((prev) => Math.max(80, prev - 10))}
                  className="p-1.5 rounded-lg bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800"
                  title="Zoom Out"
                >
                  <ZoomOut size={14} />
                </button>
                <span className="text-xs font-mono text-neutral-400 px-2">{zoomLevel}%</span>
                <button
                  type="button"
                  onClick={() => setZoomLevel((prev) => Math.min(130, prev + 10))}
                  className="p-1.5 rounded-lg bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800"
                  title="Zoom In"
                >
                  <ZoomIn size={14} />
                </button>
              </div>
            </div>

            {/* Rendered Document Sheet */}
            <div
              style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
              className="max-w-4xl mx-auto bg-neutral-950 border border-neutral-800/90 rounded-2xl p-8 sm:p-12 shadow-2xl transition-transform duration-200"
            >
              {/* Document Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-8 mb-8 border-b border-neutral-800 gap-6">
                <div>
                  <h1 className="font-display font-black text-3xl text-white tracking-tight">
                    {PERSONAL_INFO.fullName}
                  </h1>
                  <p className="font-mono text-amber-400 text-sm font-semibold mt-1">
                    {PERSONAL_INFO.title}
                  </p>
                  <p className="text-xs text-neutral-400 mt-2 max-w-xl font-sans">
                    {PERSONAL_INFO.shortBio}
                  </p>
                </div>
                <div className="flex flex-col text-xs font-mono text-neutral-400 space-y-1 sm:text-right shrink-0">
                  <span>{PERSONAL_INFO.location}</span>
                  <span className="text-amber-400">{PERSONAL_INFO.email}</span>
                  <span>{PERSONAL_INFO.phone}</span>
                  <span>github.com/sakthi-ravi</span>
                </div>
              </div>

              {/* Document Section: Experience */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest font-bold mb-4">
                  <Briefcase size={14} />
                  <span>Selected Leadership & Staff Experience</span>
                </div>
                <div className="space-y-6">
                  {EXPERIENCE.slice(0, 3).map((exp) => (
                    <div key={exp.id} className="flex flex-col">
                      <div className="flex items-baseline justify-between flex-wrap gap-2">
                        <span className="font-display font-bold text-white text-base">
                          {exp.role} · <span className="text-neutral-300 font-semibold">{exp.company}</span>
                        </span>
                        <span className="font-mono text-xs text-neutral-400">{exp.period}</span>
                      </div>
                      <p className="text-xs text-neutral-400 mt-1 font-sans">
                        {exp.description}
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-neutral-300">
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-amber-400">•</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Document Section: Education */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest font-bold mb-4">
                  <GraduationCap size={14} />
                  <span>Academic Foundations</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {EDUCATION.map((edu) => (
                    <div key={edu.id} className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                      <div className="font-display font-bold text-sm text-white">{edu.degree}</div>
                      <div className="text-xs text-amber-400 font-mono mt-0.5">{edu.field}</div>
                      <div className="text-xs text-neutral-400 mt-1">{edu.institution} ({edu.period})</div>
                      <div className="text-[11px] text-emerald-400 font-mono mt-1">{edu.gpaOrHonors}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Document Section: Key Accolades */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest font-bold mb-4">
                  <Award size={14} />
                  <span>Recognitions & Certifications</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
                  {ACHIEVEMENTS.map((a) => (
                    <div key={a.id} className="flex items-center gap-2">
                      <span className="text-amber-400 font-bold">✓</span>
                      <span><strong>{a.badge}</strong>: {a.organization}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Structured Timeline View */}
        {activeResumeTab === 'timeline' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Academic Path */}
            <div className="p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest font-bold mb-6">
                <GraduationCap size={16} />
                <span>Degrees & Honors</span>
              </div>
              <div className="space-y-6">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800">
                    <div className="font-display font-bold text-white text-base">{edu.degree} in {edu.field}</div>
                    <div className="text-xs font-mono text-amber-400 mt-1">{edu.institution} · {edu.period}</div>
                    <div className="text-xs text-neutral-300 mt-2 font-medium">Thesis: {edu.thesis}</div>
                    <ul className="mt-3 space-y-1 text-xs text-neutral-400">
                      {edu.keyHighlights.map((kh, i) => (
                        <li key={i}>• {kh}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Certifications */}
            <div className="p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest font-bold mb-6">
                <Award size={16} />
                <span>Verified Certifications</span>
              </div>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
                    <div>
                      <div className="font-display font-bold text-white text-sm">{cert.title}</div>
                      <div className="text-xs font-mono text-neutral-400 mt-0.5">{cert.issuer} · Issued {cert.issueDate}</div>
                      <div className="text-[11px] font-mono text-amber-400 mt-1">ID: {cert.credentialId}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
