import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Eye, Bookmark, ArrowUpRight } from 'lucide-react';
import { Article } from '../../types';
import { articleService } from '../../services/articleService';
import { useBookmarks } from '../../hooks/useBookmarks';
import { Card3D } from '../common/Card3D';

interface ArticleCardProps {
  article: Article;
  variant?: 'grid' | 'horizontal' | 'compact' | 'featured' | 'featured-large' | 'minimal' | 'list';
  showExcerpt?: boolean;
  className?: string;
  enable3DTilt?: boolean;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop';
const FALLBACK_AVATAR = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop';

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  variant = 'grid',
  showExcerpt = true,
  className = '',
  enable3DTilt = true
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(article.image || FALLBACK_IMAGE);
  const author = articleService.getAuthorByIdSync(article.authorId);
  const category = articleService.getCategoryBySlugSync(article.category);
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(article.id);

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(article.id);
  };

  const handleImageError = () => {
    setImageSrc(FALLBACK_IMAGE);
    setImageLoaded(true);
  };

  // Compact variant for trending rail & small widgets
  if (variant === 'compact') {
    return (
      <Card3D disabled={!enable3DTilt} maxTilt={5} glareEffect={false} className="h-full">
        <article
          className={`group bg-white dark:bg-[#1E1B18] rounded-2xl border border-[#E8E2D5] dark:border-[#3A342E] p-4 hover:border-[#C85A32]/70 dark:hover:border-[#E27453]/60 transition-all duration-300 hover:shadow-md flex flex-col justify-between h-full ${className}`}
        >
          <div>
            <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden bg-[#E8E2D5] dark:bg-[#282420] mb-3">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-[#E8E2D5] dark:bg-[#282420] animate-pulse" />
              )}
              <img
                src={imageSrc}
                alt={article.title}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                onError={handleImageError}
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <div className="absolute top-2.5 right-2.5 z-10">
                <button
                  onClick={handleBookmarkClick}
                  aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark story'}
                  className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#C85A32] transition-colors cursor-pointer shadow-xs"
                >
                  <Bookmark className={`w-3 h-3 ${bookmarked ? 'fill-[#E27453] text-[#E27453]' : ''}`} />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-[11px] text-[#78716C] dark:text-[#A39C90] font-medium mb-1.5">
              <span className="text-[#C85A32] dark:text-[#E27453] font-bold">
                {category?.name || article.category}
              </span>
              <span>•</span>
              <span className="flex items-center">
                <Clock className="w-3 h-3 mr-1 text-[#C85A32] dark:text-[#E27453]" />
                {article.readingTime}
              </span>
            </div>

            <h4 className="font-display font-bold text-sm text-[#1C1917] dark:text-[#F7F4EE] line-clamp-2 group-hover:text-[#C85A32] dark:group-hover:text-[#E27453] transition-colors leading-snug">
              <Link to={`/story/${article.slug}`}>{article.title}</Link>
            </h4>
          </div>

          <div className="pt-3 mt-3 border-t border-[#E8E2D5] dark:border-[#3A342E] flex items-center justify-between text-xs text-[#78716C] dark:text-[#A39C90]">
            <span className="truncate max-w-[120px] font-medium text-[#1C1917] dark:text-[#F7F4EE]">
              {author?.name || 'Staff Editor'}
            </span>
            <span className="flex items-center text-[11px]">
              <Eye className="w-3 h-3 mr-1" />
              {article.views.toLocaleString()}
            </span>
          </div>
        </article>
      </Card3D>
    );
  }

  // Minimal variant for sidebar lists
  if (variant === 'minimal') {
    return (
      <div className={`group flex items-start space-x-4 py-3 border-b border-[#E8E2D5] dark:border-[#3A342E] last:border-0 ${className}`}>
        <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 relative bg-[#E8E2D5] dark:bg-[#1E1B18]">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-[#E8E2D5] dark:bg-[#1E1B18] animate-pulse" />
          )}
          <img
            src={imageSrc}
            alt={article.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={handleImageError}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
        <div className="flex-1 min-w-0">
          <Link
            to={`/category/${article.category}`}
            className="text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E27453] hover:underline"
          >
            {category?.name || article.category}
          </Link>
          <h4 className="font-display font-bold text-sm text-[#1C1917] dark:text-[#F7F4EE] line-clamp-2 mt-1 group-hover:text-[#C85A32] dark:group-hover:text-[#E27453] transition-colors">
            <Link to={`/story/${article.slug}`}>{article.title}</Link>
          </h4>
          <span className="text-xs text-[#78716C] dark:text-[#A39C90] mt-1 block">
            {article.readingTime}
          </span>
        </div>
      </div>
    );
  }

  // Horizontal / List layout
  if (variant === 'horizontal' || variant === 'list') {
    return (
      <Card3D disabled={!enable3DTilt} maxTilt={4} glareEffect={true} className="h-full">
        <article
          className={`group bg-white dark:bg-[#1E1B18] rounded-2xl border border-[#E8E2D5] dark:border-[#3A342E] p-5 hover:border-[#C85A32]/70 dark:hover:border-[#E27453]/60 transition-all duration-300 hover:shadow-lg flex flex-col md:flex-row gap-6 ${className}`}
        >
          <div className="w-full md:w-56 h-48 md:h-auto rounded-xl overflow-hidden shrink-0 relative bg-[#E8E2D5] dark:bg-[#1E1B18] min-h-[160px]">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-[#E8E2D5] dark:bg-[#1E1B18] animate-pulse" />
            )}
            <img
              src={imageSrc}
              alt={article.title}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={handleImageError}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <button
              onClick={handleBookmarkClick}
              aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark story'}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/65 backdrop-blur-md text-white hover:bg-black/85 transition-colors cursor-pointer z-10 shadow-xs"
            >
              <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-[#E27453] text-[#E27453]' : ''}`} />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2.5">
                <Link
                  to={`/category/${article.category}`}
                  className="px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E27453] hover:bg-[#C85A32]/20 transition-colors"
                >
                  {category?.name || article.category}
                </Link>
                <span className="text-xs text-[#78716C] dark:text-[#A39C90] font-medium flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {article.readingTime}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg md:text-xl text-[#1C1917] dark:text-[#F7F4EE] group-hover:text-[#C85A32] dark:group-hover:text-[#E27453] transition-colors leading-snug">
                <Link to={`/story/${article.slug}`}>{article.title}</Link>
              </h3>

              {showExcerpt && (
                <p className="text-sm text-[#44403C] dark:text-[#D7D1C6] line-clamp-2 mt-2 leading-relaxed font-normal">
                  {article.excerpt}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#E8E2D5] dark:border-[#3A342E]">
              {author && (
                <Link
                  to={`/author/${author.slug}`}
                  className="flex items-center space-x-2.5 hover:opacity-85 transition-opacity"
                >
                  <img
                    src={author.avatar || FALLBACK_AVATAR}
                    alt={author.name}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = FALLBACK_AVATAR;
                    }}
                    className="w-7 h-7 rounded-full object-cover border border-[#E8E2D5] dark:border-[#3A342E]"
                  />
                  <span className="text-xs font-semibold text-[#1C1917] dark:text-[#F7F4EE]">
                    {author.name}
                  </span>
                </Link>
              )}

              <div className="flex items-center space-x-3 text-xs text-[#78716C] dark:text-[#A39C90] font-medium">
                <span>{article.date}</span>
                <span className="flex items-center">
                  <Eye className="w-3.5 h-3.5 mr-1" />
                  {article.views.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </article>
      </Card3D>
    );
  }

  // Large featured asymmetric card
  if (variant === 'featured-large') {
    return (
      <Card3D disabled={!enable3DTilt} maxTilt={5} scale={1.01} glareEffect={true} className="h-full">
        <article
          className={`group relative bg-white dark:bg-[#1E1B18] rounded-3xl border border-[#E8E2D5] dark:border-[#3A342E] overflow-hidden hover:border-[#C85A32]/70 dark:hover:border-[#E27453]/60 transition-all duration-300 hover:shadow-xl flex flex-col h-full ${className}`}
        >
          <div className="relative aspect-16/10 md:aspect-16/9 w-full overflow-hidden bg-[#E8E2D5] dark:bg-[#1E1B18]">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-[#E8E2D5] dark:bg-[#1E1B18] animate-pulse" />
            )}
            <img
              src={imageSrc}
              alt={article.title}
              onLoad={() => setImageLoaded(true)}
              onError={handleImageError}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/90 via-[#1C1917]/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <Link
                to={`/category/${article.category}`}
                className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#1C1917]/80 backdrop-blur-md text-white border border-white/20 hover:bg-[#C85A32] transition-colors shadow-xs"
              >
                {category?.name || article.category}
              </Link>
              <button
                onClick={handleBookmarkClick}
                aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark story'}
                className="p-2 rounded-full bg-[#1C1917]/80 backdrop-blur-md text-white hover:bg-[#C85A32] transition-colors border border-white/20 cursor-pointer shadow-xs"
              >
                <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-white' : ''}`} />
              </button>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white z-10">
              <div className="flex items-center space-x-3 text-xs text-[#D7D1C6] mb-1 font-medium">
                <span>{article.date}</span>
                <span>•</span>
                <span className="flex items-center">
                  <Clock className="w-3 h-3 mr-1 text-[#E27453]" />
                  {article.readingTime}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl md:text-3xl text-white group-hover:text-neutral-100 transition-colors leading-tight">
                <Link to={`/story/${article.slug}`}>{article.title}</Link>
              </h3>
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col justify-between">
            <p className="text-sm md:text-base text-[#44403C] dark:text-[#D7D1C6] line-clamp-3 leading-relaxed font-normal">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#E8E2D5] dark:border-[#3A342E]">
              {author && (
                <Link
                  to={`/author/${author.slug}`}
                  className="flex items-center space-x-3 group/auth"
                >
                  <img
                    src={author.avatar || FALLBACK_AVATAR}
                    alt={author.name}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = FALLBACK_AVATAR;
                    }}
                    className="w-10 h-10 rounded-full object-cover border border-[#E8E2D5] dark:border-[#3A342E]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#1C1917] dark:text-[#F7F4EE] group-hover/auth:text-[#C85A32] transition-colors">
                      {author.name}
                    </h4>
                    <p className="text-xs text-[#78716C] dark:text-[#A39C90]">
                      {author.role}
                    </p>
                  </div>
                </Link>
              )}

              <Link
                to={`/story/${article.slug}`}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1C1917] dark:bg-[#C85A32] text-white group-hover:bg-[#C85A32] dark:group-hover:bg-white dark:group-hover:text-[#1C1917] transition-all transform group-hover:scale-105 cursor-pointer shadow-xs"
                aria-label={`Read ${article.title}`}
              >
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </article>
      </Card3D>
    );
  }

  // Default Grid & Featured card with 3D tilt & glare
  return (
    <Card3D disabled={!enable3DTilt} maxTilt={6} scale={1.02} glareEffect={true} className="h-full">
      <article
        className={`group bg-white dark:bg-[#1E1B18] rounded-2xl border border-[#E8E2D5] dark:border-[#3A342E] overflow-hidden hover:border-[#C85A32]/70 dark:hover:border-[#E27453]/60 transition-all duration-300 hover:shadow-lg flex flex-col h-full ${className}`}
      >
        <div className="relative aspect-16/10 w-full overflow-hidden bg-[#E8E2D5] dark:bg-[#1E1B18]">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-[#E8E2D5] dark:bg-[#1E1B18] animate-pulse" />
          )}
          <img
            src={imageSrc}
            alt={article.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={handleImageError}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            <Link
              to={`/category/${article.category}`}
              className="px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide bg-[#1C1917]/80 backdrop-blur-md text-white border border-white/10 hover:bg-[#C85A32] transition-colors shadow-xs"
            >
              {category?.name || article.category}
            </Link>
            <button
              onClick={handleBookmarkClick}
              aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark story'}
              className="p-1.5 rounded-full bg-[#1C1917]/80 backdrop-blur-md text-white hover:bg-[#C85A32] transition-colors cursor-pointer shadow-xs"
            >
              <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-white' : ''}`} />
            </button>
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-xs text-[#78716C] dark:text-[#A39C90] font-medium mb-2.5">
              <span>{article.date}</span>
              <span>•</span>
              <span className="flex items-center">
                <Clock className="w-3 h-3 mr-1 text-[#C85A32] dark:text-[#E27453]" />
                {article.readingTime}
              </span>
            </div>

            <h3 className="font-display font-bold text-lg text-[#1C1917] dark:text-[#F7F4EE] group-hover:text-[#C85A32] dark:group-hover:text-[#E27453] transition-colors line-clamp-2 leading-snug">
              <Link to={`/story/${article.slug}`}>{article.title}</Link>
            </h3>

            {showExcerpt && (
              <p className="text-sm text-[#44403C] dark:text-[#D7D1C6] line-clamp-2 mt-2 leading-relaxed font-normal">
                {article.excerpt}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#E8E2D5] dark:border-[#3A342E]">
            {author && (
              <Link
                to={`/author/${author.slug}`}
                className="flex items-center space-x-2.5 hover:opacity-85 transition-opacity"
              >
                <img
                  src={author.avatar || FALLBACK_AVATAR}
                  alt={author.name}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = FALLBACK_AVATAR;
                  }}
                  className="w-6 h-6 rounded-full object-cover border border-[#E8E2D5] dark:border-[#3A342E]"
                />
                <span className="text-xs font-semibold text-[#1C1917] dark:text-[#F7F4EE] truncate max-w-[140px]">
                  {author.name}
                </span>
              </Link>
            )}

            <div className="flex items-center text-xs text-[#78716C] dark:text-[#A39C90] font-medium">
              <Eye className="w-3.5 h-3.5 mr-1" />
              <span>{article.views.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </article>
    </Card3D>
  );
};
