import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowUpRight, Bookmark, BookmarkCheck } from 'lucide-react';
import articlesData from '../../data/articles.json';
import { Article } from '../../types';
import { useSavedArticles } from '../../hooks/useSavedArticles';
import { showToast } from '../common/Toast';
import { MagneticButton } from '../common/MagneticButton';

export const InsightsSection: React.FC = () => {
  const navigate = useNavigate();
  const articles = (articlesData as Article[]).slice(0, 3);
  const { isArticleSaved, toggleSave } = useSavedArticles();

  const handleToggleSave = (e: React.MouseEvent, article: Article) => {
    e.stopPropagation();
    const res = toggleSave(article.id);
    if (res.isSaved) {
      showToast('Article Saved', `Saved "${article.title}" to local archive`);
    } else {
      showToast('Article Removed', `Removed from saved articles`, 'info');
    }
  };

  return (
    <section className="relative z-10 py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 border-b border-ink-border gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>09 — EDITORIAL</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-ink-primary uppercase">
            INSIGHTS & <span className="text-stroke-strong">JOURNAL</span>
          </h2>
        </div>
        <p className="max-w-md text-sm text-ink-secondary leading-relaxed">
          Critical essays on brand architecture, cognitive ergonomics, variable typography, and the future of spatial computing.
        </p>
      </div>

      {/* Article Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
        {articles.map((article) => {
          const isSaved = isArticleSaved(article.id);

          return (
            <article
              key={article.id}
              onClick={() => navigate(`/insights/${article.id}`)}
              className="group glass-panel rounded-2xl p-5 border border-ink-border cursor-pointer hover:border-accent-coral/50 transition-all duration-300 flex flex-col justify-between"
              data-cursor="VIEW"
              data-cursor-text="READ"
            >
              <div className="space-y-4">
                <div className="overflow-hidden rounded-xl aspect-[16/10] bg-paper relative">
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button
                    onClick={(e) => handleToggleSave(e, article)}
                    className="absolute top-3 right-3 p-2 rounded-full glass-panel-strong hover:bg-warm-white text-ink-primary shadow-sm transition-colors"
                    aria-label={isSaved ? 'Remove from saved' : 'Save article'}
                    data-cursor="LINK"
                  >
                    {isSaved ? (
                      <BookmarkCheck className="w-4 h-4 text-accent-coral" />
                    ) : (
                      <Bookmark className="w-4 h-4 text-ink-muted group-hover:text-ink-primary" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span className="uppercase text-accent-coral font-semibold">{article.category}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl uppercase text-ink-primary group-hover:text-accent-coral transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink-secondary line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-ink-border/60 flex items-center justify-between text-xs font-mono text-ink-muted">
                <span>By {article.author}</span>
                <span className="flex items-center gap-1 text-accent-coral font-semibold group-hover:translate-x-1 transition-transform">
                  READ ESSAY <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <MagneticButton
          variant="outline"
          size="lg"
          onClick={() => navigate('/insights')}
        >
          VIEW ALL EDITORIAL ESSAYS ({articlesData.length})
          <ArrowUpRight className="w-4 h-4" />
        </MagneticButton>
      </div>
    </section>
  );
};
