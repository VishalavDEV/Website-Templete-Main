import React, { useState, useMemo } from 'react';
import { 
  initialHealthMetrics, 
  monthlyActivityData, 
  weeklyActivityData, 
  quarterlyActivityData, 
  weakestHealthTopics, 
  strongestHealthTopics, 
  clinicLeaderboard,
  allPatientsList,
  allConsultationsList
} from './data/mockData';
import { 
  TimeframeOption, 
  PeopleOption, 
  TopicOption, 
  ActivityResolution, 
  HealthTopicItem, 
  PatientRecord, 
  ClinicLeaderboardItem,
  ConsultationSession
} from './types';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { MetricsCards } from './components/MetricsCards';
import { ActivityChart } from './components/ActivityChart';
import { TopicsSection } from './components/TopicsSection';
import { LeaderboardsSection } from './components/LeaderboardsSection';
import { ExportModal } from './components/ExportModal';
import { DetailModal } from './components/DetailModal';
import { SettingsView } from './components/SettingsView';
import { PatientsView, CareTeamView, ConsultationsView, ProtocolsView } from './components/OtherViews';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<string>('reports');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Health Filter States
  const [timeframe, setTimeframe] = useState<TimeframeOption>('All-time');
  const [people, setPeople] = useState<PeopleOption>('All Patients');
  const [topic, setTopic] = useState<TopicOption>('All Health Domains');
  const [activityResolution, setActivityResolution] = useState<ActivityResolution>('Month');

  // Modal States
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<HealthTopicItem | PatientRecord | ClinicLeaderboardItem | null>(null);
  const [modalType, setModalType] = useState<'topic' | 'user' | 'group' | 'patient' | null>(null);

  // Dynamic Health Metrics based on selected filters
  const currentMetrics = useMemo(() => {
    if (timeframe === 'Last 7 days') {
      return [
        { ...initialHealthMetrics[0], value: '24', secondaryValue: '/80' },
        { ...initialHealthMetrics[1], value: '542' },
        { ...initialHealthMetrics[2], value: '2m 10s' },
        { ...initialHealthMetrics[3], value: '70%', sparklineData: [60, 62, 65, 67, 68, 69, 70] },
        { ...initialHealthMetrics[4], value: '88%', sparklineData: [70, 72, 76, 80, 83, 85, 88] },
        { ...initialHealthMetrics[5], value: '+18%', sparklineData: [0, 4, 7, 11, 14, 16, 18] },
      ];
    }
    if (timeframe === 'Last 30 days') {
      return [
        { ...initialHealthMetrics[0], value: '26', secondaryValue: '/80' },
        { ...initialHealthMetrics[1], value: '1,840' },
        { ...initialHealthMetrics[2], value: '2m 28s' },
        { ...initialHealthMetrics[3], value: '66%', sparklineData: [50, 54, 58, 60, 62, 64, 66] },
        { ...initialHealthMetrics[4], value: '87%', sparklineData: [66, 70, 74, 78, 82, 85, 87] },
        { ...initialHealthMetrics[5], value: '+21%', sparklineData: [0, 5, 9, 13, 16, 19, 21] },
      ];
    }
    return initialHealthMetrics;
  }, [timeframe, people, topic]);

  // Dynamic Activity Data
  const currentActivityData = useMemo(() => {
    switch (activityResolution) {
      case 'Week':
        return weeklyActivityData;
      case 'Quarter':
        return quarterlyActivityData;
      case 'Month':
      default:
        return monthlyActivityData;
    }
  }, [activityResolution]);

  const handleSelectTopic = (t: HealthTopicItem) => {
    setSelectedItem(t);
    setModalType('topic');
  };

  const handleSelectUser = (u: any) => {
    setSelectedItem(u);
    setModalType('user');
  };

  const handleSelectGroup = (g: ClinicLeaderboardItem) => {
    setSelectedItem(g);
    setModalType('group');
  };

  const handleOpenPatientDetail = (p: PatientRecord) => {
    setSelectedItem(p);
    setModalType('patient');
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setModalType(null);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#111827] flex font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        isOpenMobile={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          {activeTab === 'reports' ? (
            <div className="space-y-4">
              {/* Header */}
              <Header
                title="Reports"
                onOpenDownloadModal={() => setIsExportModalOpen(true)}
                onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
              />

              {/* Healthcare Filters Bar */}
              <FilterBar
                timeframe={timeframe}
                onChangeTimeframe={setTimeframe}
                people={people}
                onChangePeople={setPeople}
                topic={topic}
                onChangeTopic={setTopic}
              />

              {/* Health KPI Analytics & Activity Chart Section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Left side: 6 Metric Cards (2 rows x 3 columns) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <MetricsCards metrics={currentMetrics} />
                </div>

                {/* Right side: Activity Bar Chart */}
                <div className="lg:col-span-5">
                  <ActivityChart
                    data={currentActivityData}
                    resolution={activityResolution}
                    onChangeResolution={setActivityResolution}
                  />
                </div>
              </div>

              {/* Health Domains Performance Row (Attention Needed vs Optimal Domains) */}
              <TopicsSection
                weakestTopics={weakestHealthTopics}
                strongestTopics={strongestHealthTopics}
                onSelectTopic={handleSelectTopic}
              />

              {/* Leaderboards Row (Patient Adherence vs Clinical Facilities) */}
              <LeaderboardsSection
                userLeaderboard={allPatientsList}
                groupLeaderboard={clinicLeaderboard}
                onSelectUser={handleSelectUser}
                onSelectGroup={handleSelectGroup}
              />
            </div>
          ) : activeTab === 'patients' ? (
            <PatientsView 
              onBackToReports={() => setActiveTab('reports')} 
              onOpenPatientDetail={handleOpenPatientDetail}
            />
          ) : activeTab === 'care_team' ? (
            <CareTeamView onBackToReports={() => setActiveTab('reports')} />
          ) : activeTab === 'consultations' ? (
            <ConsultationsView onBackToReports={() => setActiveTab('reports')} />
          ) : activeTab === 'protocols' ? (
            <ProtocolsView onBackToReports={() => setActiveTab('reports')} />
          ) : activeTab === 'settings' ? (
            <SettingsView onBackToReports={() => setActiveTab('reports')} />
          ) : (
            <SettingsView onBackToReports={() => setActiveTab('reports')} />
          )}
        </main>
      </div>

      {/* Export / Download Health Report Modal */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        timeframe={timeframe}
      />

      {/* Item Drilldown Detail Modal */}
      <DetailModal
        item={selectedItem}
        type={modalType}
        onClose={handleCloseModal}
      />
    </div>
  );
}
