import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { CursorType } from '../types';
import {
  ARTICLES_DATA,
  INSIGHTS_CATEGORIES,
  InsightCategory,
} from '../data/insightsData';
import { InsightsHero } from '../components/insights/InsightsHero';
import { EditorialMarquee } from '../components/insights/EditorialMarquee';
import { FeaturedArticle } from '../components/insights/FeaturedArticle';
import { CategoryFilter } from '../components/insights/CategoryFilter';
import { ArticleArchive } from '../components/insights/ArticleArchive';
import { TopicsSection } from '../components/insights/TopicsSection';
import { NewsletterSection } from '../components/insights/NewsletterSection';
import { InsightsStats } from '../components/insights/InsightsStats';
import { ArchiveFeature } from '../components/insights/ArchiveFeature';
import { InsightsCTA } from '../components/insights/InsightsCTA';

interface InsightsPageProps {
  setCursorType: (type: CursorType, text?: string) => void;
  onNavigate: (path: string) => void;
  onOpenProjectModal: () => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({
  setCursorType,
  onNavigate,
}) => {
  const [activeCategory, setActiveCategory] = useState<InsightCategory>('ALL');

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<InsightCategory, number> = {
      ALL: ARTICLES_DATA.length,
      DESIGN: 0,
      STRATEGY: 0,
      TECHNOLOGY: 0,
      BRANDING: 0,
      CULTURE: 0,
    };

    ARTICLES_DATA.forEach((article) => {
      const cat = article.category.toUpperCase() as InsightCategory;
      if (counts[cat] !== undefined) {
        counts[cat] += 1;
      }
    });

    return counts;
  }, []);

  // Filtered articles list
  const filteredArticles = useMemo(() => {
    if (activeCategory === 'ALL') {
      return ARTICLES_DATA;
    }
    return ARTICLES_DATA.filter(
      (article) => article.category.toUpperCase() === activeCategory
    );
  }, [activeCategory]);

  const handleScrollToArchive = () => {
    const el = document.getElementById('article-archive');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#080808] text-[#FAF9F6] min-h-screen"
    >
      {/* 1. Dramatic Editorial Opening Hero */}
      <InsightsHero
        setCursorType={setCursorType}
        onExploreClick={handleScrollToArchive}
      />

      {/* 9. Editorial Continuous Marquee */}
      <EditorialMarquee />

      {/* 2. Dominant Featured Article (Magazine Cover Layout) */}
      <FeaturedArticle
        setCursorType={setCursorType}
        onNavigate={onNavigate}
      />

      {/* 3. Sticky Editorial Category Filter */}
      <CategoryFilter
        activeCategory={activeCategory}
        onSelectCategory={(category) => setActiveCategory(category)}
        counts={categoryCounts}
        setCursorType={setCursorType}
      />

      {/* 4 & 5 & 6 & 7. Large Editorial Article Archive with Hover Previews */}
      <ArticleArchive
        articles={filteredArticles}
        setCursorType={setCursorType}
        onNavigate={onNavigate}
      />

      {/* 8. Featured Intellectual Topics Section */}
      <TopicsSection
        setCursorType={setCursorType}
        onSelectCategory={(category) => setActiveCategory(category)}
      />

      {/* 10. Premium Editorial Newsletter Section */}
      <NewsletterSection setCursorType={setCursorType} />

      {/* 11. Subtle Article Statistics */}
      <InsightsStats />

      {/* 12. Retrospective / From The Archive Feature */}
      <ArchiveFeature
        setCursorType={setCursorType}
        onNavigate={onNavigate}
      />

      {/* 13. Final Action CTA */}
      <InsightsCTA
        setCursorType={setCursorType}
        onNavigate={onNavigate}
      />
    </motion.div>
  );
};
