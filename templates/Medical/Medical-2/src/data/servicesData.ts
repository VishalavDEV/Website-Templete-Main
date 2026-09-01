import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'srv-emergency',
    title: '24/7 Level-1 Emergency & Trauma Care',
    iconName: 'Activity',
    category: 'Critical Care',
    shortDesc: 'Immediate, multidisciplinary emergency triage, resuscitation, and critical trauma management around the clock.',
    fullDesc: 'Our Emergency Department features dedicated resuscitation bays, immediate bedside CT imaging, and rapid-access catheterization suites. Board-certified emergency physicians and trauma nurses manage cardiac arrest, acute strokes, major trauma, and acute pediatric crises without delay.',
    keyBenefits: [
      'Zero-wait triage for critical chest pain and acute stroke symptoms',
      'Direct on-site blood bank and rapid toxicology laboratory',
      'Immediate access to surgical, neurological, and cardiac teams',
      'Private, sound-insulated patient resuscitation suites'
    ],
    conditionsTreated: [
      'Severe chest pain & suspected myocardial infarction',
      'Acute ischemic and hemorrhagic stroke',
      'Multiple trauma & bone fractures',
      'Acute respiratory failure & severe allergic reactions',
      'Pediatric high-fever crises & acute dehydration'
    ],
    technologyUsed: [
      'Bedside Point-of-Care Ultrasound (POCUS)',
      'Immediate Flash High-Speed CT Scanner',
      'Automated Mechanical CPR & Defibrillation units',
      'Advanced High-Flow Invasive & Non-invasive Ventilators'
    ],
    patientPrep: 'No appointment needed for emergencies. Bring photo ID, current medication list, and insurance cards if conscious and safe.',
    departmentId: 'dept-genmed',
    durationMinutes: 60,
  },
  {
    id: 'srv-cardio-interv',
    title: 'Advanced Interventional Cardiology',
    iconName: 'HeartPulse',
    category: 'Surgery',
    shortDesc: 'Minimally invasive catheter-based cardiac interventions, stent placements, and electrophysiology mapping.',
    fullDesc: 'Using robotic catheter guidance and high-resolution intravascular ultrasound (IVUS), our cardiologists diagnose and treat complex coronary blockages, valve dysfunctions, and rhythm disorders through radial artery access with same-day recovery.',
    keyBenefits: [
      'Radial (wrist) access approach for superior patient comfort and rapid discharge',
      'Real-time 3D electro-anatomical mapping for precision ablation',
      'Comprehensive pre-procedure cardiac CT risk evaluation',
      'Personalized outpatient cardiac rehabilitation plan'
    ],
    conditionsTreated: [
      'Coronary Artery Disease & Angina Pectoris',
      'Atrial Fibrillation & Supraventricular Tachycardia (SVT)',
      'Aortic Valve Stenosis (TAVR candidates)',
      'Bradycardia requiring Pacemaker implantation'
    ],
    technologyUsed: [
      'Intravascular Optical Coherence Tomography (OCT)',
      '3D Carto-3 Cardiac Mapping System',
      'Fractional Flow Reserve (FFR) Microcatheters',
      'Biplane Fluoroscopy Suites'
    ],
    patientPrep: 'Fast from solid food for 6 hours prior to elective catheterization procedures. Routine blood work and ECG must be completed within 72 hours.',
    departmentId: 'dept-cardio',
    durationMinutes: 90,
  },
  {
    id: 'srv-neuro-stroke',
    title: 'Comprehensive Stroke & Neurovascular Care',
    iconName: 'Brain',
    category: 'Critical Care',
    shortDesc: 'Rapid stroke thrombolysis, mechanical thrombectomy, and specialized neurological neuro-intensive recovery.',
    fullDesc: 'Medicio delivers door-to-needle thrombolytic therapy well under 30 minutes. Our endovascular neurosurgeons perform mechanical clot retrieval for large vessel occlusions, supported by continuous neuro-monitoring in our dedicated Neuro-ICU.',
    keyBenefits: [
      '24/7 neuro-interventional suite on standby',
      'AI-powered perfusion CT scan automated clot detection',
      'Integrated physical, speech, and occupational neuro-rehab team',
      'Long-term secondary stroke prevention protocols'
    ],
    conditionsTreated: [
      'Acute Ischemic Stroke',
      'Cerebral Aneurysms & Arteriovenous Malformations (AVMs)',
      'Intracerebral Hemorrhage',
      'Carotid Artery Stenosis'
    ],
    technologyUsed: [
      'AI Rapid Brain Perfusion CT Processing',
      'Continuous 64-Channel Video EEG',
      'Biplane Neuro-Angiography Suite',
      'Transcranial Doppler Ultrasonography'
    ],
    patientPrep: 'Stroke symptoms require immediate emergency 911 dispatch. For elective vascular neuro-consults, bring previous MRI/CT disc scans.',
    departmentId: 'dept-neuro',
    durationMinutes: 45,
  },
  {
    id: 'srv-ortho-robotic',
    title: 'Robotic-Assisted Joint Replacement & Orthopedics',
    iconName: 'Bone',
    category: 'Surgery',
    shortDesc: 'CT-guided robotic knee and hip arthroplasty offering sub-millimeter surgical accuracy and faster recovery.',
    fullDesc: 'Our orthopedic surgeons utilize CT-based 3D modeling and robotic arm assistance to achieve optimal implant alignment tailored specifically to each patient’s unique musculoskeletal anatomy, resulting in natural joint kinematics and reduced postoperative pain.',
    keyBenefits: [
      'Sub-millimeter implant precision preserving healthy bone and ligament tissue',
      'Up to 40% reduction in postoperative hospital recovery duration',
      'Customized 3D surgical simulation before incision',
      'Pre-habilitative physical conditioning programs'
    ],
    conditionsTreated: [
      'Severe Osteoarthritis of Knee and Hip',
      'Post-traumatic joint degeneration',
      'Complex ligament tears (ACL, PCL, Meniscus)',
      'Avascular necrosis of the femoral head'
    ],
    technologyUsed: [
      'MAKO Robotic-Arm Surgical Guidance Console',
      'High-Definition Arthroscopic Cameras',
      'Computer-Navigated Tension Sensor Implants',
      'Continuous Passive Motion (CPM) Recovery Systems'
    ],
    patientPrep: 'Wear loose-fitting, comfortable clothing. Bring previous weight-bearing X-rays or MRI reports if available.',
    departmentId: 'dept-ortho',
    durationMinutes: 60,
  },
  {
    id: 'srv-diagnostics-mri',
    title: 'High-Field 3.0T MRI & Molecular Diagnostics',
    iconName: 'ScanLine',
    category: 'Diagnostics',
    shortDesc: 'Ultra-clear cross-sectional MRI, low-dose spectral CT scans, and automated pathology screening.',
    fullDesc: 'Equipped with wide-bore, ambient-lit 3.0 Tesla MRI scanners designed for claustrophobia-free comfort, our diagnostic center provides unparalleled soft-tissue resolution for neurological, orthopedic, oncologic, and abdominal evaluations.',
    keyBenefits: [
      '70cm wide-bore scanner with noise reduction and scenic projection',
      'Sub-millimeter anatomical detail for early disease detection',
      'Board-certified subspecialty radiologist interpretations in < 4 hours',
      'Secure digital patient portal access to full DICOM images'
    ],
    conditionsTreated: [
      'Spinal herniations and neurological lesions',
      'Soft-tissue tumors and musculoskeletal tears',
      'Cardiac ischemia and structural heart conditions',
      'Liver, kidney, and pelvic organ abnormalities'
    ],
    technologyUsed: [
      'Siemens 3.0T Magnetom Vida MRI System',
      '128-Slice Low-Dose Dual-Source CT Scanner',
      '3D Digital Tomosynthesis Mammography',
      'AI Reconstruction Denoising Engine'
    ],
    patientPrep: 'Remove all metallic objects, jewelry, and watches. Inform technician of any pacemakers, surgical clips, or metal implants.',
    departmentId: 'dept-diag',
    durationMinutes: 45,
  },
  {
    id: 'srv-pediatrics',
    title: 'Pediatric Care & Developmental Wellness',
    iconName: 'Baby',
    category: 'Wellness',
    shortDesc: 'Holistic childhood healthcare, newborn screenings, growth tracking, and childhood acute illness management.',
    fullDesc: 'From newborn milestones to teenage wellness, our pediatricians offer comprehensive, family-focused care. We provide calm, sensory-friendly clinic environments designed to make medical visits positive, educational, and stress-free for children.',
    keyBenefits: [
      'Dedicated separate sick-child and well-child waiting zones',
      'Comprehensive developmental, speech, and vision screenings',
      'Gentle, distraction-assisted vaccination protocols',
      'Direct parent telehealth messaging for post-visit questions'
    ],
    conditionsTreated: [
      'Childhood infections, earaches & fevers',
      'Pediatric asthma, allergies & eczema',
      'Growth & nutritional assessment',
      'ADHD and behavioral developmental evaluations'
    ],
    technologyUsed: [
      'Non-invasive transcutaneous bilirubinometers',
      'Child-adapted low-dose digital radiography',
      'Digital oto-endoscopes for gentle ear examinations',
      'Pediatric spirometry and allergen testing panels'
    ],
    patientPrep: 'Bring your child’s favorite comfort toy or blanket, immunization booklet, and list of any current vitamins or supplements.',
    departmentId: 'dept-peds',
    durationMinutes: 30,
  },
  {
    id: 'srv-derma-skin',
    title: 'Dermatologic Surgery & Skin Health Center',
    iconName: 'Sparkles',
    category: 'Surgery',
    shortDesc: 'Precision Mohs micrographic surgery, full-body mole mapping, and advanced aesthetic dermatology.',
    fullDesc: 'Our skin health institute provides comprehensive surveillance and surgical removal for melanoma and basal cell carcinomas, alongside advanced laser resurfacing, biologics therapy for chronic psoriasis, and evidence-backed cosmetic rejuvenation.',
    keyBenefits: [
      'Same-day on-site frozen section margin verification during Mohs surgery',
      'Digital total-body dermoscopy for early melanoma detection',
      'Advanced medical laser suites with specialized cooling systems',
      'Individualized compounding skincare formulations'
    ],
    conditionsTreated: [
      'Basal & Squamous Cell Carcinomas, Melanoma',
      'Severe Chronic Psoriasis, Atopic Dermatitis & Eczema',
      'Cystic Acne, Rosacea & Post-inflammatory scarring',
      'Complex benign cysts and vascular birthmarks'
    ],
    technologyUsed: [
      'FotoFinder Automated BodyScan Dermoscopy',
      'Cryostat Microtome Frozen Section System',
      'Fractional CO2 and Picosecond Laser Systems',
      'Narrowband UVB Phototherapy Enclosures'
    ],
    patientPrep: 'Do not apply heavy facial makeup, self-tanners, or nail polish before a full-body dermatologic examination.',
    departmentId: 'dept-derma',
    durationMinutes: 40,
  },
  {
    id: 'srv-rehab-therapy',
    title: 'Physical Rehabilitation & Mobility Restoration',
    iconName: 'ShieldPlus',
    category: 'Therapy',
    shortDesc: 'Personalized physical therapy, post-operative recovery, gait analysis, and sports conditioning.',
    fullDesc: 'Our rehabilitation pavilion is staffed by licensed physical, occupational, and vestibular therapists. Utilizing anti-gravity treadmills and hydrotherapy pools, we guide patients through safe, progressive restoration of strength, flexibility, and independent mobility.',
    keyBenefits: [
      'Individualized one-on-one therapy sessions with licensed specialists',
      'State-of-the-art AlterG anti-gravity treadmill for low-impact conditioning',
      'Neurological gait and balance retraining systems',
      'Customized home exercise video prescriptions'
    ],
    conditionsTreated: [
      'Post-orthopedic joint surgery rehabilitation',
      'Spinal stenosis and chronic lower back pain',
      'Stroke and neurological motor deficits',
      'Sports sprains, tendonitis & athletic injuries'
    ],
    technologyUsed: [
      'AlterG Anti-Gravity Unweighting Treadmill',
      'Biodex Isokinetic Muscle Testing Dynamometer',
      'Computerized Dynamic Posturography (CDP)',
      'Targeted Class-IV Therapeutic Laser'
    ],
    patientPrep: 'Wear loose athletic clothing and comfortable athletic footwear. Hydrate well prior to physical therapy sessions.',
    departmentId: 'dept-ortho',
    durationMinutes: 50,
  }
];
