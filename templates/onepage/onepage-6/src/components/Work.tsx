"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/agencyData";

export default function Work() {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-nye-light text-nye-dark dark:bg-nye-dark dark:text-nye-light overflow-hidden">
      {/* Background noise overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4 border-b border-nye-dark/10 dark:border-nye-light/10 pb-8">
          <div>
            <span className="text-xs font-black tracking-widest text-nye-orange uppercase block mb-3">03 / CASE STUDIES</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
              SELECTED WORK
            </h2>
          </div>
          <div className="text-xs font-bold tracking-widest text-nye-dark/50 dark:text-nye-light/50">
            CREATIVE AGENCY / EST. 2026
          </div>
        </div>

        {/* Editorial Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          
          {/* Project 1: Large Offset Left */}
          <div className="md:col-span-8 flex flex-col group cursor-pointer">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-nye-dark shadow-2xl mb-6"
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={projectsData[0].imageUrl}
                alt={projectsData[0].title}
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Project metrics / badge */}
              <div className="absolute bottom-6 left-6 bg-nye-orange text-nye-light text-xs font-black px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                {projectsData[0].result}
              </div>
            </motion.div>

            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3 text-xs text-nye-dark/60 dark:text-nye-light/60 font-bold uppercase tracking-wider mb-2">
                  <span>{projectsData[0].number}</span>
                  <span>/</span>
                  <span>{projectsData[0].category}</span>
                  <span>/</span>
                  <span>{projectsData[0].year}</span>
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tight group-hover:text-nye-orange transition-colors duration-300">
                  {projectsData[0].title}
                </h3>
                <p className="text-sm text-nye-dark/70 dark:text-nye-light/70 max-w-lg mt-3 leading-relaxed">
                  {projectsData[0].description}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full border border-nye-dark/15 dark:border-nye-light/15 flex items-center justify-center group-hover:bg-nye-dark group-hover:text-nye-light dark:group-hover:bg-nye-light dark:group-hover:text-nye-dark transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Project 2: Column Right Small */}
          <div className="md:col-span-4 flex flex-col justify-end group cursor-pointer md:mt-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-nye-teal shadow-2xl mb-6"
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={projectsData[1].imageUrl}
                alt={projectsData[1].title}
                className="w-full h-full object-cover opacity-80 mix-blend-overlay transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 bg-nye-purple text-nye-light text-xs font-black px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                {projectsData[1].result}
              </div>
            </motion.div>

            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3 text-xs text-nye-dark/60 dark:text-nye-light/60 font-bold uppercase tracking-wider mb-2">
                  <span>{projectsData[1].number}</span>
                  <span>/</span>
                  <span>{projectsData[1].category}</span>
                  <span>/</span>
                  <span>{projectsData[1].year}</span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-nye-orange transition-colors duration-300">
                  {projectsData[1].title}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full border border-nye-dark/15 dark:border-nye-light/15 flex items-center justify-center group-hover:bg-nye-dark group-hover:text-nye-light dark:group-hover:bg-nye-light dark:group-hover:text-nye-dark transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Project 3: Medium Left */}
          <div className="md:col-span-5 flex flex-col group cursor-pointer md:-mt-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-nye-orange shadow-2xl mb-6"
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={projectsData[2].imageUrl}
                alt={projectsData[2].title}
                className="w-full h-full object-cover opacity-85 mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 bg-nye-teal text-nye-light text-xs font-black px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                {projectsData[2].result}
              </div>
            </motion.div>

            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3 text-xs text-nye-dark/60 dark:text-nye-light/60 font-bold uppercase tracking-wider mb-2">
                  <span>{projectsData[2].number}</span>
                  <span>/</span>
                  <span>{projectsData[2].category}</span>
                  <span>/</span>
                  <span>{projectsData[2].year}</span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-nye-orange transition-colors duration-300">
                  {projectsData[2].title}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full border border-nye-dark/15 dark:border-nye-light/15 flex items-center justify-center group-hover:bg-nye-dark group-hover:text-nye-light dark:group-hover:bg-nye-light dark:group-hover:text-nye-dark transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Project 4: Medium Right */}
          <div className="md:col-span-7 flex flex-col group cursor-pointer">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-nye-purple shadow-2xl mb-6"
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={projectsData[3].imageUrl}
                alt={projectsData[3].title}
                className="w-full h-full object-cover opacity-80 mix-blend-overlay transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 bg-nye-orange text-nye-light text-xs font-black px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                {projectsData[3].result}
              </div>
            </motion.div>

            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3 text-xs text-nye-dark/60 dark:text-nye-light/60 font-bold uppercase tracking-wider mb-2">
                  <span>{projectsData[3].number}</span>
                  <span>/</span>
                  <span>{projectsData[3].category}</span>
                  <span>/</span>
                  <span>{projectsData[3].year}</span>
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tight group-hover:text-nye-orange transition-colors duration-300">
                  {projectsData[3].title}
                </h3>
                <p className="text-sm text-nye-dark/70 dark:text-nye-light/70 max-w-lg mt-3 leading-relaxed">
                  {projectsData[3].description}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full border border-nye-dark/15 dark:border-nye-light/15 flex items-center justify-center group-hover:bg-nye-dark group-hover:text-nye-light dark:group-hover:bg-nye-light dark:group-hover:text-nye-dark transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Project 5: Full Width Grid Row */}
          <div className="md:col-span-12 flex flex-col group cursor-pointer md:mt-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden bg-nye-navy shadow-2xl mb-6 min-h-[300px]"
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={projectsData[4].imageUrl}
                alt={projectsData[4].title}
                className="w-full h-full object-cover opacity-80 mix-blend-overlay transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 bg-nye-teal text-nye-light text-xs font-black px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                {projectsData[4].result}
              </div>
            </motion.div>

            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3 text-xs text-nye-dark/60 dark:text-nye-light/60 font-bold uppercase tracking-wider mb-2">
                  <span>{projectsData[4].number}</span>
                  <span>/</span>
                  <span>{projectsData[4].category}</span>
                  <span>/</span>
                  <span>{projectsData[4].year}</span>
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tight group-hover:text-nye-orange transition-colors duration-300">
                  {projectsData[4].title}
                </h3>
                <p className="text-sm text-nye-dark/70 dark:text-nye-light/70 max-w-2xl mt-3 leading-relaxed">
                  {projectsData[4].description}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full border border-nye-dark/15 dark:border-nye-light/15 flex items-center justify-center group-hover:bg-nye-dark group-hover:text-nye-light dark:group-hover:bg-nye-light dark:group-hover:text-nye-dark transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
