import { BlogPost } from '../types';
import { X, Calendar, Clock, Tag, Share2, BookOpen, Check } from 'lucide-react';
import { useState } from 'react';

interface BlogPostModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export default function BlogPostModal({ post, onClose }: BlogPostModalProps) {
  const [copied, setCopied] = useState(false);

  if (!post) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200 font-sans">
      
      <div className="relative w-full max-w-3xl my-8 rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-600 border border-blue-100 text-xs font-semibold">
              {post.category}
            </span>
            <span className="text-xs text-slate-500 font-medium">By Arjun Mehta</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors text-xs font-medium flex items-center gap-1.5 px-2.5 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-400 hover:text-slate-900 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700">
          
          {/* Article Header */}
          <div className="space-y-3 pb-4 border-b border-slate-100">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
              {post.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-indigo-600" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                Engineering Deep Dive
              </span>
            </div>
          </div>

          {/* Article Markdown / HTML Content */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 font-sans">
            {post.content ? (
              post.content.split('\n\n').map((para, i) => {
                if (para.startsWith('### ')) {
                  return (
                    <h3 key={i} className="font-heading font-bold text-lg text-slate-900 pt-3 pb-1">
                      {para.replace('### ', '')}
                    </h3>
                  );
                }
                if (para.startsWith('- ')) {
                  return (
                    <ul key={i} className="list-disc pl-5 space-y-1 text-slate-700 font-sans text-sm sm:text-base">
                      {para.split('\n').map((li, j) => (
                        <li key={j}>{li.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                if (para.startsWith('```')) {
                  const code = para.replace(/```[a-z]*\n?/g, '');
                  return (
                    <pre key={i} className="p-3.5 rounded-xl bg-slate-900 text-slate-100 text-xs font-mono overflow-x-auto shadow-inner">
                      <code>{code}</code>
                    </pre>
                  );
                }
                return <p key={i}>{para}</p>;
              })
            ) : (
              <p>{post.summary}</p>
            )}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 items-center">
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" /> Tags:
            </span>
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
