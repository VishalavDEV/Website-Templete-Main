import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'motion/react';
import { WORK_PROJECTS, WorkProject } from '../data/workProjectsData';
import { WorkHero } from '../components/work/WorkHero';
import { WorkFilters, CategoryFilter, IndustryFilter } from '../components/work/WorkFilters';
import { FeaturedProject } from '../components/work/FeaturedProject';
import { ProjectArchive } from '../components/work/ProjectArchive';
import { HorizontalProjects } from '../components/work/HorizontalProjects';
import { ProjectPreview } from '../components/work/ProjectPreview';
import { WorkStatement } from '../components/work/WorkStatement';
import { ClientStrip } from '../components/work/ClientStrip';
import { WorkCTA } from '../components/work/WorkCTA';
import { CursorType } from '../types';

interface WorkPageProps {
  onNavigate: (path: string) => void;
  onOpenProjectModal: () => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({
  onNavigate,
  onOpenProjectModal,
  setCursorType,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('ALL');
  const [activeIndustry, setActiveIndustry] = useState<IndustryFilter>('ALL');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryFilter, number> = {
      'ALL': WORK_PROJECTS.length,
      'BRANDING': 0,
      'DIGITAL': 0,
      'DEVELOPMENT': 0,
      'CREATIVE TECHNOLOGY': 0,
      'CONTENT': 0,
    };

    WORK_PROJECTS.forEach((proj) => {
      if (counts[proj.category] !== undefined) {
        counts[proj.category]++;
      }
    });

    return counts;
  }, []);

  // Filter projects by category and industry
  const filteredProjects = useMemo(() => {
    return WORK_PROJECTS.filter((proj) => {
      const matchCategory = activeCategory === 'ALL' || proj.category === activeCategory;
      const matchIndustry = activeIndustry === 'ALL' || proj.industry === activeIndustry;
      return matchCategory && matchIndustry;
    });
  }, [activeCategory, activeIndustry]);

  // Featured flagship project (AURA)
  const flagshipProject = useMemo(() => {
    return WORK_PROJECTS.find((p) => p.featured) || WORK_PROJECTS[0];
  }, []);

  const handleClearFilters = () => {
    setActiveCategory('ALL');
    setActiveIndustry('ALL');
  };

  return (
    <motion.div
      key="work-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#080808] text-[#FAF9F6] selection:bg-[#0066FF] selection:text-white"
    >
      {/* 1. Monumental Cinematic Work Hero */}
      <WorkHero
        totalProjects={WORK_PROJECTS.length}
        setCursorType={setCursorType}
      />

      {/* 2. Sticky Category & Industry Filter Bar */}
      <WorkFilters
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        activeIndustry={activeIndustry}
        onSelectIndustry={setActiveIndustry}
        onClearFilters={handleClearFilters}
        filteredCount={filteredProjects.length}
        totalCount={WORK_PROJECTS.length}
        categoryCounts={categoryCounts}
        setCursorType={setCursorType}
      />

      {/* 3. Flagship Featured Exhibition (Shown when all filters or branding/digital are matching) */}
      {activeCategory === 'ALL' && activeIndustry === 'ALL' && (
        <FeaturedProject
          project={flagshipProject}
          onNavigate={onNavigate}
          setCursorType={setCursorType}
        />
      )}

      {/* 4. Asymmetric Editorial Project Archive */}
      <ProjectArchive
        projects={filteredProjects}
        onNavigate={onNavigate}
        setCursorType={setCursorType}
      />

      {/* 5. Horizontal Spotlight Section */}
      <HorizontalProjects
        projects={WORK_PROJECTS}
        onNavigate={onNavigate}
        setCursorType={setCursorType}
      />

      {/* 6. Art-Directed Interactive Project Preview Index */}
      <ProjectPreview
        projects={WORK_PROJECTS}
        onNavigate={onNavigate}
        setCursorType={setCursorType}
      />

      {/* 7. Case Study Statement ("Beyond The Image") */}
      <WorkStatement
        onNavigate={onNavigate}
        setCursorType={setCursorType}
      />

      {/* 8. Featured Clients Strip */}
      <ClientStrip
        setCursorType={setCursorType}
      />

      {/* 9. Final Start a Project CTA */}
      <WorkCTA
        onOpenProjectModal={onOpenProjectModal}
        setCursorType={setCursorType}
      />
    </motion.div>
  );
};
