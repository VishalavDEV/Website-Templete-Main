import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import { getPortfolio } from '../services/api';
import { FolderGit2, ExternalLink, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';

const fallbackPortfolio = [
  {
    id: 1,
    title: 'Minimalist Architectural Journal',
    category: 'UI/UX Design & Frontend',
    type: 'design',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    tags: ['React 19', 'TailwindCSS', 'Figma', 'Framer Motion'],
    description: 'An editorial publication platform highlighting world-class architectural wonders with smooth page transitions and minimalist layout principles.',
    demoUrl: 'https://example.com/demo1',
    githubUrl: 'https://github.com/example/arch-journal',
    features: ['Infinite scroll article grid', 'Dark / Sepia reader mode', 'Dynamic typography scaling']
  },
  {
    id: 2,
    title: 'Artisan Coffee E-Commerce',
    category: 'Full Stack Web App',
    type: 'fullstack',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    tags: ['Spring Boot 3', 'React', 'Stripe API', 'PostgreSQL'],
    description: 'A direct-to-consumer specialty coffee subscription store featuring seamless checkout, grind customizer, and automated subscription renewal engine.',
    demoUrl: 'https://example.com/demo2',
    githubUrl: 'https://github.com/example/coffee-shop',
    features: ['Integrated Stripe subscription billing', 'Interactive roasting flavor wheel', 'Automated email dispatch']
  },
  {
    id: 3,
    title: 'Fintech Analytics Dashboard',
    category: 'Web Application',
    type: 'web',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['TypeScript', 'Chart.js', 'Spring Security', 'Docker'],
    description: 'Real-time financial asset monitoring dashboard with candlestick charts, portfolio rebalancing simulator, and automated anomaly alerts.',
    demoUrl: 'https://example.com/demo3',
    githubUrl: 'https://github.com/example/fintech-dashboard',
    features: ['Sub-second WebSocket live tick updates', 'Multi-currency conversion engine', 'Role-based security permissions']
  },
  {
    id: 4,
    title: 'SaaS Cloud Collaboration Hub',
    category: 'Full Stack Web App',
    type: 'fullstack',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'WebSockets', 'Tailwind'],
    description: 'Collaborative team workspace with real-time markdown docs, Kanban boards, and role permission management for remote distributed teams.',
    demoUrl: 'https://example.com/demo4',
    githubUrl: 'https://github.com/example/saas-hub',
    features: ['Real-time document cursor sync', 'Drag & drop Kanban board', 'End-to-end audit logging']
  },
  {
    id: 5,
    title: 'Mobile Fitness & Habit Tracker',
    category: 'Mobile & PWA',
    type: 'mobile',
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=800&q=80',
    tags: ['React Native', 'TypeScript', 'Firebase', 'HealthKit'],
    description: 'Gamified habit building mobile application with streak rewards, custom workout routines, and offline-first synchronization.',
    demoUrl: 'https://example.com/demo5',
    githubUrl: 'https://github.com/example/fitness-app',
    features: ['Offline SQLite database cache', 'Apple HealthKit integration', 'Daily habit streak notification system']
  },
  {
    id: 6,
    title: 'Studio Creative Agency Brand',
    category: 'UI/UX Design',
    type: 'design',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
    tags: ['Figma', 'WebGL', 'Three.js', 'React'],
    description: 'High-end branding and interactive digital portfolio showcasing 3D web graphics, custom typography, and dynamic ambient soundscapes.',
    demoUrl: 'https://example.com/demo6',
    githubUrl: 'https://github.com/example/creative-studio',
    features: ['Interactive 3D particle canvas', 'Custom cursor shader effects', 'Zero-latency smooth scrolling']
  }
];

export default function Portfolio() {
  const [items, setItems] = useState(fallbackPortfolio);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  useEffect(() => {
    getPortfolio().then((data) => {
      if (data && data.length > 0) {
        // Merge backend items with rich default attributes
        const merged = fallbackPortfolio.map((item, idx) => {
          if (data[idx]) {
            return {
              ...item,
              title: data[idx].title || item.title,
              category: data[idx].category || item.category,
              image: data[idx].imageUrl || item.image,
            };
          }
          return item;
        });
        setItems(merged);
      }
    });
  }, []);

  const filteredItems = selectedFilter === 'all' 
    ? items 
    : items.filter(item => item.type === selectedFilter || item.category.toLowerCase().includes(selectedFilter));

  const handleOpenModal = (project) => {
    setActiveProjectModal(project);
  };

  const handleCloseModal = () => {
    setActiveProjectModal(null);
  };

  return (
    <section id="portfolio" className="portfolio-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} />
            Featured Work
          </span>
          <h2 className="section-title">Selected Projects & Case Studies</h2>
          <p className="section-subtitle">
            Explore a curated selection of full-stack web applications, UI/UX designs, and enterprise systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="portfolio-filter-container">
          <div className="portfolio-filters" role="tablist">
            <button
              className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('all')}
            >
              All Projects ({items.length})
            </button>
            <button
              className={`filter-btn ${selectedFilter === 'fullstack' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('fullstack')}
            >
              Full Stack
            </button>
            <button
              className={`filter-btn ${selectedFilter === 'design' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('design')}
            >
              UI / UX Design
            </button>
            <button
              className={`filter-btn ${selectedFilter === 'web' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('web')}
            >
              Web Apps
            </button>
            <button
              className={`filter-btn ${selectedFilter === 'mobile' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('mobile')}
            >
              Mobile
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((project) => (
            <div 
              key={project.id} 
              className="portfolio-card glass-card"
            >
              <div className="portfolio-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="portfolio-thumb" 
                  loading="lazy" 
                />
                <div className="portfolio-overlay">
                  <button 
                    className="portfolio-view-btn"
                    onClick={() => handleOpenModal(project)}
                    id={`view-project-${project.id}`}
                  >
                    <Eye size={18} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>

              <div className="portfolio-content">
                <span className="portfolio-category">{project.category}</span>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-excerpt">{project.description}</p>

                <div className="portfolio-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="portfolio-tag-pill">{tag}</span>
                  ))}
                </div>

                <div className="portfolio-card-actions">
                  <button 
                    className="portfolio-link-btn"
                    onClick={() => handleOpenModal(project)}
                  >
                    <span>Read Case Study</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProjectModal && (
        <div className="portfolio-modal-overlay" onClick={handleCloseModal}>
          <div className="portfolio-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="portfolio-modal-header">
              <div>
                <span className="portfolio-category">{activeProjectModal.category}</span>
                <h3 className="portfolio-modal-title">{activeProjectModal.title}</h3>
              </div>
              <button 
                className="modal-close-btn" 
                onClick={handleCloseModal}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="portfolio-modal-image-box">
              <img 
                src={activeProjectModal.image} 
                alt={activeProjectModal.title} 
                className="portfolio-modal-img"
              />
            </div>

            <p className="portfolio-modal-desc">{activeProjectModal.description}</p>

            <div className="portfolio-modal-features">
              <h4 className="modal-subheading">Key Highlights & Architecture:</h4>
              <ul className="modal-features-list">
                {activeProjectModal.features?.map((feat, idx) => (
                  <li key={idx}>• {feat}</li>
                ))}
              </ul>
            </div>

            <div className="portfolio-modal-tech">
              <h4 className="modal-subheading">Technology Stack:</h4>
              <div className="modal-tags">
                {activeProjectModal.tags.map((tag, idx) => (
                  <span key={idx} className="tech-pill">{tag}</span>
                ))}
              </div>
            </div>

            <div className="portfolio-modal-actions">
              <a 
                href={activeProjectModal.demoUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Opening live demo for "${activeProjectModal.title}"! (Live staging URL preview)`);
                }}
              >
                <ExternalLink size={16} />
                <span>Live Preview</span>
              </a>

              <a 
                href={activeProjectModal.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Viewing GitHub repository for "${activeProjectModal.title}"`);
                }}
              >
                <GithubIcon size={16} />
                <span>Source Code</span>
              </a>

              <button className="btn-outline" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
