"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Strategy",
    description:
      "Brand positioning, market research, competitive analysis, and strategic frameworks that give ideas direction.",
  },
  {
    number: "02",
    title: "Branding",
    description:
      "Visual identity, brand systems, typography, color, and the details that make brands unforgettable.",
  },
  {
    number: "03",
    title: "Art Direction",
    description:
      "Photography direction, visual storytelling, campaign concepts, and the creative vision that ties everything together.",
  },
  {
    number: "04",
    title: "Web Design",
    description:
      "Editorial layouts, interaction design, UI/UX, and interfaces that look as good as they work.",
  },
  {
    number: "05",
    title: "Web Development",
    description:
      "Performance-driven builds with modern frameworks, smooth animations, and pixel-perfect execution.",
  },
  {
    number: "06",
    title: "Digital Experiences",
    description:
      "Interactive installations, immersive web, and creative technology that pushes boundaries.",
  },
  {
    number: "07",
    title: "Marketing",
    description:
      "Campaign strategy, content planning, growth frameworks, and measurable results.",
  },
  {
    number: "08",
    title: "Content",
    description:
      "Editorial content, copywriting, visual narratives, and storytelling that resonates.",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" ref={ref} className="relative bg-dark-section py-24 md:py-32 lg:py-40">
      <div className="px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-micro text-warm-orange mb-4">[WHAT WE DO]</div>
            <h2
              className="text-display font-bold text-cream leading-[0.95] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              OUR
              <br />
              SERVICES
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 md:mt-0"
          >
            <p className="text-body-lg text-warm-gray-light max-w-sm">
              Full-spectrum creative services, delivered with intention.
            </p>
          </motion.div>
        </div>

        {/* Services list */}
        <div className="border-t border-cream/10">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
            >
              <a
                href="#contact"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="service-row group flex items-center justify-between py-6 md:py-8 border-b border-cream/10 cursor-pointer"
              >
                <div className="flex items-baseline gap-4 md:gap-8 flex-1 min-w-0">
                  <span className="text-micro text-warm-gray/50 w-8 shrink-0">
                    {service.number}
                  </span>
                  <h3
                    className={`text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.01em] transition-colors duration-300 ${
                      hoveredIndex === index
                        ? "text-warm-orange"
                        : "text-cream"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h3>
                  <span className="hidden md:block text-body-lg text-warm-gray/50 truncate flex-1 ml-4">
                    {service.description}
                  </span>
                </div>
                <div className="ml-4 md:ml-8 shrink-0">
                  <ArrowUpRight
                    size={20}
                    className={`service-arrow text-cream/30 transition-all duration-300 ${
                      hoveredIndex === index
                        ? "text-warm-orange translate-x-0.5 -translate-y-0.5"
                        : ""
                    }`}
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
