import React from 'react';
import PageHeader from '../components/PageHeader';
import Team from '../components/Team';
import Stats from '../components/Stats';
import LogoCloud from '../components/LogoCloud';
import CTA from '../components/CTA';

export default function TeamPage() {
  return (
    <div className="team-page">
      {/* 1. Page Header */}
      <PageHeader
        tag="OUR LEADERSHIP & TALENT"
        title="Led by architects, researchers, and strategists."
        subtitle="Meet the principal minds behind NEXORA. We bring together decades of tier-1 engineering leadership, doctoral AI research, and management consulting expertise."
        breadcrumbs={[{ label: 'Team' }]}
      />

      {/* 2. Team Directory with full filters */}
      <Team
        showHeader={false}
        showFilters={true}
      />

      {/* 3. Stats */}
      <Stats />

      {/* 4. Logo Cloud */}
      <LogoCloud />

      {/* 5. CTA */}
      <CTA
        tag="CAREERS AT NEXORA"
        title="Want to build what comes next with us?"
        description="We're actively recruiting principal engineers, researchers, and enterprise strategists globally."
        primaryButtonText="View Open Roles"
        primaryButtonLink="/careers"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
