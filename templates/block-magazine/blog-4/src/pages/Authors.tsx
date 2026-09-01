import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, MapPin, ArrowRight } from 'lucide-react';
import { Author } from '../types';
import { articleService } from '../services/articleService';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const Authors: React.FC = () => {
  const [authors, setAuthors] = useState<(Author & { articleCount: number })[]>([]);
  const [, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const auths = await articleService.getAuthors();
      setAuthors(auths);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-200">
      <Breadcrumbs items={[{ label: 'Authors & Contributors' }]} />

      {/* Page Header */}
      <div className="py-6 sm:py-8 border-b border-[#E8E2D5] dark:border-[#3A342E]">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32] dark:text-[#E27453] mb-2 block">
          Editorial Staff
        </span>
        <h1 className="font-display font-black text-4xl sm:text-5xl text-[#1C1917] dark:text-[#F7F4EE] tracking-tight">
          Authors & Contributors
        </h1>
        <p className="text-base text-[#44403C] dark:text-[#D7D1C6] mt-2 max-w-2xl leading-relaxed font-normal">
          The researchers, engineers, economists, and critics behind NEXORA's global reporting and analysis.
        </p>
      </div>

      {/* Authors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {authors.map((author) => (
          <div
            key={author.id}
            className="group bg-white dark:bg-[#1E1B18] rounded-3xl border border-[#E8E2D5] dark:border-[#3A342E] p-6 hover:border-[#C85A32] dark:hover:border-[#E27453] transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <Link to={`/author/${author.slug}`}>
                  <img
                    src={author.avatar}
                    alt={author.name}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop';
                    }}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-[#E8E2D5] dark:border-[#3A342E] group-hover:scale-105 transition-transform shadow-xs"
                  />
                </Link>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#E8E2D5]/60 dark:bg-[#282420] text-[#1C1917] dark:text-[#F7F4EE]">
                  {author.articleCount} {author.articleCount === 1 ? 'article' : 'articles'}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-[#1C1917] dark:text-[#F7F4EE] group-hover:text-[#C85A32] dark:group-hover:text-[#E27453] transition-colors mb-1">
                <Link to={`/author/${author.slug}`}>{author.name}</Link>
              </h3>

              <p className="text-xs font-bold text-[#C85A32] dark:text-[#E27453] mb-3">
                {author.role}
              </p>

              <p className="text-xs text-[#44403C] dark:text-[#D7D1C6] leading-relaxed line-clamp-3 mb-4 font-normal">
                {author.bio}
              </p>

              <div className="flex items-center text-xs text-[#78716C] dark:text-[#A39C90] mb-4 font-medium">
                <MapPin className="w-3.5 h-3.5 mr-1 text-[#C85A32] dark:text-[#E27453]" />
                <span>{author.location}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#E8E2D5] dark:border-[#3A342E]">
              <div className="flex items-center space-x-2">
                {author.social.twitter && (
                  <a
                    href={author.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${author.name} on Twitter`}
                    className="p-1.5 rounded-lg text-[#78716C] dark:text-[#A39C90] hover:text-[#1C1917] dark:hover:text-white hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420] transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {author.social.linkedin && (
                  <a
                    href={author.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${author.name} on LinkedIn`}
                    className="p-1.5 rounded-lg text-[#78716C] dark:text-[#A39C90] hover:text-[#1C1917] dark:hover:text-white hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {author.social.github && (
                  <a
                    href={author.social.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${author.name} on GitHub`}
                    className="p-1.5 rounded-lg text-[#78716C] dark:text-[#A39C90] hover:text-[#1C1917] dark:hover:text-white hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>

              <Link
                to={`/author/${author.slug}`}
                className="inline-flex items-center text-xs font-bold text-[#1C1917] dark:text-[#A39C90] hover:text-[#C85A32] dark:hover:text-[#E27453] transition-colors"
              >
                <span>Read Articles</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
