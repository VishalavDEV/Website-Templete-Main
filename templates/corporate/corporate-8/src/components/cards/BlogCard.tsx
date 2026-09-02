import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, Tag } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all flex flex-col justify-between">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />

        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 shadow-md">
            {post.category}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 right-3 text-white text-xs flex items-center justify-between">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            {post.readTime}
          </span>
          <span>{post.publishedAt}</span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
            <Link to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-slate-600 text-sm mt-2.5 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-7 h-7 rounded-full object-cover border border-slate-200"
            />
            <span className="text-xs font-semibold text-slate-700">{post.author.name}</span>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
};
