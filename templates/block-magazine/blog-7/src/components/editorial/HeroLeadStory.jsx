import React from 'react';
import { Link } from 'react-router-dom';
import { useMagazine } from '../../context/MagazineContext';
import { Bookmark, Clock, Volume2, ArrowRight } from 'lucide-react';
import { Badge } from '../common/Badge';

export function HeroLeadStory({ article }) {
  const { isBookmarked, toggleBookmark, playAudio, isPlayingAudio, currentAudioArticle } = useMagazine();

  if (!article) return null;

  const isSaved = isBookmarked(article.id);
  const isThisAudioPlaying = isPlayingAudio && currentAudioArticle?.id === article.id;

  return (
    <article className="border-b-2 border-[#141413] pb-10 mb-10 bg-white p-6 sm:p-8 md:p-10 shadow-editorial">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Editorial Content (7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-5 order-2 lg:order-1">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="crimson">{article.kicker || article.category}</Badge>
              <span className="text-xs text-[#73736C] font-mono">{article.publishedAt}</span>
              <span className="text-[#D1CDC4]">&bull;</span>
              <div className="flex items-center gap-1 text-xs text-[#52524E]">
                <Clock className="w-3 h-3 text-[#73736C]" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <Link to={`/article/${article.slug}`} className="group block">
              <h2 className="font-serif-headline text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold text-[#141413] group-hover:text-[#D43825] transition-colors leading-[1.18] tracking-tight">
                {article.title}
              </h2>
            </Link>

            <p className="mt-4 text-[#4A4A45] font-serif-reading text-lg md:text-xl leading-relaxed italic border-l-2 border-[#D43825] pl-4">
              {article.subtitle}
            </p>

            <p className="mt-4 text-sm text-[#52524E] leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>
          </div>

          {/* Author Byline & Action Controls */}
          <div className="pt-5 border-t border-[#E8E5DC] flex flex-wrap items-center justify-between gap-4">
            <Link
              to={`/author/${article.author.id}`}
              className="flex items-center gap-3 group/author"
            >
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-11 h-11 rounded-full object-cover border border-[#D1CDC4]"
              />
              <div>
                <span className="block text-xs font-bold text-[#141413] group-hover/author:text-[#D43825] uppercase tracking-wider">
                  {article.author.name}
                </span>
                <span className="block text-[0.7rem] text-[#73736C]">
                  {article.author.role}
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={() => playAudio(article)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F4F1EA] hover:bg-[#EBE8DF] text-[#141413] text-xs font-semibold rounded-none transition-colors border border-[#E8E5DC]"
                title="Listen to narrated article"
              >
                <Volume2 className={`w-3.5 h-3.5 ${isThisAudioPlaying ? 'text-[#D43825] animate-spin' : 'text-[#73736C]'}`} />
                <span>{isThisAudioPlaying ? 'Playing Audio' : `Listen (${article.audioDuration})`}</span>
              </button>

              <button
                onClick={() => toggleBookmark(article.id)}
                className={`p-2 border transition-colors ${
                  isSaved
                    ? 'bg-[#141413] text-[#FAF9F5] border-[#141413]'
                    : 'bg-white text-[#73736C] hover:text-[#141413] border-[#E8E5DC] hover:border-[#141413]'
                }`}
                title={isSaved ? 'Saved to reading list' : 'Save for later'}
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current text-[#D43825]' : ''}`} />
              </button>

              <Link
                to={`/article/${article.slug}`}
                className="flex items-center gap-1 px-4 py-1.5 bg-[#141413] text-[#FAF9F5] text-xs font-bold uppercase tracking-wider hover:bg-[#D43825] transition-colors"
              >
                <span>Read Essay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right High-Impact Imagery (5 cols on desktop) */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <Link to={`/article/${article.slug}`} className="block group overflow-hidden relative">
            <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#EAE7DF] border border-[#E8E5DC]">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />
            </div>
            {article.coverCaption && (
              <p className="text-[0.6875rem] text-[#73736C] italic mt-2 text-right">
                {article.coverCaption}
              </p>
            )}
          </Link>
        </div>
      </div>
    </article>
  );
}
