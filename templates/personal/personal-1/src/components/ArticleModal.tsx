import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Calendar, Share2, Tag, BookOpen, User } from 'lucide-react';
import { BlogPost } from '../types';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-neutral-950/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl text-white p-6 sm:p-10 my-auto"
        >
          {/* Close Button */}
          <button
            type="button"
            id="article-modal-close-btn"
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-neutral-950/80 hover:bg-amber-400 hover:text-neutral-950 text-neutral-300 border border-neutral-800 transition-colors z-20 shadow-lg"
          >
            <X size={20} />
          </button>

          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-4 flex-wrap">
            <span className="text-amber-400 font-semibold px-2.5 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/20">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={13} />
              {post.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar size={13} />
              {post.publishedDate}
            </span>
          </div>

          <h1 className="font-display font-black text-2xl sm:text-4xl text-white mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Cover Image */}
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-8 border border-neutral-800 shadow-xl bg-neutral-950">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Author Card */}
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-950 border border-neutral-800 mb-8">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover border border-amber-400/40"
            />
            <div>
              <div className="font-display font-bold text-sm text-white">
                {post.author.name}
              </div>
              <div className="text-xs font-mono text-neutral-400">
                {post.author.role}
              </div>
            </div>
          </div>

          {/* Article Prose */}
          <div className="prose prose-invert max-w-none text-neutral-300 leading-relaxed font-sans text-sm sm:text-base space-y-6">
            <div className="p-4 rounded-xl bg-neutral-950/80 border-l-2 border-amber-400 text-neutral-200 font-medium italic">
              {post.excerpt}
            </div>

            <div className="whitespace-pre-line font-sans leading-relaxed">
              {post.content}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-8 mt-8 border-t border-neutral-800 flex items-center justify-between flex-wrap gap-4">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-neutral-950 text-neutral-300 border border-neutral-800"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-amber-400 text-neutral-950 font-bold text-xs"
            >
              Close Reader
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
