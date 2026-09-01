import React from 'react';
import { Newspaper, Clock, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { NEWS_STORIES } from '../data/universityData';
import { NewsItem } from '../types';

interface NewsSectionProps {
  onReadArticle: (article: NewsItem) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onReadArticle }) => {
  return (
    <section id="news" className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#ffb606] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LATEST BLOG & NEWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#132238] tracking-tight leading-tight mb-4">
            Educational Insights & Research Stories
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Read inspiring publications, research breakthroughs, academic innovations, and campus life stories from our faculty and students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_STORIES.map((story) => (
            <article
              key={story.id}
              onClick={() => onReadArticle(story)}
              className="bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#132238]/90 text-white text-xs font-semibold">
                    {story.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span>{story.date}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#ffb606]" />
                        {story.readTime}
                      </span>
                      {story.commentsCount && (
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                          {story.commentsCount}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-base font-black text-[#132238] group-hover:text-[#ffb606] transition-colors leading-snug mb-3">
                    {story.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {story.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-[#ffb606] transition-colors">
                  <span>Read Full Publication</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
