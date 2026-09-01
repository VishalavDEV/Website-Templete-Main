import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, BookOpen, Clock } from 'lucide-react';
import { Article } from '../../types';
import { articleService } from '../../services/articleService';
import { Card3D } from '../common/Card3D';

interface HeroProps {
  leadArticle: Article;
}

export const Hero: React.FC<HeroProps> = ({ leadArticle }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (!leadArticle) return null;

  const author = articleService.getAuthorByIdSync(leadArticle.authorId);
  const category = articleService.getCategoryBySlugSync(leadArticle.category);

  const fallbackImage = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop';
  const heroImage = (!imgError && leadArticle.image) ? leadArticle.image : fallbackImage;

  return (
    <section className="relative overflow-hidden py-8 sm:py-12 border-b border-[#E8E2D5] dark:border-[#3A342E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E27453]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Lead Investigation</span>
              </span>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E8E2D5]/70 dark:bg-[#282420] text-[#1C1917] dark:text-[#F7F4EE]">
                {category?.name || leadArticle.category || 'Frontier Tech'}
              </span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] dark:text-[#F7F4EE] leading-[1.15] tracking-tight">
              <Link
                to={`/story/${leadArticle.slug}`}
                className="hover:text-[#C85A32] dark:hover:text-[#E27453] transition-colors"
              >
                {leadArticle.title}
              </Link>
            </h1>

            <p className="text-base sm:text-lg text-[#44403C] dark:text-[#D7D1C6] leading-relaxed line-clamp-3 font-normal">
              {leadArticle.excerpt}
            </p>

            {/* Author & Meta Row */}
            <div className="flex items-center space-x-4 pt-2">
              {author && (
                <Link
                  to={`/author/${author.slug}`}
                  className="flex items-center space-x-3 group"
                >
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#E8E2D5] dark:border-[#3A342E] group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop';
                    }}
                  />
                  <div>
                    <p className="text-sm font-bold text-[#1C1917] dark:text-[#F7F4EE] group-hover:text-[#C85A32] transition-colors">
                      {author.name}
                    </p>
                    <p className="text-xs text-[#78716C] dark:text-[#A39C90]">
                      {author.role}
                    </p>
                  </div>
                </Link>
              )}

              <div className="h-8 w-px bg-[#E8E2D5] dark:bg-[#3A342E]" />

              <div className="flex items-center space-x-3 text-xs text-[#78716C] dark:text-[#A39C90]">
                <span className="flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1 text-[#C85A32] dark:text-[#E27453]" />
                  {leadArticle.readingTime}
                </span>
                <span className="flex items-center">
                  <BookOpen className="w-3.5 h-3.5 mr-1" />
                  {leadArticle.date}
                </span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-3">
              <Link
                to={`/story/${leadArticle.slug}`}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#1C1917] hover:bg-[#C85A32] dark:bg-[#C85A32] dark:hover:bg-[#B34722] text-white text-sm font-bold tracking-wide transition-all shadow-xs hover:shadow-md cursor-pointer"
              >
                <span>Read Full Investigation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 3D Visual Column */}
          <div className="lg:col-span-6">
            <Card3D maxTilt={6} glareEffect={true} className="rounded-3xl overflow-hidden shadow-2xl">
              <Link to={`/story/${leadArticle.slug}`} className="block relative group aspect-16/10 bg-[#E8E2D5] dark:bg-[#1E1B18]">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-[#E8E2D5] dark:bg-[#1E1B18] animate-pulse" />
                )}
                <img
                  src={heroImage}
                  alt={leadArticle.title}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImgError(true);
                    setImageLoaded(true);
                  }}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/50 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                  <div className="min-w-0 pr-3">
                    <p className="text-xs uppercase tracking-widest font-semibold text-[#E27453]">
                      Editorial Cover Story
                    </p>
                    <p className="text-sm font-bold truncate text-white">
                      {leadArticle.title}
                    </p>
                  </div>
                  <span className="p-2 rounded-xl bg-white/20 group-hover:bg-[#C85A32] text-white transition-colors shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};
