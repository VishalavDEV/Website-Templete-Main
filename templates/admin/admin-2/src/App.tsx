import React, { useState } from 'react';
import { EditorialProvider, useEditorial } from './services/editorialStore';
import { CommandBar } from './components/CommandBar';
import { WorkspaceNav } from './components/WorkspaceNav';
import { TodayHeroStrip } from './components/TodayHeroStrip';
import { EditorialMomentum } from './components/EditorialMomentum';
import { AttentionCenter } from './components/AttentionCenter';
import { EditorialTimeline } from './components/EditorialTimeline';
import { EditorialPipeline } from './components/EditorialPipeline';
import { FeaturedStoryControl } from './components/FeaturedStoryControl';
import { StoryTableView } from './components/StoryTableView';
import { ArchiveMediaView } from './components/ArchiveMediaView';
import { TeamAuthorsView } from './components/TeamAuthorsView';
import { EditorialReviewsView } from './components/EditorialReviewsView';
import { AnalyticsDeepDiveView } from './components/AnalyticsDeepDiveView';
import { SettingsView } from './components/SettingsView';
import { ToastContainer } from './components/ToastContainer';

// Modals
import { StoryReaderPreviewModal } from './components/StoryReaderPreviewModal';
import { StoryEditorModal } from './components/StoryEditorModal';
import { UploadMediaModal } from './components/UploadMediaModal';
import { AssignTaskModal } from './components/AssignTaskModal';
import { ScheduleStoryModal } from './components/ScheduleStoryModal';
import { ExportReportModal } from './components/ExportReportModal';
import { CommandPaletteModal } from './components/CommandPaletteModal';
import { ChangeFeaturedModal } from './components/ChangeFeaturedModal';

const DashboardContent: React.FC = () => {
  const { activeView } = useEditorial();
  const [isChangeFeatureModalOpen, setIsChangeFeatureModalOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div id="elemental-super-admin-root" className="min-h-screen bg-[#faf8f2] text-slate-900 flex flex-col font-sans selection:bg-sky-200 selection:text-sky-950">
      
      {/* Toast Notification Layer */}
      <ToastContainer />

      {/* Global Action Modals */}
      <StoryReaderPreviewModal />
      <StoryEditorModal />
      <UploadMediaModal />
      <AssignTaskModal />
      <ScheduleStoryModal />
      <ExportReportModal />
      <CommandPaletteModal />
      <ChangeFeaturedModal
        isOpen={isChangeFeatureModalOpen}
        onClose={() => setIsChangeFeatureModalOpen(false)}
      />

      {/* Top Universal Command Bar */}
      <CommandBar onToggleMobileNav={() => setIsMobileNavOpen((prev) => !prev)} />

      {/* Main Body with Sidebar + View Container */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Workspace Sidebar Nav */}
        <WorkspaceNav
          isMobileOpen={isMobileNavOpen}
          onCloseMobile={() => setIsMobileNavOpen(false)}
        />

        {/* Dynamic Main Workspace Container */}
        <main
          id="main-editorial-workspace"
          className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6"
        >
          {(activeView === 'today_overview' || (activeView as string) === 'overview') && (
            <div id="executive-summary-view" className="space-y-6 max-w-7xl mx-auto">
              
              {/* Today's Key Metrics Overview Strip */}
              <TodayHeroStrip />

              {/* Lead Front Page Masthead Control */}
              <FeaturedStoryControl
                onOpenChangeFeatureModal={() => setIsChangeFeatureModalOpen(true)}
              />

              {/* Visual Editorial Rail (Draft -> Review -> Approved -> Scheduled -> Published) */}
              <EditorialPipeline />

              {/* Primary 2-Column Editorial Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left Column (7 cols): Analytics Momentum + Full Story Table */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Interactive Momentum Chart */}
                  <EditorialMomentum />

                  {/* Story Catalog Table UX */}
                  <StoryTableView />
                </div>

                {/* Right Column (5 cols): Attention Center + Live Timeline */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Needs Attention Queue */}
                  <div className="min-h-[380px]">
                    <AttentionCenter />
                  </div>

                  {/* Live Editorial Activity Stream */}
                  <div className="min-h-[420px]">
                    <EditorialTimeline />
                  </div>
                </div>

              </div>

            </div>
          )}

          {activeView === 'content_pipeline' && (
            <div id="pipeline-focus-view" className="max-w-7xl mx-auto space-y-6">
              <EditorialPipeline />
              <StoryTableView />
            </div>
          )}

          {activeView === 'content_all' && (
            <div id="content-repository-view" className="max-w-7xl mx-auto space-y-6">
              <EditorialPipeline />
              <StoryTableView />
            </div>
          )}

          {activeView === 'archive_media' && (
            <div id="media-archive-container" className="max-w-7xl mx-auto">
              <ArchiveMediaView />
            </div>
          )}

          {activeView === 'archive_collections' && (
            <div id="collections-container" className="max-w-7xl mx-auto">
              <ArchiveMediaView />
            </div>
          )}

          {(activeView === 'editorial_reviews' || activeView === 'editorial_calendar' || activeView === 'editorial_assignments') && (
            <div id="editorial-reviews-container" className="max-w-7xl mx-auto">
              <EditorialReviewsView />
            </div>
          )}

          {(activeView === 'team_workload' || (activeView as string) === 'team_authors') && (
            <div id="team-authors-container" className="max-w-7xl mx-auto">
              <TeamAuthorsView />
            </div>
          )}

          {(activeView === 'audience_analytics' || (activeView as string) === 'analytics') && (
            <div id="analytics-deep-dive-container" className="max-w-7xl mx-auto">
              <AnalyticsDeepDiveView />
            </div>
          )}

          {(activeView === 'system_settings' || (activeView as string) === 'settings') && (
            <div id="settings-desk-container" className="max-w-7xl mx-auto">
              <SettingsView />
            </div>
          )}

        </main>
      </div>

    </div>
  );
};

export default function App() {
  return (
    <EditorialProvider>
      <DashboardContent />
    </EditorialProvider>
  );
}
