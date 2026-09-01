import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { journalArticles } from '../data/journal';
import { ArrowLeft, Clock, Share2, Zap } from 'lucide-react';

export const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const article = journalArticles.find((a) => a.id === id) || journalArticles[0];

  return (
    <div className="mx-auto max-w-4xl px-6 md:px-12 py-12 md:py-20 space-y-12">
      {/* Back Button */}
      <button
        onClick={() => navigate('/journal')}
        className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Journal</span>
      </button>

      {/* Header */}
      <div className="space-y-4 border-b border-neutral-200 dark:border-neutral-800 pb-8">
        <div className="flex items-center space-x-3 font-mono text-xs">
          <span className="rounded-full bg-blue-600 text-white font-bold uppercase px-3 py-1 text-[10px]">
            {article.category}
          </span>
          <span className="text-neutral-500">{article.date}</span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-500 flex items-center space-x-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{article.readTime}</span>
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center space-x-3 pt-2">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="h-10 w-10 rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <div className="font-serif font-bold text-sm text-neutral-900 dark:text-neutral-100">
              {article.author.name}
            </div>
            <div className="font-mono text-xs text-neutral-500">{article.author.role}</div>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950 shadow-2xl">
        <img src={article.coverImage} alt={article.title} className="h-full w-full object-cover" />
      </div>

      {/* Article Content Render */}
      <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-neutral-800 dark:text-neutral-200 font-light leading-relaxed">
        {article.content.map((block, idx) => {
          if (block.type === 'paragraph') {
            return <p key={idx} className="text-base md:text-lg">{block.text}</p>;
          }
          if (block.type === 'heading') {
            return (
              <h2 key={idx} className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 pt-4">
                {block.text}
              </h2>
            );
          }
          if (block.type === 'quote') {
            return (
              <blockquote key={idx} className="font-serif italic text-xl border-l-4 border-blue-600 pl-6 py-2 my-6 text-blue-900 dark:text-blue-300 bg-blue-50/50 dark:bg-blue-950/30 rounded-r-xl">
                "{block.text}"
              </blockquote>
            );
          }
          return null;
        })}
      </div>

      {/* Footer Share & Next */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex items-center justify-between">
        <div className="flex items-center space-x-2 font-mono text-xs text-neutral-500">
          <Zap className="h-4 w-4 text-blue-600" />
          <span>FORM//SHIFT JOURNAL ESSAY</span>
        </div>

        <Link
          to="/journal"
          className="font-mono text-xs font-bold uppercase text-blue-600 dark:text-blue-400 hover:underline"
        >
          Read More Articles →
        </Link>
      </div>
    </div>
  );
};
