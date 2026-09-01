import React from 'react';
import { HeroCollage } from '../components/home/HeroCollage';
import { QuickCategoryBar } from '../components/home/QuickCategoryBar';
import { ShopByWorld } from '../components/home/ShopByWorld';
import { FeaturedToday } from '../components/home/FeaturedToday';
import { ShoppingByIntent } from '../components/home/ShoppingByIntent';
import { DailyDropDeals } from '../components/home/DailyDropDeals';
import { GoodFindsUnder999 } from '../components/home/GoodFindsUnder999';
import { CategoryWorldSections } from '../components/home/CategoryWorldSections';
import { EditorsShelf } from '../components/home/EditorsShelf';
import { PersonalizedSection } from '../components/home/PersonalizedSection';

export const HomePage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem', paddingBottom: '4rem' }}>
      {/* 01: Hero Collage */}
      <div className="container">
        <HeroCollage />
      </div>

      {/* 02: Quick Horizontal Category Selector */}
      <QuickCategoryBar />

      {/* 03: Shop By World (6 Visual Worlds) */}
      <ShopByWorld />

      {/* 04: Featured Today (Magazine Layout) */}
      <FeaturedToday />

      {/* 05: Shopping By Intent ("Shop For What's Next") */}
      <ShoppingByIntent />

      {/* 06: The Daily Drop (Flash Deals & Countdown Timer) */}
      <DailyDropDeals />

      {/* 07: Good Finds Under ₹999 */}
      <GoodFindsUnder999 />

      {/* 08: Category World Specific Sections */}
      <CategoryWorldSections />

      {/* 09: The ORVANA Shelf (Curated Collections) */}
      <EditorsShelf />

      {/* 10: Personalized ("Keep Exploring" Recently Viewed) */}
      <PersonalizedSection />
    </div>
  );
};
