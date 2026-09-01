import { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    name: "Emergency Care",
    slug: "emergency-care",
    shortDescription: "Immediate medical support for urgent and critical conditions.",
    description: "Our emergency care team provides rapid assessment and medical assistance for urgent healthcare situations 24 hours a day, supported by modern triage and stabilization facilities.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    icon: "ShieldAlert",
    status: "active",
    keyPoints: [
      "24/7 dedicated emergency response team",
      "Advanced life support ambulances",
      "Immediate trauma and critical care stabilization",
      "Seamless transfer to specialized departments"
    ]
  },
  {
    id: 2,
    name: "Diagnostic Services",
    slug: "diagnostic-services",
    shortDescription: "Modern diagnostic facilities supporting accurate and timely evaluation.",
    description: "We offer comprehensive diagnostic imaging and testing services including digital X-ray, Ultrasound, MRI, CT scan, and pathology to aid physicians in accurate diagnosis.",
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=800",
    icon: "Scan",
    status: "active",
    keyPoints: [
      "Advanced imaging technologies",
      "High-precision laboratory testing",
      "Fast and accurate report generation",
      "Interpreted by experienced radiologists"
    ]
  },
  {
    id: 3,
    name: "Preventive Health",
    slug: "preventive-health",
    shortDescription: "Health screenings and preventive programs designed to support long-term wellness.",
    description: "Our preventive health packages are tailored to detect potential health risks early, empowering individuals with actionable insights for a healthier lifestyle.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    icon: "HeartPulse",
    status: "active",
    keyPoints: [
      "Comprehensive executive health checkups",
      "Personalized wellness and lifestyle counseling",
      "Early risk identification for chronic conditions",
      "Follow-up consultations with specialists"
    ]
  },
  {
    id: 4,
    name: "Laboratory Services",
    slug: "laboratory-services",
    shortDescription: "Reliable laboratory testing supported by modern equipment and trained professionals.",
    description: "Our fully equipped pathology laboratory delivers precise blood tests, microbiology, biochemistry, and molecular diagnostics with rigorous quality control.",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=800",
    icon: "FlaskConical",
    status: "active",
    keyPoints: [
      "Advanced automated analyzers",
      "Strict quality assurance protocols",
      "Digital report access for patients",
      "Home sample collection convenience"
    ]
  },
  {
    id: 5,
    name: "Surgical Care",
    slug: "surgical-care",
    shortDescription: "Specialized surgical services supported by experienced medical teams.",
    description: "Our modern surgical suites accommodate general, laparoscopic, orthopedic, and specialized surgeries with emphasis on patient safety, precision, and quick recovery.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    icon: "Activity",
    status: "active",
    keyPoints: [
      "State-of-the-art modular operation theatres",
      "Minimally invasive laparoscopic techniques",
      "Dedicated post-operative recovery units",
      "Expert surgical and anesthesia teams"
    ]
  },
  {
    id: 6,
    name: "Pharmacy Services",
    slug: "pharmacy-services",
    shortDescription: "Convenient access to prescribed medicines and healthcare products.",
    description: "Our in-house 24/7 pharmacy stocks genuine prescription medications, surgical supplies, healthcare devices, and wellness products with professional pharmacist guidance.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    icon: "Pill",
    status: "active",
    keyPoints: [
      "100% genuine pharmaceutical products",
      "Round-the-clock availability",
      "Professional medication counseling",
      "Home delivery options available"
    ]
  },
  {
    id: 7,
    name: "Health Checkups",
    slug: "health-checkups",
    shortDescription: "Comprehensive health packages for individuals and families.",
    description: "Structured health checkup packages designed for different age groups and risk profiles to ensure proactive wellness management.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    icon: "CheckSquare",
    status: "active"
  },
  {
    id: 8,
    name: "Physiotherapy",
    slug: "physiotherapy",
    shortDescription: "Rehabilitation and physical therapy for injury recovery.",
    description: "Expert physical therapy and rehabilitation services to restore mobility, strengthen muscles, and alleviate chronic pain.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    icon: "Activity",
    status: "active"
  },
  {
    id: 9,
    name: "Specialist Consultation",
    slug: "specialist-consultation",
    shortDescription: "Expert medical consultations across multiple specialties.",
    description: "Consult with seasoned specialists across cardiology, neurology, pediatrics, orthopedics, and more for expert clinical opinions.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800",
    icon: "Stethoscope",
    status: "active"
  },
  {
    id: 10,
    name: "Vaccination",
    slug: "vaccination",
    shortDescription: "Immunization programs for children and adults.",
    description: "Complete immunization schedules for infants, children, and adult travelers, administered safely by qualified clinical staff.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
    icon: "Syringe",
    status: "active"
  },
  {
    id: 11,
    name: "Nutrition Counseling",
    slug: "nutrition-counseling",
    shortDescription: "Personalized dietary advice for optimal health and disease management.",
    description: "Professional clinical nutritionists provide tailored diet plans for weight management, diabetes, cardiac care, and recovery.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800",
    icon: "Apple",
    status: "active"
  },
  {
    id: 12,
    name: "Teleconsultation",
    slug: "teleconsultation",
    shortDescription: "Virtual doctor appointments from the comfort of your home.",
    description: "Secure and convenient digital video consultations with MediCare physicians and specialists for follow-ups and non-emergency advice.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    icon: "Video",
    status: "active"
  }
];
