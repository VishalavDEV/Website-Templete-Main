import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Share2 } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { ARTICLES } from '../data/articles';

export const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen pt-40 pb-20 px-6 text-center space-y-6 max-w-2xl mx-auto">
        <SEO title="Article Not Found — OFFGRID®" />
        <span className="font-mono text-xs text-[#D65F3F] tracking-widest uppercase">
          // ERROR 404
        </span>
        <h1 className="font-display font-bold text-5xl uppercase">ARTICLE NOT FOUND</h1>
        <p className="text-sm text-[#77716D]">
          The journal essay you requested does not exist or has been archived.
        </p>
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 bg-[#2B2727] text-[#FAF7F1] px-6 py-3 font-display text-xs tracking-widest uppercase"
        >
          <ArrowLeft className="w-4 h-4" /> RETURN TO INSIGHTS
        </Link>
      </div>
    );
  }

  const relatedArticles = ARTICLES.filter((a) => article.relatedSlugs?.includes(a.slug));

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <>
      <SEO
        title={`${article.title} | OFFGRID® Journal`}
        description={article.excerpt}
      />
      <main className="pt-32 pb-32">
        {/* Back Link Header */}
        <div className="max-w-[1200px] mx-auto px-6 mb-8">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#77716D] hover:text-[#D65F3F] uppercase tracking-widest transition-colors"
            data-cursor="link"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO JOURNAL DIRECTORY
          </Link>
        </div>

        {/* Header Block */}
        <article className="max-w-[1200px] mx-auto px-6 mb-16 space-y-8">
          <div className="space-y-4 border-b border-[#CFC7BE] pb-8">
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#D65F3F]">
              <span className="bg-[#D65F3F] text-[#FAF7F1] px-3 py-1 uppercase font-bold">
                {article.category}
              </span>
              <div className="flex items-center gap-4 text-[#77716D]">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl tracking-tighter uppercase text-[#2B2727] leading-[0.95]">
              {article.title}
            </h1>

            <p className="font-serif-editorial italic text-2xl md:text-3xl text-[#332832] leading-snug">
              "{article.excerpt}"
            </p>
          </div>

          {/* Author info & Share button */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-4">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover border border-[#CFC7BE]"
              />
              <div>
                <h4 className="font-display font-bold text-sm uppercase text-[#2B2727]">
                  {article.author.name}
                </h4>
                <p className="font-mono text-xs text-[#77716D]">{article.author.role}</p>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 border border-[#CFC7BE] hover:border-[#D65F3F] px-4 py-2 font-mono text-xs uppercase transition-colors"
              data-cursor="link"
            >
              <Share2 className="w-3.5 h-3.5 text-[#D65F3F]" />
              <span>SHARE ARTICLE</span>
            </button>
          </div>
        </article>

        {/* Hero Image */}
        <div className="max-w-[1400px] mx-auto px-6 mb-20">
          <div className="aspect-[16/9] overflow-hidden border border-[#CFC7BE]">
            <img
              src={article.heroImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Body Content (Narrow readable column) */}
        <section className="max-w-[800px] mx-auto px-6 mb-24 space-y-8 font-sans text-lg md:text-xl text-[#2B2727] leading-relaxed">
          {article.content.map((paragraph, i) => (
            <p key={i} className={i === 0 ? 'first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-[#D65F3F]' : ''}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="max-w-[1400px] mx-auto px-6 pt-16 border-t border-[#CFC7BE]">
            <h3 className="font-mono text-xs text-[#D65F3F] uppercase tracking-widest mb-8">
              // RELATED EDITORIAL ESSAYS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/insights/${rel.slug}`}
                  className="group p-6 border border-[#CFC7BE] bg-[#FAF7F1] hover:border-[#D65F3F] transition-all space-y-3"
                  data-cursor="link"
                >
                  <span className="font-mono text-[10px] text-[#D65F3F] uppercase">{rel.category}</span>
                  <h4 className="font-display font-bold text-2xl uppercase group-hover:text-[#D65F3F] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#77716D] line-clamp-2">{rel.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
};
