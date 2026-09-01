import {
  Department,
  Doctor,
  Service,
  Testimonial,
  FAQ,
  GalleryItem,
  DoctorAvailability,
  Appointment,
  User,
  Patient,
  MedicalDocument,
  HospitalSettings,
  ContactMessage,
  Notification,
  Prescription,
  Invoice,
  MedicalRecord,
  InvoiceStatus
} from '../types';

export const INITIAL_DEPARTMENTS: Department[] = [
  {
    department_id: 'dept-1',
    name: 'Cardiology & Heart Institute',
    description: 'Comprehensive cardiac care covering interventional cardiology, heart failure management, non-invasive diagnostics, and advanced electrophysiology.',
    icon: 'HeartPulse',
    head_doctor_name: 'Dr. Marcus Vance, MD, FACC',
    contact_extension: 'Ext. 401',
    bed_capacity: 48,
    active_doctors_count: 4,
    image_url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
  },
  {
    department_id: 'dept-2',
    name: 'Neurology & Neurosurgery',
    description: 'Specialized diagnosis and treatment of complex neurological disorders, stroke rehabilitation, epilepsy management, and minimally invasive cranial surgeries.',
    icon: 'Brain',
    head_doctor_name: 'Dr. Elena Rostova, MD, PhD',
    contact_extension: 'Ext. 402',
    bed_capacity: 36,
    active_doctors_count: 4,
    image_url: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80'
  },
  {
    department_id: 'dept-3',
    name: 'Orthopedics & Joint Replacement',
    description: 'Pioneering orthopedic care offering robotic-assisted joint replacement, sports injury arthroscopy, spine surgery, and trauma reconstruction.',
    icon: 'Bone',
    head_doctor_name: 'Dr. David Chen, MD, FAAOS',
    contact_extension: 'Ext. 403',
    bed_capacity: 42,
    active_doctors_count: 4,
    image_url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  },
  {
    department_id: 'dept-4',
    name: 'Pediatrics & Neonatal Care',
    description: 'Family-centered pediatric care from infant wellness to adolescent medicine, backed by a Level IV Neonatal Intensive Care Unit (NICU).',
    icon: 'Baby',
    head_doctor_name: 'Dr. Priya Sharma, MD, FAAP',
    contact_extension: 'Ext. 404',
    bed_capacity: 50,
    active_doctors_count: 4,
    image_url: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80'
  },
  {
    department_id: 'dept-5',
    name: 'Emergency & Trauma Care',
    description: '24/7 Level 1 Trauma Center equipped with rapid-response triage, mobile resuscitation units, and immediate surgical theater access.',
    icon: 'Ambulance',
    head_doctor_name: 'Dr. Sarah Jenkins, MD, FACEP',
    contact_extension: 'Ext. 911 / 405',
    bed_capacity: 60,
    active_doctors_count: 3,
    image_url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
  },
  {
    department_id: 'dept-6',
    name: 'Dermatology & Skin Science',
    description: 'Advanced clinical dermatology, cutaneous oncology, laser therapies, and allergy patch testing led by certified dermatopathologists.',
    icon: 'Sparkles',
    head_doctor_name: 'Dr. Alexander Hayes, MD',
    contact_extension: 'Ext. 406',
    bed_capacity: 20,
    active_doctors_count: 3,
    image_url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  }
];

export const INITIAL_SERVICES: Service[] = [
  {
    service_id: 'srv-1',
    name: 'Comprehensive Emergency Care',
    category: 'Emergency',
    description: 'Round-the-clock emergency medical response for cardiac arrests, severe trauma, stroke emergencies, and acute respiratory distress.',
    department_id: 'dept-5',
    department_name: 'Emergency & Trauma Care',
    price_range: '₹1,500 - ₹2,000',
    duration: 'Immediate / 24 Hours',
    preparation_instructions: 'No preparation needed. Bring identification and insurance card if feasible.',
    key_features: ['Immediate Triage Assessment', 'Direct ICU Admission Route', 'On-Site Diagnostic Radiology', 'Pediatric Emergency Bay'],
    icon: 'Ambulance',
    image_url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  {
    service_id: 'srv-2',
    name: 'Cardiac Catheterization & Angioplasty',
    category: 'Cardiology',
    description: 'Minimally invasive diagnostic angiography and coronary stent placement performed in our state-of-the-art Hybrid Cath Lab.',
    department_id: 'dept-1',
    department_name: 'Cardiology & Heart Institute',
    price_range: '₹1,500 - ₹2,000',
    duration: '2 - 4 Hours',
    preparation_instructions: 'Fasting required for 6 hours prior. Continue prescribed medications as advised by cardiologist.',
    key_features: ['Radial Artery Access', 'Drug-Eluting Stents', 'Fractional Flow Reserve (FFR)', 'Same-Day Recovery Suite'],
    icon: 'Activity',
    image_url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
  },
  {
    service_id: 'srv-3',
    name: 'Comprehensive Stroke & Neuro Care',
    category: 'Neurology',
    description: 'Rapid neurovascular evaluation, EEG monitoring, headache clinics, and specialized post-stroke cognitive rehabilitation.',
    department_id: 'dept-2',
    department_name: 'Neurology & Neurosurgery',
    price_range: '₹1,500 - ₹2,000',
    duration: '45 - 90 Mins',
    preparation_instructions: 'Bring previous MRI/CT scan discs and a full list of current neurological medications.',
    key_features: ['3T MRI Neuroimaging', 'Continuous Video EEG', 'Botox for Chronic Migraines', 'Neuro-Psychological Profiling'],
    icon: 'Brain',
    image_url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    service_id: 'srv-4',
    name: 'Robotic-Assisted Joint Replacement',
    category: 'Orthopedics',
    description: 'Precision sub-millimeter robotic hip and knee arthroplasty designed for faster recovery, minimal pain, and prolonged implant longevity.',
    department_id: 'dept-3',
    department_name: 'Orthopedics & Joint Replacement',
    price_range: '₹1,500 - ₹2,000',
    duration: '90 - 150 Mins',
    preparation_instructions: 'Pre-operative physical therapy assessment and pre-admission blood tests required 1 week prior.',
    key_features: ['Mako™ Robotic Navigation', 'Custom 3D Implant Fitting', 'Rapid Mobilization Protocol', 'Dedicated Physical Therapy Gym'],
    icon: 'Bone',
    image_url: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80'
  },
  {
    service_id: 'srv-5',
    name: 'Pediatric Well-Child & Immunization',
    category: 'Pediatrics',
    description: 'Developmental milestones assessment, CDC-compliant immunizations, nutritional counseling, and childhood asthma management.',
    department_id: 'dept-4',
    department_name: 'Pediatrics & Neonatal Care',
    price_range: '₹1,500 - ₹2,000',
    duration: '30 - 45 Mins',
    preparation_instructions: 'Bring the child’s vaccination yellow booklet and medical history records.',
    key_features: ['Painless Vaccination Techniques', 'Growth & Vision Screening', 'Behavioral Health Support', 'Kid-Friendly Play Exam Rooms'],
    icon: 'Baby',
    image_url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80'
  },
  {
    service_id: 'srv-6',
    name: 'Clinical Dermatology & Mole Mapping',
    category: 'Dermatology',
    description: 'Full-body digital dermoscopy for melanoma detection, chronic psoriasis biologics therapy, and acne scar laser resurfacing.',
    department_id: 'dept-6',
    department_name: 'Dermatology & Skin Science',
    price_range: '₹1,500 - ₹2,000',
    duration: '30 - 60 Mins',
    preparation_instructions: 'Do not wear heavy cosmetic makeup or nail polish during full skin evaluation.',
    key_features: ['Digital Dermatoscope AI Analysis', 'Narrowband UVB Phototherapy', 'Mohs Micrographic Surgery', 'Patch Allergy Diagnostics'],
    icon: 'Sparkles',
    image_url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80'
  },
  {
    service_id: 'srv-7',
    name: 'Executive Health Checkup & Diagnostics',
    category: 'General Medicine',
    description: 'Comprehensive 100+ parameter health screening including ultrasound, stress echo, lipid profile, cancer markers, and lifestyle consultation.',
    department_id: 'dept-1',
    department_name: 'General Medicine & Wellness',
    price_range: '₹1,500 - ₹2,000',
    duration: '3 - 5 Hours',
    preparation_instructions: '10-hour overnight fasting required. Water intake is encouraged before ultrasound tests.',
    key_features: ['Full Body Ultrasound & ECG', 'Comprehensive Metabolic Panel', 'Dietitian Diet Plan', 'Executive Lounge Amenities'],
    icon: 'Stethoscope',
    image_url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    service_id: 'srv-8',
    name: 'Advanced Dental & Oral Rehabilitation',
    category: 'Dental Care',
    description: 'Digital smile design, single-visit dental implants, ultrasonic root canal therapy, and painless laser periodontal treatments.',
    department_id: 'dept-4',
    department_name: 'Dental & Maxillofacial Care',
    price_range: '₹1,500 - ₹2,000',
    duration: '45 - 90 Mins',
    preparation_instructions: 'Brush and floss teeth before arrival. Inform dentist of any blood thinners.',
    key_features: ['3D CBCT Dental Imaging', 'Nitrous Oxide Sedation', 'All-on-4 Dental Implants', 'Invisible Aligners Consultation'],
    icon: 'Smile',
    image_url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80'
  }
];

export const INITIAL_DOCTORS: Doctor[] = [
  // --- CARDIOLOGY & HEART INSTITUTE (dept-1) ---
  {
    doctor_id: 'doc-1',
    user_id: 'user-doc-1',
    name: 'Dr. Marcus Vance',
    specialization: 'Interventional Cardiologist',
    qualification: 'MD, FACC, FSCAI (Johns Hopkins)',
    experience_years: 19,
    department_id: 'dept-1',
    department_name: 'Cardiology & Heart Institute',
    bio: 'Chief of Cardiology with over 4,000 successful coronary interventions. Passionate about preventative heart health, lipid management, and catheter-based therapies.',
    photo_url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1500,
    rating: 4.98,
    review_count: 218,
    available_today: true,
    languages: ['English', 'German'],
    room_number: 'Suite 410'
  },
  {
    doctor_id: 'doc-2',
    user_id: 'user-doc-2',
    name: 'Dr. Maya Patel',
    specialization: 'Non-Invasive Cardiologist',
    qualification: 'MD, FACC (Yale School of Medicine)',
    experience_years: 10,
    department_id: 'dept-1',
    department_name: 'Cardiology & Heart Institute',
    bio: 'Expert in stress echocardiography, cardiac MRI interpretation, women’s cardiovascular health, and congenital heart disease management.',
    photo_url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1650,
    rating: 4.94,
    review_count: 129,
    available_today: false,
    languages: ['English', 'Gujarati'],
    room_number: 'Suite 412'
  },
  {
    doctor_id: 'doc-3',
    user_id: 'user-doc-3',
    name: 'Dr. James Thorne',
    specialization: 'Cardiac Electrophysiologist',
    qualification: 'MD, FHRS (Columbia University)',
    experience_years: 15,
    department_id: 'dept-1',
    department_name: 'Cardiology & Heart Institute',
    bio: 'Specialist in arrhythmia management, radiofrequency catheter ablation, and leadless pacemaker implantation.',
    photo_url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1800,
    rating: 4.96,
    review_count: 164,
    available_today: true,
    languages: ['English'],
    room_number: 'Suite 415'
  },
  {
    doctor_id: 'doc-4',
    user_id: 'user-doc-4',
    name: 'Dr. Sophia Al-Mansoor',
    specialization: 'Heart Failure & Transplant Specialist',
    qualification: 'MD, PhD (Stanford Medicine)',
    experience_years: 13,
    department_id: 'dept-1',
    department_name: 'Cardiology & Heart Institute',
    bio: 'Pioneer in advanced heart failure care, ventricular assist device (VAD) therapy, and post-transplant cardiac care.',
    photo_url: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1750,
    rating: 4.91,
    review_count: 95,
    available_today: true,
    languages: ['English', 'Arabic'],
    room_number: 'Suite 418'
  },

  // --- NEUROLOGY & NEUROSURGERY (dept-2) ---
  {
    doctor_id: 'doc-5',
    user_id: 'user-doc-5',
    name: 'Dr. Elena Rostova',
    specialization: 'Neurologist & Neuro-Oncologist',
    qualification: 'MD, PhD (Stanford University)',
    experience_years: 14,
    department_id: 'dept-2',
    department_name: 'Neurology & Neurosurgery',
    bio: 'Specialist in neurodegenerative conditions, epilepsy management, stroke rescue protocols, and pioneering cognitive preservation treatments.',
    photo_url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1600,
    rating: 4.92,
    review_count: 175,
    available_today: false,
    languages: ['English', 'Russian', 'French'],
    room_number: 'Suite 208'
  },
  {
    doctor_id: 'doc-6',
    user_id: 'user-doc-6',
    name: 'Dr. Jonathan Sterling',
    specialization: 'Chief Neurosurgeon',
    qualification: 'MD, FAANS (Harvard Medical School)',
    experience_years: 21,
    department_id: 'dept-2',
    department_name: 'Neurology & Neurosurgery',
    bio: 'World-renowned neurosurgeon specializing in complex brain tumor resection, minimally invasive spine surgery, and aneurysm clipping.',
    photo_url: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 2000,
    rating: 4.99,
    review_count: 240,
    available_today: true,
    languages: ['English'],
    room_number: 'Suite 210'
  },
  {
    doctor_id: 'doc-7',
    user_id: 'user-doc-7',
    name: 'Dr. Aisha Malik',
    specialization: 'Pediatric Neurologist',
    qualification: 'MD (UCLA Health)',
    experience_years: 11,
    department_id: 'dept-2',
    department_name: 'Neurology & Neurosurgery',
    bio: 'Dedicated to pediatric epilepsy, developmental delays, movement disorders, and adolescent neuro-rehabilitation.',
    photo_url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1550,
    rating: 4.95,
    review_count: 112,
    available_today: true,
    languages: ['English', 'Urdu'],
    room_number: 'Suite 214'
  },
  {
    doctor_id: 'doc-8',
    user_id: 'user-doc-8',
    name: 'Dr. Christopher Vance',
    specialization: 'Stroke & Neurovascular Specialist',
    qualification: 'MD, PhD (Mayo Clinic)',
    experience_years: 16,
    department_id: 'dept-2',
    department_name: 'Neurology & Neurosurgery',
    bio: 'Expert in hyperacute stroke resuscitation, cerebral thrombectomy, carotid stenosis, and neuro-intensive care.',
    photo_url: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1850,
    rating: 4.89,
    review_count: 148,
    available_today: true,
    languages: ['English', 'German'],
    room_number: 'Suite 216'
  },

  // --- ORTHOPEDICS & JOINT REPLACEMENT (dept-3) ---
  {
    doctor_id: 'doc-9',
    user_id: 'user-doc-9',
    name: 'Dr. David Chen',
    specialization: 'Orthopedic & Joint Surgeon',
    qualification: 'MD, FAAOS (Harvard Medical School)',
    experience_years: 16,
    department_id: 'dept-3',
    department_name: 'Orthopedics & Joint Replacement',
    bio: 'Dr. David Chen is a globally recognized board-certified orthopedic surgeon specializing in robotic joint reconstruction, arthroscopic sports surgeries, and complex trauma.',
    photo_url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1700,
    rating: 4.95,
    review_count: 142,
    available_today: true,
    languages: ['English', 'Mandarin'],
    room_number: 'Suite 304'
  },
  {
    doctor_id: 'doc-10',
    user_id: 'user-doc-10',
    name: 'Dr. Rebecca Kim',
    specialization: 'Robotic Knee & Hip Specialist',
    qualification: 'MD, FAAOS (Northwestern Medicine)',
    experience_years: 12,
    department_id: 'dept-3',
    department_name: 'Orthopedics & Joint Replacement',
    bio: 'Sub-specialist in Mako robotic-arm assisted total knee replacement, custom 3D implant fitting, and rapid mobilization protocol.',
    photo_url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1900,
    rating: 4.97,
    review_count: 168,
    available_today: true,
    languages: ['English', 'Korean'],
    room_number: 'Suite 308'
  },
  {
    doctor_id: 'doc-11',
    user_id: 'user-doc-11',
    name: 'Dr. Antoine Dubois',
    specialization: 'Spine & Trauma Surgeon',
    qualification: 'MD (Sorbonne / Johns Hopkins)',
    experience_years: 18,
    department_id: 'dept-3',
    department_name: 'Orthopedics & Joint Replacement',
    bio: 'Expert in minimally invasive spinal fusion, scoliosis correction, artificial disc replacement, and complex pelvic fracture reconstruction.',
    photo_url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1950,
    rating: 4.93,
    review_count: 130,
    available_today: false,
    languages: ['English', 'French'],
    room_number: 'Suite 312'
  },
  {
    doctor_id: 'doc-12',
    user_id: 'user-doc-12',
    name: 'Dr. Marcus Sterling',
    specialization: 'Sports Medicine & Arthroscopy',
    qualification: 'MD, FAAOS (Penn Medicine)',
    experience_years: 14,
    department_id: 'dept-3',
    department_name: 'Orthopedics & Joint Replacement',
    bio: 'Team physician for professional sports franchises, specializing in ACL reconstruction, rotator cuff repair, and biological cartilage restoration.',
    photo_url: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1600,
    rating: 4.91,
    review_count: 185,
    available_today: true,
    languages: ['English'],
    room_number: 'Suite 315'
  },

  // --- PEDIATRICS & NEONATAL CARE (dept-4) ---
  {
    doctor_id: 'doc-13',
    user_id: 'user-doc-13',
    name: 'Dr. Priya Sharma',
    specialization: 'Senior Pediatrician',
    qualification: 'MD, FAAP (Columbia University)',
    experience_years: 12,
    department_id: 'dept-4',
    department_name: 'Pediatrics & Neonatal Care',
    bio: 'Warm and compassionate pediatrician with deep expertise in childhood allergies, newborn development, pediatric asthma, and preventive wellness.',
    photo_url: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1500,
    rating: 4.99,
    review_count: 310,
    available_today: true,
    languages: ['English', 'Hindi', 'Spanish'],
    room_number: 'Suite 102'
  },
  {
    doctor_id: 'doc-14',
    user_id: 'user-doc-14',
    name: 'Dr. Robert Lawson',
    specialization: 'Pediatric Surgeon',
    qualification: 'MD, FACS, FAAP (Penn Medicine)',
    experience_years: 17,
    department_id: 'dept-4',
    department_name: 'Pediatrics & Neonatal Care',
    bio: 'Pioneering pediatric surgeon experienced in minimally invasive neonatal surgery, congenital anomaly corrections, and pediatric thoracic conditions.',
    photo_url: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1750,
    rating: 4.97,
    review_count: 185,
    available_today: true,
    languages: ['English'],
    room_number: 'Suite 108'
  },
  {
    doctor_id: 'doc-15',
    user_id: 'user-doc-15',
    name: 'Dr. Hannah Montgomery',
    specialization: 'Neonatologist & NICU Director',
    qualification: 'MD, FAAP (Vanderbilt Medical)',
    experience_years: 15,
    department_id: 'dept-4',
    department_name: 'Pediatrics & Neonatal Care',
    bio: 'Specialist in Level IV NICU care, premature infant respiratory management, therapeutic hypothermia, and neonatal nutrition.',
    photo_url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1800,
    rating: 4.96,
    review_count: 140,
    available_today: true,
    languages: ['English'],
    room_number: 'Suite 112 / NICU Bay'
  },
  {
    doctor_id: 'doc-16',
    user_id: 'user-doc-16',
    name: 'Dr. Mateo Rossi',
    specialization: 'Pediatric Pulmonology & Allergy',
    qualification: 'MD, FAAP (University of Milan / NYU)',
    experience_years: 9,
    department_id: 'dept-4',
    department_name: 'Pediatrics & Neonatal Care',
    bio: 'Focuses on severe childhood asthma, cystic fibrosis care, environmental allergies, and pediatric sleep diagnostics.',
    photo_url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1550,
    rating: 4.90,
    review_count: 88,
    available_today: false,
    languages: ['English', 'Italian'],
    room_number: 'Suite 116'
  },

  // --- EMERGENCY & TRAUMA CARE (dept-5) ---
  {
    doctor_id: 'doc-17',
    user_id: 'user-doc-17',
    name: 'Dr. Sarah Jenkins',
    specialization: 'Emergency Medicine & Critical Care',
    qualification: 'MD, FACEP (UCLA Medical)',
    experience_years: 15,
    department_id: 'dept-5',
    department_name: 'Emergency & Trauma Care',
    bio: 'Director of Emergency Services, dedicated to rapid crisis resuscitation, acute trauma triage, disaster medicine, and intensive life support.',
    photo_url: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1650,
    rating: 4.88,
    review_count: 98,
    available_today: true,
    languages: ['English'],
    room_number: 'ER Trauma 1'
  },
  {
    doctor_id: 'doc-18',
    user_id: 'user-doc-18',
    name: 'Dr. Carlos Mendoza',
    specialization: 'Trauma Surgery & Resuscitation',
    qualification: 'MD, FACS (Miami Miller School)',
    experience_years: 17,
    department_id: 'dept-5',
    department_name: 'Emergency & Trauma Care',
    bio: 'Lead trauma surgeon experienced in emergency thoracotomy, severe blast/penetrating wound repair, and massive hemorrhage protocol.',
    photo_url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1900,
    rating: 4.92,
    review_count: 150,
    available_today: true,
    languages: ['English', 'Spanish'],
    room_number: 'ER Trauma 2'
  },
  {
    doctor_id: 'doc-19',
    user_id: 'user-doc-19',
    name: 'Dr. Emily Zhao',
    specialization: 'Acute Critical Care & Toxicologist',
    qualification: 'MD, FACEP (UC San Francisco)',
    experience_years: 11,
    department_id: 'dept-5',
    department_name: 'Emergency & Trauma Care',
    bio: 'Specialist in acute poisoning management, sepsis resuscitation, bedside ultrasound, and ventilator management.',
    photo_url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1700,
    rating: 4.91,
    review_count: 105,
    available_today: true,
    languages: ['English', 'Mandarin'],
    room_number: 'ER Bay 4'
  },

  // --- DERMATOLOGY & SKIN SCIENCE (dept-6) ---
  {
    doctor_id: 'doc-20',
    user_id: 'user-doc-20',
    name: 'Dr. Alexander Hayes',
    specialization: 'Dermatologist & Laser Surgeon',
    qualification: 'MD, FAAD (Oxford / NYU)',
    experience_years: 11,
    department_id: 'dept-6',
    department_name: 'Dermatology & Skin Science',
    bio: 'Dual fellowship-trained dermatologist focused on skin cancer detection, laser aesthetics, pediatric eczema, and biological psoriasis therapies.',
    photo_url: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1500,
    rating: 4.91,
    review_count: 164,
    available_today: true,
    languages: ['English', 'Spanish'],
    room_number: 'Suite 115'
  },
  {
    doctor_id: 'doc-21',
    user_id: 'user-doc-21',
    name: 'Dr. Chloe Laurent',
    specialization: 'Cosmetic & Clinical Dermatologist',
    qualification: 'MD, FAAD (Paris Descartes / Harvard)',
    experience_years: 13,
    department_id: 'dept-6',
    department_name: 'Dermatology & Skin Science',
    bio: 'Renowned expert in digital mole mapping, non-invasive facial rejuvenation, scar revisions, and hair loss therapies.',
    photo_url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1650,
    rating: 4.98,
    review_count: 204,
    available_today: true,
    languages: ['English', 'French'],
    room_number: 'Suite 118'
  },
  {
    doctor_id: 'doc-22',
    user_id: 'user-doc-22',
    name: 'Dr. Vikram Singhania',
    specialization: 'Dermatopathologist & Mohs Surgeon',
    qualification: 'MD, FAAD (Johns Hopkins Medicine)',
    experience_years: 16,
    department_id: 'dept-6',
    department_name: 'Dermatology & Skin Science',
    bio: 'Specializing in Mohs micrographic surgery for skin cancer, tumor histology, and reconstructive cutaneous procedures.',
    photo_url: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=800',
    consultation_fee: 1750,
    rating: 4.96,
    review_count: 152,
    available_today: false,
    languages: ['English', 'Hindi'],
    room_number: 'Suite 120'
  }
];

const weekdaysList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export const INITIAL_AVAILABILITIES: DoctorAvailability[] = Array.from({ length: 22 }, (_, idx) => {
  const docId = `doc-${idx + 1}`;
  return weekdaysList.map(day => ({
    id: `av-${docId}-${day.toLowerCase()}`,
    availability_id: `av-${docId}-${day.toLowerCase()}`,
    doctor_id: docId,
    day_of_week: day,
    start_time: '09:00',
    end_time: '17:00',
    slot_duration_minutes: 30,
    is_active: true
  }));
}).flat();

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    patient_id: 'pat-1',
    patient_name: 'Sarah Mitchell',
    patient_avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    doctor_id: 'doc-1',
    doctor_name: 'Dr. David Chen',
    department_name: 'Orthopedics & Joint Replacement',
    rating: 5,
    feedback: 'My robotic knee replacement with Dr. Chen was truly life-changing. Within 3 weeks I was walking pain-free for the first time in 6 years. The nursing care at Qure Nexa was world-class.',
    approved: true,
    created_at: '2026-07-28'
  },
  {
    id: 'test-2',
    patient_id: 'pat-2',
    patient_name: 'James Reynolds',
    patient_avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    doctor_id: 'doc-2',
    doctor_name: 'Dr. Marcus Vance',
    department_name: 'Cardiology & Heart Institute',
    rating: 5,
    feedback: 'Dr. Vance saved my life during an acute cardiac episode. His calmness, precision in the Cath lab, and clear recovery explanation gave my family immense peace of mind.',
    approved: true,
    created_at: '2026-08-01'
  },
  {
    id: 'test-3',
    patient_id: 'pat-3',
    patient_name: 'Emily Watson',
    patient_avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    doctor_id: 'doc-4',
    doctor_name: 'Dr. Priya Sharma',
    department_name: 'Pediatrics & Neonatal Care',
    rating: 5,
    feedback: 'Dr. Sharma is the most patient and reassuring pediatrician we have ever had. She handled our daughter’s chronic asthma symptoms with tremendous expertise and empathy.',
    approved: true,
    created_at: '2026-08-04'
  },
  {
    id: 'test-4',
    patient_id: 'pat-4',
    patient_name: 'Arthur Pendelton',
    patient_avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    doctor_id: 'doc-3',
    doctor_name: 'Dr. Elena Rostova',
    department_name: 'Neurology & Neurosurgery',
    rating: 5,
    feedback: 'Suffering from intractable migraines for a decade, Dr. Rostova crafted a targeted treatment regimen that reduced my episodes by 90%. Exceptional clinical insight.',
    approved: true,
    created_at: '2026-08-06'
  },
  {
    id: 'test-5',
    patient_id: 'pat-5',
    patient_name: 'Olivia Martinez',
    patient_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    doctor_id: 'doc-6',
    doctor_name: 'Dr. Alexander Hayes',
    department_name: 'Dermatology & Skin Science',
    rating: 5,
    feedback: 'The mole mapping technology and thorough skin screening detected early melanoma. Dr. Hayes treated it swiftly with zero scarring. I cannot recommend this hospital enough.',
    approved: true,
    created_at: '2026-08-08'
  },
  {
    id: 'test-6',
    patient_id: 'pat-6',
    patient_name: 'Michael Chang',
    patient_avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    doctor_id: 'doc-1',
    doctor_name: 'Dr. David Chen',
    department_name: 'Orthopedics & Joint Replacement',
    rating: 5,
    feedback: 'Repaired my torn ACL with arthroscopic surgery. Back to running half-marathons in 7 months. The physical therapy staff at Qure Nexa are phenomenal.',
    approved: true,
    created_at: '2026-08-10'
  },
  {
    id: 'test-7',
    patient_id: 'pat-7',
    patient_name: 'Karen Henderson',
    patient_avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    doctor_id: 'doc-5',
    doctor_name: 'Dr. Sarah Jenkins',
    department_name: 'Emergency & Trauma Care',
    rating: 5,
    feedback: 'The ER team triaged my father in under 90 seconds. Prompt diagnostics, attentive nurses, and hygienic private observation rooms. Highest standard of medical excellence.',
    approved: true,
    created_at: '2026-08-11'
  },
  {
    id: 'test-8',
    patient_id: 'pat-8',
    patient_name: 'Liam Sullivan',
    patient_avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    doctor_id: 'doc-2',
    doctor_name: 'Dr. Marcus Vance',
    department_name: 'Cardiology & Heart Institute',
    rating: 5,
    feedback: 'Booking an appointment online was seamless. Consultation was unhurried, thorough, and my test results were available on the patient dashboard within two hours.',
    approved: true,
    created_at: '2026-08-12'
  },
  {
    id: 'test-9',
    patient_id: 'pat-9',
    patient_name: 'Sophia Bennett',
    patient_avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200',
    doctor_id: 'doc-4',
    doctor_name: 'Dr. Priya Sharma',
    department_name: 'Pediatrics & Neonatal Care',
    rating: 4,
    feedback: 'Wonderful pediatric environment. Toys, bright colors, and warm staff made my 4-year-old completely forget he was at a doctor visit!',
    approved: true,
    created_at: '2026-08-13'
  },
  {
    id: 'test-10',
    patient_id: 'pat-10',
    patient_name: 'Daniel Brooks',
    patient_avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    doctor_id: 'doc-7',
    doctor_name: 'Dr. Maya Patel',
    department_name: 'Cardiology & Heart Institute',
    rating: 5,
    feedback: 'Dr. Patel took the time to answer every single question about my arrhythmia. The personalized cardiac diet and exercise blueprint gave me confidence.',
    approved: true,
    created_at: '2026-08-13'
  }
];

export const INITIAL_FAQS: FAQ[] = [
  {
    id: 'faq-1',
    category: 'Appointments',
    question: 'How do I book an appointment with a specialist?',
    answer: 'You can book directly via our online Appointment Booking portal in 4 easy steps: select department, choose your preferred doctor, pick an available time slot, and confirm your details. You will receive an immediate confirmation with SMS & dashboard reminders.'
  },
  {
    id: 'faq-2',
    category: 'Appointments',
    question: 'Can I reschedule or cancel my booked appointment?',
    answer: 'Yes. Log in to your Patient Dashboard, navigate to "My Appointments", and click "Reschedule" or "Cancel". We request at least 4 hours advance notice so that slots can be made available for emergency patients.'
  },
  {
    id: 'faq-3',
    category: 'Doctors',
    question: 'Are all Qure Nexa doctors board-certified?',
    answer: 'Every doctor practicing at Qure Nexa is board-certified, credentialed by leading medical boards (such as AMA, FAAOS, FACC, FAAP), and possesses extensive clinical fellowship experience from premier medical institutions.'
  },
  {
    id: 'faq-4',
    category: 'Emergency',
    question: 'What should I do in a medical emergency?',
    answer: 'Call our 24/7 Emergency Trauma Hotline at +91 1800 555 091 or dial 108 immediately. Our Level 1 Trauma Center is open 24 hours a day, 365 days a year with direct ambulance triage bays.'
  },
  {
    id: 'faq-5',
    category: 'Hospital',
    question: 'What are the visiting hours for inpatient wards and ICU?',
    answer: 'General Inpatient Wards: 10:00 AM – 1:00 PM and 4:00 PM – 8:00 PM daily. Intensive Care Units (ICU/NICU): 11:00 AM – 12:00 PM and 5:00 PM – 6:00 PM (maximum 2 immediate family members at a time for patient safety).'
  },
  {
    id: 'faq-6',
    category: 'Payment',
    question: 'Which health insurance plans does Qure Nexa accept?',
    answer: 'We accept major national insurance networks including BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, Medicare, and Kaiser Permanente. Cashless hospitalization claims are processed on-site by our billing desk.'
  },
  {
    id: 'faq-7',
    category: 'Payment',
    question: 'Are consultation fees payable online or at the clinic?',
    answer: 'Patients can choose either to pay online securely during booking, or settle fees at the hospital reception upon arrival via credit/debit card, insurance co-pay, or cash.'
  },
  {
    id: 'faq-8',
    category: 'Hospital',
    question: 'How do I access my lab results and medical reports online?',
    answer: 'Your diagnostic reports, doctor notes, and digital prescriptions are automatically synced to your secure Patient Dashboard under the "Medical Documents" tab within 2 hours of report release.'
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    image_url: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=1000',
    category: 'Hospital',
    caption: 'Main Hospital Pavilion & Atrium',
    description: 'Modern, naturally lit reception and patient check-in pavilion designed for stress-free arrival.'
  },
  {
    id: 'gal-2',
    image_url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000',
    category: 'Facilities',
    caption: 'Hybrid Robotic Surgical Suite',
    description: 'Next-generation operating theater equipped with Mako robotic arm and high-resolution fluoroscopy.'
  },
  {
    id: 'gal-3',
    image_url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000',
    category: 'Departments',
    caption: '3T Digital MRI Neuroimaging Suite',
    description: 'Ultra-quiet 3 Tesla magnetic resonance imaging center delivering sub-millimeter diagnostic precision.'
  },
  {
    id: 'gal-4',
    image_url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1000',
    category: 'Facilities',
    caption: 'Intensive Cardiac Care Unit (ICCU)',
    description: '24/7 telemetry monitored private recovery suites with dedicated cardiac nurses.'
  },
  {
    id: 'gal-5',
    image_url: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=1000',
    category: 'Doctors',
    caption: 'Surgical Team Pre-Op Briefing',
    description: 'Multidisciplinary clinical team conducting preoperative safety checklist review.'
  },
  {
    id: 'gal-6',
    image_url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000',
    category: 'Facilities',
    caption: 'Level 1 Trauma & Resuscitation Bay',
    description: 'Immediate trauma access with rapid overhead blood warming and portable CT capability.'
  },
  {
    id: 'gal-7',
    image_url: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1000',
    category: 'Departments',
    caption: 'Pediatric Rehabilitation & Play Clinic',
    description: 'Comforting, child-friendly healing spaces supporting sensory therapy and pediatric wellness.'
  },
  {
    id: 'gal-8',
    image_url: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1000',
    category: 'Events',
    caption: 'Community Cardiovascular Health Fair',
    description: 'Annual free health screening and CPR training camp hosted by Qure Nexa outreach.'
  }
];

export const DEMO_USERS: User[] = [
  {
    user_id: 'user-admin-1',
    name: 'Eleanor Sterling (Administrator)',
    email: 'admin@medipulse.org',
    role: 'admin',
    phone: '+1 (555) 019-2000',
    avatar_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    created_at: '2025-01-01'
  },
  {
    user_id: 'user-doc-1',
    name: 'Dr. David Chen',
    email: 'dr.chen@medipulse.org',
    role: 'doctor',
    phone: '+1 (555) 019-3001',
    avatar_url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200',
    created_at: '2025-01-10'
  },
  {
    user_id: 'user-pat-1',
    name: 'Sarah Mitchell',
    email: 'sarah.patient@example.com',
    role: 'patient',
    phone: '+1 (555) 019-4001',
    avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    created_at: '2026-02-15'
  }
];

export const INITIAL_PATIENTS: Patient[] = [
  {
    patient_id: 'pat-1',
    user_id: 'user-pat-1',
    dob: '1992-05-14',
    gender: 'Female',
    address: '742 Evergreen Terrace, Springfield, OR',
    blood_group: 'O Positive',
    emergency_contact: 'Mark Mitchell (Spouse) - +1 (555) 019-9944',
    allergies: ['Penicillin', 'Sulfa Drugs'],
    medical_notes: 'Post-operative right knee arthroscopy follow-up. Mild seasonal asthma.',
    insurance_provider: 'BlueCross BlueShield Premier',
    insurance_id: 'BCBS-9884210-A'
  },
  {
    patient_id: 'pat-2',
    user_id: 'user-pat-2',
    dob: '1984-11-20',
    gender: 'Male',
    address: '124 Conch Street, Seattle, WA',
    blood_group: 'A Positive',
    emergency_contact: 'Claire Reynolds (Wife) - +1 (555) 019-7711',
    allergies: ['Latex'],
    medical_notes: 'Hypertension stage 1 management, regular lipid profiling.',
    insurance_provider: 'Aetna Health Choice',
    insurance_id: 'AET-443190-X'
  },
  {
    patient_id: 'pat-3',
    user_id: 'user-pat-3',
    dob: '2018-03-09',
    gender: 'Female',
    address: '88 Cherry Blossom Way, Portland, OR',
    blood_group: 'B Positive',
    emergency_contact: 'Emily Watson (Mother) - +1 (555) 019-3322',
    allergies: ['Peanuts'],
    medical_notes: 'Pediatric asthma maintenance plan, routine vaccinations up to date.',
    insurance_provider: 'UnitedHealthcare Pediatric Plus',
    insurance_id: 'UHC-119283-P'
  }
];

export const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    appointment_id: 'apt-101',
    patient_id: 'pat-1',
    patient_name: 'Sarah Mitchell',
    patient_email: 'sarah.patient@example.com',
    patient_phone: '+1 (555) 019-4001',
    doctor_id: 'doc-1',
    doctor_name: 'Dr. David Chen',
    doctor_specialization: 'Orthopedic & Joint Surgeon',
    doctor_photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200',
    department_id: 'dept-3',
    department_name: 'Orthopedics & Joint Replacement',
    date: '2026-08-18',
    time: '10:00 AM',
    reason: 'Follow-up joint mobility check and post-op physical therapy evaluation.',
    status: 'approved',
    consultation_fee: 1600,
    created_at: '2026-08-12T10:30:00Z',
    doctor_notes: 'Patient exhibits smooth knee articulation, wound healing clean without inflammation.'
  },
  {
    appointment_id: 'apt-102',
    patient_id: 'pat-1',
    patient_name: 'Sarah Mitchell',
    patient_email: 'sarah.patient@example.com',
    patient_phone: '+1 (555) 019-4001',
    doctor_id: 'doc-4',
    doctor_name: 'Dr. Priya Sharma',
    doctor_specialization: 'Senior Pediatrician',
    doctor_photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200',
    department_id: 'dept-4',
    department_name: 'Pediatrics & Neonatal Care',
    date: '2026-08-22',
    time: '02:30 PM',
    reason: 'Routine annual wellness checkup and school immunization booster.',
    status: 'pending',
    consultation_fee: 1500,
    created_at: '2026-08-13T14:15:00Z'
  },
  {
    appointment_id: 'apt-103',
    patient_id: 'pat-2',
    patient_name: 'James Reynolds',
    patient_email: 'james.reynolds@example.com',
    patient_phone: '+1 (555) 019-7711',
    doctor_id: 'doc-2',
    doctor_name: 'Dr. Marcus Vance',
    doctor_specialization: 'Interventional Cardiologist',
    doctor_photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200',
    department_id: 'dept-1',
    department_name: 'Cardiology & Heart Institute',
    date: '2026-08-17',
    time: '11:30 AM',
    reason: 'Quarterly cardiac stress echocardiogram review and medication adjustment.',
    status: 'approved',
    consultation_fee: 1800,
    created_at: '2026-08-10T09:00:00Z'
  },
  {
    appointment_id: 'apt-104',
    patient_id: 'pat-1',
    patient_name: 'Sarah Mitchell',
    patient_email: 'sarah.patient@example.com',
    patient_phone: '+1 (555) 019-4001',
    doctor_id: 'doc-6',
    doctor_name: 'Dr. Alexander Hayes',
    doctor_specialization: 'Dermatologist & Laser Surgeon',
    doctor_photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200',
    department_id: 'dept-6',
    department_name: 'Dermatology & Skin Science',
    date: '2026-07-20',
    time: '03:00 PM',
    reason: 'Annual full-body dermoscopy and benign mole excision.',
    status: 'completed',
    consultation_fee: 1550,
    created_at: '2026-07-15T11:00:00Z',
    doctor_notes: 'Lesions completely benign on histological review. Recommended SPF 50+ daily.',
    prescription: '1. Topical CeraVe barrier balm applied twice daily.\n2. Heliocare 500mg antioxidant oral supplements.'
  }
];

export const INITIAL_DOCUMENTS: MedicalDocument[] = [
  {
    id: 'doc-rep-1',
    patient_id: 'pat-1',
    title: 'Post-Operative Knee MRI & Arthroscopy Report',
    category: 'Lab Report',
    date: '2026-07-22',
    file_url: 'https://medipulse.org/docs/reports/mri_knee_74210.pdf',
    file_size: '3.4 MB',
    doctor_name: 'Dr. David Chen'
  },
  {
    id: 'doc-rep-2',
    patient_id: 'pat-1',
    title: 'Comprehensive Lipid & Metabolic Blood Panel',
    category: 'Lab Report',
    date: '2026-08-05',
    file_url: 'https://medipulse.org/docs/reports/blood_panel_99214.pdf',
    file_size: '1.2 MB',
    doctor_name: 'Dr. Marcus Vance'
  },
  {
    id: 'doc-rep-3',
    patient_id: 'pat-1',
    title: 'Electronic Prescription - Orthopedic Rehabilitation',
    category: 'Prescription',
    date: '2026-07-20',
    file_url: 'https://medipulse.org/docs/rx/rx_ortho_chen_108.pdf',
    file_size: '450 KB',
    doctor_name: 'Dr. David Chen'
  },
  {
    id: 'doc-rep-4',
    patient_id: 'pat-1',
    title: 'Annual Seasonal Influenza & Tdap Vaccine Certificate',
    category: 'Vaccination',
    date: '2025-10-14',
    file_url: 'https://medipulse.org/docs/vax/vax_cert_2025_mitchell.pdf',
    file_size: '820 KB',
    doctor_name: 'Dr. Priya Sharma'
  }
];

export const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: 'notif-1',
    user_id: 'user-pat-1',
    title: 'Appointment Approved',
    message: 'Dr. David Chen confirmed your follow-up appointment for August 18, 2026 at 10:00 AM in Suite 304.',
    is_read: false,
    type: 'appointment',
    created_at: '2026-08-13T10:00:00Z',
    action_url: '/patient/appointments'
  },
  {
    id: 'notif-2',
    user_id: 'user-pat-1',
    title: 'New Diagnostic Report Released',
    message: 'Your Comprehensive Metabolic Blood Panel results have been uploaded and verified by Dr. Marcus Vance.',
    is_read: false,
    type: 'alert',
    created_at: '2026-08-05T14:30:00Z',
    action_url: '/patient/documents'
  },
  {
    id: 'notif-3',
    user_id: 'user-doc-1',
    title: 'New Patient Booking Request',
    message: 'Sarah Mitchell requested an orthopedic consultation on August 18 at 10:00 AM.',
    is_read: true,
    type: 'appointment',
    created_at: '2026-08-12T10:30:00Z',
    action_url: '/doctor/appointments'
  },
  {
    id: 'notif-4',
    user_id: 'user-admin-1',
    title: 'New Patient Testimonial Submitted',
    message: 'Daniel Brooks submitted a 5-star review for Dr. Maya Patel requiring administrative approval.',
    is_read: false,
    type: 'system',
    created_at: '2026-08-13T15:00:00Z',
    action_url: '/admin/testimonials'
  }
];

export const INITIAL_CONTACT_MESSAGES: ContactMessage[] = [
  {
    id: 'msg-1',
    name: 'Jonathan Hayes',
    email: 'j.hayes@pacifichealth.com',
    phone: '+1 (555) 349-8821',
    department: 'Cardiology & Heart Institute',
    message: 'Inquiring about international patient referral procedures for a coronary bypass consultation.',
    status: 'new',
    created_at: '2026-08-13T09:12:00Z'
  },
  {
    id: 'msg-2',
    name: 'Melissa Thorne',
    email: 'mthorne@nwcorp.org',
    phone: '+1 (555) 782-9901',
    department: 'General Medicine & Wellness',
    message: 'We are seeking an executive corporate wellness screening package for 65 staff members next month.',
    status: 'in-progress',
    created_at: '2026-08-12T16:45:00Z'
  },
  {
    id: 'msg-3',
    name: 'Carlos Mendez',
    email: 'carlos.m@yahoo.com',
    phone: '+1 (555) 431-2299',
    department: 'Orthopedics & Joint Replacement',
    message: 'Need assistance obtaining an itemized cost estimate for robotic knee arthroplasty under out-of-network insurance.',
    status: 'resolved',
    created_at: '2026-08-11T11:20:00Z'
  }
];

export const INITIAL_HOSPITAL_SETTINGS: HospitalSettings = {
  hospital_name: 'Qure Nexa Medical Center & University Hospital',
  tagline: 'Leading with Medical Precision, Caring with Human Heart',
  emergency_hotline: '+91 1800 555 091',
  ambulance_number: '108 / +91 1800 555 091',
  general_phone: '+91 98765 43210',
  email: 'info@qurenexa.org',
  address: '100 Medical Center Parkway, Metropolitan Health District, Suite 500, Healthcare Hub, India',
  opd_hours: 'Monday – Saturday: 08:00 AM – 08:00 PM',
  emergency_hours: '24 Hours / 7 Days a Week / 365 Days a Year',
  total_beds: 350,
  icu_beds: 65,
  visitor_policy: 'General Inpatient Wards: 10:00 AM – 1:00 PM & 4:00 PM – 8:00 PM daily. Max 2 visitors per patient.'
};

export const INITIAL_HEALTH_ARTICLES = [
  {
    id: 'art-1',
    title: 'Understanding Early Warning Signs of Coronary Artery Disease',
    category: 'Heart Health',
    author: 'Dr. Marcus Vance',
    read_time: '5 min read',
    date: 'Aug 10, 2026',
    image_url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
    summary: 'Learn the subtle distinctions between exertional angina, gastrointestinal distress, and acute myocardial ischemia, and when to seek urgent catheterization.'
  },
  {
    id: 'art-2',
    title: 'The Future of Robotic Orthopedic Surgery & Accelerated Recovery',
    category: 'Orthopedics',
    author: 'Dr. David Chen',
    read_time: '7 min read',
    date: 'Aug 04, 2026',
    image_url: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600',
    summary: 'How sub-millimeter 3D spatial robotic tracking is cutting post-operative recovery timelines in half for total knee and hip replacements.'
  },
  {
    id: 'art-3',
    title: 'Protecting Children Against Seasonal Allergies and Asthma',
    category: 'Pediatrics',
    author: 'Dr. Priya Sharma',
    read_time: '4 min read',
    date: 'Jul 28, 2026',
    image_url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600',
    summary: 'Practical environmental controls, air filtration protocols, and pediatric medication plans to manage childhood airway reactivity during high pollen seasons.'
  }
];

export const INITIAL_PRESCRIPTIONS: Prescription[] = [
  {
    prescription_id: 'rx-101',
    patient_id: 'pat-1',
    patient_name: 'Sarah Mitchell',
    doctor_id: 'doc-1',
    doctor_name: 'Dr. Marcus Vance, MD',
    appointment_id: 'apt-101',
    diagnosis: 'Stage 1 Hypertension with mild hyperlipidemia',
    medicines: [
      { medicine_name: 'Atorvastatin', dosage: '20mg', frequency: 'Once daily at bedtime', duration: '30 days', instructions: 'Take with or without food. Avoid grapefruit juice.' },
      { medicine_name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily in the morning', duration: '30 days', instructions: 'Monitor resting blood pressure 2x weekly.' }
    ],
    notes: 'Follow low-sodium DASH diet. Cardiovascular re-evaluation scheduled in 4 weeks.',
    issued_at: '2026-08-10'
  },
  {
    prescription_id: 'rx-102',
    patient_id: 'pat-1',
    patient_name: 'Sarah Mitchell',
    doctor_id: 'doc-3',
    doctor_name: 'Dr. David Chen, MD',
    appointment_id: 'apt-103',
    diagnosis: 'Patellofemoral Pain Syndrome (Right Knee)',
    medicines: [
      { medicine_name: 'Meloxicam', dosage: '7.5mg', frequency: 'Once daily with meals', duration: '14 days', instructions: 'Take after breakfast with plenty of water.' },
      { medicine_name: 'Glucosamine Sulfate', dosage: '1500mg', frequency: 'Once daily', duration: '60 days', instructions: 'Dietary joint supplement.' }
    ],
    notes: 'Begin quadriceps physical therapy protocol 3x weekly. Avoid high-impact running for 3 weeks.',
    issued_at: '2026-07-20'
  }
];

export const INITIAL_INVOICES: Invoice[] = [
  {
    invoice_id: 'inv-8901',
    patient_id: 'pat-1',
    patient_name: 'Sarah Mitchell',
    appointment_id: 'apt-101',
    issue_date: '2026-08-10',
    due_date: '2026-09-10',
    items: [
      { description: 'Cardiology Specialist Consultation (Level 4)', quantity: 1, unit_price: 1500, total: 1500 },
      { description: '12-Lead Electrocardiogram (ECG)', quantity: 1, unit_price: 350, total: 350 }
    ],
    total_amount: 1850,
    status: InvoiceStatus.PENDING
  },
  {
    invoice_id: 'inv-8902',
    patient_id: 'pat-1',
    patient_name: 'Sarah Mitchell',
    appointment_id: 'apt-103',
    issue_date: '2026-07-20',
    due_date: '2026-08-20',
    items: [
      { description: 'Orthopedic Consultation & Knee Mobility Assessment', quantity: 1, unit_price: 1500, total: 1500 },
      { description: 'Bilateral Weight-Bearing Knee Digital X-Ray', quantity: 1, unit_price: 400, total: 400 }
    ],
    total_amount: 1850,
    status: InvoiceStatus.PAID,
    paid_at: '2026-07-20T14:30:00Z',
    payment_method: 'BlueCross Health Insurance / Visa'
  }
];

export const INITIAL_MEDICAL_RECORDS: MedicalRecord[] = [
  {
    record_id: 'rec-1',
    patient_id: 'pat-1',
    doctor_id: 'doc-1',
    doctor_name: 'Dr. Marcus Vance',
    title: 'Comprehensive Metabolic Panel & Lipid Profile',
    type: 'Lab Report',
    date: '2026-08-05',
    facility: 'Qure Nexa Central Diagnostic Labs',
    result_summary: 'Total Cholesterol: 198 mg/dL, HDL: 52 mg/dL, LDL: 118 mg/dL, Fasting Glucose: 92 mg/dL (Normal).',
    notes: 'Lipid metrics improving following lifestyle changes.',
    file_url: 'https://qurenexa.org/docs/reports/metabolic_panel_8901.pdf'
  },
  {
    record_id: 'rec-2',
    patient_id: 'pat-1',
    doctor_id: 'doc-3',
    doctor_name: 'Dr. David Chen',
    title: 'Right Knee Diagnostic MRI & Joint Cartilage Scan',
    type: 'Imaging',
    date: '2026-07-15',
    facility: 'Qure Nexa Advanced Imaging Pavilion',
    result_summary: 'Grade 1 chondromalacia patellae. Intact ACL/PCL and meniscal margins without full-thickness tear.',
    notes: 'Conservative physical therapy recommended prior to surgical consideration.',
    file_url: 'https://medipulse.org/docs/imaging/knee_mri_3321.pdf'
  }
];

