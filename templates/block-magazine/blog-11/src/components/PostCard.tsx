import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { Clock, Bookmark, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PostCardProps {
  post: Post;
  layout?: 'vertical' | 'horizontal' | 'minimal';
  key?: React.Key;
}

export default function PostCard({ post, layout = 'vertical' }: PostCardProps) {
  const [bookmarked, setBookmarked] = useState(false);

  if (layout === 'horizontal') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="h-full">
          <article className="group flex flex-col md:flex-row gap-6 bg-white border border-neutral-200/80 hover:border-amber-700/40 rounded-2xl p-5 transition-shadow duration-300 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
            <div className="md:w-1/3 h-52 md:h-auto rounded-xl overflow-hidden relative flex-shrink-0 bg-neutral-100 shadow-inner">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <Link
                to={`/category/${post.category.slug}`}
                className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-neutral-900 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-colors shadow-sm"
              >
                {post.category.name}
              </Link>
            </div>
            <div className="flex flex-col flex-1 justify-between py-1">
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                  <span>{post.publishedDate}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <Link to={`/article/${post.slug}`}>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-neutral-900 group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug mb-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-neutral-600 text-sm line-clamp-2 mb-4 leading-relaxed font-sans">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                <Link to={`/author/${post.author.id}`} className="flex items-center space-x-2.5 group/author">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-7 h-7 rounded-full object-cover shadow-sm"
                  />
                  <span className="text-xs font-medium text-neutral-800 group-hover/author:text-amber-700 transition-colors">
                    {post.author.name}
                  </span>
                </Link>
                <motion.button
                  whileTap={{ scale: 0.9, y: 1 }}
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`p-1.5 rounded-full transition-colors ${bookmarked ? 'text-amber-700 bg-amber-50' : 'text-neutral-400 hover:text-neutral-700'}`}
                  title={bookmarked ? 'Remove bookmark' : 'Bookmark article'}
                >
                  <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
                </motion.button>
              </div>
            </div>
          </article>
        </div>
      </motion.div>
    );
  }

  if (layout === 'minimal') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.3 }}
        whileHover={{ x: 4 }}
      >
        <article className="group flex items-start space-x-4 py-4 border-b border-neutral-100 last:border-0">
          <span className="font-serif text-2xl font-bold text-neutral-300 group-hover:text-amber-700 transition-colors w-6 flex-shrink-0">
            {post.id.replace('post-', '')}
          </span>
          <div className="flex-1">
            <div className="flex items-center gap-2 text-xs text-neutral-500 mb-1">
              <span className="font-semibold text-neutral-800">{post.category.name}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <Link to={`/article/${post.slug}`}>
              <h4 className="font-serif text-base font-semibold text-neutral-900 group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug">
                {post.title}
              </h4>
            </Link>
          </div>
        </article>
      </motion.div>
    );
  }

  // Default vertical card layout with 3D tilt & soft 3D depth shadow
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <div className="h-full">
        <article className="group flex flex-col bg-white border border-neutral-200/80 hover:border-amber-700/40 rounded-2xl overflow-hidden transition-shadow duration-500 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.15)] h-full">
          <div className="w-full h-56 overflow-hidden relative bg-neutral-100 shadow-inner">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <Link
              to={`/category/${post.category.slug}`}
              className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-neutral-900 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-colors shadow-sm"
            >
              {post.category.name}
            </Link>
          </div>
          <div className="p-6 flex flex-col flex-1 justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-500 mb-2.5">
                <span>{post.publishedDate}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
              </div>
              <Link to={`/article/${post.slug}`}>
                <h3 className="font-serif text-xl font-bold text-neutral-900 group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug mb-2.5">
                  {post.title}
                </h3>
              </Link>
              <p className="text-neutral-600 text-sm line-clamp-3 mb-6 leading-relaxed font-sans">
                {post.excerpt}
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <Link to={`/author/${post.author.id}`} className="flex items-center space-x-2.5 group/author">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full object-cover shadow-sm"
                />
                <span className="text-xs font-medium text-neutral-800 group-hover/author:text-amber-700 transition-colors">
                  {post.author.name}
                </span>
              </Link>
              <div className="flex items-center space-x-1">
                <motion.button
                  whileTap={{ scale: 0.9, y: 1 }}
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`p-1.5 rounded-full transition-colors ${bookmarked ? 'text-amber-700 bg-amber-50' : 'text-neutral-400 hover:text-neutral-700'}`}
                  title={bookmarked ? 'Remove bookmark' : 'Bookmark article'}
                >
                  <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
                </motion.button>
                <Link
                  to={`/article/${post.slug}`}
                  className="p-1.5 rounded-full text-neutral-400 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                  title="Read article"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </motion.div>
  );
}

