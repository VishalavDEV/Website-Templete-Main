import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, ZoomOut, Download, X, FileText, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function ResumeViewer({ profile, skills, projects, experience, education, certs, onClose }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 2;

  const handleZoomIn = () => setZoomLevel(prev => Math.min(1.4, prev + 0.1));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(0.7, prev - 0.1));

  const handleDownload = () => {
    // Generate text/markdown export download
    const resumeText = `================================================
VISHAL SHARMA - FULL STACK DEVELOPER & AI ENGINEER
Email: vishal.dev@os.portfolio | Location: San Francisco, CA
================================================

SUMMARY:
Architecting high-performance web systems and intelligent interactive experiences.
Specializing in React.js, Java 21, Spring Boot REST APIs, and modern SPA microservices.

SKILLS:
- Frontend: React.js, JavaScript (ES6+), TypeScript, GSAP, Framer Motion
- Backend: Java 21, Spring Boot 3.3, REST APIs, Python
- Tools & AI: Git, Docker, Vite, OpenAI APIs

EXPERIENCE & PROJECTS:
- Smart City Traffic Dashboard (React + Spring Boot WebSockets)
- Headless E-Commerce Platform (React + Java REST API)
- Real-Time AI Defect Detection Pipeline (Python + Java + React)

EDUCATION:
- B.S. in Computer Science - California State University (GPA 3.9/4.0)

CERTIFICATIONS:
- Spring Certified Professional Developer
- Meta Certified Senior React Developer
================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Vishal_Sharma_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', height: '100%' }}>
      {/* PDF Toolbar */}
      <div style={{
        backgroundColor: 'var(--soft-gray)',
        borderRadius: '10px',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
          <FileText size={18} color="#EF4444" />
          <span>RESUME.PDF</span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 500 }}>(2 Pages • {Math.round(zoomLevel * 100)}%)</span>
        </div>

        {/* Toolbar Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <button onClick={handleZoomOut} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 10px', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface)', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}>
            <ZoomOut size={14} /> ZOOM −
          </button>
          <button onClick={handleZoomIn} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 10px', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface)', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}>
            <ZoomIn size={14} /> ZOOM +
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginLeft: '6px' }}>
            <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1} style={{ padding: '6px', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface)', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}>
              <ChevronLeft size={14} />
            </button>
            <span style={{ fontSize: '12px', fontWeight: 600 }}>{currentPage} / {totalPages}</span>
            <button onClick={() => setCurrentPage(2)} disabled={currentPage === 2} style={{ padding: '6px', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface)', cursor: currentPage === 2 ? 'not-allowed' : 'pointer' }}>
              <ChevronRight size={14} />
            </button>
          </div>

          <button onClick={handleDownload} className="accent-btn" style={{ padding: '6px 14px', fontSize: '12px' }}>
            <Download size={14} /> DOWNLOAD
          </button>
        </div>
      </div>

      {/* PDF Document Container */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        backgroundColor: '#525659',
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
        <motion.div
          animate={{ scale: zoomLevel }}
          transition={{ duration: 0.2 }}
          style={{
            transformOrigin: 'top center',
            width: '100%',
            maxWidth: '680px',
            backgroundColor: '#FFFFFF',
            color: '#0F172A',
            borderRadius: '4px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            padding: '36px',
            minHeight: '800px',
            fontFamily: "'Inter', sans-serif"
          }}
        >
          {currentPage === 1 ? (
            <div>
              {/* Header */}
              <div style={{ borderBottom: '2px solid #2563EB', paddingBottom: '16px', marginBottom: '20px' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A' }}>VISHAL SHARMA</h1>
                <p style={{ fontSize: '13px', color: '#2563EB', fontWeight: 700, marginTop: '2px' }}>
                  Full Stack Developer & AI Systems Engineer
                </p>
                <p style={{ fontSize: '11px', color: '#64748B', marginTop: '6px' }}>
                  Email: vishal.dev@os.portfolio | Phone: +1 (555) 019-2834 | San Francisco, CA | github.com/vishal-dev
                </p>
              </div>

              {/* Summary */}
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                  PROFESSIONAL SUMMARY
                </h3>
                <p style={{ fontSize: '12px', color: '#334155', lineHeight: '1.6' }}>
                  Full Stack Engineer with 4+ years of experience engineering high-availability web software using React.js and Java Spring Boot REST microservices. Proven track record building real-time dashboards, decoupling legacy monolithic apps into sub-second SPAs, and implementing clean software architectures.
                </p>
              </div>

              {/* Technical Skills */}
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  TECHNICAL SKILLS
                </h3>
                <div style={{ fontSize: '12px', color: '#334155', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <p><strong>Languages & Frameworks:</strong> Java 21, Spring Boot 3.3, React.js, JavaScript (ES6+), TypeScript, Python</p>
                  <p><strong>UI & Animation:</strong> Framer Motion, GSAP, HTML5, CSS3, TailwindCSS, Canvas API</p>
                  <p><strong>Backend & Tools:</strong> REST APIs, Spring Security, Maven, Git/GitHub, Docker, Vite, OpenAPI</p>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                  FEATURED EXPERIENCE & PROJECTS
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '12px' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#0F172A' }}>
                      <span>Smart City Traffic Management Dashboard</span>
                      <span>2025 - Present</span>
                    </div>
                    <p style={{ color: '#64748B', fontSize: '11px', marginBottom: '4px' }}>React.js • Java Spring Boot • WebSockets</p>
                    <ul style={{ paddingLeft: '16px', color: '#334155', lineHeight: '1.5' }}>
                      <li>Engineered reactive frontend streaming real-time sensor data across 45 urban traffic junctions.</li>
                      <li>Reduced controller operational response time by 65%.</li>
                    </ul>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#0F172A' }}>
                      <span>Headless E-Commerce Platform</span>
                      <span>2024</span>
                    </div>
                    <p style={{ color: '#64748B', fontSize: '11px', marginBottom: '4px' }}>React.js • Spring Boot REST Services</p>
                    <ul style={{ paddingLeft: '16px', color: '#334155', lineHeight: '1.5' }}>
                      <li>Decoupled monolithic store into a fast SPA, dropping p99 API response latency to 180ms.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {/* Page 2 Header */}
              <div style={{ borderBottom: '1px solid #CBD5E1', paddingBottom: '10px', marginBottom: '20px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748B' }}>VISHAL SHARMA — RESUME (PAGE 2)</span>
              </div>

              {/* Education */}
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                  EDUCATION
                </h3>
                <div style={{ fontSize: '12px', color: '#334155' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#0F172A' }}>
                    <span>California State University</span>
                    <span>2020 - 2024</span>
                  </div>
                  <p style={{ color: '#F97316', fontWeight: 600 }}>Bachelor of Science in Computer Science (GPA: 3.9 / 4.0)</p>
                  <p style={{ color: '#64748B', fontSize: '11px', marginTop: '4px' }}>
                    Focus: Software Engineering, Data Structures & Algorithms, Distributed Systems, Web Security.
                  </p>
                </div>
              </div>

              {/* Certifications */}
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                  CERTIFICATIONS
                </h3>
                <ul style={{ paddingLeft: '16px', fontSize: '12px', color: '#334155', lineHeight: '1.6' }}>
                  <li><strong>Spring Certified Professional Developer</strong> — VMware / Broadcom (2025)</li>
                  <li><strong>Meta Certified Senior React Developer</strong> — Meta (2025)</li>
                  <li><strong>AWS Certified Solutions Architect</strong> — Amazon Web Services (2024)</li>
                </ul>
              </div>

              {/* Honors & Hackathons */}
              <div>
                <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                  HONORS & AWARDS
                </h3>
                <ul style={{ paddingLeft: '16px', fontSize: '12px', color: '#334155', lineHeight: '1.6' }}>
                  <li><strong>1st Place Winner</strong> — Global Dev Hackathon 2025 (Built real-time collaborative canvas)</li>
                  <li><strong>Best System Architecture Award</strong> — CS University Annual Tech Summit 2024</li>
                  <li><strong>1,200+ Open Source Contributions</strong> across React and Java GitHub projects.</li>
                </ul>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
