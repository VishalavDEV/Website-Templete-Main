import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ArrowUpRight, Filter, Eye, Layers, Compass } from 'lucide-react';

export default function ProjectGallery({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursorTag, setShowCursorTag] = useState(false);

  const categories = ['All', 'Mixed-Use', 'Cultural', 'Residential', 'Urban Renewal', 'Workplace'];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      id="projects" 
      className="arch-section projects-section"
      onMouseMove={handleMouseMove}
    >
      <div className="arch-grid-lines"></div>

      {/* CUSTOM DESKTOP CURSOR TAG */}
      {showCursorTag && (
        <div 
          className="custom-cursor-tag"
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        >
          <Eye size={12} />
          <span>EXPLORE {hoveredProject?.num}</span>
        </div>
      )}

      <div className="container">
        {/* SECTION HEADER */}
        <div className="section-header-bar">
          <div className="header-left">
            <span className="section-number">02</span>
            <div className="header-titles">
              <span className="section-label">SELECTED WORKS</span>
              <h2 className="section-title display-title">Featured Projects</h2>
            </div>
          </div>
          <div className="header-line"></div>
        </div>

        {/* CATEGORY FILTER BAR */}
        <div className="filter-bar">
          <div className="filter-label">
            <Filter size={14} />
            <span className="mono-text">FILTER BY TYPOLOGY:</span>
          </div>
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS VERTICAL GALLERY WITH VARIED LAYOUTS */}
        <div className="projects-gallery-list">
          {filteredProjects.map((project, idx) => {
            // Render different layout structure based on project index
            const isFullWidth = idx % 5 === 0;
            const isSplit50 = idx % 5 === 1;
            const isHorizontalOffset = idx % 5 === 2;
            const isAsymmetric = idx % 5 === 3;

            return (
              <div 
                key={project.id}
                className={`project-layout-item ${
                  isFullWidth ? 'layout-full' :
                  isSplit50 ? 'layout-split' :
                  isHorizontalOffset ? 'layout-horizontal' :
                  isAsymmetric ? 'layout-asymmetric' : 'layout-standard'
                }`}
                onClick={() => onSelectProject(project)}
                onMouseEnter={() => { setHoveredProject(project); setShowCursorTag(true); }}
                onMouseLeave={() => { setHoveredProject(null); setShowCursorTag(false); }}
              >
                {/* BLUEPRINT TICK MARKS */}
                <div className="arch-corner-tick tick-tl"></div>
                <div className="arch-corner-tick tick-tr"></div>
                <div className="arch-corner-tick tick-bl"></div>
                <div className="arch-corner-tick tick-br"></div>

                {/* IMAGE CONTAINER */}
                <div className="project-image-box">
                  <img src={project.image} alt={project.name} className="project-img" />
                  
                  {/* OVERLAY BADGE */}
                  <div className="image-overlay-bar">
                    <span className="mono-text">SPEC / {project.year}</span>
                    <span className="mono-text">{project.location}</span>
                  </div>
                </div>

                {/* CONTENT BLOCK */}
                <div className="project-content-box">
                  <div className="project-top-row">
                    <span className="project-index-num">PROJECT {project.num}</span>
                    <span className="project-category-badge">{project.type}</span>
                  </div>

                  <h3 className="project-title display-title">{project.name}</h3>

                  <p className="project-description">{project.shortDescription}</p>

                  {/* MATERIALS & METRICS MINI TABLE */}
                  <div className="project-mini-specs">
                    <div className="mini-spec-col">
                      <span className="mini-label">PRIMARY MATERIALS</span>
                      <span className="mini-val">{project.materials.slice(0, 2).join(', ')}</span>
                    </div>
                    <div className="mini-spec-col">
                      <span className="mini-label">STATUS</span>
                      <span className="mini-val highlight">{project.status}</span>
                    </div>
                  </div>

                  <div className="project-action-row">
                    <span className="explore-link">
                      Explore Project Blueprint
                      <ArrowUpRight size={16} className="arrow-icon" />
                    </span>
                    <span className="mono-text year-tag">{project.year}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .projects-section {
          background-color: var(--bg-warm);
        }

        .filter-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          background-color: var(--bg-pure);
          border: 1px solid var(--border-light);
          margin-bottom: 50px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .filter-label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--accent-green);
        }

        .filter-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filter-btn {
          background: none;
          border: 1px solid var(--border-light);
          padding: 8px 16px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          border-color: var(--border-dark);
          color: var(--text-main);
        }

        .filter-btn.active {
          background-color: var(--accent-charcoal);
          color: var(--bg-pure);
          border-color: var(--accent-charcoal);
        }

        /* PROJECTS GALLERY CONTAINER */
        .projects-gallery-list {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .project-layout-item {
          background-color: var(--bg-pure);
          border: 1px solid var(--border-light);
          padding: 32px;
          position: relative;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: grid;
          gap: 36px;
        }

        .project-layout-item:hover {
          border-color: var(--accent-charcoal);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
        }

        .project-image-box {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--border-medium);
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-layout-item:hover .project-img {
          transform: scale(1.04);
        }

        .image-overlay-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 12px 20px;
          background: linear-gradient(180deg, transparent 0%, rgba(20, 20, 20, 0.8) 100%);
          color: var(--bg-pure);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .image-overlay-bar .mono-text {
          color: #ffffff;
        }

        .project-content-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .project-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .project-index-num {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-green);
        }

        .project-category-badge {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 4px 10px;
          background-color: var(--bg-gray);
          color: var(--text-muted);
          border: 1px solid var(--border-light);
        }

        .project-title {
          font-size: 2.2rem;
          color: var(--accent-charcoal);
          margin-bottom: 16px;
          transition: color 0.3s ease;
        }

        .project-layout-item:hover .project-title {
          color: var(--accent-green);
        }

        .project-description {
          font-size: 1.02rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 24px;
        }

        .project-mini-specs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding: 16px;
          background-color: var(--bg-warm);
          border: 1px solid var(--border-light);
          margin-bottom: 24px;
        }

        .mini-spec-col {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mini-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-light);
        }

        .mini-val {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .mini-val.highlight {
          color: var(--accent-green);
        }

        .project-action-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid var(--border-light);
        }

        .explore-link {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--accent-charcoal);
          display: flex;
          align-items: center;
          gap: 6px;
          transition: transform 0.3s ease;
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        .project-layout-item:hover .arrow-icon {
          transform: translate(3px, -3px);
          color: var(--accent-green);
        }

        /* LAYOUT VARIATIONS */
        /* 1. Full-width Hero Layout */
        .layout-full {
          grid-template-columns: 1fr;
        }
        .layout-full .project-image-box {
          height: 480px;
        }

        /* 2. Split 50/50 Layout */
        .layout-split {
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
        }
        .layout-split .project-image-box {
          height: 420px;
        }

        /* 3. Horizontal Offset Layout */
        .layout-horizontal {
          grid-template-columns: 0.85fr 1.15fr;
          align-items: center;
        }
        .layout-horizontal .project-image-box {
          height: 380px;
          order: 2;
        }
        .layout-horizontal .project-content-box {
          order: 1;
        }

        /* 4. Asymmetric Layout */
        .layout-asymmetric {
          grid-template-columns: 1.2fr 0.8fr;
        }
        .layout-asymmetric .project-image-box {
          height: 440px;
        }

        @media (max-width: 1024px) {
          .project-layout-item {
            grid-template-columns: 1fr !important;
          }
          .layout-horizontal .project-image-box {
            order: 1 !important;
          }
          .layout-horizontal .project-content-box {
            order: 2 !important;
          }
          .project-image-box {
            height: 320px !important;
          }
        }
      `}</style>
    </section>
  );
}
