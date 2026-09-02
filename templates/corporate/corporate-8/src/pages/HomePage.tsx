import React from "react";
import { HeroSection } from "../components/sections/HeroSection";
import { TrustStatementSection } from "../components/sections/TrustStatementSection";
import { MetricsStripSection } from "../components/sections/MetricsStripSection";
import { CapabilitiesStackedSection } from "../components/sections/CapabilitiesStackedSection";
import { FeaturedWorkSection } from "../components/sections/FeaturedWorkSection";
import { IndustrySelectorSection } from "../components/sections/IndustrySelectorSection";
import { ProcessTimelineSection } from "../components/sections/ProcessTimelineSection";
import { TechnologyEcosystemSection } from "../components/sections/TechnologyEcosystemSection";
import { InsightsEditorialSection } from "../components/sections/InsightsEditorialSection";
import { LeadershipSection } from "../components/sections/LeadershipSection";
import { TestimonialSection } from "../components/sections/TestimonialSection";
import { GlobalPresenceSection } from "../components/sections/GlobalPresenceSection";
import { CareersSection } from "../components/sections/CareersSection";
import { FinalCtaSection } from "../components/sections/FinalCtaSection";

export interface HomePageProps {
  onOpenScoping: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenScoping }) => {
  return (
    <div className="w-full">
      {/* 01. Hero Section (Split Screen 55/45) */}
      <HeroSection onOpenScoping={onOpenScoping} />

      {/* 02. Trust Statement (Oversized Editorial Typography) */}
      <TrustStatementSection />

      {/* 03. Metrics Strip (Horizontal Data Strip with Animated Counters) */}
      <MetricsStripSection />

      {/* 04. Capabilities (Vertically Stacked Interactive Rows) */}
      <CapabilitiesStackedSection />

      {/* 05. Featured Work (Asymmetric Magazine Editorial Case Studies) */}
      <FeaturedWorkSection />

      {/* 06. Industry Selector (8 Vertical Sectors with Dynamic Transitions) */}
      <IndustrySelectorSection />

      {/* 07. Process Timeline (6-Stage Horizontal Delivery Lifecycle) */}
      <ProcessTimelineSection />

      {/* 08. Technology Ecosystem (6-Layer Composable Stack Schematic) */}
      <TechnologyEcosystemSection />

      {/* 09. Insights & Research (Magazine Perspectives) */}
      <InsightsEditorialSection />

      {/* 10. Leadership (Executive Profiles & Portrait Photography) */}
      <LeadershipSection />

      {/* 11. Testimonial (Full-Width High-Impact Statement) */}
      <TestimonialSection />

      {/* 12. Global Presence (Interactive 8-Hub Delivery Map) */}
      <GlobalPresenceSection />

      {/* 13. Careers (Talent Invitation & Open Roles) */}
      <CareersSection />

      {/* 14. Final CTA (Massive Editorial Headline & Direct Scoping) */}
      <FinalCtaSection onOpenScoping={onOpenScoping} />
    </div>
  );
};
