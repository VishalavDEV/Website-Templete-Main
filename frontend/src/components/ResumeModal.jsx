import React from 'react';
import './ResumeModal.css';
import { Download, Printer, X, Briefcase, GraduationCap, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text/markdown or trigger simulated download
    const content = `BEN CARSON - SENIOR FULL STACK DEVELOPER & UI/UX DESIGNER
Location: New York City, NY
Email: ben.carson.dev@gmail.com
Phone: +1 (555) 349-2810

SUMMARY
Senior Software Engineer and UI/UX Designer with 5+ years of experience designing and architecting modern scalable web applications using React, Spring Boot, TypeScript, and cloud technologies.

EXPERIENCE
1. Senior Full Stack Engineer - Veloce Dynamics (2022 - Present)
   - Spearheaded frontend architecture for enterprise SaaS analytics platform handling 1M+ daily events.
   - Built high-performance microservices in Spring Boot 3 & Java 21 with sub-100ms response times.
2. Full Stack Web Developer - Creative Logic Labs (2020 - 2022)
   - Engineered 25+ client web platforms and responsive single-page applications.
   - Designed comprehensive UI component design systems in Figma and React.

EDUCATION
- B.S. in Computer Science - New York University (NYU), 2016 - 2020
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ben_Carson_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Toolbar */}
        <div className="resume-modal-toolbar">
          <h3 className="resume-modal-headline">Ben Carson - Curriculum Vitae</h3>
          <div className="toolbar-actions">
            <button className="toolbar-btn" onClick={handlePrint} title="Print Resume">
              <Printer size={16} />
              <span>Print</span>
            </button>
            <button className="btn-primary toolbar-download-btn" onClick={handleDownload}>
              <Download size={16} />
              <span>Download CV</span>
            </button>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="resume-paper" id="printable-resume">
          {/* Header */}
          <div className="resume-header">
            <h1 className="resume-name">Ben Carson</h1>
            <h2 className="resume-tagline">Senior Full Stack Web Developer & UI/UX Designer</h2>
            <div className="resume-contacts">
              <span><MapPin size={13} /> New York City, NY</span>
              <span><Mail size={13} /> ben.carson.dev@gmail.com</span>
              <span><Phone size={13} /> +1 (555) 349-2810</span>
              <span><Globe size={13} /> bencarson.dev</span>
            </div>
          </div>

          <div className="resume-divider"></div>

          {/* Section: Professional Summary */}
          <div className="resume-section">
            <h3 className="resume-sec-title">Professional Summary</h3>
            <p className="resume-text">
              Results-driven Full Stack Engineer with 5+ years of experience architecting high-throughput web applications and crafting intuitive user interfaces. Adept at full lifecycle software delivery, from concept and UX wireframing in Figma to scalable backend microservices with Spring Boot and reactive SPAs with React.
            </p>
          </div>

          {/* Section: Experience */}
          <div className="resume-section">
            <h3 className="resume-sec-title">
              <Briefcase size={16} />
              Work Experience
            </h3>

            <div className="resume-entry">
              <div className="entry-header">
                <div>
                  <h4 className="entry-title">Senior Full Stack Engineer</h4>
                  <span className="entry-company">Veloce Dynamics — New York, NY</span>
                </div>
                <span className="entry-date">2022 — Present</span>
              </div>
              <ul className="entry-bullets">
                <li>Architected frontend architecture in React 19 & Next.js for SaaS analytics platform with 1M+ daily active sessions.</li>
                <li>Engineered high-throughput REST APIs and Spring Security authentication with JWT and Redis caching.</li>
                <li>Reduced web core vitals LCP time by 45% and improved SEO audit scores from 72 to 99.</li>
              </ul>
            </div>

            <div className="resume-entry">
              <div className="entry-header">
                <div>
                  <h4 className="entry-title">Full Stack Web Developer</h4>
                  <span className="entry-company">Creative Logic Labs — Brooklyn, NY</span>
                </div>
                <span className="entry-date">2020 — 2022</span>
              </div>
              <ul className="entry-bullets">
                <li>Delivered 25+ bespoke custom web portals and responsive client websites on schedule.</li>
                <li>Created a reusable UI component library in React with zero external CSS dependencies.</li>
                <li>Collaborated directly with designers and product owners on sprint planning and agile releases.</li>
              </ul>
            </div>
          </div>

          {/* Section: Education */}
          <div className="resume-section">
            <h3 className="resume-sec-title">
              <GraduationCap size={16} />
              Education
            </h3>
            <div className="resume-entry">
              <div className="entry-header">
                <div>
                  <h4 className="entry-title">B.S. in Computer Science</h4>
                  <span className="entry-company">New York University (NYU)</span>
                </div>
                <span className="entry-date">2016 — 2020</span>
              </div>
              <p className="resume-text">Graduated with Honors (Magna Cum Laude). Focus on Software Engineering & Human-Computer Interaction.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
