import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Cpu, Compass, Megaphone, HelpCircle } from 'lucide-react';
import { apiService } from '../utils/api';
import './Projects.css';

// Dynamic category icons helper
const categoryIcons = {
  Technology: <Cpu size={16} />,
  Marketing: <Megaphone size={16} />,
  Consulting: <Compass size={16} />,
  Finance: <Cpu size={16} />, // fallback
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  const filters = ['All', 'Technology', 'Marketing', 'Consulting', 'Finance'];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await apiService.getProjects();
        setProjects(data);
        setFilteredProjects(data);
      } catch (err) {
        console.error("Failed fetching portfolio:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const handleFilterSelect = (filter) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(p => p.category.toLowerCase() === filter.toLowerCase());
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="projects-page">
      {/* Background orbs */}
      <div className="glow-bg">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      {/* Header */}
      <section className="projects-header section-padding">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">PORTFOLIO</span>
            <h1 className="large-headline">Featured <span className="text-gradient">Case Studies</span></h1>
            <p className="lead-paragraph">
              Explore our real-world system integrations, data-driven strategies, and scalable software pipelines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Showcase */}
      <section className="portfolio-showcase-section section-padding">
        <div className="container">
          
          {/* Filters Bar */}
          <div className="filters-bar">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => handleFilterSelect(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="loading-spinner-box">
              <div className="spinner"></div>
              <p>Loading projects...</p>
            </div>
          ) : (
            <motion.div className="projects-showcase-grid" layout>
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((p) => (
                  <motion.div
                    className="project-showcase-card glass-card"
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="project-card-header">
                      <div className="project-cat-badge">
                        {categoryIcons[p.category] || <HelpCircle size={14} />}
                        <span>{p.category}</span>
                      </div>
                    </div>

                    <div className="project-card-body">
                      <h3>{p.title}</h3>
                      <p>{p.description}</p>
                    </div>

                    <div className="project-card-stack">
                      {p.technologies.map((t, idx) => (
                        <span className="stack-tag" key={idx}>{t}</span>
                      ))}
                    </div>

                    <div className="project-card-footer">
                      <Link to={`/projects/${p.id}`} className="btn btn-secondary project-view-btn">
                        View Case Study <ArrowRight size={16} />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
