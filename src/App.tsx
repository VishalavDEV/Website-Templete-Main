import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Overview } from './components/Overview';
import { HealthPassport } from './components/HealthPassport';
import { DocumentVault } from './components/DocumentVault';
import { PreventiveCalendar } from './components/PreventiveCalendar';
import { RiskSimulator } from './components/RiskSimulator';
import { SymptomJournal } from './components/SymptomJournal';
import { SharingCenter } from './components/SharingCenter';
import { NearbyHealthMap } from './components/NearbyHealthMap';
import { HealthStoryTimeline } from './components/HealthStoryTimeline';
import { PrivacyCenter } from './components/PrivacyCenter';

// Modals
import { EmergencyHealthCard } from './components/EmergencyHealthCard';
import { EditProfileModal } from './components/modals/EditProfileModal';
import { UploadDocModal } from './components/modals/UploadDocModal';
import { AddSymptomModal } from './components/modals/AddSymptomModal';
import { ShareDataModal } from './components/modals/ShareDataModal';
import { SearchModal } from './components/modals/SearchModal';

// Initial Mock Data
import {
  initialUserProfile,
  initialDocuments,
  initialPreventiveItems,
  initialSymptomLogs,
  initialSharePermissions,
  initialHealthFacilities,
  initialHealthStoryEvents,
  initialSecurityLogs,
} from './data/initialData';
import {
  UserProfile,
  MedicalDocument,
  PreventiveItem,
  SymptomLog,
  SharePermission,
} from './types';
import {
  ShieldCheck,
  Heart,
  Lock,
  Calendar,
  Sparkles,
  Phone,
  FileText,
  Activity,
  X,
  Share2,
} from 'lucide-react';

export default function App() {
  // Global State
  const [user, setUser] = useState<UserProfile>(initialUserProfile);
  const [documents, setDocuments] = useState<MedicalDocument[]>(initialDocuments);
  const [preventionItems, setPreventionItems] = useState<PreventiveItem[]>(initialPreventiveItems);
  const [symptomLogs, setSymptomLogs] = useState<SymptomLog[]>(initialSymptomLogs);
  const [shares, setShares] = useState<SharePermission[]>(initialSharePermissions);
  const [securityLogs, setSecurityLogs] = useState(initialSecurityLogs);

  // Active Navigation Tab
  const [activeTab, setActiveTab] = useState<string>('overview');

  // Modal Visibility State
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isUploadDocModalOpen, setIsUploadDocModalOpen] = useState(false);
  const [isAddSymptomModalOpen, setIsAddSymptomModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Toast Notification Message
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Global keyboard shortcut: Cmd+K / Ctrl+K opens search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchModalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Handlers
  const handleUpdateProfile = (updated: UserProfile) => {
    setUser(updated);
    triggerToast('Health Passport updated successfully');
  };

  const handleUploadDocument = (newDoc: MedicalDocument) => {
    setDocuments(prev => [newDoc, ...prev]);
    triggerToast(`Document "${newDoc.title}" stored securely in Vault`);
  };

  const handleDeleteDocument = (id: string) => {
    setDocuments(prev => prev.filter(d => d.id !== id));
    triggerToast('Document deleted from encrypted vault');
  };

  const handleTogglePreventionStatus = (id: string) => {
    setPreventionItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          const nextStatus = item.status === 'completed' ? 'upcoming' : 'completed';
          return {
            ...item,
            status: nextStatus,
            completedDate: nextStatus === 'completed' ? new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : undefined,
          };
        }
        return item;
      })
    );
    triggerToast('Preventive care milestone status updated');
  };

  const handleAddSymptomLog = (log: SymptomLog) => {
    setSymptomLogs(prev => [log, ...prev]);
    triggerToast(`Symptom "${log.symptom}" logged in journal`);
  };

  const handleDeleteSymptomLog = (id: string) => {
    setSymptomLogs(prev => prev.filter(s => s.id !== id));
    triggerToast('Symptom observation removed');
  };

  const handleGrantShare = (newShare: SharePermission) => {
    setShares(prev => [newShare, ...prev]);
    triggerToast(`Access granted to ${newShare.recipientName}`);
  };

  const handleRevokeShare = (id: string) => {
    setShares(prev =>
      prev.map(s => (s.id === id ? { ...s, status: 'Revoked' as const } : s))
    );
    triggerToast('Provider access token revoked immediately');
  };

  const handleRevokeAllShares = () => {
    setShares(prev => prev.map(s => ({ ...s, status: 'Revoked' as const })));
    triggerToast('All external provider access grants have been revoked');
  };

  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#2D3A2D] flex flex-col selection:bg-[#2D3A2D] selection:text-[#F5F2ED]">
      
      {/* Persistent Elegant Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
        onOpenEmergency={() => setIsEmergencyModalOpen(true)}
        onOpenSearch={() => setIsSearchModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-6 sm:py-8">
        
        {activeTab === 'overview' && (
          <Overview
            user={user}
            documents={documents}
            preventionItems={preventionItems}
            onNavigate={setActiveTab}
            onOpenEmergency={() => setIsEmergencyModalOpen(true)}
          />
        )}

        {activeTab === 'passport' && (
          <HealthPassport
            user={user}
            onEditProfile={() => setIsEditProfileModalOpen(true)}
            onSharePassport={() => setIsShareModalOpen(true)}
            onNavigateToTimeline={() => setActiveTab('timeline')}
            recentEvents={initialHealthStoryEvents}
          />
        )}

        {activeTab === 'documents' && (
          <DocumentVault
            documents={documents}
            onUploadDocument={() => setIsUploadDocModalOpen(true)}
            onDeleteDocument={handleDeleteDocument}
          />
        )}

        {activeTab === 'prevention' && (
          <PreventiveCalendar
            items={preventionItems}
            onSchedulePrevention={() => setIsAddSymptomModalOpen(true)}
            onToggleComplete={handleTogglePreventionStatus}
          />
        )}

        {activeTab === 'risk' && <RiskSimulator />}

        {activeTab === 'journal' && (
          <SymptomJournal
            logs={symptomLogs}
            onAddLog={() => setIsAddSymptomModalOpen(true)}
            onDeleteLog={handleDeleteSymptomLog}
          />
        )}

        {activeTab === 'sharing' && (
          <SharingCenter
            shares={shares}
            onOpenNewShare={() => setIsShareModalOpen(true)}
            onRevokeShare={handleRevokeShare}
          />
        )}

        {activeTab === 'nearby' && (
          <NearbyHealthMap facilities={initialHealthFacilities} />
        )}

        {activeTab === 'timeline' && (
          <HealthStoryTimeline events={initialHealthStoryEvents} />
        )}

        {activeTab === 'privacy' && (
          <PrivacyCenter
            user={user}
            shares={shares}
            securityLogs={securityLogs}
            onRevokeAllShares={handleRevokeAllShares}
          />
        )}

      </main>

      {/* Floating Bottom Emergency Quick Bar (Accessible everywhere) */}
      <div className="sticky bottom-4 z-40 max-w-md mx-auto px-4 pointer-events-none">
        <div className="p-2.5 rounded-full bg-[#2D3A2D]/95 backdrop-blur-md border border-white/10 shadow-2xl text-white flex items-center justify-between pointer-events-auto">
          <div className="flex items-center space-x-2 pl-3">
            <span className="w-2 h-2 rounded-full bg-[#A8904F] animate-pulse" />
            <span className="text-xs font-semibold">Emergency Health Card</span>
          </div>
          <button
            onClick={() => setIsEmergencyModalOpen(true)}
            className="px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-[11px] font-bold text-white transition-colors border border-white/20"
          >
            Show Card
          </button>
        </div>
      </div>

      {/* Natural Tones Modern Footer */}
      <footer className="mt-20 border-t border-[#E5E2DD] bg-[#2D3A2D] text-white/60 py-10 px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="w-full max-w-[1720px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-white/10 text-[#A8904F] flex items-center justify-center font-bold font-serif border border-white/20">
              N
            </div>
            <div>
              <p className="font-bold text-white text-sm font-serif">Nuvita Health System</p>
              <p className="text-[11px] text-white/50">Personal Health Management • Prevention • Sovereign Privacy</p>
            </div>
          </div>

          {/* Direct module quicklinks */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-white/70">
            <button onClick={() => setActiveTab('overview')} className="hover:text-white transition-colors">Overview</button>
            <button onClick={() => setActiveTab('passport')} className="hover:text-white transition-colors">Passport</button>
            <button onClick={() => setActiveTab('documents')} className="hover:text-white transition-colors">Documents</button>
            <button onClick={() => setActiveTab('prevention')} className="hover:text-white transition-colors">Prevention</button>
            <button onClick={() => setActiveTab('risk')} className="hover:text-white transition-colors">Risk & Insights</button>
            <button onClick={() => setActiveTab('journal')} className="hover:text-white transition-colors">Journal</button>
            <button onClick={() => setActiveTab('sharing')} className="hover:text-white transition-colors">Data Sharing</button>
            <button onClick={() => setActiveTab('nearby')} className="hover:text-white transition-colors">Nearby Care</button>
            <button onClick={() => setActiveTab('privacy')} className="hover:text-white transition-colors">Privacy</button>
          </div>

          <p className="text-[10px] text-white/40 uppercase tracking-[0.15em] text-center md:text-right font-medium">
            &copy; 2026 Nuvita • Privacy First Healthcare
          </p>

        </div>
      </footer>

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-[#2D3A2D] text-white border border-white/10 shadow-2xl flex items-center space-x-3 text-xs animate-in slide-in-from-bottom-4 duration-300">
          <ShieldCheck className="w-4 h-4 text-[#A8904F] shrink-0" />
          <span className="font-medium">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="p-1 rounded-md hover:bg-white/10 text-white/70"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Modals */}
      
      {/* 1. Full-screen Emergency Card Modal */}
      <EmergencyHealthCard
        user={user}
        isOpenModal={isEmergencyModalOpen}
        modalOnly={true}
        onCloseModal={() => setIsEmergencyModalOpen(false)}
      />

      {/* 2. Edit Profile Modal */}
      <EditProfileModal
        user={user}
        isOpen={isEditProfileModalOpen}
        onClose={() => setIsEditProfileModalOpen(false)}
        onSave={handleUpdateProfile}
      />

      {/* 3. Upload Document Modal */}
      <UploadDocModal
        isOpen={isUploadDocModalOpen}
        onClose={() => setIsUploadDocModalOpen(false)}
        onUpload={handleUploadDocument}
      />

      {/* 4. Add Symptom Modal */}
      <AddSymptomModal
        isOpen={isAddSymptomModalOpen}
        onClose={() => setIsAddSymptomModalOpen(false)}
        onAdd={handleAddSymptomLog}
      />

      {/* 5. Share Data Wizard Modal */}
      <ShareDataModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        onGrantShare={handleGrantShare}
      />

      {/* 6. Universal Search Modal */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        documents={documents}
        preventionItems={preventionItems}
        facilities={initialHealthFacilities}
        symptomLogs={symptomLogs}
        onNavigate={setActiveTab}
      />

    </div>
  );
}

