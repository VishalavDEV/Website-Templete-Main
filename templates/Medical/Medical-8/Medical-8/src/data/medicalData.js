export const BODY_REGIONS = [
  {
    id: "brain",
    name: "Brain & Nervous System",
    shortName: "Neurology",
    system: "Central & Peripheral Nervous System",
    iconName: "Brain",
    svgCoords: { cx: 200, cy: 110, r: 28 },
    badge: "Neuro-Suite 3.0",
    leadDoctorId: "dr-chen",
    description: "Advanced micro-neurosurgery, deep brain stimulation, stroke interventions, and memory restoration protocols.",
    conditions: ["Cerebral Aneurysms", "Parkinson's Disease", "Acute Ischemic Stroke", "Epilepsy Management", "Spinal Cord Trauma"],
    technologies: ["Intraoperative 7T MRI", "Robotic Gamma Knife", "Neuro-Navigation System"],
    stats: { successRate: "98.9%", surgeriesYearly: "1,240+", avgRecoveryDays: "4.2" }
  },
  {
    id: "heart",
    name: "Cardiovascular System",
    shortName: "Cardiology",
    system: "Heart & Vascular Pathways",
    iconName: "Heart",
    svgCoords: { cx: 220, cy: 220, r: 30 },
    badge: "Cath Lab Alpha",
    leadDoctorId: "dr-vance",
    description: "Minimally invasive TAVR, electrophysiology mapping, coronary bypass, and heart failure rehabilitation.",
    conditions: ["Coronary Artery Disease", "Atrial Fibrillation", "Heart Valve Stenosis", "Hypertension", "Cardiomyopathy"],
    technologies: ["3D Optical Coherence Tomography", "Transcatheter Valve Suite", "AI Arrythmia Predictor"],
    stats: { successRate: "99.4%", surgeriesYearly: "2,850+", avgRecoveryDays: "3.1" }
  },
  {
    id: "lungs",
    name: "Respiratory & Pulmonary",
    shortName: "Pulmonology",
    system: "Lungs & Airway Architecture",
    iconName: "Wind",
    svgCoords: { cx: 180, cy: 235, r: 26 },
    badge: "PulmoTech Care",
    leadDoctorId: "dr-arora",
    description: "Robotic bronchoscopy, chronic airway reconstruction, sleep medicine, and thoracic surgical oncology.",
    conditions: ["Severe Asthma", "COPD & Emphysema", "Pulmonary Fibrosis", "Lung Nodule Evaluation", "Sleep Apnea"],
    technologies: ["Ion Endoluminal System", "Extracorporeal Oxygenation (ECMO)", "Cryo-Biopsy"],
    stats: { successRate: "97.8%", surgeriesYearly: "980+", avgRecoveryDays: "2.8" }
  },
  {
    id: "abdomen",
    name: "Gastrointestinal & Digestive",
    shortName: "Gastroenterology",
    system: "Digestive Tract & Metabolic Organs",
    iconName: "Activity",
    svgCoords: { cx: 200, cy: 310, r: 32 },
    badge: "Metabolic Center",
    leadDoctorId: "dr-moreau",
    description: "Endoscopic mucosal resection, bariatric metabolic surgery, microbiome therapy, and liver transplant care.",
    conditions: ["Crohn's Disease", "GERD & Esophageal Disorders", "Liver Cirrhosis", "Colorectal Polyps", "Pancreatitis"],
    technologies: ["Capsule Endoscopy", "Da Vinci Xi Surgical System", "FibroScan 630"],
    stats: { successRate: "99.1%", surgeriesYearly: "3,100+", avgRecoveryDays: "1.9" }
  },
  {
    id: "joints",
    name: "Musculoskeletal & Joint Care",
    shortName: "Orthopedics",
    system: "Bones, Joints & Ligament Network",
    iconName: "Bone",
    svgCoords: { cx: 145, cy: 380, r: 26 },
    badge: "Motion Institute",
    leadDoctorId: "dr-rossi",
    description: "Patient-specific 3D printed joint implants, arthroscopic knee/shoulder reconstruction, and cartilage regeneration.",
    conditions: ["Osteoarthritis", "ACL & Rotator Cuff Tears", "Spinal Herniated Discs", "Sports Fractures", "Scoliosis"],
    technologies: ["MAKO Robotic Arm", "Regenerative Stem Cell Matrix", "Dynamic Motion Capture"],
    stats: { successRate: "99.6%", surgeriesYearly: "4,200+", avgRecoveryDays: "2.1" }
  },
  {
    id: "eyes",
    name: "Ocular & Vision Science",
    shortName: "Ophthalmology",
    system: "Visual Cortex & Ocular Pathway",
    iconName: "Eye",
    svgCoords: { cx: 200, cy: 75, r: 20 },
    badge: "Vision Dynamics",
    leadDoctorId: "dr-kuroda",
    description: "Femtosecond SMILE refractive surgery, corneal endothelial transplantation, and retinal gene therapy.",
    conditions: ["Cataracts", "Glaucoma", "Macular Degeneration", "Diabetic Retinopathy", "Severe Myopia"],
    technologies: ["Femto-Laser SMILE", "Swept-Source OCT", "Micro-Incision Vitrectomy"],
    stats: { successRate: "99.8%", surgeriesYearly: "5,400+", avgRecoveryDays: "0.5" }
  },
  {
    id: "skin",
    name: "Dermatology & Cutaneous Science",
    shortName: "Dermatology",
    system: "Dermis & Cellular Repair",
    iconName: "Sparkles",
    svgCoords: { cx: 255, cy: 370, r: 22 },
    badge: "DermoLab Pro",
    leadDoctorId: "dr-sullivan",
    description: "Mohs micrographic surgery, laser vascular remodeling, bio-engineered skin grafting, and melanoma profiling.",
    conditions: ["Melanoma & Skin Cancer", "Psoriasis & Eczema", "Hyper-pigmentation", "Severe Burns", "Rosacea"],
    technologies: ["Confocal Microscopy", "Picosecond Laser Matrix", "AI Skin Lesion Mapping"],
    stats: { successRate: "99.2%", surgeriesYearly: "3,800+", avgRecoveryDays: "1.0" }
  }
];

export const DOCTORS = [
  {
    id: "dr-vance",
    name: "Dr. Elena Vance, MD, FACC",
    title: "Chief of Interventional Cardiology",
    department: "Cardiovascular System",
    specialtyId: "cardiology",
    experienceYears: 19,
    rating: 4.98,
    reviewsCount: 342,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
    education: [
      "MD — Harvard Medical School (Magna Cum Laude)",
      "Residency — Johns Hopkins Hospital",
      "Fellowship — Cleveland Clinic Cardiovascular Institute"
    ],
    certifications: ["American Board of Internal Medicine (Cardiovascular)", "Society for Cardiovascular Angiography"],
    awards: ["Top Cardiologist in America (2023-2025)", "Presidential Award for Innovation in TAVR"],
    bio: "Dr. Elena Vance is an internationally recognized leader in complex transcatheter aortic valve replacement (TAVR) and structural heart interventions. She has performed over 3,200 successful minimally invasive cardiac procedures and authored 45+ peer-reviewed publications.",
    hospitalAffiliation: "Aura Health Main Campus — Tower A, Floor 6",
    contact: {
      phone: "+1 (800) 555-AURA ext 401",
      email: "e.vance@aurahealth.org",
      vCard: "vcard_dr_vance.vcf"
    },
    languages: ["English", "French", "Spanish"],
    consultationFee: "$250",
    acceptingNewPatients: true,
    nextAvailableSlot: "Tomorrow, 10:30 AM",
    availableSlots: [
      { date: "2026-09-03", time: "10:30 AM", type: "In-Person" },
      { date: "2026-09-03", time: "02:00 PM", type: "Virtual Telehealth" },
      { date: "2026-09-04", time: "09:00 AM", type: "In-Person" },
      { date: "2026-09-04", time: "04:15 PM", type: "Virtual Telehealth" }
    ],
    publicationsCount: 48,
    surgeriesCount: "3,200+"
  },
  {
    id: "dr-chen",
    name: "Dr. Marcus Chen, MD, PhD",
    title: "Director of Functional Neurosurgery",
    department: "Brain & Nervous System",
    specialtyId: "neurosurgery",
    experienceYears: 16,
    rating: 4.96,
    reviewsCount: 289,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80",
    education: [
      "MD/PhD — Stanford University School of Medicine",
      "Neurosurgery Residency — UCSF Medical Center",
      "Stereotactic Surgery Fellowship — Mayo Clinic"
    ],
    certifications: ["American Board of Neurological Surgery", "Congress of Neurological Surgeons"],
    awards: ["National Science Foundation Research Fellow", "Surgical Pioneer Medal 2024"],
    bio: "Pioneering neurosurgeon specializing in awake craniotomies, deep brain stimulation for movement disorders, and robotic brain tumor resection using intraoperative 7T MRI technology.",
    hospitalAffiliation: "Aura Health Neuro-Suite Pavilion — Floor 4",
    contact: {
      phone: "+1 (800) 555-AURA ext 502",
      email: "m.chen@aurahealth.org",
      vCard: "vcard_dr_chen.vcf"
    },
    languages: ["English", "Mandarin", "German"],
    consultationFee: "$300",
    acceptingNewPatients: true,
    nextAvailableSlot: "Friday, 01:15 PM",
    availableSlots: [
      { date: "2026-09-04", time: "01:15 PM", type: "In-Person" },
      { date: "2026-09-05", time: "11:00 AM", type: "In-Person" },
      { date: "2026-09-07", time: "03:30 PM", type: "Virtual Telehealth" }
    ],
    publicationsCount: 62,
    surgeriesCount: "2,100+"
  },
  {
    id: "dr-arora",
    name: "Dr. Priya Arora, MD, FCCP",
    title: "Chair of Thoracic Medicine & Pulmonology",
    department: "Respiratory & Pulmonary",
    specialtyId: "pulmonology",
    experienceYears: 14,
    rating: 4.95,
    reviewsCount: 198,
    image: "https://images.unsplash.com/photo-1594824813566-88855ce75c61?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1594824813566-88855ce75c61?auto=format&fit=crop&w=200&q=80",
    education: [
      "MD — Oxford University Medical Sciences",
      "Pulmonary Residency — Massachusetts General Hospital",
      "Critical Care Fellowship — Yale New Haven"
    ],
    certifications: ["American Board of Internal Medicine (Pulmonary)", "Fellow of American College of Chest Physicians"],
    awards: ["Excellence in Respiratory Medicine 2024"],
    bio: "Specializing in precision asthma biotherapies, robotic navigational bronchoscopy, and post-COVID pulmonary rehabilitation systems.",
    hospitalAffiliation: "Aura Health Pulmonary Clinic — Suite 302",
    contact: {
      phone: "+1 (800) 555-AURA ext 305",
      email: "p.arora@aurahealth.org",
      vCard: "vcard_dr_arora.vcf"
    },
    languages: ["English", "Hindi", "Punjabi"],
    consultationFee: "$220",
    acceptingNewPatients: true,
    nextAvailableSlot: "Tomorrow, 03:00 PM",
    availableSlots: [
      { date: "2026-09-03", time: "03:00 PM", type: "In-Person" },
      { date: "2026-09-04", time: "10:00 AM", type: "Virtual Telehealth" }
    ],
    publicationsCount: 31,
    surgeriesCount: "1,450+"
  },
  {
    id: "dr-rossi",
    name: "Dr. Matteo Rossi, MD",
    title: "Director of Robotic Joint Reconstruction",
    department: "Musculoskeletal & Joint Care",
    specialtyId: "orthopedics",
    experienceYears: 21,
    rating: 4.99,
    reviewsCount: 512,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80",
    education: [
      "MD — University of Milan Medical School",
      "Orthopedic Surgery Residency — Hospital for Special Surgery (HSS NY)",
      "Sports Medicine Fellowship — Steadman Clinic"
    ],
    certifications: ["American Board of Orthopaedic Surgery", "International Cartilage Repair Society"],
    awards: ["Olympic Team Lead Physician 2022", "Master Surgeon Award"],
    bio: "Renowned orthopedic innovator for custom 3D-printed knee and hip implants. Dr. Rossi has restored mobility to thousands of elite athletes and active adults with ultra-fast recovery protocols.",
    hospitalAffiliation: "Aura Health Motion Institute — Floor 2",
    contact: {
      phone: "+1 (800) 555-AURA ext 210",
      email: "m.rossi@aurahealth.org",
      vCard: "vcard_dr_rossi.vcf"
    },
    languages: ["English", "Italian", "Spanish"],
    consultationFee: "$280",
    acceptingNewPatients: true,
    nextAvailableSlot: "Monday, 09:30 AM",
    availableSlots: [
      { date: "2026-09-07", time: "09:30 AM", type: "In-Person" },
      { date: "2026-09-07", time: "02:00 PM", type: "In-Person" }
    ],
    publicationsCount: 54,
    surgeriesCount: "4,800+"
  },
  {
    id: "dr-moreau",
    name: "Dr. Sophia Moreau, MD",
    title: "Chief of Gastrointestinal Surgery & Hepatology",
    department: "Gastrointestinal & Digestive",
    specialtyId: "gastroenterology",
    experienceYears: 17,
    rating: 4.94,
    reviewsCount: 230,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&q=80",
    education: [
      "MD — Sorbonne University Faculty of Medicine",
      "Gastroenterology Residency — Columbia University Irving Medical Center",
      "Advanced Endoscopy Fellowship — Mayo Clinic"
    ],
    certifications: ["American Board of Gastroenterology", "European Board of Surgery"],
    awards: ["Gut Microbiome Innovation Award 2023"],
    bio: "Specializing in advanced endoscopic mucosal resection, Crohn's precision immunotherapy, and non-surgical metabolic weight loss procedures.",
    hospitalAffiliation: "Aura Health Digestive Care Center — Tower B, Floor 3",
    contact: {
      phone: "+1 (800) 555-AURA ext 312",
      email: "s.moreau@aurahealth.org",
      vCard: "vcard_dr_moreau.vcf"
    },
    languages: ["English", "French"],
    consultationFee: "$240",
    acceptingNewPatients: true,
    nextAvailableSlot: "Tomorrow, 11:15 AM",
    availableSlots: [
      { date: "2026-09-03", time: "11:15 AM", type: "In-Person" },
      { date: "2026-09-04", time: "01:45 PM", type: "Virtual Telehealth" }
    ],
    publicationsCount: 38,
    surgeriesCount: "2,600+"
  },
  {
    id: "dr-kuroda",
    name: "Dr. Kenji Kuroda, MD",
    title: "Director of Ocular & Laser Surgery",
    department: "Ocular & Vision Science",
    specialtyId: "ophthalmology",
    experienceYears: 15,
    rating: 4.97,
    reviewsCount: 410,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&q=80",
    education: [
      "MD — University of Tokyo Faculty of Medicine",
      "Ophthalmology Residency — Wilmer Eye Institute, Johns Hopkins",
      "Corneal & Refractive Fellowship — Bascom Palmer Eye Institute"
    ],
    certifications: ["American Board of Ophthalmology", "American Society of Cataract & Refractive Surgery"],
    awards: ["Global Visionary Surgeon Award 2024"],
    bio: "Pioneer of micro-incision femtosecond SMILE vision correction and artificial corneal implants with blade-free precision.",
    hospitalAffiliation: "Aura Health Vision Institute — Suite 105",
    contact: {
      phone: "+1 (800) 555-AURA ext 108",
      email: "k.kuroda@aurahealth.org",
      vCard: "vcard_dr_kuroda.vcf"
    },
    languages: ["English", "Japanese"],
    consultationFee: "$230",
    acceptingNewPatients: true,
    nextAvailableSlot: "Friday, 10:00 AM",
    availableSlots: [
      { date: "2026-09-04", time: "10:00 AM", type: "In-Person" },
      { date: "2026-09-05", time: "02:30 PM", type: "In-Person" }
    ],
    publicationsCount: 42,
    surgeriesCount: "6,100+"
  },
  {
    id: "dr-sullivan",
    name: "Dr. Claire Sullivan, MD",
    title: "Chief of Dermatologic Surgery & Laser Care",
    department: "Dermatology & Cutaneous Science",
    specialtyId: "dermatology",
    experienceYears: 13,
    rating: 4.96,
    reviewsCount: 380,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
    education: [
      "MD — Yale School of Medicine",
      "Dermatology Residency — NYU Langone Health",
      "Mohs Surgery Fellowship — MD Anderson Cancer Center"
    ],
    certifications: ["American Board of Dermatology", "American College of Mohs Surgery"],
    awards: ["Dermatology Excellence Award 2025"],
    bio: "Specializing in Mohs micrographic skin cancer surgery, picosecond laser scar remodeling, and personalized bio-cellular skin therapy.",
    hospitalAffiliation: "Aura Health Skin & Laser Suite — Floor 1",
    contact: {
      phone: "+1 (800) 555-AURA ext 112",
      email: "c.sullivan@aurahealth.org",
      vCard: "vcard_dr_sullivan.vcf"
    },
    languages: ["English"],
    consultationFee: "$210",
    acceptingNewPatients: true,
    nextAvailableSlot: "Tomorrow, 04:00 PM",
    availableSlots: [
      { date: "2026-09-03", time: "04:00 PM", type: "In-Person" },
      { date: "2026-09-04", time: "11:30 AM", type: "Virtual Telehealth" }
    ],
    publicationsCount: 29,
    surgeriesCount: "3,500+"
  }
];

export const SPECIALTIES = [
  {
    id: "cardiology",
    title: "Cardiology & Vascular",
    category: "Surgical & Interventional",
    iconName: "HeartPulse",
    accentColor: "#0284c7",
    tagline: "Precision cardiac catheterization & structural heart repair",
    description: "Our Cardiovascular Institute integrates state-of-the-art 3D cardiac mapping, hybrid cath labs, and minimally invasive valve reconstruction.",
    keyServices: [
      "TAVR & Transcatheter Valve Repair",
      "3D Cardiac Electrophysiology Mapping",
      "Coronary Artery Bypass Grafting (CABG)",
      "Vascular Stenting & Aneurysm Repair",
      "Preventive Lipidology & Cardiac Rehab"
    ],
    equipment: "Siemens Artis Q Hybrid Angiography Suite",
    headDoctorId: "dr-vance"
  },
  {
    id: "neurosurgery",
    title: "Neurosurgery & Spine",
    category: "Advanced Surgery",
    iconName: "BrainCircuit",
    accentColor: "#0d9488",
    tagline: "Awake brain surgery, neuro-oncology & spinal precision",
    description: "Combining intraoperative 7T MRI and sub-millimeter robotic stereotactic instruments to treat complex brain and spinal conditions.",
    keyServices: [
      "Robotic Brain Tumor Resection",
      "Deep Brain Stimulation (DBS)",
      "Minimally Invasive Endoscopic Spine Surgery",
      "Cerebrovascular Aneurysm Clipping",
      "Pediatric Neurosurgery"
    ],
    equipment: "7T Intraoperative MRI & Gamma Knife Icon",
    headDoctorId: "dr-chen"
  },
  {
    id: "orthopedics",
    title: "Orthopedics & Joint Care",
    category: "Reconstructive Surgery",
    iconName: "Activity",
    accentColor: "#d97706",
    tagline: "3D-printed joint replacements & motion restoration",
    description: "Re-engineering joint mobility through patient-matched 3D titanium implants, MAKO robotic assistance, and biological cell therapy.",
    keyServices: [
      "Robotic Total & Partial Knee Replacement",
      "Direct Anterior Hip Reconstruction",
      "Complex Rotator Cuff & Shoulder Arthroscopy",
      "Regenerative Stem Cell & PRP Matrix Therapy",
      "Sports Traumatology & Rehabilitation"
    ],
    equipment: "MAKO Robotic Surgical System",
    headDoctorId: "dr-rossi"
  },
  {
    id: "pulmonology",
    title: "Pulmonology & Respiratory",
    category: "Medical Care",
    iconName: "Wind",
    accentColor: "#0284c7",
    tagline: "Advanced bronchoscopy & pulmonary rehabilitation",
    description: "Comprehensive respiratory diagnostics, robotic lung biopsy, and specialized post-acute lung injury recovery protocols.",
    keyServices: [
      "Robotic Navigational Lung Biopsy",
      "Bronchial Thermoplasty for Severe Asthma",
      "COPD & Lung Volume Reduction",
      "Advanced Sleep Apnea Titration",
      "Pulmonary Vascular Disease Management"
    ],
    equipment: "Intuitive Ion Endoluminal Robotic Platform",
    headDoctorId: "dr-arora"
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology & Digestive",
    category: "Internal Medicine",
    iconName: "ShieldCheck",
    accentColor: "#059669",
    tagline: "Endoscopic oncology, IBD precision care & liver care",
    description: "Specialized care for gastrointestinal disorders, motility issues, chronic liver conditions, and metabolic endoscopic therapies.",
    keyServices: [
      "Endoscopic Mucosal Resection (EMR)",
      "Crohn's & Colitis Biologic Therapy",
      "Capsule Endoscopy & Small Bowel Imaging",
      "Non-Surgical Weight Loss Endoscopy",
      "Hepatology & Fatty Liver Reversal"
    ],
    equipment: "Olympus EVIS X1 Endoscopy System",
    headDoctorId: "dr-moreau"
  },
  {
    id: "dermatology",
    title: "Dermatology & Skin Science",
    category: "Cutaneous Care",
    iconName: "Sparkles",
    accentColor: "#db2777",
    tagline: "Mohs micrographic skin cancer surgery & laser optics",
    description: "Advanced dermatologic diagnostics, cutaneous oncology, Mohs micrographic precision surgery, and targeted laser therapy.",
    keyServices: [
      "Mohs Micrographic Surgery for Skin Cancer",
      "Picosecond Laser Pigment & Scar Remodeling",
      "Biologic Therapy for Severe Psoriasis",
      "Full-Body AI Mole Mapping & Dermoscopy",
      "Cosmetic Facial Rejuvenation & Reconstruction"
    ],
    equipment: "VivaScope Reflectance Confocal Microscope",
    headDoctorId: "dr-sullivan"
  }
];

export const PATIENT_STORIES = [
  {
    id: "story-1",
    patientName: "Robert Sterling, 58",
    condition: "Severe Aortic Valve Stenosis",
    treatment: "Transcatheter Aortic Valve Replacement (TAVR)",
    leadDoctor: "Dr. Elena Vance",
    recoveryTime: "Returned home in 36 hours",
    imageBefore: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    imageAfter: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    quote: "I thought my marathon days were completely behind me. 48 hours after Dr. Vance performed TAVR, my chest pressure vanished. Eight months later, I completed the Chicago Half Marathon.",
    timeline: [
      { step: "Month 0", detail: "Shortness of breath walking up stairs. Diagnostic Echo showed critical valve narrowing." },
      { step: "Week 1", detail: "Multi-disciplinary heart board evaluation & 3D CT vascular mapping." },
      { step: "Day 0", detail: "90-minute awake TAVR procedure under conscious sedation. Zero chest incision." },
      { step: "Day 2", detail: "Discharged home with full normal cardiac output restored." },
      { step: "Month 6", detail: "Cleared for full athletic endurance training." }
    ]
  },
  {
    id: "story-2",
    patientName: "Maya Lin, 34",
    condition: "Complex Lumbar Disc Herniation",
    treatment: "Robotic MAKO Spine Reconstruction",
    leadDoctor: "Dr. Matteo Rossi",
    recoveryTime: "Walking unassisted on Day 1",
    imageBefore: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    imageAfter: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    quote: "The nerve pain was so excruciating I couldn't hold my 2-year-old daughter. Dr. Rossi's robotic surgical precision gave me my life and mobility back without stiffness.",
    timeline: [
      { step: "Month 0", detail: "Severe sciatica impairing right leg function." },
      { step: "Day 0", detail: "30-minute robotic micro-discectomy with 12mm micro-incision." },
      { step: "Day 1", detail: "Discharged without opioid pain medication." },
      { step: "Week 4", detail: "Completed functional physical rehab program." }
    ]
  }
];

export const FACILITIES = [
  {
    id: "fac-1",
    title: "Hybrid Robotic Cath Lab Alpha",
    category: "Operating Suites",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    description: "Equipped with real-time 3D fluoroscopy, automated robotic catheters, and HEPA laminar air filtration exceeding sterile Class 100 standards.",
    specs: ["Room Size: 1,100 sq ft", "Intraoperative 3D Angiography", "Integrated ECMO Suite"]
  },
  {
    id: "fac-2",
    title: "Ultra-Quiet 7T Neuro MRI Suite",
    category: "Diagnostics",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    description: "Delivering double the signal-to-noise ratio of conventional scanners for sub-millimeter visualization of brain fiber tracts and micro-tumors.",
    specs: ["7 Tesla Magnet", "Acoustic Noise Reduction Tech", "Wide-Bore Ambient Lighting"]
  },
  {
    id: "fac-3",
    title: "VIP Executive Recovery Suites",
    category: "Patient Suites",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    description: "Spacious private suites featuring circadian rhythm lighting, private nurse call tablet, organic culinary service, and dedicated family lounge.",
    specs: ["Circadian Smart Lighting", "En-suite Hydrotherapy Bath", "24/7 Dedicated Nursing"]
  },
  {
    id: "fac-4",
    title: "Da Vinci Xi Robotic Surgical Hub",
    category: "Operating Suites",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    description: "Four-arm robotic articulation enabling high-precision minimally invasive surgical procedures with minimal blood loss and rapid healing.",
    specs: ["3D HD 10x Magnification", "Firefly Fluorescence Imaging", "Tremor-Filtration Tech"]
  }
];

export const FAQS = [
  {
    q: "How quickly can I book an appointment with a specialist doctor?",
    a: "Same-day and next-day consultations are available for urgent cases. You can use our online Appointment Wizard above to view real-time availability for both in-person hospital visits and virtual telehealth video sessions."
  },
  {
    q: "What insurance providers and direct-pay options do you accept?",
    a: "Aura Health Medical Center accepts all major national insurance carriers including BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, Medicare, and global private coverage. We also offer transparent self-pay packages for international patients."
  },
  {
    q: "How does the 'Human Anatomy — Reimagined' interactive feature work?",
    a: "Our interactive anatomy viewer allows patients to click on specific body systems (Brain, Heart, Joints, Lungs, etc.) to discover associated symptoms, diagnostic procedures, and lead medical specialists dedicated to that specific area of care."
  },
  {
    q: "What should I bring for my Digital Appointment Pass check-in?",
    a: "When you complete your booking, a Digital Appointment Pass with a QR code is generated. Simply show this pass on your phone or bring a printed copy to our express kiosk upon arrival for instant check-in."
  }
];

export const METRICS = [
  { label: "Patient Satisfaction", value: "99.4%", description: "Based on 12,000+ verified post-care reviews" },
  { label: "World-Class Specialists", value: "150+", description: "Board-certified faculty across 45 clinical areas" },
  { label: "Minimally Invasive Rate", value: "88%", description: "Surgical cases completed via micro-robotic entry" },
  { label: "Avg. ER Wait Time", value: "< 4 Mins", description: "Immediate triage for urgent cardiac & stroke cases" }
];
