import React from 'react';
import { X, Download, Printer, CheckCircle, ExternalLink, Briefcase, GraduationCap, Code } from 'lucide-react';
import { personalInfo, experienceData, educationData, skillsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate a clean text / PDF resume download simulation
    const resumeText = `
${personalInfo.name} - ${personalInfo.role}
Email: ${personalInfo.email} | Location: ${personalInfo.location} | Experience: ${personalInfo.experienceYears}

SUMMARY:
${personalInfo.bioAbout}

EXPERIENCE:
${experienceData.map(exp => `
* ${exp.role} @ ${exp.company} (${exp.period})
  ${exp.description.join('\n  ')}
  Tech: ${exp.technologies.join(', ')}
`).join('\n')}

EDUCATION:
${educationData.map(edu => `
* ${edu.degree} - ${edu.institution} (${edu.period})
  Grade: ${edu.grade}
  ${edu.description}
`).join('\n')}

CORE SKILLS:
${skillsData.map(s => s.name).join(', ')}
    `;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Arjun_Dev_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-gray-800 relative max-h-[90vh] flex flex-col">
        
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800 mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Arjun Dev - Resume
            </h3>
            <p className="text-xs text-gray-400">
              Full Stack Developer • 2+ Years Experience
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print Resume"
              className="p-2 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 text-white text-xs font-medium px-4 py-2 rounded-full shadow-xs transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document View */}
        <div className="overflow-y-auto space-y-6 pr-2 text-gray-700 dark:text-gray-300 text-sm">
          
          {/* Top Header Card */}
          <div className="bg-gray-50 dark:bg-gray-800/80 p-4 rounded-2xl border border-gray-100 dark:border-gray-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">{personalInfo.name}</div>
              <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold">{personalInfo.role}</div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 sm:text-right">
              <div>{personalInfo.email}</div>
              <div>{personalInfo.location}</div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-3">
              <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Work Experience</span>
            </div>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="p-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-2xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-gray-900 dark:text-white">{exp.role}</span>
                    <span className="text-xs text-gray-400 font-medium">{exp.period}</span>
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {exp.company} • {exp.location}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-gray-500 dark:text-gray-400">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-3">
              <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Education</span>
            </div>
            <div className="space-y-3">
              {educationData.map((edu) => (
                <div key={edu.id} className="p-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-2xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white text-xs">{edu.degree}</div>
                      <div className="text-xs text-gray-500">{edu.institution}</div>
                    </div>
                    <span className="text-[11px] text-gray-400">{edu.period}</span>
                  </div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                    {edu.grade}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Technologies */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-3">
              <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Skills & Tools</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skillsData.map((skill) => (
                <span
                  key={skill.id}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200/60 dark:border-gray-700"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
