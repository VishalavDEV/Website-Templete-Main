import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, ExternalLink, Code2, Sparkles, X, ChevronRight } from 'lucide-react';

export default function ProjectsSection({ projectsData }) {
  const [currentFolder, setCurrentFolder] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const folders = ["ALL", "WEB DEVELOPMENT", "AI PROJECTS", "SOFTWARE", "EXPERIMENTS"];

  const projects = projectsData || [];

  const filteredProjects = projects.filter(p => {
    if (currentFolder === "ALL") return true;
    return p.category === currentFolder;
  });

  return (
    <section id="projects" style={{ backgroundColor: 'var(--soft-gray)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="section-container">
        
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span className="section-tag">
            <Folder size={14} /> PORTFOLIO PROJECTS
          </span>
          <h2 className="section-title">Featured Works & Systems</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Real-world web applications, high-concurrency microservices, and interactive software.
          </p>

          {/* Directory Folder Selector */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '24px' }}>
            {folders.map(folder => (
              <button
                key={folder}
                onClick={() => setCurrentFolder(folder)}
                style={{
                  backgroundColor: currentFolder === folder ? 'var(--royal-blue)' : 'var(--bg-surface)',
                  color: currentFolder === folder ? '#FFFFFF' : 'var(--text-main)',
                  border: '1px solid var(--border-color)',
                  padding: '8px 18px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {folder}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="website-card"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--bright-orange)', letterSpacing: '0.5px' }}>
                    {proj.category}
                  </span>
                  {proj.badge && (
                    <span style={{
                      backgroundColor: 'rgba(37, 99, 235, 0.12)',
                      color: 'var(--royal-blue)',
                      padding: '3px 10px',
                      borderRadius: '99px',
                      fontSize: '11px',
                      fontWeight: 800
                    }}>
                      {proj.badge}
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px', lineHeight: '1.3' }}>
                  {proj.title}
                </h3>

                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>
                  {proj.problem}
                </p>

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {proj.technologies.map(tech => (
                    <span key={tech} style={{
                      fontSize: '11px',
                      backgroundColor: 'var(--soft-gray)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-main)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontWeight: 600
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                <button
                  onClick={() => setSelectedProject(proj)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--royal-blue)', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  Inspect Architecture <ChevronRight size={16} />
                </button>

                <div style={{ display: 'flex', gap: '8px' }}>
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '6px 12px', fontSize: '12px' }}>
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>
                      <Code2 size={14} /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Inspection Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(15, 23, 42, 0.65)',
                backdropFilter: 'blur(6px)',
                zIndex: 99999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px'
              }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={e => e.stopPropagation()}
                className="website-card"
                style={{ width: '100%', maxWidth: '640px', padding: '32px' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--bright-orange)', letterSpacing: '0.5px' }}>
                      {selectedProject.category}
                    </span>
                    <h2 style={{ fontSize: '24px', fontWeight: 900, color: 'var(--text-main)', marginTop: '4px' }}>
                      {selectedProject.title}
                    </h2>
                  </div>
                  <button onClick={() => setSelectedProject(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                    <X size={24} />
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ backgroundColor: 'var(--soft-gray)', padding: '16px', borderRadius: '12px' }}>
                    <h4 style={{ fontSize: '12px', fontWeight: 800, color: '#EF4444', textTransform: 'uppercase', marginBottom: '4px' }}>
                      ⚠️ PROBLEM STATEMENT
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-main)', lineHeight: '1.6' }}>
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                    <h4 style={{ fontSize: '12px', fontWeight: 800, color: '#10B981', textTransform: 'uppercase', marginBottom: '4px' }}>
                      💡 ARCHITECTURAL SOLUTION
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-main)', lineHeight: '1.6' }}>
                      {selectedProject.solution}
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                    {selectedProject.demo && (
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        <Code2 size={16} /> GitHub Repository
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
