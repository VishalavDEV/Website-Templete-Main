import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  ActivePage,
  Doctor,
  Article,
  MedicalReport,
  Appointment,
  PatientNotification,
  PatientProfile,
} from '../types';
import { mockApi } from '../services/mockApi';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

interface AppContextType {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  
  // Modals & Overlays
  isBookingOpen: boolean;
  bookingDoctor: Doctor | null;
  bookingSpecialtyId: string | null;
  openBooking: (doctor?: Doctor | null, specialtyId?: string | null) => void;
  closeBooking: () => void;

  selectedDoctorProfile: Doctor | null;
  openDoctorProfile: (doctor: Doctor) => void;
  closeDoctorProfile: () => void;

  selectedReport: MedicalReport | null;
  openReport: (report: MedicalReport) => void;
  closeReport: () => void;

  selectedArticle: Article | null;
  openArticle: (article: Article) => void;
  closeArticle: () => void;

  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;

  isNotificationOpen: boolean;
  setIsNotificationOpen: (open: boolean) => void;

  rescheduleAppointmentData: Appointment | null;
  openReschedule: (apt: Appointment) => void;
  closeReschedule: () => void;

  // Selected filters for fast navigation from other sections
  filterSpecialtyId: string | null;
  setFilterSpecialtyId: (id: string | null) => void;

  // Data & State
  appointments: Appointment[];
  refreshAppointments: () => Promise<void>;
  cancelAppointment: (id: string, reason?: string) => Promise<boolean>;

  notifications: PatientNotification[];
  unreadNotificationCount: number;
  markNotificationRead: (id: string) => Promise<void>;
  clearNotifications: () => Promise<void>;

  savedArticleIds: string[];
  toggleSaveArticle: (id: string) => Promise<void>;

  patientProfile: PatientProfile | null;
  updateProfile: (profile: PatientProfile) => Promise<void>;

  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
  
  downloadIcsFile: (apt: Appointment) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePage, setActivePageState] = useState<ActivePage>('home');

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingDoctor, setBookingDoctor] = useState<Doctor | null>(null);
  const [bookingSpecialtyId, setBookingSpecialtyId] = useState<string | null>(null);

  const [selectedDoctorProfile, setSelectedDoctorProfile] = useState<Doctor | null>(null);
  const [selectedReport, setSelectedReport] = useState<MedicalReport | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [rescheduleAppointmentData, setRescheduleAppointmentData] = useState<Appointment | null>(null);

  const [filterSpecialtyId, setFilterSpecialtyId] = useState<string | null>(null);

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [notifications, setNotifications] = useState<PatientNotification[]>([]);
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>([]);
  const [patientProfile, setPatientProfile] = useState<PatientProfile | null>(null);

  const [toasts, setToasts] = useState<Toast[]>([]);

  // Navigation with smooth scroll to top
  const setActivePage = useCallback((page: ActivePage) => {
    setActivePageState(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const showToast = useCallback(
    (message: string, type: 'success' | 'info' | 'error' = 'success') => {
      const id = `toast-${Date.now()}-${Math.random()}`;
      setToasts((prev) => [...prev, { id, message, type }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4000);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const refreshAppointments = useCallback(async () => {
    const list = await mockApi.getAppointments();
    setAppointments(list);
  }, []);

  const refreshNotifications = useCallback(async () => {
    const list = await mockApi.getNotifications();
    setNotifications(list);
  }, []);

  const loadInitialData = useCallback(async () => {
    const [apts, notifs, saved, profile] = await Promise.all([
      mockApi.getAppointments(),
      mockApi.getNotifications(),
      mockApi.getSavedArticleIds(),
      mockApi.getPatientProfile(),
    ]);
    setAppointments(apts);
    setNotifications(notifs);
    setSavedArticleIds(saved);
    setPatientProfile(profile);
  }, []);

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  // Global Keyboard Shortcut (Cmd+K / Ctrl+K for Search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsNotificationOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openBooking = useCallback((doctor?: Doctor | null, specialtyId?: string | null) => {
    setBookingDoctor(doctor || null);
    setBookingSpecialtyId(specialtyId || (doctor ? doctor.specialtyId : null));
    setIsBookingOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsBookingOpen(false);
    setBookingDoctor(null);
    setBookingSpecialtyId(null);
  }, []);

  const openDoctorProfile = useCallback((doctor: Doctor) => {
    setSelectedDoctorProfile(doctor);
  }, []);

  const closeDoctorProfile = useCallback(() => {
    setSelectedDoctorProfile(null);
  }, []);

  const openReport = useCallback((report: MedicalReport) => {
    setSelectedReport(report);
  }, []);

  const closeReport = useCallback(() => {
    setSelectedReport(null);
  }, []);

  const openArticle = useCallback((article: Article) => {
    setSelectedArticle(article);
  }, []);

  const closeArticle = useCallback(() => {
    setSelectedArticle(null);
  }, []);

  const openReschedule = useCallback((apt: Appointment) => {
    setRescheduleAppointmentData(apt);
  }, []);

  const closeReschedule = useCallback(() => {
    setRescheduleAppointmentData(null);
  }, []);

  const cancelAppointment = useCallback(
    async (id: string, reason?: string) => {
      const ok = await mockApi.cancelAppointment(id, reason);
      if (ok) {
        await refreshAppointments();
        await refreshNotifications();
        showToast('Appointment has been successfully cancelled.', 'info');
      }
      return ok;
    },
    [refreshAppointments, refreshNotifications, showToast]
  );

  const markNotificationRead = useCallback(async (id: string) => {
    const updated = await mockApi.markNotificationRead(id);
    setNotifications(updated);
  }, []);

  const clearNotifications = useCallback(async () => {
    await mockApi.clearAllNotifications();
    setNotifications([]);
    showToast('All notifications cleared', 'info');
  }, [showToast]);

  const toggleSaveArticle = useCallback(
    async (id: string) => {
      const updated = await mockApi.toggleSaveArticle(id);
      setSavedArticleIds(updated);
      const isSaved = updated.includes(id);
      showToast(
        isSaved ? 'Article saved to your reading list' : 'Article removed from saved',
        'info'
      );
    },
    [showToast]
  );

  const updateProfile = useCallback(
    async (profile: PatientProfile) => {
      const updated = await mockApi.updatePatientProfile(profile);
      setPatientProfile(updated);
      showToast('Patient profile updated successfully!', 'success');
    },
    [showToast]
  );

  // Generate downloadable .ics calendar file
  const downloadIcsFile = useCallback((apt: Appointment) => {
    const startDateFormatted = apt.date.replace(/-/g, '');
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Aura Health//Lilac Frost Medical//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${apt.id}@auramedical.com`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART:${startDateFormatted}T100000Z`,
      `DTEND:${startDateFormatted}T110000Z`,
      `SUMMARY:Medical Appointment: ${apt.doctorName} (${apt.doctorSpecialty})`,
      `DESCRIPTION:Appointment ID: ${apt.id}\\nConsultation Type: ${apt.consultationType}\\nDoctor: ${apt.doctorName}\\nReason: ${apt.reason}\\nLocation: ${apt.doctorLocation}`,
      `LOCATION:${apt.consultationType === 'video' ? 'Virtual Video Suite' : apt.doctorLocation}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${apt.id}-${apt.doctorName.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const unreadNotificationCount = notifications.filter((n) => !n.read).length;

  return (
    <AppContext.Provider
      value={{
        activePage,
        setActivePage,
        isBookingOpen,
        bookingDoctor,
        bookingSpecialtyId,
        openBooking,
        closeBooking,
        selectedDoctorProfile,
        openDoctorProfile,
        closeDoctorProfile,
        selectedReport,
        openReport,
        closeReport,
        selectedArticle,
        openArticle,
        closeArticle,
        isSearchOpen,
        setIsSearchOpen,
        isNotificationOpen,
        setIsNotificationOpen,
        rescheduleAppointmentData,
        openReschedule,
        closeReschedule,
        filterSpecialtyId,
        setFilterSpecialtyId,
        appointments,
        refreshAppointments,
        cancelAppointment,
        notifications,
        unreadNotificationCount,
        markNotificationRead,
        clearNotifications,
        savedArticleIds,
        toggleSaveArticle,
        patientProfile,
        updateProfile,
        toasts,
        showToast,
        removeToast,
        downloadIcsFile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
