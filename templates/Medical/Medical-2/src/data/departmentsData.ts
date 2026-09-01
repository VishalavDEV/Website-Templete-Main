import { Department } from '../types';

export const departmentsData: Department[] = [
  {
    id: 'dept-cardio',
    name: 'Cardiology & Vascular',
    slug: 'cardiology',
    iconName: 'HeartPulse',
    shortDesc: 'Comprehensive care for complex heart conditions, arrhythmias, coronary artery disease, and vascular health.',
    fullDesc: 'The Medicio Cardiovascular Institute integrates cutting-edge interventional cardiology, electrophysiology, and non-invasive vascular diagnostics with personalized preventive strategies. Our hybrid catheterization labs and cardiac intensive care unit ensure rapid-response lifesaving intervention 24/7.',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=1200&q=80',
    headDoctorId: 'doc-elena-vance',
    headDoctorName: 'Dr. Elena Vance, MD, FACC',
    keyEquipment: [
      '3D Biplane Cardiac Angiography System',
      'High-Resolution Transesophageal Echocardiography',
      'Advanced Electrophysiology Mapping Console',
      'Continuous Telemetric Hemodynamic Monitors'
    ],
    servicesList: [
      'Coronary Angioplasty & Stenting',
      'Arrhythmia & Pacemaker Management',
      'Heart Failure Optimization Clinic',
      'Preventive Cardiovascular Risk Scoring'
    ],
    operatingHours: '24/7 Emergency Catheterization | Clinics: Mon-Fri 8:00 AM - 6:00 PM',
    bedCapacity: 45,
    emergencyReady: true,
  },
  {
    id: 'dept-neuro',
    name: 'Neurology & Neurosurgery',
    slug: 'neurology',
    iconName: 'Brain',
    shortDesc: 'Advanced diagnosis and treatment for stroke, epilepsy, neurodegenerative disorders, and spine care.',
    fullDesc: 'Our Neuroscience Center is a certified Comprehensive Stroke Center equipped with intraoperative neurological monitoring, stereotactic navigation, and dedicated neuro-critical care. We blend clinical expertise with empathetic neuro-rehabilitation.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
    headDoctorId: 'doc-marcus-hayes',
    headDoctorName: 'Dr. Marcus Hayes, MD, PhD',
    keyEquipment: [
      'Intraoperative Neuronavigation System',
      'Continuous 64-Channel Video EEG Monitoring',
      'Transcranial Magnetic Stimulation (TMS)',
      'High-Field 3T Functional Neuro-MRI'
    ],
    servicesList: [
      'Rapid Acute Stroke Intervention',
      'Comprehensive Epilepsy Evaluation',
      'Minimally Invasive Spine & Brain Surgery',
      'Memory & Cognitive Disorder Programs'
    ],
    operatingHours: '24/7 Acute Stroke Triage | Clinics: Mon-Fri 8:30 AM - 5:30 PM',
    bedCapacity: 38,
    emergencyReady: true,
  },
  {
    id: 'dept-ortho',
    name: 'Orthopedics & Sports Medicine',
    slug: 'orthopedics',
    iconName: 'Bone',
    shortDesc: 'Precision joint replacement, sports injury reconstruction, spinal restoration, and physical recovery.',
    fullDesc: 'From robotic-assisted total hip and knee arthroplasty to elite sports ligament reconstruction, our orthopedic team utilizes minimally invasive techniques designed to accelerate mobility, reduce surgical trauma, and ensure rapid rehabilitation.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    headDoctorId: 'doc-sarah-jenkins',
    headDoctorName: 'Dr. Sarah Jenkins, MD, FAAOS',
    keyEquipment: [
      'MAKO Robotic Joint Surgical System',
      'High-Definition Arthroscopic Cameras',
      'Dynamic Gait Analysis Laboratory',
      'Cryotherapy & Recovery Acceleration Units'
    ],
    servicesList: [
      'Robotic Knee & Hip Replacement',
      'Rotator Cuff & ACL Reconstruction',
      'Pediatric & Adult Fracture Care',
      'Interventional Spine Injections'
    ],
    operatingHours: 'Mon-Sat: 7:30 AM - 6:00 PM | Urgent Ortho Walk-in Available',
    bedCapacity: 32,
    emergencyReady: true,
  },
  {
    id: 'dept-peds',
    name: 'Pediatrics & Adolescent Care',
    slug: 'pediatrics',
    iconName: 'Baby',
    shortDesc: 'Compassionate pediatric wellness, neonatal intensive care, developmental tracking, and childhood medicine.',
    fullDesc: 'Designed to put young patients and their families at ease, our Pediatric Wing combines a joyful, child-friendly environment with world-class pediatric specialists, Level-III NICU support, and dedicated adolescent healthcare practitioners.',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1200&q=80',
    headDoctorId: 'doc-aisha-patel',
    headDoctorName: 'Dr. Aisha Patel, MD, FAAP',
    keyEquipment: [
      'Level III Neonatal Incubators & Pods',
      'Child-Friendly Low-Dose Digital X-Ray',
      'Pediatric Pulmonary Function Testing',
      'Sensory-Friendly Examination Suites'
    ],
    servicesList: [
      'Well-Child Checks & Immunizations',
      'Pediatric Asthma & Allergy Management',
      'Developmental & Behavioral Screenings',
      '24/7 Pediatric Urgent Care'
    ],
    operatingHours: '24/7 Pediatric Urgent Care | Outpatient: Mon-Sat 8:00 AM - 7:00 PM',
    bedCapacity: 40,
    emergencyReady: true,
  },
  {
    id: 'dept-derma',
    name: 'Dermatology & Skin Health',
    slug: 'dermatology',
    iconName: 'Sparkles',
    shortDesc: 'Clinical dermatology, skin cancer screenings, Mohs micrographic surgery, and therapeutic aesthetics.',
    fullDesc: 'Our Dermatology Center provides evidence-based medical, surgical, and cosmetic skin care. Using dermoscopic digital mapping and photodynamic therapy, we address both chronic dermatologic conditions and aesthetic concerns with highest clinical safety.',
    image: 'https://images.unsplash.com/photo-1512290900672-1f5076eb43df?auto=format&fit=crop&w=1200&q=80',
    headDoctorId: 'doc-julian-ross',
    headDoctorName: 'Dr. Julian Ross, MD, FAAD',
    keyEquipment: [
      'FotoFinder Automated Total Body Dermoscopy',
      'Fractional CO2 & Pulsed-Dye Laser Suites',
      'Mohs Frozen-Section Histology Lab',
      'Targeted Narrowband UVB Phototherapy Unit'
    ],
    servicesList: [
      'Comprehensive Full-Body Skin Cancer Screen',
      'Mohs Micrographic Skin Surgery',
      'Psoriasis, Eczema & Acne Biologics Clinic',
      'Medical Laser Scar & Vascular Therapy'
    ],
    operatingHours: 'Mon-Fri: 8:30 AM - 5:30 PM | Sat: 9:00 AM - 1:00 PM',
    bedCapacity: 12,
    emergencyReady: false,
  },
  {
    id: 'dept-genmed',
    name: 'Internal & General Medicine',
    slug: 'general-medicine',
    iconName: 'Stethoscope',
    shortDesc: 'Primary healthcare, chronic disease management, executive physicals, and comprehensive wellness.',
    fullDesc: 'Serving as the cornerstone of lifelong wellness, our Internal Medicine physicians provide integrated care for adults. We coordinate multi-specialty evaluations, manage complex multi-system disorders, and champion preventive lifestyle health.',
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200&q=80',
    headDoctorId: 'doc-david-kim',
    headDoctorName: 'Dr. David Kim, MD, FACP',
    keyEquipment: [
      'Comprehensive Point-of-Care Ultrasound (POCUS)',
      'Digital Electrocardiogram & Spirometry',
      'Rapid In-Clinic Diagnostic Blood Analyzer',
      'Continuous Ambulatory Blood Pressure Recorders'
    ],
    servicesList: [
      'Annual Comprehensive Executive Physicals',
      'Diabetes & Hypertension Management',
      'Geriatric & Multi-Condition Coordination',
      'Travel Immunizations & Wellness Plans'
    ],
    operatingHours: 'Mon-Sat: 7:00 AM - 7:00 PM | Walk-in triage available',
    bedCapacity: 50,
    emergencyReady: true,
  },
  {
    id: 'dept-diag',
    name: 'Diagnostic Radiology & Lab',
    slug: 'diagnostics',
    iconName: 'ScanLine',
    shortDesc: 'Ultra-high-definition imaging, nuclear medicine, molecular pathology, and rapid diagnostic testing.',
    fullDesc: 'Accurate clinical decisions begin with precise diagnostics. Our diagnostic pavilion features high-resolution 3T MRI, 128-slice dual-energy CT scanners, digital 3D mammography, and fully automated robotic molecular laboratories delivering results within hours.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    headDoctorId: 'doc-clara-monroe',
    headDoctorName: 'Dr. Clara Monroe, MD, FACR',
    keyEquipment: [
      '3.0 Tesla Silent MRI with Ambient Lighting',
      '128-Slice Low-Dose Spectral CT Scanner',
      '3D Digital Breast Tomosynthesis (Mammography)',
      'Fully Automated Molecular & Immuno-Chemistry Track'
    ],
    servicesList: [
      'Whole Body Diagnostic MRI & CT Scans',
      'Color Doppler Ultrasound & Echo',
      'Comprehensive Pathology & Genomic Testing',
      'Image-Guided Biopsies & Interventions'
    ],
    operatingHours: '24/7 Inpatient & Emergency Radiology | Outpatient: Mon-Sat 7:00 AM - 9:00 PM',
    bedCapacity: 20,
    emergencyReady: true,
  }
];
