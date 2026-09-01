import React, { useState } from 'react';
import { PageId, Course, Mentor } from '../types';
import { EduHero } from '../components/EduHero';
import { UniversityPartnersSection } from '../components/UniversityPartnersSection';
import { StatsSection } from '../components/StatsSection';
import { CategoriesBentoSection } from '../components/CategoriesBentoSection';
import { FeaturedCoursesSection } from '../components/FeaturedCoursesSection';
import { WhyEduvoraSection } from '../components/WhyEduvoraSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { LearningExperienceSection } from '../components/LearningExperienceSection';
import { ExpertInstructorsSection } from '../components/ExpertInstructorsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CareerCtaSection } from '../components/CareerCtaSection';
import { FaqSection } from '../components/FaqSection';
import { MentorBookingModal } from '../components/MentorBookingModal';
import { COURSES_DATA, MENTORS_DATA } from '../data/edupathData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectCourse: (course: Course) => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
  onSearchSubmit: (query: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectCourse,
  onOpenAuth,
  onSearchSubmit,
}) => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleSelectMentor = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setIsBookingOpen(true);
  };

  return (
    <div className="bg-[#F8FAFC] text-slate-900 min-h-screen">
      {/* 1. Hero Section with Beams, Gradient Text & Female Learner Visual */}
      <EduHero
        onNavigate={onNavigate}
        onOpenAuth={onOpenAuth}
      />

      {/* 2. University Academic Partners Logo Loop */}
      <UniversityPartnersSection />

      {/* 3. Key Platform Statistics with CountUp Animation */}
      <StatsSection />

      {/* 4. Course Disciplines Magic Bento Grid */}
      <CategoriesBentoSection onNavigate={onNavigate} />

      {/* 5. Featured Courses Section with Spotlight Cards */}
      <FeaturedCoursesSection
        courses={COURSES_DATA}
        onSelectCourse={onSelectCourse}
        onNavigate={onNavigate}
      />

      {/* 6. Why Eduvora Advantage Section */}
      <WhyEduvoraSection />

      {/* 7. How Eduvora Works Interactive Stepper */}
      <HowItWorksSection />

      {/* 8. Learning Experience Platform Showcase */}
      <LearningExperienceSection />

      {/* 9. Expert Faculty & Instructors */}
      <ExpertInstructorsSection
        mentors={MENTORS_DATA}
        onSelectMentor={handleSelectMentor}
        onNavigate={onNavigate}
      />

      {/* 10. Alumni Testimonials with CardSwap Stack */}
      <TestimonialsSection />

      {/* 11. Career Opportunity CTA Section */}
      <CareerCtaSection
        onNavigate={onNavigate}
        onOpenAuth={onOpenAuth}
      />

      {/* 12. Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* Interactive 1:1 Booking Modal */}
      <MentorBookingModal
        mentor={selectedMentor}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};
