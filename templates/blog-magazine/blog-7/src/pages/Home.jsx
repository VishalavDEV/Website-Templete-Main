import React from 'react';
import { articles } from '../data/articles';
import { categories } from '../data/categories';
import { HeroStory } from '../components/editorial/HeroStory';
import { TrendingTicker } from '../components/editorial/TrendingTicker';
import { LatestStories } from '../components/editorial/LatestStories';
import { CategorySection } from '../components/editorial/CategorySection';
import { CinematicFeature } from '../components/editorial/CinematicFeature';
import { MostRead } from '../components/editorial/MostRead';
import { NewsletterCTA } from '../components/editorial/NewsletterCTA';

import { BentoCategorySpread } from '../components/editorial/BentoCategorySpread';
import { VelocityCarousel } from '../components/editorial/VelocityCarousel';
import { IssueShowcase } from '../components/editorial/IssueShowcase';

export function Home() {
  const leadArticle = articles.find((a) => a.isLeadHero) || articles[0];
  const remainingArticles = articles.filter((a) => a.id !== leadArticle.id);

  // Category subsets for the two CategorySection spreads
  const archCategory = categories.find((c) => c.slug === 'architecture-design') || categories[0];
  const archArticles = articles.filter((a) => a.categorySlug === 'architecture-design');

  const techCategory = categories.find((c) => c.slug === 'technology-future') || categories[1];
  const techArticles = articles.filter((a) => a.categorySlug === 'technology-future');

  return (
    <div className="editorial-landing-page relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        {/* 1. Hero Story */}
        <HeroStory
          image={leadArticle.coverImage}
          category={leadArticle.kicker || leadArticle.category}
          title={leadArticle.title}
          description={leadArticle.subtitle || leadArticle.excerpt}
          author={leadArticle.author}
          date={leadArticle.publishedAt}
          readingTime={leadArticle.readTime}
          slug={leadArticle.slug}
          article={leadArticle}
        />
      </div>

      {/* 2. Trending Ticker */}
      <TrendingTicker stories={articles} />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* 3. Latest Stories (Asymmetrical Spread) */}
        <LatestStories stories={remainingArticles} />

        {/* 4. Trendy Bento Box Category Spread with 3D Tilt & Audio Widget */}
        <BentoCategorySpread category={archCategory} articles={archArticles} />
      </div>

      {/* 5. Cinematic Visual Feature */}
      <CinematicFeature />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* 6. Velocity-Skewed Horizontal Dispatch Rail */}
        <VelocityCarousel essays={remainingArticles} />

        {/* 7. Category Section Spread 2 (Technology & Future) */}
        <CategorySection category={techCategory} articles={techArticles} />

        {/* 8. Biannual Print Issue Monograph Showcase */}
        <IssueShowcase />

        {/* 9. Most Read Ranked & Columnists */}
        <MostRead articles={articles} />

        {/* 9. Newsletter CTA */}
        <NewsletterCTA />
      </div>
    </div>
  );
}

// Export as HomePage alias as well
export const HomePage = Home;
