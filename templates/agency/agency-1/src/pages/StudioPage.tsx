import { lazy, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Page } from "@/components/layout/Page";
import { SplitHeading } from "@/components/ui/SplitWords";
import { Reveal } from "@/components/ui/Reveal";
import { TintedImage } from "@/components/ui/TintedImage";
import { ThreeStage } from "@/components/three/ThreeStage";
import { processSteps, studio, team, values } from "@/data/studio";
import { photo } from "@/lib/images";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

gsap.registerPlugin(ScrollTrigger);

const FloatCanvas = lazy(() =>
  import("@/components/three/scenes").then((m) => ({ default: m.FloatCanvas })),
);
const ProcessCanvas = lazy(() =>
  import("@/components/three/scenes").then((m) => ({ default: m.ProcessCanvas })),
);

export function StudioPage() {
  useDocumentTitle("Studio");
  const progressRef = useRef(0);
  const stepsRef = useRef<HTMLDivElement>(null);

  /* Map scroll through the process list -> 3D progress (no React state). */
  useEffect(() => {
    if (!stepsRef.current) return;
    const st = ScrollTrigger.create({
      trigger: stepsRef.current,
      start: "top 65%",
      end: "bottom 45%",
      onUpdate: (self) => {
        progressRef.current = self.progress;
      },
    });
    return () => st.kill();
  }, []);

  return (
    <Page curtain>
      {/* Intro */}
      <header className="container-x grid gap-10 pb-20 pt-36 sm:pt-44 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SplitHeading
            as="h1"
            mode="mount"
            text="Fourteen people, one standard of craft."
            className="display-xl max-w-[14ch]"
          />
        </div>
        <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
          <Reveal delay={0.15}>
            <p className="body-lede">{studio.manifesto}</p>
          </Reveal>
        </div>
      </header>

      {/* Subtle floating shapes */}
      <Reveal className="container-x">
        <ThreeStage kind="float" className="h-[52svh] rounded-[18px] sm:h-[60svh]">
          <FloatCanvas />
        </ThreeStage>
      </Reveal>

      {/* Values */}
      <section className="container-x py-24 sm:py-32">
        <SplitHeading as="h2" text="How we work" className="display-lg" />
        <ul className="mt-12 grid gap-x-16 border-t border-line md:grid-cols-2">
          {values.map((v, i) => (
            <li key={v.title}>
              <Reveal delay={i * 0.06} className="border-b border-line py-8">
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-sm text-coral">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.01em]">
                      {v.title}
                    </h3>
                    <p className="mt-2 max-w-[46ch] leading-relaxed text-ink2">
                      {v.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Team */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="container-x">
          <SplitHeading as="h2" text="The people" className="display-lg" />
          <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <li key={m.name}>
                <Reveal delay={(i % 3) * 0.07}>
                  <TintedImage
                    src={photo(m.seed, 600, 700)}
                    fallbackSeed={m.seed}
                    tint={i % 2 === 0 ? "lavsoft" : "peach"}
                    alt={`Portrait of ${m.name}`}
                    className="aspect-[6/7]"
                  />
                  <h3 className="mt-4 text-lg font-semibold">{m.name}</h3>
                  <p className="text-[0.95rem] text-ink2">{m.role}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process — moderate 3D driven by scroll */}
      <section className="container-x py-24 sm:py-32">
        <SplitHeading as="h2" text="The way through" className="display-lg mb-4" />

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <ThreeStage kind="process" className="h-[46svh] rounded-[18px] lg:h-[64svh]">
                <ProcessCanvas progressRef={progressRef} />
              </ThreeStage>
              <p className="meta-label mt-4">
                Rings respond as you move through the steps
              </p>
            </div>
          </div>

          <div ref={stepsRef} className="lg:col-span-6 lg:col-start-7">
            <ol className="divide-y divide-line border-y border-line">
              {processSteps.map((s) => (
                <li key={s.index} className="py-12 lg:min-h-[42svh] lg:flex lg:flex-col lg:justify-center">
                  <Reveal delay={0.05}>
                    <div className="flex items-baseline gap-5">
                      <span className="font-mono text-sm text-coral">{s.index}</span>
                      <div>
                        <h3 className="display-md">{s.title}</h3>
                        <p className="meta-label mt-2">{s.duration}</p>
                        <p className="mt-4 max-w-[48ch] leading-relaxed text-ink2">
                          {s.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </Page>
  );
}

