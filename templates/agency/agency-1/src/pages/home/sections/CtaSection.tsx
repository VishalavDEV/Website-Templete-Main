import { lazy } from "react";
import { Link } from "react-router-dom";
import { ThreeStage } from "@/components/three/ThreeStage";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitWords";
import { Magnetic } from "@/components/ui/Magnetic";

const CtaCanvas = lazy(() =>
  import("@/components/three/scenes").then((m) => ({ default: m.CtaCanvas })),
);

export function CtaSection() {
  return (
    <section className="container-x pb-24 pt-20 sm:pb-32">
      <ThreeStage
        kind="cta"
        className="relative flex min-h-[68svh] items-center justify-center rounded-[18px]"
      >
        <CtaCanvas />
      </ThreeStage>

      <div className="pointer-events-none relative z-10 -mt-[46svh] mb-[16svh] flex flex-col items-center text-center sm:-mt-[44svh]">
        <SplitHeading
          as="h2"
          text="Let's make something people remember."
          className="display-lg max-w-[16ch] text-balance"
        />
        <Reveal delay={0.15} className="pointer-events-auto mt-9">
          <Magnetic strength={0.3}>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-coral px-8 py-4 font-semibold text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
            >
              Start a project
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
