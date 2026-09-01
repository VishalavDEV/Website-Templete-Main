import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitWords";
import { ArrowLink } from "@/components/ui/Buttons";
import { TintedImage } from "@/components/ui/TintedImage";
import { photo } from "@/lib/images";

const stats = [
  { value: "2019", label: "Founded" },
  { value: "14", label: "People" },
  { value: "60+", label: "Launches" },
];

export function StudioSection() {
  return (
    <section className="container-x grid gap-12 py-28 sm:py-36 lg:grid-cols-12 lg:gap-8">
      <Reveal className="lg:col-span-7 lg:col-start-1">
        <TintedImage
          src={photo("foldline-studio-teaser", 1200, 900)}
          fallbackSeed="foldline-studio-teaser"
          tint="lavsoft"
          alt="The Foldline studio space during a working session"
          className="aspect-[4/3]"
        />
      </Reveal>

      <div className="flex flex-col justify-center lg:col-span-4 lg:col-start-9">
        <SplitHeading
          as="h2"
          text="A small studio with heavy opinions"
          className="display-md"
        />
        <Reveal delay={0.12}>
          <p className="body-lede mt-5">
            Fourteen senior designers, engineers and producers across San
            Francisco and Copenhagen. No account layers, no hand-offs into the
            void — the people you meet are the people who make the work.
          </p>
        </Reveal>

        <dl className="mt-8 flex gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="meta-label">{s.label}</dt>
              <dd className="mt-1 font-mono text-2xl font-semibold tracking-tight text-ink">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        <Reveal delay={0.2} className="mt-8">
          <ArrowLink to="/studio">Meet the team</ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
