import React, { memo, useState, useMemo, useEffect } from 'react';
import { BentoCard, BentoArticle } from './BentoCard';
import { Sparkles, ArrowRight, Flame } from 'lucide-react';
import { ARTICLES_DATA, ArticleData } from '../../data/articles';
import { PRIMARY_IMAGES } from '../../data/assets';

export interface BentoGridProps {
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
  onSelectArticle?: (article: ArticleData) => void;
  onOpenPrintModal?: () => void;
}

const BENTO_ARTICLES: BentoArticle[] = [
  {
    id: 'neural-renaissance',
    title: 'The Neural Renaissance: How Spatial Computing & Photonic Crystals Redefine Built Reality',
    category: 'Spatial Realism',
    categoryTheme: 'blue',
    excerpt: 'Exploring the boundary between structural mechanics and perceptual illusion in next-generation architectural surfaces and ambient display skins.',
    author: {
      name: 'Dr. Linnea Holst',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    },
    readTime: '9 min read',
    image: PRIMARY_IMAGES.neuralRenaissance,
    variant: 'hero-2x2',
    tag: 'Cover Feature',
    issueVol: 'Issue 08 Special',
    isTrending: true,
  },
  {
    id: 'typography-4d',
    title: 'Typography in 4D: Kinetic Kerning for Variable Reality Headsets',
    category: 'Typography',
    categoryTheme: 'violet',
    excerpt: 'Type is no longer flat. In spatial depth, letters breathe, react to gaze angles, and adjust optical density in real-time.',
    author: {
      name: 'Jean-Luc Dubois',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    },
    readTime: '6 min read',
    image: PRIMARY_IMAGES.typography4D,
    variant: 'tall-1x2',
    issueVol: 'No. 42 / Essay',
  },
  {
    id: 'bento-3',
    title: 'Good architecture is the physical crystallization of human longing for weightlessness.',
    category: 'Essays',
    categoryTheme: 'amber',
    author: {
      name: 'Elena Vance-Moreau',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    },
    readTime: '2 min read',
    variant: 'quote-1x1',
    issueVol: 'Editorial Foreword',
  },
  {
    id: 'photosynthetic-timber',
    title: 'Photosynthetic Timber & Carbon-Negative Pavilions in Scandinavia',
    category: 'Architecture',
    categoryTheme: 'lime',
    readTime: '4 min read',
    image: PRIMARY_IMAGES.photosyntheticTimber,
    author: {
      name: 'Soren Lindqvist',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    },
    variant: 'standard-1x1',
  },
  {
    id: 'acoustic-topologies',
    title: 'The Sound of Silence: Acoustic Geometry in Non-Euclidean Concert Halls',
    category: 'Culture',
    categoryTheme: 'coral',
    excerpt: 'Parametric acoustic baffles create intimate auditory bubbles in vast subterranean amphitheaters.',
    author: {
      name: 'Maya Al-Mansoor',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80',
    },
    readTime: '7 min read',
    image: PRIMARY_IMAGES.acousticTopologies,
    variant: 'wide-2x1',
    tag: 'Acoustics',
  },
  {
    id: 'generative-glass',
    title: 'Generative Glass: Algorithmic Refraction in Modern Facade Design',
    category: 'AI Synthetics',
    categoryTheme: 'blue',
    readTime: '5 min read',
    image: PRIMARY_IMAGES.generativeGlass,
    author: {
      name: 'Kaelen Thorne',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80',
    },
    variant: 'standard-1x1',
  },
];

const CATEGORIES = [
  'All Dispatches',
  'Spatial Design',
  'AI Synthetics',
  'Typography',
  'Architecture',
  'Culture',
  'Essays',
];

export const BentoGrid: React.FC<BentoGridProps> = memo(({
  activeCategory = 'All Dispatches',
  onSelectCategory,
  onSelectArticle,
  onOpenPrintModal,
}) => {
  const [internalCategory, setInternalCategory] = useState(activeCategory);

  useEffect(() => {
    setInternalCategory(activeCategory);
  }, [activeCategory]);

  const handleTabClick = (category: string) => {
    setInternalCategory(category);
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  const filteredArticles = useMemo(() => {
    if (internalCategory === 'All Dispatches') return BENTO_ARTICLES;

    const query = internalCategory.toLowerCase();
    return BENTO_ARTICLES.filter((a) => {
      const cat = a.category.toLowerCase();
      if (query === 'spatial design' || query === 'spatial realism') {
        return cat.includes('spatial') || a.id === 'neural-renaissance';
      }
      if (query === 'ai synthetics' || query === 'synthetic ai') {
        return cat.includes('ai') || cat.includes('computational') || a.id === 'generative-glass';
      }
      if (query === 'typography') {
        return cat.includes('typography') || a.id === 'typography-4d';
      }
      if (query === 'architecture') {
        return cat.includes('architecture') || a.id === 'photosynthetic-timber';
      }
      if (query === 'culture') {
        return cat.includes('culture') || cat.includes('sound') || a.id === 'acoustic-topologies';
      }
      if (query === 'essays') {
        return cat.includes('essays') || cat.includes('philosophy') || a.id === 'bento-3';
      }
      return cat.includes(query);
    });
  }, [internalCategory]);

  const handleSelectArticle = (articleId: string) => {
    const article = ARTICLES_DATA[articleId] || ARTICLES_DATA['neural-renaissance'];
    if (onSelectArticle) {
      onSelectArticle(article);
    }
  };

  return (
    <section id="stories" className="relative w-full py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto scroll-mt-28">
      {/* Anchors for smooth navigation without overlapping headers */}
      <div id="spatial-design" className="absolute -top-28" />
      <div id="ai-synthetics" className="absolute -top-28" />
      <div id="typography" className="absolute -top-28" />
      <div id="architecture" className="absolute -top-28" />
      <div id="culture" className="absolute -top-28" />
      <div id="essays" className="absolute -top-28" />

      {/* Section Header with Category Tabs */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-widest font-semibold mb-2">
            <Flame className="w-3.5 h-3.5 text-rose-500" />
            <span>Curated Bento Discovery</span>
          </div>
          <h2 className="type-h1 font-display font-extrabold text-slate-900 tracking-tight">
            Latest Stories & Deep-Dives
          </h2>
        </div>

        {/* Filter Category Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/80 shadow-xs">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => handleTabClick(category)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                internalCategory.toLowerCase() === category.toLowerCase()
                  ? 'bg-white text-blue-600 shadow-sm border border-slate-200/70 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetrical Bento CSS Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[auto]">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <BentoCard
              key={article.id}
              article={article}
              index={index}
              onSelect={handleSelectArticle}
            />
          ))
        ) : (
          <div className="col-span-full py-16 text-center glass-card-airy rounded-3xl bg-white/80 p-8">
            <h4 className="font-display font-bold text-lg text-slate-800 mb-2">
              No matching stories for "{internalCategory}"
            </h4>
            <button
              onClick={() => handleTabClick('All Dispatches')}
              className="px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold cursor-pointer"
            >
              Reset to All Dispatches
            </button>
          </div>
        )}
      </div>

      {/* Grid Footer CTA Strip */}
      <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl glass-card-airy bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-slate-50 border border-white/95 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 flex-shrink-0">
            <Sparkles className="w-6 h-6 text-amber-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-slate-900 text-base sm:text-lg">
              Want all 24 curated stories from Issue 08?
            </span>
            <span className="text-xs text-slate-500">
              Delivered in collectible cloth-bound foil print and spatial digital format.
            </span>
          </div>
        </div>

        <button
          onClick={onOpenPrintModal}
          className="px-6 py-3 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold tracking-tight transition-all duration-300 shadow-md flex items-center gap-2 flex-shrink-0 hover:shadow-blue-500/20 cursor-pointer active:scale-95"
        >
          <span>Order Collectible Print Issue</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
});

BentoGrid.displayName = 'BentoGrid';
