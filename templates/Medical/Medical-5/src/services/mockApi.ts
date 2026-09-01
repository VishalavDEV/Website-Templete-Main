import {
  Doctor,
  Specialty,
  Service,
  Article,
  Appointment,
  MedicalReport,
  Prescription,
  TimelineItem,
  LocationClinic,
  PatientNotification,
  PatientMessage,
  PatientProfile,
  ContactSubmission,
} from '../types';

import specialtiesData from '../data/specialties.json';
import doctorsData from '../data/doctors.json';
import servicesData from '../data/services.json';
import articlesData from '../data/articles.json';
import locationsData from '../data/locations.json';
import reportsData from '../data/reports.json';
import prescriptionsData from '../data/prescriptions.json';
import timelineData from '../data/timeline.json';
import initialAppointmentsData from '../data/initialAppointments.json';
import initialNotificationsData from '../data/initialNotifications.json';

const STORAGE_KEYS = {
  APPOINTMENTS: 'aura_health_appointments_v1',
  NOTIFICATIONS: 'aura_health_notifications_v1',
  SAVED_ARTICLES: 'aura_health_saved_articles_v1',
  PROFILE: 'aura_health_patient_profile_v1',
  CONTACT_SUBMISSIONS: 'aura_health_contact_submissions_v1',
  PRESCRIPTIONS: 'aura_health_prescriptions_v1',
  MESSAGES: 'aura_health_messages_v1',
};

const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

const defaultProfile: PatientProfile = {
  name: 'Alexander Claire',
  email: 'alexander.claire@example.com',
  phone: '+1 (555) 234-8901',
  dob: '1988-11-14',
  bloodGroup: 'O+ Positive',
  gender: 'Male',
  allergies: ['Penicillin (Mild urticaria)', 'Latex'],
  emergencyContact: {
    name: 'Elena Claire',
    relation: 'Spouse',
    phone: '+1 (555) 234-8902',
  },
  insuranceProvider: 'Blue Cross Blue Shield Platinum PPO',
  policyNumber: 'BCBS-9948201-ALX',
};

const defaultMessages: PatientMessage[] = [
  {
    id: 'msg-1',
    senderName: 'Clinical Coordinator Sarah',
    senderRole: 'Registered Nurse, West Wing',
    senderAvatar: 'https://images.unsplash.com/photo-1594824813590-78a7c2937748?auto=format&fit=crop&w=120&q=80',
    timestamp: 'Yesterday at 3:15 PM',
    text: 'Hello Alexander, Dr. Raman has reviewed your recent resting ECG. Everything looks optimal. Please remember to stay well-hydrated before your visit next week.',
    isDoctor: true,
  },
  {
    id: 'msg-2',
    senderName: 'Alexander Claire',
    senderRole: 'Patient',
    senderAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    timestamp: 'Yesterday at 4:30 PM',
    text: 'Thank you Sarah! Should I continue my current Vitamin D dosage prior to the appointment?',
    isDoctor: false,
  },
  {
    id: 'msg-3',
    senderName: 'Dr. Maya Raman',
    senderRole: 'Consultant Cardiologist',
    senderAvatar: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=120&q=80',
    timestamp: 'Today at 9:10 AM',
    text: 'Yes Alexander, please maintain your 2,000 IU daily dose as prescribed. Looking forward to our discussion.',
    isDoctor: true,
  },
];

export const mockApi = {
  async getSpecialties(): Promise<Specialty[]> {
    await delay(180);
    return specialtiesData as Specialty[];
  },

  async getDoctors(): Promise<Doctor[]> {
    await delay(220);
    return doctorsData as Doctor[];
  },

  async getDoctor(id: string): Promise<Doctor | null> {
    await delay(150);
    const doc = (doctorsData as Doctor[]).find((d) => d.id === id);
    return doc || null;
  },

  async searchDoctors(params: {
    query?: string;
    specialtyId?: string;
    locationId?: string;
    experienceMin?: number;
    availabilityOnly?: boolean;
    gender?: 'all' | 'female' | 'male';
    consultationType?: 'all' | 'in-person' | 'video';
  }): Promise<Doctor[]> {
    await delay(250);
    let results = doctorsData as Doctor[];

    if (params.query && params.query.trim()) {
      const q = params.query.toLowerCase().trim();
      results = results.filter(
        (doc) =>
          doc.name.toLowerCase().includes(q) ||
          doc.specialtyName.toLowerCase().includes(q) ||
          doc.title.toLowerCase().includes(q) ||
          doc.bio.toLowerCase().includes(q)
      );
    }

    if (params.specialtyId && params.specialtyId !== 'all') {
      results = results.filter((doc) => doc.specialtyId === params.specialtyId);
    }

    if (params.locationId && params.locationId !== 'all') {
      results = results.filter((doc) => doc.locationId === params.locationId);
    }

    if (params.experienceMin && params.experienceMin > 0) {
      results = results.filter((doc) => doc.experienceYears >= params.experienceMin!);
    }

    if (params.availabilityOnly) {
      results = results.filter((doc) => doc.isAvailableToday);
    }

    if (params.gender && params.gender !== 'all') {
      results = results.filter((doc) => doc.gender === params.gender);
    }

    if (params.consultationType && params.consultationType !== 'all') {
      results = results.filter((doc) =>
        doc.consultationTypes.includes(params.consultationType as any)
      );
    }

    return results;
  },

  async getServices(): Promise<Service[]> {
    await delay(180);
    return servicesData as Service[];
  },

  async getArticles(): Promise<Article[]> {
    await delay(180);
    return articlesData as Article[];
  },

  async getArticle(id: string): Promise<Article | null> {
    await delay(150);
    const art = (articlesData as Article[]).find((a) => a.id === id);
    return art || null;
  },

  async getLocations(): Promise<LocationClinic[]> {
    await delay(180);
    return locationsData as LocationClinic[];
  },

  async getReports(): Promise<MedicalReport[]> {
    await delay(200);
    return reportsData as MedicalReport[];
  },

  async getReport(id: string): Promise<MedicalReport | null> {
    await delay(150);
    const rep = (reportsData as MedicalReport[]).find((r) => r.id === id);
    return rep || null;
  },

  async getTimeline(): Promise<TimelineItem[]> {
    await delay(180);
    return timelineData as TimelineItem[];
  },

  async getAppointments(): Promise<Appointment[]> {
    await delay(220);
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.APPOINTMENTS);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    return initialAppointmentsData as Appointment[];
  },

  async createAppointment(
    data: Omit<Appointment, 'id' | 'createdAt' | 'status'>
  ): Promise<Appointment> {
    await delay(450);
    const newAppointment: Appointment = {
      ...data,
      id: `APT-${Math.floor(10000 + Math.random() * 90000)}`,
      createdAt: new Date().toISOString(),
      status: 'confirmed',
      meetingLink:
        data.consultationType === 'video'
          ? `https://telehealth.auramedical.internal/room/apt-${Math.floor(
              10000 + Math.random() * 90000
            )}`
          : undefined,
      clinicRoom:
        data.consultationType === 'in-person' ? 'Suite 208, Consultation Wing' : undefined,
    };

    const current = await this.getAppointments();
    const updated = [newAppointment, ...current];
    try {
      localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(updated));
    } catch (e) {
      console.warn('localStorage error', e);
    }

    // Add a notification for the patient
    await this.addNotification({
      title: 'Appointment Confirmed',
      message: `Your appointment with ${newAppointment.doctorName} on ${newAppointment.date} at ${newAppointment.time} is confirmed.`,
      type: 'appointment',
      actionTarget: { view: 'portal', id: newAppointment.id },
    });

    return newAppointment;
  },

  async rescheduleAppointment(
    id: string,
    newDate: string,
    newTime: string
  ): Promise<Appointment | null> {
    await delay(400);
    const current = await this.getAppointments();
    const index = current.findIndex((a) => a.id === id);
    if (index === -1) return null;

    current[index] = {
      ...current[index],
      date: newDate,
      time: newTime,
      status: 'rescheduled',
    };

    try {
      localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(current));
    } catch (e) {
      console.warn('localStorage error', e);
    }

    await this.addNotification({
      title: 'Appointment Rescheduled',
      message: `Your appointment with ${current[index].doctorName} is moved to ${newDate} at ${newTime}.`,
      type: 'appointment',
      actionTarget: { view: 'portal', id },
    });

    return current[index];
  },

  async cancelAppointment(id: string, reason?: string): Promise<boolean> {
    await delay(350);
    const current = await this.getAppointments();
    const index = current.findIndex((a) => a.id === id);
    if (index === -1) return false;

    current[index] = {
      ...current[index],
      status: 'cancelled',
      notes: reason ? `Cancellation reason: ${reason}` : current[index].notes,
    };

    try {
      localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(current));
    } catch (e) {
      console.warn('localStorage error', e);
    }

    await this.addNotification({
      title: 'Appointment Cancelled',
      message: `Your booking ${id} with ${current[index].doctorName} has been cancelled.`,
      type: 'appointment',
      actionTarget: { view: 'portal' },
    });

    return true;
  },

  async getPrescriptions(): Promise<Prescription[]> {
    await delay(200);
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.PRESCRIPTIONS);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    return prescriptionsData as Prescription[];
  },

  async refillPrescription(id: string): Promise<Prescription | null> {
    await delay(400);
    const list = await this.getPrescriptions();
    const index = list.findIndex((p) => p.id === id);
    if (index === -1) return null;

    if (list[index].refillsRemaining > 0) {
      list[index] = {
        ...list[index],
        status: 'Refill Requested',
        refillsRemaining: list[index].refillsRemaining - 1,
        pharmacyNote: 'Refill requested — Aura Pharmacy is preparing order #RX-REFILL',
      };
    }

    try {
      localStorage.setItem(STORAGE_KEYS.PRESCRIPTIONS, JSON.stringify(list));
    } catch (e) {
      console.warn('localStorage error', e);
    }

    await this.addNotification({
      title: 'Refill Request Transmitted',
      message: `Prescription refill request for ${list[index].medicationName} received by the pharmacy.`,
      type: 'prescription',
      actionTarget: { view: 'portal', id },
    });

    return list[index];
  },

  async getPatientProfile(): Promise<PatientProfile> {
    await delay(180);
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.PROFILE);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    return defaultProfile;
  },

  async updatePatientProfile(updated: PatientProfile): Promise<PatientProfile> {
    await delay(350);
    try {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(updated));
    } catch (e) {
      console.warn('localStorage error', e);
    }
    return updated;
  },

  async getNotifications(): Promise<PatientNotification[]> {
    await delay(150);
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    return initialNotificationsData as PatientNotification[];
  },

  async addNotification(
    data: Omit<PatientNotification, 'id' | 'time' | 'read'>
  ): Promise<PatientNotification> {
    const list = await this.getNotifications();
    const newNotif: PatientNotification = {
      ...data,
      id: `notif-${Date.now()}`,
      time: 'Just now',
      read: false,
    };
    const updated = [newNotif, ...list];
    try {
      localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(updated));
    } catch (e) {
      console.warn('localStorage error', e);
    }
    return newNotif;
  },

  async markNotificationRead(id: string): Promise<PatientNotification[]> {
    const list = await this.getNotifications();
    const updated = list.map((n) => (n.id === id ? { ...n, read: true } : n));
    try {
      localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(updated));
    } catch (e) {
      console.warn('localStorage error', e);
    }
    return updated;
  },

  async clearAllNotifications(): Promise<void> {
    try {
      localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify([]));
    } catch (e) {
      console.warn('localStorage error', e);
    }
  },

  async getSavedArticleIds(): Promise<string[]> {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SAVED_ARTICLES);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    return ['art-heart-health'];
  },

  async toggleSaveArticle(articleId: string): Promise<string[]> {
    const list = await this.getSavedArticleIds();
    let updated: string[];
    if (list.includes(articleId)) {
      updated = list.filter((id) => id !== articleId);
    } else {
      updated = [...list, articleId];
    }
    try {
      localStorage.setItem(STORAGE_KEYS.SAVED_ARTICLES, JSON.stringify(updated));
    } catch (e) {
      console.warn('localStorage error', e);
    }
    return updated;
  },

  async submitContactForm(
    data: Omit<ContactSubmission, 'id' | 'submittedAt'>
  ): Promise<ContactSubmission> {
    await delay(500);
    const submission: ContactSubmission = {
      ...data,
      id: `cont-${Date.now()}`,
      submittedAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(
        localStorage.getItem(STORAGE_KEYS.CONTACT_SUBMISSIONS) || '[]'
      );
      existing.push(submission);
      localStorage.setItem(STORAGE_KEYS.CONTACT_SUBMISSIONS, JSON.stringify(existing));
    } catch (e) {
      console.warn('localStorage error', e);
    }

    return submission;
  },

  async getMessages(): Promise<PatientMessage[]> {
    await delay(180);
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.MESSAGES);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    return defaultMessages;
  },

  async sendMessage(text: string): Promise<PatientMessage[]> {
    await delay(300);
    const current = await this.getMessages();
    const newMsg: PatientMessage = {
      id: `msg-${Date.now()}`,
      senderName: 'Alexander Claire',
      senderRole: 'Patient',
      senderAvatar:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
      timestamp: 'Just now',
      text,
      isDoctor: false,
    };
    const updated = [...current, newMsg];
    try {
      localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(updated));
    } catch (e) {
      console.warn('localStorage error', e);
    }
    return updated;
  },
};
