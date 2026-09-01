import { Appointment, ContactMessage, Doctor, Department, Service } from '../types';
import { doctorsData } from '../data/doctorsData';
import { departmentsData } from '../data/departmentsData';
import { servicesData } from '../data/servicesData';

const APPOINTMENTS_KEY = 'medicio_appointments';
const CONTACT_MESSAGES_KEY = 'medicio_contact_messages';
const NEWSLETTER_KEY = 'medicio_newsletter_subscribers';

// Initial preloaded demo appointment so patient portal has immediate interactive demonstration value
const INITIAL_DEMO_APPOINTMENTS: Appointment[] = [
  {
    id: 'appt-demo-1',
    appointmentCode: 'MC-2026-0819-44',
    patientName: 'Alex Morgan',
    patientEmail: 'alex.morgan@example.com',
    patientPhone: '(617) 555-0182',
    patientDob: '1988-04-12',
    patientGender: 'Non-Binary',
    departmentId: 'dept-cardio',
    departmentName: 'Cardiology & Vascular',
    doctorId: 'doc-elena-vance',
    doctorName: 'Dr. Elena Vance',
    doctorSpecialty: 'Interventional Cardiology & Electrophysiology',
    doctorAvatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    date: '2026-08-19',
    timeSlot: '09:30 AM',
    visitType: 'In-Person Consultation',
    reason: 'Annual cardiac stress assessment and follow-up on resting heart rate variations.',
    notes: 'Please bring past ECG records from previous clinic.',
    status: 'Upcoming',
    createdAt: '2026-08-12T14:30:00.000Z'
  },
  {
    id: 'appt-demo-2',
    appointmentCode: 'MC-2026-0720-11',
    patientName: 'Alex Morgan',
    patientEmail: 'alex.morgan@example.com',
    patientPhone: '(617) 555-0182',
    patientDob: '1988-04-12',
    patientGender: 'Non-Binary',
    departmentId: 'dept-genmed',
    departmentName: 'Internal & General Medicine',
    doctorId: 'doc-david-kim',
    doctorName: 'Dr. David Kim',
    doctorSpecialty: 'Comprehensive Primary Care & Metabolic Health',
    doctorAvatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    date: '2026-07-20',
    timeSlot: '10:30 AM',
    visitType: 'Telehealth Video Call',
    reason: 'Routine quarterly metabolic blood work review and dietary consultation.',
    notes: 'HbA1c levels stabilized successfully.',
    status: 'Completed',
    createdAt: '2026-07-10T10:00:00.000Z'
  }
];

export const storageService = {
  // Appointments CRUD
  getAppointments(): Appointment[] {
    try {
      const data = localStorage.getItem(APPOINTMENTS_KEY);
      if (!data) {
        localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(INITIAL_DEMO_APPOINTMENTS));
        return INITIAL_DEMO_APPOINTMENTS;
      }
      return JSON.parse(data) as Appointment[];
    } catch (e) {
      console.warn('LocalStorage error loading appointments:', e);
      return INITIAL_DEMO_APPOINTMENTS;
    }
  },

  saveAppointment(appointment: Appointment): Appointment {
    const list = this.getAppointments();
    const updated = [appointment, ...list];
    try {
      localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('LocalStorage error saving appointment:', e);
    }
    return appointment;
  },

  rescheduleAppointment(id: string, newDate: string, newTimeSlot: string): boolean {
    const list = this.getAppointments();
    const index = list.findIndex(a => a.id === id);
    if (index === -1) return false;
    list[index] = {
      ...list[index],
      date: newDate,
      timeSlot: newTimeSlot,
      status: 'Upcoming'
    };
    try {
      localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(list));
      return true;
    } catch (e) {
      console.error('LocalStorage error updating appointment:', e);
      return false;
    }
  },

  cancelAppointment(id: string, cancellationReason?: string): boolean {
    const list = this.getAppointments();
    const index = list.findIndex(a => a.id === id);
    if (index === -1) return false;
    list[index] = {
      ...list[index],
      status: 'Cancelled',
      cancellationReason: cancellationReason || 'Patient requested cancellation.'
    };
    try {
      localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(list));
      return true;
    } catch (e) {
      console.error('LocalStorage error cancelling appointment:', e);
      return false;
    }
  },

  // Contact Inquiries
  getContactMessages(): ContactMessage[] {
    try {
      const data = localStorage.getItem(CONTACT_MESSAGES_KEY);
      return data ? (JSON.parse(data) as ContactMessage[]) : [];
    } catch (e) {
      console.warn('LocalStorage error loading messages:', e);
      return [];
    }
  },

  saveContactMessage(message: Partial<ContactMessage> & { name: string; email: string; phone: string; department: string; message: string }): ContactMessage {
    const list = this.getContactMessages();
    const fullMessage: ContactMessage = {
      id: message.id || 'msg-' + Date.now(),
      ticketId: message.ticketId || 'TKT-' + Math.floor(100000 + Math.random() * 900000),
      name: message.name,
      email: message.email,
      phone: message.phone,
      department: message.department,
      subject: message.subject || 'Clinical Inquiry',
      priority: message.priority || 'Routine',
      message: message.message,
      createdAt: message.createdAt || new Date().toISOString(),
    };
    const updated = [fullMessage, ...list];
    try {
      localStorage.setItem(CONTACT_MESSAGES_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('LocalStorage error saving message:', e);
    }
    return fullMessage;
  },

  // Newsletter Subscribers
  subscribeNewsletter(email: string): boolean {
    try {
      const existing = localStorage.getItem(NEWSLETTER_KEY);
      const list: string[] = existing ? JSON.parse(existing) : [];
      if (!list.includes(email)) {
        list.push(email);
        localStorage.setItem(NEWSLETTER_KEY, JSON.stringify(list));
      }
      return true;
    } catch (e) {
      console.error('LocalStorage error saving newsletter subscriber:', e);
      return true;
    }
  },

  // Frontend API Simulation Services (Ready for future Backend integration)
  async fetchDoctors(): Promise<Doctor[]> {
    return Promise.resolve(doctorsData);
  },

  async fetchDoctorById(id: string): Promise<Doctor | undefined> {
    return Promise.resolve(doctorsData.find(d => d.id === id));
  },

  async fetchDepartments(): Promise<Department[]> {
    return Promise.resolve(departmentsData);
  },

  async fetchServices(): Promise<Service[]> {
    return Promise.resolve(servicesData);
  }
};
