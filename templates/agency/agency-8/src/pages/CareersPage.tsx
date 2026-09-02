import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CursorType, JobPosition } from '../types';
import { CareersHero } from '../components/careers/CareersHero';
import { CultureSection } from '../components/careers/CultureSection';
import { StudioLife } from '../components/careers/StudioLife';
import { JobList } from '../components/careers/JobList';
import { ApplicationModal } from '../components/careers/ApplicationModal';
import { BenefitsSection } from '../components/careers/BenefitsSection';
import { DisciplineSection } from '../components/careers/DisciplineSection';
import { StudioMoments } from '../components/careers/StudioMoments';
import { OpenApplication } from '../components/careers/OpenApplication';
import { FinalStatement } from '../components/careers/FinalStatement';
import { CareersCTA } from '../components/careers/CareersCTA';

interface CareersPageProps {
  onNavigate: (path: string) => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({
  onNavigate,
  setCursorType,
}) => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleApply = (job: JobPosition) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleOpenGeneralApplication = () => {
    setSelectedJob(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#080808] text-[#FAF9F6] min-h-screen relative"
    >
      {/* 1 & 2. Careers Hero + Cinematic Visual */}
      <CareersHero setCursorType={setCursorType} />

      {/* 3. Culture Statement */}
      <CultureSection />

      {/* 4. What Life Here Feels Like (Interactive Words & Vignettes) */}
      <StudioLife setCursorType={setCursorType} />

      {/* 5, 6, 7. Open Positions (Interactive Expandable Editorial List) */}
      <JobList onApply={handleApply} setCursorType={setCursorType} />

      {/* 10. Benefits / What You Get */}
      <BenefitsSection />

      {/* 11. Disciplines (Typographic Composition) */}
      <DisciplineSection setCursorType={setCursorType} />

      {/* 12. Studio Moments (Asymmetric Editorial Collage) */}
      <StudioMoments setCursorType={setCursorType} />

      {/* 13. Don't See Your Role? (General Application) */}
      <OpenApplication
        onOpenGeneralModal={handleOpenGeneralApplication}
        setCursorType={setCursorType}
      />

      {/* 14. Final Statement */}
      <FinalStatement />

      {/* 15. Final CTA */}
      <CareersCTA setCursorType={setCursorType} onNavigate={onNavigate} />

      {/* 8 & 9. Application Modal Experience */}
      <ApplicationModal
        isOpen={isModalOpen}
        job={selectedJob}
        onClose={handleCloseModal}
        setCursorType={setCursorType}
      />
    </motion.div>
  );
};
