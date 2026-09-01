import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ChevronRight, 
  Calendar, 
  Clock, 
  Share2, 
  Bookmark, 
  ArrowLeft,
  Linkedin,
  Twitter,
  Sparkles
} from 'lucide-react';
import { blogPostsData } from '../../data/blog';
import { NewsletterForm } from '../../components/forms/NewsletterForm';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPostsData.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2);

  return (
    <div className="pt-28 pb-16 bg-white text-slate-900">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
          <Link to="/" className="hover:text-slate-800">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/blog" className="hover:text-slate-800">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Post Header */}
        <div className="mb-10">
          <span className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-semibold rounded-full border border-slate-200 mb-4 inline-block">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* Author & Meta Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs text-slate-600">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover border border-slate-200"
              />
              <div>
                <div className="font-bold text-slate-900 text-sm">{post.author.name}</div>
                <div className="text-[11px] text-slate-500">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-600" /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-600" /> {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Banner */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 mb-12 shadow-lg">
          <img
            src={post.image}
            alt={post.title}
            referrerPolicy="no-referrer"
            className="w-full h-[360px] sm:h-[440px] object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="max-w-none text-slate-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <p className="text-xl font-medium text-slate-900 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="whitespace-pre-line text-slate-700 leading-relaxed">
            {post.content}
          </div>
        </div>

        {/* Tag pills */}
        <div className="pt-8 mt-12 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-500 font-semibold mr-2">Tags:</span>
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs border border-slate-200">
              #{tag}
            </span>
          ))}
        </div>

        {/* Newsletter Callout in Article */}
        <div className="mt-14 p-8 bg-slate-50 border border-slate-200 rounded-3xl">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Subscribe to Straventa Engineering Dispatch</h3>
          <p className="text-xs text-slate-600 mb-6">Receive our bi-weekly deep dives into production architecture and distributed systems.</p>
          <NewsletterForm variant="inline" />
        </div>

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-zinc-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>

      </article>
    </div>
  );
};
