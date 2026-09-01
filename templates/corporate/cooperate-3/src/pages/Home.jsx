import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Purpose from '../components/Purpose';
import CapabilityList from '../components/CapabilityList';
import Metrics from '../components/Metrics';
import CaseStudyExplorer from '../components/CaseStudyExplorer';
import IndustryExplorer from '../components/IndustryExplorer';
import AISection from '../components/AISection';
import Process from '../components/Process';
import Insights from '../components/Insights';
import Team from '../components/Team';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Purpose />
      <CapabilityList />
      <Metrics />
      <CaseStudyExplorer />
      <IndustryExplorer />
      <AISection />
      <Process />
      <Insights />
      <Team limit={3} showHeader={true} />
      <CTA />
      <ContactForm />
    </main>
  );
}
