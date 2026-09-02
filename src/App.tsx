import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  NavigationTab, 
  FamilyMember, 
  HealthMetrics, 
  Appointment, 
  HealthcareProfessional, 
  Medication, 
  PillReminder, 
  HealthReport, 
  MoodEntry, 
  NotificationItem, 
  NutritionPlan, 
  Recipe, 
  WellnessChallenge, 
  WorkoutRoutine, 
  HubArticle 
} from './types';
import { 
  initialFamilyMembers, 
  initialMetrics, 
  mockAppointments, 
  mockDoctors, 
  mockMedications, 
  mockPillReminders, 
  mockHealthReports, 
  mockMoodHistory, 
  mockNotifications, 
  mockNutritionPlans, 
  mockRecipes, 
  mockWellnessChallenges, 
  mockWorkoutRoutines, 
  mockArticles, 
  mockFAQs, 
  healthServicesCatalog 
} from './data/mockData';

// Layout Components
import { HealthPlusSidebar } from './components/layout/HealthPlusSidebar';
import { HealthPlusTopBar } from './components/layout/HealthPlusTopBar';
import { BottomNav } from './components/layout/BottomNav';
import { EmergencyModal } from './components/layout/EmergencyModal';
import { NotificationDrawer } from './components/layout/NotificationDrawer';

// Main Views
import { HomeHub } from './components/home/HomeHub';
import { MyHealthDashboard } from './components/dashboard/MyHealthDashboard';
import { ServicesView } from './components/services/ServicesView';
import { AppointmentsView } from './components/appointments/AppointmentsView';
import { HealthReportsView } from './components/reports/HealthReportsView';
import { PharmacyView } from './components/pharmacy/PharmacyView';
import { MentalWellnessView } from './components/wellness/MentalWellnessView';
import { NutritionWellnessView } from './components/wellness/NutritionWellnessView';
import { FitnessLifestyleView } from './components/wellness/FitnessLifestyleView';
import { AIAssistantView } from './components/ai/AIAssistantView';
import { FamilyHealthView } from './components/family/FamilyHealthView';
import { HealthHubContent } from './components/hub/HealthHubContent';

// Interaction Modals
import { BookAppointmentModal } from './components/modals/BookAppointmentModal';
import { VideoConsultationModal } from './components/modals/VideoConsultationModal';
import { LogVitalsModal } from './components/modals/LogVitalsModal';
import { UploadReportModal } from './components/modals/UploadReportModal';
import { LoginModal } from './components/modals/LoginModal';

// Loading Screens & Animations
import { AppLoadingScreen } from './components/common/AppLoadingScreen';
import { LoginLoadingScreen } from './components/common/LoginLoadingScreen';
import { AnimatePresence } from 'motion/react';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Application State
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>(initialFamilyMembers);
  const [selectedFamilyMemberId, setSelectedFamilyMemberId] = useState<string>(initialFamilyMembers[0].id);
  const [metrics, setMetrics] = useState<HealthMetrics>(initialMetrics);
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);
  const [doctors, setDoctors] = useState<HealthcareProfessional[]>(mockDoctors);
  const [medications, setMedications] = useState<Medication[]>(mockMedications);
  const [pillReminders, setPillReminders] = useState<PillReminder[]>(mockPillReminders);
  const [reports, setReports] = useState<HealthReport[]>(mockHealthReports);
  const [moodHistory, setMoodHistory] = useState<MoodEntry[]>(mockMoodHistory);
  const [notifications, setNotifications] = useState<NotificationItem[]>(mockNotifications);
  const [nutritionPlans, setNutritionPlans] = useState<NutritionPlan[]>(mockNutritionPlans);
  const [recipes, setRecipes] = useState<Recipe[]>(mockRecipes);
  const [challenges, setChallenges] = useState<WellnessChallenge[]>(mockWellnessChallenges);
  const [workoutRoutines, setWorkoutRoutines] = useState<WorkoutRoutine[]>(mockWorkoutRoutines);
  const [articles, setArticles] = useState<HubArticle[]>(mockArticles);
  const [selectedArticle, setSelectedArticle] = useState<HubArticle | null>(null);

  // Modals Visibility
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [bookingDoctor, setBookingDoctor] = useState<HealthcareProfessional | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeVideoAppointment, setActiveVideoAppointment] = useState<Appointment | null>(null);
  const [isLogVitalsModalOpen, setIsLogVitalsModalOpen] = useState(false);
  const [isUploadReportModalOpen, setIsUploadReportModalOpen] = useState(false);

  // Authentication & Loading Screens State
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [loggingInUser, setLoggingInUser] = useState<{
    name: string;
    avatar: string;
    email: string;
    relation: string;
    id?: string;
  } | null>(null);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleStartLogin = (userData: {
    name: string;
    avatar: string;
    email: string;
    relation: string;
    id?: string;
  }) => {
    setIsLoginModalOpen(false);
    setLoggingInUser(userData);
    setIsLoginLoading(true);
  };

  const handleCompleteLogin = () => {
    if (loggingInUser?.id) {
      setSelectedFamilyMemberId(loggingInUser.id);
    }
    setIsLoginLoading(false);
    setIsLoggedIn(true);
    showToast(`Welcome back, ${loggingInUser?.name || 'Member'}! Your encrypted health records are synchronized.`);
    confetti({
      particleCount: 65,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    showToast('You have safely signed out of HealthPlus.');
  };

  const handleReplayAppLoading = () => {
    setIsInitialLoading(true);
  };

  const currentMember = familyMembers.find(m => m.id === selectedFamilyMemberId) || familyMembers[0];

  // Actions Handlers
  const handleOpenBookModal = (doctor?: HealthcareProfessional) => {
    if (doctor) {
      setBookingDoctor(doctor);
    } else {
      setBookingDoctor(doctors[0]);
    }
    setIsBookModalOpen(true);
  };

  const handleConfirmBooking = (appointmentData: {
    doctor: HealthcareProfessional;
    date: string;
    time: string;
    type: 'video' | 'in-person' | 'home-visit';
    patientName: string;
    notes?: string;
  }) => {
    const newApt: Appointment = {
      id: `apt-${Date.now()}`,
      doctor: appointmentData.doctor,
      date: appointmentData.date,
      time: appointmentData.time,
      type: appointmentData.type,
      status: 'confirmed',
      patientName: appointmentData.patientName,
      meetingLink: appointmentData.type === 'video' ? 'https://meet.healthplus.live/room-live' : undefined,
      location: appointmentData.type === 'in-person' ? 'HealthPlus Clinic, Suite 302' : appointmentData.type === 'home-visit' ? 'Patient Residence' : undefined,
      notes: appointmentData.notes,
    };

    setAppointments(prev => [newApt, ...prev]);
    showToast(`Appointment confirmed with ${appointmentData.doctor.name} for ${appointmentData.date}!`);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleCancelAppointment = (aptId: string) => {
    setAppointments(prev => prev.map(a => a.id === aptId ? { ...a, status: 'cancelled' } : a));
    showToast('Appointment was cancelled.');
  };

  const handleStartVideoConsult = (appointment: Appointment) => {
    setActiveVideoAppointment(appointment);
    setIsVideoModalOpen(true);
  };

  const handleSaveVitals = (vitals: {
    heartRate?: number;
    bloodPressureSys?: number;
    bloodPressureDia?: number;
    bloodGlucose?: number;
    weight?: number;
    spo2?: number;
  }) => {
    setMetrics(prev => ({
      ...prev,
      heartRate: vitals.heartRate || prev.heartRate,
      bloodPressureSys: vitals.bloodPressureSys || prev.bloodPressureSys,
      bloodPressureDia: vitals.bloodPressureDia || prev.bloodPressureDia,
      bloodGlucose: vitals.bloodGlucose || prev.bloodGlucose,
      weight: vitals.weight || prev.weight,
      spo2: vitals.spo2 || prev.spo2,
    }));
    showToast('Biometric vitals successfully recorded to your health record.');
  };

  const handleAddReport = (report: HealthReport) => {
    setReports(prev => [report, ...prev]);
    showToast(`Lab report '${report.testName}' digitized and analyzed!`);
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.5 }
    });
  };

  const handleToggleReminder = (reminderId: string) => {
    setPillReminders(prev => prev.map(r => {
      if (r.id === reminderId) {
        const nextState = !r.taken;
        if (nextState) {
          showToast(`Marked ${r.medicationName} as taken! Great adherence.`);
        }
        return { ...r, taken: nextState };
      }
      return r;
    }));
  };

  const handleLogMood = (entry: MoodEntry) => {
    setMoodHistory(prev => [entry, ...prev]);
    showToast('Daily mood and reflection recorded in your mental sanctuary.');
  };

  const handleJoinChallenge = (challengeId: string) => {
    setChallenges(prev => prev.map(c => {
      if (c.id === challengeId) {
        const next = !c.joined;
        showToast(next ? `Joined '${c.title}'! Let's reach your health goal.` : `Left challenge.`);
        return {
          ...c,
          joined: next,
          daysCompleted: next ? 1 : 0,
          participantsCount: next ? c.participantsCount + 1 : c.participantsCount - 1,
        };
      }
      return c;
    }));
  };

  const handleAddFamilyMember = (newMem: FamilyMember) => {
    setFamilyMembers(prev => [...prev, newMem]);
    setSelectedFamilyMemberId(newMem.id);
    showToast(`Added ${newMem.name} (${newMem.relation}) to family health circle!`);
  };

  const handleMarkAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const handleDismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* 1. Left Sidebar Navigation */}
      <HealthPlusSidebar
        activeTab={activeTab}
        onNavigate={setActiveTab}
        onOpenEmergency={() => setIsEmergencyModalOpen(true)}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* 2. Main Content & Top Header Column */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Search & Profile Bar */}
        <HealthPlusTopBar
          currentMember={currentMember}
          familyMembers={familyMembers}
          selectedFamilyId={selectedFamilyMemberId}
          onSelectFamilyMember={setSelectedFamilyMemberId}
          onOpenNotifications={() => setIsNotificationDrawerOpen(true)}
          onOpenEmergency={() => setIsEmergencyModalOpen(true)}
          onOpenMobileMenu={() => setIsMobileSidebarOpen(true)}
          onGlobalSearch={(term) => {
            showToast(`Searching across health services for "${term}"`);
            setActiveTab('services');
          }}
          isLoggedIn={isLoggedIn}
          onOpenLogin={() => setIsLoginModalOpen(true)}
          onLogout={handleLogout}
          onReplayAppLoading={handleReplayAppLoading}
        />

        {/* Guest Mode Notification Banner */}
        {!isLoggedIn && (
          <div className="bg-amber-50 border-b border-amber-200/80 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 text-xs text-amber-900 animate-in fade-in duration-200">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping shrink-0" />
              <span>
                <strong>Guest Mode:</strong> You are browsing public clinic services. Log in to synchronize your electronic health records, active prescriptions, and family profiles.
              </span>
            </div>
            <button
              id="guest-banner-login-btn"
              onClick={() => setIsLoginModalOpen(true)}
              className="bg-[#00A884] hover:bg-[#009272] text-white px-3.5 py-1.5 rounded-xl font-bold text-xs shadow-xs cursor-pointer flex-shrink-0 transition-all active:scale-95"
            >
              Log In to Site
            </button>
          </div>
        )}

        {/* Main Routed Content Area */}
        <main className="flex-1 pb-24 lg:pb-8">
          {activeTab === 'home' && (
            <HomeHub
              currentMember={currentMember}
              metrics={metrics}
              onUpdateMetrics={setMetrics}
              upcomingAppointments={appointments}
              doctors={doctors}
              articles={articles}
              onNavigate={setActiveTab}
              onOpenLogVitals={() => setIsLogVitalsModalOpen(true)}
              onJoinAppointment={handleStartVideoConsult}
              onArticleClick={(art) => {
                setSelectedArticle(art);
                setActiveTab('hub');
              }}
              onDoctorSelect={(doc) => handleOpenBookModal(doc)}
              onOpenUploadReport={() => setIsUploadReportModalOpen(true)}
              onOpenEmergency={() => setIsEmergencyModalOpen(true)}
            />
          )}

          {activeTab === 'dashboard' && (
            <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
              <MyHealthDashboard
                currentMember={currentMember}
                metrics={metrics}
                trendData={[
                  { date: 'May 18', heartRate: 74, bloodPressureSys: 122, bloodPressureDia: 80, bloodGlucose: 99, weight: 62.8, sleepHours: 7.0, steps: 6100 },
                  { date: 'May 19', heartRate: 73, bloodPressureSys: 120, bloodPressureDia: 78, bloodGlucose: 97, weight: 62.7, sleepHours: 7.4, steps: 6800 },
                  { date: 'May 20', heartRate: 75, bloodPressureSys: 121, bloodPressureDia: 80, bloodGlucose: 100, weight: 62.6, sleepHours: 6.8, steps: 5900 },
                  { date: 'May 21', heartRate: 71, bloodPressureSys: 119, bloodPressureDia: 79, bloodGlucose: 96, weight: 62.5, sleepHours: 7.5, steps: 7200 },
                  { date: 'May 22', heartRate: 72, bloodPressureSys: 120, bloodPressureDia: 80, bloodGlucose: 98, weight: 62.5, sleepHours: 7.2, steps: 6482 },
                  { date: 'Today', heartRate: 72, bloodPressureSys: 120, bloodPressureDia: 80, bloodGlucose: 98, weight: 62.5, sleepHours: 7.2, steps: 6482 },
                ]}
                timeline={[
                  { id: '1', date: 'May 22, 2024', type: 'report', title: 'Comprehensive Lipid & Metabolic Panel', description: 'Fasting glucose 98 mg/dL and cholesterol markers balanced.', status: 'completed', actor: 'Dr. Priya Sharma' },
                  { id: '2', date: 'May 14, 2024', type: 'consultation', title: 'Cardiology Review', description: 'Resting BP stabilized at 120/80 mmHg with regular morning walks.', status: 'completed', actor: 'Dr. Rohan Mehta' },
                  { id: '3', date: 'May 10, 2024', type: 'prescription', title: 'Refill: Atorvastatin 10mg', description: 'Delivered by HealthPlus Pharmacy express dispatch.', status: 'completed', actor: 'HealthPlus Pharmacy' },
                  { id: '4', date: 'May 24, 10:30 AM', type: 'consultation', title: 'Video Follow-up Consultation', description: 'Routine seasonal checkup and wellness consultation.', status: 'pending', actor: 'Dr. Priya Sharma' },
                ]}
                onOpenLogVitals={() => setIsLogVitalsModalOpen(true)}
                onNavigate={setActiveTab}
              />
            </div>
          )}

          {activeTab === 'services' && (
            <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
              <ServicesView
                services={healthServicesCatalog}
                onNavigate={setActiveTab}
                onOpenBookModal={() => handleOpenBookModal()}
                onOpenUploadReport={() => setIsUploadReportModalOpen(true)}
              />
            </div>
          )}

          {activeTab === 'appointments' && (
            <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
              <AppointmentsView
                appointments={appointments}
                doctors={doctors}
                onOpenBookModal={handleOpenBookModal}
                onCancelAppointment={handleCancelAppointment}
                onStartVideoConsult={handleStartVideoConsult}
              />
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
              <HealthReportsView
                reports={reports}
                onOpenUploadModal={() => setIsUploadReportModalOpen(true)}
                onNavigate={setActiveTab}
              />
            </div>
          )}

          {activeTab === 'pharmacy' && (
            <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
              <PharmacyView
                medications={medications}
                reminders={pillReminders}
                onToggleReminder={handleToggleReminder}
              />
            </div>
          )}

          {(activeTab === 'mental' || activeTab === 'wellness') && (
            <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
              <MentalWellnessView
                moodHistory={moodHistory}
                onLogMood={handleLogMood}
                onNavigate={setActiveTab}
              />
            </div>
          )}

          {activeTab === 'nutrition' && (
            <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
              <NutritionWellnessView
                metrics={metrics}
                nutritionPlans={nutritionPlans}
                recipes={recipes}
                challenges={challenges}
                onUpdateMetrics={setMetrics}
                onJoinChallenge={handleJoinChallenge}
              />
            </div>
          )}

          {activeTab === 'fitness' && (
            <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
              <FitnessLifestyleView
                metrics={metrics}
                routines={workoutRoutines}
              />
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
              <AIAssistantView
                metrics={metrics}
                currentMember={currentMember}
                onNavigate={setActiveTab}
              />
            </div>
          )}

          {activeTab === 'family' && (
            <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
              <FamilyHealthView
                familyMembers={familyMembers}
                selectedFamilyId={selectedFamilyMemberId}
                onSelectFamilyMember={setSelectedFamilyMemberId}
                onAddFamilyMember={handleAddFamilyMember}
                onNavigate={setActiveTab}
              />
            </div>
          )}

          {activeTab === 'hub' && (
            <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
              <HealthHubContent
                articles={articles}
                faqs={mockFAQs}
                onNavigate={setActiveTab}
                selectedArticle={selectedArticle}
                onSelectArticle={setSelectedArticle}
              />
            </div>
          )}
        </main>
      </div>

      {/* 3. Mobile Bottom Navigation */}
      <BottomNav activeTab={activeTab} onNavigate={setActiveTab} />

      {/* 4. Global Modals */}
      <EmergencyModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
      />

      <NotificationDrawer
        isOpen={isNotificationDrawerOpen}
        onClose={() => setIsNotificationDrawerOpen(false)}
        notifications={notifications}
        onMarkAllRead={handleMarkAllNotificationsRead}
        onDismiss={handleDismissNotification}
        onNavigate={(tab) => {
          setIsNotificationDrawerOpen(false);
          setActiveTab(tab);
        }}
      />

      <BookAppointmentModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        initialDoctor={bookingDoctor}
        availableDoctors={doctors}
        familyMembers={familyMembers}
        onConfirmBooking={handleConfirmBooking}
      />

      {activeVideoAppointment && (
        <VideoConsultationModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          appointment={activeVideoAppointment}
        />
      )}

      <LogVitalsModal
        isOpen={isLogVitalsModalOpen}
        onClose={() => setIsLogVitalsModalOpen(false)}
        currentMetrics={metrics}
        onSaveVitals={handleSaveVitals}
      />

      <UploadReportModal
        isOpen={isUploadReportModalOpen}
        onClose={() => setIsUploadReportModalOpen(false)}
        onAddReport={handleAddReport}
      />

      {/* Authentication Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleStartLogin}
        familyMembers={familyMembers}
      />

      {/* 5. Site & Authentication Loading Screens */}
      <AnimatePresence mode="wait">
        {isInitialLoading && (
          <AppLoadingScreen
            key="initial-app-loader"
            onComplete={() => setIsInitialLoading(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isLoginLoading && loggingInUser && (
          <LoginLoadingScreen
            key="login-auth-loader"
            user={loggingInUser}
            onComplete={handleCompleteLogin}
          />
        )}
      </AnimatePresence>

      {/* 6. Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 max-w-sm bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center space-x-3 text-xs animate-in slide-in-from-bottom duration-200">
          <div className="w-2 h-2 rounded-full bg-[#00A884] shrink-0" />
          <span className="font-medium leading-snug">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
