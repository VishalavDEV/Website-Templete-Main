import React, { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const CATEGORY_CONFIG: Record<string, { title: string; subtitle: string; bgGradient: string; badgeColor: string }> = {
  agriculture: {
    title: 'Agriculture & Intelligent Farming',
    subtitle: 'Exploring sub-surface soil matrices, closed-loop hydrology, micro-drip networks, and sustainable land management.',
    bgGradient: 'from-emerald-950 via-forest-950 to-neutral-950',
    badgeColor: 'bg-emerald-900 border-emerald-600 text-emerald-300'
  },
  technology: {
    title: 'The Technology Layer',
    subtitle: 'Swarm robotics, short-wave infrared cameras, embedded NPUs, and low-latency field edge computing.',
    bgGradient: 'from-slate-950 via-sky-950 to-neutral-950',
    badgeColor: 'bg-sky-900 border-sky-600 text-sky-300'
  },
  ai: {
    title: 'Artificial Intelligence & Neural Agronomy',
    subtitle: 'Generative protein design, vision transformers for leaf pathology, and satellite yield prediction models.',
    bgGradient: 'from-purple-950 via-indigo-950 to-neutral-950',
    badgeColor: 'bg-purple-900 border-purple-600 text-purple-300'
  },
  innovation: {
    title: 'Agricultural Innovation & Startups',
    subtitle: 'Breakthrough inventions turning desert dunes into fertile cropland and automating micro-pollination.',
    bgGradient: 'from-amber-950 via-stone-950 to-neutral-950',
    badgeColor: 'bg-amber-900 border-amber-600 text-amber-300'
  },
  stories: {
    title: 'Editorial Essays & Feature Stories',
    subtitle: 'Human-centered narratives on how robotics, climate volatility, and farm labor dynamics are evolving.',
    bgGradient: 'from-forest-950 via-neutral-900 to-black',
    badgeColor: 'bg-emerald-900 border-emerald-600 text-emerald-300'
  }
};

export const CategoryPage: React.FC = () => {
  const { catName } = useParams<{ catName: string }>();
  const location = useLocation();

  // Extract path segment (e.g. "technology" from "/technology") or catName param
  const pathSegment = location.pathname.replace(/^\//, '').toLowerCase();
  const categoryKey = catName ? catName.toLowerCase() : pathSegment || 'agriculture';
  const config = CATEGORY_CONFIG[categoryKey] || CATEGORY_CONFIG.agriculture;

  // Filter articles strictly matching current category
  const categoryArticles = ARTICLES.filter(
    a => a.category.toLowerCase() === categoryKey
  );

  // Fallback to all if category has no direct filter match
  const articlesToDisplay = categoryArticles.length > 0 ? categoryArticles : ARTICLES;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${config.title} — AGROTECH AI`;
  }, [categoryKey, config.title]);

  return (
    <main className="min-h-screen pt-28 pb-20 bg-theme-primary">
      {/* Category Hero Header */}
      <ScrollReveal direction="down">
        <section className={`relative py-20 px-6 bg-gradient-to-b ${config.bgGradient} text-white overflow-hidden mb-16 border-b border-neutral-800`}>
          <div className="max-w-7xl mx-auto relative z-10 space-y-4">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono-tech uppercase tracking-widest font-bold ${config.badgeColor}`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>CATEGORY EDITION</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif-editorial font-extrabold tracking-tight leading-tight max-w-4xl text-white">
              {config.title}
            </h1>

            <p className="text-base sm:text-lg text-neutral-200 font-sans max-w-2xl leading-relaxed">
              {config.subtitle}
            </p>

            <div className="pt-4 flex items-center space-x-6 text-xs font-mono-tech text-neutral-300 border-t border-white/10 font-medium">
              <span>INDEXED ARTICLES: {articlesToDisplay.length}</span>
              <span>•</span>
              <span>UPDATED DAILY</span>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Article Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200 dark:border-neutral-800">
          <h2 className="text-xl font-serif-editorial font-bold text-theme-primary">
            All Articles in {config.title.split('&')[0]}
          </h2>
          <div className="flex items-center gap-2 text-xs font-mono-tech text-theme-muted font-bold">
            <Filter className="w-4 h-4" /> SORTED BY LATEST
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesToDisplay.map((art, idx) => (
            <ScrollReveal key={art.id} delay={(idx % 3) * 120}>
              <div className="group cursor-pointer rounded-3xl bg-theme-surface border border-neutral-200 dark:border-neutral-800 hover:border-emerald-700 dark:hover:border-emerald-500 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden h-full">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden block">
                    <ImageWithFallback src={art.image} alt={art.title} hoverZoom className="w-full h-full object-cover block" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-white font-mono-tech text-[10px] uppercase tracking-widest font-bold">
                      {art.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-xs text-theme-muted font-mono-tech flex items-center justify-between">
                      <span>{art.date}</span>
                      <span>{art.readingTime}</span>
                    </div>

                    <Link to={`/article/${art.slug}`}>
                      <h3 className="text-xl font-serif-editorial font-bold text-theme-primary group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                        {art.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-theme-secondary font-sans line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-neutral-200/60 dark:border-neutral-800 flex items-center justify-between text-xs font-mono-tech mt-auto">
                  <span className="text-theme-muted">BY {art.author.name}</span>
                  <Link
                    to={`/article/${art.slug}`}
                    className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    READ <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
};
