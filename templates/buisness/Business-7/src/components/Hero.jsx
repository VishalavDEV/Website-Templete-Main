import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import DiagonalImageCollage from './DiagonalImageCollage';

export default function Hero({ template }) {
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

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

  return (
    <section id="home" className="pt-24 pb-12 px-6 md:px-12 bg-white">
      {/* Outer Bordered Card */}
      <div className="max-w-7xl mx-auto border border-brand-border/60 bg-white p-6 md:p-12 lg:p-16 relative shadow-sm overflow-hidden">
        {/* Subtle Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E7E5E1_1px,transparent_1px),linear-gradient(to_bottom,#E7E5E1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.25] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: Diagonal Image Collage */}
          <div className="lg:col-span-6 order-2 lg:order-1 w-full flex justify-center">
            <DiagonalImageCollage images={template.hero.images || template.images} />
          </div>

          {/* RIGHT: Business Messaging */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start text-left lg:pl-6"
          >
            {/* Eyebrow */}
            <motion.span
              variants={itemVariants}
              className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-brand-accent bg-brand-accent/5 px-3 py-1 rounded-sm mb-6 inline-block uppercase"
            >
              {template.hero.eyebrow}
            </motion.span>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text mb-6 leading-[1.1] ${template.themeClass}`}
            >
              {template.hero.headline}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-brand-text font-medium leading-relaxed mb-6"
            >
              {template.hero.subheadingPrefix}
              <span className="text-brand-accent font-bold italic mr-1">
                {template.hero.subheadingHighlight}
              </span>
              {template.hero.subheadingSuffix}
            </motion.p>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-brand-muted leading-relaxed mb-10 max-w-xl"
            >
              {template.hero.paragraph}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 w-full sm:w-auto"
            >
              {/* Primary: Editorial line-expand CTA */}
              <a
                href="#services"
                onClick={(e) => handleScroll(e, '#services')}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex items-center justify-between sm:justify-start space-x-4 group text-xs font-bold tracking-widest text-brand-text uppercase transition-colors duration-300 py-3 border-b border-brand-border/40 sm:border-none focus:outline-none"
              >
                <span>{template.hero.cta1}</span>
                <motion.span
                  animate={prefersReducedMotion ? {} : { width: isHovered ? 80 : 35 }}
                  className="h-[1.5px] bg-brand-accent block hidden sm:block"
                  style={{ width: 35 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </a>

              {/* Secondary CTA */}
              <a
                href="#work"
                onClick={(e) => handleScroll(e, '#work')}
                className="text-xs font-bold tracking-widest text-brand-muted hover:text-brand-text transition-colors duration-300 py-3 uppercase text-center sm:text-left focus:outline-none"
              >
                {template.hero.cta2}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
