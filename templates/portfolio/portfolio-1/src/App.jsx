import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, MapPin, Maximize2, Layers } from 'lucide-react';
import { portfolioData } from './data/portfolioData';
import SectionHeading from './components/SectionHeading';
import ProjectCard from './components/ProjectCard';
import GalleryModal from './components/GalleryModal';

export default function App() {
  const [expandedInfoRow, setExpandedInfoRow] = useState(null);
  
  // Lightbox Modal state
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    activeIndex: 0
  });

  const toggleInfoRow = (id) => {
    if (expandedInfoRow === id) {
      setExpandedInfoRow(null);
    } else {
      setExpandedInfoRow(id);
    }
  };

  const openLightbox = (images, index = 0) => {
    setLightbox({
      isOpen: true,
      images: images,
      activeIndex: index
    });
  };

  const closeLightbox = () => {
    setLightbox({
      ...lightbox,
      isOpen: false
    });
  };

  const setLightboxIndex = (index) => {
    setLightbox({
      ...lightbox,
      activeIndex: index
    });
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a2b4a] selection:bg-[#1a2b4a] selection:text-[#faf9f6]">
      
      {/* 1. HERO / COVER SECTION */}
      <section id="design" className="relative w-full min-h-screen flex flex-col justify-between p-6 md:p-12 overflow-hidden">
        {/* Top Header Row */}
        <div className="flex justify-between items-start w-full z-10 border-b border-[#1a2b4a]/10 pb-6">
          <div className="flex flex-col">
            <span className="text-[10px] font-sans tracking-widest text-[#1a2b4a]/50 uppercase font-bold">
              {portfolioData.brand.subtitle}
            </span>
            <h1 className="text-xl tracking-tight text-[#1a2b4a] font-light mt-1">
              {portfolioData.brand.title}
            </h1>
          </div>
          <span className="text-xs font-sans tracking-widest text-[#1a2b4a]/75 lowercase font-medium">
            {portfolioData.brand.url}
          </span>
        </div>

        {/* Big Title Row */}
        <div className="my-8 md:my-12 z-10">
          <span className="text-xs font-sans tracking-[0.25em] text-[#1a2b4a]/60 uppercase font-semibold block mb-2">
            {portfolioData.hero.label}
          </span>
          <h2 className="text-5xl md:text-8xl lg:text-[7.5rem] font-extrabold tracking-tighter text-[#1a2b4a] leading-[0.9] uppercase">
            {portfolioData.hero.title}
          </h2>
        </div>

        {/* Visual Centerpiece & Nav Menu */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-end w-full z-10">
          {/* Menu */}
          <nav className="col-span-12 lg:col-span-4 w-full flex flex-col gap-4 border-t lg:border-t-0 border-[#1a2b4a]/10 pt-6 lg:pt-0">
            {portfolioData.navigation.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="group flex justify-between items-center py-2 border-b border-[#1a2b4a]/5 hover:border-[#1a2b4a]/20 transition-colors text-xs font-sans tracking-widest uppercase font-bold text-[#1a2b4a]/85"
              >
                <span>{item.label}</span>
                <span className="text-[9px] text-[#1a2b4a]/30 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            ))}
          </nav>

          {/* Full-bleed centered image container */}
          <div className="col-span-12 lg:col-span-8 w-full relative group overflow-hidden shadow-sm">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <motion.img
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                src={portfolioData.hero.image}
                alt="Architecture centerpiece"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-[2000ms]"
              />
            </div>
            {/* Expertise overlay */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 border border-[#1a2b4a]/5 rounded-sm">
              <span className="text-[10px] font-sans tracking-widest text-[#1a2b4a] uppercase font-bold">
                {portfolioData.brand.expertiseYears}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TABLE OF CONTENTS SECTION */}
      <section className="bg-white py-16 px-6 md:px-12 border-y border-[#1a2b4a]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-[10px] font-sans tracking-widest text-[#1a2b4a]/40 font-bold uppercase mb-8">
            INDEX // ARCHITECTURAL TAXONOMY
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {portfolioData.tableOfContents.map((item, idx) => (
              <a 
                key={idx} 
                href={item.href}
                className="group flex flex-col gap-4 p-4 hover:bg-[#faf9f6] border border-transparent hover:border-[#1a2b4a]/5 transition-all duration-300"
              >
                <span className="text-3xl font-light text-[#1a2b4a]/20 group-hover:text-[#1a2b4a] transition-colors tracking-tight font-serif">
                  {item.index}
                </span>
                <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-50 border border-[#1a2b4a]/5">
                  <img 
                    src={item.thumbnail} 
                    alt={item.label} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-sans tracking-widest uppercase font-bold text-[#1a2b4a]/85 group-hover:text-[#1a2b4a]">
                    {item.label}
                  </h4>
                  <span className="text-[9px] font-sans tracking-wider text-[#1a2b4a]/40 uppercase mt-0.5 block">
                    GO TO SECTION
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT / PHILOSOPHY SECTION */}
      <section id="philosophy" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading number="02 / CONTEXT" title="Philosophy & Statement" subtitle="The Architect" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Architect Portrait */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[3/4] bg-zinc-100 overflow-hidden relative border border-[#1a2b4a]/10"
            >
              <img 
                src={portfolioData.about.portrait} 
                alt={portfolioData.about.architectName} 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
            <div className="flex justify-between items-baseline py-2 border-b border-[#1a2b4a]/10">
              <span className="text-xs font-sans tracking-widest text-[#1a2b4a] font-bold uppercase">
                {portfolioData.about.architectName}
              </span>
              <span className="text-[10px] font-sans tracking-widest text-[#1a2b4a]/50 uppercase">
                PRINCIPAL PARTNER
              </span>
            </div>
          </div>

          {/* Right Statement and Expandable info table */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-12">
            <div>
              <span className="text-[10px] font-sans tracking-[0.2em] text-[#1a2b4a]/40 font-bold uppercase block mb-4">
                THE MANIFESTO
              </span>
              <p className="text-3xl md:text-4xl font-light text-[#1a2b4a] leading-tight tracking-tight font-serif italic text-justify">
                "{portfolioData.about.statement}"
              </p>
            </div>

            {/* Expandable Credentials Table */}
            <div className="flex flex-col border-t border-[#1a2b4a]/10">
              {portfolioData.about.infoTable.map((row) => {
                const isOpen = expandedInfoRow === row.id;
                return (
                  <div key={row.id} className="border-b border-[#1a2b4a]/5">
                    <button
                      onClick={() => toggleInfoRow(row.id)}
                      className="w-full text-left py-5 flex items-center justify-between hover:text-[#1a2b4a]/75 transition-colors group"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 flex-grow pr-4">
                        <span className="col-span-12 md:col-span-4 text-xs font-sans tracking-widest text-[#1a2b4a] font-bold uppercase">
                          {row.label}
                        </span>
                        <span className="col-span-12 md:col-span-8 text-xs font-sans font-medium text-[#1a2b4a]/70 group-hover:text-[#1a2b4a]">
                          {row.summary}
                        </span>
                      </div>
                      <div>
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </button>
                    
                    {/* Collapsible Row Content */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pl-0 md:pl-[33%] text-xs font-sans text-[#1a2b4a]/85 leading-relaxed max-w-2xl">
                            {row.detail}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. RESIDENTIAL SECTION */}
      <section id="residential" className="py-24 bg-white border-y border-[#1a2b4a]/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading number="03 / DWELLINGS" title="Residential Works" subtitle="Spatials & bluep" />
          
          <div className="flex flex-col gap-12">
            {portfolioData.residentialProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onImageClick={openLightbox} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMERCIAL SECTION */}
      <section id="commercial" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading number="04 / ARCHES" title="Commercial Projects" subtitle="Scales & Facades" />
        
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left Intro Text Column */}
          <div className="col-span-12 lg:col-span-4 pr-0 lg:pr-12">
            <span className="text-[10px] font-sans tracking-widest text-[#1a2b4a]/40 font-bold uppercase block mb-4">
              METROPOLITAN SYMMETRIES
            </span>
            <p className="text-sm font-sans text-[#1a2b4a]/75 leading-relaxed">
              {portfolioData.commercialProjects.introText}
            </p>
          </div>

          {/* Right Columns Grid - Masonry-like */}
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.commercialProjects.projects.map((project, idx) => (
              <div 
                key={project.id}
                onClick={() => openLightbox([project.image], 0)}
                className={`group cursor-pointer flex flex-col gap-3 ${
                  idx === 1 ? 'md:mt-12' : ''
                }`}
              >
                <div className="relative aspect-[4/5] bg-zinc-100 overflow-hidden border border-[#1a2b4a]/5 shadow-sm">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#1a2b4a]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white px-4 py-2 text-[10px] font-sans tracking-widest uppercase flex items-center gap-1.5 shadow-md font-bold">
                      <Maximize2 size={10} /> View Facade
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-baseline mt-1">
                  <div>
                    <h4 className="text-lg font-light tracking-tight text-[#1a2b4a] group-hover:text-[#1a2b4a]/85">
                      {project.title}
                    </h4>
                    <span className="text-[9px] font-sans tracking-widest text-[#1a2b4a]/50 uppercase font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-sans text-[#1a2b4a]/40 block uppercase">
                      HEIGHT
                    </span>
                    <span className="text-xs font-sans font-medium text-[#1a2b4a]/80">
                      {project.specs.height}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. URBAN PARK INTEGRATION SECTION */}
      <section id="urban-park" className="py-24 bg-white border-t border-[#1a2b4a]/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading number="05 / INTEGRATIONS" title="Urban Park" subtitle="Landscapes & Topologies" />

          <div className="flex flex-col gap-8">
            <div 
              onClick={() => openLightbox([portfolioData.urbanPark.image], 0)}
              className="relative w-full aspect-[21/9] bg-zinc-100 overflow-hidden cursor-pointer group"
            >
              <img 
                src={portfolioData.urbanPark.image} 
                alt={portfolioData.urbanPark.title}
                className="w-full h-full object-cover filter grayscale-30 group-hover:grayscale-0 group-hover:scale-101 transition-all duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-[#1a2b4a]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white px-5 py-2.5 text-xs font-sans tracking-widest uppercase flex items-center gap-2 shadow-lg font-bold">
                  <Maximize2 size={12} /> View Panorama
                </div>
              </div>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-12 gap-8 mt-4">
              <div className="col-span-12 md:col-span-8">
                <h3 className="text-3xl font-light text-[#1a2b4a] tracking-tight mb-3">
                  {portfolioData.urbanPark.title}
                </h3>
                <p className="text-sm font-sans text-[#1a2b4a]/75 leading-relaxed text-justify">
                  {portfolioData.urbanPark.description}
                </p>
              </div>

              <div className="col-span-12 md:col-span-4 border-l border-[#1a2b4a]/10 pl-6 flex flex-col gap-4">
                <div>
                  <span className="text-[9px] font-sans tracking-widest text-[#1a2b4a]/40 font-bold uppercase block mb-1">
                    LANDSCAPE TYPE
                  </span>
                  <p className="text-xs font-sans font-medium text-[#1a2b4a]/85 leading-snug">
                    {portfolioData.urbanPark.specs.landscapeType}
                  </p>
                </div>
                <div>
                  <span className="text-[9px] font-sans tracking-widest text-[#1a2b4a]/40 font-bold uppercase block mb-1">
                    STRUCTURAL ENGINEER
                  </span>
                  <p className="text-xs font-sans font-medium text-[#1a2b4a]/85 leading-snug">
                    {portfolioData.urbanPark.specs.structuralEngineer}
                  </p>
                </div>
                <div>
                  <span className="text-[9px] font-sans tracking-widest text-[#1a2b4a]/40 font-bold uppercase block mb-1">
                    COMPLETED
                  </span>
                  <p className="text-xs font-sans font-medium text-[#1a2b4a]/85 leading-snug">
                    {portfolioData.urbanPark.specs.completed}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a2b4a] text-white/80 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12">
          <div className="flex flex-col">
            <span className="text-xs font-sans tracking-widest text-white/50 uppercase font-bold mb-1">
              AETHELGARD STUDIO
            </span>
            <span className="text-lg font-light font-serif">
              Bridging Geometric Truths and Organic Landscapes.
            </span>
          </div>

          <div className="flex gap-8">
            <a href="#design" className="text-xs font-sans tracking-widest uppercase font-semibold text-white/70 hover:text-white transition-colors">
              BACK TO TOP ▲
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mt-8 text-[10px] font-sans tracking-widest text-white/40 font-bold">
          <span>© {new Date().getFullYear()} AETHELGARD. ALL RIGHTS RESERVED.</span>
          <span>CURATED ARCHITECTURE TEMPLATE</span>
        </div>
      </footer>

      {/* Lightbox / Gallery Modal */}
      <GalleryModal
        isOpen={lightbox.isOpen}
        images={lightbox.images}
        activeIndex={lightbox.activeIndex}
        onClose={closeLightbox}
        onChangeIndex={setLightboxIndex}
      />
    </div>
  );
}
