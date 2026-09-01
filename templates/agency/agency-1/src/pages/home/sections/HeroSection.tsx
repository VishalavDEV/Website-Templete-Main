import { motion, useReducedMotion } from "motion/react";
import { ScrollCinema } from "@/components/cinema/ScrollCinema";
import { SplitWords } from "@/components/ui/SplitWords";
import { Magnetic } from "@/components/ui/Magnetic";
import { ArrowLink, btnPrimary } from "@/components/ui/Buttons";
import { Link } from "react-router-dom";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] w-full">
      <ScrollCinema className="absolute inset-0 h-full w-full" />

      <div className="container-x relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 sm:pb-20">
        <p className="meta-label mb-5">Design & technology studio</p>

        <h1 className="display-xl max-w-[12ch] text-ink">
          <span className="sr-only">Brands that move people</span>
          <SplitWords text="Brands that move people." mode="mount" delay={0.15} />
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="body-lede mt-6 max-w-[46ch]"
        >
          We design identities, products and motion for companies that refuse
          to be forgettable.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center gap-6"
        >
          <Magnetic strength={0.25}>
            <Link to="/contact" className={btnPrimary}>
              Start a project
            </Link>
          </Magnetic>
          <ArrowLink to="/work">Explore work</ArrowLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-20 right-5 hidden items-center gap-3 sm:right-8 md:flex lg:right-12"
        >
          <span className="meta-label">Scroll</span>
          {!reduce && (
            <motion.span
              className="block h-10 w-px origin-top bg-ink/50"
              animate={{ scaleY: [0.2, 1, 0.2], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
