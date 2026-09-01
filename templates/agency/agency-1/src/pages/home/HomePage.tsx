import { Page } from "@/components/layout/Page";
import { HeroSection } from "./sections/HeroSection";
import { ManifestoSection } from "./sections/ManifestoSection";
import { FeaturedWorkSection } from "./sections/FeaturedWorkSection";
import { ServicesSection } from "./sections/ServicesSection";
import { StudioSection } from "./sections/StudioSection";
import { JournalSection } from "./sections/JournalSection";
import { CtaSection } from "./sections/CtaSection";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export function HomePage() {
  useDocumentTitle("Foldline — Design & Technology Studio");
  return (
    <Page curtain>
      <HeroSection />
      <ManifestoSection />
      <FeaturedWorkSection />
      <ServicesSection />
      <StudioSection />
      <JournalSection />
      <CtaSection />
    </Page>
  );
}
