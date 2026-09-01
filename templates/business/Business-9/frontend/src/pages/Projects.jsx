import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Layers, User, X, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { fetchProjects } from '../services/api';
import ProjectCard from '../components/ProjectCard';
import PageTransition from '../animations/PageTransition';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
  const [projectsList, setProjectsList] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const filterTabs = ['All', 'Technology', 'Marketing', 'Consulting', 'Finance', 'Startup'];

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjectsList(data);
      } catch (err) {
        console.error("Failed to load projects list", err);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  // Filter projects client-side
  const filteredProjects = activeFilter === 'All'
    ? projectsList
    : projectsList.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase() || p.technologies.some(t => t.toLowerCase() === activeFilter.toLowerCase()));

  const handleDiscuss = (title) => {
    setSelectedProject(null);
    navigate('/contact', { state: { projectInterest: title } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageTransition>
      <div style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge"><Layers size={14} /> Showcase</span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-title)', marginBottom: '1rem' }}>
              Our Case Study <span className="text-gradient">Portfolio</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxDWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
              Explore how we've helped ambitious startup founders and large enterprises scale their infrastructures and brand reach.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}>
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <motion.button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  style={{
                    padding: '0.6rem 1.4rem',
                    borderRadius: '9999px',
                    border: '1.5px solid',
                    borderColor: isActive ? 'var(--primary)' : 'var(--glass-border)',
                    background: isActive ? 'var(--primary-gradient)' : 'var(--glass-bg)',
                    color: isActive ? '#FFF' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-title)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    boxShadow: isActive ? '0 6px 15px rgba(249, 115, 22, 0.2)' : 'var(--glass-shadow)',
                    transition: 'var(--transition-fast)'
                  }}
                  whileHover={!isActive ? { scale: 1.04, backgroundColor: '#FFF' } : {}}
                  whileTap={{ scale: 0.98 }}
                >
                  {tab}
                </motion.button>
              );
            })}
          </div>

          {/* Loading Indicator */}
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem 0' }}>
              <div className="spinner" style={{
                width: '40px',
                height: '40px',
                border: '4px solid var(--secondary)',
                borderTopColor: 'var(--primary)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
            </div>
          ) : (
            <motion.div
              layout
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2.5rem'
              }}
              className="projects-grid"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35 }}
                  >
                    <ProjectCard
                      project={project}
                      onClick={(proj) => setSelectedProject(proj)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

        </div>

        {/* Project Detailed Drawer Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(26, 22, 19, 0.6)',
                backdropFilter: 'blur(8px)',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem'
              }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 35, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 35, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: '#FFF',
                  maxWidth: '750px',
                  width: '100%',
                  maxHeight: '90vh',
                  overflowY: 'auto',
                  borderRadius: 'var(--border-radius-lg)',
                  border: '1px solid rgba(249,115,22,0.2)',
                  padding: '2.5rem',
                  position: 'relative',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    background: 'var(--secondary)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--primary)',
                    zIndex: 10
                  }}
                >
                  <X size={18} />
                </button>

                {/* Hero Project Image */}
                <div style={{
                  borderRadius: 'var(--border-radius-md)',
                  overflow: 'hidden',
                  height: '280px',
                  marginBottom: '2rem'
                }}>
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Modal Title details */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-title)' }}>
                      {selectedProject.title}
                    </h2>
                    <span style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: 'var(--primary)',
                      background: 'rgba(249,115,22,0.08)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '4px',
                      display: 'inline-block',
                      marginTop: '0.4rem'
                    }}>
                      {selectedProject.category}
                    </span>
                  </div>

                  {/* Metadata fields (Client, Year) */}
                  <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        <User size={14} color="var(--primary)" /> Client
                      </div>
                      <div>{selectedProject.client}</div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        <Calendar size={14} color="var(--primary)" /> Year
                      </div>
                      <div>{selectedProject.year}</div>
                    </div>
                  </div>
                </div>

                {/* Challenge & Solution details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.4rem', fontFamily: 'var(--font-title)' }}>The Challenge</h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.4rem', fontFamily: 'var(--font-title)' }}>Our Solution</h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Tech Badges */}
                <div style={{ marginBottom: '2.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem' }}>Technologies Used:</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selectedProject.technologies.map(tech => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          color: 'var(--primary)',
                          background: 'rgba(249, 115, 22, 0.08)',
                          border: '1.5px solid rgba(249, 115, 22, 0.15)',
                          padding: '0.3rem 0.75rem',
                          borderRadius: '6px'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Discussions CTA */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleDiscuss(selectedProject.title)}
                    style={{ flexGrow: 1 }}
                  >
                    Discuss Similar Project <ArrowRight size={16} />
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <style>{`
        .spinner {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 950px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </PageTransition>
  );
}
