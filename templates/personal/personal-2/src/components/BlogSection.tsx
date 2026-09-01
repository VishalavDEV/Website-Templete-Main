import { useState } from 'react';
import { BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types';
import BlogPostModal from './BlogPostModal';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');

  const categories = ['ALL', 'AI / LLMs', 'Computer Vision', 'Architecture', 'Backend'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (categoryFilter === 'ALL') return true;
    return post.category === categoryFilter;
  });

  return (
    <section id="blog" className="py-20 relative overflow-hidden bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 tracking-wider uppercase font-sans">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>KNOWLEDGE HUB</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            THOUGHTS &amp; INSIGHTS
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
            Engineering deep-dives into LLMs, production RAG systems, computer vision pipelines, and system architectures.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border cursor-pointer ${
                  categoryFilter === cat
                    ? 'bg-blue-50 text-blue-600 border-blue-300 shadow-2xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              id={`blog-card-${post.id}`}
              onClick={() => setSelectedPost(post)}
              className="group relative rounded-2xl bg-white border border-slate-200/80 hover:border-blue-200 p-6 flex flex-col justify-between space-y-5 transition-all duration-200 hover:-translate-y-0.5 shadow-2xs cursor-pointer"
            >
              
              <div className="space-y-3.5">
                {/* Meta Top */}
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-[11px]">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-slate-400 text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-3">
                  {post.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read More Button */}
              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Blog Article Reader Modal */}
      <BlogPostModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />

    </section>
  );
}
