import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { Page } from "@/components/layout/Page";
import { SplitHeading } from "@/components/ui/SplitWords";
import { Reveal } from "@/components/ui/Reveal";
import { TintedImage } from "@/components/ui/TintedImage";
import { articles } from "@/data/journal";
import { photo } from "@/lib/images";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export function JournalIndexPage() {
  useDocumentTitle("Journal");

  return (
    <Page curtain>
      <header className="container-x pb-16 pt-36 sm:pt-44">
        <SplitHeading
          as="h1"
          mode="mount"
          text="Notes from the studio."
          className="display-xl max-w-[14ch]"
        />
        <Reveal delay={0.2}>
          <p className="body-lede mt-6 max-w-[52ch]">
            Working notes on craft, process and the occasional strong opinion.
            Written between projects, not instead of them.
          </p>
        </Reveal>
      </header>

      <section className="container-x pb-24 sm:pb-32">
        <ul className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-y-24">
          {articles.map((a, i) => (
            <li
              key={a.slug}
              className={
                i % 3 === 0
                  ? "lg:col-span-7"
                  : i % 3 === 1
                    ? "lg:col-span-5 lg:mt-16"
                    : "lg:col-span-6 lg:col-start-4"
              }
            >
              <Reveal delay={(i % 3) * 0.06}>
                <Link
                  to={`/journal/${a.slug}`}
                  data-cursor="view"
                  data-cursor-label="Read"
                  className="group block"
                >
                  <TintedImage
                    src={photo(a.seed, 900, 600)}
                    fallbackSeed={a.seed}
                    tint={a.tint}
                    alt=""
                    className="aspect-[3/2]"
                  />
                  <div className="mt-5 flex items-baseline gap-5">
                    <time
                      dateTime={a.date}
                      className="shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-ink2"
                    >
                      {new Date(a.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span>
                      <h2 className="text-xl font-semibold tracking-[-0.01em] transition-colors duration-300 group-hover:text-coral sm:text-2xl">
                        {a.title}
                      </h2>
                      <span className="mt-1.5 block max-w-[56ch] text-[0.95rem] text-ink2">
                        {a.dek}
                      </span>
                    </span>
                    <ArrowRight
                      size={18}
                      weight="bold"
                      aria-hidden="true"
                      className="ml-auto shrink-0 self-center text-coral opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />
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
