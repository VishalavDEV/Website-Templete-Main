import {
  User,
  Patient,
  Doctor,
  Department,
  Service,
  Appointment,
  DoctorAvailability,
  Testimonial,
  GalleryItem,
  FAQ,
  ContactMessage,
  Notification,
  MedicalDocument,
  HospitalSettings,
  DashboardStats,
  AppointmentStatus,
  UserRole,
  Prescription,
  Invoice,
  MedicalRecord,
  InvoiceStatus
} from '../types';
import {
  INITIAL_DEPARTMENTS,
  INITIAL_SERVICES,
  INITIAL_DOCTORS,
  INITIAL_AVAILABILITIES,
  INITIAL_TESTIMONIALS,
  INITIAL_FAQS,
  INITIAL_GALLERY,
  DEMO_USERS,
  INITIAL_PATIENTS,
  INITIAL_APPOINTMENTS,
  INITIAL_DOCUMENTS,
  INITIAL_NOTIFICATIONS,
  INITIAL_CONTACT_MESSAGES,
  INITIAL_HOSPITAL_SETTINGS,
  INITIAL_PRESCRIPTIONS,
  INITIAL_INVOICES,
  INITIAL_MEDICAL_RECORDS
} from '../data/seedData';

// Storage keys
const STORAGE_KEYS = {
  USERS: 'medipulse_users',
  PATIENTS: 'medipulse_patients',
  DOCTORS: 'medipulse_doctors',
  DEPARTMENTS: 'medipulse_departments',
  SERVICES: 'medipulse_services',
  APPOINTMENTS: 'medipulse_appointments',
  AVAILABILITY: 'medipulse_availability',
  TESTIMONIALS: 'medipulse_testimonials',
  FAQS: 'medipulse_faqs',
  GALLERY: 'medipulse_gallery',
  DOCUMENTS: 'medipulse_documents',
  NOTIFICATIONS: 'medipulse_notifications',
  CONTACT_MESSAGES: 'medipulse_contact_messages',
  SETTINGS: 'medipulse_settings',
  PRESCRIPTIONS: 'medipulse_prescriptions',
  INVOICES: 'medipulse_invoices',
  MEDICAL_RECORDS: 'medipulse_medical_records',
  AUTH_TOKEN: 'medipulse_auth_token',
  CURRENT_USER: 'medipulse_current_user'
};

// Generic storage helper
function getStored<T>(key: string, initial: T): T {
  try {
    const item = localStorage.getItem(key);
    if (!item) {
      localStorage.setItem(key, JSON.stringify(initial));
      return initial;
    }
    // Refresh storage if cached data contains legacy prices outside 1500-2000
    if (typeof item === 'string' && (item.includes('$') || item.includes('₹1,500 - ₹5,000') || item.includes('₹1,500 - ₹6,000') || item.includes('consultation_fee":1000') || item.includes('consultation_fee":800'))) {
      localStorage.setItem(key, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(item);
  } catch (err) {
    console.error(`Error reading ${key} from storage:`, err);
    return initial;
  }
}

function setStored<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error(`Error writing ${key} to storage:`, err);
  }
}

// Simulated network delay helper
const delay = (ms = 150) => new Promise(res => setTimeout(res, ms));

export const ApiService = {
  // ==========================================
  // AUTHENTICATION & USERS
  // ==========================================
  async login(email: string, password_unused?: string): Promise<{ token: string; user: User; patient?: Patient; doctor?: Doctor }> {
    await delay(200);
    const users = getStored<User[]>(STORAGE_KEYS.USERS, DEMO_USERS);
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      throw new Error('Invalid email or password. Please check your credentials or use the demo quick-login buttons.');
    }

    const token = `jwt_mock_${user.user_id}_${Date.now()}`;
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));

    let patient: Patient | undefined;
    let doctor: Doctor | undefined;

    if (user.role === 'patient') {
      const patients = getStored<Patient[]>(STORAGE_KEYS.PATIENTS, INITIAL_PATIENTS);
      patient = patients.find(p => p.user_id === user.user_id) || {
        patient_id: `pat-${user.user_id}`,
        user_id: user.user_id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        dob: '1995-01-01',
        gender: 'Other',
        address: '742 Evergreen Terrace'
      };
    } else if (user.role === 'doctor') {
      const doctors = getStored<Doctor[]>(STORAGE_KEYS.DOCTORS, INITIAL_DOCTORS);
      doctor = doctors.find(d => d.user_id === user.user_id) || doctors[0];
    }

    return { token, user, patient, doctor };
  },

  async registerPatient(data: {
    name: string;
    email: string;
    phone: string;
    dob: string;
    gender: 'Male' | 'Female' | 'Other' | string;
    address: string;
    blood_group?: string;
    emergency_contact?: string;
    allergies?: string;
  }): Promise<{ token: string; user: User; patient: Patient }> {
    await delay(300);
    const users = getStored<User[]>(STORAGE_KEYS.USERS, DEMO_USERS);
    const existing = users.find(u => u.email.toLowerCase() === data.email.toLowerCase());
    if (existing) {
      throw new Error('An account with this email address already exists. Please login instead.');
    }

    const userId = `user-pat-${Date.now()}`;
    const patientId = `pat-${Date.now()}`;

    const newUser: User = {
      user_id: userId,
      name: data.name,
      email: data.email,
      role: UserRole.PATIENT,
      phone: data.phone,
      avatar_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(data.name)}`,
      created_at: new Date().toISOString().split('T')[0]
    };

    const newPatient: Patient = {
      patient_id: patientId,
      user_id: userId,
      name: data.name,
      email: data.email,
      phone: data.phone,
      dob: data.dob,
      gender: data.gender,
      address: data.address,
      blood_group: data.blood_group || 'O+',
      emergency_contact: data.emergency_contact || '',
      allergies: data.allergies ? data.allergies.split(',').map(s => s.trim()) : [],
      medical_notes: 'Newly registered patient.'
    };

    users.push(newUser);
    setStored(STORAGE_KEYS.USERS, users);

    const patients = getStored<Patient[]>(STORAGE_KEYS.PATIENTS, INITIAL_PATIENTS);
    patients.push(newPatient);
    setStored(STORAGE_KEYS.PATIENTS, patients);

    const token = `jwt_mock_${newUser.user_id}_${Date.now()}`;
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(newUser));

    return { token, user: newUser, patient: newPatient };
  },

  async getCurrentUser(): Promise<User | null> {
    const userStr = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    if (!userStr) return null;
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  },

  async logout(): Promise<void> {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  },

  async updateProfile(userId: string, data: Partial<User & Patient & Doctor>): Promise<{ user: User; patient?: Patient; doctor?: Doctor }> {
    await delay(200);
    const users = getStored<User[]>(STORAGE_KEYS.USERS, DEMO_USERS);
    const uIdx = users.findIndex(u => u.user_id === userId);
    if (uIdx === -1) throw new Error('User not found');

    const updatedUser = { ...users[uIdx], ...data };
    users[uIdx] = updatedUser;
    setStored(STORAGE_KEYS.USERS, users);
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(updatedUser));

    let patient: Patient | undefined;
    let doctor: Doctor | undefined;

    if (updatedUser.role === 'patient') {
      const patients = getStored<Patient[]>(STORAGE_KEYS.PATIENTS, INITIAL_PATIENTS);
      const pIdx = patients.findIndex(p => p.user_id === userId);
      if (pIdx !== -1) {
        patients[pIdx] = { ...patients[pIdx], ...data, name: updatedUser.name, email: updatedUser.email, phone: updatedUser.phone };
        patient = patients[pIdx];
        setStored(STORAGE_KEYS.PATIENTS, patients);
      }
    } else if (updatedUser.role === 'doctor') {
      const doctors = getStored<Doctor[]>(STORAGE_KEYS.DOCTORS, INITIAL_DOCTORS);
      const dIdx = doctors.findIndex(d => d.user_id === userId);
      if (dIdx !== -1) {
        doctors[dIdx] = { ...doctors[dIdx], ...data, name: updatedUser.name };
        doctor = doctors[dIdx];
        setStored(STORAGE_KEYS.DOCTORS, doctors);
      }
    }

    return { user: updatedUser, patient, doctor };
  },

  // ==========================================
  // DEPARTMENTS
  // ==========================================
  async getDepartments(): Promise<Department[]> {
    await delay(100);
    let depts = getStored<Department[]>(STORAGE_KEYS.DEPARTMENTS, INITIAL_DEPARTMENTS);
    let updated = false;
    const initialMap = new Map(INITIAL_DEPARTMENTS.map(d => [d.department_id, d]));
    depts = depts.map(d => {
      const seed = initialMap.get(d.department_id);
      let newItem = { ...d };
      if (seed?.active_doctors_count !== undefined && d.active_doctors_count !== seed.active_doctors_count) {
        newItem.active_doctors_count = seed.active_doctors_count;
        updated = true;
      }
      if (!newItem.image_url && seed?.image_url) {
        newItem.image_url = seed.image_url;
        updated = true;
      }
      return newItem;
    });
    if (updated) {
      setStored(STORAGE_KEYS.DEPARTMENTS, depts);
    }
    return depts;
  },

  async getDepartmentById(id: string): Promise<Department | undefined> {
    const depts = await this.getDepartments();
    return depts.find(d => d.department_id === id);
  },

  async saveDepartment(department: Partial<Department>): Promise<Department> {
    return this.createDepartment(department);
  },

  async createDepartment(department: Partial<Department>): Promise<Department> {
    await delay(200);
    const depts = getStored<Department[]>(STORAGE_KEYS.DEPARTMENTS, INITIAL_DEPARTMENTS);
    const newDept: Department = {
      department_id: `dept-${Date.now()}`,
      name: department.name || 'New Clinical Department',
      description: department.description || '',
      icon: department.icon || 'HeartPulse',
      head_doctor_name: department.head_doctor_name || 'Dr. Specialist, MD',
      contact_extension: department.contact_extension || 'Ext. 400',
      bed_capacity: department.bed_capacity || 30,
      active_doctors_count: 1,
      image_url: department.image_url || 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
    };
    depts.push(newDept);
    setStored(STORAGE_KEYS.DEPARTMENTS, depts);
    return newDept;
  },

  async updateDepartment(departmentId: string, data: Partial<Department>): Promise<Department> {
    await delay(200);
    const depts = getStored<Department[]>(STORAGE_KEYS.DEPARTMENTS, INITIAL_DEPARTMENTS);
    const idx = depts.findIndex(d => d.department_id === departmentId);
    if (idx === -1) throw new Error('Department not found');

    depts[idx] = { ...depts[idx], ...data };
    setStored(STORAGE_KEYS.DEPARTMENTS, depts);
    return depts[idx];
  },

  async deleteDepartment(id: string): Promise<void> {
    await delay(200);
    let depts = getStored<Department[]>(STORAGE_KEYS.DEPARTMENTS, INITIAL_DEPARTMENTS);
    depts = depts.filter(d => d.department_id !== id);
    setStored(STORAGE_KEYS.DEPARTMENTS, depts);
  },

  // ==========================================
  // SERVICES
  // ==========================================
  async getServices(departmentId?: string): Promise<Service[]> {
    await delay(100);
    let services = getStored<Service[]>(STORAGE_KEYS.SERVICES, INITIAL_SERVICES);
    let updated = false;
    const initialMap = new Map(INITIAL_SERVICES.map(s => [s.service_id, s]));
    services = services.map(s => {
      const seed = initialMap.get(s.service_id);
      let newItem = { ...s };
      if (!newItem.image_url && seed?.image_url) {
        newItem.image_url = seed.image_url;
        updated = true;
      }
      return newItem;
    });
    if (updated) {
      setStored(STORAGE_KEYS.SERVICES, services);
    }
    if (departmentId) {
      return services.filter(s => s.department_id === departmentId);
    }
    return services;
  },

  async saveService(service: Partial<Service>): Promise<Service> {
    await delay(200);
    const services = getStored<Service[]>(STORAGE_KEYS.SERVICES, INITIAL_SERVICES);
    if (service.service_id) {
      const idx = services.findIndex(s => s.service_id === service.service_id);
      if (idx !== -1) {
        services[idx] = { ...services[idx], ...service } as Service;
        setStored(STORAGE_KEYS.SERVICES, services);
        return services[idx];
      }
    }
    const newService: Service = {
      service_id: `srv-${Date.now()}`,
      name: service.name || 'New Healthcare Service',
      category: service.category || 'Specialist Care',
      description: service.description || '',
      department_id: service.department_id || 'dept-1',
      department_name: service.department_name || 'Cardiology & Heart Institute',
      price_range: service.price_range || '₹1,500 - ₹2,000',
      duration: service.duration || '45 Mins',
      preparation_instructions: service.preparation_instructions || 'Standard medical check preparation.',
      key_features: service.key_features || ['Comprehensive Analysis', 'Specialist Consultation'],
      icon: service.icon || 'Activity'
    };
    services.push(newService);
    setStored(STORAGE_KEYS.SERVICES, services);
    return newService;
  },

  async deleteService(id: string): Promise<void> {
    await delay(200);
    let services = getStored<Service[]>(STORAGE_KEYS.SERVICES, INITIAL_SERVICES);
    services = services.filter(s => s.service_id !== id);
    setStored(STORAGE_KEYS.SERVICES, services);
  },

  // ==========================================
  // DOCTORS & AVAILABILITY
  // ==========================================
  async getDoctors(filters?: {
    search?: string;
    department_id?: string;
    specialization?: string;
    available_today?: boolean;
  }): Promise<Doctor[]> {
    await delay(100);
    let doctors = getStored<Doctor[]>(STORAGE_KEYS.DOCTORS, INITIAL_DOCTORS);

    // Sync/repair legacy cached doctors & images to ensure all 22 doctors across 6 departments exist
    if (doctors.length < INITIAL_DOCTORS.length) {
      doctors = INITIAL_DOCTORS;
      setStored(STORAGE_KEYS.DOCTORS, doctors);
    } else {
      let updated = false;
      const initialMap = new Map(INITIAL_DOCTORS.map(d => [d.doctor_id, d.photo_url]));
      doctors = doctors.map(d => {
        const freshPhoto = initialMap.get(d.doctor_id);
        if (freshPhoto && (d.photo_url !== freshPhoto || d.photo_url.includes('1594824813566') || d.photo_url.includes('651008376811') || d.photo_url.startsWith('/images/'))) {
          updated = true;
          return { ...d, photo_url: freshPhoto };
        }
        return d;
      });
      if (updated) {
        setStored(STORAGE_KEYS.DOCTORS, doctors);
      }
    }

    if (filters) {
      if (filters.search) {
        const q = filters.search.toLowerCase();
        doctors = doctors.filter(
          d =>
            d.name.toLowerCase().includes(q) ||
            d.specialization.toLowerCase().includes(q) ||
            (d.department_name && d.department_name.toLowerCase().includes(q))
        );
      }
      if (filters.department_id) {
        doctors = doctors.filter(d => d.department_id === filters.department_id);
      }
      if (filters.specialization) {
        doctors = doctors.filter(d => d.specialization.toLowerCase().includes(filters.specialization!.toLowerCase()));
      }
      if (filters.available_today) {
        doctors = doctors.filter(d => d.available_today);
      }
    }
    return doctors;
  },

  async getDoctorById(id: string): Promise<Doctor | undefined> {
    const doctors = await this.getDoctors();
    return doctors.find(d => d.doctor_id === id);
  },

  async createDoctor(doctorData: Partial<Doctor>): Promise<Doctor> {
    await delay(200);
    const doctors = getStored<Doctor[]>(STORAGE_KEYS.DOCTORS, INITIAL_DOCTORS);
    const depts = getStored<Department[]>(STORAGE_KEYS.DEPARTMENTS, INITIAL_DEPARTMENTS);
    const targetDept = depts.find(d => d.department_id === doctorData.department_id);

    const newDocId = `doc-${Date.now()}`;
    const newDoc: Doctor = {
      doctor_id: newDocId,
      user_id: `user-${newDocId}`,
      name: doctorData.name || 'Dr. Specialist',
      email: doctorData.email || 'doctor@qurenexa.org',
      phone: doctorData.phone || '+91 98765 43210',
      specialization: doctorData.specialization || 'Clinical Specialist',
      qualification: doctorData.qualification || 'MD, Board Certified',
      experience_years: doctorData.experience_years || 5,
      department_id: doctorData.department_id || 'dept-1',
      department_name: targetDept ? targetDept.name : 'Cardiology & Heart Institute',
      bio: doctorData.bio || 'Dedicated medical professional committed to compassionate patient care.',
      photo_url: doctorData.photo_url || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
      consultation_fee: doctorData.consultation_fee || 1500,
      rating: 5.0,
      review_count: 0,
      available_today: true,
      languages: doctorData.languages || ['English'],
      room_number: doctorData.room_number || 'Room 101'
    };

    doctors.push(newDoc);
    setStored(STORAGE_KEYS.DOCTORS, doctors);

    // Add default availability
    const availabilities = getStored<DoctorAvailability[]>(STORAGE_KEYS.AVAILABILITY, INITIAL_AVAILABILITIES);
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    days.forEach(day => {
      availabilities.push({
        availability_id: `av-${newDocId}-${day.toLowerCase()}`,
        id: `av-${newDocId}-${day.toLowerCase()}`,
        doctor_id: newDocId,
        day_of_week: day,
        start_time: '09:00',
        end_time: '17:00',
        slot_duration_minutes: 30,
        is_active: true
      });
    });
    setStored(STORAGE_KEYS.AVAILABILITY, availabilities);

    return newDoc;
  },

  async updateDoctor(doctorId: string, data: Partial<Doctor>): Promise<Doctor> {
    await delay(200);
    const doctors = getStored<Doctor[]>(STORAGE_KEYS.DOCTORS, INITIAL_DOCTORS);
    const idx = doctors.findIndex(d => d.doctor_id === doctorId);
    if (idx === -1) throw new Error('Doctor not found');

    const depts = getStored<Department[]>(STORAGE_KEYS.DEPARTMENTS, INITIAL_DEPARTMENTS);
    const targetDept = data.department_id ? depts.find(d => d.department_id === data.department_id) : undefined;

    doctors[idx] = {
      ...doctors[idx],
      ...data,
      ...(targetDept ? { department_name: targetDept.name } : {})
    };
    setStored(STORAGE_KEYS.DOCTORS, doctors);
    return doctors[idx];
  },

  async saveDoctor(doctorData: Partial<Doctor>): Promise<Doctor> {
    if (doctorData.doctor_id) {
      return this.updateDoctor(doctorData.doctor_id, doctorData);
    }
    return this.createDoctor(doctorData);
  },

  async deleteDoctor(id: string): Promise<void> {
    await delay(200);
    let doctors = getStored<Doctor[]>(STORAGE_KEYS.DOCTORS, INITIAL_DOCTORS);
    doctors = doctors.filter(d => d.doctor_id !== id);
    setStored(STORAGE_KEYS.DOCTORS, doctors);
  },

  async getDoctorAvailability(doctorId: string): Promise<DoctorAvailability[]> {
    await delay(100);
    const allAvails = getStored<DoctorAvailability[]>(STORAGE_KEYS.AVAILABILITY, INITIAL_AVAILABILITIES);
    let doctorAvails = allAvails.filter(a => a.doctor_id === doctorId);

    // Ensure all weekdays (Monday - Friday) exist in the doctor's availability list
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const existingDays = doctorAvails.map(a => a.day_of_week);
    const missingDays = weekdays.filter(d => !existingDays.includes(d));

    if (missingDays.length > 0) {
      const addedAvails: DoctorAvailability[] = missingDays.map(day => ({
        availability_id: `av-${doctorId}-${day.toLowerCase()}`,
        id: `av-${doctorId}-${day.toLowerCase()}`,
        doctor_id: doctorId,
        day_of_week: day,
        start_time: '09:00',
        end_time: '17:00',
        slot_duration_minutes: 30,
        is_active: true
      }));
      doctorAvails = [...doctorAvails, ...addedAvails];
    }

    return doctorAvails.map(a => ({
      ...a,
      availability_id: a.availability_id || a.id
    }));
  },

  async updateDoctorAvailability(
    availIdOrDocId: string,
    updateOrSchedules: Partial<DoctorAvailability> | DoctorAvailability[]
  ): Promise<DoctorAvailability[]> {
    await delay(150);
    let allAvails = getStored<DoctorAvailability[]>(STORAGE_KEYS.AVAILABILITY, INITIAL_AVAILABILITIES);

    if (Array.isArray(updateOrSchedules)) {
      allAvails = allAvails.filter(a => a.doctor_id !== availIdOrDocId);
      allAvails.push(...updateOrSchedules);
      setStored(STORAGE_KEYS.AVAILABILITY, allAvails);
      return updateOrSchedules;
    } else {
      const idx = allAvails.findIndex(a => (a.availability_id === availIdOrDocId) || (a.id === availIdOrDocId));
      if (idx !== -1) {
        allAvails[idx] = { ...allAvails[idx], ...updateOrSchedules };
        setStored(STORAGE_KEYS.AVAILABILITY, allAvails);
      }
      return allAvails;
    }
  },

  async getAvailableSlots(doctorId: string, dateStr: string): Promise<string[]> {
    await delay(150);
    const dateObj = new Date(dateStr + 'T00:00:00');
    const dayNames = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    const dayOfWeek = dayNames[dateObj.getDay()];
    const isWeekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(dayOfWeek);

    const allAvails = getStored<DoctorAvailability[]>(STORAGE_KEYS.AVAILABILITY, INITIAL_AVAILABILITIES);
    let doctorSchedule = allAvails.find(a => a.doctor_id === doctorId && a.day_of_week === dayOfWeek && a.is_active);

    // Fallback: If no explicit active schedule is found for a Monday - Friday date, treat doctor as available on standard 09:00 - 17:00 OPD schedule
    if (!doctorSchedule && isWeekday) {
      doctorSchedule = {
        id: `default-${doctorId}-${dayOfWeek}`,
        doctor_id: doctorId,
        day_of_week: dayOfWeek,
        start_time: '09:00',
        end_time: '17:00',
        slot_duration_minutes: 30,
        is_active: true
      };
    }

    if (!doctorSchedule) {
      return [];
    }

    const [startH, startM] = doctorSchedule.start_time.split(':').map(Number);
    const [endH, endM] = doctorSchedule.end_time.split(':').map(Number);
    const startTotal = startH * 60 + startM;
    const endTotal = endH * 60 + endM;
    const slotDuration = doctorSchedule.slot_duration_minutes || 30;

    const allGeneratedSlots: string[] = [];
    for (let minutes = startTotal; minutes + slotDuration <= endTotal; minutes += slotDuration) {
      const h = Math.floor(minutes / 60);
      const m = minutes % 60;
      const period = h >= 12 ? 'PM' : 'AM';
      const displayH = h % 12 === 0 ? 12 : h % 12;
      const displayM = m === 0 ? '00' : m < 10 ? `0${m}` : `${m}`;
      allGeneratedSlots.push(`${displayH < 10 ? '0' + displayH : displayH}:${displayM} ${period}`);
    }

    const appointments = getStored<Appointment[]>(STORAGE_KEYS.APPOINTMENTS, INITIAL_APPOINTMENTS);
    const bookedTimes = appointments
      .filter(apt => apt.doctor_id === doctorId && apt.date === dateStr && apt.status !== AppointmentStatus.CANCELLED)
      .map(apt => apt.time.trim().toUpperCase());

    return allGeneratedSlots.filter(slot => !bookedTimes.includes(slot.trim().toUpperCase()));
  },

  // ==========================================
  // APPOINTMENTS & BOOKING
  // ==========================================
  async getAppointments(filters?: {
    patient_id?: string;
    doctor_id?: string;
    status?: AppointmentStatus | string;
    date?: string;
  }): Promise<Appointment[]> {
    await delay(100);
    let appointments = getStored<Appointment[]>(STORAGE_KEYS.APPOINTMENTS, INITIAL_APPOINTMENTS);
    if (filters) {
      if (filters.patient_id) {
        appointments = appointments.filter(a => a.patient_id === filters.patient_id);
      }
      if (filters.doctor_id) {
        appointments = appointments.filter(a => a.doctor_id === filters.doctor_id);
      }
      if (filters.status) {
        appointments = appointments.filter(a => a.status.toLowerCase() === filters.status!.toLowerCase());
      }
      if (filters.date) {
        appointments = appointments.filter(a => a.date === filters.date);
      }
    }
    return appointments.sort((a, b) => new Date(b.date + ' ' + b.time).getTime() - new Date(a.date + ' ' + a.time).getTime());
  },

  async bookAppointment(data: {
    patient_id?: string;
    patient_name: string;
    patient_email: string;
    patient_phone: string;
    doctor_id: string;
    department_id: string;
    date: string; // YYYY-MM-DD
    time: string; // "10:00 AM"
    reason: string;
    dob?: string;
    gender?: 'Male' | 'Female' | 'Other' | string;
  }): Promise<Appointment> {
    await delay(300);
    const appointments = getStored<Appointment[]>(STORAGE_KEYS.APPOINTMENTS, INITIAL_APPOINTMENTS);

    const slotCollision = appointments.find(
      a =>
        a.doctor_id === data.doctor_id &&
        a.date === data.date &&
        a.time.trim().toUpperCase() === data.time.trim().toUpperCase() &&
        a.status !== AppointmentStatus.CANCELLED
    );

    if (slotCollision) {
      throw new Error(`The selected slot (${data.time} on ${data.date}) has just been booked by another patient. Please select another slot.`);
    }

    const doctors = getStored<Doctor[]>(STORAGE_KEYS.DOCTORS, INITIAL_DOCTORS);
    const doctor = doctors.find(d => d.doctor_id === data.doctor_id);
    const depts = getStored<Department[]>(STORAGE_KEYS.DEPARTMENTS, INITIAL_DEPARTMENTS);
    const dept = depts.find(d => d.department_id === data.department_id);

    const newAppointment: Appointment = {
      appointment_id: `apt-${Date.now().toString().slice(-6)}`,
      patient_id: data.patient_id || `pat-guest-${Date.now()}`,
      patient_name: data.patient_name,
      patient_email: data.patient_email,
      patient_phone: data.patient_phone,
      doctor_id: data.doctor_id,
      doctor_name: doctor ? doctor.name : 'Dr. Specialist',
      doctor_specialization: doctor ? doctor.specialization : 'Specialist',
      doctor_photo: doctor ? doctor.photo_url : undefined,
      department_id: data.department_id,
      department_name: dept ? dept.name : (doctor?.department_name || 'Clinical Care'),
      date: data.date,
      time: data.time,
      reason: data.reason,
      status: AppointmentStatus.PENDING,
      consultation_fee: doctor ? doctor.consultation_fee : 1500,
      created_at: new Date().toISOString()
    };

    appointments.unshift(newAppointment);
    setStored(STORAGE_KEYS.APPOINTMENTS, appointments);

    // Create an invoice record automatically for transparency
    const invoices = getStored<Invoice[]>(STORAGE_KEYS.INVOICES, INITIAL_INVOICES);
    invoices.unshift({
      invoice_id: `inv-${Date.now().toString().slice(-5)}`,
      patient_id: newAppointment.patient_id,
      patient_name: newAppointment.patient_name,
      appointment_id: newAppointment.appointment_id,
      issue_date: newAppointment.date,
      due_date: newAppointment.date,
      items: [
        {
          description: `Consultation with ${newAppointment.doctor_name} (${newAppointment.department_name})`,
          quantity: 1,
          unit_price: newAppointment.consultation_fee || 1500,
          total: newAppointment.consultation_fee || 1500
        }
      ],
      total_amount: newAppointment.consultation_fee || 1500,
      status: InvoiceStatus.PENDING
    });
    setStored(STORAGE_KEYS.INVOICES, invoices);

    return newAppointment;
  },

  async updateAppointmentStatus(
    appointmentId: string,
    status: AppointmentStatus | string,
    extra?: { doctor_notes?: string; prescription?: string }
  ): Promise<Appointment> {
    await delay(200);
    const appointments = getStored<Appointment[]>(STORAGE_KEYS.APPOINTMENTS, INITIAL_APPOINTMENTS);
    const idx = appointments.findIndex(a => a.appointment_id === appointmentId);
    if (idx === -1) throw new Error('Appointment not found');

    appointments[idx] = {
      ...appointments[idx],
      status: status as AppointmentStatus,
      ...(extra?.doctor_notes ? { doctor_notes: extra.doctor_notes } : {}),
      ...(extra?.prescription ? { prescription: extra.prescription } : {}),
      updated_at: new Date().toISOString()
    };
    setStored(STORAGE_KEYS.APPOINTMENTS, appointments);

    return appointments[idx];
  },

  // ==========================================
  // PRESCRIPTIONS
  // ==========================================
  async getPrescriptions(filters?: { patient_id?: string; doctor_id?: string }): Promise<Prescription[]> {
    await delay(100);
    let rx = getStored<Prescription[]>(STORAGE_KEYS.PRESCRIPTIONS, INITIAL_PRESCRIPTIONS);
    if (filters) {
      if (filters.patient_id) {
        rx = rx.filter(r => r.patient_id === filters.patient_id);
      }
      if (filters.doctor_id) {
        rx = rx.filter(r => r.doctor_id === filters.doctor_id);
      }
    }
    return rx;
  },

  async createPrescription(data: {
    patient_id: string;
    doctor_id: string;
    appointment_id?: string;
    diagnosis: string;
    medicines: Prescription['medicines'];
    notes?: string;
  }): Promise<Prescription> {
    await delay(200);
    const rxList = getStored<Prescription[]>(STORAGE_KEYS.PRESCRIPTIONS, INITIAL_PRESCRIPTIONS);
    const patients = getStored<Patient[]>(STORAGE_KEYS.PATIENTS, INITIAL_PATIENTS);
    const doctors = getStored<Doctor[]>(STORAGE_KEYS.DOCTORS, INITIAL_DOCTORS);

    const patient = patients.find(p => p.patient_id === data.patient_id);
    const doctor = doctors.find(d => d.doctor_id === data.doctor_id);

    const newRx: Prescription = {
      prescription_id: `rx-${Date.now().toString().slice(-6)}`,
      patient_id: data.patient_id,
      patient_name: patient?.name || 'Patient',
      doctor_id: data.doctor_id,
      doctor_name: doctor?.name || 'Dr. Physician',
      appointment_id: data.appointment_id,
      diagnosis: data.diagnosis,
      medicines: data.medicines,
      notes: data.notes,
      issued_at: new Date().toISOString().split('T')[0]
    };

    rxList.unshift(newRx);
    setStored(STORAGE_KEYS.PRESCRIPTIONS, rxList);
    return newRx;
  },

  // ==========================================
  // MEDICAL RECORDS
  // ==========================================
  async getMedicalRecords(patientId?: string): Promise<MedicalRecord[]> {
    await delay(100);
    let records = getStored<MedicalRecord[]>(STORAGE_KEYS.MEDICAL_RECORDS, INITIAL_MEDICAL_RECORDS);
    if (patientId) {
      records = records.filter(r => r.patient_id === patientId);
    }
    return records;
  },

  async createMedicalRecord(data: Partial<MedicalRecord>): Promise<MedicalRecord> {
    await delay(200);
    const records = getStored<MedicalRecord[]>(STORAGE_KEYS.MEDICAL_RECORDS, INITIAL_MEDICAL_RECORDS);
    const newRecord: MedicalRecord = {
      record_id: `rec-${Date.now()}`,
      patient_id: data.patient_id || 'pat-1',
      doctor_id: data.doctor_id,
      doctor_name: data.doctor_name || 'Dr. Attending Physician',
      title: data.title || 'Diagnostic Evaluation Report',
      type: data.type || 'Lab Report',
      date: data.date || new Date().toISOString().split('T')[0],
      facility: data.facility || 'Qure Nexa Central Diagnostic Labs',
      result_summary: data.result_summary || '',
      notes: data.notes || '',
      file_url: data.file_url || 'https://medipulse.org/docs/report.pdf'
    };
    records.unshift(newRecord);
    setStored(STORAGE_KEYS.MEDICAL_RECORDS, records);
    return newRecord;
  },

  // ==========================================
  // INVOICES & BILLING
  // ==========================================
  async getInvoices(patientId?: string): Promise<Invoice[]> {
    await delay(100);
    let invoices = getStored<Invoice[]>(STORAGE_KEYS.INVOICES, INITIAL_INVOICES);
    if (patientId) {
      invoices = invoices.filter(i => i.patient_id === patientId);
    }
    return invoices;
  },

  async createInvoice(data: {
    patient_id: string;
    appointment_id?: string;
    items: Invoice['items'];
    total_amount: number;
  }): Promise<Invoice> {
    await delay(200);
    const invoices = getStored<Invoice[]>(STORAGE_KEYS.INVOICES, INITIAL_INVOICES);
    const patients = getStored<Patient[]>(STORAGE_KEYS.PATIENTS, INITIAL_PATIENTS);
    const pat = patients.find(p => p.patient_id === data.patient_id);

    const newInv: Invoice = {
      invoice_id: `inv-${Date.now().toString().slice(-5)}`,
      patient_id: data.patient_id,
      patient_name: pat?.name || 'Patient',
      appointment_id: data.appointment_id,
      issue_date: new Date().toISOString().split('T')[0],
      due_date: new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0],
      items: data.items,
      total_amount: data.total_amount,
      status: InvoiceStatus.PENDING
    };

    invoices.unshift(newInv);
    setStored(STORAGE_KEYS.INVOICES, invoices);
    return newInv;
  },

  async payInvoice(invoiceId: string, paymentMethod = 'Online Visa / Mastercard'): Promise<Invoice> {
    await delay(250);
    const invoices = getStored<Invoice[]>(STORAGE_KEYS.INVOICES, INITIAL_INVOICES);
    const idx = invoices.findIndex(i => i.invoice_id === invoiceId);
    if (idx === -1) throw new Error('Invoice not found');

    invoices[idx] = {
      ...invoices[idx],
      status: InvoiceStatus.PAID,
      paid_at: new Date().toISOString(),
      payment_method: paymentMethod
    };
    setStored(STORAGE_KEYS.INVOICES, invoices);
    return invoices[idx];
  },

  // ==========================================
  // PATIENTS
  // ==========================================
  async getPatients(search?: string): Promise<Patient[]> {
    await delay(100);
    let patients = getStored<Patient[]>(STORAGE_KEYS.PATIENTS, INITIAL_PATIENTS);
    const users = getStored<User[]>(STORAGE_KEYS.USERS, DEMO_USERS);

    patients = patients.map(p => {
      const u = users.find(user => user.user_id === p.user_id);
      return {
        ...p,
        name: p.name || u?.name || 'Patient',
        email: p.email || u?.email || 'patient@qurenexa.org',
        phone: p.phone || u?.phone || '+91 98765 43210',
        user: u
      };
    });

    if (search) {
      const q = search.toLowerCase();
      patients = patients.filter(
        p =>
          (p.name && p.name.toLowerCase().includes(q)) ||
          (p.email && p.email.toLowerCase().includes(q)) ||
          (p.address && p.address.toLowerCase().includes(q))
      );
    }
    return patients;
  },

  async getPatientById(id: string): Promise<Patient | undefined> {
    const patients = await this.getPatients();
    return patients.find(p => p.patient_id === id);
  },

  async updatePatient(patientId: string, data: Partial<Patient>): Promise<Patient> {
    await delay(200);
    const patients = getStored<Patient[]>(STORAGE_KEYS.PATIENTS, INITIAL_PATIENTS);
    const idx = patients.findIndex(p => p.patient_id === patientId);
    if (idx === -1) throw new Error('Patient not found');

    patients[idx] = { ...patients[idx], ...data };
    setStored(STORAGE_KEYS.PATIENTS, patients);
    return patients[idx];
  },

  // ==========================================
  // TESTIMONIALS
  // ==========================================
  async getTestimonials(approvedOnly = true): Promise<Testimonial[]> {
    await delay(100);
    const testimonials = getStored<Testimonial[]>(STORAGE_KEYS.TESTIMONIALS, INITIAL_TESTIMONIALS).map(t => ({
      ...t,
      is_approved: t.is_approved ?? t.approved ?? true
    }));
    if (approvedOnly) {
      return testimonials.filter(t => t.is_approved);
    }
    return testimonials;
  },

  async submitTestimonial(data: {
    patient_id?: string;
    patient_name: string;
    doctor_id?: string;
    doctor_name?: string;
    department_name?: string;
    rating: number;
    feedback: string;
  }): Promise<Testimonial> {
    await delay(200);
    const testimonials = getStored<Testimonial[]>(STORAGE_KEYS.TESTIMONIALS, INITIAL_TESTIMONIALS);
    const newTest: Testimonial = {
      id: `test-${Date.now()}`,
      patient_id: data.patient_id || 'pat-guest',
      patient_name: data.patient_name,
      patient_avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(data.patient_name)}`,
      doctor_id: data.doctor_id,
      doctor_name: data.doctor_name,
      department_name: data.department_name,
      rating: data.rating,
      feedback: data.feedback,
      approved: false,
      is_approved: false,
      created_at: new Date().toISOString().split('T')[0]
    };
    testimonials.unshift(newTest);
    setStored(STORAGE_KEYS.TESTIMONIALS, testimonials);
    return newTest;
  },

  async approveTestimonial(id: string): Promise<void> {
    await delay(150);
    const testimonials = getStored<Testimonial[]>(STORAGE_KEYS.TESTIMONIALS, INITIAL_TESTIMONIALS);
    const idx = testimonials.findIndex(t => t.id === id);
    if (idx !== -1) {
      testimonials[idx].approved = true;
      testimonials[idx].is_approved = true;
      setStored(STORAGE_KEYS.TESTIMONIALS, testimonials);
    }
  },

  async moderateTestimonial(id: string, approved: boolean): Promise<void> {
    if (approved) {
      return this.approveTestimonial(id);
    }
    return this.deleteTestimonial(id);
  },

  async deleteTestimonial(id: string): Promise<void> {
    await delay(150);
    let testimonials = getStored<Testimonial[]>(STORAGE_KEYS.TESTIMONIALS, INITIAL_TESTIMONIALS);
    testimonials = testimonials.filter(t => t.id !== id);
    setStored(STORAGE_KEYS.TESTIMONIALS, testimonials);
  },

  // ==========================================
  // FAQS
  // ==========================================
  async getFAQs(category?: string): Promise<FAQ[]> {
    await delay(100);
    const faqs = getStored<FAQ[]>(STORAGE_KEYS.FAQS, INITIAL_FAQS);
    if (category && category !== 'All') {
      return faqs.filter(f => f.category === category);
    }
    return faqs;
  },

  async saveFAQ(faq: Partial<FAQ>): Promise<FAQ> {
    await delay(150);
    const faqs = getStored<FAQ[]>(STORAGE_KEYS.FAQS, INITIAL_FAQS);
    if (faq.id) {
      const idx = faqs.findIndex(f => f.id === faq.id);
      if (idx !== -1) {
        faqs[idx] = { ...faqs[idx], ...faq } as FAQ;
        setStored(STORAGE_KEYS.FAQS, faqs);
        return faqs[idx];
      }
    }
    const newFaq: FAQ = {
      id: `faq-${Date.now()}`,
      category: faq.category || 'General',
      question: faq.question || 'Hospital Inquiry Question?',
      answer: faq.answer || 'Detailed medical information response.'
    };
    faqs.push(newFaq);
    setStored(STORAGE_KEYS.FAQS, faqs);
    return newFaq;
  },

  async deleteFAQ(id: string): Promise<void> {
    await delay(150);
    let faqs = getStored<FAQ[]>(STORAGE_KEYS.FAQS, INITIAL_FAQS);
    faqs = faqs.filter(f => f.id !== id);
    setStored(STORAGE_KEYS.FAQS, faqs);
  },

  // ==========================================
  // GALLERY
  // ==========================================
  async getGallery(category?: string): Promise<GalleryItem[]> {
    await delay(100);
    const gallery = getStored<GalleryItem[]>(STORAGE_KEYS.GALLERY, INITIAL_GALLERY);
    if (category && category !== 'All') {
      return gallery.filter(g => g.category === category);
    }
    return gallery;
  },

  async saveGalleryItem(item: Partial<GalleryItem>): Promise<GalleryItem> {
    await delay(150);
    const gallery = getStored<GalleryItem[]>(STORAGE_KEYS.GALLERY, INITIAL_GALLERY);
    const newItem: GalleryItem = {
      id: `gal-${Date.now()}`,
      image_url: item.image_url || 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000',
      category: item.category || 'Hospital',
      caption: item.caption || 'Hospital Facility View',
      description: item.description || ''
    };
    gallery.unshift(newItem);
    setStored(STORAGE_KEYS.GALLERY, gallery);
    return newItem;
  },

  async deleteGalleryItem(id: string): Promise<void> {
    await delay(150);
    let gallery = getStored<GalleryItem[]>(STORAGE_KEYS.GALLERY, INITIAL_GALLERY);
    gallery = gallery.filter(g => g.id !== id);
    setStored(STORAGE_KEYS.GALLERY, gallery);
  },

  // ==========================================
  // CONTACT & INQUIRIES
  // ==========================================
  async submitContactMessage(data: {
    name: string;
    email: string;
    phone: string;
    department?: string;
    subject?: string;
    message: string;
  }): Promise<ContactMessage> {
    await delay(200);
    const messages = getStored<ContactMessage[]>(STORAGE_KEYS.CONTACT_MESSAGES, INITIAL_CONTACT_MESSAGES);
    const newMsg: ContactMessage = {
      id: `msg-${Date.now()}`,
      name: data.name,
      email: data.email,
      phone: data.phone,
      department: data.department,
      subject: data.subject || 'General Inquiry',
      message: data.message,
      status: 'unread',
      created_at: new Date().toISOString()
    };
    messages.unshift(newMsg);
    setStored(STORAGE_KEYS.CONTACT_MESSAGES, messages);
    return newMsg;
  },

  async getContactMessages(): Promise<ContactMessage[]> {
    await delay(100);
    return getStored<ContactMessage[]>(STORAGE_KEYS.CONTACT_MESSAGES, INITIAL_CONTACT_MESSAGES);
  },

  async updateContactMessageStatus(id: string, status: ContactMessage['status']): Promise<void> {
    await delay(150);
    const messages = getStored<ContactMessage[]>(STORAGE_KEYS.CONTACT_MESSAGES, INITIAL_CONTACT_MESSAGES);
    const idx = messages.findIndex(m => m.id === id);
    if (idx !== -1) {
      messages[idx].status = status;
      setStored(STORAGE_KEYS.CONTACT_MESSAGES, messages);
    }
  },

  // ==========================================
  // MEDICAL DOCUMENTS
  // ==========================================
  async getDocuments(patientId: string): Promise<MedicalDocument[]> {
    await delay(100);
    const docs = getStored<MedicalDocument[]>(STORAGE_KEYS.DOCUMENTS, INITIAL_DOCUMENTS);
    return docs.filter(d => d.patient_id === patientId);
  },

  async uploadDocument(patientId: string, data: {
    title: string;
    category: MedicalDocument['category'];
    doctor_name?: string;
    file_name?: string;
  }): Promise<MedicalDocument> {
    await delay(300);
    const docs = getStored<MedicalDocument[]>(STORAGE_KEYS.DOCUMENTS, INITIAL_DOCUMENTS);
    const newDoc: MedicalDocument = {
      id: `doc-rep-${Date.now()}`,
      patient_id: patientId,
      title: data.title,
      category: data.category,
      date: new Date().toISOString().split('T')[0],
      file_url: `https://medipulse.org/docs/${data.category.toLowerCase().replace(/\s+/g, '_')}_${Date.now()}.pdf`,
      file_size: `${(Math.random() * 2 + 0.8).toFixed(1)} MB`,
      doctor_name: data.doctor_name || 'Qure Nexa Clinical Laboratory'
    };
    docs.unshift(newDoc);
    setStored(STORAGE_KEYS.DOCUMENTS, docs);
    return newDoc;
  },

  // ==========================================
  // NOTIFICATIONS
  // ==========================================
  async getNotifications(userId: string): Promise<Notification[]> {
    await delay(100);
    const notifs = getStored<Notification[]>(STORAGE_KEYS.NOTIFICATIONS, INITIAL_NOTIFICATIONS);
    return notifs.filter(n => n.user_id === userId);
  },

  async markNotificationRead(id: string): Promise<void> {
    const notifs = getStored<Notification[]>(STORAGE_KEYS.NOTIFICATIONS, INITIAL_NOTIFICATIONS);
    const idx = notifs.findIndex(n => n.id === id);
    if (idx !== -1) {
      notifs[idx].is_read = true;
      setStored(STORAGE_KEYS.NOTIFICATIONS, notifs);
    }
  },

  // ==========================================
  // HOSPITAL SETTINGS & ADMIN DASHBOARD STATS
  // ==========================================
  async getHospitalSettings(): Promise<HospitalSettings> {
    await delay(100);
    return getStored<HospitalSettings>(STORAGE_KEYS.SETTINGS, INITIAL_HOSPITAL_SETTINGS);
  },

  async updateHospitalSettings(settings: HospitalSettings): Promise<HospitalSettings> {
    await delay(200);
    setStored(STORAGE_KEYS.SETTINGS, settings);
    return settings;
  },

  async getAdminStats(): Promise<DashboardStats> {
    await delay(200);
    const patients = getStored<Patient[]>(STORAGE_KEYS.PATIENTS, INITIAL_PATIENTS);
    const doctors = getStored<Doctor[]>(STORAGE_KEYS.DOCTORS, INITIAL_DOCTORS);
    const appointments = getStored<Appointment[]>(STORAGE_KEYS.APPOINTMENTS, INITIAL_APPOINTMENTS);
    const depts = getStored<Department[]>(STORAGE_KEYS.DEPARTMENTS, INITIAL_DEPARTMENTS);

    const pending = appointments.filter(a => a.status === AppointmentStatus.PENDING).length;
    const todayStr = new Date().toISOString().split('T')[0];
    const todayApts = appointments.filter(a => a.date === todayStr).length;

    const totalRevenue = appointments
      .filter(a => a.status === AppointmentStatus.COMPLETED || a.status === AppointmentStatus.CONFIRMED)
      .reduce((sum, a) => sum + (a.consultation_fee || 1500), 0) + 485000;

    return {
      total_patients: patients.length + 1240,
      total_doctors: doctors.length,
      total_appointments: appointments.length + 840,
      pending_appointments: pending,
      today_appointments: todayApts + 14,
      monthly_revenue: totalRevenue,
      bed_occupancy_rate: 82.4,
      patient_satisfaction_score: 99.2,
      weekly_appointments: [
        { day: 'Mon', appointments: 42, completed: 38, cancelled: 4 },
        { day: 'Tue', appointments: 55, completed: 51, cancelled: 4 },
        { day: 'Wed', appointments: 68, completed: 62, cancelled: 6 },
        { day: 'Thu', appointments: 60, completed: 56, cancelled: 4 },
        { day: 'Fri', appointments: 72, completed: 68, cancelled: 4 },
        { day: 'Sat', appointments: 48, completed: 44, cancelled: 4 },
        { day: 'Sun', appointments: 22, completed: 20, cancelled: 2 }
      ],
      department_distribution: depts.map(d => ({
        name: d.name.split(' ')[0],
        patients: Math.floor(Math.random() * 80 + 40),
        value: Math.floor(Math.random() * 30 + 15)
      })),
      doctor_utilization: doctors.slice(0, 5).map(d => ({
        doctor: d.name.split(' ').slice(1).join(' '),
        specialization: d.specialization.split('&')[0].trim(),
        appointments: Math.floor(Math.random() * 15 + 18),
        capacity: 25
      }))
    };
  }
};
