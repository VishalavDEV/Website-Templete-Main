import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Page } from "@/components/layout/Page";
import { SplitHeading } from "@/components/ui/SplitWords";
import { Reveal } from "@/components/ui/Reveal";
import { TintedImage } from "@/components/ui/TintedImage";
import { Pill } from "@/components/ui/Pill";
import { categories, projects, type WorkCategory } from "@/data/projects";
import { photo } from "@/lib/images";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

type Filter = "All" | WorkCategory;

const SPANS = [
  "lg:col-span-7",
  "lg:col-span-5 lg:col-start-8",
  "lg:col-span-6",
  "lg:col-span-5 lg:col-start-8",
  "lg:col-span-5",
  "lg:col-span-7",
];

export function WorkIndexPage() {
  useDocumentTitle("Work");
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <Page curtain>
      <header className="container-x pb-14 pt-36 sm:pt-44">
        <SplitHeading
          as="h1"
          mode="mount"
          text="Work that had a job to do."
          className="display-xl max-w-[14ch]"
        />
        <Reveal delay={0.2}>
          <p className="body-lede mt-6 max-w-[52ch]">
            Six recent engagements across branding, digital product and motion.
            Every one started with a business problem, not a moodboard.
          </p>
        </Reveal>
      </header>

      <div className="container-x flex flex-wrap items-center gap-3 border-t border-line py-6">
        <h2 className="sr-only">Filter projects</h2>
        {categories.map((c) => (
          <Pill
            key={c}
            active={filter === c}
            ariaPressed={filter === c}
            onClick={() => setFilter(c)}
          >
            {c}
          </Pill>
        ))}
        <p aria-live="polite" className="ml-auto font-mono text-xs uppercase tracking-[0.12em] text-ink2">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>
      </div>

      <section className="container-x pb-24 sm:pb-32">
        <ul className="grid gap-x-8 gap-y-16 lg:grid-cols-12 lg:gap-y-28">
          {visible.map((p, i) => (
            <li
              key={p.slug}
              className={`lg:col-span-6 ${SPANS[i % SPANS.length]}`}
            >
              <Reveal>
                <Link
                  to={`/work/${p.slug}`}
                  data-cursor="view"
                  data-cursor-label="View"
                  className="group block"
                  aria-label={`${p.title} — ${p.category} case study`}
                >
                  <TintedImage
                    src={photo(p.seed, 1100, 820)}
                    fallbackSeed={p.seed}
                    tint={p.tint}
                    alt={`${p.client} — ${p.title}`}
                    eager={i < 2}
                    className={`aspect-[4/3] ${i % 2 === 1 ? "lg:-mt-10" : ""}`}
                  />
                  <div className="mt-5 flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <h3 className="display-md transition-colors duration-300 group-hover:text-coral">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-ink2">
                        {p.client} · {p.year}
                      </p>
                    </div>
                    <Pill>{p.category}</Pill>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </Page>
  );
}
