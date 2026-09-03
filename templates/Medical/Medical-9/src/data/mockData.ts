import { Doctor, CareCategory, Program, ResourceArticle, Testimonial, FAQItem, TechDiagnostic } from '../types';

export const TRUST_STATS = [
  { label: 'Specialist Endocrinologists', value: '20+', description: 'Board-certified diabetes care experts' },
  { label: 'Tailored Care Programs', value: '15+', description: 'From prediabetes to complex care' },
  { label: 'Patient Consultations', value: '30K+', description: 'Delivering improved HbA1c outcomes' },
  { label: 'Patient Satisfaction', value: '4.9/5', description: 'Based on verified post-care reviews' }
];

export const CARE_CATEGORIES: CareCategory[] = [
  {
    id: 'type-1',
    title: 'Type 1 Diabetes',
    subtitle: 'Autoimmune & Intensive Insulin Management',
    iconName: 'Activity',
    shortDesc: 'Comprehensive insulin therapy protocols, pump integration, and continuous monitoring for children & adults.',
    fullDesc: 'Type 1 diabetes requires precise, personalized insulin delivery systems and constant physiological awareness. At Gluvia, our multidisciplinary team partners with patients to optimize basal-bolus ratios, leverage smart insulin pumps, and integrate continuous glucose monitoring (CGM) into daily living.',
    symptoms: ['Excessive thirst and frequent urination', 'Unexplained rapid weight loss', 'Constant fatigue and muscle weakness', 'Blurred vision & mood fluctuations'],
    treatments: ['Automated Insulin Delivery (AID) Pump Setup', 'Multiple Daily Injections (MDI) Optimization', 'Continuous Glucose Monitoring (CGM) Calibration', 'Hypoglycemia Unawareness Training'],
    preventionTips: ['Early autoantibody screening for family members', 'Regular ketone and glycemic pattern analysis', 'Personalized carbohydrate-to-insulin ratio reviews']
  },
  {
    id: 'type-2',
    title: 'Type 2 Diabetes',
    subtitle: 'Metabolic Optimization & Remission Pathways',
    iconName: 'HeartPulse',
    shortDesc: 'Evidence-based clinical care combining targeted pharmacotherapy, lifestyle medicine, and metabolic tracking.',
    fullDesc: 'Managing Type 2 diabetes effectively means addressing the root causes of insulin resistance. Our clinical approach integrates modern GLP-1/GIP therapies, personalized dietary strategies, and continuous behavioral support to help patients achieve glycemic stability and, where possible, metabolic remission.',
    symptoms: ['Gradual fatigue after meals', 'Slow-healing cuts or frequent infections', 'Numbness or tingling in feet/hands', 'Darkened skin folds (acanthosis nigricans)'],
    treatments: ['Personalized GLP-1 & SGLT2 Medication Management', 'Continuous Glucose Monitor (CGM) Guided Nutrition', 'Structured Weight & Metabolic Health Programs', 'Microvascular & Macrovascular Risk Reduction'],
    preventionTips: ['30 minutes of daily moderate aerobic + resistance exercise', 'Plant-forward, low-glycemic Mediterranean dietary pattern', 'Routine HbA1c testing twice per year']
  },
  {
    id: 'prediabetes',
    title: 'Prediabetes Care',
    subtitle: 'Reversal & Diabetes Prevention Protocols',
    iconName: 'ShieldAlert',
    shortDesc: 'Proactive intervention strategies designed to halt progression and restore healthy blood glucose levels.',
    fullDesc: 'Prediabetes is a critical window of opportunity. With our targeted lifestyle intervention program, 84% of our prediabetic patients successfully return their blood sugar levels to the normal range within 9 months without long-term pharmaceutical reliance.',
    symptoms: ['Often symptomless; discovered via routine bloodwork', 'Subtle post-meal energy slumps', 'Mild abdominal weight gain'],
    treatments: ['Metabolic Health Baseline Assessment', 'CGM-Guided Food Response Testing', 'Certified Diabetes Educator Coaching', 'Targeted Physical Conditioning Plans'],
    preventionTips: ['Focus on fiber-rich whole foods and lean proteins', 'Reduce ultra-processed sugar and refined carbohydrates', 'Aim for 7-9 hours of restorative sleep nightly']
  },
  {
    id: 'gestational',
    title: 'Gestational Diabetes',
    subtitle: 'Specialized Maternal-Fetal Metabolic Health',
    iconName: 'Baby',
    shortDesc: 'Dedicated care for expecting mothers to ensure optimal maternal blood sugar and healthy fetal development.',
    fullDesc: 'Experiencing elevated blood glucose during pregnancy requires delicate, coordinated expertise. Our maternal endocrinologists work hand-in-hand with your obstetrician to provide daily blood sugar monitoring guidance, safe meal planning, and gentle medical management.',
    symptoms: ['Mild unusual fatigue', 'Increased thirst beyond normal pregnancy changes', 'Detected during 24-28 week glucose tolerance test'],
    treatments: ['Maternal-Fetal Glucose Monitoring', 'Pregnancy-Safe Nutrition & Carbohydrate Distribution', 'Safe Exercise Guidelines during Pregnancy', 'Postpartum Follow-up & Prevention Planning'],
    preventionTips: ['Pre-conception metabolic evaluation', 'Balanced weight gain tracking during pregnancy', 'Postpartum glucose tolerance re-screening at 6-12 weeks']
  },
  {
    id: 'pediatric',
    title: 'Pediatric Diabetes',
    subtitle: 'Child & Adolescent Diabetes Excellence',
    iconName: 'Sparkles',
    shortDesc: 'Compassionate, family-centered endocrinology care empowering young patients to thrive at school and play.',
    fullDesc: 'Children with diabetes deserve care that lets them be kids first. Our pediatric unit combines specialized pediatric endocrinologists, child psychologists, and youth diabetes educators to train families, schools, and young patients in confident self-management.',
    symptoms: ['Bedwetting in previously toilet-trained children', 'Extreme hunger paired with weight loss', 'Irritability and sudden drop in energy'],
    treatments: ['Child-Friendly Insulin Pump & Sensor Technology', 'School Health Plan (504 Plan) Formulations', 'Family Nutritional Counseling', 'Youth Peer Support & Transition Clinics'],
    preventionTips: ['Annual pediatric check-ups with blood sugar screening', 'Encouraging active outdoor play and balanced family meals', 'Fostering open emotional communication around health']
  },
  {
    id: 'foot-care',
    title: 'Diabetic Foot Health',
    subtitle: 'Preventive Podiatry & Wound Prevention',
    iconName: 'Footprints',
    shortDesc: 'Advanced neuropathy screening, gait analysis, and specialized wound care to protect limb health.',
    fullDesc: 'Diabetic peripheral neuropathy and reduced circulation can make small foot injuries dangerous if unmonitored. Our podiatric specialists use thermographic mapping, nerve conduction testing, and custom orthotics to prevent ulcers and preserve mobility.',
    symptoms: ['Numbness, tingling, or burning sensation in feet', 'Loss of temperature sensitivity', 'Slow-healing blisters, cuts, or calluses', 'Changes in foot shape or skin texture'],
    treatments: ['High-Definition Neuropathy & Vascular Testing', 'Custom Diabetic Orthotics & Protective Footwear', 'Advanced Biologic Wound Dressing & Care', 'Nail & Callus Preventive Maintenance'],
    preventionTips: ['Inspect feet daily for cuts, redness, or swelling', 'Never walk barefoot indoors or outdoors', 'Keep feet clean and moisturize daily (avoiding between toes)']
  },
  {
    id: 'eye-screening',
    title: 'Retinal & Ophthalmic Care',
    subtitle: 'Diabetic Retinopathy & Vision Protection',
    iconName: 'Eye',
    shortDesc: 'Non-mydriatic high-resolution retinal scanning and specialized ophthalmic evaluation to safeguard sight.',
    fullDesc: 'Diabetes is the leading cause of preventable vision impairment in working-age adults. High blood sugar can damage delicate retinal blood vessels over time. Our eye center features optical coherence tomography (OCT) for instant, painless retinal mapping.',
    symptoms: ['Floaters or dark spots in vision', 'Fluctuating blurriness', 'Impaired color perception', 'Dark or empty areas in visual field'],
    treatments: ['Ultra-Widefield Digital Retinal Imaging', 'Optical Coherence Tomography (OCT) Diagnostics', 'Anti-VEGF & Laser Photocoagulation Therapy', 'Cataract & Glaucoma Co-Management'],
    preventionTips: ['Schedule an annual comprehensive dilated eye exam', 'Maintain target HbA1c below 7.0%', 'Keep blood pressure under strict control (<130/80 mmHg)']
  },
  {
    id: 'kidney-health',
    title: 'Renal Protection',
    subtitle: 'Diabetic Nephropathy & Early Protection',
    iconName: 'Stethoscope',
    shortDesc: 'Early microalbuminuria detection, eGFR tracking, and renal-protective therapeutic protocols.',
    fullDesc: 'Kidneys filter waste from your blood through millions of tiny capillary clusters that can be stressed by chronic hyperglycemia. Our nephrology team monitors microalbumin excretion and eGFR to catch subtle changes early and apply protective medication regimens.',
    symptoms: ['Swelling in ankles, feet, or hands', 'Foamy or bubbly urine appearance', 'Uncontrolled high blood pressure', 'Unexplained morning nausea'],
    treatments: ['Microalbuminuria & eGFR Precision Monitoring', 'ACEi / ARB & SGLT2 Renal Protective Protocols', 'Renal Nutrition & Protein Calibration', 'Hypertension & Fluid Balance Management'],
    preventionTips: ['Test urine albumin-to-creatinine ratio annually', 'Avoid overuse of NSAID pain relievers', 'Stay well-hydrated and limit excess sodium intake']
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-anika-rao',
    name: 'Dr. Anika Rao',
    title: 'MD, DM (Endocrinology)',
    specialty: 'Lead Endocrinologist & Medical Director',
    experience: '18+ Years Experience',
    languages: ['English', 'Hindi', 'Marathi'],
    education: 'Johns Hopkins School of Medicine | Harvard Clinical Fellow',
    bio: 'Dr. Anika Rao specializes in complex Type 1 diabetes, insulin pump technology, and thyroid-metabolic disorders. She believes in treating the whole human being rather than isolated glucose logs.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    availability: 'Mon, Wed, Fri (9:00 AM - 3:30 PM)',
    specializations: ['Automated Insulin Delivery', 'Complex Type 1 Care', 'Gestational Endocrinology']
  },
  {
    id: 'dr-arjun-mehta',
    name: 'Dr. Arjun Mehta',
    title: 'MD, Fellowship in Diabetology',
    specialty: 'Senior Diabetologist & Metabolic Specialist',
    experience: '14+ Years Experience',
    languages: ['English', 'Gujarati', 'Hindi'],
    education: 'All India Institute of Medical Sciences (AIIMS) | Mayo Clinic Research Scholar',
    bio: 'Dr. Arjun Mehta has pioneered Gluvia’s Type 2 Diabetes Remission Protocol. His research centers on GLP-1 therapy integration and continuous glucose monitoring patterns.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    availability: 'Tue, Thu, Sat (10:00 AM - 5:00 PM)',
    specializations: ['Type 2 Reversal Protocols', 'Cardiovascular Risk Reduction', 'CGM Pattern Analysis']
  },
  {
    id: 'dr-maya-iyer',
    name: 'Dr. Maya Iyer',
    title: 'PhD (Clinical Nutrition), RD, CDE',
    specialty: 'Head of Metabolic Nutrition & Lifestyle Medicine',
    experience: '12+ Years Experience',
    languages: ['English', 'Tamil', 'Kannada'],
    education: 'Stanford University School of Medicine | Certified Diabetes Educator',
    bio: 'Dr. Maya Iyer translates complex nutritional biochemistry into practical, culturally resonant meal plans that empower patients without restrictive diet shaming.',
    image: '/images/dr-maya-iyer.png',
    availability: 'Mon - Thu (8:30 AM - 2:00 PM)',
    specializations: ['Glycemic Index Meal Engineering', 'Weight & Insulin Resistance', 'Plant-Based Diabetes Care']
  },
  {
    id: 'dr-rohan-shah',
    name: 'Dr. Rohan Shah',
    title: 'DPM, FACFAS',
    specialty: 'Diabetic Foot Specialist & Reconstructive Podiatrist',
    experience: '15+ Years Experience',
    languages: ['English', 'Hindi', 'Spanish'],
    education: 'Temple University School of Podiatric Medicine | Cleveland Clinic Fellow',
    bio: 'Dr. Rohan Shah is dedicated to limb preservation. Utilizing thermal imaging and advanced regenerative wound therapies, he has achieved a 98% limb salvage rate in high-risk patients.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
    availability: 'Mon, Wed, Sat (11:00 AM - 6:00 PM)',
    specializations: ['Diabetic Neuropathy Care', 'Limb Preservation', 'Biomechanical Footwear']
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'start',
    name: 'START Program',
    badge: 'Newly Diagnosed',
    targetAudience: 'For individuals diagnosed with diabetes in the past 12 months.',
    description: 'Build a firm foundation of confidence. Learn the science of your body, master glucose monitoring, and establish healthy habits with one-on-one expert guidance.',
    included: [
      'Comprehensive 90-minute Baseline Clinical Evaluation',
      'CGM Sensor Trial with 14-day continuous tracking',
      'Personalized Meal Mapping & Grocery Blueprint',
      '2 Dedicated Consultations with Endocrinologist & Nutritionist',
      '24/7 Digital Care Assistant Access'
    ],
    duration: '8-Week Foundation Course',
    recommendedFor: 'Type 1 & Type 2 Patients (Diagnosis within 1 year)'
  },
  {
    id: 'balance',
    name: 'BALANCE Program',
    badge: 'Most Popular',
    targetAudience: 'For ongoing diabetes management & HbA1c optimization.',
    description: 'Fine-tune your daily numbers. Tackle unexplained glucose spikes, optimize medication doses, and break through HbA1c plateaus without extreme lifestyle disruption.',
    included: [
      'Quarterly Comprehensive Blood & Organ Function Labs',
      'Bi-weekly CGM Analytics Reviews with your Care Team',
      'Medication & Insulin Dose Optimization',
      'Annual Retinal Screening & Foot Neuropathy Assessment',
      'Stress & Sleep Hygiene Metabolic Coaching'
    ],
    duration: '12-Month Continuous Care',
    recommendedFor: 'Type 1, Type 2 & Complex Metabolic Health',
    highlight: true
  },
  {
    id: 'prevent',
    name: 'PREVENT Program',
    badge: 'Prediabetes Reversal',
    targetAudience: 'For individuals with elevated blood sugar or high family risk.',
    description: 'Reverse prediabetes and safeguard your long-term health before permanent pancreatic stress occurs. Proven 84% success rate in returning blood sugar to normal.',
    included: [
      'Oral Glucose Tolerance & Fasting Insulin Testing',
      'Personalized Carbohydrate Sensitivity Mapping',
      'Monthly Group Workshops & Culinary Demos',
      'Custom Resistance & Aerobic Conditioning Guide',
      'Bi-monthly Nurse Educator Check-ins'
    ],
    duration: '6-Month Reversal Protocol',
    recommendedFor: 'Prediabetes, Metabolic Syndrome & Gestational History'
  },
  {
    id: 'complete',
    name: 'COMPLETE Program',
    badge: 'Multi-Organ Care',
    targetAudience: 'For comprehensive multi-organ protection & long-standing diabetes.',
    description: 'All-inclusive hospital care bringing together endocrinology, nephrology, cardiology, podiatry, and ophthalmology under one seamless, dedicated medical board.',
    included: [
      'Full Multidisciplinary Medical Board Evaluation',
      'Monthly In-Clinic or Telehealth Specialist Consultations',
      'Advanced OCT Retinal & Vascular Micro-Screenings',
      'Continuous Renal eGFR & Microalbumin Protections',
      'Priority Emergency Hotline & Direct Specialist Messaging'
    ],
    duration: '12-Month All-Inclusive Shield',
    recommendedFor: 'Long-standing Diabetes (>5 yrs) & Multi-organ Vigilance'
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    num: '01',
    title: 'Multidisciplinary Medical Expertise',
    desc: 'Our endocrinologists work directly alongside podiatrists, ophthalmologists, renal specialists, and dietitians in one integrated clinic.'
  },
  {
    num: '02',
    title: 'Personalized Biological Plans',
    desc: 'No cookie-cutter advice. Every protocol is custom-engineered based on your continuous glucose curves, lab biomarkers, and daily routine.'
  },
  {
    num: '03',
    title: 'Culturally Resonant Nutrition Guidance',
    desc: 'We tailor meal planning to your regional cuisine and personal preferences, avoiding unrealistic restrictive diets.'
  },
  {
    num: '04',
    title: 'Continuous Sensor Monitoring',
    desc: 'We leverage modern CGM wearables and smart analytics to detect subtle glucose trends before they become troubling spikes or drops.'
  },
  {
    num: '05',
    title: 'Empathetic Lifestyle Coaching',
    desc: 'Diabetes management is emotional as well as physical. We provide non-judgmental support, sleep optimization, and stress management.'
  },
  {
    num: '06',
    title: 'Lifelong Patient Partnership',
    desc: 'From initial screening through decades of active living, our team stands by you with proactive preventive care and warm human connection.'
  }
];

export const JOURNEY_STEPS = [
  { step: '01', title: 'Comprehensive Baseline Assessment', desc: 'Detailed lab work, CGM placement, vascular screening, and lifestyle audit.' },
  { step: '02', title: 'Personalized Care Blueprint', desc: 'Collaborative session with endocrinologist and nutritionist to build your goal roadmap.' },
  { step: '03', title: 'Targeted Medical & Tech Therapy', desc: 'Optimizing medications, insulin delivery pumps, or GLP-1 therapy tailored to your biology.' },
  { step: '04', title: 'Continuous Lifestyle & Meal Support', desc: 'Practical meal adjustments, exercise guidelines, and daily glucose feedback.' },
  { step: '05', title: 'Active CGM & Biomarker Monitoring', desc: 'Ongoing remote pattern analysis to catch fluctuations early and prevent complications.' },
  { step: '06', title: 'Sustained Health & Long-Term Care', desc: 'Regular check-ins, organ health screenings, and lifelong peace of mind.' }
];

export const TECH_DIAGNOSTICS: TechDiagnostic[] = [
  {
    id: 'cgm-tech',
    title: 'Continuous Glucose Monitoring (CGM)',
    category: 'Sensors & Analytics',
    shortDesc: 'Pain-free 24/7 subcutaneous sensors providing real-time glucose velocity and directional arrows.',
    fullDesc: 'Gone are the days of relying exclusively on 5 finger pricks per day. Modern CGM sensors measure interstitial fluid glucose every 5 minutes, mapping complete 24-hour glycemic trends, night-time stability, and post-meal spikes.',
    benefits: ['Real-time low/high alarms', 'No routine finger pricks needed', 'Identifies hidden nocturnal hypoglycemia', 'Direct syncing with care team'],
    accuracy: 'MARD Rating < 9.0%',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hba1c-tech',
    title: 'Point-of-Care HbA1c Lab Testing',
    category: 'Diagnostics',
    shortDesc: 'Clinical-grade 5-minute capillary blood testing measuring 90-day average blood glucose concentration.',
    fullDesc: 'Our on-site diagnostic laboratory uses HPLC capillary photometry to deliver certified HbA1c results in under five minutes during your consultation, eliminating long waiting periods for lab mailers.',
    benefits: ['Instant results during your visit', 'Certified IFCC / NGSP precision', 'Immediate care plan adjustment', 'Micro-sample volume required'],
    accuracy: 'NGSP Certified Laboratory Standard',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'retinal-tech',
    title: 'Non-Mydriatic Ultra-Wide OCT Scanning',
    category: 'Ophthalmology',
    shortDesc: 'Digital high-resolution retinal scanning without dilating eye drops for immediate macula assessment.',
    fullDesc: 'Using artificial intelligence enhanced optical coherence tomography, we capture 200-degree views of the retina to detect early microaneurysms, macular edema, or neovascularization before vision changes occur.',
    benefits: ['No waiting for eye drop dilation to fade', 'Instant AI microvascular mapping', 'Painless 2-minute scanning procedure', 'Comparative longitudinal tracking'],
    accuracy: '99.2% Sensitivity for Early Retinopathy',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'foot-tech',
    title: 'Infrared Thermographic Foot Assessment',
    category: 'Podiatry & Neuropathy',
    shortDesc: 'Thermal skin temperature mapping to identify localized inflammation and high-ulceration risk hotspots.',
    fullDesc: 'Inflammation precedes diabetic foot ulcers by weeks. Thermal cameras detect temperature differentials down to 0.1°C between symmetrical foot zones, giving us a powerful early warning system to protect limb integrity.',
    benefits: ['Detects tissue stress weeks before skin breaks', 'Quantitative vibration perception testing', 'Custom 3D scanned orthotics design', 'Completely non-invasive'],
    accuracy: 'Thermal Resolution +/- 0.05°C',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Finally, diabetes care that feels like someone is looking at the whole picture — not just my glucose numbers. Dr. Rao helped me get onto a CGM and my HbA1c dropped from 8.6% to 6.4% in 6 months.',
    author: 'Priya Sharma',
    role: 'Patient (Type 1 Diabetes)',
    careDuration: 'Gluvia Patient for 2 Years',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: '2',
    quote: 'Every appointment feels clear, calm, and practical. Dr. Mehta explained how my diet, stress, and sleep interacted with my blood sugar. I no longer feel anxious about my health.',
    author: 'Arvind Kulkarni',
    role: 'Patient (Type 2 Diabetes)',
    careDuration: 'Gluvia Patient for 1 Year',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: '3',
    quote: 'When I was diagnosed with gestational diabetes during my 26th week, I was terrified. The maternal care team at Gluvia guided me daily. My baby boy was born perfectly healthy!',
    author: 'Neha Deshmukh',
    role: 'Patient (Gestational Care)',
    careDuration: 'Maternal Care Alumna',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: '4',
    quote: 'The podiatry clinic caught a subtle circulation change in my left foot that my previous clinic missed. Their thermal mapping saved me from serious nerve complications.',
    author: 'Rajesh Nair',
    role: 'Patient (Foot Care & Nephrology)',
    careDuration: 'Gluvia Patient for 3 Years',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300'
  }
];

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    id: 'art-1',
    title: 'Understanding HbA1c: What Your 3-Month Average Really Means',
    category: 'Diabetes Basics',
    readTime: '5 min read',
    author: 'Dr. Anika Rao',
    date: 'August 14, 2026',
    summary: 'Demystifying the glycated hemoglobin test and how subtle daily habits compound into long-term organ protection.',
    content: [
      'HbA1c measures the percentage of hemoglobin proteins in your red blood cells coated with sugar (glycated). Because red blood cells live for approximately 120 days, this blood test reflects your average blood sugar levels over the past 2 to 3 months.',
      'Why is HbA1c such an essential metric? While daily blood sugar readings capture instantaneous moments, HbA1c provides a broad panoramic view. An HbA1c below 5.7% is normal; 5.7% to 6.4% indicates prediabetes; and 6.5% or higher on two separate tests indicates diabetes.',
      'A key takeaway: reducing your HbA1c by just 1% significantly lowers the risk of microvascular complications (eye, kidney, and nerve damage) by up to 37%. Small, consistent dietary and movement adjustments yield profound results over time.'
    ],
    keyTakeaways: [
      'Reflects 90-day average blood sugar concentration',
      'Target for most adults with diabetes is under 7.0%',
      'Every 1% reduction drastically lowers microvascular risk'
    ],
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'art-2',
    title: 'Simple Meal Planning Strategies for Busy Schedules',
    category: 'Nutrition',
    readTime: '7 min read',
    author: 'Dr. Maya Iyer',
    date: 'August 20, 2026',
    summary: 'How to structure balanced, low-glycemic meals using the Diabetes Plate Method without spending hours in the kitchen.',
    content: [
      'Managing blood glucose does not mean cooking separate, bland meals. The key is mastering the Diabetes Plate Method: a simple visual framework that balances macronutrients effortlessly.',
      'Divide a standard 9-inch dinner plate into three sections: Fill 50% with non-starchy vegetables (spinach, broccoli, peppers, cucumbers), 25% with lean protein (fish, tofu, chicken, legumes), and 25% with complex carbohydrates (quinoa, brown rice, sweet potato).',
      'Pairing carbohydrates with healthy fats and fiber slows gastric emptying, creating a gentle glucose curve rather than a steep spike and sudden crash.'
    ],
    keyTakeaways: [
      'Half your plate non-starchy vegetables',
      'One quarter lean protein, one quarter complex carbs',
      'Always pair carbs with protein and healthy fats to buffer spikes'
    ],
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'art-3',
    title: 'Why Daily Foot Checks Matter & 5 Steps to Prevent Neuropathy',
    category: 'Foot Health',
    readTime: '4 min read',
    author: 'Dr. Rohan Shah',
    date: 'August 02, 2026',
    summary: 'A practical daily foot examination routine to detect early nerve changes, skin breakdown, or circulation issues.',
    content: [
      'Diabetic peripheral neuropathy can reduce pain sensitivity in the feet. Consequently, a small blister or pebble in your shoe might go unnoticed, potentially developing into a severe skin breakdown.',
      'Establish a 60-second daily foot inspection routine. Check the tops, soles, heels, and between all toes under good lighting or using a small mirror.',
      'Key preventive rules: Never walk barefoot, even indoors; always feel inside your shoes before slipping them on; moisturize dry skin daily while avoiding the spaces between toes; and clip nails straight across.'
    ],
    keyTakeaways: [
      'Perform a 60-second visual inspection daily',
      'Never walk barefoot indoors or outdoors',
      'Contact your care team immediately if you spot a slow-healing cut'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'art-4',
    title: 'Prediabetes: What Happens Next & How to Reverse It',
    category: 'Prevention',
    readTime: '6 min read',
    author: 'Dr. Arjun Mehta',
    date: 'July 28, 2026',
    summary: 'Understanding insulin sensitivity and the clinical protocol to restore blood glucose levels back to the normal range.',
    content: [
      'Receiving a prediabetes diagnosis can be stressful, but medically it is an encouraging window of opportunity. The pancreas is still producing insulin, but muscle and liver cells have become resistant to its signal.',
      'By introducing modest, sustainable adjustments—such as losing 5% to 7% of body weight if carrying excess weight and engaging in 150 minutes of weekly activity—you reduce the progression risk to Type 2 diabetes by over 58%.',
      'At Gluvia, our PREVENT program combines continuous glucose sensor trial periods with behavioral coaching to help patients reverse prediabetes within 6 to 9 months.'
    ],
    keyTakeaways: [
      'Prediabetes is 100% reversible with proactive care',
      '150 minutes of weekly activity improves insulin sensitivity',
      'Early action preserves pancreatic beta-cell function'
    ],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'art-5',
    title: 'Maximizing Your Continuous Glucose Monitor (CGM)',
    category: 'Medication',
    readTime: '5 min read',
    author: 'Dr. Anika Rao',
    date: 'August 18, 2026',
    summary: 'How to interpret trend arrows, set intelligent alarm thresholds, and avoid reactive over-correcting.',
    content: [
      'Continuous Glucose Monitors (CGMs) have transformed diabetes care by replacing static snapshots with real-time continuous arrows showing where your glucose is heading.',
      'One common pitfall for new CGM users is "rage bolusing" or over-eating when seeing a rising or falling trend arrow. Remember that interstitial fluid sensors lag blood glucose by 5 to 10 minutes.',
      'Work with your endocrinologist to set customized high and low alarm thresholds that alert you to actionable trends without causing alarm fatigue.'
    ],
    keyTakeaways: [
      'Focus on "Time in Range" (70-180 mg/dL) rather than single peaks',
      'Avoid over-correcting rising trends too rapidly',
      'Share sensor reports with your physician prior to visits'
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'art-6',
    title: 'The Science of Exercise & Glucose Uptake',
    category: 'Exercise',
    readTime: '6 min read',
    author: 'Dr. Maya Iyer',
    date: 'August 10, 2026',
    summary: 'How muscle contraction absorbs glucose independent of insulin and how to timing workouts effectively.',
    content: [
      'When your skeletal muscles contract during physical activity, they activate a specialized glucose transporter called GLUT4 that moves glucose out of the bloodstream and into muscle cells without needing insulin.',
      'This GLUT4 mechanism remains active for up to 24 hours after exercise, significantly enhancing overall insulin sensitivity.',
      'A simple 10-15 minute walk right after meals helps flatten post-prandial glucose spikes naturally.'
    ],
    keyTakeaways: [
      'Muscle contraction absorbs sugar independent of insulin',
      'A 10-minute post-meal walk significantly blunts glucose spikes',
      'Combine aerobic exercises with light resistance training'
    ],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is diabetes and how does Gluvia Diabetes Institute specialize in it?',
    answer: 'Diabetes is a metabolic condition characterized by elevated blood glucose levels due to insufficient insulin production (Type 1) or insulin resistance (Type 2). Gluvia Diabetes Institute is a dedicated tertiary care center uniting endocrinologists, podiatrists, ophthalmologists, renal specialists, and metabolic dietitians under one roof for comprehensive care.'
  },
  {
    id: 'faq-2',
    category: 'Monitoring',
    question: 'How often should I check my blood sugar levels?',
    answer: 'Testing frequency depends on your specific type of diabetes and treatment plan. Patients on intensive insulin therapy typically benefit from continuous glucose monitors (CGM) or testing 4-6 times daily. Patients managed with lifestyle or oral medications may test fasting and post-meal levels as recommended by their physician.'
  },
  {
    id: 'faq-3',
    category: 'Diagnostics',
    question: 'What is HbA1c and why is it checked every 3 to 6 months?',
    answer: 'HbA1c measures the percentage of hemoglobin coated with glucose, reflecting your average blood sugar levels over the preceding 2 to 3 months. It provides an objective benchmark of overall glycemic control and helps us tailor your care plan to prevent long-term microvascular complications.'
  },
  {
    id: 'faq-4',
    category: 'Prevention',
    question: 'Can Type 2 diabetes or prediabetes be reversed?',
    answer: 'Prediabetes can frequently be reversed back to normal glucose tolerance through structured lifestyle intervention. For Type 2 diabetes, achieving metabolic remission (normal HbA1c without glucose-lowering medication for 3+ months) is achievable for many individuals, particularly when caught early through our PREVENT and BALANCE programs.'
  },
  {
    id: 'faq-5',
    category: 'Consultation',
    question: 'What happens during my first consultation at Gluvia?',
    answer: 'Your initial consultation lasts 60 to 90 minutes. It includes a complete metabolic history review, physical examination, microvascular risk screening, on-site point-of-care HbA1c testing if needed, and a collaborative discussion to design your personalized care blueprint.'
  },
  {
    id: 'faq-6',
    category: 'Nutrition',
    question: 'Do you provide personalized nutrition counseling?',
    answer: 'Yes! Our clinical nutritionists work closely with you to design meals that honor your cultural background, taste preferences, and daily routine. We avoid restrictive diets and focus on sustainable glycemic balance using the Diabetes Plate Method and CGM feedback.'
  }
];

export const MOCK_GLUCOSE_DATA = {
  today: [
    { time: 'Morning (Fasting)', value: 104, label: '7:00 AM', status: 'Normal' },
    { time: 'Afternoon (Post-Lunch)', value: 128, label: '1:30 PM', status: 'Optimal' },
    { time: 'Evening (Pre-Dinner)', value: 112, label: '6:30 PM', status: 'Normal' },
    { time: 'Night (Bedtime)', value: 108, label: '10:00 PM', status: 'Optimal' }
  ],
  week: [
    { time: 'Mon', value: 110, label: 'Mon Avg', status: 'Normal' },
    { time: 'Tue', value: 115, label: 'Tue Avg', status: 'Normal' },
    { time: 'Wed', value: 106, label: 'Wed Avg', status: 'Optimal' },
    { time: 'Thu', value: 122, label: 'Thu Avg', status: 'Normal' },
    { time: 'Fri', value: 108, label: 'Fri Avg', status: 'Optimal' },
    { time: 'Sat', value: 114, label: 'Sat Avg', status: 'Normal' },
    { time: 'Sun', value: 105, label: 'Sun Avg', status: 'Optimal' }
  ],
  month: [
    { time: 'Week 1', value: 118, label: 'W1 Avg', status: 'Normal' },
    { time: 'Week 2', value: 112, label: 'W2 Avg', status: 'Optimal' },
    { time: 'Week 3', value: 109, label: 'W3 Avg', status: 'Optimal' },
    { time: 'Week 4', value: 106, label: 'W4 Avg', status: 'Optimal' }
  ]
};
