import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { TickerRibbon } from './components/TickerRibbon';
import { Footer } from './components/Footer';

// Module Views
import { HomeView } from './components/modules/HomeView';
import { AboutView } from './components/modules/AboutView';
import { SolutionsView } from './components/modules/SolutionsView';
import { PortfolioView } from './components/modules/PortfolioView';
import { CalculatorsView } from './components/modules/CalculatorsView';
import { InsightsView } from './components/modules/InsightsView';
import { PerformanceView } from './components/modules/PerformanceView';
import { ClientPortalView } from './components/modules/ClientPortalView';
import { DiscoveryView } from './components/modules/DiscoveryView';
import { ComparisonView } from './components/modules/ComparisonView';
import { AdvisorsView } from './components/modules/AdvisorsView';
import { EducationView } from './components/modules/EducationView';
import { ReportsView } from './components/modules/ReportsView';
import { ContactView } from './components/modules/ContactView';
import { AdminView } from './components/modules/AdminView';

// Types & Mock Data
import { ActiveTab, Currency, AppNotification } from './types';
import { NOTIFICATIONS, ADVISORS } from './data/mockData';
import { Calendar, CheckCircle2, X, Sparkles } from 'lucide-react';
import { triggerDownload } from './utils/formatters';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [notifications, setNotifications] = useState<AppNotification[]>(NOTIFICATIONS);
  const [selectedCompareIds, setSelectedCompareIds] = useState<string[]>([]);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [bookingAdvisorId, setBookingAdvisorId] = useState<string | null>(null);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const openBookingModal = (advisorId?: string) => {
    if (advisorId) setBookingAdvisorId(advisorId);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-slate-900 flex flex-col font-sans selection:bg-[#C5A021] selection:text-[#002147]">
      {/* 1. Global Market Indices Ticker Ribbon */}
      <TickerRibbon currency={currency} />

      {/* 2. Institutional Master Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currency={currency}
        setCurrency={setCurrency}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        openBookingModal={() => openBookingModal()}
        notifications={notifications}
        setNotifications={setNotifications}
      />

      {/* 3. Dynamic Module View Render */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeView
            setActiveTab={setActiveTab}
            currency={currency}
            openBookingModal={() => openBookingModal()}
          />
        )}

        {activeTab === 'about' && (
          <AboutView
            setActiveTab={setActiveTab}
            openBookingModal={() => openBookingModal()}
          />
        )}

        {activeTab === 'solutions' && (
          <SolutionsView
            setActiveTab={setActiveTab}
            currency={currency}
            openBookingModal={() => openBookingModal()}
          />
        )}

        {activeTab === 'portfolio' && (
          <PortfolioView
            setActiveTab={setActiveTab}
            currency={currency}
            openBookingModal={() => openBookingModal()}
          />
        )}

        {activeTab === 'calculators' && (
          <CalculatorsView
            setActiveTab={setActiveTab}
            currency={currency}
            openBookingModal={() => openBookingModal()}
          />
        )}

        {activeTab === 'insights' && (
          <InsightsView
            setActiveTab={setActiveTab}
            openBookingModal={() => openBookingModal()}
          />
        )}

        {activeTab === 'performance' && (
          <PerformanceView
            setActiveTab={setActiveTab}
            currency={currency}
            openBookingModal={() => openBookingModal()}
          />
        )}

        {activeTab === 'portal' && (
          <ClientPortalView
            setActiveTab={setActiveTab}
            currency={currency}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            openBookingModal={() => openBookingModal()}
            notifications={notifications}
          />
        )}

        {activeTab === 'discovery' && (
          <DiscoveryView
            setActiveTab={setActiveTab}
            currency={currency}
            openBookingModal={() => openBookingModal()}
            selectedCompareIds={selectedCompareIds}
            setSelectedCompareIds={setSelectedCompareIds}
          />
        )}

        {activeTab === 'comparison' && (
          <ComparisonView
            setActiveTab={setActiveTab}
            currency={currency}
            openBookingModal={() => openBookingModal()}
            selectedCompareIds={selectedCompareIds}
            setSelectedCompareIds={setSelectedCompareIds}
          />
        )}

        {activeTab === 'advisors' && (
          <AdvisorsView
            setActiveTab={setActiveTab}
            currency={currency}
            bookingAdvisorId={bookingAdvisorId}
          />
        )}

        {activeTab === 'education' && (
          <EducationView
            setActiveTab={setActiveTab}
            openBookingModal={() => openBookingModal()}
          />
        )}

        {activeTab === 'reports' && (
          <ReportsView
            setActiveTab={setActiveTab}
            openBookingModal={() => openBookingModal()}
          />
        )}

        {activeTab === 'contact' && (
          <ContactView
            setActiveTab={setActiveTab}
            openBookingModal={() => openBookingModal()}
          />
        )}

        {activeTab === 'admin' && (
          <AdminView
            setActiveTab={setActiveTab}
            currency={currency}
            notifications={notifications}
            setNotifications={setNotifications}
          />
        )}
      </main>

      {/* 4. Global Institutional Footer */}
      <Footer setActiveTab={setActiveTab} openBookingModal={() => openBookingModal()} />

      {/* 5. Fast Consultation Global Modal */}
      {isBookingModalOpen && (
        <FastBookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          defaultAdvisorId={bookingAdvisorId}
          setActiveTab={setActiveTab}
        />
      )}
    </div>
  );
}

interface FastBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAdvisorId: string | null;
  setActiveTab: (tab: ActiveTab) => void;
}

const FastBookingModal: React.FC<FastBookingModalProps> = ({
  isOpen,
  onClose,
  defaultAdvisorId,
  setActiveTab,
}) => {
  const [advisorId, setAdvisorId] = useState<string>(defaultAdvisorId || ADVISORS[0].id);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('2026-09-02');
  const [time, setTime] = useState('14:00');
  const [submitted, setSubmitted] = useState(false);

  const selectedAdv = ADVISORS.find((a) => a.id === advisorId) || ADVISORS[0];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const handleDownloadIcs = () => {
    const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:Apex Wealth Consultation with ${selectedAdv.name}\nDTSTART:20260902T140000Z\nDTEND:20260902T150000Z\nDESCRIPTION:Private Strategy Session with ${selectedAdv.name} (${selectedAdv.title})\nSTATUS:CONFIRMED\nEND:VEVENT\nEND:VCALENDAR`;
    triggerDownload(`Apex_Consultation_${selectedAdv.name.replace(/\s+/g, '_')}.ics`, ics);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#001B3A]/80 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative my-8 animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-[#002147] text-xl font-bold"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleConfirm} className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A021]">
                Fiduciary Direct Booking
              </span>
              <h3 className="font-display text-2xl font-bold text-[#002147]">
                Schedule Wealth Consultation
              </h3>
              <p className="text-xs text-slate-500">
                Connect with our senior portfolio directors for a confidential portfolio diagnostic.
              </p>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#002147]">Choose Wealth Director</label>
              <select
                value={advisorId}
                onChange={(e) => setAdvisorId(e.target.value)}
                className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 font-bold text-slate-800 focus:outline-hidden focus:border-[#002147]"
              >
                {ADVISORS.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.name} — {a.title} ({a.specialty})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#002147]">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-hidden focus:border-[#002147]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#002147]">Time</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full p-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-hidden focus:border-[#002147]"
                >
                  <option value="10:00">10:00 AM EST</option>
                  <option value="12:00">12:00 PM EST</option>
                  <option value="14:00">02:00 PM EST</option>
                  <option value="16:30">04:30 PM EST</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#002147]">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Katherine Pierce"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-hidden focus:border-[#002147]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#002147]">Email Address *</label>
              <input
                type="email"
                required
                placeholder="k.pierce@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-hidden focus:border-[#002147]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-xs font-bold text-white bg-[#002147] hover:bg-[#003366] rounded-xl transition-colors shadow-md text-center mt-2 border border-[#003366]"
            >
              Confirm Appointment with {selectedAdv.name} &rarr;
            </button>
          </form>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#002147]">
              Appointment Reserved
            </h3>
            <p className="text-xs text-slate-600">
              Your consultation with <strong>{selectedAdv.name}</strong> is scheduled for{' '}
              <strong>{date} at {time} EST</strong>. A secure calendar invitation and briefing note have been sent to <strong>{email}</strong>.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleDownloadIcs}
                className="w-full py-2.5 bg-[#002147] text-[#C5A021] text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 hover:bg-[#003366] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Save to Calendar (.ICS)</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
