import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { articles } from '../data/articles';
import { Breadcrumbs } from '../components/utility/Breadcrumbs';
import { StoryCard, LargeStoryCard, MediumStoryCard, HorizontalStoryCard } from '../components/editorial/StoryCard';
import { NewsletterCTA } from '../components/editorial/NewsletterCTA';
import { LayoutGrid, List, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export function Category() {
  const params = useParams();
  const categoryIdentifier = params.category || params.slug;
  const [selectedTag, setSelectedTag] = useState('All');
  const [layoutMode, setLayoutMode] = useState('grid');
  const [filterFormat, setFilterFormat] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const category =
    categories.find(
      (c) =>
        c.slug === categoryIdentifier ||
        c.id === categoryIdentifier ||
        c.name.toLowerCase() === categoryIdentifier?.toLowerCase()
    ) || categories[0];

  // Match articles by categorySlug or name or long-reads criteria
  let categoryArticles = articles.filter(
    (a) =>
      a.categorySlug === category.slug ||
      a.category.toLowerCase().includes(category.name.toLowerCase()) ||
      (category.slug === 'long-reads' && (parseInt(a.readTime) >= 10 || a.kicker?.includes('Long Reads'))) ||
      categoryIdentifier === 'all'
  );

  // If fewer than 4 articles, backfill with curated articles so page is always richly populated
  if (categoryArticles.length < 4) {
    const supplement = articles.filter((a) => !categoryArticles.some((ca) => ca.id === a.id));
    categoryArticles = [...categoryArticles, ...supplement];
  }

  const filteredArticles = categoryArticles.filter((art) => {
    if (selectedTag !== 'All' && !art.tags?.includes(selectedTag)) return false;
    if (filterFormat === 'audio' && !art.audioDuration) return false;
    if (filterFormat === 'long' && parseInt(art.readTime) < 10) return false;
    return true;
  });

  // Flow Subsets:
  // 1. Featured Story
  const featuredStory = filteredArticles[0] || articles[0];
  // 2. Latest Stories (next 2)
  const latestStories = filteredArticles.slice(1, 3);
  // 3. More Stories (paginated rest)
  const moreStories = filteredArticles.slice(3);

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / itemsPerPage));

  const breadcrumbItems = [{ label: category.name }];

  return (
    <div className="category-page max-w-7xl mx-auto px-4 md:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* 1. Category Header */}
      <header className="py-6 sm:py-10 border-b-2 border-[#141413] bg-white p-5 sm:p-10 mb-8 sm:mb-10 shadow-xs">
        <div className="flex items-center gap-3 mb-2.5">
          <span
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline-block shrink-0"
            style={{ backgroundColor: category.accentColor || '#141413' }}
          />
          <span className="text-xs font-mono uppercase tracking-widest text-[#73736C] font-bold">
            Editorial Desk
          </span>
        </div>

        <h1 className="font-serif-headline text-2xl sm:text-4xl md:text-5xl font-black text-[#141413] uppercase tracking-tight mb-3">
          {category.name}
        </h1>

        <p className="font-serif-reading text-base sm:text-xl text-[#52524E] max-w-3xl italic leading-relaxed mb-6">
          {category.description}
        </p>

        {/* Subtopic Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-4 sm:pt-6 border-t border-[#E8E5DC]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#141413] mr-2">
            Subtopic Filters:
          </span>
          <button
            onClick={() => {
              setSelectedTag('All');
              setCurrentPage(1);
            }}
            className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider border transition-colors cursor-pointer ${
              selectedTag === 'All'
                ? 'bg-[#141413] text-[#FAF9F5] border-[#141413]'
                : 'bg-[#FAF9F5] text-[#52524E] border-[#D1CDC4] hover:border-[#141413]'
            }`}
          >
            All Subtopics
          </button>
          {category.tags?.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSelectedTag(tag);
                setCurrentPage(1);
              }}
              className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider border transition-colors cursor-pointer ${
                selectedTag === tag
                  ? 'bg-[#141413] text-[#FAF9F5] border-[#141413]'
                  : 'bg-[#FAF9F5] text-[#52524E] border-[#D1CDC4] hover:border-[#141413]'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </header>

      {/* 2. Featured Story */}
      {featuredStory && (
        <section className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D43825] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lead Desk Monograph</span>
          </div>
          <LargeStoryCard article={featuredStory} showExcerpt={true} />
        </section>
      )}

      {/* 3. Latest Stories (2-Col Spread) */}
      {latestStories.length > 0 && (
        <section className="mb-10 sm:mb-14">
          <div className="pb-3 mb-6 border-b-2 border-[#141413]">
            <h2 className="font-serif-headline text-xl font-bold uppercase tracking-tight text-[#141413]">
              Latest {category.name} Dispatches
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestStories.map((art) => (
              <StoryCard key={art.id} article={art} variant="horizontal" showExcerpt={true} />
            ))}
          </div>
        </section>
      )}

      {/* 4. More Stories Section with Grid/List Toggle */}
      {moreStories.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-[#141413]">
            <h2 className="font-serif-headline text-xl font-bold uppercase tracking-tight text-[#141413]">
              Archive & Monographic Collection
            </h2>

            <div className="flex items-center gap-1 border border-[#D1CDC4] bg-[#FAF9F5] p-0.5">
              <button
                onClick={() => setLayoutMode('grid')}
                className={`p-1.5 transition-colors cursor-pointer ${
                  layoutMode === 'grid' ? 'bg-white shadow-xs text-[#141413]' : 'text-[#73736C]'
                }`}
                title="Grid Layout"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayoutMode('list')}
                className={`p-1.5 transition-colors cursor-pointer ${
                  layoutMode === 'list' ? 'bg-white shadow-xs text-[#141413]' : 'text-[#73736C]'
                }`}
                title="List Layout"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {layoutMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreStories.map((art) => (
                <StoryCard key={art.id} article={art} variant="medium" showExcerpt={true} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {moreStories.map((art) => (
                <HorizontalStoryCard key={art.id} article={art} showExcerpt={true} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* 5. Pagination UI */}
      <div className="flex items-center justify-center gap-2 py-8 my-8 border-y border-[#E8E5DC]">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="p-2 border border-[#D1CDC4] bg-white text-[#141413] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FAF9F5] transition-colors cursor-pointer"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-9 h-9 text-xs font-mono font-bold border transition-colors cursor-pointer ${
              currentPage === i + 1
                ? 'bg-[#141413] text-[#FAF9F5] border-[#141413]'
                : 'bg-white text-[#52524E] border-[#D1CDC4] hover:border-[#141413]'
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="p-2 border border-[#D1CDC4] bg-white text-[#141413] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FAF9F5] transition-colors cursor-pointer"
          aria-label="Next page"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* 6. Newsletter */}
      <NewsletterCTA />
    </div>
  );
}

// Export CategoryPage alias
export const CategoryPage = Category;
