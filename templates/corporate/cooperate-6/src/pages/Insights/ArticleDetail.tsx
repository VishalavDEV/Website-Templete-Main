import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ArrowRight } from 'lucide-react';
import { articlesData } from '../../data/articles';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const related = articlesData.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="pt-24 pb-20 bg-[#FBF9F5]">
      {/* Hero Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F382E] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Intelligence Insights
        </Link>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F382E]/10 text-[#0F382E] text-xs font-bold uppercase tracking-wider">
            {article.category}
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#0E1412] leading-[1.15]">
            {article.title}
          </h1>

          {/* Author & Meta */}
          <div className="flex items-center justify-between py-6 border-y border-[#D8C3A8]/50">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover border border-[#D8C3A8]"
              />
              <div>
                <div className="font-semibold text-sm text-[#0E1412]">{article.author.name}</div>
                <div className="text-xs text-[#62756D]">{article.author.role}</div>
              </div>
            </div>

            <div className="text-xs text-[#8FA29A] text-right space-y-0.5">
              <div>{article.date}</div>
              <div className="font-semibold text-[#0F382E]">{article.readTime}</div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-lg aspect-[16/9] bg-[#0E1412] my-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body Content */}
          <div className="prose prose-lg max-w-none text-[#25332E] leading-relaxed space-y-6 pt-4">
            <p className="text-lg font-serif italic text-[#0F382E] border-l-2 border-[#C29B38] pl-4 py-1">
              "{article.summary}"
            </p>

            <div className="text-sm sm:text-base leading-relaxed text-[#3E5049] whitespace-pre-line space-y-4">
              {article.content}
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-[#D8C3A8]/60 space-y-6">
          <h3 className="font-serif text-2xl font-semibold text-[#0E1412]">Related Intelligence</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.id}
                to={`/insights/${rel.slug}`}
                className="p-6 rounded-2xl bg-white border border-[#D8C3A8]/60 hover:border-[#0F382E]/40 transition-all group"
              >
                <div className="text-xs font-semibold text-[#0F382E] uppercase">{rel.category}</div>
                <h4 className="font-serif text-lg font-semibold text-[#0E1412] group-hover:text-[#0F382E] mt-1 transition-colors">
                  {rel.title}
                </h4>
                <div className="text-xs text-[#8FA29A] mt-2">{rel.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
