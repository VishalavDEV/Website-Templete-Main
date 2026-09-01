import type {
  Doctor,
  Department,
  MedicalService,
  Appointment,
  Review,
  BlogPost,
  CMSContent,
  DoctorFilterOptions
} from '../types';

// Pre-seeded initial dataset
const INITIAL_DOCTORS: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Priya Sharma',
    title: 'Senior Consultant Cardiologist',
    specialty: 'Cardiology',
    departmentId: 'dept-cardio',
    departmentName: 'Cardiology Center',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviewCount: 142,
    experienceYears: 14,
    fee: 120,
    education: 'MD Cardiology, Harvard Medical School',
    hospital: 'Apex Heart & Vascular Institute',
    languages: ['English', 'Hindi'],
    gender: 'Female',
    bio: 'Dr. Priya Sharma is a world-renowned interventional cardiologist specializing in complex coronary interventions, heart failure management, and preventive cardiovascular wellness.',
    location: 'Building A, 3rd Floor, Suite 302',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    timeSlots: ['09:00 AM', '09:30 AM', '10:30 AM', '11:00 AM', '02:00 PM', '03:30 PM', '04:30 PM'],
    isFeatured: true,
    status: 'Active'
  },
  {
    id: 'doc-2',
    name: 'Dr. Marcus Vance',
    title: 'Chief Neurosurgeon',
    specialty: 'Neurology',
    departmentId: 'dept-neuro',
    departmentName: 'Neurology & Spine Sciences',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewCount: 98,
    experienceYears: 18,
    fee: 150,
    education: 'FACS, Johns Hopkins University',
    hospital: 'Institute of Neurosciences',
    languages: ['English', 'German'],
    gender: 'Male',
    bio: 'Leading neurosurgeon specializing in minimally invasive spine surgery, brain tumor resections, and nerve reconstruction therapies.',
    location: 'Building B, 5th Floor, Suite 501',
    availableDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
    timeSlots: ['10:00 AM', '11:30 AM', '01:30 PM', '03:00 PM', '05:00 PM'],
    isFeatured: true,
    status: 'Active'
  },
  {
    id: 'doc-3',
    name: 'Dr. Williams',
    title: 'Pediatric Specialist & Child Health Lead',
    specialty: 'Pediatrics',
    departmentId: 'dept-peds',
    departmentName: 'Pediatrics & Child Care',
    avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80',
    rating: 4.95,
    reviewCount: 215,
    experienceYears: 11,
    fee: 90,
    education: 'MD Pediatrics, Stanford Children’s Health',
    hospital: 'Children’s Pavilion',
    languages: ['English', 'Spanish', 'Russian'],
    gender: 'Female',
    bio: 'Compassionate pediatric specialist dedicated to holistic child growth, newborn care, pediatric allergies, and adolescent medicine.',
    location: 'Building C, 1st Floor, Suite 104',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    timeSlots: ['08:30 AM', '09:30 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'],
    isFeatured: true,
    status: 'Active'
  },
  {
    id: 'doc-4',
    name: 'Dr. Arthur Pendelton',
    title: 'Orthopedic Surgeon & Joint Specialist',
    specialty: 'Orthopedics',
    departmentId: 'dept-ortho',
    departmentName: 'Orthopedics & Sports Medicine',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviewCount: 84,
    experienceYears: 16,
    fee: 130,
    education: 'MS Ortho, Mayo Clinic College of Medicine',
    hospital: 'Orthopedic Excellence Center',
    languages: ['English'],
    gender: 'Male',
    bio: 'Specialist in robotic total knee and hip replacements, sports injury rehabilitation, and arthroscopic procedures.',
    location: 'Building B, 2nd Floor, Suite 210',
    availableDays: ['Tuesday', 'Thursday', 'Friday'],
    timeSlots: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM'],
    isFeatured: false,
    status: 'Active'
  },
  {
    id: 'doc-5',
    name: 'Dr. Maya Lin',
    title: 'Consultant Dermatologist & Aesthetic Lead',
    specialty: 'Dermatology',
    departmentId: 'dept-derm',
    departmentName: 'Dermatology & Skin Center',
    avatar: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviewCount: 167,
    experienceYears: 9,
    fee: 110,
    education: 'MD Dermatology, Columbia University',
    hospital: 'Skin & Laser Wellness Clinic',
    languages: ['English', 'Mandarin'],
    gender: 'Female',
    bio: 'Expert in clinical dermatology, skin cancer screenings, acne treatments, and advanced laser dermatological procedures.',
    location: 'Building A, 4th Floor, Suite 412',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
    timeSlots: ['10:00 AM', '11:00 AM', '02:00 PM', '03:30 PM', '05:00 PM'],
    isFeatured: true,
    status: 'Active'
  },
  {
    id: 'doc-6',
    name: 'Dr. Rajesh Patel',
    title: 'Senior Oncologist & Hematology Expert',
    specialty: 'Oncology',
    departmentId: 'dept-onco',
    departmentName: 'Comprehensive Cancer Care',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    rating: 4.85,
    reviewCount: 112,
    experienceYears: 20,
    fee: 160,
    education: 'DM Oncology, Oxford University Medical',
    hospital: 'National Cancer Research Center',
    languages: ['English', 'Gujarati', 'Hindi'],
    gender: 'Male',
    bio: 'Pioneer in targeted immunotherapy, precision oncology, and supportive cancer patient care.',
    location: 'Building D, 6th Floor, Suite 605',
    availableDays: ['Monday', 'Wednesday', 'Thursday'],
    timeSlots: ['09:30 AM', '11:00 AM', '02:30 PM', '04:00 PM'],
    isFeatured: false,
    status: 'Active'
  }
];

const INITIAL_DEPARTMENTS: Department[] = [
  {
    id: 'dept-cardio',
    name: 'Cardiology Center',
    description: 'Comprehensive heart care, advanced diagnostics, cardiac catheterization, and preventive vascular therapies.',
    iconName: 'HeartPulse',
    doctorCount: 14,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    procedures: ['Echocardiogram', 'Angioplasty', 'ECG Holter Monitoring', 'Lipid Management'],
    headDoctor: 'Dr. Priya Sharma'
  },
  {
    id: 'dept-neuro',
    name: 'Neurology & Spine Sciences',
    description: 'Cutting-edge diagnosis and treatment for brain, nerve, neuromuscular, and spinal cord disorders.',
    iconName: 'Brain',
    doctorCount: 10,
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80',
    procedures: ['Brain MRI Analysis', 'EEG Diagnostics', 'Spine Fusion', 'Migraine Care'],
    headDoctor: 'Dr. Marcus Vance'
  },
  {
    id: 'dept-peds',
    name: 'Pediatrics & Child Care',
    description: 'Gentle, friendly healthcare for infants, kids, and teens in a welcoming pediatric environment.',
    iconName: 'Baby',
    doctorCount: 18,
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80',
    procedures: ['Vaccination Schedules', 'Growth Assessments', 'Pediatric Asthma Management', 'Newborn Screening'],
    headDoctor: 'Dr. Williams'
  },
  {
    id: 'dept-ortho',
    name: 'Orthopedics & Sports Medicine',
    description: 'Expert bone, joint, ligament, and muscle therapies to restore full mobility and performance.',
    iconName: 'Activity',
    doctorCount: 12,
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
    procedures: ['Joint Replacement', 'Arthroscopy', 'Fracture Repair', 'Physiotherapy'],
    headDoctor: 'Dr. Arthur Pendelton'
  },
  {
    id: 'dept-derm',
    name: 'Dermatology & Skin Center',
    description: 'Advanced medical dermatological treatments, acne management, and cosmetic skin care.',
    iconName: 'Sparkles',
    doctorCount: 8,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80',
    procedures: ['Mole Mapping', 'Laser Therapy', 'Psoriasis Treatment', 'Cosmetic Skin Renewal'],
    headDoctor: 'Dr. Maya Lin'
  },
  {
    id: 'dept-onco',
    name: 'Comprehensive Cancer Care',
    description: 'Multidisciplinary oncology team delivering personalized chemo, radiation, and immunotherapy.',
    iconName: 'ShieldAlert',
    doctorCount: 9,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    procedures: ['Targeted Chemotherapy', 'Immunotherapy', 'Tumor Board Review', 'Palliative Support'],
    headDoctor: 'Dr. Rajesh Patel'
  }
];

const INITIAL_SERVICES: MedicalService[] = [
  {
    id: 'srv-1',
    name: '24/7 Emergency Trauma Response',
    description: 'Immediate critical trauma response unit staffed round-the-clock by emergency medicine specialists.',
    category: 'Emergency',
    durationMinutes: 30,
    priceRange: 'Fully Insured / Covered',
    iconName: 'Siren',
    highlights: ['Zero Wait Triage', 'Dedicated Trauma ICU', 'Mobile Life Support Ambulance']
  },
  {
    id: 'srv-2',
    name: 'Virtual Telehealth Consultation',
    description: 'Secure, high-definition video consultations with top board-certified doctors from the comfort of home.',
    category: 'Telehealth',
    durationMinutes: 20,
    priceRange: '$49 - $89',
    iconName: 'Video',
    highlights: ['E-Prescription Delivery', 'Instant Booking', 'HD Video Encrypted']
  },
  {
    id: 'srv-3',
    name: 'Full Body Diagnostic Health Audit',
    description: 'Comprehensive health screening including blood lab panel, full ECG, chest imaging, and organ function tests.',
    category: 'Diagnostics',
    durationMinutes: 90,
    priceRange: '$199 - $350',
    iconName: 'Stethoscope',
    highlights: ['Same-Day Digital Results', 'Physician Review Consultation', '60+ Biomarkers Analyzed']
  },
  {
    id: 'srv-4',
    name: 'Advanced MRI & CT Radiology Imaging',
    description: 'High-resolution 3T MRI and 128-slice CT scans for pinpoint diagnostic precision.',
    category: 'Radiology',
    durationMinutes: 45,
    priceRange: '$150 - $400',
    iconName: 'Scan',
    highlights: ['3D Reconstruction', 'Low Radiation Protocols', 'Radiologist Express Report']
  }
];

const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: 'APT-84920',
    patientId: 'pat-1',
    patientName: 'Madhu Kumar',
    patientEmail: 'madhu@example.com',
    patientPhone: '+1 (555) 234-5678',
    doctorId: 'doc-1',
    doctorName: 'Dr. Priya Sharma',
    doctorSpecialty: 'Cardiology',
    departmentName: 'Cardiology Center',
    date: '2026-08-19',
    timeSlot: '10:30 AM',
    reason: 'Annual cardiovascular checkup & blood pressure evaluation',
    status: 'Confirmed',
    createdAt: '2026-08-18T10:15:00Z',
    notes: 'Patient requested cardiac lipid review.'
  },
  {
    id: 'APT-84921',
    patientId: 'pat-2',
    patientName: 'Sarah Jenkins',
    patientEmail: 'sarah.j@example.com',
    patientPhone: '+1 (555) 987-6543',
    doctorId: 'doc-3',
    doctorName: 'Dr. Williams',
    doctorSpecialty: 'Pediatrics',
    departmentName: 'Pediatrics & Child Care',
    date: '2026-08-20',
    timeSlot: '09:30 AM',
    reason: 'Routine pediatric immunization & growth check for toddler',
    status: 'Pending',
    createdAt: '2026-08-18T14:20:00Z'
  },
  {
    id: 'APT-84918',
    patientId: 'pat-1',
    patientName: 'Madhu Kumar',
    patientEmail: 'madhu@example.com',
    patientPhone: '+1 (555) 234-5678',
    doctorId: 'doc-5',
    doctorName: 'Dr. Maya Lin',
    doctorSpecialty: 'Dermatology',
    departmentName: 'Dermatology & Skin Center',
    date: '2026-08-12',
    timeSlot: '02:00 PM',
    reason: 'Skin allergy screening',
    status: 'Completed',
    createdAt: '2026-08-10T11:00:00Z',
    notes: 'Prescribed topical allergy cream. Patient reported total relief.'
  }
];

const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    doctorId: 'doc-1',
    patientName: 'Robert Vance',
    rating: 5,
    comment: 'Dr. Sharma explained my heart condition with incredible patience. The care team at Apex Heart is world class!',
    date: '2026-08-10',
    verified: true
  },
  {
    id: 'rev-2',
    doctorId: 'doc-1',
    patientName: 'Anita Desai',
    rating: 5,
    comment: 'Very professional and empathetic doctor. The online appointment booking was smooth and wait time was zero.',
    date: '2026-08-04',
    verified: true
  },
  {
    id: 'rev-3',
    doctorId: 'doc-3',
    patientName: 'Emily & David Watson',
    rating: 5,
    comment: 'Dr. Williams is magical with toddlers! My 3-year old daughter was completely relaxed during her checkup.',
    date: '2026-08-12',
    verified: true
  }
];

const INITIAL_BLOGS: BlogPost[] = [
  {
    id: 'post-1',
    title: '10 Essential Habits for a Heart-Healthy Lifestyle',
    excerpt: 'Simple daily choices in diet, exercise, and stress management that can drastically reduce your risk of cardiovascular disease.',
    content: `Cardiovascular disease remains the leading cause of health issues globally, but up to 80% of premature heart events are preventable. Here are 10 key actionable steps recommended by our chief cardiology specialists:

1. **Prioritize 30 Minutes of Daily Aerobic Exercise**: Brisk walking, swimming, or cycling enhances arterial elasticity.
2. **Adopt the Mediterranean Diet**: Rich in olive oil, omega-3 fatty acids, leafy greens, and whole grains.
3. **Monitor Blood Pressure Monthly**: Silent hypertension is a key risk factor that can be effortlessly caught early.
4. **Optimize Sleep Hygiene**: Aim for 7 to 8 hours of restorative sleep to prevent stress hormone spikes.
5. **Manage Stress with Mindfulness**: Dedicated breathing exercises reduce cortisol and protect cardiac tissue.`,
    category: 'Heart Health',
    author: 'Dr. Priya Sharma',
    authorTitle: 'Chief Cardiologist',
    date: 'August 14, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    tags: ['Cardiology', 'Wellness', 'Prevention']
  },
  {
    id: 'post-2',
    title: 'Understanding Modern Telehealth: What to Expect in Your Virtual Visit',
    excerpt: 'How virtual appointments work, how to prepare your symptoms list, and when online care is the smartest choice.',
    content: `Telehealth has transformed patient convenience. From prescription renewals to initial specialist consultations, high-definition digital care delivers instant access without travel stress. Learn how to optimize your next virtual appointment.`,
    category: 'Digital Health',
    author: 'Dr. Marcus Vance',
    authorTitle: 'Chief Neurosurgeon',
    date: 'August 10, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    tags: ['Telehealth', 'Patient Care', 'Technology']
  },
  {
    id: 'post-3',
    title: 'Pediatric Immunization Guide 2026: Protecting Your Child',
    excerpt: 'An up-to-date breakdown of essential vaccines, safety facts, and how to make clinic visits stress-free for toddlers.',
    content: `Vaccinations are among the safest and most effective medical advances in human history. Here is a clear guide on keeping your child's protection timeline up to date.`,
    category: 'Pediatrics',
    author: 'Dr. Williams',
    authorTitle: 'Pediatrics Lead',
    date: 'August 05, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Pediatrics', 'Immunization', 'Child Care']
  }
];

const INITIAL_CMS: CMSContent = {
  heroTitle: 'Advanced Dynamic Care for You & Your Loved Ones',
  heroSubtitle: 'Connect with 120+ top medical specialists, book real-time appointments, and manage your health seamlessly on one modern healthcare platform.',
  heroBadge: '✨ Next-Gen Healthcare Platform 2026',
  emergencyPhone: '+1 (800) 999-HEAL',
  announcement: '📢 Now Open: Virtual Telehealth consultations available 24/7 with zero wait times!',
  stats: [
    { label: 'Board Doctors', value: '120+', description: 'Certified Specialists', iconName: 'UserCheck' },
    { label: 'Specialized Centers', value: '25', description: 'Departments', iconName: 'Building2' },
    { label: 'Satisfied Patients', value: '15K+', description: 'Annual Visits', iconName: 'Heart' },
    { label: 'Patient Rating', value: '98%', description: '5-Star Reviews', iconName: 'Star' }
  ],
  faqs: [
    {
      id: 'faq-1',
      question: 'How do I book an appointment with a specialist doctor?',
      answer: 'Simply click "Book Appointment", choose your desired department or doctor, pick an open date and time slot, enter your basic details, and receive instant confirmation!',
      category: 'Appointments'
    },
    {
      id: 'faq-2',
      question: 'Can I cancel or reschedule my medical booking?',
      answer: 'Yes! Navigate to your Patient Portal dashboard where you can view all upcoming visits and click "Cancel" or "Reschedule" anytime up to 2 hours before your appointment.',
      category: 'Appointments'
    },
    {
      id: 'faq-3',
      question: 'Are telehealth online consultations covered by insurance?',
      answer: 'We accept major medical insurance providers for both in-person and telehealth visits. You can verify your insurance coverage during the booking checkout.',
      category: 'Billing'
    }
  ]
};

// Storage keys
const STORAGE_KEYS = {
  DOCTORS: 'med_platform_doctors',
  DEPARTMENTS: 'med_platform_departments',
  SERVICES: 'med_platform_services',
  APPOINTMENTS: 'med_platform_appointments',
  REVIEWS: 'med_platform_reviews',
  BLOGS: 'med_platform_blogs',
  CMS: 'med_platform_cms',
  PATIENTS: 'med_platform_patients'
};

class DataStoreService {
  private getItem<T>(key: string, fallback: T): T {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch {
      return fallback;
    }
  }

  private setItem<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('LocalStorage write error', e);
    }
  }

  constructor() {
    this.init();
  }

  public init(): void {
    if (!localStorage.getItem(STORAGE_KEYS.DOCTORS)) {
      this.setItem(STORAGE_KEYS.DOCTORS, INITIAL_DOCTORS);
    } else {
      const storedDocs = this.getItem<Doctor[]>(STORAGE_KEYS.DOCTORS, INITIAL_DOCTORS);
      const doc3 = storedDocs.find(d => d.id === 'doc-3');
      if (doc3) {
        doc3.name = 'Dr. Williams';
        doc3.avatar = 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80';
        this.setItem(STORAGE_KEYS.DOCTORS, storedDocs);
      }
    }
    if (!localStorage.getItem(STORAGE_KEYS.DEPARTMENTS)) {
      this.setItem(STORAGE_KEYS.DEPARTMENTS, INITIAL_DEPARTMENTS);
    }
    if (!localStorage.getItem(STORAGE_KEYS.SERVICES)) {
      this.setItem(STORAGE_KEYS.SERVICES, INITIAL_SERVICES);
    }
    if (!localStorage.getItem(STORAGE_KEYS.APPOINTMENTS)) {
      this.setItem(STORAGE_KEYS.APPOINTMENTS, INITIAL_APPOINTMENTS);
    }
    if (!localStorage.getItem(STORAGE_KEYS.REVIEWS)) {
      this.setItem(STORAGE_KEYS.REVIEWS, INITIAL_REVIEWS);
    }
    if (!localStorage.getItem(STORAGE_KEYS.BLOGS)) {
      this.setItem(STORAGE_KEYS.BLOGS, INITIAL_BLOGS);
    }
    if (!localStorage.getItem(STORAGE_KEYS.CMS)) {
      this.setItem(STORAGE_KEYS.CMS, INITIAL_CMS);
    }
  }

  // --- DOCTORS ---
  public getDoctors(): Doctor[] {
    return this.getItem<Doctor[]>(STORAGE_KEYS.DOCTORS, INITIAL_DOCTORS);
  }

  public getDoctorById(id: string): Doctor | undefined {
    return this.getDoctors().find(d => d.id === id);
  }

  public filterDoctors(options: DoctorFilterOptions): Doctor[] {
    let doctors = this.getDoctors();

    if (options.searchQuery.trim()) {
      const q = options.searchQuery.toLowerCase();
      doctors = doctors.filter(
        d =>
          d.name.toLowerCase().includes(q) ||
          d.specialty.toLowerCase().includes(q) ||
          d.departmentName.toLowerCase().includes(q) ||
          d.bio.toLowerCase().includes(q)
      );
    }

    if (options.specialty && options.specialty !== 'All') {
      doctors = doctors.filter(d => d.specialty.toLowerCase() === options.specialty.toLowerCase());
    }

    if (options.minExperience > 0) {
      doctors = doctors.filter(d => d.experienceYears >= options.minExperience);
    }

    if (options.availabilityDay && options.availabilityDay !== 'All') {
      doctors = doctors.filter(d => d.availableDays.includes(options.availabilityDay));
    }

    if (options.gender && options.gender !== 'All') {
      doctors = doctors.filter(d => d.gender.toLowerCase() === options.gender.toLowerCase());
    }

    // Sort
    doctors.sort((a, b) => {
      if (options.sortBy === 'rating') return b.rating - a.rating;
      if (options.sortBy === 'experience') return b.experienceYears - a.experienceYears;
      if (options.sortBy === 'name') return a.name.localeCompare(b.name);
      // default recommended (featured first then rating)
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0) || b.rating - a.rating;
    });

    return doctors;
  }

  public saveDoctor(doctor: Doctor): Doctor {
    const list = this.getDoctors();
    const index = list.findIndex(d => d.id === doctor.id);
    if (index >= 0) {
      list[index] = doctor;
    } else {
      list.push(doctor);
    }
    this.setItem(STORAGE_KEYS.DOCTORS, list);
    return doctor;
  }

  public deleteDoctor(id: string): void {
    const list = this.getDoctors().filter(d => d.id !== id);
    this.setItem(STORAGE_KEYS.DOCTORS, list);
  }

  // --- DEPARTMENTS ---
  public getDepartments(): Department[] {
    return this.getItem<Department[]>(STORAGE_KEYS.DEPARTMENTS, INITIAL_DEPARTMENTS);
  }

  public saveDepartment(department: Department): Department {
    const list = this.getDepartments();
    const index = list.findIndex(d => d.id === department.id);
    if (index >= 0) {
      list[index] = department;
    } else {
      list.push(department);
    }
    this.setItem(STORAGE_KEYS.DEPARTMENTS, list);
    return department;
  }

  // --- SERVICES ---
  public getServices(): MedicalService[] {
    return this.getItem<MedicalService[]>(STORAGE_KEYS.SERVICES, INITIAL_SERVICES);
  }

  // --- APPOINTMENTS ---
  public getAppointments(): Appointment[] {
    return this.getItem<Appointment[]>(STORAGE_KEYS.APPOINTMENTS, INITIAL_APPOINTMENTS);
  }

  public getAppointmentsForPatient(patientIdOrEmail: string): Appointment[] {
    return this.getAppointments().filter(
      a => a.patientId === patientIdOrEmail || a.patientEmail.toLowerCase() === patientIdOrEmail.toLowerCase()
    );
  }

  public getAppointmentsForDoctor(doctorId: string): Appointment[] {
    return this.getAppointments().filter(a => a.doctorId === doctorId);
  }

  public createAppointment(data: Omit<Appointment, 'id' | 'createdAt' | 'status'>): Appointment {
    const appointments = this.getAppointments();
    const newId = `APT-${Math.floor(10000 + Math.random() * 90000)}`;
    const newApt: Appointment = {
      ...data,
      id: newId,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };
    appointments.unshift(newApt);
    this.setItem(STORAGE_KEYS.APPOINTMENTS, appointments);
    return newApt;
  }

  public updateAppointmentStatus(id: string, status: Appointment['status'], notes?: string): Appointment | null {
    const appointments = this.getAppointments();
    const index = appointments.findIndex(a => a.id === id);
    if (index >= 0) {
      appointments[index].status = status;
      if (notes !== undefined) {
        appointments[index].notes = notes;
      }
      this.setItem(STORAGE_KEYS.APPOINTMENTS, appointments);
      return appointments[index];
    }
    return null;
  }

  // --- REVIEWS ---
  public getReviews(): Review[] {
    return this.getItem<Review[]>(STORAGE_KEYS.REVIEWS, INITIAL_REVIEWS);
  }

  public getReviewsForDoctor(doctorId: string): Review[] {
    return this.getReviews().filter(r => r.doctorId === doctorId);
  }

  public addReview(review: Omit<Review, 'id' | 'date'>): Review {
    const list = this.getReviews();
    const newRev: Review = {
      ...review,
      id: `rev-${Date.now()}`,
      date: new Date().toISOString().split('T')[0]
    };
    list.unshift(newRev);
    this.setItem(STORAGE_KEYS.REVIEWS, list);
    return newRev;
  }

  // --- BLOGS ---
  public getBlogs(): BlogPost[] {
    return this.getItem<BlogPost[]>(STORAGE_KEYS.BLOGS, INITIAL_BLOGS);
  }

  public saveBlogPost(post: BlogPost): BlogPost {
    const list = this.getBlogs();
    const index = list.findIndex(p => p.id === post.id);
    if (index >= 0) {
      list[index] = post;
    } else {
      list.unshift(post);
    }
    this.setItem(STORAGE_KEYS.BLOGS, list);
    return post;
  }

  // --- CMS CONTENT ---
  public getCMS(): CMSContent {
    return this.getItem<CMSContent>(STORAGE_KEYS.CMS, INITIAL_CMS);
  }

  public updateCMS(cms: Partial<CMSContent>): CMSContent {
    const current = this.getCMS();
    const updated = { ...current, ...cms };
    this.setItem(STORAGE_KEYS.CMS, updated);
    return updated;
  }

  // Reset to initial seed data
  public resetToDefaults(): void {
    localStorage.clear();
    this.init();
  }
}

export const dataStore = new DataStoreService();
