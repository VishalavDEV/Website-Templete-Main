import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles as defaultArticles } from '../../data/articles';
import { Flame, ArrowUpRight, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function MostRead({ articles = defaultArticles }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const stories = articles.slice(0, 5);

  return (
    <section className="my-16">
      <div className="bg-white p-6 sm:p-10 border border-[#E8E5DC] shadow-xs">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[#141413]">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#D43825]" />
            <h3 className="font-serif-headline text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#141413]">
              Most Read Across Desks
            </h3>
          </div>
          <span className="text-xs font-mono text-[#73736C]">
            Real-time Reader Traffic
          </span>
        </div>

        {/* Data-Driven List */}
        <div className="divide-y divide-[#E8E5DC]">
          {stories.map((story, idx) => {
            const isHovered = hoveredIdx === idx;
            const rankFormatted = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={story.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative py-5 flex items-start gap-5 sm:gap-8 transition-colors cursor-pointer"
              >
                {/* Number with accent color transition */}
                <span
                  className={`font-mono text-3xl sm:text-4xl font-bold transition-colors duration-200 shrink-0 w-10 text-right ${
                    isHovered ? 'text-[#D43825]' : 'text-[#D1CDC4]'
                  }`}
                >
                  {rankFormatted}
                </span>

                {/* Content Box */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[0.6875rem] font-mono text-[#73736C] uppercase tracking-wider mb-1">
                    <span className="text-[#D43825] font-bold">{story.category}</span>
                    <span>&bull;</span>
                    <span>{story.readTime || story.readingTime}</span>
                  </div>

                  <Link to={`/article/${story.slug}`} className="block">
                    {/* Title with slight translate shift on desktop hover */}
                    <h4 className="font-serif-headline text-base sm:text-xl font-bold text-[#141413] group-hover:text-[#D43825] group-hover:translate-x-1.5 transition-all duration-200 leading-snug">
                      {story.title}
                    </h4>
                  </Link>

                  <div className="flex items-center gap-3 mt-2 text-xs text-[#73736C]">
                    <span>By {story.author.name || story.author}</span>
                  </div>
                </div>

                {/* Desktop-Only Hover Thumbnail Reveal */}
                <div className="hidden lg:block w-24 h-16 shrink-0 overflow-hidden bg-[#EAE7DF] border border-[#E8E5DC] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={story.coverImage || story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Arrow Icon */}
                <div className="shrink-0 p-1 text-[#D1CDC4] group-hover:text-[#D43825] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
