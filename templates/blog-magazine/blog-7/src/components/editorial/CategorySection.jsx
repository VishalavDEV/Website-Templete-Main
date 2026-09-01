import React from 'react';
import { Link } from 'react-router-dom';
import { StoryCard, LargeStoryCard, HorizontalStoryCard } from './StoryCard';
import { categories as defaultCategories } from '../../data/categories';
import { articles as defaultArticles } from '../../data/articles';
import { ArrowRight, BookOpen, Sparkles, UserCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * CategorySection supporting variants:
 * - 'featured' (1 large lead + right column with supporting cards & desk curator box)
 * - 'three-column' (3 equal column grid)
 * - 'center-feature' (Left column + 1 large center feature + Right column)
 * - 'horizontal' (Stacked split horizontal cards)
 */
export function CategorySection({
  category = 'Architecture & Design',
  variant = 'featured',
  articles: customArticles,
  className = '',
}) {
  const shouldReduceMotion = useReducedMotion();

  // Resolve category object and articles
  const categoryObj =
    typeof category === 'object'
      ? category
      : defaultCategories.find(
          (c) =>
            c.name.toLowerCase() === category.toLowerCase() ||
            c.slug.toLowerCase() === category.toLowerCase() ||
            c.id.toLowerCase() === category.toLowerCase()
        ) || {
          name: category,
          slug: category.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          accentColor: '#D43825',
          tags: ['Monographs', 'Criticism', 'Essays', 'Design', 'Future'],
        };

  // Find articles for this category
  const matchingArticles =
    customArticles ||
    defaultArticles.filter(
      (a) =>
        a.categorySlug === categoryObj.slug ||
        a.category.toLowerCase().includes(categoryObj.name.toLowerCase()) ||
        categoryObj.name.toLowerCase().includes(a.category.toLowerCase())
    );

  // If fewer than 4 articles exist in this category, backfill with curated articles
  // so there is NEVER empty space on the right or bottom of the spread
  const otherArticles = defaultArticles.filter(
    (a) => !matchingArticles.some((m) => m.id === a.id)
  );

  const displayArticles = [
    ...matchingArticles,
    ...otherArticles,
  ].slice(0, 5);

  const leadArticle = displayArticles[0];
  const supportingArticles = displayArticles.slice(1, 4);

  // 1. Variant: Three-Column Grid
  if (variant === 'three-column') {
    return (
      <section className={`my-16 sm:my-20 ${className}`}>
        <div className="flex items-center justify-between pb-3.5 mb-8 border-b-2 border-[#141413]">
          <div className="flex items-center gap-3">
            <span
              className="w-3.5 h-3.5 inline-block shrink-0"
              style={{ backgroundColor: categoryObj.accentColor || '#D43825' }}
            />
            <h3 className="font-serif-headline text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#141413]">
              {categoryObj.name}
            </h3>
          </div>
          <Link
            to={`/category/${categoryObj.slug}`}
            className="text-xs font-bold uppercase tracking-wider text-[#141413] hover:text-[#D43825] flex items-center gap-1 group transition-colors"
          >
            <span>Explore Desk</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayArticles.slice(0, 3).map((art) => (
            <StoryCard key={art.id} article={art} variant="medium" showExcerpt={true} />
          ))}
        </div>
      </section>
    );
  }

  // 2. Default Variant: Featured (1 Lead 7-col + 3 Side 5-col + Curator Box)
  return (
    <section className={`my-16 sm:my-20 ${className}`}>
      {/* Section Header */}
      <div className="flex items-center justify-between pb-3.5 mb-8 border-b-2 border-[#141413]">
        <div className="flex items-center gap-3">
          <span
            className="w-3.5 h-3.5 inline-block shrink-0"
            style={{ backgroundColor: categoryObj.accentColor || '#D43825' }}
          />
          <h3 className="font-serif-headline text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#141413]">
            {categoryObj.name}
          </h3>
        </div>
        <Link
          to={`/category/${categoryObj.slug}`}
          className="text-xs font-bold uppercase tracking-wider text-[#141413] hover:text-[#D43825] flex items-center gap-1 group transition-colors"
        >
          <span>Explore Desk</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left: Large Flagship Feature (7 cols) */}
        <div className="lg:col-span-7">
          <LargeStoryCard article={leadArticle} showExcerpt={true} />
        </div>

        {/* Right: Rich Supporting Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          {/* Supporting Stories Stack */}
          <div className="space-y-4">
            {supportingArticles.map((art) => (
              <div key={art.id} className="border-b border-[#E8E5DC] pb-4 last:border-b-0 last:pb-0">
                <StoryCard article={art} variant="horizontal" showExcerpt={false} />
              </div>
            ))}
          </div>

          {/* Desk Curator & Dispatch Box */}
          <div className="bg-[#FAF9F5] border border-[#141413] p-5 shadow-xs">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#D1CDC4]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D43825]" />
                <span className="font-serif-headline text-xs font-bold uppercase tracking-wider text-[#141413]">
                  {categoryObj.name} Focus
                </span>
              </div>
              <span className="text-[0.65rem] font-mono text-[#73736C]">Quarterly Dossier</span>
            </div>

            <p className="text-xs text-[#52524E] leading-relaxed mb-3 italic font-serif-reading text-[0.9375rem]">
              "Investigating the intersection of physical materials, ecological regeneration, and intellectual inquiry across our international bureaus."
            </p>

            {/* Subtopics Tags */}
            <div className="pt-3 border-t border-[#E8E5DC]">
              <span className="font-bold text-[#141413] block mb-2 font-mono uppercase text-[0.65rem] tracking-wider text-[#73736C]">
                Active Subtopic Desks:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {categoryObj.tags?.slice(0, 5).map((tag, idx) => (
                  <Link
                    key={idx}
                    to={`/category/${categoryObj.slug}`}
                    className="px-2.5 py-1 bg-white border border-[#D1CDC4] text-[0.6875rem] text-[#52524E] hover:border-[#141413] hover:text-[#141413] transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
