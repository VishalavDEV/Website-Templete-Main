import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function About({ template }) {
  const prefersReducedMotion = useReducedMotion();

  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const animationProps = prefersReducedMotion
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true, margin: '-80px' } }
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-brand-light/30 border-y border-brand-border/40 scroll-mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Section title & Small gold label */}
          <motion.div {...animationProps} className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-bold tracking-[0.25em] text-brand-accent mb-4 uppercase">
              {template.about.label}
            </span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-text leading-[1.15] ${template.themeClass}`}>
              {template.about.title}
            </h2>
          </motion.div>

          {/* RIGHT: Detailed descriptions & CTA */}
          <motion.div
            {...animationProps}
            transition={prefersReducedMotion ? {} : { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 lg:pt-2"
          >
            <p className="text-base text-brand-text leading-relaxed">
              {template.about.paragraph1}
            </p>
            <p className="text-sm text-brand-muted leading-relaxed">
              {template.about.paragraph2}
            </p>

            <div className="pt-6">
              <a
                href="#services"
                onClick={(e) => handleScroll(e, '#services')}
                className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-brand-text group hover:text-brand-accent transition-colors duration-300 uppercase focus:outline-none"
              >
                <span>{template.about.cta}</span>
                <span className="text-brand-accent group-hover:translate-x-1.5 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
