import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { selectedFilms } from '../data/directorData';
import { Play, FileText, ChevronRight, X, Clapperboard, Award, Info, Film, Eye } from 'lucide-react';

const SelectedFilms = () => {
  const [activeFilmModal, setActiveFilmModal] = useState(null);
  const [storyboardFrame, setStoryboardFrame] = useState(0);

  const storyboardFrames = [
    { frame: 'SHOT 01', desc: 'Wide static hallway shot with cold shadow symmetry', focalLength: '35mm', image: '/assets/film5.jpg' },
    { frame: 'SHOT 02', desc: 'Slow dolly push towards door 4B under flickering lantern', focalLength: '50mm', image: '/assets/film5_shot2.jpg' },
    { frame: 'SHOT 03', desc: 'Over-the-shoulder medium close-up of Victor holding key', focalLength: '85mm', image: '/assets/film5_shot3.jpg' },
    { frame: 'SHOT 04', desc: 'Low angle framing of light spilling under mahogany door', focalLength: '24mm', image: '/assets/film3.jpg' }
  ];

  return (
    <section id="films" className="py-20 sm:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <span className="font-mono-meta text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-2">
            ACT II / FILMS
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal text-neutral-950 uppercase tracking-tight">
                Selected Work
              </h2>
              <div className="w-16 h-[1.5px] bg-neutral-900 mt-4" />
            </div>
            <p className="font-mono-meta text-xs tracking-widest text-neutral-500 uppercase">
              5 FICTIONAL DIRECTORIAL PROJECTS • 2019 — 2026
            </p>
          </div>
        </div>

        {/* FILM PRESENTATION SYSTEM — 5 DISTINCT CUSTOM LAYOUTS */}
        <div className="space-y-24 sm:space-y-32">

          {/* ========================================================= */}
          {/* FILM 01: THE QUIET BETWEEN STORMS (FULL-WIDTH CINEMATIC POSTER) */}
          {/* ========================================================= */}
          {(() => {
            const film = selectedFilms[0];
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group border border-neutral-200 bg-neutral-950 text-white overflow-hidden shadow-lg"
              >
                <div className="relative min-h-[500px] sm:h-[580px] md:h-[620px] w-full overflow-hidden flex flex-col justify-between">
                  {/* Poster Image */}
                  <img
                    src={film.poster}
                    alt={film.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                  
                  {/* Top Film Meta Bar */}
                  <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between font-mono-meta text-xs tracking-widest text-neutral-300">
                    <span className="bg-black/70 backdrop-blur-xs px-3.5 py-1.5 border border-white/20">
                      {film.filmNumber} • {film.year}
                    </span>
                    <span className="bg-black/70 backdrop-blur-xs px-3.5 py-1.5 border border-white/20 hidden sm:inline-block">
                      {film.studio}
                    </span>
                  </div>

                  {/* Bottom Text Overlays on Edge */}
                  <div className="relative z-10 p-6 sm:p-10 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <div className="max-w-2xl">
                        <span className="font-mono-meta text-xs tracking-[0.25em] text-amber-400 uppercase mb-2 block font-semibold">
                          {film.genre} — {film.role}
                        </span>
                        <h3 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-normal text-white uppercase tracking-tight leading-tight mb-4">
                          {film.title}
                        </h3>
                        <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-light line-clamp-3 max-w-xl">
                          {film.synopsis}
                        </p>
                      </div>

                      <button
                        onClick={() => setActiveFilmModal(film)}
                        className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-neutral-950 font-mono-meta text-xs tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors shrink-0 w-full sm:w-auto text-center"
                      >
                        <Film className="w-4 h-4" />
                        <span>View Film Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* ========================================================= */}
          {/* FILM 02: NORTHBOUND LIGHT (VERTICAL FILM-STRIP SEQUENCE) */}
          {/* ========================================================= */}
          {(() => {
            const film = selectedFilms[1];
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border border-neutral-200 p-6 sm:p-10 bg-neutral-50/50"
              >
                {/* Left Info Column */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 font-mono-meta text-xs tracking-widest text-neutral-500 uppercase mb-3">
                      <span>{film.filmNumber}</span>
                      <span>•</span>
                      <span>{film.year}</span>
                      <span>•</span>
                      <span>{film.genre}</span>
                    </div>
                    
                    <h3 className="font-serif-title text-3xl sm:text-5xl font-normal text-neutral-950 uppercase tracking-tight mb-4">
                      {film.title}
                    </h3>
                    
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-light mb-6">
                      {film.synopsis}
                    </p>

                    <div className="p-4 bg-white border border-neutral-200 font-mono-meta text-xs text-neutral-800 space-y-1.5 mb-6">
                      <div><span className="text-neutral-400">DIRECTOR / </span>{film.role}</div>
                      <div><span className="text-neutral-400">RUNTIME / </span>{film.runtime}</div>
                      <div><span className="text-neutral-400">STUDIO / </span>{film.studio}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveFilmModal(film)}
                    className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-neutral-950 text-white font-mono-meta text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors w-full sm:w-fit"
                  >
                    <span>Inspect Film Dossier</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Right Vertical Film Strip Image Sequence */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="relative border border-neutral-900 bg-neutral-900 p-2 overflow-hidden shadow-md">
                    <img
                      src={film.poster}
                      alt={film.title}
                      className="w-full h-64 sm:h-80 object-cover hover:scale-102 transition-transform duration-500"
                    />
                    <div className="flex items-center justify-between text-white font-mono-meta text-[10px] tracking-widest pt-2 px-2">
                      <span>FRAME SEQUENCE 02-A</span>
                      <span>35MM ANAMORPHIC</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {film.stills.map((still, idx) => (
                      <div key={idx} className="relative border border-neutral-300 bg-white p-1.5 overflow-hidden">
                        <img
                          src={still}
                          alt={`${film.title} Still ${idx + 1}`}
                          className="w-full h-28 sm:h-36 object-cover hover:opacity-90 transition-opacity"
                        />
                        <div className="font-mono-meta text-[9px] text-neutral-500 pt-1 text-center uppercase tracking-widest">
                          SEQ STRENGTH 0{idx + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* ========================================================= */}
          {/* FILM 03: THE DISTANCE OF WATER (SPLIT-SCREEN + SCREENPLAY NOTES) */}
          {/* ========================================================= */}
          {(() => {
            const film = selectedFilms[2];
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-neutral-200 bg-white overflow-hidden"
              >
                {/* Left Split: Large Visual Poster */}
                <div className="lg:col-span-6 relative overflow-hidden bg-neutral-900 min-h-[360px] sm:min-h-[440px]">
                  <img
                    src={film.poster}
                    alt={film.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute top-6 left-6 bg-black/75 backdrop-blur-xs text-white font-mono-meta text-[10px] px-3 py-1.5 uppercase tracking-widest border border-white/20">
                    SPLIT PRESENTATION • {film.filmNumber}
                  </div>
                </div>

                {/* Right Split: Screenplay Notes & Info */}
                <div className="lg:col-span-6 p-6 sm:p-10 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 font-mono-meta text-xs tracking-widest text-neutral-500 uppercase mb-3">
                      <span>{film.year}</span>
                      <span>•</span>
                      <span>{film.genre}</span>
                    </div>

                    <h3 className="font-serif-title text-3xl sm:text-5xl font-normal text-neutral-950 uppercase tracking-tight mb-4">
                      {film.title}
                    </h3>

                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-light mb-6">
                      {film.synopsis}
                    </p>

                    {/* Screenplay Excerpt Container */}
                    <div className="bg-neutral-100 p-5 sm:p-6 border-l-4 border-neutral-900 mb-6 font-mono-meta text-xs text-neutral-800 space-y-2">
                      <div className="text-[10px] text-neutral-400 tracking-widest uppercase font-bold">EXCERPT — SCREENPLAY SCENE 14</div>
                      <pre className="whitespace-pre-wrap font-mono-meta text-xs leading-relaxed text-neutral-950 overflow-x-auto">
                        {film.screenplaySnippet}
                      </pre>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveFilmModal(film)}
                    className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-neutral-950 text-white font-mono-meta text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors w-full sm:w-fit"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Screenplay & Notes</span>
                  </button>
                </div>
              </motion.div>
            );
          })()}

          {/* ========================================================= */}
          {/* FILM 04: SEVEN MINUTES OF SUMMER (MINIMAL WHITE PAGE FLOATING STILLS) */}
          {/* ========================================================= */}
          {(() => {
            const film = selectedFilms[3];
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-6 sm:p-10 md:p-14 bg-neutral-50 border border-neutral-200 relative overflow-hidden"
              >
                <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
                  <span className="font-mono-meta text-xs tracking-[0.3em] text-amber-700 uppercase block mb-2 font-bold">
                    {film.filmNumber} • {film.genre} ({film.year})
                  </span>
                  <h3 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-normal text-neutral-950 uppercase tracking-tight mb-4">
                    {film.title}
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
                    {film.synopsis}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                  <div className="relative border border-neutral-300 p-2 bg-white shadow-md transform md:-rotate-1 hover:rotate-0 transition-transform duration-300">
                    <img
                      src={film.poster}
                      alt={film.title}
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                    <div className="font-mono-meta text-[10px] text-neutral-500 pt-2 text-center uppercase tracking-widest">
                      SUMMER STILL — 35MM NATURAL LIGHT
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="p-5 bg-white border border-neutral-200">
                      <h4 className="font-mono-meta text-xs tracking-widest font-bold text-neutral-900 uppercase mb-2">
                        CREATIVE APPROACH
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed font-light">
                        {film.creativeApproach}
                      </p>
                    </div>

                    <div className="p-5 bg-white border border-neutral-200">
                      <h4 className="font-mono-meta text-xs tracking-widest font-bold text-neutral-900 uppercase mb-2">
                        VISUAL DIRECTION
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed font-light">
                        {film.visualNotes}
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveFilmModal(film)}
                      className="w-full py-3.5 bg-neutral-950 text-white font-mono-meta text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors"
                    >
                      View Full Short Film Dossier
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* ========================================================= */}
          {/* FILM 05: THE LAST ROOM (LARGE TYPOGRAPHY + INTERACTIVE STORYBOARD) */}
          {/* ========================================================= */}
          {(() => {
            const film = selectedFilms[4];
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="border border-neutral-900 bg-neutral-950 text-white p-6 sm:p-10 md:p-12"
              >
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 border-b border-neutral-800 pb-8">
                  <div>
                    <span className="font-mono-meta text-xs tracking-[0.3em] text-neutral-400 uppercase block mb-2">
                      {film.filmNumber} • {film.year} • {film.genre}
                    </span>
                    <h3 className="font-serif-title text-3xl sm:text-5xl lg:text-7xl font-normal text-white uppercase tracking-tight leading-none">
                      {film.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setActiveFilmModal(film)}
                    className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-neutral-950 font-mono-meta text-xs tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors w-full sm:w-fit shrink-0"
                  >
                    <span>Full Film Specifications</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Interactive Storyboard Viewer */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Visual Frame display */}
                  <div className="lg:col-span-7 relative border border-neutral-800 p-2 bg-neutral-900">
                    <img
                      src={storyboardFrames[storyboardFrame].image || film.poster}
                      alt={`${film.title} - ${storyboardFrames[storyboardFrame].frame}`}
                      className="w-full h-64 sm:h-80 md:h-96 object-cover transition-all duration-500"
                    />
                    
                    <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between font-mono-meta text-xs">
                      <span className="text-amber-400 font-bold">
                        {storyboardFrames[storyboardFrame].frame}
                      </span>
                      <span className="text-neutral-400">
                        OPTICS / {storyboardFrames[storyboardFrame].focalLength}
                      </span>
                    </div>
                  </div>

                  {/* Storyboard Selector List */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="font-mono-meta text-xs tracking-widest text-neutral-400 uppercase mb-4 font-bold">
                      SELECT STORYBOARD SCENE:
                    </div>

                    {storyboardFrames.map((frame, idx) => (
                      <button
                        key={idx}
                        onClick={() => setStoryboardFrame(idx)}
                        className={`w-full p-4 text-left font-mono-meta text-xs transition-all border ${
                          storyboardFrame === idx
                            ? 'bg-white text-neutral-950 border-white font-bold'
                            : 'bg-neutral-900/60 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span>{frame.frame}</span>
                          <span className="text-[10px] opacity-75">{frame.focalLength}</span>
                        </div>
                        <p className="text-[11px] opacity-85 font-light line-clamp-1">
                          {frame.desc}
                        </p>
                      </button>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })()}

        </div>

      </div>

      {/* FILM DETAILS MODAL */}
      <AnimatePresence>
        {activeFilmModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-neutral-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-neutral-300 shadow-2xl relative p-6 sm:p-10 text-neutral-900"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveFilmModal(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 bg-neutral-100 hover:bg-neutral-900 hover:text-white transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="mb-8 border-b border-neutral-200 pb-6 pr-10">
                <span className="font-mono-meta text-xs tracking-[0.25em] text-neutral-500 uppercase block mb-2">
                  {activeFilmModal.filmNumber} • {activeFilmModal.year} • {activeFilmModal.genre}
                </span>
                <h3 className="font-serif-title text-3xl sm:text-5xl font-normal text-neutral-950 uppercase tracking-tight">
                  {activeFilmModal.title}
                </h3>
              </div>

              {/* Main Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
                <div className="md:col-span-5">
                  <img
                    src={activeFilmModal.poster}
                    alt={activeFilmModal.title}
                    className="w-full h-auto object-cover border border-neutral-200"
                  />
                </div>

                <div className="md:col-span-7 space-y-6">
                  <div>
                    <h4 className="font-mono-meta text-xs tracking-widest font-bold text-neutral-900 uppercase mb-2">
                      SYNOPSIS
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed font-light">
                      {activeFilmModal.synopsis}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 p-4 bg-neutral-50 border border-neutral-200 font-mono-meta text-xs text-neutral-800">
                    <div><span className="text-neutral-400">ROLE / </span>{activeFilmModal.role}</div>
                    <div><span className="text-neutral-400">RUNTIME / </span>{activeFilmModal.runtime}</div>
                    <div><span className="text-neutral-400">STUDIO / </span>{activeFilmModal.studio}</div>
                    <div><span className="text-neutral-400">YEAR / </span>{activeFilmModal.year}</div>
                  </div>

                  <div>
                    <h4 className="font-mono-meta text-xs tracking-widest font-bold text-neutral-900 uppercase mb-2">
                      CREATIVE & VISUAL DIRECTION
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed font-light mb-2">
                      <strong className="text-neutral-900 font-semibold">Approach: </strong>{activeFilmModal.creativeApproach}
                    </p>
                    <p className="text-xs text-neutral-600 leading-relaxed font-light">
                      <strong className="text-neutral-900 font-semibold">Visual Palette: </strong>{activeFilmModal.visualNotes}
                    </p>
                  </div>
                </div>
              </div>

              {/* Screenplay snippet */}
              {activeFilmModal.screenplaySnippet && (
                <div className="bg-neutral-900 text-neutral-100 p-6 border border-neutral-800 mb-8 font-mono-meta text-xs overflow-hidden">
                  <div className="text-[10px] text-amber-400 tracking-widest uppercase mb-3 font-bold">
                    SCREENPLAY EXCERPT — ARCHIVE
                  </div>
                  <pre className="whitespace-pre-wrap font-mono-meta text-xs leading-relaxed text-neutral-200 overflow-x-auto">
                    {activeFilmModal.screenplaySnippet}
                  </pre>
                </div>
              )}

              {/* Footer notice */}
              <div className="text-center font-mono-meta text-[10px] text-neutral-400 uppercase border-t border-neutral-200 pt-4">
                FICTIONAL DEMONSTRATION FILM DOSSIER • ELIAS ROWAN ARCHIVE
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SelectedFilms;
