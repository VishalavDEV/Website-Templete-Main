import React, { useState } from 'react';
import { Calendar, CheckCircle, Plus } from 'lucide-react';
import {
  INITIAL_CHALLENGE,
  INITIAL_GOALS,
  INITIAL_METRICS,
  INITIAL_PLANS,
  INITIAL_USER,
  PERSONAL_INSIGHTS,
  RECOMMENDED_ITEMS,
} from './data/mockData';
import { DailyGoal, MetricData, NavItemKey, PlanItem, RecommendedItem } from './types';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { WellnessScoreCard } from './components/WellnessScoreCard';
import { MetricCardsGrid } from './components/MetricCardsGrid';
import { DailyGoalsCard } from './components/DailyGoalsCard';
import { TodaysPlanCard } from './components/TodaysPlanCard';
import { WeeklyProgressCard } from './components/WeeklyProgressCard';
import { ActiveChallengeCard } from './components/ActiveChallengeCard';
import { RecommendedSection } from './components/RecommendedSection';
import { PersonalInsightsCard } from './components/PersonalInsightsCard';
import {
  ActivityDetailModal,
  ChallengeModal,
  GoalEditModal,
  MetricAdjustModal,
  NotificationsPanel,
  ProfileModal,
  UpgradeModal,
} from './components/Modals';
import {
  ChallengesView,
  CommunityView,
  FitnessView,
  InsightsView,
  MindfulnessView,
  NutritionView,
  ResourcesView,
  SettingsView,
  SleepView,
  WellnessView,
} from './components/SubViews';

export default function App() {
  // Navigation
  const [currentTab, setCurrentTab] = useState<NavItemKey>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Core App State
  const [user, setUser] = useState(INITIAL_USER);
  const [metrics, setMetrics] = useState<Record<string, MetricData>>(INITIAL_METRICS);
  const [goals, setGoals] = useState<DailyGoal[]>(INITIAL_GOALS);
  const [plans, setPlans] = useState<PlanItem[]>(INITIAL_PLANS);
  const [challenge, setChallenge] = useState(INITIAL_CHALLENGE);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Thursday, May 22, 2025');

  // Modals & Panels
  const [activeMetricForAdjust, setActiveMetricForAdjust] = useState<MetricData | null>(null);
  const [isGoalEditOpen, setIsGoalEditOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<PlanItem | RecommendedItem | null>(null);
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Handlers for Daily Goals
  const handleToggleGoal = (goalId: string) => {
    setGoals((prev) => {
      const updated = prev.map((g) =>
        g.id === goalId ? { ...g, completed: !g.completed } : g
      );
      const completedCount = updated.filter((g) => g.completed).length;
      showToast(
        updated.find((g) => g.id === goalId)?.completed
          ? `Goal completed! (${completedCount}/${updated.length})`
          : 'Goal marked incomplete'
      );
      return updated;
    });
  };

  // Handlers for Today's Plan
  const handleTogglePlan = (planId: string) => {
    setPlans((prev) => {
      const updated = prev.map((p) =>
        p.id === planId ? { ...p, completed: !p.completed } : p
      );
      const item = updated.find((p) => p.id === planId);
      if (item?.completed) {
        showToast(`Completed: ${item.title}! +5 Wellness Points`);
        setUser((u) => ({
          ...u,
          wellnessScore: Math.min(100, u.wellnessScore + 1),
        }));
      }
      return updated;
    });
  };

  // Handlers for Metric Updates
  const handleSaveMetric = (updated: MetricData) => {
    setMetrics((prev) => ({
      ...prev,
      [updated.id]: updated,
    }));
    showToast(`Updated ${updated.name}: ${updated.displayValue}`);
  };

  // Challenge check-off
  const handleCompleteChallengeDay = () => {
    setChallenge((prev) => ({
      ...prev,
      currentDay: Math.min(prev.totalDays, prev.currentDay + 1),
      progressPercent: Math.min(
        100,
        Math.round(((prev.currentDay + 1) / prev.totalDays) * 100)
      ),
    }));
    showToast('Day 7 completed! You earned 15 streak points 🎉');
  };

  // Filtered lists if search query is active
  const filteredPlans = plans.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredRecommended = RECOMMENDED_ITEMS.filter((r) =>
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen flex ${
        isDarkMode ? 'bg-[#0F172A] text-[#F8FAFC]' : 'bg-[#F8FAF9] text-[#192A24]'
      }`}
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#111827] text-white px-4 py-3 rounded-2xl shadow-xl border border-gray-700 flex items-center gap-2.5 text-xs font-semibold animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle className="w-4 h-4 text-[#10B981]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Sidebar Navigation */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block z-30`}>
        <Sidebar
          currentTab={currentTab}
          onSelectTab={(tab) => {
            setCurrentTab(tab);
            setMobileMenuOpen(false);
          }}
          onUpgradeClick={() => setIsUpgradeOpen(true)}
          onProfileClick={() => setIsProfileOpen(true)}
          user={user}
        />
      </div>

      {/* Main App Canvas */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header Bar */}
        <Header
          user={user}
          unreadNotifications={unreadNotifications}
          onNotificationsClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
          onProfileClick={() => setIsProfileOpen(true)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        />

        {/* Notifications Panel Dropdown */}
        {isNotificationsOpen && (
          <NotificationsPanel
            onClose={() => setIsNotificationsOpen(false)}
            onClearAll={() => {
              setUnreadNotifications(0);
              showToast('All notifications cleared');
            }}
          />
        )}

        {/* Dynamic Body Content */}
        <main className="p-8 max-w-[1400px] w-full mx-auto space-y-6">
          {/* If another tab is selected in sidebar, render its sub-view */}
          {currentTab === 'wellness' && (
            <WellnessView onBackToHome={() => setCurrentTab('home')} />
          )}
          {currentTab === 'fitness' && (
            <FitnessView onBackToHome={() => setCurrentTab('home')} />
          )}
          {currentTab === 'nutrition' && (
            <NutritionView onBackToHome={() => setCurrentTab('home')} />
          )}
          {currentTab === 'sleep' && (
            <SleepView onBackToHome={() => setCurrentTab('home')} />
          )}
          {currentTab === 'mindfulness' && (
            <MindfulnessView onBackToHome={() => setCurrentTab('home')} />
          )}
          {currentTab === 'challenges' && (
            <ChallengesView onBackToHome={() => setCurrentTab('home')} />
          )}
          {currentTab === 'insights' && (
            <InsightsView onBackToHome={() => setCurrentTab('home')} />
          )}
          {currentTab === 'community' && (
            <CommunityView onBackToHome={() => setCurrentTab('home')} />
          )}
          {currentTab === 'resources' && (
            <ResourcesView onBackToHome={() => setCurrentTab('home')} />
          )}
          {currentTab === 'settings' && (
            <SettingsView onBackToHome={() => setCurrentTab('home')} />
          )}

          {/* HOME DASHBOARD (Exact 1:1 match to screenshot) */}
          {currentTab === 'home' && (
            <>
              {/* Dashboard Greeting & Date Bar */}
              <div
                id="dashboard-header"
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <h1 className="text-[26px] font-extrabold text-[#111827] tracking-tight">
                    {user.greeting}
                  </h1>
                  <p className="text-[13px] text-[#6B7280] font-medium mt-0.5">
                    Let's make today a healthier and happier day.
                  </p>
                </div>

                {/* Date Picker Pill */}
                <div
                  id="date-display-pill"
                  className="inline-flex items-center gap-2 bg-white border border-[#EAEFE9] px-3.5 py-1.5 rounded-xl shadow-2xs text-[12px] font-semibold text-[#4B5563]"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#9CA3AF]" />
                  <span>{selectedDate}</span>
                </div>
              </div>

              {/* ROW 1: Wellness Score | 6 Metrics Grid | Daily Goals */}
              <div
                id="dashboard-row-1"
                className="grid grid-cols-1 lg:grid-cols-[1.15fr_1.7fr_1.15fr] gap-5 items-stretch"
              >
                {/* 1. Wellness Score Card */}
                <div className="flex flex-col min-w-0">
                  <WellnessScoreCard
                    score={user.wellnessScore}
                    maxScore={100}
                    changeText="Great job! You're doing better than yesterday."
                    onInfoClick={() =>
                      showToast(
                        'Wellness Score is 82/100 (+4 from yesterday). Top drivers: 7h 30m sleep & 8.2k steps.'
                      )
                    }
                  />
                </div>

                {/* 2. Metrics Grid */}
                <div className="flex flex-col min-w-0">
                  <MetricCardsGrid
                    metrics={metrics}
                    onCardClick={(metricKey) => {
                      setActiveMetricForAdjust(metrics[metricKey]);
                    }}
                  />
                </div>

                {/* 3. Daily Goals Card */}
                <div className="flex flex-col min-w-0">
                  <DailyGoalsCard
                    goals={goals}
                    onToggleGoal={handleToggleGoal}
                    onEditGoals={() => setIsGoalEditOpen(true)}
                  />
                </div>
              </div>

              {/* ROW 2: Today's Plan | Weekly Progress | Active Challenge */}
              <div
                id="dashboard-row-2"
                className="grid grid-cols-1 lg:grid-cols-[1.15fr_1.7fr_1.15fr] gap-5 items-stretch"
              >
                {/* 1. Today's Plan */}
                <div className="flex flex-col min-w-0">
                  <TodaysPlanCard
                    plans={filteredPlans}
                    onTogglePlan={handleTogglePlan}
                    onSelectPlan={(plan) => setSelectedActivity(plan)}
                    onSeeAll={() => {
                      showToast('Showing all 4 scheduled activities for today.');
                    }}
                  />
                </div>

                {/* 2. Weekly Progress Multi-line Spline Chart */}
                <div className="flex flex-col min-w-0">
                  <WeeklyProgressCard initialRange="This Week" />
                </div>

                {/* 3. Active Challenge Card */}
                <div className="flex flex-col min-w-0">
                  <ActiveChallengeCard
                    challenge={challenge}
                    onSeeAll={() => setCurrentTab('challenges')}
                    onOpenChallenge={() => setIsChallengeModalOpen(true)}
                  />
                </div>
              </div>

              {/* ROW 3: Recommended For You (4 items) | Personal Insights (4 items) */}
              <div
                id="dashboard-row-3"
                className="grid grid-cols-1 lg:grid-cols-[1.15fr_1.7fr_1.15fr] gap-5 items-stretch"
              >
                {/* 1. Recommended For You (spans col 1 & 2) */}
                <div className="lg:col-span-2 flex flex-col min-w-0">
                  <RecommendedSection
                    items={filteredRecommended}
                    onSelectItem={(item) => setSelectedActivity(item)}
                    onSeeAll={() => setCurrentTab('resources')}
                  />
                </div>

                {/* 2. Personal Insights (col 3) */}
                <div className="lg:col-span-1 flex flex-col min-w-0">
                  <PersonalInsightsCard
                    insights={PERSONAL_INSIGHTS}
                    onSeeAll={() => setCurrentTab('insights')}
                  />
                </div>
              </div>
            </>
          )}
        </main>
      </div>

      {/* Modals & Dialogs */}
      {activeMetricForAdjust && (
        <MetricAdjustModal
          metric={activeMetricForAdjust}
          onClose={() => setActiveMetricForAdjust(null)}
          onSave={handleSaveMetric}
        />
      )}

      {isGoalEditOpen && (
        <GoalEditModal
          goals={goals}
          onClose={() => setIsGoalEditOpen(false)}
          onUpdateGoals={(newGoals) => {
            setGoals(newGoals);
            showToast('Daily goals updated successfully');
          }}
        />
      )}

      {selectedActivity && (
        <ActivityDetailModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
          onComplete={() => {
            if ('completed' in selectedActivity) {
              handleTogglePlan(selectedActivity.id);
            } else {
              showToast(`Activity "${selectedActivity.title}" completed!`);
              setUser((u) => ({
                ...u,
                wellnessScore: Math.min(100, u.wellnessScore + 2),
              }));
            }
          }}
        />
      )}

      {isChallengeModalOpen && (
        <ChallengeModal
          onClose={() => setIsChallengeModalOpen(false)}
          onCompleteDay={handleCompleteChallengeDay}
        />
      )}

      {isUpgradeOpen && (
        <UpgradeModal
          onClose={() => setIsUpgradeOpen(false)}
          onUpgradeSuccess={() => {
            showToast('Welcome to Wellify Premium! 14-day trial active.');
          }}
        />
      )}

      {isProfileOpen && (
        <ProfileModal user={user} onClose={() => setIsProfileOpen(false)} />
      )}
    </div>
  );
}
