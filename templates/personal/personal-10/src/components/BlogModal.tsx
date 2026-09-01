import React, { useState } from 'react';
import { X, Calendar, Clock, ArrowRight, Tag, BookOpen } from 'lucide-react';
import { blogPostsData } from '../data/portfolioData';
import { BlogPost } from '../types';

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ isOpen, onClose }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-gray-800 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => {
            if (selectedPost) {
              setSelectedPost(null);
            } else {
              onClose();
            }
          }}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-400 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {selectedPost ? (
          <div>
            <button
              onClick={() => setSelectedPost(null)}
              className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline mb-4 flex items-center gap-1 cursor-pointer"
            >
              ← Back to all articles
            </button>

            <div className="h-60 rounded-3xl overflow-hidden mb-6 border border-gray-100 dark:border-gray-800">
              <img src={selectedPost.coverImage} alt={selectedPost.title} className="w-full h-full object-cover" />
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
              <span className="bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {selectedPost.category}
              </span>
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              {selectedPost.title}
            </h3>

            <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <p>{selectedPost.content}</p>
              <p>
                In modern web architectures, performance and maintainability go hand in hand. Designing decoupled UI elements and ensuring predictable reactive state flow leads to robust, enterprise-grade user experiences.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800/80 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 font-mono text-xs text-gray-800 dark:text-gray-200">
                // Tip: Always prioritize optical hierarchy, semantic tags, and WCAG AA contrast.
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
              {selectedPost.tags.map(t => (
                <span key={t} className="text-xs bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400 border border-gray-200/60 dark:border-gray-700">
                  #{t}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-block py-0.5 px-2.5 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-100 dark:border-blue-900/40 mb-2">
                INSIGHTS & ARTICLES
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                Latest Publications
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPostsData.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col justify-between hover:shadow-md transition-all cursor-pointer group shadow-2xs"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-gray-400 mb-2">
                        <span className="font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{post.category}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h4 className="font-bold text-base text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 mt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
