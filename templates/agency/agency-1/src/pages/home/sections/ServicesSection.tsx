import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/Buttons";
import { Marquee } from "@/components/ui/Marquee";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section className="border-y border-line bg-cream py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <p className="meta-label">What we do</p>
        </Reveal>
      </div>

      <Marquee
        items={services.map((s) => s.title)}
        className="mt-8"
      />

      <div className="container-x mt-16">
        <ul className="divide-y divide-line border-t border-line">
          {services.map((s, i) => (
            <li key={s.id}>
              <Reveal delay={i * 0.05}>
                <div className="grid gap-3 py-7 sm:grid-cols-[5rem_1fr_auto] sm:items-baseline">
                  <span className="font-mono text-sm text-coral">{s.index}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.01em]">
                      {s.title}
                    </h3>
                    <p className="mt-1 max-w-[52ch] text-ink2">{s.tagline}</p>
                  </div>
                  <span className="hidden font-mono text-xs uppercase tracking-[0.12em] text-ink2/70 sm:block">
                    {s.deliverables.length} deliverables
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.1} className="mt-10">
          <ArrowLink to="/services">See all services</ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
