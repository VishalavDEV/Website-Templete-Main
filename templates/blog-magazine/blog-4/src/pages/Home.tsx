import React, { useState, useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { TrendingRail } from '../components/home/TrendingRail';
import { FeaturedStories } from '../components/home/FeaturedStories';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { LatestStories } from '../components/home/LatestStories';
import { StoryCoverflowDeck } from '../components/stories/StoryCoverflowDeck';
import { NewsletterSection } from '../components/common/NewsletterSection';
import { HeroSkeleton, StoryDeckSkeleton, CardSkeleton } from '../components/common/Skeleton';
import { articleService } from '../services/articleService';
import { Article, Category } from '../types';

export const Home: React.FC = () => {
  const [heroArticle, setHeroArticle] = useState<Article | null>(null);
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);
  const [latestArticles, setLatestArticles] = useState<Article[]>([]);
  const [coverflowArticles, setCoverflowArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<(Category & { articleCount: number })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [hero, featured, latestRes, cats, trendingRes] = await Promise.all([
          articleService.getHeroArticle(),
          articleService.getFeaturedArticles(3),
          articleService.getArticles({ pageSize: 12 }),
          articleService.getCategories(),
          articleService.getTrendingArticles(8)
        ]);
        setHeroArticle(hero);
        setFeaturedArticles(featured);
        setLatestArticles(latestRes.data);
        setCoverflowArticles(trendingRes);
        setCategories(cats);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading || !heroArticle) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <HeroSkeleton />
        <StoryDeckSkeleton />
        <div className="space-y-6">
          <div className="w-48 h-6 bg-[#E8E2D5] dark:bg-[#282420] rounded-lg animate-pulse" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <CardSkeleton variant="featured-large" />
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6">
              <CardSkeleton variant="grid" />
              <CardSkeleton variant="grid" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-300">
      <Hero leadArticle={heroArticle} />
      <TrendingRail articles={coverflowArticles} />
      
      {/* Curated Perspectives Deck */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StoryCoverflowDeck
          articles={coverflowArticles.length > 0 ? coverflowArticles : latestArticles.slice(0, 8)}
          title="Curated Perspectives"
          subtitle="Essential investigative reporting and analysis from our editorial desks"
        />
      </div>

      <FeaturedStories articles={featuredArticles} />
      <CategoryGrid categories={categories} />
      <LatestStories articles={latestArticles} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterSection />
      </div>
    </div>
  );
};
