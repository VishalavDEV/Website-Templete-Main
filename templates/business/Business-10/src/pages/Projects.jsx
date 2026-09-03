import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { projects, projectCategories } from '../data/projects';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <main id="main-content">
      {/* ─── Page Hero ─── */}
      <section className="page-hero" aria-label="Projects">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__blob page-hero__blob--1" />
          <div className="page-hero__blob page-hero__blob--2" />
        </div>
        <div className="container">
          <motion.div
            className="page-hero__content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">Our Work</span>
            <h1 className="page-hero__title font-display">
              Projects &amp; <span className="text-gradient">Case Studies</span>
            </h1>
            <p className="page-hero__subtitle">
              Real-world challenges, engineered solutions, measurable results. Explore how we've helped businesses transform their technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Filter Bar ─── */}
      <section aria-label="Filter projects by category">
        <div className="container">
          <ScrollReveal>
            <div className="projects__filters" role="tablist" aria-label="Project categories">
              {projectCategories.map((cat) => (
                <motion.button
                  key={cat}
                  className={`projects__filter-btn ${activeFilter === cat ? 'projects__filter-btn--active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  role="tab"
                  aria-selected={activeFilter === cat}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Projects Grid ─── */}
      <section className="section" aria-label="Projects grid">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  onView={setSelectedProject}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', padding: '4rem 0' }}>
              No projects found for this category.
            </p>
          )}
        </div>
      </section>

      {/* ─── Project Detail Modal ─── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Project: ${selectedProject.title}`}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="modal-header" style={{ background: selectedProject.gradient }} />

              <div className="modal-body">
                <span className="section-tag">{selectedProject.category}</span>
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-desc">{selectedProject.description}</p>

                <div className="modal-grid">
                  <div>
                    <h4 className="modal-section-title">The Challenge</h4>
                    <p className="modal-text">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h4 className="modal-section-title">Our Solution</h4>
                    <p className="modal-text">{selectedProject.solution}</p>
                  </div>
                </div>

                <h4 className="modal-section-title">Results Delivered</h4>
                <ul className="modal-results">
                  {selectedProject.results.map((r) => (
                    <li key={r} className="modal-result-item">
                      <CheckCircle size={15} style={{ flexShrink: 0 }} /> <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="modal-section-title">Technologies Used</h4>
                <div className="modal-tags">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="project-card__tag">{t}</span>
                  ))}
                </div>

                <div className="projects__modal-tags-extra">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="projects__modal-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Projects;
