import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitWords";
import { ArrowLink } from "@/components/ui/Buttons";

export function ManifestoSection() {
  return (
    <section className="container-x py-28 sm:py-36 lg:pl-[16%]">
      <SplitHeading
        as="h2"
        text="Attention is earned in milliseconds and kept over years. We design for both."
        className="display-lg max-w-[24ch] text-balance"
      />
      <Reveal delay={0.15} className="mt-8 max-w-[52ch]">
        <p className="body-lede">
          Foldline is a deliberately small studio. Senior people do the work,
          strategy and craft live in the same room, and every engagement ends
          with your team able to carry the system forward without us.
        </p>
      </Reveal>
      <Reveal delay={0.25} className="mt-7">
        <ArrowLink to="/studio">Meet the studio</ArrowLink>
      </Reveal>
    </section>
  );
}
