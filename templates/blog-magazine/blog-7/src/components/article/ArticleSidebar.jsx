import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../../data/articles';
import { ListFilter, Flame, BookOpen } from 'lucide-react';

export function ArticleSidebar({ article }) {
  const [activeSectionId, setActiveSectionId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (!article?.sections) return;
      const scrollY = window.scrollY;

      for (const sec of article.sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop - 150;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSectionId(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  if (!article) return null;

  const trending = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="space-y-8 sticky top-24">
      {/* Table of Contents */}
      {article.sections && article.sections.length > 0 && (
        <div className="bg-white p-5 border border-[#E8E5DC] shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#E8E5DC]">
            <ListFilter className="w-4 h-4 text-[#D43825]" />
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#141413]">
              Contents Outline
            </h4>
          </div>
          <nav className="space-y-2">
            {article.sections.map((sec, idx) => {
              const isActive = activeSectionId === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className={`block text-xs leading-snug transition-colors py-1 pl-2 border-l-2 ${
                    isActive
                      ? 'border-[#D43825] text-[#D43825] font-bold'
                      : 'border-transparent text-[#6E6D66] hover:text-[#141413] hover:border-[#141413]'
                  }`}
                >
                  {sec.heading}
                </a>
              );
            })}
          </nav>
        </div>
      )}

      {/* Author Mini Card */}
      <div className="bg-[#FAF9F5] p-5 border border-[#E8E5DC]">
        <div className="text-[0.6875rem] uppercase tracking-wider font-bold text-[#73736C] mb-3">
          Written by
        </div>
        <div className="flex items-center gap-3 mb-3">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-12 h-12 rounded-full object-cover border border-[#D1CDC4]"
          />
          <div>
            <Link
              to={`/author/${article.author.id}`}
              className="font-serif-headline text-sm font-bold text-[#141413] hover:text-[#D43825] transition-colors"
            >
              {article.author.name}
            </Link>
            <span className="text-[0.6875rem] text-[#73736C] block">
              {article.author.role}
            </span>
          </div>
        </div>
        <Link
          to={`/author/${article.author.id}`}
          className="text-xs font-bold text-[#141413] hover:underline flex items-center gap-1"
        >
          View Author Bibliography &rarr;
        </Link>
      </div>

      {/* Recommended Reads */}
      <div className="bg-white p-5 border border-[#E8E5DC] shadow-xs">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b-2 border-[#141413]">
          <Flame className="w-3.5 h-3.5 text-[#D43825]" />
          <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#141413]">
            Editor's Recommendations
          </h4>
        </div>
        <div className="space-y-4">
          {trending.map((rec) => (
            <div key={rec.id} className="group">
              <span className="text-[0.65rem] font-bold text-[#D43825] uppercase tracking-wider">
                {rec.category}
              </span>
              <Link to={`/article/${rec.slug}`}>
                <h5 className="font-serif-headline text-xs font-bold text-[#141413] group-hover:text-[#D43825] transition-colors leading-snug line-clamp-2 mt-0.5">
                  {rec.title}
                </h5>
              </Link>
              <span className="text-[0.6875rem] text-[#73736C] font-mono mt-1 block">
                {rec.readTime}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
