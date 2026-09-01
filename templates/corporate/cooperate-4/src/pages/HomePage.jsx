import React from "react";
import { PosterHero } from "../components/PosterHero";
import { DeepIntroStatement } from "../components/DeepIntroStatement";
import { MagazineAbout } from "../components/MagazineAbout";
import { AccordionServices } from "../components/AccordionServices";
import { FashionProjects } from "../components/FashionProjects";
import { ChartreuseShockStatement } from "../components/ChartreuseShockStatement";
import { EditorialIndustriesList } from "../components/EditorialIndustriesList";
import { WarmDigitalSystem } from "../components/WarmDigitalSystem";
import { WarmProcessTimeline } from "../components/WarmProcessTimeline";
import { CreamTestimonial } from "../components/CreamTestimonial";
import { NewspaperInsights } from "../components/NewspaperInsights";
import { EspressoFinalCTA } from "../components/EspressoFinalCTA";

export const HomePage = ({ onOpenProjectModal }) => {
  return (
    <main>
      <PosterHero onOpenProjectModal={onOpenProjectModal} />
      <DeepIntroStatement />
      <MagazineAbout />
      <AccordionServices />
      <FashionProjects />
      <ChartreuseShockStatement />
      <EditorialIndustriesList />
      <WarmDigitalSystem />
      <WarmProcessTimeline />
      <CreamTestimonial />
      <NewspaperInsights />
      <EspressoFinalCTA onOpenProjectModal={onOpenProjectModal} />
    </main>
  );
};
