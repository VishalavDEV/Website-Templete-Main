import React, { useState } from 'react';
import { designArtifacts } from '../data/artifacts';
import { DesignArtifact } from '../types';
import { useLightbox } from '../context/LightboxContext';
import { Maximize2, RotateCw, Filter } from 'lucide-react';

export const DesignWall: React.FC = () => {
  const { openLightbox } = useLightbox();
  const [filter, setFilter] = useState<string>('all');
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  const filteredArtifacts = designArtifacts.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  const toggleFlip = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFlippedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="space-y-8">
      {/* Header & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold flex items-center space-x-2">
            <Filter className="h-3.5 w-3.5" />
            <span>INTERACTIVE WORKSPACE</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mt-1">
            THE DESIGN WALL
          </h2>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 max-w-lg font-light">
            Explore our digital studio canvas. Click any artifact to flip, zoom, or inspect technical specifications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'All Artifacts', val: 'all' },
            { label: 'Wireframes', val: 'wireframe' },
            { label: 'UI Screens', val: 'ui' },
            { label: 'Typography', val: 'typography' },
            { label: '3D & Brand', val: 'brand' },
          ].map((pill) => (
            <button
              key={pill.val}
              onClick={() => setFilter(pill.val)}
              className={`rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wider font-bold transition-all ${
                filter === pill.val
                  ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 shadow-md'
                  : 'bg-neutral-200/50 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-300'
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>
      </div>

      {/* Artifacts Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtifacts.map((artifact: DesignArtifact) => {
          const isFlipped = flippedCardId === artifact.id;

          return (
            <div
              key={artifact.id}
              className="group relative h-96 w-full cursor-pointer"
              style={{ perspective: '1000px' }}
              onClick={() =>
                openLightbox({
                  url: artifact.image,
                  title: artifact.title,
                  caption: artifact.description,
                })
              }
              data-cursor="INSPECT"
            >
              {/* Card Inner Container with 3D Flip */}
              <div
                className={`relative h-full w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-transform duration-700 shadow-lg transform-gpu ${
                  isFlipped ? '[transform:rotateY(180deg)]' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* FRONT FACE */}
                <div
                  className="absolute inset-0 h-full w-full rounded-xl overflow-hidden flex flex-col"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="relative flex-1 overflow-hidden bg-neutral-950">
                    <img
                      src={artifact.image}
                      alt={artifact.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="font-mono text-[10px] uppercase font-bold bg-black/70 backdrop-blur-md text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full">
                        {artifact.tag}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 flex items-center space-x-2">
                      <button
                        onClick={(e) => toggleFlip(artifact.id, e)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-blue-600 transition-colors"
                        title="Flip Card for Spec"
                      >
                        <RotateCw className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-base font-semibold text-neutral-900 dark:text-neutral-100">
                        {artifact.title}
                      </h4>
                      <p className="text-xs text-neutral-500 font-light truncate max-w-[220px]">
                        {artifact.description}
                      </p>
                    </div>
                    <Maximize2 className="h-4 w-4 text-neutral-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>

                {/* BACK FACE (TECHNICAL SPECS) */}
                <div
                  className="absolute inset-0 h-full w-full rounded-xl bg-neutral-950 text-white p-6 flex flex-col justify-between [transform:rotateY(180deg)] border border-blue-500/30 shadow-2xl"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-blue-400 font-bold">
                        ARTIFACT SPECS // {artifact.id}
                      </span>
                      <button
                        onClick={(e) => toggleFlip(artifact.id, e)}
                        className="text-xs font-mono text-neutral-400 hover:text-white"
                      >
                        [CLOSE SPEC]
                      </button>
                    </div>

                    <h4 className="font-serif text-xl font-bold mt-4">{artifact.title}</h4>
                    <p className="mt-2 text-xs text-neutral-300 font-light leading-relaxed">
                      {artifact.description}
                    </p>

                    <div className="mt-4 space-y-2 font-mono text-[11px] text-neutral-400 border-t border-neutral-800/80 pt-3">
                      <div className="flex justify-between">
                        <span>ASPECT RATIO:</span>
                        <span className="text-white uppercase">{artifact.aspect}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CATEGORY:</span>
                        <span className="text-blue-400 uppercase">{artifact.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>RESOLUTION:</span>
                        <span className="text-white">3840 x 2160 ULTRA HD</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      openLightbox({
                        url: artifact.image,
                        title: artifact.title,
                        caption: artifact.description,
                      })
                    }
                    className="w-full py-2 rounded bg-blue-600 hover:bg-blue-500 font-mono text-xs uppercase tracking-wider font-bold transition-colors"
                  >
                    Open Fullscreen Lightbox →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
