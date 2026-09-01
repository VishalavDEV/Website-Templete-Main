import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, FileCode, ArrowLeft, ExternalLink, Sparkles, X, ChevronRight, Code2 } from 'lucide-react';

export default function FileExplorer({ projectsData }) {
  const [currentFolder, setCurrentFolder] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const folders = ["ALL", "WEB DEVELOPMENT", "AI PROJECTS", "SOFTWARE", "EXPERIMENTS"];

  const projects = projectsData || [];

  const filteredProjects = projects.filter(p => {
    if (currentFolder === "ALL") return true;
    return p.category === currentFolder;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
      {/* File Explorer Path Ribbon */}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontFamily: "var(--font-mono)", fontWeight: 600 }}>
          <Folder size={16} color="#F97316" />
          <span style={{ color: 'var(--text-muted)' }}>root</span>
          <ChevronRight size={14} color="#64748B" />
          <span style={{ color: 'var(--royal-blue)' }}>MY_PROJECTS</span>
          {currentFolder !== "ALL" && (
            <>
              <ChevronRight size={14} color="#64748B" />
              <span style={{ color: 'var(--accent-secondary)' }}>{currentFolder.replace(' ', '_')}</span>
            </>
          )}
        </div>

        {/* Directory Folder Selector */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {folders.map(folder => (
            <button
              key={folder}
              onClick={() => setCurrentFolder(folder)}
              style={{
                backgroundColor: currentFolder === folder ? 'var(--royal-blue)' : 'var(--bg-surface)',
                color: currentFolder === folder ? '#FFFFFF' : 'var(--text-main)',
                border: '1px solid var(--border-color)',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Folder size={12} />
              {folder}
            </button>
          ))}
        </div>
      </div>

      {/* Files & Folder Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '14px',
        flex: 1
      }}>
        {filteredProjects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedProject(proj)}
            className="glass-card"
            style={{
              padding: '16px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '12px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FileCode size={20} color="#2563EB" />
                  <span style={{ fontSize: '12px', fontFamily: "var(--font-mono)", color: 'var(--text-muted)' }}>
                    {proj.fileName}
                  </span>
                </div>
                {proj.badge && (
                  <span style={{
                    backgroundColor: proj.badge === "FEATURED" ? 'rgba(249, 115, 22, 0.15)' : 'rgba(37, 99, 235, 0.15)',
                    color: proj.badge === "FEATURED" ? '#F97316' : '#2563EB',
                    padding: '2px 8px',
                    borderRadius: '99px',
                    fontSize: '10px',
                    fontWeight: 700
                  }}>
                    {proj.badge}
                  </span>
                )}
              </div>

              <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-main)', lineHeight: '1.3', marginBottom: '6px' }}>
                {proj.title}
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {proj.problem}
              </p>
            </div>

            {/* Tech Badges */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {proj.technologies.slice(0, 3).map(tech => (
                <span key={tech} style={{
                  fontSize: '10px',
                  backgroundColor: 'var(--soft-gray)',
                  color: 'var(--text-main)',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  fontWeight: 600
                }}>
                  {tech}
                </span>
              ))}
              {proj.technologies.length > 3 && (
                <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
                  +{proj.technologies.length - 3}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              backdropFilter: 'blur(6px)',
              zIndex: 9999,
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
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '650px',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '28px',
                boxShadow: '0 25px 50px rgba(0,0,0,0.4)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div>
                  <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', fontWeight: 600 }}>
                    📁 /MY_PROJECTS/{selectedProject.category.replace(' ', '_')}
                  </span>
                  <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-main)', marginTop: '4px' }}>
                    {selectedProject.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Project Details Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ backgroundColor: 'var(--soft-gray)', padding: '14px', borderRadius: '10px' }}>
                  <h4 style={{ fontSize: '12px', fontWeight: 800, color: '#EF4444', textTransform: 'uppercase', marginBottom: '4px' }}>
                    ⚠️ PROBLEM STATEMENT
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-main)', lineHeight: '1.5' }}>
                    {selectedProject.problem}
                  </p>
                </div>

                <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                  <h4 style={{ fontSize: '12px', fontWeight: 800, color: '#10B981', textTransform: 'uppercase', marginBottom: '4px' }}>
                    💡 ARCHITECTURAL SOLUTION
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-main)', lineHeight: '1.5' }}>
                    {selectedProject.solution}
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '12px', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    TECHNOLOGY STACK
                  </h4>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} style={{
                        backgroundColor: 'var(--royal-blue)',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontWeight: 600
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Actions */}
                <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="accent-btn"
                      style={{ textDecoration: 'none' }}
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}

                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blue-btn"
                      style={{ textDecoration: 'none' }}
                    >
                      <Code2 size={16} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
