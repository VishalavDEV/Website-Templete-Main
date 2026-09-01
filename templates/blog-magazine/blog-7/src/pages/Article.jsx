import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { articles } from '../data/articles';
import { Breadcrumbs } from '../components/utility/Breadcrumbs';
import { ArticleHeader } from '../components/article/ArticleHeader';
import { ReadingProgress } from '../components/article/ReadingProgress';
import { ArticleContent } from '../components/article/ArticleContent';
import { ShareBar } from '../components/article/ShareBar';
import { ArticleSidebar } from '../components/article/ArticleSidebar';
import { AuthorBio } from '../components/article/AuthorBio';
import { CommentsSection } from '../components/article/CommentsSection';
import { RelatedStories } from '../components/article/RelatedStories';
import { NewsletterCTA } from '../components/editorial/NewsletterCTA';

export function Article() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const article = articles.find((a) => a.slug === slug) || articles[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const scrollToComments = () => {
    const el = document.getElementById('comments-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const breadcrumbItems = [
    { label: article.category, path: `/category/${article.categorySlug}` },
    { label: article.title },
  ];

  return (
    <div className="article-page max-w-7xl mx-auto px-4 md:px-8">
      {/* 1. Reading Progress Bar */}
      <ReadingProgress />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* 2. Article Header */}
      <ArticleHeader article={article} />

      {/* Mobile Reading Toolbar (horizontal on <md) */}
      <div className="md:hidden flex items-center justify-center my-4 sticky top-16 z-30 bg-[#FAF9F5]/95 backdrop-blur-sm py-2 border-y border-[#E8E5DC]">
        <ShareBar article={article} onScrollToComments={scrollToComments} />
      </div>

      {/* 3. Main Editorial Reading Spread */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mt-6">
        {/* Left: ShareBar / Reading Tools (1 col on desktop) */}
        <div className="md:col-span-1 hidden md:block">
          <ShareBar
            article={article}
            onScrollToComments={scrollToComments}
          />
        </div>

        {/* Center: ArticleContent & Discussion (8 cols on desktop) */}
        <div className="md:col-span-11 lg:col-span-8 max-w-3xl">
          <ArticleContent article={article} />

          {/* Author Bio */}
          <AuthorBio author={article.author} />

          {/* Discussion & Letters */}
          <CommentsSection article={article} />
        </div>

        {/* Right: Dynamic TOC & Sidebar Recommendations (3 cols on desktop) */}
        <div className="hidden lg:block lg:col-span-3">
          <ArticleSidebar article={article} />
        </div>
      </div>

      {/* 4. Related Stories */}
      <RelatedStories currentArticle={article} />

      {/* 5. Newsletter CTA */}
      <NewsletterCTA />
    </div>
  );
}

// Export ArticlePage alias
export const ArticlePage = Article;
