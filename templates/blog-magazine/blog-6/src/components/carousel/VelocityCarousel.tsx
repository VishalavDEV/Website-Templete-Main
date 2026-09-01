import React, { memo, useRef } from 'react';
import { motion, useScroll, useVelocity, useTransform, useSpring } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { ARTICLES_DATA, ArticleData } from '../../data/articles';
import { PRIMARY_IMAGES } from '../../data/assets';
import { DynamicImage } from '../ui/DynamicImage';

export interface VelocityCarouselProps {
  onSelectArticle?: (article: ArticleData) => void;
}

const CAROUSEL_STORIES = [
  {
    id: 'neural-renaissance',
    title: 'The Neural Renaissance: Photonic Crystals in Architecture',
    category: 'Spatial Realism',
    categoryTheme: 'blue',
    issue: 'Vol 42.08',
    readTime: '9 min read',
    image: PRIMARY_IMAGES.neuralRenaissance,
    curator: 'Dr. Linnea Holst',
  },
  {
    id: 'typography-4d',
    title: 'Typography in 4D: Kinetic Kerning for Variable Reality',
    category: 'Typography',
    categoryTheme: 'violet',
    issue: 'Essay 08',
    readTime: '6 min read',
    image: PRIMARY_IMAGES.typography4D,
    curator: 'Jean-Luc Dubois',
  },
  {
    id: 'photosynthetic-timber',
    title: 'Photosynthetic Timber & Carbon-Negative Pavilions',
    category: 'Architecture',
    categoryTheme: 'lime',
    issue: 'Fieldwork',
    readTime: '4 min read',
    image: PRIMARY_IMAGES.photosyntheticTimber,
    curator: 'Soren Lindqvist',
  },
  {
    id: 'acoustic-topologies',
    title: 'Acoustic Topologies: Sound for Non-Euclidean Rooms',
    category: 'Spatial Sound',
    categoryTheme: 'coral',
    issue: 'Research',
    readTime: '7 min read',
    image: PRIMARY_IMAGES.acousticTopologies,
    curator: 'Maya Al-Mansoor',
  },
  {
    id: 'generative-glass',
    title: 'Quantum Glass & Light Refraction in Public Plazas',
    category: 'Computational Design',
    categoryTheme: 'amber',
    issue: 'Case Study',
    readTime: '5 min read',
    image: PRIMARY_IMAGES.generativeGlass,
    curator: 'Kaelen Thorne',
  },
];

export const VelocityCarousel: React.FC<VelocityCarouselProps> = memo(({ onSelectArticle }) => {
  const railRef = useRef<HTMLDivElement>(null);

  // Measure scroll velocity from the window
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Smooth the velocity value using lightweight spring
  const smoothVelocity = useSpring(scrollVelocity, {
    stiffness: 150,
    damping: 32,
    mass: 0.75,
  });

  // Map scroll velocity to subtle skew angle
  const skewX = useTransform(smoothVelocity, [-1200, 0, 1200], [-3, 0, 3]);

  const scrollRail = (direction: 'left' | 'right') => {
    if (railRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      railRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleCardClick = (storyId: string) => {
    const article = ARTICLES_DATA[storyId] || ARTICLES_DATA['neural-renaissance'];
    if (onSelectArticle) {
      onSelectArticle(article);
    }
  };

  return (
    <section className="relative w-full py-12 sm:py-20 overflow-x-clip border-t border-slate-200/60 bg-gradient-to-b from-transparent via-slate-100/40 to-transparent">
      {/* Top Header & Carousel Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-widest font-semibold mb-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Velocity Rail • Issue 08</span>
          </div>
          <h2 className="type-h2 font-display font-extrabold text-slate-900 tracking-tight">
            Trending Visual Essays & Topics
          </h2>
        </div>

        {/* Tactile Left/Right Rail Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollRail('left')}
            aria-label="Scroll Carousel Left"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200 shadow-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollRail('right')}
            aria-label="Scroll Carousel Right"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200 shadow-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Touch-Optimized Dynamic Velocity Rail */}
      <div
        ref={railRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-6 md:px-8 max-w-full no-scrollbar snap-x snap-mandatory py-4 cursor-grab active:cursor-grabbing"
      >
        {CAROUSEL_STORIES.map((story) => (
          <motion.div
            key={story.id}
            style={{
              skewX,
            }}
            onClick={() => handleCardClick(story.id)}
            className="snap-start flex-shrink-0 w-[82vw] sm:w-[350px] lg:w-[380px] max-w-[400px] group glass-card-airy rounded-3xl p-4 sm:p-5 bg-white/95 border border-white/95 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between gpu-layer"
          >
            {/* Image Container with Dynamic Aspect Ratio */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden mb-3 sm:mb-4 shadow-xs">
              <DynamicImage
                src={story.image}
                alt={story.title}
                fallbackKey={story.id}
                layoutId={`article-img-${story.id}`}
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                containerClassName="relative w-full h-full overflow-hidden bg-slate-900"
                overlay={
                  <>
                    <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                      <motion.span
                        layoutId={`article-badge-${story.id}`}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/90 text-blue-600 backdrop-blur-md shadow-xs border border-white/80"
                      >
                        {story.category}
                      </motion.span>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-black/45 px-2.5 py-0.5 sm:py-1 rounded-full backdrop-blur-md text-white text-[10px] font-mono flex items-center gap-1 z-10">
                      <Clock className="w-3 h-3 text-amber-300" />
                      <span>{story.readTime}</span>
                    </div>
                  </>
                }
              />
            </div>

            {/* Title & Metadata */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1 block">
                {story.issue}
              </span>
              <motion.h3
                layoutId={`article-title-${story.id}`}
                className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-2 sm:mb-3 line-clamp-2"
              >
                {story.title}
              </motion.h3>
            </div>

            {/* Card Footer */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-2">
              <span className="font-mono text-[11px] truncate max-w-[150px] font-medium">By {story.curator}</span>
              <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

VelocityCarousel.displayName = 'VelocityCarousel';
