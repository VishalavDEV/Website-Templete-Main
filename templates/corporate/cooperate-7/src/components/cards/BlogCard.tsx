import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../data/blog';
import { fadeUp } from '../../utils/animations';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group flex flex-col bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 text-slate-900"
    >
      {/* Cover image */}
      <Link to={`/blog/${post.slug}`} className="relative h-48 w-full overflow-hidden bg-slate-100 block">
        <img
          src={post.coverImage}
          alt={post.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute top-3.5 left-3.5">
          <span className="px-2.5 py-1 text-xs font-semibold text-slate-900 bg-white/90 backdrop-blur-md rounded-lg border border-slate-200 shadow-2xs">
            {post.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" /> {post.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> {post.readTime}
            </span>
          </div>

          <Link to={`/blog/${post.slug}`}>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-zinc-700 transition-colors line-clamp-2 mb-2.5">
              {post.title}
            </h3>
          </Link>

          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-5 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Author + Link */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              referrerPolicy="no-referrer"
              className="w-7 h-7 rounded-full object-cover border border-slate-200"
            />
            <span className="text-xs text-slate-800 font-medium">
              {post.author.name}
            </span>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="text-xs font-semibold text-slate-900 hover:text-zinc-700 inline-flex items-center gap-1 group/link"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
