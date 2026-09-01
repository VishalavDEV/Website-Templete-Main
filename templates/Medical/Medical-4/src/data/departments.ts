import { Department } from '../types';

export const departments: Department[] = [
  {
    id: 1,
    name: "Cardiology",
    slug: "cardiology",
    shortDescription: "Comprehensive care for heart and cardiovascular conditions.",
    description: "Our Department of Cardiology provides advanced evaluation, diagnosis, treatment, and ongoing management for a wide range of cardiovascular conditions. Supported by modern cardiac catheterization labs and experienced specialists, we deliver life-saving interventions and preventive care.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    icon: "HeartPulse",
    status: "active",
    services: [
      "Heart Health Evaluation & Risk Assessment",
      "Electrocardiogram (ECG) & Echocardiography",
      "Cardiac Consultation & Management",
      "Blood Pressure & Hypertension Care",
      "Preventive Cardiology Programs"
    ],
    highlights: [
      "24/7 cardiac emergency support",
      "Experienced interventional cardiologists",
      "State-of-the-art diagnostic imaging"
    ]
  },
  {
    id: 2,
    name: "Neurology",
    slug: "neurology",
    shortDescription: "Specialized diagnosis and treatment for neurological conditions.",
    description: "The Neurology department is dedicated to diagnosing and treating disorders of the brain, spinal cord, nerves, and muscles. We combine clinical expertise with advanced electrophysiological testing to care for stroke, epilepsy, headache, and neurodegenerative disorders.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    icon: "Brain",
    status: "active",
    services: [
      "Comprehensive Neurological Consultation",
      "EEG & Nerve Conduction Studies",
      "Stroke Care & Rehabilitation Support",
      "Headache & Migraine Management",
      "Memory & Cognitive Disorder Clinic"
    ],
    highlights: [
      "Specialized stroke care protocols",
      "Advanced neuro-diagnostic equipment",
      "Multidisciplinary rehabilitation support"
    ]
  },
  {
    id: 3,
    name: "Orthopedics",
    slug: "orthopedics",
    shortDescription: "Expert care for bones, joints, muscles, and mobility.",
    description: "Our Orthopedics department offers specialized care for musculoskeletal issues, sports injuries, joint replacement, and spinal conditions. We focus on restoring mobility and relieving pain through advanced surgical and non-surgical treatments.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800",
    icon: "Bone",
    status: "active",
    services: [
      "Joint Replacement Surgery (Knee & Hip)",
      "Sports Injury Management & Arthroscopy",
      "Spine Care & Rehabilitation",
      "Fracture & Trauma Care",
      "Physiotherapy & Mobility Support"
    ],
    highlights: [
      "Minimal invasive joint procedures",
      "Dedicated orthopedic operation theatres",
      "Comprehensive post-operative physiotherapy"
    ]
  },
  {
    id: 4,
    name: "Pediatrics",
    slug: "pediatrics",
    shortDescription: "Dedicated healthcare services for infants, children, and adolescents.",
    description: "Pediatrics at MediCare provides warm, child-friendly healthcare services ranging from newborn care and routine vaccinations to developmental assessments and adolescent medicine, guided by experienced pediatricians.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
    icon: "Baby",
    status: "active",
    services: [
      "Newborn Care & Neonatology Support",
      "Routine Child Immunization & Vaccination",
      "Growth & Developmental Monitoring",
      "Pediatric Acute Illness Treatment",
      "Adolescent Health Counseling"
    ],
    highlights: [
      "Child-friendly healing environment",
      "Dedicated immunization clinic",
      "24/7 pediatric emergency coverage"
    ]
  },
  {
    id: 5,
    name: "Dermatology",
    slug: "dermatology",
    shortDescription: "Diagnosis and treatment for skin, hair, and nail conditions.",
    description: "Our Dermatology department offers medical, surgical, and cosmetic skin care services. We treat conditions such as acne, eczema, psoriasis, skin infections, and hair disorders with advanced dermatological techniques.",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=800",
    icon: "Sparkles",
    status: "active",
    services: [
      "General Dermatological Consultations",
      "Acne & Scar Treatment Management",
      "Psoriasis & Eczema Care",
      "Skin Allergy Testing & Treatment",
      "Hair Loss Assessment & Care"
    ],
    highlights: [
      "Evidence-based dermatological therapies",
      "Personalized skin care regimens",
      "Advanced therapeutic lasers"
    ]
  },
  {
    id: 6,
    name: "General Medicine",
    slug: "general-medicine",
    shortDescription: "Comprehensive medical consultation and preventive healthcare.",
    description: "General Medicine forms the cornerstone of our hospital, offering primary care, management of chronic illnesses like diabetes and hypertension, fever evaluations, and comprehensive health checkups.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    icon: "Stethoscope",
    status: "active",
    services: [
      "Primary Medical Consultation",
      "Diabetes & Hypertension Management",
      "Chronic Disease Monitoring",
      "Preventive Health Checkups",
      "Fever & Infectious Disease Care"
    ],
    highlights: [
      "Holistic patient evaluation",
      "Coordinated specialty referrals",
      "Preventive health focus"
    ]
  },
  {
    id: 7,
    name: "Gastroenterology",
    slug: "gastroenterology",
    shortDescription: "Advanced care for digestive system and liver disorders.",
    description: "Specialized diagnostics and treatment for gastrointestinal tract, liver, gallbladder, and pancreatic disorders using advanced endoscopy and clinical expertise.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800",
    icon: "Activity",
    status: "active",
    services: [
      "Diagnostic Endoscopy & Colonoscopy",
      "Liver Disease Management",
      "Acid Reflux & Ulcer Treatment",
      "IBS & Digestive Health Support"
    ]
  },
  {
    id: 8,
    name: "Pulmonology",
    slug: "pulmonology",
    shortDescription: "Respiratory care for asthma, COPD, and lung conditions.",
    description: "Comprehensive care for respiratory disorders, pulmonary function testing, asthma management, and allergy testing.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800",
    icon: "Wind",
    status: "active",
    services: [
      "Pulmonary Function Testing (PFT)",
      "Asthma & COPD Management",
      "Sleep Apnea Evaluation",
      "Allergy & Respiratory Care"
    ]
  },
  {
    id: 9,
    name: "ENT (Ear, Nose, Throat)",
    slug: "ent",
    shortDescription: "Specialized care for disorders of ear, nose, throat, and head/neck.",
    description: "Expert evaluation and surgical management for hearing loss, sinus disorders, throat infections, and voice conditions.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    icon: "Ear",
    status: "active",
    services: [
      "Hearing & Audiology Testing",
      "Sinus & Nasal Surgery",
      "Tonsil & Throat Care",
      "Voice & Swallowing Disorders"
    ]
  },
  {
    id: 10,
    name: "Ophthalmology",
    slug: "ophthalmology",
    shortDescription: "Complete eye care, vision testing, and surgical solutions.",
    description: "Advanced eye care services including cataract surgery, glaucoma management, vision correction, and comprehensive eye exams.",
    image: "https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?auto=format&fit=crop&q=80&w=800",
    icon: "Eye",
    status: "active",
    services: [
      "Comprehensive Eye Examination",
      "Cataract Evaluation & Surgery",
      "Glaucoma Screening & Treatment",
      "Vision Correction Services"
    ]
  },
  {
    id: 11,
    name: "Gynecology",
    slug: "gynecology",
    shortDescription: "Women's health, maternity care, and wellness services.",
    description: "Dedicated healthcare services for women encompassing prenatal care, reproductive health, gynecological surgeries, and menopause management.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800",
    icon: "UserCheck",
    status: "active",
    services: [
      "Prenatal & Maternity Care",
      "Gynecological Consultations",
      "Preventive Women's Health Screenings",
      "Minimally Invasive Gynecological Surgery"
    ]
  },
  {
    id: 12,
    name: "Urology",
    slug: "urology",
    shortDescription: "Advanced diagnosis and treatment for urinary tract conditions.",
    description: "Expert care for kidney stones, prostate disorders, urinary infections, and male reproductive health.",
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=800",
    icon: "ShieldAlert",
    status: "active",
    services: [
      "Kidney Stone Treatment & Lithotripsy",
      "Prostate Care & Screening",
      "Urinary Tract Infection Management",
      "Urological Surgery"
    ]
  }
];
