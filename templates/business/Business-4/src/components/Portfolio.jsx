import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Portfolio({ template }) {
  const prefersReducedMotion = useReducedMotion();

  const animationProps = (delay = 0) =>
    prefersReducedMotion
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true, margin: '-60px' } }
      : {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-60px' },
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
        };

  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center lg:text-left">
          <span className="text-xs font-bold tracking-[0.25em] text-brand-accent mb-3 block uppercase">
            SELECTED WORK
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text ${template.themeClass}`}>
            Case Studies & Ventures
          </h2>
          <div className="h-[2px] w-12 bg-brand-accent mt-6 inline-block lg:block" />
        </div>

        {/* Asymmetric Portfolio List */}
        <div className="space-y-24 lg:space-y-36">
          {/* Project 1: Stretched Left */}
          {template.portfolio[0] && (
            <motion.div {...animationProps(0)} className="w-full lg:w-[65%] flex flex-col group">
              <div className="relative overflow-hidden aspect-[16/10] bg-brand-light mb-6 shadow-sm border border-brand-border/30">
                <img
                  src={template.portfolio[0].image}
                  alt={template.portfolio[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-all duration-500" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-accent mb-2 uppercase">
                {template.portfolio[0].category}
              </span>
              <h3 className={`text-xl md:text-2xl font-bold text-brand-text mb-3 group-hover:text-brand-accent transition-colors duration-300 ${template.themeClass}`}>
                {template.portfolio[0].title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed max-w-xl mb-4">
                {template.portfolio[0].desc}
              </p>
              <a
                href={template.portfolio[0].link}
                className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-brand-text group-hover:text-brand-accent transition-colors duration-300"
              >
                <span>VIEW CASE STUDY</span>
                <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">
                  →
                </span>
              </a>
            </motion.div>
          )}

          {/* Project 2: Stretched Right */}
          {template.portfolio[1] && (
            <motion.div {...animationProps(0.1)} className="w-full lg:w-[60%] ml-auto flex flex-col group">
              <div className="relative overflow-hidden aspect-[16/10] bg-brand-light mb-6 shadow-sm border border-brand-border/30">
                <img
                  src={template.portfolio[1].image}
                  alt={template.portfolio[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-all duration-500" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-accent mb-2 uppercase">
                {template.portfolio[1].category}
              </span>
              <h3 className={`text-xl md:text-2xl font-bold text-brand-text mb-3 group-hover:text-brand-accent transition-colors duration-300 ${template.themeClass}`}>
                {template.portfolio[1].title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed max-w-xl mb-4">
                {template.portfolio[1].desc}
              </p>
              <a
                href={template.portfolio[1].link}
                className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-brand-text group-hover:text-brand-accent transition-colors duration-300"
              >
                <span>VIEW CASE STUDY</span>
                <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">
                  →
                </span>
              </a>
            </motion.div>
          )}

          {/* Project 3: Centered Narrower */}
          {template.portfolio[2] && (
            <motion.div {...animationProps(0.15)} className="w-full lg:w-[55%] mx-auto flex flex-col group">
              <div className="relative overflow-hidden aspect-[16/10] bg-brand-light mb-6 shadow-sm border border-brand-border/30">
                <img
                  src={template.portfolio[2].image}
                  alt={template.portfolio[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-all duration-500" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-accent mb-2 uppercase">
                {template.portfolio[2].category}
              </span>
              <h3 className={`text-xl md:text-2xl font-bold text-brand-text mb-3 group-hover:text-brand-accent transition-colors duration-300 ${template.themeClass}`}>
                {template.portfolio[2].title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed max-w-xl mb-4">
                {template.portfolio[2].desc}
              </p>
              <a
                href={template.portfolio[2].link}
                className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-brand-text group-hover:text-brand-accent transition-colors duration-300"
              >
                <span>VIEW CASE STUDY</span>
                <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">
                  →
                </span>
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
