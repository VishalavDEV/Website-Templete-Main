import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function CTA({ template }) {
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

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
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true, margin: '-60px' } }
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-brand-dark text-white relative overflow-hidden scroll-mt-10">
      {/* Decorative Geometric Overlay 1 */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-brand-accent/5 clip-path-[polygon(20%_0,_100%_0,_100%_100%,_0_100%)] pointer-events-none z-0" />
      {/* Decorative Geometric Overlay 2 */}
      <div className="absolute bottom-0 left-0 w-[25%] h-[70%] bg-white/[0.02] clip-path-[polygon(0_0,_100%_100%,_0_100%)] pointer-events-none z-0" />

      {/* Decorative Border Line */}
      <div className="absolute inset-4 md:inset-8 border border-white/5 pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div {...animationProps} className="flex flex-col items-center">
          {/* Eyebrow Accent */}
          <span className="text-[10px] font-bold tracking-[0.3em] text-brand-accent mb-6 uppercase">
            GET IN TOUCH
          </span>

          {/* Heading */}
          <h2 className={`text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight max-w-2xl ${template.themeClass}`}>
            {template.ctaSection.title}
          </h2>

          {/* Supporting Text */}
          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-xl mb-12">
            {template.ctaSection.text}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-10 w-full sm:w-auto">
            {/* Primary line-expand CTA */}
            <a
              href="#contact"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex items-center space-x-4 text-xs font-bold tracking-widest text-white uppercase group transition-colors duration-300 focus:outline-none"
            >
              <span>{template.ctaSection.cta1}</span>
              <motion.span
                animate={prefersReducedMotion ? {} : { width: isHovered ? 75 : 30 }}
                className="h-[1px] bg-brand-accent block"
                style={{ width: 30 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              className="text-xs font-bold tracking-widest text-white/50 hover:text-white transition-colors duration-300 uppercase focus:outline-none"
            >
              {template.ctaSection.cta2}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
