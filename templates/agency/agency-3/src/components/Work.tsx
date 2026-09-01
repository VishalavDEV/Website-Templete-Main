"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    client: "NOMA",
    category: "Brand Identity / Digital",
    year: "2026",
    title: "Redefining Modern Luxury",
    description:
      "A complete brand overhaul for a next-generation lifestyle brand. From strategy to digital presence.",
    result: "+240% brand recall",
    color: "from-terracotta/30 to-deep-brown/20",
    size: "large",
  },
  {
    number: "02",
    client: "VERA",
    category: "Digital Experience",
    year: "2026",
    title: "Immersive Product World",
    description:
      "An interactive 3D product configurator and immersive brand experience for a tech-forward beauty company.",
    result: "3.2× engagement",
    color: "from-muted-purple/30 to-mauve/20",
    size: "medium",
  },
  {
    number: "03",
    client: "KORA",
    category: "Campaign / Art Direction",
    year: "2025",
    title: "The Art of Stillness",
    description:
      "A multi-channel campaign that redefined how wellness brands communicate. Bold, quiet, and intentional.",
    result: "12M+ impressions",
    color: "from-warm-orange/25 to-terracotta/15",
    size: "medium",
  },
  {
    number: "04",
    client: "MONO",
    category: "Web Design / Development",
    year: "2025",
    title: "Minimalism, Amplified",
    description:
      "A bespoke website for an architecture studio. Every detail crafted to mirror their design philosophy.",
    result: "4.8s avg. session",
    color: "from-near-black/40 to-deep-brown/30",
    size: "large",
  },
  {
    number: "05",
    client: "LUMA",
    category: "Brand Strategy",
    year: "2026",
    title: "Light the Way",
    description:
      "Strategic positioning and visual identity for a sustainability-focused innovation lab.",
    result: "28 markets reached",
    color: "from-warm-orange/20 to-mauve/15",
    size: "full",
  },
];

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" ref={ref} className="relative bg-cream py-24 md:py-32 lg:py-40">
      <div className="px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-micro text-warm-orange mb-4">[PORTFOLIO]</div>
            <h2
              className="text-display font-bold text-near-black leading-[0.95] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              SELECTED
              <br />
              WORK
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 md:mt-0"
          >
            <a
              href="#"
              className="group text-micro text-near-black hover:text-warm-orange transition-colors duration-300 flex items-center gap-2"
            >
              VIEW ALL PROJECTS
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          </motion.div>
        </div>

        {/* Projects grid - asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const isLarge = project.size === "large";
            const isFull = project.size === "full";

            return (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + index * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`work-card group ${
                  isFull
                    ? "md:col-span-12"
                    : isLarge
                    ? "md:col-span-7"
                    : "md:col-span-5"
                } ${index === 3 ? "md:col-start-1" : ""} ${
                  index === 4 ? "md:col-start-1" : ""
                }`}
              >
                <a href="#" className="block">
                  {/* Image area */}
                  <div
                    className={`relative overflow-hidden bg-gradient-to-br ${project.color} ${
                      isFull
                        ? "aspect-[21/9]"
                        : isLarge
                        ? "aspect-[4/3]"
                        : "aspect-[3/4]"
                    } mb-5 md:mb-6`}
                  >
                    {/* Abstract project artwork */}
                    <div className="absolute inset-0 flex items-center justify-center work-card-image">
                      <span
                        className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-near-black/[0.03] select-none leading-none"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {project.client.charAt(0)}
                      </span>
                    </div>

                    {/* Project number overlay */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6">
                      <span className="text-micro text-near-black/40">
                        {project.number}
                      </span>
                    </div>

                    {/* Arrow overlay */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight size={20} className="text-near-black/60" />
                    </div>
                  </div>

                  {/* Project info */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline justify-between">
                      <h3
                        className="text-xl md:text-2xl font-semibold text-near-black group-hover:text-warm-orange transition-colors duration-300"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {project.client}
                      </h3>
                      <span className="text-micro text-warm-gray">
                        {project.year}
                      </span>
                    </div>
                    <div className="text-micro text-warm-gray">
                      {project.category}
                    </div>
                    <p className="text-sm text-warm-gray mt-1 max-w-md leading-relaxed">
                      {project.description}
                    </p>
                    <div className="text-micro text-terracotta mt-2">
                      {project.result}
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-near-black/10" />
    </section>
  );
}
