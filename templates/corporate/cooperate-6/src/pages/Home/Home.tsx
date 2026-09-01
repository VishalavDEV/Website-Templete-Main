import React from 'react';
import HeroSection from '../../components/home/HeroSection';
import TrustedCompanies from '../../components/home/TrustedCompanies';
import CorporateIntro from '../../components/home/CorporateIntro';
import TravelSolutionsRows from '../../components/home/TravelSolutionsRows';
import GlobalReachMap from '../../components/home/GlobalReachMap';
import FeaturedDestinations from '../../components/home/FeaturedDestinations';
import TechDashboardSection from '../../components/home/TechDashboardSection';
import ProcessTimeline from '../../components/home/ProcessTimeline';
import BusinessStoriesSection from '../../components/home/BusinessStoriesSection';
import ExecutiveExperienceSection from '../../components/home/ExecutiveExperienceSection';
import MiceSection from '../../components/home/MiceSection';
import TravelSafetySection from '../../components/home/TravelSafetySection';
import SustainabilitySection from '../../components/home/SustainabilitySection';
import TestimonialSection from '../../components/home/TestimonialSection';
import InsightsSection from '../../components/home/InsightsSection';
import CareersTeaser from '../../components/home/CareersTeaser';
import FinalCtaSection from '../../components/home/FinalCtaSection';

interface HomeProps {
  onOpenConsultation: () => void;
}

export default function Home({ onOpenConsultation }: HomeProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1 — HERO */}
      <HeroSection onOpenConsultation={onOpenConsultation} />

      {/* SECTION 2 — TRUSTED COMPANIES */}
      <TrustedCompanies />

      {/* SECTION 3 — CORPORATE TRAVEL INTRODUCTION */}
      <CorporateIntro />

      {/* SECTION 4 — TRAVEL SOLUTIONS (Large Horizontal Interactive Rows) */}
      <TravelSolutionsRows />

      {/* SECTION 5 — GLOBAL REACH (Interactive World Map) */}
      <GlobalReachMap />

      {/* SECTION 6 — FEATURED DESTINATIONS (Editorial Showcase) */}
      <FeaturedDestinations />

      {/* SECTION 7 — CORPORATE TRAVEL TECHNOLOGY (Connected Platform Dashboard) */}
      <TechDashboardSection />

      {/* SECTION 8 — TRAVEL MANAGEMENT PROCESS (Journey Timeline 01-05) */}
      <ProcessTimeline />

      {/* SECTION 9 — BUSINESS TRAVEL STORIES (Case Studies) */}
      <BusinessStoriesSection />

      {/* SECTION 10 — EXECUTIVE EXPERIENCE (Premium Dark Section) */}
      <ExecutiveExperienceSection onOpenConsultation={onOpenConsultation} />

      {/* SECTION 11 — MICE & EVENTS (Corporate Gatherings at Scale) */}
      <MiceSection onOpenConsultation={onOpenConsultation} />

      {/* SECTION 12 — TRAVEL SAFETY (Duty of Care & Security Intelligence) */}
      <TravelSafetySection />

      {/* SECTION 13 — SUSTAINABLE TRAVEL (ESG & Carbon Analytics) */}
      <SustainabilitySection />

      {/* SECTION 14 — TRAVELER TESTIMONIAL (Editorial Quote) */}
      <TestimonialSection />

      {/* SECTION 15 — INSIGHTS (Thought Leadership Articles) */}
      <InsightsSection />

      {/* SECTION 16 — CAREERS TEASER */}
      <CareersTeaser />

      {/* SECTION 17 — FINAL CTA */}
      <FinalCtaSection onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
