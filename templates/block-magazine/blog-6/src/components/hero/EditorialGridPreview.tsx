import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { DynamicImage } from '../ui/DynamicImage';
import { PRIMARY_IMAGES } from '../../data/assets';

export const EditorialGridPreview: React.FC = memo(() => {
  const articles = [
    {
      id: 1,
      category: 'Computational Design',
      categoryColor: 'blue',
      title: 'The Algorithmic Sublime: Generative Geometry in Public Architecture',
      author: 'Kaelen Thorne',
      readTime: '8 min read',
      image: PRIMARY_IMAGES.generativeGlass,
      tag: 'Editor Pick',
      fallbackKey: 'generativeGlass',
    },
    {
      id: 2,
      category: 'Material Synthesis',
      categoryColor: 'violet',
      title: 'Translucent Concrete and Photosynthetic Facades in Neo-Tokyo',
      author: 'Dr. Ayumi Tanaka',
      readTime: '5 min read',
      image: PRIMARY_IMAGES.tokyoConcrete,
      tag: 'Trending',
      fallbackKey: 'photosyntheticTimber',
    },
    {
      id: 3,
      category: 'Spatial Soundscapes',
      categoryColor: 'coral',
      title: 'Acoustic Topologies: Designing Sound for Non-Euclidean Rooms',
      author: 'Marcus Sterling',
      readTime: '7 min read',
      image: PRIMARY_IMAGES.acousticTopologies,
      tag: 'Essay',
      fallbackKey: 'acousticTopologies',
    },
  ];

  return (
    <section className="relative w-full py-14 sm:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-slate-200/60">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-widest font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Dispatches</span>
          </div>
          <h2 className="type-h2 font-display text-slate-900 font-extrabold tracking-tight">
            Curated Stories from Issue 08
          </h2>
        </div>

        <a
          href="#stories"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 hover:text-blue-600 transition-colors"
        >
          <span>Explore Complete Archive</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {articles.map((article) => (
          <article
            key={article.id}
            className="group glass-card-airy rounded-3xl overflow-hidden p-4 sm:p-5 flex flex-col bg-white/80 border border-slate-200/80 hover:shadow-2xl transition-all duration-300 gpu-layer cursor-pointer"
          >
            <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-xs">
              <DynamicImage
                src={article.image}
                alt={article.title}
                fallbackKey={article.fallbackKey}
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                containerClassName="relative w-full h-full overflow-hidden bg-slate-900"
                overlay={
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/90 backdrop-blur-md text-slate-900 shadow-xs z-10">
                    {article.tag}
                  </span>
                }
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-[11px]">
                {article.category}
              </span>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-3">
              {article.title}
            </h3>

            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-medium">By {article.author}</span>
              <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
});

EditorialGridPreview.displayName = 'EditorialGridPreview';
