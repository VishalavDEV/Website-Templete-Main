import React, { memo } from 'react';
import { CinematicHero } from '../components/hero/CinematicHero';
import { BentoGrid } from '../components/bento/BentoGrid';
import { VelocityCarousel } from '../components/carousel/VelocityCarousel';
import { EditorialGridPreview } from '../components/hero/EditorialGridPreview';
import { Footer } from '../components/footer/Footer';
import { ArticleData, ARTICLES_DATA } from '../data/articles';

export interface HomeProps {
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
  onSelectArticle?: (article: ArticleData) => void;
  onOpenPrintModal?: () => void;
}

export const Home: React.FC<HomeProps> = memo(({
  activeCategory = 'All Dispatches',
  onSelectCategory,
  onSelectArticle,
  onOpenPrintModal,
}) => {
  const handleReadCoverFeature = () => {
    if (onSelectArticle) {
      onSelectArticle(ARTICLES_DATA['neural-renaissance']);
    }
  };

  return (
    <main className="relative flex flex-col min-h-screen pt-20 sm:pt-24">
      <CinematicHero
        onSelectCategory={onSelectCategory}
        onReadFeature={handleReadCoverFeature}
      />
      <BentoGrid
        activeCategory={activeCategory}
        onSelectCategory={onSelectCategory}
        onSelectArticle={onSelectArticle}
        onOpenPrintModal={onOpenPrintModal}
      />
      <VelocityCarousel onSelectArticle={onSelectArticle} />
      <EditorialGridPreview />
      <Footer />
    </main>
  );
});

Home.displayName = 'Home';
