import React, { useState, useEffect, useRef } from 'react';
import { ProjectOverlay } from './ProjectOverlay.jsx';

export const ProjectIndex = () => {
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [activeProject, setActiveProject] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  
  // Floating cursor preview state
  const [hoveredProject, setHoveredProject] = useState(null);
  const previewRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const previewPos = useRef({ x: 0, y: 0 });

  const filters = ['ALL', 'RESIDENTIAL', 'CULTURAL', 'INTERIOR', 'HOSPITALITY'];

  const projects = [
    {
      id: '01',
      name: 'HOUSE OF SILENCE',
      category: 'RESIDENTIAL',
      location: 'Chennai, India',
      image: './images/house_of_silence.jpg',
    },
    {
      id: '02',
      name: 'VOID COURT',
      category: 'CULTURAL',
      location: 'Kyoto, Japan',
      image: './images/hero.jpg',
    },
    {
      id: '03',
      name: 'TERRACOTTA HOUSE',
      category: 'RESIDENTIAL',
      location: 'Madurai, India',
      image: './images/house_of_silence_interior.jpg',
    },
    {
      id: '04',
      name: 'CONCRETE GARDEN',
      category: 'HOSPITALITY',
      location: 'Goa, India',
      image: './images/house_of_silence.jpg',
    },
    {
      id: '05',
      name: 'FRAME / LIGHT',
      category: 'INTERIOR',
      location: 'Los Angeles, USA',
      image: './images/hero.jpg',
    },
  ];

  // Filtered projects
  const filteredProjects = selectedFilter === 'ALL'
    ? projects
    : projects.filter((p) => p.category === selectedFilter);

  // Floating cursor-following preview logic
  useEffect(() => {
    // Only on fine-pointer devices (desktop)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let animId;

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX + 24; // offset from cursor so it doesn't block
      mousePos.current.y = e.clientY - 110;
    };

    const render = () => {
      previewPos.current.x += (mousePos.current.x - previewPos.current.x) * 0.12;
      previewPos.current.y += (mousePos.current.y - previewPos.current.y) * 0.12;

      if (previewRef.current) {
        previewRef.current.style.left = `${previewPos.current.x.toFixed(1)}px`;
        previewRef.current.style.top = `${previewPos.current.y.toFixed(1)}px`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleProjectClick = (project) => {
    setActiveProject(project);
    setIsOverlayOpen(true);
  };

  return (
    <>
      <section className="project-index-section" id="project-index" aria-label="Project Archive">
        {/* Section Header with Category Filters */}
        <div className="index-header-area">
          <div className="index-title-group">
            <span className="index-supertitle">04 / 08 — MONOGRAPH ARCHIVE</span>
            <h2 className="index-main-title">SELECTED WORK</h2>
          </div>

          {/* 16 — Project Filter Bar */}
          <div className="project-filters-bar" role="group" aria-label="Filter Projects by Typology">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
                onClick={() => setSelectedFilter(filter)}
                aria-pressed={selectedFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* 14 — Large Vertical Project Index */}
        <div className="project-vertical-list" role="list">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-row"
              role="listitem"
              onClick={() => handleProjectClick(project)}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleProjectClick(project);
                }
              }}
              aria-label={`Open exhibition presentation for ${project.name}, ${project.category}`}
            >
              <span className="row-index-num">{project.id}</span>
              <span className="row-name">{project.name}</span>
              <span className="row-category-tag">
                <span>●</span> {project.category}
              </span>
              <span className="row-arrow" aria-hidden="true">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* 15 — Floating Project Image Preview (Desktop Cursor Tracker) */}
      <div 
        ref={previewRef}
        className={`project-floating-preview ${hoveredProject ? 'visible' : ''}`}
        aria-hidden="true"
      >
        {hoveredProject && (
          <img 
            src={hoveredProject.image} 
            alt="" 
            className="floating-preview-image"
          />
        )}
      </div>

      {/* Fullscreen Project Presentation Overlay */}
      <ProjectOverlay 
        isOpen={isOverlayOpen} 
        onClose={() => setIsOverlayOpen(false)}
        projectData={activeProject}
      />
    </>
  );
};
