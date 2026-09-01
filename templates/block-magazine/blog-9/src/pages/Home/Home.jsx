import React from 'react';
import Hero from '../../components/Hero/Hero';
import CurrentIssue from '../../components/CurrentIssue/CurrentIssue';
import FeaturedStory from '../../components/FeaturedStory/FeaturedStory';
import ExploreSection from '../../components/ExploreSection/ExploreSection';
import InteractiveStories from '../../components/InteractiveStories/InteractiveStories';
import LatestStories from '../../components/LatestStories/LatestStories';
import PhotoEssays from '../../components/PhotoEssays/PhotoEssays';
import FieldNotes from '../../components/FieldNotes/FieldNotes';
import BeyondTheMap from '../../components/BeyondTheMap/BeyondTheMap';
import FieldPass from '../../components/FieldPass/FieldPass';
import MagazineArchiveHome from '../../components/MagazineArchiveHome/MagazineArchiveHome';
import Newsletter from '../../components/Newsletter/Newsletter';

export default function Home() {
  return (
    <div className="atlas-homepage">
      {/* 1. Fullscreen Hero */}
      <Hero />

      {/* 2. The Current Issue (DepthCarousel) */}
      <CurrentIssue />

      {/* 3. Featured Story (Large Editorial Feature) */}
      <FeaturedStory slug="beneath-a-world-of-ice" />

      {/* 4. Explore the World (AccordionGallery) */}
      <ExploreSection />

      {/* 5. Interactive Stories (Experience the Story) */}
      <InteractiveStories />

      {/* 6. Latest Editorial Dispatches */}
      <LatestStories />

      {/* 7. Photo Essays (DepthCarousel) */}
      <PhotoEssays />

      {/* 8. Field Notes (Quick Reads) */}
      <FieldNotes />

      {/* 9. Beyond the Map (Hyperspeed Immersive Section) */}
      <BeyondTheMap />

      {/* 10. Field Pass (Lanyard 3D Credential) */}
      <FieldPass />

      {/* 11. Magazine Archive Highlights */}
      <MagazineArchiveHome />

      {/* 12. Weekly Newsletter */}
      <Newsletter />
    </div>
  );
}
