import React, { useState } from 'react';
import { ArrowRight, Copy, Check, MapPin, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { BlogPost } from '../types';
import { BLOG_POSTS, PERSONAL_INFO } from '../data/portfolioData';

interface BlogSectionProps {
  darkMode: boolean;
  onSelectBlog: (post: BlogPost) => void;
  onViewAllBlogs: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  darkMode,
  onSelectBlog,
  onViewAllBlogs,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="blog"
      className={`py-16 scroll-mt-24 transition-colors ${
        darkMode ? 'bg-[#0B0F17] text-white' : 'bg-[#FAFCFF] text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left 8-9 cols for Blogs, Right 3-4 cols for Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Latest from Blog (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex flex-col items-start">
                <span
                  id="blog-eyebrow-tag"
                  className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-1 bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/50"
                >
                  LATEST FROM BLOG
                </span>
              </div>

              <button
                onClick={onViewAllBlogs}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors cursor-pointer group"
              >
                <span>View All Blogs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 4 Blog Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 flex-1">
              {BLOG_POSTS.map((post) => (
                <div
                  key={post.id}
                  id={`blog-card-${post.id}`}
                  onClick={() => onSelectBlog(post)}
                  className={`rounded-2xl border flex flex-col overflow-hidden text-left transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:shadow-md ${
                    darkMode
                      ? 'bg-[#111827] border-gray-800 hover:border-gray-700'
                      : 'bg-white border-gray-100 shadow-xs hover:border-gray-200'
                  }`}
                >
                  {/* Thumbnail Image with Reading Time Pill */}
                  <div className="relative h-28 w-full overflow-hidden bg-gray-900">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/70 text-white backdrop-blur-xs">
                      {post.readingTime}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-3.5 flex flex-col justify-between flex-1">
                    <div>
                      <h4 className="font-bold text-xs leading-snug tracking-tight mb-2 text-gray-900 dark:text-white line-clamp-2">
                        {post.title}
                      </h4>
                    </div>

                    <div className="pt-2 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-[10px] text-gray-400 font-medium">
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Let's Connect Card (4 cols) */}
          <div
            id="contact"
            className={`lg:col-span-4 p-6 sm:p-7 rounded-2xl border flex flex-col justify-between text-left relative overflow-hidden shadow-xs transition-all ${
              darkMode
                ? 'bg-[#111827] border-gray-800 text-white'
                : 'bg-white border-gray-100 text-gray-900'
            }`}
          >
            {/* Top Right Decorative Plant Image */}
            <div className="absolute top-3 right-3 w-16 h-16 rounded-xl overflow-hidden opacity-90 pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=200&auto=format&fit=crop"
                alt="Plant"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <span
                className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4 bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/50"
              >
                LET'S CONNECT
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug mb-6 text-gray-900 dark:text-white max-w-[240px]">
                Let's build something intelligent together.
              </h3>

              {/* Email Address Pill with Copy Button */}
              <div className="flex items-center justify-between p-2.5 rounded-xl border mb-3 bg-gray-50 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-200 overflow-hidden">
                  <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-200 hover:text-indigo-600 transition-colors cursor-pointer shadow-2xs"
                  aria-label="Copy Email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-6">
                <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 transition-all shadow-xs"
              >
                <Github className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 transition-all shadow-xs"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 transition-all shadow-xs"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 transition-all shadow-xs"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
