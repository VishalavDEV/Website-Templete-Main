import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { TeamHero } from '../components/team/TeamHero';
import { TeamIntro } from '../components/team/TeamIntro';
import { TeamIndex } from '../components/team/TeamIndex';
import { TeamDisciplines } from '../components/team/TeamDisciplines';
import { DisciplineInteraction } from '../components/team/DisciplineInteraction';
import { TeamCulture } from '../components/team/TeamCulture';
import { TeamValues } from '../components/team/TeamValues';
import { JoinStudio } from '../components/team/JoinStudio';
import { TeamCTA } from '../components/team/TeamCTA';
import { CursorType } from '../types';

interface TeamPageProps {
  onOpenProjectModal: () => void;
  setCursorType: (type: CursorType, text?: string) => void;
  onNavigate: (path: string) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({
  onOpenProjectModal,
  setCursorType,
  onNavigate,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {/* 1. TEAM HERO */}
      <TeamHero setCursorType={setCursorType} />

      {/* 2. TEAM INTRO */}
      <TeamIntro setCursorType={setCursorType} />

      {/* 3. TEAM INDEX (Interactive Portrait Hover / Mobile Accordion) */}
      <TeamIndex setCursorType={setCursorType} />

      {/* 4. TEAM DISCIPLINES */}
      <TeamDisciplines setCursorType={setCursorType} />

      {/* 5. DISCIPLINE INTERACTION (Interconnected Matrix) */}
      <DisciplineInteraction setCursorType={setCursorType} />

      {/* 6. CULTURE SECTION (Visual Collage) */}
      <TeamCulture setCursorType={setCursorType} />

      {/* 7. TEAM VALUES */}
      <TeamValues setCursorType={setCursorType} />

      {/* 8. JOIN THE STUDIO (Careers Callout) */}
      <JoinStudio setCursorType={setCursorType} onNavigate={onNavigate} />

      {/* 9. TEAM FINAL CTA */}
      <TeamCTA
        onOpenProjectModal={onOpenProjectModal}
        setCursorType={setCursorType}
      />
    </motion.div>
  );
};
