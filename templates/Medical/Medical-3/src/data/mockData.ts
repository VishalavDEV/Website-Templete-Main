import { Doctor, Department, MedicalService, Appointment, PatientVitals, Prescription, LabResult, NotificationItem, CampusEmergencyStatus } from '../types';
import drElenaPhoto from '../assets/images/dr_elena_rostova_1787046836475.jpg';

export const DEPARTMENTS_DATA: Department[] = [
  {
    id: 'cardiology',
    name: 'Cardiology & Vascular Institute',
    code: 'CARDIO',
    shortDescription: 'World-leading precision cardiovascular diagnostics, catheterization, and minimally invasive cardiac surgery.',
    fullDescription: 'Our Cardiology & Vascular Institute brings together world-class electrophysiologists, interventional cardiologists, and cardiothoracic surgeons. Utilizing 4D echocardiography and catheter-based valve replacement, we provide unmatched cardiovascular outcomes.',
    iconName: 'HeartPulse',
    specialistCount: 18,
    headOfDepartment: 'Dr. Sarah Lin, MD, FACC',
    keyProcedures: ['Transcatheter Aortic Valve Replacement (TAVR)', 'Electrophysiology 3D Mapping', 'Coronary Angioplasty & Stenting', 'Advanced Heart Failure Management'],
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#0D9488',
    stats: [
      { label: 'Annual Procedures', value: '4,200+' },
      { label: 'Success Rate', value: '99.4%' },
      { label: 'Avg Door-to-Balloon', value: '38 mins' },
    ]
  },
  {
    id: 'neurology',
    name: 'Neurology & Brain Sciences',
    code: 'NEURO',
    shortDescription: 'Pioneering neurosurgical interventions, stroke rescue protocols, and neuro-regenerative clinical therapies.',
    fullDescription: 'Equipped with functional 3T MRI, robotic neuro-navigation, and intraoperative neuromonitoring, our Neurology & Brain Sciences Center delivers cutting-edge care for complex brain, spine, and peripheral nerve disorders.',
    iconName: 'Brain',
    specialistCount: 14,
    headOfDepartment: 'Dr. Marcus Vance, MD, PhD, FAANS',
    keyProcedures: ['Robotic Spine Stabilization', 'Endovascular Stroke Thrombectomy', 'Deep Brain Stimulation (DBS)', 'Comprehensive Epilepsy Monitoring'],
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#06B6D4',
    stats: [
      { label: 'Neurosurgery Precision', value: '99.8%' },
      { label: 'Stroke Window Rescue', value: '< 25 min' },
      { label: 'Clinical Trials Active', value: '24' },
    ]
  },
  {
    id: 'oncology',
    name: 'Precision Oncology & Genomics',
    code: 'ONCO',
    shortDescription: 'Targeted immunotherapy, cellular genetic profiling, and compassionate multi-disciplinary cancer treatment.',
    fullDescription: 'Aurevia Precision Oncology utilizes next-generation genomic sequencing to pinpoint tumor mutations and tailor immunotherapy treatments specifically to each patient DNA signature.',
    iconName: 'ShieldAlert',
    specialistCount: 16,
    headOfDepartment: 'Dr. Elena Rostova, MD, PhD',
    keyProcedures: ['Next-Gen DNA Tumor Profiling', 'CAR-T Cell Immunotherapy', 'Stereotactic Radiosurgery (TrueBeam)', 'Minimally Invasive Robotic Resection'],
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#0A1128',
    stats: [
      { label: '5-Yr Remission Rate', value: '88.5%' },
      { label: 'Targeted Therapies', value: '140+' },
      { label: 'Board-Certified Oncologists', value: '16' },
    ]
  },
  {
    id: 'orthopedics',
    name: 'Orthopedic & Joint Reconstruction',
    code: 'ORTHO',
    shortDescription: 'Computer-navigated joint replacements, elite sports medicine, and rapid-recovery spinal restoration.',
    fullDescription: 'Our Orthopedic Center utilizes Mako robotic-arm assisted arthroplasty for sub-millimeter precision in hip, knee, and shoulder replacements, allowing patients to walk the same afternoon.',
    iconName: 'Activity',
    specialistCount: 15,
    headOfDepartment: 'Dr. David Chen, MD, FAAOS',
    keyProcedures: ['Mako Robotic Total Knee & Hip', 'Minimally Invasive Arthroscopy', 'ACL Biomechanical Reconstruction', 'Spine Endoscopic Decompression'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#0D9488',
    stats: [
      { label: 'Robotic Arthroplasties', value: '3,100+' },
      { label: 'Same-Day Discharge', value: '82%' },
      { label: 'Patient Mobility Score', value: '96/100' },
    ]
  },
  {
    id: 'pediatrics',
    name: 'Pediatric & Neonatal Medicine',
    code: 'PEDI',
    shortDescription: 'Comprehensive, empathetic pediatric sub-specialties from Level IV NICU to adolescent development.',
    fullDescription: 'Dedicated to children from birth through adolescence, our state-of-the-art facility pairs clinical excellence with a warm, child-friendly environment designed to minimize anxiety.',
    iconName: 'Smile',
    specialistCount: 12,
    headOfDepartment: 'Dr. Maya Patel, MD, FAAP',
    keyProcedures: ['Level IV Neonatal Intensive Care', 'Pediatric Pulmonology & Allergy', 'Congenital Cardiac Screening', 'Pediatric Neurodevelopmental Care'],
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#06B6D4',
    stats: [
      { label: 'NICU Survival Rate', value: '99.1%' },
      { label: 'Families Supported', value: '12,000+' },
      { label: 'Dedicated Sub-Specialties', value: '9' },
    ]
  },
  {
    id: 'dermatology',
    name: 'Dermatology & Photomedicine',
    code: 'DERM',
    shortDescription: 'AI-assisted dermoscopy, Mohs micrographic surgery, and advanced laser restorative treatments.',
    fullDescription: 'Combining clinical dermatopathology with aesthetic laser medicine, our department delivers rapid melanoma screening, Mohs surgery, and therapeutic phototherapy.',
    iconName: 'Sparkles',
    specialistCount: 9,
    headOfDepartment: 'Dr. Julian Thorne, MD, FAAD',
    keyProcedures: ['Mohs Micrographic Cancer Surgery', 'Digital Whole-Body Mole Mapping', 'Excimer Laser Phototherapy', 'Advanced Biologics for Psoriasis'],
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#0A1128',
    stats: [
      { label: 'Early Melanoma Detection', value: '99.5%' },
      { label: 'Mohs Clear Margin Rate', value: '99.7%' },
      { label: 'Patient Comfort Rating', value: '4.9/5' },
    ]
  }
];

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'dr-sarah-lin',
    name: 'Dr. Sarah Lin',
    title: 'MD, FACC, FSCAI',
    departmentId: 'cardiology',
    departmentName: 'Cardiology & Vascular Institute',
    specialty: 'Interventional Cardiology',
    subSpecialty: 'Structural Heart & TAVR',
    rating: 4.98,
    reviewsCount: 342,
    experienceYears: 16,
    fee: 2200,
    photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    education: [
      'Doctor of Medicine (MD) — Harvard Medical School',
      'Cardiology Fellowship — Johns Hopkins Hospital',
      'Interventional Cardiology Fellow — Cleveland Clinic'
    ],
    languages: ['English', 'Mandarin'],
    hospitalAffiliation: 'Aurevia Metro Central Campus (Building A, 5th Floor)',
    bio: 'Dr. Sarah Lin is Chief of Interventional Cardiology at Aurevia Health. With over 3,000 structural heart procedures completed, she is globally recognized for her research on minimally invasive transcatheter valves and precision coronary hemodynamics.',
    acceptedInsurance: ['Blue Cross Blue Shield', 'Aetna Premier', 'UnitedHealthcare', 'Cigna', 'Medicare Choice'],
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    availableSlots: ['09:00 AM', '10:30 AM', '01:30 PM', '03:00 PM', '04:30 PM'],
    isAvailableToday: true,
    isAvailableTomorrow: true,
    telemedicineAvailable: true,
    inPersonAvailable: true,
    nextAvailableSlot: 'Today at 01:30 PM',
    featuredTreatments: ['TAVR Valve Replacement', 'Coronary Stenting', 'MitraClip Repair', 'Preventative Cardiology'],
    awards: ['Top Cardiologist of the Year 2025', 'American Heart Association Distinguished Fellow'],
    location: 'Metro Central Pavilion, Ste 502'
  },
  {
    id: 'dr-marcus-vance',
    name: 'Dr. Marcus Vance',
    title: 'MD, PhD, FAANS',
    departmentId: 'neurology',
    departmentName: 'Neurology & Brain Sciences',
    specialty: 'Neurosurgery & Neuro-Oncology',
    subSpecialty: 'Robotic Spine & Cranial Tumors',
    rating: 4.96,
    reviewsCount: 289,
    experienceYears: 19,
    fee: 3000,
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    education: [
      'MD / PhD in Neuroscience — Stanford University',
      'Neurosurgery Residency — Mass General Brigham',
      'Complex Spine Fellowship — UCSF Medical Center'
    ],
    languages: ['English', 'German'],
    hospitalAffiliation: 'Aurevia Neurological Research Center',
    bio: 'Dr. Marcus Vance is an internationally acclaimed neurosurgeon specializing in image-guided cranial surgery, brain tumor resections, and minimally invasive robotic spinal reconstruction with rapid recovery protocols.',
    acceptedInsurance: ['Blue Cross Blue Shield', 'UnitedHealthcare', 'Aetna', 'Oxford Health', 'Humana'],
    availableDays: ['Monday', 'Wednesday', 'Friday'],
    availableSlots: ['08:30 AM', '11:00 AM', '02:00 PM', '04:00 PM'],
    isAvailableToday: false,
    isAvailableTomorrow: true,
    telemedicineAvailable: true,
    inPersonAvailable: true,
    nextAvailableSlot: 'Tomorrow at 08:30 AM',
    featuredTreatments: ['Endoscopic Brain Tumor Resection', 'Robotic Spine Fusion', 'Deep Brain Stimulation', 'Trigeminal Neuralgia'],
    awards: ['National Neurosurgeon Excellence Prize', 'NIH Neuroscience Investigator Award'],
    location: 'Innovation Brain Tower, Ste 810'
  },
  {
    id: 'dr-elena-rostova',
    name: 'Dr. Elena Rostova',
    title: 'MD, PhD',
    departmentId: 'oncology',
    departmentName: 'Precision Oncology & Genomics',
    specialty: 'Medical Oncology & Hematology',
    subSpecialty: 'Immunotherapy & Targeted Genomics',
    rating: 4.99,
    reviewsCount: 410,
    experienceYears: 14,
    fee: 2800,
    photoUrl: drElenaPhoto,
    education: [
      'Doctor of Medicine (MD) — Columbia University Vagelos',
      'Hematology/Oncology Fellowship — Memorial Sloan Kettering Cancer Center',
      'Postdoctoral Fellowship in Cancer Genomics — Dana-Farber'
    ],
    languages: ['English', 'Russian', 'French'],
    hospitalAffiliation: 'Aurevia Cancer Discovery Hospital',
    bio: 'Dr. Elena Rostova leads the Precision Immuno-Oncology program. Her clinical work focuses on applying DNA biomarker profiling to design hyper-targeted therapies that stimulate patient immune systems against difficult-to-treat malignancies.',
    acceptedInsurance: ['Aetna', 'Blue Cross', 'Cigna', 'Medicare Choice', 'Humana'],
    availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    availableSlots: ['09:30 AM', '11:00 AM', '01:00 PM', '03:30 PM'],
    isAvailableToday: true,
    isAvailableTomorrow: true,
    telemedicineAvailable: true,
    inPersonAvailable: true,
    nextAvailableSlot: 'Today at 03:30 PM',
    featuredTreatments: ['Targeted DNA-Guided Chemotherapy', 'CAR-T Cell Therapy', 'Melanoma & Lung Immunotherapy', 'Clinical Trial Navigation'],
    awards: ['ASCO Young Investigator Laureate', 'Pioneer in Cancer Genomics 2024'],
    location: 'Discovery Oncology Wing, Ste 304'
  },
  {
    id: 'dr-david-chen',
    name: 'Dr. David Chen',
    title: 'MD, FAAOS',
    departmentId: 'orthopedics',
    departmentName: 'Orthopedic & Joint Reconstruction',
    specialty: 'Orthopedic Surgery & Sports Medicine',
    subSpecialty: 'Robotic Arthroplasty & Knee Reconstruction',
    rating: 4.94,
    reviewsCount: 312,
    experienceYears: 15,
    fee: 2000,
    photoUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
    education: [
      'Doctor of Medicine (MD) — University of Pennsylvania Perelman',
      'Orthopedic Surgery Residency — Hospital for Special Surgery (HSS)',
      'Sports Medicine Fellowship — Steadman Clinic'
    ],
    languages: ['English', 'Mandarin', 'Spanish'],
    hospitalAffiliation: 'Aurevia Sports Medicine & Joint Center',
    bio: 'Dr. David Chen serves as Head of Orthopedic Joint Restoration. He specializes in computer-assisted total knee and hip replacements that preserve natural ligament tension for immediate post-op ambulation.',
    acceptedInsurance: ['Blue Cross Blue Shield', 'Aetna', 'UnitedHealthcare', 'Guardian', 'Kaiser Permanente'],
    availableDays: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    availableSlots: ['08:00 AM', '10:00 AM', '01:00 PM', '02:45 PM'],
    isAvailableToday: true,
    isAvailableTomorrow: true,
    telemedicineAvailable: false,
    inPersonAvailable: true,
    nextAvailableSlot: 'Today at 02:45 PM',
    featuredTreatments: ['Mako Robotic Hip & Knee', 'Arthroscopic Rotator Cuff Repair', 'Anterior Approach Hip Replacement', 'ACL Stem-Enhanced Grafting'],
    awards: ['HSS Outstanding Alumnus Award', 'Top Sports Orthopedist Award 2025'],
    location: 'Westside Sports Health Center, Ste 108'
  },
  {
    id: 'dr-maya-patel',
    name: 'Dr. Maya Patel',
    title: 'MD, FAAP',
    departmentId: 'pediatrics',
    departmentName: 'Pediatric & Neonatal Medicine',
    specialty: 'Pediatric Pulmonology & Allergy',
    subSpecialty: 'Pediatric Critical Care',
    rating: 4.97,
    reviewsCount: 520,
    experienceYears: 13,
    fee: 1800,
    photoUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    education: [
      'Doctor of Medicine (MD) — Northwestern Feinberg',
      'Pediatrics Residency — Ann & Robert H. Lurie Children’s',
      'Pediatric Pulmonology Fellowship — Boston Children’s Hospital'
    ],
    languages: ['English', 'Hindi', 'Gujarati'],
    hospitalAffiliation: 'Aurevia Children’s Pavilion',
    bio: 'Dr. Maya Patel is a warm, highly dedicated pediatric pulmonologist focused on childhood asthma, chronic respiratory conditions, and congenital airways. Parents commend her patient-first communication and comforting demeanor.',
    acceptedInsurance: ['Blue Cross', 'Aetna Kids', 'UnitedHealthcare Child', 'Medicaid / CHIP', 'Cigna'],
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    availableSlots: ['09:00 AM', '11:15 AM', '02:00 PM', '04:15 PM'],
    isAvailableToday: true,
    isAvailableTomorrow: true,
    telemedicineAvailable: true,
    inPersonAvailable: true,
    nextAvailableSlot: 'Today at 11:15 AM',
    featuredTreatments: ['Pediatric Asthma Biologics', 'Pediatric Sleep & Airway Studies', 'Neonatal Respiratory Follow-up', 'Allergen Desensitization'],
    awards: ['Parent’s Choice Healthcare Provider 2025', 'Pediatric Care Innovation Award'],
    location: 'Children’s Pavilion, 3rd Floor'
  },
  {
    id: 'dr-julian-thorne',
    name: 'Dr. Julian Thorne',
    title: 'MD, FAAD, FACMS',
    departmentId: 'dermatology',
    departmentName: 'Dermatology & Photomedicine',
    specialty: 'Procedural Dermatology & Mohs Surgery',
    subSpecialty: 'Skin Oncology & Laser Phototherapy',
    rating: 4.95,
    reviewsCount: 265,
    experienceYears: 17,
    fee: 2100,
    photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    education: [
      'Doctor of Medicine (MD) — Yale School of Medicine',
      'Dermatology Residency — NYU Langone Health',
      'Mohs Micrographic Surgery Fellowship — Mayo Clinic'
    ],
    languages: ['English', 'French'],
    hospitalAffiliation: 'Aurevia Center for Cutaneous Excellence',
    bio: 'Dr. Julian Thorne is a dual-fellowship trained Mohs surgeon and dermatologist. He specializes in the surgical cure of skin cancers with micrographic precision, minimizing scarring while maximizing therapeutic certainty.',
    acceptedInsurance: ['Blue Cross Blue Shield', 'Aetna', 'Cigna', 'UnitedHealthcare', 'Medicare'],
    availableDays: ['Monday', 'Wednesday', 'Thursday'],
    availableSlots: ['08:45 AM', '10:30 AM', '01:15 PM', '03:45 PM'],
    isAvailableToday: false,
    isAvailableTomorrow: true,
    telemedicineAvailable: true,
    inPersonAvailable: true,
    nextAvailableSlot: 'Tomorrow at 08:45 AM',
    featuredTreatments: ['Mohs Skin Cancer Surgery', 'AI Full-Body Dermoscopy', 'Vascular & Pigment Laser', 'Biologic Eczema Therapies'],
    awards: ['American College of Mohs Surgery Honoree', 'Yale Clinical Faculty Award'],
    location: 'Dermatology Pavilion, Ste 402'
  }
];

export const MEDICAL_SERVICES_DATA: MedicalService[] = [
  {
    id: 'robotic-surgery',
    name: 'Da Vinci Xi Robotic Surgical Suite',
    category: 'Surgical Innovation',
    shortDesc: 'Sub-millimeter multi-quadrant robotic surgery with 3D high-definition magnification and tremor filtration.',
    fullDesc: 'Our Da Vinci Xi 4th-Generation surgical suites allow surgeons to perform complex cardiac, thoracic, urological, and gynecological procedures through incisions smaller than a dime, drastically reducing post-operative pain and blood loss.',
    iconName: 'Cpu',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
    benefits: ['90% less blood loss compared to open surgery', 'Discharge within 24-48 hours', 'Minimal post-procedure discomfort', 'Sub-millimeter wrist articulacy'],
    turnaroundTime: 'Same-day to 48-hr recovery',
    technologyUsed: 'Intuitive Da Vinci Xi 4-Arm Multi-Spectrum System',
    priceEstimate: 'Covered under Major Insurance / ₹2,50,000'
  },
  {
    id: '3t-mri-imaging',
    name: '3T Ultra-Silent MRI & Dual-Source CT',
    category: 'Diagnostic Radiology',
    shortDesc: 'Deep-learning accelerated neuro, cardiac, and musculoskeletal scans with 70% acoustic noise reduction.',
    fullDesc: 'State-of-the-art 3-Tesla high-field magnetic resonance imaging provides unmatched microscopic tissue contrast. Enhanced by AI image reconstruction, scans take half the traditional time with zero claustrophobia.',
    iconName: 'Scan',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
    benefits: ['Sub-millimeter spatial resolution', 'Acoustic dampening for serene experience', 'AI-assisted rapid 12-minute scans', 'Direct instant upload to Patient Portal'],
    turnaroundTime: 'Results within 2 hours',
    technologyUsed: 'Siemens MAGNETOM Vida 3T BioMatrix',
    priceEstimate: '₹4,500 Diagnostic Copay'
  },
  {
    id: 'genomic-profiling',
    name: 'Clinical Genomics & Hereditary Biomarkers',
    category: 'Preventative Medicine',
    shortDesc: 'Whole-exome sequencing to predict drug sensitivities, hereditary cardiac risks, and oncological predispositions.',
    fullDesc: 'Our on-campus molecular pathology labs perform rapid genetic sequencing to customize your pharmacogenomics (how your liver metabolizes medications) and provide proactive disease risk mitigations.',
    iconName: 'Dna',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80',
    benefits: ['Over 500 hereditary risk markers mapped', 'Personalized prescription safety matrix', 'One-on-one genetic counseling', 'Secure HIPAA-encrypted DNA vault'],
    turnaroundTime: '5-7 business days',
    technologyUsed: 'Illumina NovaSeq X Clinical Sequencing Array',
    priceEstimate: '₹28,500 or Insurance Approved'
  },
  {
    id: 'telehealth-hd',
    name: 'Aurevia Telehealth HD & Remote Monitoring',
    category: 'Virtual Care',
    shortDesc: 'End-to-end encrypted high-fidelity video consultations with direct electronic prescription routing.',
    fullDesc: 'Connect securely with your board-certified specialist from the comfort of your home. Incorporates instant screen sharing of diagnostic scans, synchronized vital signs telemetry, and seamless e-pharmacy delivery.',
    iconName: 'Video',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80',
    benefits: ['Zero commute time or clinic waiting', 'Direct digital prescriptions sent to your pharmacy', 'Integrated vitals logging and notes', '256-bit AES military-grade clinical encryption'],
    turnaroundTime: 'Instant on-demand or scheduled',
    technologyUsed: 'Aurevia WebRTC 4K Clinical Stream',
    priceEstimate: '₹600 - ₹1,500 Standard Telehealth'
  }
];

export const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: 'AV-84920',
    doctorId: 'dr-sarah-lin',
    doctorName: 'Dr. Sarah Lin',
    doctorSpecialty: 'Interventional Cardiology',
    doctorPhoto: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    doctorLocation: 'Metro Central Pavilion, Ste 502',
    date: '2026-08-20',
    timeSlot: '10:30 AM',
    mode: 'telehealth',
    patientName: 'Alex Morgan',
    patientPhone: '+1 (555) 234-8901',
    patientEmail: 'alex.morgan@healthmail.com',
    reason: 'Follow-up on 4D Echocardiogram & BP Optimization',
    symptoms: 'Mild resting palpitations after workouts',
    insuranceProvider: 'Blue Cross Blue Shield PPO',
    insurancePolicyNumber: 'BC-994821034',
    notes: 'Please review recent wearable ECG logs prior to appointment.',
    status: 'confirmed',
    createdAt: '2026-08-15T14:20:00Z',
    meetingLink: 'https://meet.aurevia.health/room/AV-84920',
    fee: 2200
  },
  {
    id: 'AV-83109',
    doctorId: 'dr-maya-patel',
    doctorName: 'Dr. Maya Patel',
    doctorSpecialty: 'Pediatric Pulmonology & Allergy',
    doctorPhoto: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    doctorLocation: 'Children’s Pavilion, 3rd Floor',
    date: '2026-08-17',
    timeSlot: '02:00 PM',
    mode: 'in_person',
    patientName: 'Liam Morgan',
    patientPhone: '+1 (555) 234-8901',
    patientEmail: 'alex.morgan@healthmail.com',
    reason: 'Routine Pediatric Asthma Check & Spirometry',
    symptoms: 'Occasional seasonal nighttime coughing',
    insuranceProvider: 'Blue Cross Blue Shield PPO',
    status: 'completed',
    createdAt: '2026-08-10T09:15:00Z',
    fee: 1800
  }
];

export const INITIAL_VITALS: PatientVitals = {
  bloodPressure: '118/76 mmHg',
  heartRate: 68,
  oxygenLevel: 99,
  bloodGlucose: 94,
  weightKg: 72.4,
  lastUpdated: 'Today at 07:45 AM (Synced from Smart Band)'
};

export const INITIAL_PRESCRIPTIONS: Prescription[] = [
  {
    id: 'rx-101',
    medicationName: 'Rosuvastatin Calcium',
    dosage: '10 mg',
    frequency: 'Once daily at bedtime',
    prescribingDoctor: 'Dr. Sarah Lin',
    refillsRemaining: 3,
    expiryDate: 'Dec 15, 2026'
  },
  {
    id: 'rx-102',
    medicationName: 'Ventolin HFA (Albuterol Inhaler)',
    dosage: '90 mcg/actuation',
    frequency: '2 puffs every 4-6 hrs as needed',
    prescribingDoctor: 'Dr. Maya Patel',
    refillsRemaining: 2,
    expiryDate: 'Nov 01, 2026'
  }
];

export const INITIAL_LAB_RESULTS: LabResult[] = [
  {
    id: 'lab-904',
    testName: 'Comprehensive Metabolic Panel (CMP-14)',
    category: 'Biochemistry',
    date: 'Aug 14, 2026',
    status: 'Normal',
    orderingDoctor: 'Dr. Sarah Lin',
    downloadUrl: '#'
  },
  {
    id: 'lab-905',
    testName: 'Advanced Lipid Fractionation & ApoB',
    category: 'Cardiovascular',
    date: 'Aug 14, 2026',
    status: 'Normal',
    orderingDoctor: 'Dr. Sarah Lin',
    downloadUrl: '#'
  },
  {
    id: 'lab-906',
    testName: '25-Hydroxy Vitamin D & Serum Ferritin',
    category: 'Endocrinology',
    date: 'Jul 22, 2026',
    status: 'Follow-up Recommended',
    orderingDoctor: 'Dr. David Chen',
    downloadUrl: '#'
  }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Upcoming Telehealth Consultation',
    description: 'Dr. Sarah Lin is scheduled for tomorrow at 10:30 AM. Video link is active.',
    timestamp: '20 mins ago',
    read: false,
    type: 'appointment'
  },
  {
    id: 'notif-2',
    title: 'Lab Results Ready for Review',
    description: 'Comprehensive Metabolic Panel results have been verified by the pathology laboratory.',
    timestamp: 'Yesterday',
    read: false,
    type: 'lab'
  },
  {
    id: 'notif-3',
    title: 'Prescription Refill Approved',
    description: 'Rosuvastatin Calcium 10mg has been transmitted to Walgreens Pharmacy #4190.',
    timestamp: '3 days ago',
    read: true,
    type: 'prescription'
  }
];

export const CAMPUS_EMERGENCY_DATA: CampusEmergencyStatus[] = [
  {
    id: 'metro-central',
    name: 'Aurevia Metro Central Campus',
    address: '742 Healthcare Blvd, Medical District',
    distance: '1.4 miles',
    currentWaitMinutes: 8,
    capacityStatus: 'Normal',
    traumaLevel: 'Level 1 Adult & Pediatric Trauma Center',
    phone: '+1 (800) 227-3911',
    openHours: 'Open 24/7 / 365 Days'
  },
  {
    id: 'westside-innovation',
    name: 'Aurevia Westside Surgical & Urgent Care',
    address: '120 Innovation Way, Westside',
    distance: '4.8 miles',
    currentWaitMinutes: 12,
    capacityStatus: 'Normal',
    traumaLevel: 'Comprehensive Urgent & Cardiac Receiving Center',
    phone: '+1 (800) 227-3912',
    openHours: 'Open 24/7 / 365 Days'
  },
  {
    id: 'bayview-clinical',
    name: 'Aurevia Bayview Emergency Pavilion',
    address: '900 Harbor Point Drive, Bayview',
    distance: '7.2 miles',
    currentWaitMinutes: 15,
    capacityStatus: 'Moderate',
    traumaLevel: 'Level 2 Trauma & Stroke Fast-Track Center',
    phone: '+1 (800) 227-3913',
    openHours: 'Open 24/7 / 365 Days'
  }
];
