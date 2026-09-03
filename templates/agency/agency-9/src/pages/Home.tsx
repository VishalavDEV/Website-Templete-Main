import React from 'react';
import { SEO } from '../components/ui/SEO';
import { HomeHero } from '../components/home/HomeHero';
import { HomeSelectedWork } from '../components/home/HomeSelectedWork';
import { HomeManifesto } from '../components/home/HomeManifesto';
import { HomeCapabilities } from '../components/home/HomeCapabilities';
import { HomeClients } from '../components/home/HomeClients';
import { HomeStats } from '../components/home/HomeStats';
import { HomeInsightsPreview } from '../components/home/HomeInsightsPreview';

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="OFFGRID® — We Make Brands Impossible To Ignore"
        description="OFFGRID is an independent creative agency building brands, digital experiences, and ideas that move culture forward."
      />
      <main>
        <HomeHero />
        <HomeSelectedWork />
        <HomeManifesto />
        <HomeCapabilities />
        <HomeClients />
        <HomeStats />
        <HomeInsightsPreview />
      </main>
    </>
  );
};
