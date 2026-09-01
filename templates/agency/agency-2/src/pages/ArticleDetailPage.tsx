import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Sparkles, Bookmark, BookmarkCheck, Share2, Printer, Check, Copy } from 'lucide-react';
import articlesData from '../data/articles.json';
import { Article } from '../types';
import { useSavedArticles } from '../hooks/useSavedArticles';
import { showToast } from '../components/common/Toast';
import { MagneticButton } from '../components/common/MagneticButton';

export const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copiedUrl, setCopiedUrl] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const articles = articlesData as Article[];
  const article = articles.find((a) => a.id === id);
  const { isArticleSaved, toggleSave } = useSavedArticles();

  if (!article) {
    return (
      <div className="relative z-10 min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32">
        <div className="glass-panel p-10 rounded-3xl border border-ink-border max-w-md space-y-4">
          <span className="text-xs font-mono uppercase text-accent-coral font-bold">404 ERROR</span>
          <h2 className="font-display text-3xl font-bold uppercase text-ink-primary">
            ARTICLE NOT FOUND
          </h2>
          <p className="text-xs text-ink-secondary">
            The editorial essay you were looking for could not be found.
          </p>
          <div className="pt-2">
            <MagneticButton variant="primary" size="sm" onClick={() => navigate('/insights')}>
              RETURN TO JOURNAL
            </MagneticButton>
          </div>
        </div>
      </div>
    );
  }

  const isSaved = isArticleSaved(article.id);
  const relatedArticles = articles.filter((a) => a.id !== article.id).slice(0, 2);

  const handleToggleSave = () => {
    const res = toggleSave(article.id);
    if (res.isSaved) {
      showToast('Article Saved', `Saved to your local reading list`);
    } else {
      showToast('Article Removed', `Removed from saved articles`, 'info');
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } catch {
        // Fallback to clipboard
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedUrl(true);
    showToast('Link Copied', 'Article URL copied to clipboard');
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <article className="relative z-10 pt-32 sm:pt-40 pb-24 px-6 sm:px-12 max-w-4xl mx-auto space-y-12">
      {/* Back Button */}
      <div className="no-print">
        <button
          onClick={() => navigate('/insights')}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase text-ink-secondary hover:text-accent-coral transition-colors"
          data-cursor="LINK"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO EDITORIAL JOURNAL</span>
        </button>
      </div>

      {/* Article Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-xs font-mono uppercase text-ink-muted">
          <span className="px-3 py-1 rounded-full bg-accent-coral/10 text-accent-coral font-bold">
            {article.category}
          </span>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-ink-primary leading-[1.02]">
          {article.title}
        </h1>

        {/* Author Details & Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-y border-ink-border py-4">
          <div className="flex items-center gap-3">
            <img
              src={article.authorImage}
              alt={article.author}
              className="w-10 h-10 rounded-full object-cover border border-accent-coral"
            />
            <div>
              <h4 className="font-display font-bold text-sm uppercase text-ink-primary">
                {article.author}
              </h4>
              <p className="text-xs font-mono text-ink-secondary">{article.authorRole}</p>
            </div>
          </div>

          {/* Action Buttons: SAVE, SHARE, PRINT */}
          <div className="flex items-center gap-2 no-print">
            <button
              onClick={handleToggleSave}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border transition-all ${
                isSaved
                  ? 'bg-accent-coral text-warm-white border-accent-coral font-bold'
                  : 'bg-warm-white border-ink-border text-ink-secondary hover:text-ink-primary'
              }`}
            >
              {isSaved ? <BookmarkCheck className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
              <span>{isSaved ? 'SAVED' : 'SAVE'}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-warm-white border border-ink-border text-ink-secondary hover:text-ink-primary transition-all"
            >
              {copiedUrl ? <Check className="w-3.5 h-3.5 text-accent-coral" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedUrl ? 'COPIED' : 'SHARE'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-warm-white border border-ink-border text-ink-secondary hover:text-ink-primary transition-all"
              aria-label="Print article"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="overflow-hidden rounded-3xl border border-ink-border aspect-[16/10] bg-paper shadow-glass-elevated">
        <img
          src={article.heroImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Body */}
      <div className="prose prose-lg max-w-none text-ink-primary space-y-6 pt-4 font-body leading-relaxed text-base sm:text-lg">
        {article.body.map((paragraph, idx) => (
          <p key={idx} className="leading-relaxed">
            {paragraph}
          </p>
        ))}

        <div className="glass-panel p-6 rounded-2xl border border-ink-border my-8 space-y-3 not-prose">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-coral font-bold block">
            KEY TAKEAWAY
          </span>
          <p className="font-display font-bold text-lg sm:text-xl uppercase text-ink-primary">
            &ldquo;Distinctive brands are engineered with philosophical conviction, not derivative trend-following.&rdquo;
          </p>
        </div>
      </div>

      {/* Article Tags */}
      <div className="flex flex-wrap gap-2 pt-6 border-t border-ink-border">
        {article.tags.map((t) => (
          <span
            key={t}
            className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-paper border border-ink-border text-ink-secondary"
          >
            #{t}
          </span>
        ))}
      </div>

      {/* Related Articles */}
      <div className="space-y-6 pt-12 border-t border-ink-border no-print">
        <h3 className="font-display text-2xl font-bold uppercase text-ink-primary">
          FURTHER READING
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedArticles.map((rel) => (
            <div
              key={rel.id}
              onClick={() => navigate(`/insights/${rel.id}`)}
              className="group glass-panel p-5 rounded-2xl border border-ink-border cursor-pointer hover:border-accent-coral/40 transition-all"
            >
              <span className="text-[10px] font-mono uppercase text-accent-coral font-bold">
                {rel.category}
              </span>
              <h4 className="font-display text-lg font-bold uppercase text-ink-primary group-hover:text-accent-coral transition-colors mt-1">
                {rel.title}
              </h4>
              <p className="text-xs text-ink-secondary line-clamp-2 mt-2">{rel.excerpt}</p>
              <div className="mt-4 pt-3 border-t border-ink-border/50 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                <span>{rel.readTime}</span>
                <span className="flex items-center gap-1 text-accent-coral font-semibold">
                  READ <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
