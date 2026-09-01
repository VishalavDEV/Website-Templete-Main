import React, { createContext, useContext, useState, useEffect } from 'react';
import { Doctor, Department, MedicalService, Appointment, PatientVitals, Prescription, LabResult, NotificationItem, ActiveTab, ConsultationMode } from '../types';
import { DOCTORS_DATA, DEPARTMENTS_DATA, MEDICAL_SERVICES_DATA, INITIAL_APPOINTMENTS, INITIAL_VITALS, INITIAL_PRESCRIPTIONS, INITIAL_LAB_RESULTS, INITIAL_NOTIFICATIONS } from '../data/mockData';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
}

interface AppContextType {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  doctors: Doctor[];
  departments: Department[];
  services: MedicalService[];
  appointments: Appointment[];
  vitals: PatientVitals;
  prescriptions: Prescription[];
  labResults: LabResult[];
  notifications: NotificationItem[];
  favoriteDoctorIds: string[];
  toggleFavoriteDoctor: (id: string) => void;
  // Modals & Flows
  isBookingOpen: boolean;
  bookingDoctor: Doctor | null;
  bookingPreselectedMode: ConsultationMode;
  openBooking: (doctor?: Doctor | null, mode?: ConsultationMode) => void;
  closeBooking: () => void;
  addAppointment: (appointment: Omit<Appointment, 'id' | 'createdAt'>) => Appointment;
  cancelAppointment: (id: string) => void;
  updateAppointmentStatus: (id: string, status: Appointment['status']) => void;
  // Doctor Profile Modal
  selectedDoctorProfile: Doctor | null;
  openDoctorProfile: (doctor: Doctor) => void;
  closeDoctorProfile: () => void;
  // Telehealth Simulation Modal
  activeTelehealthAppointment: Appointment | null;
  openTelehealthRoom: (appointment: Appointment) => void;
  closeTelehealthRoom: () => void;
  // Command Palette
  isCommandPaletteOpen: boolean;
  setIsCommandPaletteOpen: (open: boolean) => void;
  // Search query from hero or anywhere
  globalSearchQuery: string;
  setGlobalSearchQuery: (q: string) => void;
  selectedSpecialtyFilter: string;
  setSelectedSpecialtyFilter: (spec: string) => void;
  // Toasts
  toasts: ToastMessage[];
  addToast: (toast: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
  // Refill helper
  requestPrescriptionRefill: (id: string) => void;
  markNotificationAsRead: (id: string) => void;
  markAllNotificationsAsRead: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [doctors] = useState<Doctor[]>(DOCTORS_DATA);
  const [departments] = useState<Department[]>(DEPARTMENTS_DATA);
  const [services] = useState<MedicalService[]>(MEDICAL_SERVICES_DATA);

  // Appointments stored in local storage for persistence across reloads
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem('aurevia_appointments') || localStorage.getItem('carenova_appointments');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_APPOINTMENTS;
  });

  const [vitals] = useState<PatientVitals>(INITIAL_VITALS);
  const [prescriptions, setPrescriptions] = useState<Prescription[]>(INITIAL_PRESCRIPTIONS);
  const [labResults] = useState<LabResult[]>(INITIAL_LAB_RESULTS);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [favoriteDoctorIds, setFavoriteDoctorIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('aurevia_favorites') || localStorage.getItem('carenova_favorites');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return ['dr-sarah-lin', 'dr-maya-patel'];
  });

  // Modal states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingDoctor, setBookingDoctor] = useState<Doctor | null>(null);
  const [bookingPreselectedMode, setBookingPreselectedMode] = useState<ConsultationMode>('in_person');

  const [selectedDoctorProfile, setSelectedDoctorProfile] = useState<Doctor | null>(null);
  const [activeTelehealthAppointment, setActiveTelehealthAppointment] = useState<Appointment | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Search & Filter State
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');
  const [selectedSpecialtyFilter, setSelectedSpecialtyFilter] = useState('All');

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    localStorage.setItem('aurevia_appointments', JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem('aurevia_favorites', JSON.stringify(favoriteDoctorIds));
  }, [favoriteDoctorIds]);

  // Keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const addToast = (toast: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleFavoriteDoctor = (id: string) => {
    setFavoriteDoctorIds((prev) => {
      const isFav = prev.includes(id);
      const updated = isFav ? prev.filter((item) => item !== id) : [...prev, id];
      const doc = doctors.find((d) => d.id === id);
      addToast({
        type: 'info',
        title: isFav ? 'Removed from Saved' : 'Saved to Favorites',
        message: `${doc?.name || 'Specialist'} has been ${isFav ? 'removed from' : 'added to'} your care team.`
      });
      return updated;
    });
  };

  const openBooking = (doctor?: Doctor | null, mode: ConsultationMode = 'in_person') => {
    setBookingDoctor(doctor || null);
    setBookingPreselectedMode(mode);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setBookingDoctor(null);
  };

  const openDoctorProfile = (doctor: Doctor) => {
    setSelectedDoctorProfile(doctor);
  };

  const closeDoctorProfile = () => {
    setSelectedDoctorProfile(null);
  };

  const openTelehealthRoom = (appointment: Appointment) => {
    setActiveTelehealthAppointment(appointment);
  };

  const closeTelehealthRoom = () => {
    setActiveTelehealthAppointment(null);
  };

  const addAppointment = (apptData: Omit<Appointment, 'id' | 'createdAt'>): Appointment => {
    const newId = `AV-${Math.floor(10000 + Math.random() * 90000)}`;
    const newAppointment: Appointment = {
      ...apptData,
      id: newId,
      createdAt: new Date().toISOString(),
      meetingLink: apptData.mode === 'telehealth' ? `https://meet.aurevia.health/room/${newId}` : undefined
    };

    setAppointments((prev) => [newAppointment, ...prev]);

    // Push notification
    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title: 'Appointment Confirmed',
      description: `Your consultation with ${newAppointment.doctorName} for ${newAppointment.date} at ${newAppointment.timeSlot} is confirmed.`,
      timestamp: 'Just now',
      read: false,
      type: 'appointment'
    };
    setNotifications((prev) => [newNotif, ...prev]);

    addToast({
      type: 'success',
      title: 'Appointment Booked Successfully',
      message: `Confirmed with ${newAppointment.doctorName} for ${newAppointment.date} at ${newAppointment.timeSlot}.`
    });

    return newAppointment;
  };

  const cancelAppointment = (id: string) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: 'cancelled' as const } : a))
    );
    addToast({
      type: 'warning',
      title: 'Appointment Cancelled',
      message: `Appointment ${id} has been marked as cancelled.`
    });
  };

  const updateAppointmentStatus = (id: string, status: Appointment['status']) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
    addToast({
      type: 'info',
      title: 'Status Updated',
      message: `Appointment ${id} status changed to ${status.replace('_', ' ').toUpperCase()}.`
    });
  };

  const requestPrescriptionRefill = (id: string) => {
    setPrescriptions((prev) =>
      prev.map((p) => {
        if (p.id === id && p.refillsRemaining > 0) {
          return { ...p, refillsRemaining: p.refillsRemaining - 1 };
        }
        return p;
      })
    );
    addToast({
      type: 'success',
      title: 'Refill Request Transmitted',
      message: 'Your electronic prescription refill has been sent to your preferred pharmacy.'
    });
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllNotificationsAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    addToast({
      type: 'info',
      title: 'Notifications Cleared',
      message: 'All notifications marked as read.'
    });
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        doctors,
        departments,
        services,
        appointments,
        vitals,
        prescriptions,
        labResults,
        notifications,
        favoriteDoctorIds,
        toggleFavoriteDoctor,
        isBookingOpen,
        bookingDoctor,
        bookingPreselectedMode,
        openBooking,
        closeBooking,
        addAppointment,
        cancelAppointment,
        updateAppointmentStatus,
        selectedDoctorProfile,
        openDoctorProfile,
        closeDoctorProfile,
        activeTelehealthAppointment,
        openTelehealthRoom,
        closeTelehealthRoom,
        isCommandPaletteOpen,
        setIsCommandPaletteOpen,
        globalSearchQuery,
        setGlobalSearchQuery,
        selectedSpecialtyFilter,
        setSelectedSpecialtyFilter,
        toasts,
        addToast,
        removeToast,
        requestPrescriptionRefill,
        markNotificationAsRead,
        markAllNotificationsAsRead
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
