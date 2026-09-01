import React, { useState, useEffect } from 'react';
import { observatoryService } from './services/observatoryService';
import { Story, TaskItem, PulseEvent, NotificationItem, HistoryItem, SavedView, CollectionItem, SettingsData } from './types';

import { CommandDeck } from './components/CommandDeck';
import { WorkspaceIndex } from './components/WorkspaceIndex';
import { SignalStrip } from './components/SignalStrip';
import { EditorialWeather } from './components/EditorialWeather';
import { StoryVelocity } from './components/StoryVelocity';
import { NewsroomPulse } from './components/NewsroomPulse';
import { AttentionRadar } from './components/AttentionRadar';
import { EditorialConstellation } from './components/EditorialConstellation';
import { FrontPageSignal } from './components/FrontPageSignal';
import { StoryExplorer } from './components/StoryExplorer';
import { StoryInspector } from './components/StoryInspector';
import { CreationDock } from './components/CreationDock';

import { SearchModal } from './components/Modals/SearchModal';
import { NotificationDrawer } from './components/Modals/NotificationDrawer';
import { HistoryDrawer } from './components/Modals/HistoryDrawer';
import { StoryModal } from './components/Modals/StoryModal';
import { CalendarView } from './components/CalendarView';
import { SettingsView } from './components/SettingsView';
import { ExportCenter } from './components/ExportCenter';
import { CollectionsView } from './components/CollectionsView';
import { ReadersView } from './components/ReadersView';

import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [stories, setStories] = useState<Story[]>([]);
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [pulseEvents, setPulseEvents] = useState<PulseEvent[]>([]);
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [savedViews, setSavedViews] = useState<SavedView[]>([]);
  const [collections, setCollections] = useState<CollectionItem[]>([]);
  const [settings, setSettings] = useState<SettingsData>(() => observatoryService.getState().settings);

  const [activeView, setActiveView] = useState<string>('today');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modals & Drawers
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [editingStory, setEditingStory] = useState<Story | null>(null);
  
  const [inspectorStory, setInspectorStory] = useState<Story | null>(null);
  const [previewStory, setPreviewStory] = useState<Story | null>(null);

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  useEffect(() => {
    const state = observatoryService.getState();
    setStories(state.stories);
    setTasks(state.tasks);
    setPulseEvents(state.pulseEvents);
    setNotifications(state.notifications);
    setHistory(state.history);
    setSavedViews(state.savedViews);
    setCollections(state.collections);
    setSettings(state.settings);
  }, []);

  const refreshState = () => {
    const state = observatoryService.getState();
    setStories([...state.stories]);
    setTasks([...state.tasks]);
    setPulseEvents([...state.pulseEvents]);
    setNotifications([...state.notifications]);
    setHistory([...state.history]);
    setSavedViews([...state.savedViews]);
    setCollections([...state.collections]);
    setSettings(state.settings);
  };

  // Handlers
  const handleSaveStory = async (storyData: Partial<Story>) => {
    await observatoryService.saveStory(storyData);
    refreshState();
    showToast(storyData.id ? 'Story updated successfully' : 'New story created');
  };

  const handleDeleteStory = async (id: string) => {
    await observatoryService.deleteStory(id);
    refreshState();
    if (inspectorStory?.id === id) setInspectorStory(null);
    showToast('Story archived / deleted');
  };

  const handlePublishStory = async (id: string) => {
    await observatoryService.publishStory(id);
    refreshState();
    showToast('Story published live to network');
  };

  const handleSetFeatured = async (id: string) => {
    await observatoryService.setFeaturedStory(id);
    refreshState();
    showToast('Front page signal updated');
  };

  const handleUpdateTask = async (taskId: string, status: 'pending' | 'snoozed' | 'completed') => {
    const updated = await observatoryService.updateTaskStatus(taskId, status);
    setTasks(updated);
    refreshState();
    showToast(`Task marked as ${status}`);
  };

  const handleMarkNotifRead = async (id: string) => {
    const updated = await observatoryService.markNotificationRead(id);
    setNotifications(updated);
  };

  const handleMarkAllNotifRead = async () => {
    const updated = await observatoryService.markAllNotificationsRead();
    setNotifications(updated);
    showToast('All notifications marked as read');
  };

  const handleSaveView = async (view: SavedView) => {
    const updated = await observatoryService.saveView(view);
    setSavedViews(updated);
    showToast(`Saved view "${view.name}" created`);
  };

  const handleDeleteSavedView = async (id: string) => {
    const updated = await observatoryService.deleteSavedView(id);
    setSavedViews(updated);
    showToast('Saved view removed');
  };

  const handleSaveSettings = async (newSettings: SettingsData) => {
    await observatoryService.updateSettings(newSettings);
    setSettings(newSettings);
    refreshState();
    showToast('Command settings saved successfully');
  };

  const handleAddCollection = async (col: Omit<CollectionItem, 'id'>) => {
    const updated = await observatoryService.addCollection(col);
    setCollections(updated);
    refreshState();
    showToast('Research collection created');
  };

  const handleClearHistory = async () => {
    await observatoryService.clearHistory();
    setHistory([]);
    showToast('Command history cleared');
  };

  const featuredStory = stories.find(s => s.isFeatured) || stories[0];
  const queueCount = stories.filter(s => s.status === 'Scheduled' || s.status === 'Review').length;
  const reviewCount = stories.filter(s => s.status === 'Review').length;
  const activeDesksCount = 7;
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-[#FAF8F2] text-[#203040] flex flex-col font-sans selection:bg-[#CDEFF4] selection:text-[#183B56]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#183B56] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-[#6FAFD4]/40 animate-slideUp">
          <CheckCircle2 size={18} className="text-[#5FAF8A]" />
          <span className="text-xs font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Preview Modal */}
      {previewStory && (
        <>
          <div className="fixed inset-0 bg-[#203040]/50 backdrop-blur-xs z-50" onClick={() => setPreviewStory(null)} />
          <div className="fixed inset-4 md:inset-12 z-50 bg-white border border-[#DCE7EC] rounded-3xl shadow-2xl overflow-y-auto p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#DCE7EC] mb-6">
              <span className="text-xs font-mono bg-[#CDEFF4] text-[#183B56] px-3 py-1 rounded-lg uppercase">
                {previewStory.category} • Frontend Story Preview
              </span>
              <button onClick={() => setPreviewStory(null)} className="p-2 hover:bg-[#F5F9FB] rounded-xl border border-[#DCE7EC]">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-6 max-w-2xl mx-auto">
              <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#183B56] leading-tight">{previewStory.title}</h1>
              <p className="text-sm text-[#718096]">By {previewStory.author} • Published {previewStory.publishedDate || 'Draft Preview'}</p>
              <img src={previewStory.thumbnail} alt="" className="w-full h-80 object-cover rounded-2xl border border-[#DCE7EC]" />
              <div className="prose text-sm text-[#203040] space-y-4 leading-relaxed">
                <p className="font-semibold text-base">{previewStory.excerpt}</p>
                <p>{previewStory.content}</p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Command Deck */}
      <CommandDeck
        onOpenSearch={() => setSearchOpen(true)}
        onOpenNotifications={() => setNotificationsOpen(true)}
        onOpenHistory={() => setHistoryOpen(true)}
        onOpenQuickCreate={(type) => {
          if (type === 'collection') {
            setActiveView('collections');
          } else {
            setEditingStory(null);
            setStoryModalOpen(true);
          }
        }}
        unreadCount={unreadCount}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* Main Layout Composition */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Workspace Index Sidebar */}
        <WorkspaceIndex
          activeView={activeView}
          setActiveView={setActiveView}
          mobileOpen={mobileMenuOpen}
          setMobileOpen={setMobileMenuOpen}
          storyCounts={{
            today: stories.length,
            content: stories.filter(s => s.status !== 'Archived').length,
            review: stories.filter(s => s.status === 'Review').length,
            audience: 42850,
            archive: collections.length
          }}
        />

        {/* Editorial Canvas */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-8">
          
          {activeView === 'today' && (
            <div className="space-y-8 max-w-7xl mx-auto">
              
              {/* Observatory Greeting */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#718096] uppercase tracking-wider">Editorial Observatory</span>
                <h1 className="font-serif font-bold text-2xl sm:text-3xl text-[#183B56]">Good morning, {settings.editorialLead}.</h1>
                <p className="text-xs sm:text-sm text-[#718096]">The Elemental newsroom is moving. Here is what deserves your attention first.</p>
              </div>

              {/* Signal Strip */}
              <SignalStrip
                queueCount={queueCount}
                reviewCount={reviewCount}
                activeDesksCount={activeDesksCount}
                momentumPercentage="+9.4%"
                onNavigate={(v) => setActiveView(v)}
              />

              {/* Editorial Weather */}
              <EditorialWeather onNavigate={(v) => setActiveView(v)} />

              {/* Front Page Signal */}
              <FrontPageSignal
                featuredStory={featuredStory}
                onChangeFeature={() => setActiveView('explorer')}
                onPreview={(s) => setPreviewStory(s)}
                onRemove={(id) => handleDeleteStory(id)}
                onSchedule={(s) => {
                  setEditingStory(s);
                  setStoryModalOpen(true);
                }}
              />

              {/* Grid: Attention Radar & Newsroom Pulse */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <AttentionRadar
                  tasks={tasks}
                  onUpdateTaskStatus={handleUpdateTask}
                  onOpenStory={(id) => {
                    const st = stories.find(s => s.id === id);
                    if (st) setInspectorStory(st);
                  }}
                  onAssignTask={(taskId) => showToast(`Assigned reviewer for task ${taskId}`)}
                />
                <NewsroomPulse
                  events={pulseEvents}
                  onSelectEvent={(targetId) => {
                    const st = stories.find(s => s.id === targetId);
                    if (st) setInspectorStory(st);
                  }}
                />
              </div>

              {/* Story Velocity */}
              <StoryVelocity />

              {/* Editorial Constellation */}
              <EditorialConstellation
                stories={stories}
                onFilterStatus={(st) => {
                  setActiveView('explorer');
                }}
              />

            </div>
          )}

          {activeView === 'explorer' && (
            <div className="max-w-7xl mx-auto">
              <StoryExplorer
                stories={stories}
                savedViews={savedViews}
                onSelectStory={(s) => setInspectorStory(s)}
                onEditStory={(s) => {
                  setEditingStory(s);
                  setStoryModalOpen(true);
                }}
                onPreviewStory={(s) => setPreviewStory(s)}
                onDuplicateStory={(s) => handleSaveStory({ ...s, id: undefined, title: `${s.title} (Copy)` })}
                onScheduleStory={(s) => {
                  setEditingStory(s);
                  setStoryModalOpen(true);
                }}
                onFeatureStory={(id) => handleSetFeatured(id)}
                onArchiveStory={(id) => handleDeleteStory(id)}
                onDeleteStory={(id) => handleDeleteStory(id)}
                onCreateNewStory={() => {
                  setEditingStory(null);
                  setStoryModalOpen(true);
                }}
                onSaveView={handleSaveView}
                onDeleteSavedView={handleDeleteSavedView}
              />
            </div>
          )}

          {activeView === 'constellation' && (
            <div className="max-w-7xl mx-auto space-y-6">
              <EditorialConstellation stories={stories} onFilterStatus={() => setActiveView('explorer')} />
              <AttentionRadar tasks={tasks} onUpdateTaskStatus={handleUpdateTask} />
            </div>
          )}

          {activeView === 'reviews' && (
            <div className="max-w-7xl mx-auto space-y-6">
              <div className="bg-white border border-[#DCE7EC] rounded-2xl p-6 shadow-2xs space-y-4">
                <h3 className="font-serif font-bold text-[#183B56] text-xl">Review Queue</h3>
                <p className="text-xs text-[#718096]">Stories awaiting peer review and editorial sign-off.</p>
                <StoryExplorer
                  stories={stories.filter(s => s.status === 'Review' || s.status === 'Draft')}
                  savedViews={savedViews}
                  onSelectStory={(s) => setInspectorStory(s)}
                  onEditStory={(s) => { setEditingStory(s); setStoryModalOpen(true); }}
                  onPreviewStory={(s) => setPreviewStory(s)}
                  onDuplicateStory={(s) => handleSaveStory({ ...s, id: undefined, title: `${s.title} (Copy)` })}
                  onScheduleStory={(s) => { setEditingStory(s); setStoryModalOpen(true); }}
                  onFeatureStory={(id) => handleSetFeatured(id)}
                  onArchiveStory={(id) => handleDeleteStory(id)}
                  onDeleteStory={(id) => handleDeleteStory(id)}
                  onCreateNewStory={() => { setEditingStory(null); setStoryModalOpen(true); }}
                  onSaveView={handleSaveView}
                  onDeleteSavedView={handleDeleteSavedView}
                />
              </div>
            </div>
          )}

          {activeView === 'readers' && (
            <div className="max-w-7xl mx-auto">
              <ReadersView />
            </div>
          )}

          {activeView === 'velocity' && (
            <div className="max-w-7xl mx-auto">
              <StoryVelocity />
            </div>
          )}

          {activeView === 'collections' && (
            <div className="max-w-7xl mx-auto">
              <CollectionsView collections={collections} onAddCollection={handleAddCollection} />
            </div>
          )}

          {activeView === 'calendar' && (
            <div className="max-w-7xl mx-auto">
              <CalendarView
                stories={stories}
                onSelectStory={(s) => setInspectorStory(s)}
                onPublish={(id) => handlePublishStory(id)}
              />
            </div>
          )}

          {activeView === 'export' && (
            <div className="max-w-7xl mx-auto">
              <ExportCenter stories={stories} history={history} />
            </div>
          )}

          {activeView === 'settings' && (
            <div className="max-w-7xl mx-auto">
              <SettingsView settings={settings} onSaveSettings={handleSaveSettings} />
            </div>
          )}

        </main>
      </div>

      {/* Floating Creation Dock */}
      <CreationDock
        onOpenCreate={(type) => {
          if (type === 'collection') {
            setActiveView('collections');
          } else {
            setEditingStory(null);
            setStoryModalOpen(true);
          }
        }}
      />

      {/* Modals & Drawers */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        stories={stories}
        onSelectStory={(s) => setInspectorStory(s)}
        onNavigate={(v) => setActiveView(v)}
      />

      <NotificationDrawer
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
        notifications={notifications}
        onMarkRead={handleMarkNotifRead}
        onMarkAllRead={handleMarkAllNotifRead}
        onSelectNotification={(linkId) => {
          const st = stories.find(s => s.id === linkId);
          if (st) setInspectorStory(st);
        }}
      />

      <HistoryDrawer
        isOpen={historyOpen}
        onClose={() => setHistoryOpen(false)}
        history={history}
        onClearHistory={handleClearHistory}
      />

      <StoryModal
        isOpen={storyModalOpen}
        onClose={() => {
          setStoryModalOpen(false);
          setEditingStory(null);
        }}
        story={editingStory}
        onSave={handleSaveStory}
      />

      <StoryInspector
        story={inspectorStory}
        onClose={() => setInspectorStory(null)}
        onEdit={(s) => {
          setInspectorStory(null);
          setEditingStory(s);
          setStoryModalOpen(true);
        }}
        onPreview={(s) => setPreviewStory(s)}
        onPublish={async (id) => {
          await handlePublishStory(id);
          setInspectorStory(null);
        }}
        onSchedule={(s) => {
          setInspectorStory(null);
          setEditingStory(s);
          setStoryModalOpen(true);
        }}
        onArchive={async (id) => {
          await handleDeleteStory(id);
          setInspectorStory(null);
        }}
      />

    </div>
  );
}
