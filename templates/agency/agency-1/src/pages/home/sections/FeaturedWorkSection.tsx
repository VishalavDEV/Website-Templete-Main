import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitWords";
import { ArrowLink } from "@/components/ui/Buttons";
import { TintedImage } from "@/components/ui/TintedImage";
import { Pill } from "@/components/ui/Pill";
import { projects } from "@/data/projects";
import { photo } from "@/lib/images";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const FEATURED = projects.slice(0, 3);

export function FeaturedWorkSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();

  /* Desktop: pin the section and scrub the track horizontally.
     Mobile / reduced motion: natural horizontal scroll with snap. */
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!desktop || reduce || !wrapRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const distance = () => trackRef.current!.scrollWidth - window.innerWidth;
      gsap.to(trackRef.current, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrapRef);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section className="bg-paper">
      <div ref={wrapRef} className="relative overflow-hidden py-20 lg:h-[100svh] lg:py-0">
        <div className="container-x mb-10 flex flex-wrap items-end justify-between gap-6 lg:absolute lg:inset-x-0 lg:top-24 lg:z-10 lg:mb-0">
          <SplitHeading
            as="h2"
            text="Selected work"
            className="display-lg"
          />
          <ArrowLink to="/work">Explore work</ArrowLink>
        </div>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-8 overflow-x-auto px-5 pb-4 sm:px-8 lg:snap-none lg:overflow-visible lg:px-12 lg:pt-44"
          style={{ scrollbarWidth: "none" }}
        >
          {FEATURED.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={i * 0.08}
              className="w-[82vw] shrink-0 snap-center sm:w-[70vw] lg:w-[46rem]"
            >
              <Link
                to={`/work/${p.slug}`}
                data-cursor="view"
                data-cursor-label="View"
                className="group block outline-offset-8"
                aria-label={`${p.title} — ${p.category} case study`}
              >
                <TintedImage
                  src={photo(p.seed, 1280, 900)}
                  fallbackSeed={p.seed}
                  tint={p.tint}
                  alt={`${p.client} — ${p.title}`}
                  eager={i === 0}
                  className="aspect-[4/3] w-full"
                />
                <div className="mt-5 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="display-md group-hover:text-coral transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-ink2">{p.client}</p>
                  </div>
                  <Pill>{p.category}</Pill>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
