import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Badge } from '../components/ui/Badge';
import { FinalCTA } from '../components/sections/FinalCTA';
import { ArrowLeft, ArrowRight, Share2, Check } from 'lucide-react';
import { useCustomCursor } from '../hooks/useCustomCursor';

export const BlogDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { setCursorHover, resetCursor } = useCustomCursor();
  const [copied, setCopied] = React.useState(false);

  const postIndex = blogPosts.findIndex(p => p.slug === slug);
  const post = blogPosts[postIndex];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const prevPost = blogPosts[postIndex === 0 ? blogPosts.length - 1 : postIndex - 1];
  const nextPost = blogPosts[postIndex === blogPosts.length - 1 ? 0 : postIndex + 1];
  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-24 py-12">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
        <Breadcrumb items={[{ label: 'Journal', href: '/blog' }, { label: post.title }]} />

        {/* Article Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Badge variant="accent">{post.category}</Badge>
            <span className="text-xs font-mono text-[var(--secondary-color)]">{post.readTime}</span>
            <span className="text-xs font-mono text-[var(--secondary-color)]">· {post.publishDate}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-[var(--text-color)] font-display leading-tight">
            {post.title}
          </h1>

          {/* Author Info Bar */}
          <div className="flex items-center justify-between py-4 border-y border-[var(--border-color)]">
            <div className="flex items-center gap-3">
              <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover border border-[var(--accent-color)]" />
              <div>
                <h4 className="text-sm font-bold uppercase text-[var(--text-color)] font-display">{post.author.name}</h4>
                <p className="text-xs text-[var(--secondary-color)] font-mono">{post.author.role}</p>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-xs font-mono uppercase text-[var(--text-color)] hover:border-[var(--accent-color)] cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[var(--accent-color)]" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied!' : 'Share Dispatch'}</span>
            </button>
          </div>

          {/* Featured Cover Image */}
          <div className="aspect-[16/10] rounded-3xl overflow-hidden border border-[var(--border-color)]">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Article Content Body */}
        <article className="space-y-8 text-base md:text-lg text-[var(--secondary-color)] leading-relaxed font-light">
          <p className="text-xl md:text-2xl text-[var(--text-color)] font-normal leading-relaxed italic border-l-2 border-[var(--accent-color)] pl-6 py-2">
            "{post.content.intro}"
          </p>

          {post.content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-4 pt-4">
              <h2 className="text-2xl font-bold uppercase text-[var(--text-color)] font-display">
                {sec.heading}
              </h2>
              <p className="leading-relaxed">{sec.body}</p>

              {sec.quote && (
                <blockquote className="my-6 p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] text-base font-bold uppercase text-[var(--text-color)] font-display">
                  "{sec.quote}"
                </blockquote>
              )}
            </div>
          ))}

          <div className="pt-6 border-t border-[var(--border-color)]">
            <h3 className="text-lg font-bold uppercase text-[var(--text-color)] font-display mb-2">CONCLUSION</h3>
            <p>{post.content.conclusion}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-6">
            {post.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-color)]">
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="space-y-6 pt-12 border-t border-[var(--border-color)]">
            <h3 className="text-xl font-bold uppercase text-[var(--text-color)] font-display">
              Related Studio Dispatches
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map(rel => (
                <Link
                  key={rel.slug}
                  to={`/blog/${rel.slug}`}
                  onMouseEnter={() => setCursorHover('READ ARTICLE', rel.coverImage)}
                  onMouseLeave={resetCursor}
                  className="group block p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-colors space-y-3"
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden">
                    <img src={rel.coverImage} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <Badge variant="accent">{rel.category}</Badge>
                  <h4 className="text-lg font-bold uppercase text-[var(--text-color)] group-hover:text-[var(--accent-color)] font-display line-clamp-2">{rel.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Prev / Next Article Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 border-t border-[var(--border-color)]">
          <Link
            to={`/blog/${prevPost.slug}`}
            onMouseEnter={() => setCursorHover('PREVIOUS POST', prevPost.coverImage)}
            onMouseLeave={resetCursor}
            className="flex items-center gap-4 group p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-colors w-full sm:w-auto"
          >
            <ArrowLeft className="w-5 h-5 text-[var(--accent-color)] group-hover:-translate-x-1 transition-transform" />
            <div>
              <span className="text-[10px] font-mono uppercase text-[var(--secondary-color)] block">Previous Article</span>
              <span className="text-sm font-bold uppercase text-[var(--text-color)] font-display">{prevPost.title}</span>
            </div>
          </Link>

          <Link
            to={`/blog/${nextPost.slug}`}
            onMouseEnter={() => setCursorHover('NEXT POST', nextPost.coverImage)}
            onMouseLeave={resetCursor}
            className="flex items-center gap-4 group p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-colors w-full sm:w-auto text-right"
          >
            <div>
              <span className="text-[10px] font-mono uppercase text-[var(--secondary-color)] block">Next Article</span>
              <span className="text-sm font-bold uppercase text-[var(--text-color)] font-display">{nextPost.title}</span>
            </div>
            <ArrowRight className="w-5 h-5 text-[var(--accent-color)] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <FinalCTA />
    </div>
  );
};
