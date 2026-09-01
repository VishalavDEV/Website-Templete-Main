import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, User, Bookmark } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { ARTICLES } from '../../data/articles';
import { useApp } from '../../context/AppContext';

export const FeaturedGrid: React.FC = () => {
  const { toggleBookmark, isBookmarked } = useApp();

  const heroStory = ARTICLES[0];
  const mediumStories = [ARTICLES[1], ARTICLES[2]];
  const smallStories = ARTICLES.slice(3, 7);

  return (
    <section id="featured-stories" className="py-20 bg-theme-primary border-t border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="CURATED EDITORIAL"
          title="Stories Shaping Tomorrow"
          subtitle="Explore the latest breakthroughs in smart farming, neural path science, robotics swarms, and hydrological engineering."
        />

        {/* Asymmetric Magazine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Main Hero Story (7 cols) */}
          <div className="lg:col-span-7 group flex flex-col justify-between bg-theme-surface rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-emerald-700 dark:hover:border-emerald-500 transition-all shadow-sm hover:shadow-xl">
            <div className="relative overflow-hidden aspect-[16/10] w-full block">
              <ImageWithFallback
                src={heroStory.image}
                alt={heroStory.title}
                hoverZoom
                className="w-full h-full object-cover block"
              />
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-forest-900 text-white font-mono-tech text-[10px] uppercase tracking-widest font-bold">
                  FEATURED STORY
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md text-emerald-900 dark:text-emerald-300 font-mono-tech text-[10px] uppercase tracking-widest font-bold">
                  {heroStory.category}
                </span>
              </div>
              <button
                onClick={() => toggleBookmark(heroStory.slug)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md text-neutral-700 dark:text-neutral-200 hover:text-emerald-700 transition-colors shadow-md"
                aria-label="Save story"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked(heroStory.slug) ? 'fill-emerald-600 text-emerald-600' : ''}`} />
              </button>
            </div>

            <div className="p-5 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-theme-muted font-mono-tech">
                <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {heroStory.author.name}</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {heroStory.readingTime}</span>
              </div>

              <Link to={`/article/${heroStory.slug}`} className="block group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                <h3 className="text-xl sm:text-3xl md:text-4xl font-serif-editorial font-extrabold text-theme-primary leading-tight">
                  {heroStory.title}
                </h3>
              </Link>

              <p className="text-theme-secondary text-xs sm:text-sm font-sans leading-relaxed line-clamp-3">
                {heroStory.excerpt}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {heroStory.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono-tech uppercase tracking-wider text-theme-muted bg-theme-muted px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/article/${heroStory.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono-tech font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 hover:translate-x-1 transition-transform ml-auto sm:ml-0"
                >
                  Read Story <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Medium Stories (5 cols) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            {mediumStories.map(story => (
              <div
                key={story.id}
                className="group relative p-6 rounded-3xl bg-theme-surface border border-neutral-200 dark:border-neutral-800 hover:border-emerald-700 dark:hover:border-emerald-500 transition-all shadow-sm hover:shadow-lg flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase tracking-widest text-emerald-800 dark:text-emerald-400 font-bold block mb-1">
                      {story.category}
                    </span>
                    <Link to={`/article/${story.slug}`}>
                      <h4 className="text-xl font-serif-editorial font-bold text-theme-primary group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                        {story.title}
                      </h4>
                    </Link>
                  </div>
                  <button
                    onClick={() => toggleBookmark(story.slug)}
                    className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-emerald-600 transition-colors shrink-0"
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked(story.slug) ? 'fill-emerald-600 text-emerald-600' : ''}`} />
                  </button>
                </div>

                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 block">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.title}
                    hoverZoom
                    className="w-full h-full object-cover block"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-theme-muted font-mono-tech pt-2 border-t border-neutral-200/60 dark:border-neutral-800">
                  <span>{story.date}</span>
                  <Link
                    to={`/article/${story.slug}`}
                    className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    READ <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Small Stories Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {smallStories.map(story => (
            <div
              key={story.id}
              className="group p-5 rounded-2xl bg-theme-surface border border-neutral-200 dark:border-neutral-800 hover:border-emerald-700 dark:hover:border-emerald-500 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-3 block">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.title}
                    hoverZoom
                    className="w-full h-full object-cover block"
                  />
                </div>
                <span className="text-[10px] font-mono-tech uppercase tracking-widest text-emerald-800 dark:text-emerald-400 font-bold block mb-1">
                  {story.category}
                </span>
                <Link to={`/article/${story.slug}`}>
                  <h4 className="text-base font-serif-editorial font-bold text-theme-primary line-clamp-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {story.title}
                  </h4>
                </Link>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200/60 dark:border-neutral-800 flex items-center justify-between text-[11px] text-theme-muted font-mono-tech">
                <span>{story.readingTime}</span>
                <Link to={`/article/${story.slug}`} className="text-emerald-700 dark:text-emerald-400 font-bold">
                  View &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
