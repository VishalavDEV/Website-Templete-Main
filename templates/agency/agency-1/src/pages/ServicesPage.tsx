import { useState } from "react";
import { motion } from "motion/react";
import { Page } from "@/components/layout/Page";
import { SplitHeading } from "@/components/ui/SplitWords";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/Buttons";
import { services } from "@/data/services";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

function AccordionItem({
  id,
  index,
  title,
  tagline,
  description,
  deliverables,
  open,
  onToggle,
}: {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  open: boolean;
  onToggle: () => void;
}) {
  const buttonId = `acc-button-${id}`;
  const panelId = `acc-panel-${id}`;
  return (
    <li className="border-b border-line">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="group grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-x-6 py-7 text-left"
        >
          <span className="font-mono text-sm text-coral">{index}</span>
          <span>
            <span className="block text-xl font-semibold tracking-[-0.01em] transition-colors duration-200 group-hover:text-coral sm:text-2xl">
              {title}
            </span>
            <span className="mt-1 block text-[0.95rem] text-ink2">{tagline}</span>
          </span>
          <span
            aria-hidden="true"
            className={`relative block size-5 self-center justify-self-end transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
          >
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink" />
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink" />
          </span>
        </button>
      </h3>

      {open && (
        <motion.div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className="max-w-[62ch] pb-8 sm:pl-[calc(2rem+1.5rem)]">
            <p className="leading-relaxed text-ink">{description}</p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {deliverables.map((d) => (
                <li key={d} className="rounded-full bg-lavsoft/70 px-3.5 py-1.5 text-sm text-ink">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </li>
  );
}

export function ServicesPage() {
  useDocumentTitle("Services");
  const [openId, setOpenId] = useState<string | null>(services[0].id);

  return (
    <Page curtain>
      <header className="container-x pb-16 pt-36 sm:pt-44">
        <SplitHeading
          as="h1"
          mode="mount"
          text="Five disciplines, one standard."
          className="display-xl max-w-[15ch]"
        />
        <Reveal delay={0.2}>
          <p className="body-lede mt-6 max-w-[54ch]">
            We take on few engagements and go deep. Most projects combine two
            or three of these — the seams between them are where good work
            happens.
          </p>
        </Reveal>
      </header>

      <section aria-label="Services" className="container-x pb-24 sm:pb-32">
        <Reveal>
          <ul className="border-t border-line">
            {services.map((s) => (
              <AccordionItem
                key={s.id}
                id={s.id}
                index={s.index}
                title={s.title}
                tagline={s.tagline}
                description={s.description}
                deliverables={s.deliverables}
                open={openId === s.id}
                onToggle={() => setOpenId(openId === s.id ? null : s.id)}
              />
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <p className="body-lede max-w-[46ch]">
            Not sure which shape your project takes? Describe the problem —
            we'll propose the discipline.
          </p>
          <div className="mt-6">
            <ArrowLink to="/contact">Start a project</ArrowLink>
          </div>
        </Reveal>
      </section>
    </Page>
  );
}
