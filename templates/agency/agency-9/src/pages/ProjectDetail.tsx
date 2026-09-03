import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, X, Maximize2 } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { PROJECTS, ProjectGalleryItem } from '../data/projects';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeLightboxImage, setActiveLightboxImage] = useState<ProjectGalleryItem | null>(null);

  const project = PROJECTS.find((p) => p.slug === slug);
  const nextProject = PROJECTS.find((p) => p.slug === project?.nextSlug) || PROJECTS[0];

  if (!project) {
    return (
      <div className="min-h-screen pt-40 pb-20 px-6 text-center space-y-6 max-w-2xl mx-auto">
        <SEO title="Project Not Found — OFFGRID®" />
        <span className="font-mono text-xs text-[#D65F3F] tracking-widest uppercase">
          // ERROR 404
        </span>
        <h1 className="font-display font-bold text-5xl uppercase">CASE STUDY NOT FOUND</h1>
        <p className="text-sm text-[#77716D]">
          The project case study you requested could not be located in our directory.
        </p>
        <Link
          to="/work"
          className="inline-flex items-center gap-2 bg-[#2B2727] text-[#FAF7F1] px-6 py-3 font-display text-xs tracking-widest uppercase"
        >
          <ArrowLeft className="w-4 h-4" /> RETURN TO WORK
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${project.title} — ${project.client} | OFFGRID® Case Study`}
        description={project.description}
      />
      <main className="pt-32 pb-32">
        {/* Back Link Header */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#77716D] hover:text-[#D65F3F] uppercase tracking-widest transition-colors"
            data-cursor="link"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO SELECTED WORK
          </Link>
        </div>

        {/* Project Hero Header */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs text-[#D65F3F] tracking-widest uppercase block mb-3">
                // CASE STUDY — 0{PROJECTS.findIndex((p) => p.slug === project.slug) + 1}
              </span>
              <h1 className="font-display font-bold text-6xl sm:text-8xl lg:text-[9vw] leading-[0.85] tracking-tighter uppercase text-[#2B2727]">
                {project.title}
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="font-serif-editorial italic text-2xl md:text-3xl text-[#332832] leading-snug">
                "{project.tagline}"
              </p>
            </div>
          </div>

          {/* Metadata Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-[#CFC7BE] font-mono text-xs">
            <div>
              <span className="text-[#77716D] block uppercase mb-1">CLIENT</span>
              <span className="font-bold text-[#2B2727]">{project.client}</span>
            </div>
            <div>
              <span className="text-[#77716D] block uppercase mb-1">YEAR</span>
              <span className="font-bold text-[#2B2727]">{project.year}</span>
            </div>
            <div>
              <span className="text-[#77716D] block uppercase mb-1">CATEGORY</span>
              <span className="font-bold text-[#2B2727]">{project.category.join(' / ')}</span>
            </div>
            <div>
              <span className="text-[#77716D] block uppercase mb-1">SERVICES</span>
              <span className="font-bold text-[#2B2727]">{project.services.join(' • ')}</span>
            </div>
          </div>
        </section>

        {/* Large Editorial Hero Image */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-24">
          <div
            className="relative aspect-[16/9] w-full overflow-hidden border border-[#CFC7BE] cursor-pointer group"
            onClick={() => setActiveLightboxImage({ url: project.heroImage, caption: project.title })}
            data-cursor="image"
          >
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 right-4 bg-[#2B2727]/80 text-[#FAF7F1] p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-5 h-5" />
            </div>
          </div>
        </section>

        {/* Deep Dive Content Columns */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Overview & Results Bar */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="font-mono text-xs text-[#D65F3F] uppercase tracking-widest mb-4">
                // PROJECT OVERVIEW
              </h3>
              <p className="text-base text-[#2B2727] leading-relaxed">{project.overview}</p>
            </div>

            {/* Impact Metrics */}
            <div className="p-8 border border-[#CFC7BE] bg-[#FAF7F1] space-y-6">
              <h4 className="font-mono text-xs text-[#77716D] uppercase tracking-widest border-b border-[#CFC7BE] pb-3">
                // VERIFIED IMPACT & RESULTS
              </h4>
              <div className="grid grid-cols-2 gap-6">
                {project.results.map((res, i) => (
                  <div key={i}>
                    <div className="font-display font-bold text-3xl text-[#D65F3F]">{res.value}</div>
                    <div className="font-mono text-[10px] text-[#77716D] uppercase">{res.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Detailed Narrative Breakdown */}
          <div className="lg:col-span-8 space-y-16">
            {/* The Challenge */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-3xl uppercase tracking-tight border-b border-[#CFC7BE] pb-3">
                THE CHALLENGE
              </h3>
              <p className="text-lg text-[#2B2727] leading-relaxed font-sans">{project.challenge}</p>
            </div>

            {/* Strategy & Direction */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-3xl uppercase tracking-tight border-b border-[#CFC7BE] pb-3">
                STRATEGIC DIRECTION
              </h3>
              <p className="text-lg text-[#2B2727] leading-relaxed font-sans">{project.strategy}</p>
            </div>

            {/* Visual & Digital Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="p-6 border-l-2 border-[#D65F3F] bg-[#FAF7F1] space-y-2">
                <h4 className="font-display font-bold text-xl uppercase">VISUAL IDENTITY</h4>
                <p className="text-sm text-[#77716D] leading-relaxed">{project.visualIdentity}</p>
              </div>

              <div className="p-6 border-l-2 border-[#332832] bg-[#FAF7F1] space-y-2">
                <h4 className="font-display font-bold text-xl uppercase">DIGITAL EXPERIENCE</h4>
                <p className="text-sm text-[#77716D] leading-relaxed">{project.digitalExperience}</p>
              </div>
            </div>
          </div>
        </section>

        {/* High-Res Gallery Grid */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-32 space-y-12">
          <h3 className="font-mono text-xs text-[#D65F3F] uppercase tracking-widest border-b border-[#CFC7BE] pb-4">
            // VISUAL ARTIFACTS GALLERY ({project.gallery.length})
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {project.gallery.map((item, idx) => {
              const isWide = item.type === 'wide';
              return (
                <div
                  key={idx}
                  onClick={() => setActiveLightboxImage(item)}
                  className={`group relative overflow-hidden border border-[#CFC7BE] cursor-pointer ${
                    isWide ? 'md:col-span-12 aspect-[16/9]' : 'md:col-span-6 aspect-[4/3]'
                  }`}
                  data-cursor="image"
                >
                  <img
                    src={item.url}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2727]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-[#FAF7F1]">
                    <p className="font-mono text-xs uppercase tracking-wider">{item.caption}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Next Project Footer Navigation */}
        <section className="bg-[#332832] text-[#FAF7F1] py-24 px-6 md:px-12 border-t border-[#CFC7BE]">
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="font-mono text-xs text-[#B8A8BD] uppercase tracking-widest block mb-2">
                // UP NEXT IN PORTFOLIO
              </span>
              <h2 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter">
                {nextProject.title}
              </h2>
              <p className="font-serif-editorial italic text-xl text-[#B8A8BD] mt-2">
                {nextProject.tagline}
              </p>
            </div>

            <Link
              to={`/work/${nextProject.slug}`}
              className="inline-flex items-center gap-3 bg-[#D65F3F] text-[#FAF7F1] hover:bg-[#B94732] px-8 py-5 font-display font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-xl group shrink-0"
              data-cursor="link"
            >
              <span>NEXT PROJECT</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeLightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLightboxImage(null)}
              className="fixed inset-0 z-[9999] bg-[#2B2727]/95 backdrop-blur-md p-6 flex flex-col items-center justify-center cursor-pointer"
            >
              <button
                onClick={() => setActiveLightboxImage(null)}
                className="absolute top-6 right-6 text-[#FAF7F1] hover:text-[#D65F3F] p-2 font-mono text-xs uppercase"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="max-w-5xl max-h-[80vh] overflow-hidden border border-[#FAF7F1]/20">
                <img
                  src={activeLightboxImage.url}
                  alt={activeLightboxImage.caption}
                  className="w-full h-full object-contain"
                />
              </div>

              {activeLightboxImage.caption && (
                <p className="mt-4 font-mono text-xs text-[#B8A8BD] tracking-widest uppercase text-center max-w-lg">
                  {activeLightboxImage.caption}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
};
