import React, { useState, useEffect, useRef } from 'react';
import { Project, PROJECTS_DATA } from '../../data/projects';
import { ProjectFilters } from './ProjectFilters';
import { ProjectViewer } from './ProjectViewer';
import { useToast } from '../../context/ToastContext';

export const ProjectIndex: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const { showToast } = useToast();

  const categories = ['ALL', 'RESIDENTIAL', 'CULTURAL', 'INTERIOR', 'HOSPITALITY'];

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  useEffect(() => {
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX + 24;
      targetY = e.clientY + 24;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;

      if (previewRef.current) {
        previewRef.current.style.left = `${currentX}px`;
        previewRef.current.style.top = `${currentY}px`;
      }
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleSelectCategory = (cat: string) => {
    setActiveCategory(cat);
    showToast('FILTER UPDATED');
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    showToast('PROJECT OPENED');
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
    setSelectedProject(PROJECTS_DATA[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;
    setSelectedProject(PROJECTS_DATA[nextIndex]);
  };

  return (
    <>
      <section className="project-index-section" id="project-index" aria-label="Selected Architecture Work">
        <div className="index-header-area">
          <div className="index-title-group">
            <span className="index-supertitle">04 / 08 — CATALOGUE OF WORKS</span>
            <h2 className="index-main-title">SELECTED WORK</h2>
          </div>

          <ProjectFilters
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
          />
        </div>

        <div className="project-vertical-list" role="list">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-row"
              role="listitem"
              tabIndex={0}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleSelectProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSelectProject(project);
                }
              }}
              aria-label={`${project.name}, category ${project.category}`}
            >
              <span className="row-index-num">{project.id}</span>
              <h3 className="row-name">{project.name}</h3>
              <span className="row-category-tag">
                <span>//</span> {project.category}
              </span>
              <span className="row-arrow" aria-hidden="true">→</span>
            </div>
          ))}
        </div>
      </section>

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

      <ProjectViewer
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        onPrevProject={handlePrev}
        onNextProject={handleNext}
      />
    </>
  );
};
