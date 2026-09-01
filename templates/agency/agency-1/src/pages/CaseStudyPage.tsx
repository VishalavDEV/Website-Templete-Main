import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import { Page } from "@/components/layout/Page";
import { SplitHeading } from "@/components/ui/SplitWords";
import { Reveal } from "@/components/ui/Reveal";
import { TintedImage } from "@/components/ui/TintedImage";
import { Pill } from "@/components/ui/Pill";
import { getProject, nextProject } from "@/data/projects";
import { photo } from "@/lib/images";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { NotFoundPage } from "./NotFoundPage";

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;
  useDocumentTitle(project ? `${project.client} — ${project.title}` : "Work");

  if (!project) return <NotFoundPage />;
  const next = nextProject(project.slug);

  return (
    <Page curtain>
      <article>
        <header className="container-x pb-12 pt-32 sm:pt-40">
          <Reveal>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink2 transition-colors hover:text-ink"
            >
              <ArrowLeft size={13} weight="bold" aria-hidden="true" />
              All work
            </Link>
          </Reveal>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Pill>{project.category}</Pill>
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink2">
              {project.year}
            </span>
          </div>

          <SplitHeading
            as="h1"
            mode="mount"
            text={project.title}
            className="display-xl mt-6 max-w-[16ch]"
          />
          <p className="body-lede mt-6 max-w-[54ch]">{project.summary}</p>
        </header>

        <Reveal className="container-x">
          <TintedImage
            src={photo(`${project.seed}-hero`, 1800, 1000)}
            fallbackSeed={project.seed}
            tint={project.tint}
            alt={`${project.client} — project hero`}
            eager
            colorOnHover={false}
            className="aspect-[16/9]"
          />
        </Reveal>

        {/* Facts band */}
        <section
          aria-label="Project outcomes"
          className="border-y border-line bg-paper"
        >
          <dl className="container-x grid gap-8 py-12 sm:grid-cols-3 sm:gap-6">
            {project.facts.map((f) => (
              <div key={f.label}>
                <dt className="meta-label">{f.label}</dt>
                <dd className="mt-2 font-mono text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Narrative */}
        <div className="container-x py-20 sm:py-28">
          {[
            { label: "The challenge", text: project.challenge, offset: "" },
            {
              label: "The approach",
              text: project.approach,
              offset: "lg:pl-[14%]",
            },
            {
              label: "The outcome",
              text: project.outcome,
              offset: "",
            },
          ].map((block, i) => (
            <Reveal key={block.label} className={block.offset}>
              <div className="max-w-[62ch] py-8">
                <h2 className="meta-label">{block.label}</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink">
                  {block.text}
                </p>
                {i === 0 && (
                  <ul className="mt-7 flex flex-wrap gap-2.5">
                    {project.services.map((s) => (
                      <li key={s}>
                        <Pill>{s}</Pill>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}

          <Reveal className="my-10 lg:w-[70%] lg:pl-[8%]">
            <blockquote className="display-md text-balance">
              “{project.quote.text}”
            </blockquote>
            <footer className="mt-5 text-ink2">
              — {project.quote.name}, {project.quote.role}
            </footer>
          </Reveal>
        </div>

        {/* Next project */}
        <aside aria-labelledby="next-project" className="bg-paper">
          <div className="container-x py-16 sm:py-20">
            <h2 id="next-project" className="meta-label">
              Next case study
            </h2>
            <Link
              to={`/work/${next.slug}`}
              data-cursor="view"
              data-cursor-label="View"
              className="group mt-4 block"
            >
              <span className="display-lg block max-w-[18ch] text-balance transition-colors duration-300 group-hover:text-coral">
                {next.title}
              </span>
              <span className="mt-3 inline-block text-ink2">
                {next.client} · {next.category}
              </span>
            </Link>
          </div>
        </aside>
      </article>
    </Page>
  );
}
