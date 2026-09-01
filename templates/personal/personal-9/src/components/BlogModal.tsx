import React, { useState } from 'react';
import { X, Clock, Calendar, Bookmark, Share2, Check, ArrowLeft, ArrowRight, User, BookOpen } from 'lucide-react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/portfolioData';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  darkMode: boolean;
  onSelectPost?: (post: BlogPost) => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose, darkMode, onSelectPost }) => {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  if (!post) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentIndex = BLOG_POSTS.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  return (
    <div
      id="blog-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="blog-modal-content"
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col ${
          darkMode ? 'bg-[#111827] border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'
        }`}
      >
        {/* Header Navigation Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-xs">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50">
              {post.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Bookmark button */}
            <button
              onClick={() => setBookmarked(!bookmarked)}
              aria-label="Bookmark article"
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                bookmarked
                  ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border-indigo-200'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              aria-label="Share article"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>

            {/* Close button */}
            <button
              id="close-blog-modal-btn"
              onClick={onClose}
              aria-label="Close"
              className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body & Article Content */}
        <div className="p-6 sm:p-10 overflow-y-auto text-left space-y-6">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-indigo-500" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-500" />
              {post.readingTime}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-indigo-500" />
              {post.author || 'Arjun Mehta'}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            {post.title}
          </h1>

          {/* Banner Image */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-sm">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Summary Callout Box */}
          <div className="p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 text-sm sm:text-base leading-relaxed text-indigo-950 dark:text-indigo-200 font-medium">
            <p>{post.summary}</p>
          </div>

          {/* Detailed Content */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {post.content ? (
              post.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white pt-4 pb-1">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                } else if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                  const lines = paragraph.split('\n');
                  return (
                    <ul key={idx} className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      {lines.map((line, lIdx) => (
                        <li key={lIdx}>
                          {line.replace(/^(\d+\.|\-)\s+/, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={idx}>{paragraph}</p>;
              })
            ) : (
              <>
                <p>
                  When deploying artificial intelligence architectures into production environments, system predictability and low inference latency become the primary constraints.
                </p>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white pt-2">
                  Key Engineering Takeaways
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                  <li>Deterministic quantization reduces memory footprint and inference latency.</li>
                  <li>Semantic boundaries preserve textual context across tokenized vector representations.</li>
                  <li>Continuous telemetry feedback guarantees model alignment with production expectations.</li>
                </ul>
              </>
            )}
          </div>

          {/* Tags Section */}
          {post.tags && post.tags.length > 0 && (
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                Related Topics
              </h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Post Navigation Footer */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevPost && onSelectPost ? (
              <button
                onClick={() => onSelectPost(prevPost)}
                className="flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer text-left w-full sm:w-auto"
              >
                <ArrowLeft className="w-4 h-4 shrink-0" />
                <div className="truncate max-w-[200px]">
                  <span className="block text-[10px] text-gray-400">Previous Article</span>
                  <span className="truncate">{prevPost.title}</span>
                </div>
              </button>
            ) : <div />}

            {nextPost && onSelectPost ? (
              <button
                onClick={() => onSelectPost(nextPost)}
                className="flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer text-right w-full sm:w-auto justify-end"
              >
                <div className="truncate max-w-[200px]">
                  <span className="block text-[10px] text-gray-400">Next Article</span>
                  <span className="truncate">{nextPost.title}</span>
                </div>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            ) : <div />}
          </div>

        </div>
      </div>
    </div>
  );
};
