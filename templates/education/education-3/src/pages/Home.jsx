import React from 'react';
import HeroUniverse from '../components/HeroUniverse';
import KnowledgeExplorer from '../components/KnowledgeExplorer';
import ProgramTimeline from '../components/ProgramTimeline';
import Statistics from '../components/Statistics';
import LearningExperience from '../components/LearningExperience';
import ResearchNetwork from '../components/ResearchNetwork';
import StudentJourney from '../components/StudentJourney';
import CampusGallery from '../components/CampusGallery';
import FacultyShowcase from '../components/FacultyShowcase';
import KnowledgeJournal from '../components/KnowledgeJournal';
import FAQ from '../components/FAQ';
import AdmissionJourney from '../components/AdmissionJourney';
import CTASection from '../components/CTASection';

export default function Home({ onOpenAdmissions }) {
  return (
    <main className="w-full overflow-hidden">
      {/* 03. Homepage Hero "The Learning Universe" */}
      <HeroUniverse onOpenAdmissions={onOpenAdmissions} />

      {/* 05. Explore Knowledge Horizontal Slider */}
      <KnowledgeExplorer />

      {/* 06. Programs Vertical Timeline Explorer */}
      <ProgramTimeline onOpenAdmissions={onOpenAdmissions} />

      {/* 07. Learning in Numbers Statistics & Marquee */}
      <Statistics />

      {/* 08. Featured Learning Experience Magazine */}
      <LearningExperience />

      {/* 09. Research & Innovation Section */}
      <ResearchNetwork />

      {/* 10. Student Journey 5-Step Timeline */}
      <StudentJourney />

      {/* 11. Campus Experience Masonry Gallery */}
      <CampusGallery />

      {/* 12. Expert Faculty Spotlight Showcase */}
      <FacultyShowcase />

      {/* 13. Knowledge Journal Editorial Magazine */}
      <KnowledgeJournal />

      {/* 14. Interactive FAQ */}
      <FAQ />

      {/* 15. Admissions Interactive Journey */}
      <AdmissionJourney onOpenAdmissions={onOpenAdmissions} />

      {/* 16. Final CTA Section */}
      <CTASection onOpenAdmissions={onOpenAdmissions} />
    </main>
  );
}
