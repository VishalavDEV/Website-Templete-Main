import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitWords";
import { ArrowLink } from "@/components/ui/Buttons";
import { articles } from "@/data/journal";

export function JournalSection() {
  const latest = articles.slice(0, 3);

  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SplitHeading as="h2" text="Notes from the studio" className="display-lg" />
          <ArrowLink to="/journal">Read the journal</ArrowLink>
        </div>

        <ul className="mt-14 divide-y divide-line border-y border-line">
          {latest.map((a, i) => (
            <li key={a.slug}>
              <Reveal delay={i * 0.05}>
                <Link
                  to={`/journal/${a.slug}`}
                  data-cursor="view"
                  data-cursor-label="Read"
                  className="group flex flex-wrap items-baseline gap-x-8 gap-y-2 py-7"
                >
                  <time
                    dateTime={a.date}
                    className="font-mono text-xs uppercase tracking-[0.12em] text-ink2"
                  >
                    {new Date(a.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold tracking-[-0.01em] transition-colors duration-300 group-hover:text-coral sm:text-2xl">
                      {a.title}
                    </h3>
                    <p className="mt-1 max-w-[64ch] text-[0.95rem] text-ink2">
                      {a.dek}
                    </p>
                  </span>
                  <ArrowRight
                    size={18}
                    weight="bold"
                    aria-hidden="true"
                    className="self-center text-coral transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
