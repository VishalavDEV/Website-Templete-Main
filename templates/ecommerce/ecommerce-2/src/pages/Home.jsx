import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import FeaturedCollection from '../components/FeaturedCollection';
import NewArrivals from '../components/NewArrivals';
import EditorialBanner from '../components/EditorialBanner';
import EmeraldEditSection from '../components/EmeraldEditSection';
import PersonalisedSection from '../components/PersonalisedSection';
import Bestsellers from '../components/Bestsellers';
import BridalBanner from '../components/BridalBanner';
import BrandStorySection from '../components/BrandStorySection';
import ValueGuarantees from '../components/ValueGuarantees';
import InstagramGallery from '../components/InstagramGallery';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <main>
      <Hero />
      <CategorySection />
      <FeaturedCollection />
      <NewArrivals />
      <EditorialBanner />
      <EmeraldEditSection />
      <PersonalisedSection />
      <Bestsellers />
      <BridalBanner />
      <BrandStorySection />
      <ValueGuarantees />
      <InstagramGallery />
      <Newsletter />
    </main>
  );
}
