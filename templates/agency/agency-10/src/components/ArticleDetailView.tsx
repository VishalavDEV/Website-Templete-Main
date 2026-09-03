import React from 'react';
import { BlogPost } from '../types';
import { BLOG_POSTS_DATA } from '../data/blog';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Tag, Bookmark } from 'lucide-react';

interface ArticleDetailViewProps {
  post: BlogPost;
  onBack: () => void;
  onViewArticle: (slug: string) => void;
  onOpenInquiry: () => void;
}

export const ArticleDetailView: React.FC<ArticleDetailViewProps> = ({
  post,
  onBack,
  onViewArticle,
  onOpenInquiry,
}) => {
  const relatedPosts = BLOG_POSTS_DATA.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div id={`article-detail-${post.slug}`} className="pt-24 pb-20 bg-white">
      {/* Article Header */}
      <div className="bg-slate-950 text-white pt-14 pb-16 relative border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Publications</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-4">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/30">
              {post.category}
            </span>
            <span>&bull;</span>
            <span className="text-slate-400">{post.publishedDate}</span>
            <span>&bull;</span>
            <span className="text-slate-400">{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white leading-tight">
            {post.title}
          </h1>

          <div className="mt-8 flex items-center justify-between pt-6 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <img
                src={post.authorAvatar}
                alt={post.author}
                className="w-10 h-10 rounded-full object-cover border border-slate-700"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-sm font-bold text-white">{post.author}</p>
                <p className="text-xs text-slate-400">{post.authorRole}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => navigator.clipboard?.writeText(window.location.href)}
                title="Copy Link"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Cover Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-video max-h-[420px]">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Article Content Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Executive Summary */}
        <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 text-slate-800 text-sm leading-relaxed mb-8">
          <p className="font-mono text-xs uppercase tracking-wider text-blue-700 font-bold mb-1">
            Executive Summary:
          </p>
          <p>{post.excerpt}</p>
        </div>

        {/* Content formatted with clean typography */}
        <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-700 space-y-6">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-xl font-bold text-slate-950 font-display mt-8 pt-4 border-t border-slate-150">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n');
              return (
                <ul key={idx} className="space-y-2 list-disc pl-5 text-sm">
                  {items.map((it, i) => (
                    <li key={i}>{it.replace('- ', '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={idx} className="text-slate-600 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400 mr-2">Topic Tags:</span>
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-mono text-slate-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <h3 className="text-lg font-bold text-slate-950 font-display mb-6">
            Recommended Engineering Reads
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((p) => (
              <div
                key={p.id}
                onClick={() => onViewArticle(p.slug)}
                className="group p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-md transition-all cursor-pointer"
              >
                <span className="text-[11px] font-mono text-blue-600 font-semibold">{p.category}</span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-1 line-clamp-2">
                  {p.title}
                </h4>
                <p className="mt-2 text-xs text-slate-500 line-clamp-2">{p.excerpt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-950 text-white text-center border border-slate-800">
          <h3 className="text-xl font-bold font-display text-white">Solve This Architecture in Your Organization</h3>
          <p className="text-xs text-slate-400 mt-2 max-w-md mx-auto">
            Our engineers can review your existing stack, identify bottlenecks, and present a custom proof-of-concept.
          </p>
          <button
            onClick={onOpenInquiry}
            className="mt-6 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-xs transition-all cursor-pointer"
          >
            Schedule Discovery Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
