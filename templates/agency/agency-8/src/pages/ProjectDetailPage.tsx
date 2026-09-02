import React, { useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { getProjectCaseStudy } from '../data/caseStudyData';
import { ProjectHero } from '../components/caseStudy/ProjectHero';
import { ProjectChallenge } from '../components/caseStudy/ProjectChallenge';
import { ProjectVisual } from '../components/caseStudy/ProjectVisual';
import { ProjectIdea } from '../components/caseStudy/ProjectIdea';
import { CreativeDirection } from '../components/caseStudy/CreativeDirection';
import { ProjectGallery } from '../components/caseStudy/ProjectGallery';
import { ExperienceShowcase } from '../components/caseStudy/ExperienceShowcase';
import { MotionSection } from '../components/caseStudy/MotionSection';
import { ProjectProcess } from '../components/caseStudy/ProjectProcess';
import { TechnologySection } from '../components/caseStudy/TechnologySection';
import { ProjectOutcome } from '../components/caseStudy/ProjectOutcome';
import { ProjectTestimonial } from '../components/caseStudy/ProjectTestimonial';
import { NextProject } from '../components/caseStudy/NextProject';
import { ProjectCTA } from '../components/caseStudy/ProjectCTA';
import { CursorType } from '../types';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenProjectModal: () => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenProjectModal,
  setCursorType,
}) => {
  const caseStudy = useMemo(() => getProjectCaseStudy(slug), [slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [slug]);

  return (
    <motion.div
      key={`project-detail-${caseStudy.slug}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#080808] text-[#FAF9F6] selection:bg-[#0066FF] selection:text-white"
    >
      {/* 1. Project Hero */}
      <ProjectHero
        study={caseStudy}
        setCursorType={setCursorType}
      />

      {/* 2. Project Challenge & Specifications */}
      <ProjectChallenge
        study={caseStudy}
        setCursorType={setCursorType}
      />

      {/* 3. Fullscreen Immersive Visual Projection */}
      <ProjectVisual
        study={caseStudy}
        setCursorType={setCursorType}
      />

      {/* 4. The Idea & Strategic Pillars */}
      <ProjectIdea
        study={caseStudy}
        setCursorType={setCursorType}
      />

      {/* 5. Creative Direction & Design DNA */}
      <CreativeDirection
        study={caseStudy}
        setCursorType={setCursorType}
      />

      {/* 6. Artifact Gallery / Image Sequence */}
      <ProjectGallery
        study={caseStudy}
        setCursorType={setCursorType}
      />

      {/* 7. Experience / Digital Product Showcase */}
      <ExperienceShowcase
        study={caseStudy}
        setCursorType={setCursorType}
      />

      {/* 8. Kinetic Motion Section */}
      <MotionSection
        study={caseStudy}
        setCursorType={setCursorType}
      />

      {/* 9. Process: From Idea to Experience */}
      <ProjectProcess
        study={caseStudy}
        setCursorType={setCursorType}
      />

      {/* 10. Technology & Performance Architecture */}
      <TechnologySection
        study={caseStudy}
        setCursorType={setCursorType}
      />

      {/* 11. Outcome & Metrics Impact */}
      <ProjectOutcome
        study={caseStudy}
        setCursorType={setCursorType}
      />

      {/* 12. Client Testimonial & Tags */}
      <ProjectTestimonial
        study={caseStudy}
        setCursorType={setCursorType}
      />

      {/* 13. Next Project Interactive Preview */}
      <NextProject
        study={caseStudy}
        onNavigate={onNavigate}
        setCursorType={setCursorType}
      />

      {/* 14. Project Collaboration CTA */}
      <ProjectCTA
        onOpenProjectModal={onOpenProjectModal}
        setCursorType={setCursorType}
      />
    </motion.div>
  );
};
